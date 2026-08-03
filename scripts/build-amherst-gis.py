"""Build the public, privacy-preserving Amherst soils/foundations GIS bundle.

Inputs are downloaded from official agency services into tmp/amherst-gis. The
script clips those layers to the Town of Amherst, generalizes the 2005 USACE
foundation-symbol map into coarse density cells, and exports GeoJSON,
Shapefile, and a source/confidence catalog.
"""

from __future__ import annotations

import csv
import json
import math
import shutil
import sys
import zipfile
from pathlib import Path

from PIL import Image
import shapefile
from shapely.geometry import GeometryCollection, MultiPolygon, Polygon, box, mapping, shape
from shapely.geometry.polygon import orient


ROOT = Path(__file__).resolve().parents[1]
INPUT = ROOT / "tmp" / "amherst-gis"
OUTPUT = ROOT / "public" / "data" / "amherst-foundations"
SHAPEFILES = OUTPUT / "shapefiles"
REPORT_MAP = ROOT / "tmp" / "pdfs" / "rendered" / "damage-maps-070.png"
REVIEWED = "2026-08-03"

LACUSTRINE_SERIES = ("cheektowaga", "cosad", "lakemont", "niagara", "odessa")


def load_geojson(path: Path) -> dict:
    return json.loads(path.read_text(encoding="utf-8-sig"))


def clean_polygonal(geometry):
    if geometry.is_empty:
        return None
    if not geometry.is_valid:
        geometry = geometry.buffer(0)
    if geometry.is_empty:
        return None
    if isinstance(geometry, (Polygon, MultiPolygon)):
        return geometry
    if isinstance(geometry, GeometryCollection):
        polygons = [part for part in geometry.geoms if isinstance(part, (Polygon, MultiPolygon))]
        if not polygons:
            return None
        flattened = []
        for polygon in polygons:
            flattened.extend(polygon.geoms if isinstance(polygon, MultiPolygon) else [polygon])
        return MultiPolygon(flattened) if len(flattened) > 1 else flattened[0]
    return None


def clip_features(collection: dict, boundary, property_builder, simplify=0.000015) -> list[dict]:
    output = []
    for index, feature in enumerate(collection.get("features", []), start=1):
        geometry = clean_polygonal(shape(feature["geometry"]).intersection(boundary))
        if geometry is None:
            continue
        if simplify:
            geometry = clean_polygonal(geometry.simplify(simplify, preserve_topology=True))
        if geometry is None:
            continue
        output.append(
            {
                "type": "Feature",
                "geometry": mapping(geometry),
                "properties": property_builder(feature.get("properties", {}), index),
            }
        )
    return output


def feature_collection(features: list[dict], *, name: str, description: str) -> dict:
    return {
        "type": "FeatureCollection",
        "name": name,
        "description": description,
        "generated": REVIEWED,
        "features": features,
    }


def write_geojson(filename: str, collection: dict) -> None:
    (OUTPUT / filename).write_text(
        json.dumps(collection, ensure_ascii=False, separators=(",", ":")),
        encoding="utf-8",
    )


def soil_properties(properties: dict, index: int) -> dict:
    soil_name = str(properties.get("SOIL_NAME") or "Unlabeled map unit")
    is_report_series = any(series in soil_name.lower() for series in LACUSTRINE_SERIES)
    return {
        "feature_id": f"soil-{index:04d}",
        "layer_type": "soil_context",
        "musym": properties.get("MUSYM"),
        "soil_name": soil_name,
        "hydric_status": properties.get("HYDRICSTAT") or properties.get("HYDRIC_C"),
        "drainage_class": properties.get("DRAINAGE_C"),
        "frost_action": properties.get("FROSTACT_C"),
        "water_table_low": properties.get("WTDEPL_F"),
        "water_table_high": properties.get("WTDEPH_F"),
        "report_context": (
            "One of five lacustrine soil series compared in the 2005 USACE study"
            if is_report_series
            else "Other mapped soil unit"
        ),
        "source_id": "erie-detailed-soils",
        "confidence": "documented_geometry",
        "causal_claim": "none",
        "last_reviewed": REVIEWED,
    }


def wetland_properties(properties: dict, index: int) -> dict:
    return {
        "feature_id": f"nwi-{index:04d}",
        "layer_type": "current_nwi_wetland",
        "wetland_code": properties.get("Wetlands.ATTRIBUTE"),
        "wetland_type": properties.get("Wetlands.WETLAND_TYPE"),
        "acres_source": properties.get("Wetlands.ACRES"),
        "source_id": "fws-nwi-current",
        "confidence": "documented_geometry",
        "time_scope": "Current NWI display service; not proof of historic fill",
        "causal_claim": "none",
        "last_reviewed": REVIEWED,
    }


def geology_properties(properties: dict, index: int) -> dict:
    unit_name = properties.get("Descriptio") or properties.get("MATERIAL") or "Unlabeled unit"
    return {
        "feature_id": f"geology-{index:03d}",
        "layer_type": "surficial_geology",
        "material_code": properties.get("MATERIAL"),
        "unit_name": unit_name,
        "report_context": (
            "Broad lacustrine silt and clay unit discussed in the 2005 USACE study"
            if unit_name == "Lacustrine Silt and Clay"
            else "Regional geologic context"
        ),
        "source_id": "nysm-surficial-geology",
        "confidence": "documented_geometry",
        "scale_note": "1:250,000 source; not suitable for parcel conclusions",
        "causal_claim": "none",
        "last_reviewed": REVIEWED,
    }


def report_density_cells(boundary) -> list[dict]:
    """Convert colored symbols in USACE Figure 23 to coarse, privacy-safe cells.

    This deliberately does not reproduce household points. The affine alignment
    is approximate and the output records relative symbol density only.
    """

    image = Image.open(REPORT_MAP).convert("RGB")
    pixels = image.load()
    # Geographic frame of Figure 23, calibrated to the official town envelope.
    left, top, right, bottom = 280, 190, 1084, 1282
    min_lon, min_lat, max_lon, max_lat = boundary.bounds
    columns, rows = 18, 22
    cell_width = (right - left) / columns
    cell_height = (bottom - top) / rows
    candidates = []

    for row in range(rows):
        for column in range(columns):
            x0 = int(left + column * cell_width)
            x1 = int(left + (column + 1) * cell_width)
            y0 = int(top + row * cell_height)
            y1 = int(top + (row + 1) * cell_height)
            permit_pixels = 0
            inquiry_pixels = 0
            for y in range(y0, y1):
                for x in range(x0, x1):
                    red, green, blue = pixels[x, y]
                    if red > 150 and blue > 75 and green < 120 and red > green * 1.5:
                        permit_pixels += 1
                    elif green > 85 and red < 80 and blue < 185 and green > red * 1.7:
                        inquiry_pixels += 1
            colored = permit_pixels + inquiry_pixels
            if colored < 20:
                continue

            west = min_lon + ((x0 - left) / (right - left)) * (max_lon - min_lon)
            east = min_lon + ((x1 - left) / (right - left)) * (max_lon - min_lon)
            north = max_lat - ((y0 - top) / (bottom - top)) * (max_lat - min_lat)
            south = max_lat - ((y1 - top) / (bottom - top)) * (max_lat - min_lat)
            geometry = clean_polygonal(box(west, south, east, north).intersection(boundary))
            if geometry is not None and geometry.area > 0.000001:
                candidates.append((geometry, permit_pixels, inquiry_pixels, colored))

    values = sorted(candidate[3] for candidate in candidates)
    moderate_cutoff = values[max(0, math.floor(len(values) * 0.45) - 1)]
    high_cutoff = values[max(0, math.floor(len(values) * 0.78) - 1)]
    features = []
    for index, (geometry, permit_pixels, inquiry_pixels, colored) in enumerate(candidates, start=1):
        density = "higher" if colored >= high_cutoff else "moderate" if colored >= moderate_cutoff else "lower"
        if density == "lower":
            continue
        features.append(
            {
                "type": "Feature",
                "geometry": mapping(geometry),
                "properties": {
                    "feature_id": f"usace-density-{index:03d}",
                    "layer_type": "2005_report_symbol_density",
                    "density_class": density,
                    "symbol_pixels": colored,
                    "permit_color_pixels": permit_pixels,
                    "inquiry_color_pixels": inquiry_pixels,
                    "report_totals": "501 repair permits (1987-2004); 594 inquiries (2000-March 2005)",
                    "source_id": "usace-2005-figure-23",
                    "confidence": "agency_map_approximation",
                    "privacy_treatment": "Household points replaced with coarse relative-density cells",
                    "boundary_note": "Approximate affine alignment from the published report figure",
                    "causal_claim": "none",
                    "last_reviewed": REVIEWED,
                },
            }
        )
    return features


def audubon_overlay(boundary) -> list[dict]:
    # Simplified context polygon from the Town's stated Sweet Home / Campbell /
    # North French / UB North-Ellicott Creek study-area limits.
    geometry = clean_polygonal(
        Polygon(
            [
                (-78.8090, 43.0000),
                (-78.7690, 43.0000),
                (-78.7690, 43.0425),
                (-78.8090, 43.0425),
                (-78.8090, 43.0000),
            ]
        ).intersection(boundary)
    )
    return [
        {
            "type": "Feature",
            "geometry": mapping(geometry),
            "properties": {
                "feature_id": "audubon-study-area-context",
                "layer_type": "neighborhood_context",
                "name": "Audubon Development Plan study area",
                "source_id": "amherst-audubon-plan",
                "confidence": "source_aligned_approximation",
                "boundary_note": "Simplified orientation overlay; not a zoning or surveyed boundary",
                "stated_limits": "UB North Campus and Ellicott Creek; Campbell Boulevard; Sweet Home Road; North French Road",
                "causal_claim": "none",
                "last_reviewed": REVIEWED,
            },
        }
    ]


def shapefile_parts(geometry) -> list[list[list[float]]]:
    polygons = list(geometry.geoms) if isinstance(geometry, MultiPolygon) else [geometry]
    parts = []
    for polygon in polygons:
        polygon = orient(polygon, sign=-1.0)
        parts.append([[float(x), float(y)] for x, y in polygon.exterior.coords])
        parts.extend([[[float(x), float(y)] for x, y in ring.coords] for ring in polygon.interiors])
    return parts


def export_polygon_shapefile(name: str, features: list[dict], fields: list[tuple[str, str, int, int, str]]) -> None:
    base = SHAPEFILES / name
    writer = shapefile.Writer(str(base), shapeType=shapefile.POLYGON, encoding="utf-8")
    for field_name, field_type, size, decimal, _property_name in fields:
        writer.field(field_name, field_type, size=size, decimal=decimal)
    for feature in features:
        geometry = shape(feature["geometry"])
        writer.poly(shapefile_parts(geometry))
        properties = feature["properties"]
        values = []
        for *_rest, property_name in fields:
            value = properties.get(property_name)
            values.append(value.strip() if isinstance(value, str) else value)
        writer.record(*values)
    writer.close()
    base.with_suffix(".prj").write_text(
        'GEOGCS["WGS 84",DATUM["WGS_1984",SPHEROID["WGS 84",6378137,298.257223563]],'
        'PRIMEM["Greenwich",0],UNIT["degree",0.0174532925199433]]',
        encoding="ascii",
    )
    base.with_suffix(".cpg").write_text("UTF-8", encoding="ascii")


def write_source_catalog() -> None:
    fields = [
        "source_id", "title", "agency", "publication_date", "accessed_date", "url",
        "layer_role", "spatial_scale", "time_period", "confidence_class", "status",
        "limitations", "license_or_use_notes",
    ]
    rows = [
        {
            "source_id": "usace-2005-study",
            "title": "Town of Amherst Soils and Foundation Stability Study",
            "agency": "U.S. Army Corps of Engineers / Town of Amherst",
            "publication_date": "2005-11",
            "accessed_date": REVIEWED,
            "url": "https://amherst.ny.us/pdf/building/soilsstudy/TOA_Soils_Foundation_Study.pdf",
            "layer_role": "Methods, findings, soils comparison, wetlands context and foundation-record totals",
            "spatial_scale": "Town-wide; report figures",
            "time_period": "Permits 1987-2004; inquiries 2000-March 2005",
            "confidence_class": "documented_report",
            "status": "included",
            "limitations": "No single cause identified; most homes reportedly performed as expected; household locations withheld here",
            "license_or_use_notes": "Government report; cite report and figure",
        },
        {
            "source_id": "usace-2005-figure-23",
            "title": "Figure 23: Foundation Repair Permits and Foundation Inquiries",
            "agency": "U.S. Army Corps of Engineers / Town of Amherst",
            "publication_date": "2005-11",
            "accessed_date": REVIEWED,
            "url": "https://amherst.ny.us/pdf/building/soilsstudy/TOA_Soils_Foundation_Study.pdf#page=70",
            "layer_role": "Privacy-preserving relative-density reconstruction",
            "spatial_scale": "Coarse Atlas cells aligned from published figure",
            "time_period": "1987-March 2005",
            "confidence_class": "agency_map_approximation",
            "status": "included",
            "limitations": "Not exact counts, addresses, surveyed boundaries, current conditions, or a causal model",
            "license_or_use_notes": "Derived from government report figure; methodology disclosed",
        },
        {
            "source_id": "fws-nwi-current",
            "title": "National Wetlands Inventory Wetlands Map Service",
            "agency": "U.S. Fish and Wildlife Service",
            "publication_date": "Current service",
            "accessed_date": REVIEWED,
            "url": "https://fwspublicservices.wim.usgs.gov/wetlandsmapservice/rest/services/Wetlands/MapServer/0",
            "layer_role": "Current mapped wetlands",
            "spatial_scale": "NWI source mapping",
            "time_period": "Current service snapshot",
            "confidence_class": "documented_geometry",
            "status": "included",
            "limitations": "Not a regulatory delineation and not evidence that unshown land was never wetland or fill",
            "license_or_use_notes": "Federal public data; retain attribution",
        },
        {
            "source_id": "erie-detailed-soils",
            "title": "Detailed Soils",
            "agency": "Erie County GIS; source attributes follow USDA soil-survey conventions",
            "publication_date": "Current service",
            "accessed_date": REVIEWED,
            "url": "https://gis.erie.gov/server/rest/services/OGIS/ErieCountyNY/MapServer/5",
            "layer_role": "Soil map units and hydric/drainage context",
            "spatial_scale": "Soil survey map unit; not parcel-specific",
            "time_period": "Current service snapshot",
            "confidence_class": "documented_geometry",
            "status": "included",
            "limitations": "Map-unit generalization; site work requires borings and geotechnical evaluation",
            "license_or_use_notes": "Public county GIS service; retain attribution",
        },
        {
            "source_id": "nrcs-ssurgo-reference",
            "title": "Soil Survey Geographic Database (SSURGO)",
            "agency": "USDA Natural Resources Conservation Service",
            "publication_date": "Current database",
            "accessed_date": REVIEWED,
            "url": "https://www.nrcs.usda.gov/resources/data-and-reports/soil-survey-geographic-database-ssurgo",
            "layer_role": "Authoritative soil-data method reference",
            "spatial_scale": "Survey-dependent map units",
            "time_period": "Current database",
            "confidence_class": "context_only",
            "status": "included as reference",
            "limitations": "The exported geometry is the Erie County public Detailed Soils service, not a direct SSURGO download",
            "license_or_use_notes": "Federal public data",
        },
        {
            "source_id": "nysm-surficial-geology",
            "title": "Niagara Surficial Geology Sheet",
            "agency": "New York State Museum / New York State Geological Survey; Erie County display service",
            "publication_date": "1999 digital release",
            "accessed_date": REVIEWED,
            "url": "https://gis.erie.gov/server/rest/services/ECS/NRI_Data_Service/FeatureServer/3",
            "layer_role": "Regional surficial geology",
            "spatial_scale": "1:250,000",
            "time_period": "Regional geologic mapping",
            "confidence_class": "documented_geometry",
            "status": "included",
            "limitations": "Regional context only; using at larger scale does not increase accuracy",
            "license_or_use_notes": "Public state/county GIS; retain attribution",
        },
        {
            "source_id": "erie-historic-aerials",
            "title": "Erie County Historical Aerial Photographs (1926-1929 and 1951)",
            "agency": "Erie County",
            "publication_date": "1926-1929; 1951",
            "accessed_date": REVIEWED,
            "url": "https://www3.erie.gov/aerial-photos/aerial-photographs",
            "layer_role": "Historic land-cover and wetland-change comparison",
            "spatial_scale": "Individual scanned aerial photographs",
            "time_period": "1926-1929 and 1951",
            "confidence_class": "historical_imagery_interpretation",
            "status": "indexed; polygon review pending",
            "limitations": "Plate boundaries are approximate and north alignment is not guaranteed; interpretation needs georeferencing and corroboration",
            "license_or_use_notes": "County scans; cite flight/year and image identifier",
        },
        {
            "source_id": "nys-erie-orthoimagery",
            "title": "Erie County Orthoimagery Downloads",
            "agency": "New York State GIS Program Office",
            "publication_date": "Multiple years",
            "accessed_date": REVIEWED,
            "url": "https://gis.ny.gov/erie-county-orthoimagery-downloads",
            "layer_role": "Modern aerial comparison",
            "spatial_scale": "Orthophoto tiles",
            "time_period": "2002-2024 listed series",
            "confidence_class": "documented_imagery",
            "status": "indexed; polygon review pending",
            "limitations": "Imagery shows surface appearance, not subsurface conditions or causation",
            "license_or_use_notes": "Public state imagery; follow dataset metadata",
        },
        {
            "source_id": "usgs-topoview",
            "title": "topoView historical topographic maps",
            "agency": "U.S. Geological Survey",
            "publication_date": "Multiple editions",
            "accessed_date": REVIEWED,
            "url": "https://www.usgs.gov/tools/topoview",
            "layer_role": "Historic drainage, wetland and development comparison",
            "spatial_scale": "Quadrangle maps; varies by edition",
            "time_period": "Historic editions through present",
            "confidence_class": "historical_map_interpretation",
            "status": "indexed; polygon review pending",
            "limitations": "Cartographic symbols and survey dates vary; absence of a symbol is not proof of absence",
            "license_or_use_notes": "Federal public maps; cite quadrangle and edition year",
        },
        {
            "source_id": "amherst-audubon-plan",
            "title": "Audubon Development Plan Update",
            "agency": "Town of Amherst",
            "publication_date": "2022-11-07",
            "accessed_date": REVIEWED,
            "url": "https://www.amherst.ny.us/content/projects.php?dept_id=dept_15&neworder=00&proj_id=proj_20",
            "layer_role": "Audubon study-area orientation overlay",
            "spatial_scale": "Planning study area",
            "time_period": "Current planning context",
            "confidence_class": "source_aligned_approximation",
            "status": "included",
            "limitations": "Atlas polygon simplifies the Town's written boundary description and is not a zoning boundary",
            "license_or_use_notes": "Town planning source; cite project page",
        },
        {
            "source_id": "amherst-records-gap",
            "title": "Foundation permit and complaint records after March 2005",
            "agency": "Town of Amherst",
            "publication_date": "Not publicly indexed as a GIS dataset",
            "accessed_date": REVIEWED,
            "url": "https://www.amherst.ny.us/pdf/building/generalinformation/gi_foilreq.pdf",
            "layer_role": "Potential future aggregate update",
            "spatial_scale": "Unknown until records review",
            "time_period": "After March 2005",
            "confidence_class": "records_pending",
            "status": "not mapped",
            "limitations": "Requires records request, privacy review, deduplication and aggregation before publication",
            "license_or_use_notes": "Do not publish household identifiers",
        },
    ]
    with (OUTPUT / "sources-and-confidence.csv").open("w", encoding="utf-8-sig", newline="") as handle:
        writer = csv.DictWriter(handle, fieldnames=fields)
        writer.writeheader()
        writer.writerows(rows)


def main() -> None:
    OUTPUT.mkdir(parents=True, exist_ok=True)
    if SHAPEFILES.exists():
        shutil.rmtree(SHAPEFILES)
    SHAPEFILES.mkdir(parents=True)

    boundary_collection = load_geojson(INPUT / "amherst-boundary.geojson")
    boundary = clean_polygonal(shape(boundary_collection["features"][0]["geometry"]))
    boundary_feature = {
        "type": "Feature",
        "geometry": mapping(boundary.simplify(0.00001, preserve_topology=True)),
        "properties": {
            "feature_id": "town-of-amherst",
            "layer_type": "study_boundary",
            "name": "Town of Amherst",
            "source_id": "erie-amherst-boundary",
            "confidence": "documented_geometry",
            "last_reviewed": REVIEWED,
        },
    }

    soil_first = load_geojson(INPUT / "amherst-soils-raw.geojson")
    soil_second = load_geojson(INPUT / "amherst-soils-raw-2.geojson")
    soils = clip_features(
        {"features": soil_first["features"] + soil_second["features"]},
        boundary,
        soil_properties,
    )
    wetlands = clip_features(load_geojson(INPUT / "amherst-nwi-raw.geojson"), boundary, wetland_properties)
    geology = clip_features(load_geojson(INPUT / "amherst-geology-raw.geojson"), boundary, geology_properties)
    concentrations = report_density_cells(boundary)
    audubon = audubon_overlay(boundary)

    collections = {
        "amherst-boundary.geojson": feature_collection(
            [boundary_feature], name="Amherst study boundary", description="Official Erie County municipal boundary."
        ),
        "current-nwi-wetlands.geojson": feature_collection(
            wetlands, name="Current NWI wetlands", description="Current FWS NWI polygons clipped to Amherst."
        ),
        "soil-context.geojson": feature_collection(
            soils, name="Soil context", description="Erie County Detailed Soils polygons clipped to Amherst."
        ),
        "surficial-geology.geojson": feature_collection(
            geology, name="Surficial geology", description="NY State Museum regional geology via Erie County."
        ),
        "foundation-report-concentrations.geojson": feature_collection(
            concentrations,
            name="2005 foundation report concentrations",
            description="Coarse relative-density cells generalized from USACE Figure 23; no household locations.",
        ),
        "neighborhood-context.geojson": feature_collection(
            audubon, name="Neighborhood context", description="Source-aligned, simplified planning overlays."
        ),
        "historic-filled-wetlands.geojson": feature_collection(
            [],
            name="Historic and filled wetlands",
            description=(
                "Reserved evidence layer. No polygons are published until historical aerial/topographic "
                "comparison establishes a defensible former-wetland boundary and later fill or development."
            ),
        ),
    }
    for filename, collection in collections.items():
        write_geojson(filename, collection)

    combined = []
    for filename, collection in collections.items():
        if filename != "historic-filled-wetlands.geojson":
            combined.extend(collection["features"])
    write_geojson(
        "amherst-research-layers.geojson",
        feature_collection(
            combined,
            name="WNY Atlas Amherst soils and foundations research layers",
            description="Combined public research layers. Read sources-and-confidence.csv before reuse.",
        ),
    )

    export_polygon_shapefile(
        "amherst_boundary",
        [boundary_feature],
        [
            ("feat_id", "C", 48, 0, "feature_id"),
            ("name", "C", 80, 0, "name"),
            ("source_id", "C", 48, 0, "source_id"),
            ("confid", "C", 32, 0, "confidence"),
        ],
    )
    export_polygon_shapefile(
        "current_nwi_wetlands",
        wetlands,
        [
            ("feat_id", "C", 48, 0, "feature_id"),
            ("wet_code", "C", 20, 0, "wetland_code"),
            ("wet_type", "C", 60, 0, "wetland_type"),
            ("acres", "F", 18, 4, "acres_source"),
            ("source_id", "C", 48, 0, "source_id"),
            ("confid", "C", 32, 0, "confidence"),
        ],
    )
    export_polygon_shapefile(
        "soil_context",
        soils,
        [
            ("feat_id", "C", 48, 0, "feature_id"),
            ("musym", "C", 12, 0, "musym"),
            ("soil_name", "C", 100, 0, "soil_name"),
            ("hydric", "C", 50, 0, "hydric_status"),
            ("drainage", "C", 30, 0, "drainage_class"),
            ("frost", "C", 24, 0, "frost_action"),
            ("context", "C", 120, 0, "report_context"),
            ("source_id", "C", 48, 0, "source_id"),
        ],
    )
    export_polygon_shapefile(
        "surficial_geology",
        geology,
        [
            ("feat_id", "C", 48, 0, "feature_id"),
            ("material", "C", 12, 0, "material_code"),
            ("unit_name", "C", 100, 0, "unit_name"),
            ("source_id", "C", 48, 0, "source_id"),
            ("scale_note", "C", 100, 0, "scale_note"),
        ],
    )
    export_polygon_shapefile(
        "foundation_2005_concentrations",
        concentrations,
        [
            ("feat_id", "C", 48, 0, "feature_id"),
            ("density", "C", 16, 0, "density_class"),
            ("sym_pixels", "N", 12, 0, "symbol_pixels"),
            ("permit_px", "N", 12, 0, "permit_color_pixels"),
            ("inquiry_px", "N", 12, 0, "inquiry_color_pixels"),
            ("source_id", "C", 48, 0, "source_id"),
            ("confid", "C", 32, 0, "confidence"),
        ],
    )
    export_polygon_shapefile(
        "neighborhood_context",
        audubon,
        [
            ("feat_id", "C", 48, 0, "feature_id"),
            ("name", "C", 100, 0, "name"),
            ("source_id", "C", 48, 0, "source_id"),
            ("confid", "C", 32, 0, "confidence"),
            ("note", "C", 140, 0, "boundary_note"),
        ],
    )

    with zipfile.ZipFile(OUTPUT / "amherst-gis-shapefiles.zip", "w", zipfile.ZIP_DEFLATED) as archive:
        for path in sorted(SHAPEFILES.iterdir()):
            archive.write(path, arcname=path.name)

    write_source_catalog()
    print(
        json.dumps(
            {
                "soils": len(soils),
                "wetlands": len(wetlands),
                "geology": len(geology),
                "foundation_density_cells": len(concentrations),
                "neighborhood_overlays": len(audubon),
                "output": str(OUTPUT),
            },
            indent=2,
        )
    )


if __name__ == "__main__":
    sys.exit(main())

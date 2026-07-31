import { historicalRadiologicalRecords } from "@/data/radiological-investigation";

export const dynamic = "force-static";

function csvCell(value: string | number | boolean | undefined) {
  if (value === undefined) return "";
  const text = String(value);
  return /[",\r\n]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
}

export function GET() {
  const headers = [
    "anomaly_id",
    "name",
    "location",
    "county",
    "area",
    "longitude",
    "latitude",
    "coordinate_precision",
    "historical_disposition",
    "nfss_related",
    "one_meter_microR_per_hour",
    "surface_microR_per_hour",
    "scan_min_microR_per_hour",
    "scan_max_microR_per_hour",
    "interpretive_note",
  ];
  const rows = historicalRadiologicalRecords.map((record) => [
    record.id,
    record.name,
    record.location,
    "Niagara",
    record.area,
    record.coordinates[0],
    record.coordinates[1],
    record.coordinatePrecision,
    record.disposition,
    record.nfssRelated,
    record.oneMeterMicroRPerHour,
    record.surfaceMicroRPerHour,
    record.scanRangeMicroRPerHour?.[0],
    record.scanRangeMicroRPerHour?.[1],
    record.note,
  ]);
  const csv = [headers, ...rows].map((row) => row.map(csvCell).join(",")).join("\r\n");

  return new Response(csv, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": 'attachment; filename="wnyatlas-radiological-historical-survey.csv"',
    },
  });
}

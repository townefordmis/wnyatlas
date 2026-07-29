$ErrorActionPreference = "Stop"

$inputPath = Join-Path $PSScriptRoot "erie-county-current-public-charter-schools.csv"
$outputPath = Join-Path $PSScriptRoot "buffalo-school-dec-boundary-screening.csv"
$endpoint = "https://gisservices.dec.ny.gov/arcgis/rest/services/der/RemediationSpills/MapServer/3/query"

$schools = Import-Csv -LiteralPath $inputPath |
    Where-Object { $_.scope -eq "Buffalo" } |
    Group-Object address, city, zip |
    ForEach-Object {
        $first = $_.Group[0]
        [pscustomobject]@{
            campus_key = "$($first.address)|$($first.city)|$($first.zip)"
            address = $first.address
            city = $first.city
            zip = $first.zip
            longitude = [double]$first.longitude
            latitude = [double]$first.latitude
            school_count = $_.Count
            school_names = ($_.Group.legal_name -join " | ")
            sed_codes = ($_.Group.sed_code -join " | ")
        }
    }

$bands = @(
    @{ Label = "point_inside_dec_boundary"; Distance = 0 },
    @{ Label = "within_500_ft_of_dec_boundary"; Distance = 152.4 },
    @{ Label = "within_1000_ft_of_dec_boundary"; Distance = 304.8 }
)

$results = foreach ($school in $schools) {
    $seen = @{}
    foreach ($band in $bands) {
        $geometry = @{
            x = $school.longitude
            y = $school.latitude
            spatialReference = @{ wkid = 4326 }
        } | ConvertTo-Json -Compress

        $body = @{
            f = "json"
            where = "1=1"
            geometry = $geometry
            geometryType = "esriGeometryPoint"
            inSR = "4326"
            spatialRel = "esriSpatialRelIntersects"
            outFields = "SITECODE,SITENAME,PROGRAM,SITECLASS,ADDRESS1,ADDRESS2,LOCALITY,ZIPCODE,COUNTY,TOWN,METHOD,GISFLAG,DETAIL_URL"
            returnGeometry = "false"
        }
        if ($band.Distance -gt 0) {
            $body.distance = [string]$band.Distance
            $body.units = "esriSRUnit_Meter"
        }

        $response = Invoke-RestMethod -Method Post -Uri $endpoint -Body $body
        if ($response.error) {
            throw "DEC query failed for $($school.campus_key): $($response.error.message)"
        }

        foreach ($feature in $response.features) {
            $siteCode = [string]$feature.attributes.SITECODE
            if ($seen.ContainsKey($siteCode)) {
                continue
            }
            $seen[$siteCode] = $true
            [pscustomobject]@{
                campus_key = $school.campus_key
                school_address = $school.address
                school_city = $school.city
                school_zip = $school.zip
                longitude = $school.longitude
                latitude = $school.latitude
                school_count = $school.school_count
                school_names = $school.school_names
                sed_codes = $school.sed_codes
                screening_relationship = $band.Label
                dec_site_code = $siteCode
                dec_site_name = $feature.attributes.SITENAME
                dec_program = $feature.attributes.PROGRAM
                dec_site_class = $feature.attributes.SITECLASS
                dec_address_1 = $feature.attributes.ADDRESS1
                dec_address_2 = $feature.attributes.ADDRESS2
                dec_locality = $feature.attributes.LOCALITY
                dec_zip = $feature.attributes.ZIPCODE
                dec_county = $feature.attributes.COUNTY
                dec_town = $feature.attributes.TOWN
                dec_boundary_method = $feature.attributes.METHOD
                dec_gis_flag = $feature.attributes.GISFLAG
                dec_detail_url = $feature.attributes.DETAIL_URL
                verification_status = "screening_hit_not_yet_parcel_verified"
                screening_source = $endpoint
                screened_on = (Get-Date -Format "yyyy-MM-dd")
            }
        }
    }
}

$results |
    Sort-Object screening_relationship, school_address, dec_site_code |
    Export-Csv -LiteralPath $outputPath -NoTypeInformation -Encoding utf8

Write-Output "Buffalo campuses screened: $($schools.Count)"
Write-Output "Candidate relationships found: $($results.Count)"
$results | Group-Object screening_relationship | Sort-Object Name |
    ForEach-Object { Write-Output "$($_.Name): $($_.Count)" }

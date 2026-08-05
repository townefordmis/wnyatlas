$ErrorActionPreference = "Stop"

$healthExportUrl = "https://apps.health.ny.gov/public/tabvis/PHIG_Public/pa/reports/PreventionAgendaTrackingIndicators-SubCountyData.csv"
$perinatalBaseUrl = "https://www.health.ny.gov/statistics/chac/perinatal/county/2021-2023"
$zctaUrl = "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2025_Gazetteer/2025_Gaz_zcta_national.zip"
$targetPath = Join-Path $PSScriptRoot "..\src\data\public-health-local.ts"

function Get-ZctaInternalPoints {
  Add-Type -AssemblyName System.IO.Compression
  $client = New-Object System.Net.WebClient
  $bytes = $client.DownloadData($zctaUrl)
  $memory = New-Object System.IO.MemoryStream(,$bytes)
  $archive = New-Object System.IO.Compression.ZipArchive($memory)
  $reader = New-Object System.IO.StreamReader($archive.Entries[0].Open())
  $lookup = @{}

  foreach ($line in ($reader.ReadToEnd() -split "`r?`n")) {
    $fields = $line -split "\|"
    if ($fields.Count -ge 8 -and $fields[0] -match "^1(40|41|42|43)\d{2}$") {
      $lookup[$fields[0]] = @([double]$fields[7], [double]$fields[6])
    }
  }

  $reader.Dispose()
  $archive.Dispose()
  $memory.Dispose()
  return $lookup
}

function Get-PerinatalRows([string]$county) {
  $url = "$perinatalBaseUrl/$($county.ToLower()).htm"
  $html = (Invoke-WebRequest -Uri $url -UseBasicParsing -TimeoutSec 30).Content
  $records = @()

  foreach ($rowMatch in [regex]::Matches($html, "<tr[^>]*>(.*?)</tr>", "Singleline,IgnoreCase")) {
    $cells = @()
    foreach ($cellMatch in [regex]::Matches($rowMatch.Groups[1].Value, "<td[^>]*>(.*?)</td>", "Singleline,IgnoreCase")) {
      $plain = [regex]::Replace($cellMatch.Groups[1].Value, "<[^>]+>", "")
      $cells += [System.Net.WebUtility]::HtmlDecode($plain).Trim()
    }

    if ($cells.Count -ge 13 -and $cells[0] -match "^\d{5}$") {
      $records += [pscustomobject]@{
        Zip = $cells[0]
        County = $county
        Births = [int]$cells[1]
        Premature = [double]$cells[2]
        LowBirthWeight = [double]$cells[3]
      }
    }
  }

  return $records
}

function Format-Number([double]$number) {
  return $number.ToString("0.######", [System.Globalization.CultureInfo]::InvariantCulture)
}

$points = Get-ZctaInternalPoints
$healthRows = ((Invoke-WebRequest -Uri $healthExportUrl -UseBasicParsing -TimeoutSec 30).Content | ConvertFrom-Csv)
$asthmaRows = $healthRows | Where-Object {
  $_.'Indicator Title' -eq 'Asthma emergency department visit rate per 10,000, aged 0-17 years' -and
  $_.'Data Years' -eq '2022-2024' -and
  $_.'County Name' -in @('Erie', 'Niagara') -and
  $_.'GEO Category' -eq 'ZIP code' -and
  $_.'Data Comments' -eq '' -and
  $_.'Percentage/Rate' -ne '' -and
  $points.ContainsKey($_.'GEO ID')
} | Sort-Object 'GEO ID'

$perinatalRows = @(
  Get-PerinatalRows 'Erie'
  Get-PerinatalRows 'Niagara'
) | Where-Object { $points.ContainsKey($_.Zip) } | Sort-Object Zip

$lines = [System.Collections.Generic.List[string]]::new()
$lines.Add('// Generated from official NYSDOH and U.S. Census sources by scripts/build-public-health-local.ps1.')
$lines.Add('// Suppressed and NYSDOH-labeled unstable asthma estimates are intentionally excluded.')
$lines.Add('')
$lines.Add('export type AsthmaZipRecord = {')
$lines.Add('  zip: string;')
$lines.Add('  county: "Erie" | "Niagara";')
$lines.Add('  coordinates: [number, number];')
$lines.Add('  visits: number;')
$lines.Add('  rate: number;')
$lines.Add('};')
$lines.Add('')
$lines.Add('export type PerinatalZipRecord = {')
$lines.Add('  zip: string;')
$lines.Add('  county: "Erie" | "Niagara";')
$lines.Add('  coordinates: [number, number];')
$lines.Add('  births: number;')
$lines.Add('  prematurePercent: number;')
$lines.Add('  lowBirthWeightPercent: number;')
$lines.Add('};')
$lines.Add('')
$lines.Add('export const asthmaZipRecords: AsthmaZipRecord[] = [')
foreach ($row in $asthmaRows) {
  $coordinates = $points[$row.'GEO ID']
  $lines.Add("  { zip: `"$($row.'GEO ID')`", county: `"$($row.'County Name')`", coordinates: [$(Format-Number $coordinates[0]), $(Format-Number $coordinates[1])], visits: $($row.'Event Count'), rate: $(Format-Number ([double]$row.'Percentage/Rate')) },")
}
$lines.Add('];')
$lines.Add('')
$lines.Add('export const perinatalZipRecords: PerinatalZipRecord[] = [')
foreach ($row in $perinatalRows) {
  $coordinates = $points[$row.Zip]
  $lines.Add("  { zip: `"$($row.Zip)`", county: `"$($row.County)`", coordinates: [$(Format-Number $coordinates[0]), $(Format-Number $coordinates[1])], births: $($row.Births), prematurePercent: $(Format-Number $row.Premature), lowBirthWeightPercent: $(Format-Number $row.LowBirthWeight) },")
}
$lines.Add('];')
$lines.Add('')

[System.IO.File]::WriteAllLines($targetPath, $lines, [System.Text.UTF8Encoding]::new($false))

$ErrorActionPreference = "Stop"

$sourceUrl = "https://health.data.ny.gov/resource/54ci-sdfi.json?%24limit=50000"
$targetPath = Join-Path $PSScriptRoot "..\src\data\health-county-records.json"
$csvTargetPath = Join-Path $PSScriptRoot "..\public\data\health-county-indicators.csv"
$trendTargetPath = Join-Path $PSScriptRoot "..\src\data\health-trend-records.json"

$selectedIndicators = [ordered]@{
  "total-population" = "Total population"
  "cancer-incidence" = "Age-adjusted all cancer incidence rate per 100,000"
  "cancer-mortality" = "Age-adjusted all cancer mortality rate per 100,000"
  "lung-cancer-incidence" = "Age-adjusted lung and bronchus cancer incidence rate per 100,000"
  "colorectal-cancer-incidence" = "Age-adjusted colon and rectum cancer incidence rate per 100,000"
  "breast-cancer-incidence" = "Age-adjusted female breast cancer incidence rate per 100,000"
  "prostate-cancer-incidence" = "Age-adjusted prostate cancer incidence rate per 100,000"
  "heart-disease-mortality" = "Age-adjusted diseases of the heart mortality rate per 100,000"
  "cardiovascular-mortality" = "Age-adjusted cardiovascular disease mortality rate per 100,000"
  "coronary-heart-disease-mortality" = "Age-adjusted coronary heart disease mortality rate per 100,000"
  "stroke-mortality" = "Age-adjusted cerebrovascular disease (stroke) mortality rate per 100,000"
  "diabetes-mortality" = "Age-adjusted diabetes mortality rate per 100,000"
  "diagnosed-diabetes" = "Age-adjusted percentage of adults with physician diagnosed diabetes"
  "diabetes-hospitalization" = "Age-adjusted diabetes hospitalization rate per 10,000 (primary diagnosis)"
  "respiratory-mortality" = "Age-adjusted chronic lower respiratory disease mortality rate per 100,000"
  "asthma-mortality" = "Age-adjusted asthma mortality rate per 100,000"
  "adult-asthma" = "Age-adjusted percentage of adults with current asthma"
  "child-asthma-hospitalization" = "Asthma hospitalization rate per 10,000 - Aged 0-17 years"
  "poor-mental-health" = "Age-adjusted percentage of adults with poor mental health for 14 or more days in the past month"
  "suicide-mortality" = "Age-adjusted suicide mortality rate per 100,000"
  "self-inflicted-injury" = "Age-adjusted self-inflicted injury hospitalization rate per 10,000"
  "adult-smoking" = "Age-adjusted percentage of adults who are current smokers"
  "adult-binge-drinking" = "Age-adjusted percentage of adults binge drinking during the past month"
  "alcohol-related-injury" = "Alcohol related motor vehicle injuries and deaths per 100,000"
  "premature-birth" = "Percentage of premature births with <37 weeks gestation"
  "low-birthweight" = "Percentage low birthweight (<2.5 kg) births"
  "infant-mortality" = "Mortality rate per 1,000 live births - Infant (<1 year)"
  "late-prenatal-care" = "Percentage of births with late (3rd trimester) or no prenatal care"
  "very-low-birthweight" = "Percentage very low birthweight (<1.5 kg) births"
  "total-mortality" = "Age-adjusted total mortality rate per 100,000"
  "premature-deaths" = "Percentage premature deaths (aged less than 75 years)"
  "potential-life-lost" = "Years of potential life lost per 100,000"
  "care-cost-barrier" = "Age-adjusted percentage of adults who did not receive medical care because of cost"
  "regular-provider" = "Age-adjusted percentage of adults who have a regular health care provider"
  "primary-care-physicians" = "Number of primary care physicians per 100,000 population"
  "mental-health-providers" = "Number of mental health providers per 100,000 population"
  "dentists" = "Number of dentists per 100,000 population"
  "poverty" = "Percentage of population in poverty"
  "child-poverty" = "Percentage of children aged <18 years below poverty"
  "food-insecurity" = "Percentage of population who did not have access to a reliable source of food during the past year (Food insecurity)"
  "median-household-income" = "Annual median household income in US dollars"
  "social-vulnerability" = "Social Vulnerability Index"
  "low-food-access" = "Percentage of population with low income and low access to supermarket or large grocery store"
  "adult-obesity" = "Age-adjusted percentage of adults with obesity (BMI 30 or higher)"
  "adult-overweight-obese" = "Age-adjusted percentage of adults overweight or obese (BMI 25 or higher)"
  "physical-activity" = "Age-adjusted percentage of adults who participated in leisure time physical activity in the past 30 days"
  "student-obesity" = "Percentage obese (95th percentile or higher) - Students (with weight status information in SWSCRS) in elementary, middle and high school"
  "mesothelioma" = "Incidence of malignant mesothelioma per 100,000 persons aged 15 years and older"
  "occupational-lead" = "Elevated blood lead levels (greater than or equal to 10 micrograms per deciliter) per 100,000 employed persons aged 16 years and older"
  "work-related-hospitalization" = "Work-related hospitalizations per 100,000 employed persons aged 16 years and older"
}

$countyNames = @(
  "Albany", "Allegany", "Bronx", "Broome", "Cattaraugus", "Cayuga", "Chautauqua", "Chemung",
  "Chenango", "Clinton", "Columbia", "Cortland", "Delaware", "Dutchess", "Erie", "Essex",
  "Franklin", "Fulton", "Genesee", "Greene", "Hamilton", "Herkimer", "Jefferson", "Kings",
  "Lewis", "Livingston", "Madison", "Monroe", "Montgomery", "Nassau", "New York", "Niagara",
  "Oneida", "Onondaga", "Ontario", "Orange", "Orleans", "Oswego", "Otsego", "Putnam",
  "Queens", "Rensselaer", "Richmond", "Rockland", "Saratoga", "Schenectady", "Schoharie",
  "Schuyler", "Seneca", "St. Lawrence", "Steuben", "Suffolk", "Sullivan", "Tioga", "Tompkins",
  "Ulster", "Warren", "Washington", "Wayne", "Westchester", "Wyoming", "Yates"
)

$sourceRows = Invoke-RestMethod -Uri $sourceUrl -TimeoutSec 120
$records = [System.Collections.Generic.List[object]]::new()

foreach ($entry in $selectedIndicators.GetEnumerator()) {
  $matching = @($sourceRows | Where-Object {
    $_.indicator -eq $entry.Value -and ($_.county_name -in $countyNames -or $_.county_name -eq "New York State")
  })

  foreach ($row in ($matching | Group-Object county_name | ForEach-Object { $_.Group | Select-Object -First 1 })) {
    $value = $null
    if ($row.percent_rate -ne $null -and $row.percent_rate -ne "") { $value = [double]$row.percent_rate }
    $latitude = $null
    $longitude = $null
    if ($row.location -and $row.location.latitude) { $latitude = [double]$row.location.latitude }
    if ($row.location -and $row.location.longitude) { $longitude = [double]$row.location.longitude }

    $records.Add([pscustomobject][ordered]@{
      indicatorId = $entry.Key
      indicator = $entry.Value
      county = $row.county_name
      value = $value
      eventCount = if ($row.event_count -ne $null -and $row.event_count -ne "") { [double]$row.event_count } else { $null }
      denominator = if ($row.average_number_of_denominator -ne $null -and $row.average_number_of_denominator -ne "") { [double]$row.average_number_of_denominator } else { $null }
      unit = $row.measure_unit
      period = $row.data_years
      source = $row.data_source
      latitude = $latitude
      longitude = $longitude
      suppressed = ($value -eq $null)
    })
  }
}

$json = $records | Sort-Object indicatorId, county | ConvertTo-Json -Depth 5
[System.IO.File]::WriteAllText($targetPath, $json, [System.Text.UTF8Encoding]::new($false))
$records | Sort-Object indicatorId, county | Select-Object indicatorId, indicator, county, value, eventCount, denominator, unit, period, source, latitude, longitude, suppressed | Export-Csv -Path $csvTargetPath -NoTypeInformation -Encoding utf8

$wnyCounties = @("Allegany", "Cattaraugus", "Chautauqua", "Erie", "Genesee", "Niagara", "Orleans", "Wyoming")
$trendRecords = [System.Collections.Generic.List[object]]::new()
foreach ($county in $wnyCounties) {
  $trendUrl = "https://health.data.ny.gov/resource/jb5s-mei3.json?%24limit=50000&%24where=county_name%3D%27$county%27"
  $countyTrendRows = Invoke-RestMethod -Uri $trendUrl -TimeoutSec 120
  foreach ($entry in $selectedIndicators.GetEnumerator()) {
    foreach ($row in @($countyTrendRows | Where-Object { $_.indicator_name -eq $entry.Value })) {
      if ($row.trend_data_county_value -eq $null -or $row.trend_data_county_value -eq "") { continue }
      $trendRecords.Add([pscustomobject][ordered]@{
        indicatorId = $entry.Key
        county = $county
        year = $row.date_years
        value = [double]$row.trend_data_county_value
        stateValue = if ($row.trend_data_nys_exc_nyc_value -ne $null -and $row.trend_data_nys_exc_nyc_value -ne "") { [double]$row.trend_data_nys_exc_nyc_value } else { $null }
        threeYearAverage = if ($row.three_year_average_county_value -ne $null -and $row.three_year_average_county_value -ne "") { [double]$row.three_year_average_county_value } else { $null }
        source = $row.data_source
      })
    }
  }
}
$trendJson = $trendRecords | Sort-Object indicatorId, county, year | ConvertTo-Json -Depth 5
[System.IO.File]::WriteAllText($trendTargetPath, $trendJson, [System.Text.UTF8Encoding]::new($false))
Write-Host "Wrote $($records.Count) official county-indicator records to $targetPath"
Write-Host "Wrote $($trendRecords.Count) official WNY trend records to $trendTargetPath"

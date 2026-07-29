$ErrorActionPreference = "Stop"

$screeningPath = Join-Path $PSScriptRoot "buffalo-school-dec-boundary-screening.csv"
$documentPath = Join-Path $PSScriptRoot "buffalo-school-nearby-dec-document-index.csv"
$outputPath = Join-Path (Split-Path $PSScriptRoot) "src\data\buffalo-nearby-remediation-records.json"

$screening = Import-Csv -LiteralPath $screeningPath
$documentIndex = Import-Csv -LiteralPath $documentPath
$codes = $screening.dec_site_code | Sort-Object -Unique

$openDataUrl = 'https://data.ny.gov/resource/c6ci-rzpg.json?$limit=50000&county=Erie'
$openData = Invoke-RestMethod -Uri $openDataUrl

$records = foreach ($code in $codes) {
    $screenRows = @($screening | Where-Object dec_site_code -eq $code)
    $first = $screenRows[0]
    $stateRows = @($openData | Where-Object program_number -eq $code)
    $docs = $documentIndex | Where-Object site_code -eq $code | Select-Object -First 1

    $projects = @(
        $stateRows |
            Where-Object { $_.project_name -or $_.project_completion_date } |
            ForEach-Object {
                [pscustomobject]@{
                    name = [string]$_.project_name
                    date = if ($_.project_completion_date) {
                        ([datetime]$_.project_completion_date).ToString("yyyy-MM-dd")
                    } else {
                        ""
                    }
                }
            } |
            Sort-Object name, date -Unique
    )

    $contaminants = @(
        $stateRows.contaminants |
            Where-Object { $_ } |
            ForEach-Object { ([string]$_).Trim() } |
            Sort-Object -Unique
    )

    $controls = @(
        $stateRows |
            Where-Object { $_.control_code -or $_.control_type } |
            ForEach-Object {
                [pscustomobject]@{
                    code = [string]$_.control_code
                    type = [string]$_.control_type
                }
            } |
            Sort-Object code, type -Unique
    )

    $owners = @(
        $stateRows.owner_name |
            Where-Object { $_ } |
            ForEach-Object { ([string]$_).Trim() } |
            Sort-Object -Unique
    )

    [pscustomobject][ordered]@{
        siteCode = $code
        siteName = $first.dec_site_name
        program = $first.dec_program
        siteClass = $first.dec_site_class
        address = $first.dec_address_1
        closestRelationship = if ($screenRows.screening_relationship -contains "point_inside_dec_boundary") {
            "point_inside_dec_boundary"
        } elseif ($screenRows.screening_relationship -contains "within_500_ft_of_dec_boundary") {
            "within_500_ft_of_dec_boundary"
        } else {
            "within_1000_ft_of_dec_boundary"
        }
        projects = $projects
        contaminants = $contaminants
        controls = $controls
        owners = $owners
        decDetailUrl = $first.dec_detail_url
        decDocumentIndex = if ($docs) { $docs.dec_document_index } else { "" }
        documentIndexStatus = if ($docs) { $docs.index_status } else { "not_indexed" }
        hasCertificateOfCompletion = if ($docs) {
            $docs.has_certificate_of_completion -eq "True"
        } else {
            $false
        }
        hasFinalEngineeringReport = if ($docs) {
            $docs.has_final_engineering_report -eq "True"
        } else {
            $false
        }
        hasSiteManagementPlan = if ($docs) {
            $docs.has_site_management_plan -eq "True"
        } else {
            $false
        }
        hasPeriodicReview = if ($docs) {
            $docs.has_periodic_review -eq "True"
        } else {
            $false
        }
        openDataStatus = if ($stateRows.Count) { "matched" } else { "not_found" }
        openDataSource = "https://data.ny.gov/Energy-Environment/Environmental-Remediation-Sites/c6ci-rzpg"
        assembledOn = Get-Date -Format "yyyy-MM-dd"
    }
}

$json = $records | Sort-Object siteName | ConvertTo-Json -Depth 8
$encoding = [System.Text.UTF8Encoding]::new($false)
[System.IO.File]::WriteAllText($outputPath, $json, $encoding)

Write-Output "Nearby remediation records assembled: $($records.Count)"
Write-Output "Open-data matches: $(($records | Where-Object openDataStatus -eq 'matched').Count)"
Write-Output "Open-data gaps:"
$records |
    Where-Object openDataStatus -ne "matched" |
    ForEach-Object { Write-Output "  $($_.siteCode) - $($_.siteName)" }

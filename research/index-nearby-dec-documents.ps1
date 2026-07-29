$ErrorActionPreference = "Stop"

$screeningPath = Join-Path $PSScriptRoot "buffalo-school-dec-boundary-screening.csv"
$outputPath = Join-Path $PSScriptRoot "buffalo-school-nearby-dec-document-index.csv"

$sites = Import-Csv -LiteralPath $screeningPath |
    Group-Object dec_site_code |
    ForEach-Object {
        $rows = $_.Group
        [pscustomobject]@{
            site_code = $_.Name
            site_name = $rows[0].dec_site_name
            program = $rows[0].dec_program
            site_class = $rows[0].dec_site_class
            address = $rows[0].dec_address_1
            closest_band = if ($rows.screening_relationship -contains "point_inside_dec_boundary") {
                "point_inside_dec_boundary"
            } elseif ($rows.screening_relationship -contains "within_500_ft_of_dec_boundary") {
                "within_500_ft_of_dec_boundary"
            } else {
                "within_1000_ft_of_dec_boundary"
            }
        }
    } |
    Sort-Object site_code

$results = foreach ($site in $sites) {
    $directoryUrl = "https://extapps.dec.ny.gov/data/DecDocs/$($site.site_code)/"
    try {
        $html = (Invoke-WebRequest -UseBasicParsing -Uri $directoryUrl).Content
        $links = [regex]::Matches($html, 'href="([^"]+)"') |
            ForEach-Object {
                $decoded = [System.Net.WebUtility]::HtmlDecode($_.Groups[1].Value)
                [System.Uri]::UnescapeDataString($decoded)
            } |
            Where-Object { $_ -match '\.pdf$' }

        $certificate = @($links | Where-Object { $_ -match "Certificate.of.Completion|COC" })
        $decision = @($links | Where-Object { $_ -match "Decision.Document|ROD\.|Record.of.Decision" })
        $engineering = @($links | Where-Object { $_ -match "Final.Engineering.Report|FER" })
        $management = @($links | Where-Object { $_ -match "Site.Management.Plan|SMP" })
        $periodic = @($links | Where-Object { $_ -match "Periodic.Review|PRR|IC.EC.Certification" })
        $application = @($links | Where-Object { $_ -match "Application|Phase.I|Phase.II" })
        $factSheets = @($links | Where-Object { $_ -match "Fact.Sheet" })

        [pscustomobject]@{
            site_code = $site.site_code
            site_name = $site.site_name
            program = $site.program
            site_class = $site.site_class
            address = $site.address
            closest_band = $site.closest_band
            dec_document_index = $directoryUrl
            document_count = $links.Count
            has_certificate_of_completion = [bool]$certificate.Count
            certificate_documents = ($certificate -join " | ")
            has_decision_or_rod = [bool]$decision.Count
            decision_documents = ($decision -join " | ")
            has_final_engineering_report = [bool]$engineering.Count
            engineering_documents = ($engineering -join " | ")
            has_site_management_plan = [bool]$management.Count
            management_documents = ($management -join " | ")
            has_periodic_review = [bool]$periodic.Count
            periodic_review_documents = ($periodic -join " | ")
            application_or_phase_documents = ($application -join " | ")
            fact_sheet_documents = ($factSheets -join " | ")
            index_status = "available"
            indexed_on = Get-Date -Format "yyyy-MM-dd"
        }
    } catch {
        [pscustomobject]@{
            site_code = $site.site_code
            site_name = $site.site_name
            program = $site.program
            site_class = $site.site_class
            address = $site.address
            closest_band = $site.closest_band
            dec_document_index = $directoryUrl
            document_count = 0
            has_certificate_of_completion = $false
            certificate_documents = ""
            has_decision_or_rod = $false
            decision_documents = ""
            has_final_engineering_report = $false
            engineering_documents = ""
            has_site_management_plan = $false
            management_documents = ""
            has_periodic_review = $false
            periodic_review_documents = ""
            application_or_phase_documents = ""
            fact_sheet_documents = ""
            index_status = "unavailable: $($_.Exception.Message)"
            indexed_on = Get-Date -Format "yyyy-MM-dd"
        }
    }
}

$results | Export-Csv -LiteralPath $outputPath -NoTypeInformation -Encoding utf8

Write-Output "DEC sites indexed: $($results.Count)"
Write-Output "Certificate of Completion: $(($results | Where-Object has_certificate_of_completion -eq $true).Count)"
Write-Output "Decision or ROD: $(($results | Where-Object has_decision_or_rod -eq $true).Count)"
Write-Output "Final Engineering Report: $(($results | Where-Object has_final_engineering_report -eq $true).Count)"
Write-Output "Site Management Plan: $(($results | Where-Object has_site_management_plan -eq $true).Count)"
Write-Output "Periodic review: $(($results | Where-Object has_periodic_review -eq $true).Count)"
Write-Output "Unavailable indexes: $(($results | Where-Object index_status -ne 'available').Count)"

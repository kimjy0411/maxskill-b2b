$ErrorActionPreference = "Stop"
$itemsDir = Join-Path $PSScriptRoot "..\public\images\services\items"
$servicesDir = Join-Path $PSScriptRoot "..\public\images\services"
New-Item -ItemType Directory -Force -Path $itemsDir | Out-Null
New-Item -ItemType Directory -Force -Path $servicesDir | Out-Null

function Download-Photo($photoId, $dest) {
  $url = "https://images.unsplash.com/$photoId?auto=format&fit=crop&w=1200&q=80"
  & curl.exe -L -A "Mozilla/5.0" $url -o $dest
  if ($LASTEXITCODE -ne 0) { throw "Download failed for $photoId" }
  Start-Sleep -Milliseconds 1200
}

# Each Unsplash photo ID used exactly once (from unsplash.com search)
$banners = [ordered]@{
  "piping.jpg" = "photo-1670689334896-8fa8291daa27"
  "stress.jpg" = "photo-1596980786765-775174984ec9"
  "cad.jpg" = "photo-1581092918056-0c4c3acd3789"
  "programming.jpg" = "photo-1555066931-4365d14bab8c"
}

$images = [ordered]@{
  "piping-project-scheduling.jpg" = "photo-1721244654394-36a7bc2da288"
  "piping-coordination.jpg" = "photo-1522071820081-009f0129c71c"
  "piping-plot-plan.jpg" = "photo-1509390288171-ce2088f7d08e"
  "piping-iso-dwg.jpg" = "photo-1542274368-443d694d79aa"
  "piping-stress-iso.jpg" = "photo-1538474705339-e87de81450e8"
  "piping-support-detail.jpg" = "photo-1694674818352-f6061a0561a1"
  "piping-information-dwg.jpg" = "photo-1658741629312-caf7be169c02"

  "stress-thermal-analysis.jpg" = "photo-1588011930968-eadac80e6a5a"
  "stress-load-case.jpg" = "photo-1607472586893-edb57bdc0e39"
  "stress-analysis-report.jpg" = "photo-1722842895153-ba7bf9d53dfb"
  "stress-special-support.jpg" = "photo-1543674892-7d64d45df18b"
  "stress-support-optimization.jpg" = "photo-1586057285471-2f78bffaf074"
  "stress-trouble-shooting.jpg" = "photo-1670689334799-cdc6777db8cc"
  "stress-field-support.jpg" = "photo-1639600993675-2281b2c939f0"

  "cad-s3d-admin.jpg" = "photo-1581091226825-a6a2a5aee158"
  "cad-pid-admin.jpg" = "photo-1581092160562-40aa08e78837"
  "cad-spec-cata.jpg" = "photo-1601569205943-53aac3dcef67"
  "cad-equip-structure.jpg" = "photo-1717386255773-1e3037c81788"
  "cad-piping-support.jpg" = "photo-1726731782158-fcf6822b6ca4"
  "cad-instrument-elec.jpg" = "photo-1622534376374-fe4480328daa"
  "cad-duct-hvac.jpg" = "photo-1717386255773-a456c611dc4e"
  "cad-clash-check.jpg" = "photo-1496247749665-49cf5b1022e9"
  "cad-product-line-check.jpg" = "photo-1602860109210-b53229378ecf"
  "cad-mos-check.jpg" = "photo-1468787737698-f5c03f0570dd"
  "cad-pid-check.jpg" = "photo-1635145613344-3e59b1e8afd0"
  "cad-plant-imaging.jpg" = "photo-1693907986952-3cd372e4c9d8"
  "cad-bom-iso.jpg" = "photo-1460925895917-afdab827c52f"
  "cad-3rd-party.jpg" = "photo-1498050108023-c5249f4df085"

  "programming-customizing.jpg" = "photo-1517694712202-14dd95308a12"
  "programming-design-automation.jpg" = "photo-1461747280688-d54aa2c08665"
  "programming-management.jpg" = "photo-1553877522-43269d4ea984"
  "programming-trouble-shooting.jpg" = "photo-1526374965328-7f61d4dc18c5"
  "programming-performance.jpg" = "photo-1507823690283-48b0929e727b"
  "programming-3rd-party.jpg" = "photo-1559510981-10719ce4266a"
  "programming-data-exchange.jpg" = "photo-1551288049-bebda4e38f71"
}

$used = @{}
foreach ($entry in ($banners.GetEnumerator() + $images.GetEnumerator())) {
  if ($used.ContainsKey($entry.Value)) {
    throw "Duplicate photo $($entry.Value): $($entry.Key) vs $($used[$entry.Value])"
  }
  $used[$entry.Value] = $entry.Key
}

Write-Host "Downloading $($banners.Count + $images.Count) unique images..."
foreach ($entry in $banners.GetEnumerator()) {
  $dest = Join-Path $servicesDir $entry.Key
  Write-Host "  services/$($entry.Key)"
  Download-Photo $entry.Value $dest
}
foreach ($entry in $images.GetEnumerator()) {
  $dest = Join-Path $itemsDir $entry.Key
  Write-Host "  items/$($entry.Key)"
  Download-Photo $entry.Value $dest
}
Write-Host "Done."

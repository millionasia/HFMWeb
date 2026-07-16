param(
  [string]$BaseUrl = "/",
  [string]$OutputDir = "dist"
)

$ErrorActionPreference = "Stop"

$projectRoot = Resolve-Path (Join-Path $PSScriptRoot "..")
Push-Location $projectRoot

function Normalize-BaseUrl {
  param(
    [string]$Value
  )

  if ([string]::IsNullOrWhiteSpace($Value)) {
    return "/"
  }

  if (-not $Value.StartsWith("/")) {
    throw "BaseUrl must start with '/'. Current value: $Value"
  }

  if (-not $Value.EndsWith("/")) {
    return "$Value/"
  }

  return $Value
}

function Remove-OutputDirectory {
  param(
    [string]$Path
  )

  $projectFullPath = [System.IO.Path]::GetFullPath($projectRoot)
  $outputFullPath = [System.IO.Path]::GetFullPath((Join-Path $projectRoot $Path))

  if (-not $outputFullPath.StartsWith($projectFullPath, [System.StringComparison]::OrdinalIgnoreCase)) {
    throw "Refusing to remove output outside project root: $outputFullPath"
  }

  if (-not (Test-Path -LiteralPath $outputFullPath)) {
    return
  }

  $item = Get-Item -Force -LiteralPath $outputFullPath
  if (($item.Attributes -band [System.IO.FileAttributes]::ReparsePoint) -ne 0) {
    if ($item.PSIsContainer) {
      [System.IO.Directory]::Delete($outputFullPath)
    }
    else {
      [System.IO.File]::Delete($outputFullPath)
    }
    return
  }

  Remove-Item -LiteralPath $outputFullPath -Recurse -Force
}

try {
  $BaseUrl = Normalize-BaseUrl -Value $BaseUrl

  Write-Host "Generating production static site..."
  Write-Host "Base URL: $BaseUrl"
  Write-Host "Output: $OutputDir"

  $previousBaseUrl = $env:NUXT_APP_BASE_URL
  $env:NUXT_APP_BASE_URL = $BaseUrl

  corepack pnpm generate

  Remove-OutputDirectory -Path $OutputDir
  Copy-Item -LiteralPath ".output/public" -Destination $OutputDir -Recurse
  Write-Host "Done: $OutputDir"
}
finally {
  if ($null -eq $previousBaseUrl) {
    Remove-Item Env:NUXT_APP_BASE_URL -ErrorAction SilentlyContinue
  }
  else {
    $env:NUXT_APP_BASE_URL = $previousBaseUrl
  }

  Pop-Location
}

$ErrorActionPreference = 'Stop'

$projects = @(
  'D:\My_project\chenge_lang',
  'D:\My_project\gold-coop',
  'D:\My_project\TDS_520A_GPIB',
  'D:\My_project\SimpleMidiViwer',
  'D:\My_project\webHz',
  'D:\My_project\Pump_Controller_MEGA_2560',
  'D:\My_project\COMUS_ACTUAL\project_402_Stable',
  'D:\My_project\eagle-upl-scripts',
  'D:\WORK_PROJECTS\Git_Keeper',
  'D:\WORK_PROJECTS\bandora',
  'D:\WORK_PROJECTS\ModbusEmulator',
  'D:\WORK_PROJECTS\forte_new\forte',
  'D:\WORK_PROJECTS\hmitouchscreenold',
  'D:\WORK_PROJECTS\drag_drop_html_editor',
  'D:\WORK_PROJECTS\UI-App',
  'D:\WORK_PROJECTS\hplcpump',
  'D:\WORK_PROJECTS\scanscore_for_vol',
  'D:\WORK_PROJECTS\onyx',
  'D:\ai_memory_system',
  'D:\My_project\FastAcqWinApp',
  'D:\My_project\ADC_STM32H7\Fast_Acquisition_Device',
  'D:\My_project\CrossZeroDetector'
)

$relatedGroups = @(
  @('D:\My_project\FastAcqWinApp', 'D:\My_project\ADC_STM32H7\Fast_Acquisition_Device'),
  @('D:\My_project\webHz', 'D:\My_project\CrossZeroDetector')
)

$exclude = @('node_modules','.git','dist','build','bin','obj','.vs','.idea','.vscode','__pycache__','.venv','venv','target','out','Debug','Release')
$codeExt = @('.js','.ts','.jsx','.tsx','.py','.cs','.cpp','.c','.h','.hpp','.ino','.html','.css','.scss','.sql','.ps1','.bat','.cmd','.xml','.xaml','.json','.toml','.yml','.yaml','.pro','.pri','.md')
$manifests = @('package.json','requirements.txt','pyproject.toml','poetry.lock','Pipfile','*.csproj','*.sln','CMakeLists.txt','Makefile','*.pro','*.pri','Dockerfile*','docker-compose*.yml','platformio.ini','*.ioc','.github\workflows\*.yml')

$techRules = @(
  @{T='Node.js ecosystem (npm/yarn/pnpm)'; P='package.json'},
  @{T='Python ecosystem (pip/pyproject)'; P='requirements.txt|pyproject.toml|poetry.lock|Pipfile'},
  @{T='.NET / C#'; P='\.csproj$|\.sln$|\.cs$|\.xaml$'},
  @{T='Qt/qmake'; P='\.pro$|\.pri$|#include\s*<Q|QT\s*\+?='},
  @{T='STM32 / STM32CubeMX'; P='\.ioc$|stm32|HAL_'},
  @{T='Arduino ecosystem'; P='\.ino$|setup\(|loop\(|Serial\.'},
  @{T='React'; P='react|next'},
  @{T='Vue'; P='vue'},
  @{T='Angular'; P='@angular'},
  @{T='Electron'; P='electron'},
  @{T='.NET/WPF'; P='UseWPF|PresentationFramework|System\.Windows'},
  @{T='.NET/WinForms'; P='UseWindowsForms|System\.Windows\.Forms'},
  @{T='ASP.NET'; P='AspNetCore|Microsoft\.AspNetCore'},
  @{T='Modbus'; P='modbus'},
  @{T='GPIB / IEEE-488'; P='gpib|ieee-488'},
  @{T='MIDI'; P='midi'},
  @{T='Serial / UART / RS485'; P='serial|uart|rs-232|rs232|rs-485|rs485|COM\d'},
  @{T='CAN bus'; P='\bCAN\b|canbus'},
  @{T='MQTT'; P='mqtt'},
  @{T='WebSocket'; P='websocket|socket\.io'},
  @{T='REST API'; P='axios|fetch\(|HttpClient|requests\.'},
  @{T='SQLite'; P='sqlite'},
  @{T='PostgreSQL'; P='postgres|psycopg|npgsql'},
  @{T='MySQL'; P='mysql|pymysql|MySqlConnector'},
  @{T='Docker'; P='Dockerfile|docker-compose|\bdocker\b'},
  @{T='GitHub Actions (CI/CD)'; P='\.github\\workflows\\|^\s*jobs:'},
  @{T='Unit tests'; P='pytest|unittest|xunit|nunit|jest|mocha|vitest'}
)

function IsExcluded([string]$fullPath) {
  foreach ($x in $exclude) {
    if ($fullPath -match [Regex]::Escape("\$x\")) { return $true }
  }
  return $false
}

function Rel([string]$root, [string]$full) {
  if ($full.StartsWith($root)) { return $full.Substring($root.Length).TrimStart('\\') }
  return $full
}

function GetFiles([string]$root) {
  Get-ChildItem -Path $root -Recurse -Depth 6 -File -ErrorAction SilentlyContinue |
    Where-Object { -not (IsExcluded $_.FullName) }
}

function Add([System.Collections.Generic.HashSet[string]]$set, [string]$value) {
  if (-not [string]::IsNullOrWhiteSpace($value)) { [void]$set.Add($value) }
}

$extLang = @{
  '.js'='JavaScript'; '.ts'='TypeScript'; '.jsx'='JavaScript/React'; '.tsx'='TypeScript/React';
  '.py'='Python'; '.cs'='C#'; '.xaml'='XAML'; '.cpp'='C++'; '.c'='C'; '.h'='C/C++ Header'; '.hpp'='C++ Header'; '.ino'='Arduino';
  '.html'='HTML'; '.css'='CSS'; '.scss'='SCSS'; '.sql'='SQL'; '.ps1'='PowerShell'; '.bat'='Batch'; '.cmd'='Batch';
  '.json'='JSON'; '.toml'='TOML'; '.yml'='YAML'; '.yaml'='YAML'; '.xml'='XML'; '.pro'='QMake'; '.pri'='QMake'
}

$results = @()

foreach ($p in $projects) {
  if (-not (Test-Path $p)) { continue }

  $files = GetFiles $p
  $sample = $files | Select-Object -First 8000

  $langs = New-Object System.Collections.Generic.HashSet[string]
  foreach ($f in $sample) {
    $ext = $f.Extension.ToLowerInvariant()
    if ($extLang.ContainsKey($ext)) { Add $langs $extLang[$ext] }
  }

  $manifestFound = New-Object System.Collections.Generic.HashSet[string]
  foreach ($m in $manifests) {
    $hits = Get-ChildItem -Path $p -Recurse -Depth 6 -File -Filter $m -ErrorAction SilentlyContinue | Where-Object { -not (IsExcluded $_.FullName) }
    foreach ($h in $hits | Select-Object -First 50) { Add $manifestFound (Rel $p $h.FullName) }
  }

  $deps = New-Object System.Collections.Generic.HashSet[string]
  $pkgFiles = Get-ChildItem -Path $p -Recurse -Depth 6 -File -Filter package.json -ErrorAction SilentlyContinue | Where-Object { -not (IsExcluded $_.FullName) }
  foreach ($pkg in $pkgFiles | Select-Object -First 20) {
    try {
      $json = Get-Content $pkg.FullName -Raw | ConvertFrom-Json
      if ($json.dependencies) { $json.dependencies.PSObject.Properties.Name | ForEach-Object { Add $deps $_ } }
      if ($json.devDependencies) { $json.devDependencies.PSObject.Properties.Name | ForEach-Object { Add $deps $_ } }
    } catch {}
  }

  $reqFiles = Get-ChildItem -Path $p -Recurse -Depth 6 -File -Filter requirements.txt -ErrorAction SilentlyContinue | Where-Object { -not (IsExcluded $_.FullName) }
  foreach ($req in $reqFiles | Select-Object -First 20) {
    Get-Content $req.FullName | ForEach-Object {
      $line = $_.Trim()
      if ($line -and -not $line.StartsWith('#')) {
        $name = ($line -split '[<>=!~\[]')[0].Trim()
        Add $deps $name
      }
    }
  }

  $csprojFiles = Get-ChildItem -Path $p -Recurse -Depth 6 -File -Filter *.csproj -ErrorAction SilentlyContinue | Where-Object { -not (IsExcluded $_.FullName) }
  foreach ($csproj in $csprojFiles | Select-Object -First 40) {
    try {
      [xml]$xml = Get-Content $csproj.FullName -Raw
      foreach ($pr in $xml.Project.ItemGroup.PackageReference) {
        if ($pr.Include) { Add $deps $pr.Include }
      }
    } catch {}
  }

  $technologies = New-Object System.Collections.Generic.HashSet[string]
  $textSample = $sample | Where-Object { $codeExt -contains $_.Extension.ToLowerInvariant() -and $_.Length -le 1MB } | Select-Object -First 3000
  foreach ($r in $techRules) {
    foreach ($f in $textSample) {
      try {
        if (Select-String -Path $f.FullName -Pattern $r.P -CaseSensitive:$false -Quiet) {
          Add $technologies $r.T
          break
        }
      } catch {}
    }
  }

  $results += [PSCustomObject]@{
    Name = Split-Path $p -Leaf
    Path = $p
    Languages = ($langs | Sort-Object)
    Technologies = ($technologies | Sort-Object)
    Manifests = ($manifestFound | Sort-Object)
    Dependencies = ($deps | Sort-Object | Select-Object -First 60)
  }
}

$mdPath = 'D:\My_project\CV_project\projects_technology_report.md'
$jsonPath = 'D:\My_project\CV_project\projects_technology_report.json'

$lines = New-Object System.Collections.Generic.List[string]
$lines.Add('# Portfolio Projects Technology Audit')
$lines.Add('')
$lines.Add("Generated: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')")
$lines.Add('')
$lines.Add('## Requested Scan Paths')
foreach ($p in $projects) { $lines.Add("- $p") }
$lines.Add('')
$lines.Add('## Related Project Groups')
foreach ($g in $relatedGroups) { $lines.Add('- ' + ($g -join ' + ')) }
$lines.Add('')
$lines.Add('## Per-Project Technology Breakdown')
$lines.Add('')

foreach ($r in $results | Sort-Object Name) {
  $lines.Add("### $($r.Name)")
  $lines.Add("Path: $($r.Path)")
  $lines.Add('')
  $lines.Add('Languages: ' + ($(if ($r.Languages.Count) { $r.Languages -join ', ' } else { 'not confidently detected' })))
  $lines.Add('Key technologies: ' + ($(if ($r.Technologies.Count) { $r.Technologies -join ', ' } else { 'not confidently detected' })))
  $lines.Add('')

  $lines.Add('Detected manifests/config files:')
  if ($r.Manifests.Count) {
    foreach ($m in $r.Manifests | Select-Object -First 30) { $lines.Add("- $m") }
  } else {
    $lines.Add('- none by known patterns')
  }

  $lines.Add('Detected dependencies/libraries:')
  if ($r.Dependencies.Count) {
    foreach ($d in $r.Dependencies | Select-Object -First 40) { $lines.Add("- $d") }
  } else {
    $lines.Add('- none parsed from known dependency files')
  }

  $lines.Add('')
}

$lines.Add('## Global Technology Index')
$globalTech = $results | ForEach-Object { $_.Technologies } | Sort-Object -Unique
if ($globalTech.Count) {
  foreach ($t in $globalTech) { $lines.Add("- $t") }
} else {
  $lines.Add('- none detected')
}
$lines.Add('')
$lines.Add('## Method')
$lines.Add('- Static scan by manifest detection + dependency parsing + keyword signatures in source code.')
$lines.Add('- Recursive depth limit: 6 levels, with heavy generated folders excluded for reliability and speed.')

Set-Content -Path $mdPath -Value $lines -Encoding UTF8
$results | ConvertTo-Json -Depth 8 | Set-Content -Path $jsonPath -Encoding UTF8

Write-Output "WROTE: $mdPath"
Write-Output "WROTE: $jsonPath"

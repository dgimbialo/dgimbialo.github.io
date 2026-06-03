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

$knownExtMap = @{
  '.js' = 'JavaScript'; '.mjs' = 'JavaScript'; '.cjs' = 'JavaScript';
  '.ts' = 'TypeScript'; '.tsx' = 'TypeScript';
  '.py' = 'Python'; '.ipynb' = 'Jupyter';
  '.cs' = 'C#'; '.csproj' = 'C#/.NET'; '.sln' = '.NET Solution'; '.xaml' = 'XAML';
  '.cpp' = 'C++'; '.cxx' = 'C++'; '.cc' = 'C++'; '.hpp' = 'C++ Header'; '.hxx' = 'C++ Header';
  '.c' = 'C'; '.h' = 'C/C++ Header'; '.ino' = 'Arduino';
  '.java' = 'Java'; '.kt' = 'Kotlin';
  '.go' = 'Go'; '.rs' = 'Rust';
  '.php' = 'PHP'; '.rb' = 'Ruby';
  '.html' = 'HTML'; '.css' = 'CSS'; '.scss' = 'SCSS'; '.sass' = 'Sass'; '.less' = 'Less';
  '.vue' = 'Vue'; '.svelte' = 'Svelte';
  '.sql' = 'SQL'; '.sh' = 'Shell'; '.ps1' = 'PowerShell'; '.bat' = 'Batch'; '.cmd' = 'Batch';
  '.yaml' = 'YAML'; '.yml' = 'YAML'; '.toml' = 'TOML'; '.json' = 'JSON'; '.xml' = 'XML'
}

$manifestPatterns = @(
  'package.json', 'pnpm-lock.yaml', 'yarn.lock', 'package-lock.json', 'bun.lockb',
  'vite.config.*', 'webpack.config.*', 'rollup.config.*',
  'angular.json', 'next.config.*', 'nuxt.config.*', 'svelte.config.*',
  'requirements.txt', 'pyproject.toml', 'Pipfile', 'poetry.lock', 'environment.yml', 'setup.py',
  '*.csproj', '*.sln', 'Directory.Build.props', 'global.json', 'packages.config', 'nuget.config',
  'CMakeLists.txt', 'Makefile', 'meson.build', '*.pro', 'conanfile.*',
  'Cargo.toml', 'go.mod', 'pom.xml', 'build.gradle*',
  'docker-compose*.yml', 'Dockerfile*', '.github/workflows/*.yml', '.gitlab-ci.yml', 'Jenkinsfile',
  'platformio.ini', '*.ioc', '*.ino', '*.kicad_pro', '*.kicad_pcb', '*.sch', '*.brd', '*.gbr'
)

$techPatterns = @(
  @{ Name = 'React'; Pattern = 'react|next'; },
  @{ Name = 'Vue'; Pattern = 'vue'; },
  @{ Name = 'Angular'; Pattern = '@angular'; },
  @{ Name = 'Electron'; Pattern = 'electron'; },
  @{ Name = 'Node.js'; Pattern = 'express|koa|fastify|nestjs'; },
  @{ Name = 'FastAPI'; Pattern = 'fastapi'; },
  @{ Name = 'Flask'; Pattern = 'flask'; },
  @{ Name = 'Django'; Pattern = 'django'; },
  @{ Name = '.NET/WPF'; Pattern = 'UseWPF|PresentationFramework|System\.Windows'; },
  @{ Name = '.NET/WinForms'; Pattern = 'UseWindowsForms|System\.Windows\.Forms'; },
  @{ Name = 'ASP.NET'; Pattern = 'Microsoft\.AspNetCore|AspNetCore'; },
  @{ Name = 'Qt'; Pattern = 'QT\s*\+?=|#include\s*<Q'; },
  @{ Name = 'STM32 HAL'; Pattern = 'HAL_|stm32'; },
  @{ Name = 'Arduino'; Pattern = 'setup\(|loop\(|Serial\.'; },
  @{ Name = 'Modbus'; Pattern = 'modbus'; },
  @{ Name = 'MQTT'; Pattern = 'mqtt'; },
  @{ Name = 'CAN'; Pattern = '\bCAN\b|canbus'; },
  @{ Name = 'GPIB'; Pattern = 'gpib|ieee-488'; },
  @{ Name = 'MIDI'; Pattern = 'midi'; },
  @{ Name = 'Serial/COM'; Pattern = 'serial|COM\d|uart|rs-232|rs232|rs485|rs-485'; },
  @{ Name = 'WebSocket'; Pattern = 'websocket|socket\.io'; },
  @{ Name = 'REST API'; Pattern = 'axios|fetch\(|HttpClient|requests\.'; },
  @{ Name = 'SQLite'; Pattern = 'sqlite'; },
  @{ Name = 'PostgreSQL'; Pattern = 'postgres|psycopg|npgsql'; },
  @{ Name = 'MySQL'; Pattern = 'mysql|pymysql|MySqlConnector'; },
  @{ Name = 'Docker'; Pattern = 'FROM\s+|docker'; },
  @{ Name = 'GitHub Actions'; Pattern = 'on:\s*\[|jobs:'; },
  @{ Name = 'Unit tests'; Pattern = 'pytest|unittest|xunit|nunit|jest|mocha|vitest'; }
)

function Add-Unique([System.Collections.Generic.HashSet[string]]$set, [string]$value) {
  if (-not [string]::IsNullOrWhiteSpace($value)) {
    [void]$set.Add($value)
  }
}

function Get-ProjectSummary([string]$path) {
  $allFiles = Get-ChildItem -Path $path -Recurse -File -ErrorAction SilentlyContinue

  $extCounts = @{}
  foreach ($f in $allFiles) {
    $ext = $f.Extension.ToLowerInvariant()
    if ([string]::IsNullOrWhiteSpace($ext)) { continue }
    if (-not $extCounts.ContainsKey($ext)) { $extCounts[$ext] = 0 }
    $extCounts[$ext]++
  }

  $langCounts = @{}
  foreach ($ext in $extCounts.Keys) {
    if ($knownExtMap.ContainsKey($ext)) {
      $lang = $knownExtMap[$ext]
      if (-not $langCounts.ContainsKey($lang)) { $langCounts[$lang] = 0 }
      $langCounts[$lang] += $extCounts[$ext]
    }
  }

  $manifests = New-Object System.Collections.Generic.HashSet[string]
  foreach ($pat in $manifestPatterns) {
    $hits = Get-ChildItem -Path $path -Recurse -File -Filter $pat -ErrorAction SilentlyContinue
    foreach ($h in $hits) {
      Add-Unique $manifests ($h.FullName.Substring($path.Length).TrimStart('\\'))
    }
  }

  $deps = New-Object System.Collections.Generic.HashSet[string]

  $pkg = Join-Path $path 'package.json'
  if (Test-Path $pkg) {
    try {
      $json = Get-Content $pkg -Raw | ConvertFrom-Json
      if ($json.dependencies) {
        $json.dependencies.PSObject.Properties.Name | ForEach-Object { Add-Unique $deps $_ }
      }
      if ($json.devDependencies) {
        $json.devDependencies.PSObject.Properties.Name | ForEach-Object { Add-Unique $deps $_ }
      }
    } catch {}
  }

  $req = Join-Path $path 'requirements.txt'
  if (Test-Path $req) {
    Get-Content $req | ForEach-Object {
      $line = $_.Trim()
      if ($line -and -not $line.StartsWith('#')) {
        $name = ($line -split '[<>=!~\[]')[0].Trim()
        Add-Unique $deps $name
      }
    }
  }

  $cargo = Join-Path $path 'Cargo.toml'
  if (Test-Path $cargo) {
    Get-Content $cargo | ForEach-Object {
      if ($_ -match '^\s*([A-Za-z0-9_\-]+)\s*=\s*"') {
        Add-Unique $deps $matches[1]
      }
    }
  }

  $csprojFiles = Get-ChildItem -Path $path -Recurse -Filter *.csproj -File -ErrorAction SilentlyContinue
  foreach ($cs in $csprojFiles) {
    try {
      [xml]$xml = Get-Content $cs.FullName -Raw
      foreach ($pr in $xml.Project.ItemGroup.PackageReference) {
        if ($pr.Include) { Add-Unique $deps $pr.Include }
      }
    } catch {}
  }

  $scanPatterns = @('*.txt','*.md','*.json','*.yaml','*.yml','*.toml','*.xml','*.ini','*.cfg','*.conf','*.py','*.js','*.jsx','*.ts','*.tsx','*.cs','*.csproj','*.sln','*.cpp','*.c','*.h','*.hpp','*.ino','*.html','*.css','*.scss','*.sql','*.sh','*.ps1','*.bat','*.cmd','*.pro','*.pri','*.ioc','Dockerfile*')
  $scanFiles = @()
  foreach ($sp in $scanPatterns) {
    $scanFiles += Get-ChildItem -Path $path -Recurse -File -Filter $sp -ErrorAction SilentlyContinue | Where-Object { $_.Length -le 2MB }
  }
  $scanFiles = $scanFiles | Sort-Object FullName -Unique

  $detectedTech = New-Object System.Collections.Generic.HashSet[string]
  foreach ($tp in $techPatterns) {
    $found = $false
    foreach ($f in $scanFiles) {
      if ($found) { break }
      try {
        if (Select-String -Path $f.FullName -Pattern $tp.Pattern -CaseSensitive:$false -Quiet) {
          Add-Unique $detectedTech $tp.Name
          $found = $true
        }
      } catch {}
    }
  }

  [PSCustomObject]@{
    Path = $path
    Project = Split-Path $path -Leaf
    Languages = ($langCounts.GetEnumerator() | Sort-Object Value -Descending | Select-Object -First 12 | ForEach-Object { "$($_.Key) ($($_.Value))" })
    FileTypes = ($extCounts.GetEnumerator() | Sort-Object Value -Descending | Select-Object -First 12 | ForEach-Object { "$($_.Key) ($($_.Value))" })
    Manifests = ($manifests | Sort-Object)
    Technologies = ($detectedTech | Sort-Object)
    Dependencies = ($deps | Sort-Object | Select-Object -First 120)
  }
}

$results = foreach ($p in $projects) {
  Get-ProjectSummary -path $p
}

$outPath = 'D:\My_project\CV_project\projects_tech_scan.json'
$results | ConvertTo-Json -Depth 6 | Set-Content -Path $outPath -Encoding UTF8
Write-Output "WROTE: $outPath"

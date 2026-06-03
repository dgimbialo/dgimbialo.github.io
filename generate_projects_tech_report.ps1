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

$excludeDirNames = @('node_modules', '.git', 'dist', 'build', 'bin', 'obj', '.vs', '.idea', '.vscode', '__pycache__', '.venv', 'venv', 'target', 'out', 'Debug', 'Release')

$extToLang = @{
  '.js'='JavaScript'; '.mjs'='JavaScript'; '.cjs'='JavaScript';
  '.ts'='TypeScript'; '.tsx'='TypeScript'; '.jsx'='JavaScript/React';
  '.py'='Python'; '.ipynb'='Jupyter';
  '.cs'='C#'; '.csproj'='C#/.NET'; '.sln'='.NET Solution'; '.xaml'='XAML';
  '.cpp'='C++'; '.cxx'='C++'; '.cc'='C++'; '.hpp'='C++ Header'; '.hxx'='C++ Header';
  '.c'='C'; '.h'='C/C++ Header'; '.ino'='Arduino';
  '.html'='HTML'; '.css'='CSS'; '.scss'='SCSS'; '.sass'='Sass'; '.less'='Less';
  '.vue'='Vue'; '.svelte'='Svelte';
  '.sql'='SQL'; '.ps1'='PowerShell'; '.sh'='Shell'; '.bat'='Batch'; '.cmd'='Batch';
  '.yaml'='YAML'; '.yml'='YAML'; '.toml'='TOML'; '.json'='JSON'; '.xml'='XML'; '.md'='Markdown'
}

$manifestMarkers = @(
  'package.json','pnpm-lock.yaml','yarn.lock','package-lock.json','bun.lockb',
  'requirements.txt','pyproject.toml','poetry.lock','Pipfile','environment.yml','setup.py',
  '*.csproj','*.sln','packages.config','nuget.config','global.json','Directory.Build.props',
  'CMakeLists.txt','Makefile','*.pro','*.pri','conanfile.*',
  'Cargo.toml','go.mod','pom.xml','build.gradle*',
  'Dockerfile*','docker-compose*.yml',
  'platformio.ini','*.ioc','*.ino',
  '.github\workflows\*.yml','.gitlab-ci.yml','Jenkinsfile'
)

$keywordMap = @(
  @{ Tech = 'React'; Pattern = 'react|next'; },
  @{ Tech = 'Vue'; Pattern = 'vue'; },
  @{ Tech = 'Angular'; Pattern = '@angular'; },
  @{ Tech = 'Electron'; Pattern = 'electron'; },
  @{ Tech = 'Node.js'; Pattern = 'express|koa|fastify|nestjs'; },
  @{ Tech = '.NET/WPF'; Pattern = 'UseWPF|PresentationFramework|System\.Windows'; },
  @{ Tech = '.NET/WinForms'; Pattern = 'UseWindowsForms|System\.Windows\.Forms'; },
  @{ Tech = 'ASP.NET'; Pattern = 'AspNetCore|Microsoft\.AspNetCore'; },
  @{ Tech = 'Qt'; Pattern = 'QT\s*\+?=|#include\s*<Q'; },
  @{ Tech = 'STM32 HAL'; Pattern = 'HAL_|stm32'; },
  @{ Tech = 'Arduino'; Pattern = 'setup\(|loop\(|Serial\.'; },
  @{ Tech = 'GPIB / IEEE-488'; Pattern = 'gpib|ieee-488'; },
  @{ Tech = 'MIDI'; Pattern = 'midi'; },
  @{ Tech = 'Modbus'; Pattern = 'modbus'; },
  @{ Tech = 'Serial / UART / RS485'; Pattern = 'serial|uart|rs-232|rs232|rs-485|rs485|COM\d'; },
  @{ Tech = 'CAN bus'; Pattern = '\bCAN\b|canbus'; },
  @{ Tech = 'MQTT'; Pattern = 'mqtt'; },
  @{ Tech = 'WebSocket'; Pattern = 'websocket|socket\.io'; },
  @{ Tech = 'REST API'; Pattern = 'axios|fetch\(|HttpClient|requests\.'; },
  @{ Tech = 'SQLite'; Pattern = 'sqlite'; },
  @{ Tech = 'PostgreSQL'; Pattern = 'postgres|psycopg|npgsql'; },
  @{ Tech = 'MySQL'; Pattern = 'mysql|pymysql|MySqlConnector'; },
  @{ Tech = 'Docker'; Pattern = 'docker|FROM\s+'; },
  @{ Tech = 'GitHub Actions'; Pattern = '^\s*jobs:'; },
  @{ Tech = 'Unit tests'; Pattern = 'pytest|unittest|xunit|nunit|jest|mocha|vitest'; }
)

function Is-ExcludedDir([string]$fullPath) {
  foreach ($name in $excludeDirNames) {
    if ($fullPath -match [Regex]::Escape("\$name\")) { return $true }
  }
  return $false
}

function Rel([string]$root, [string]$full) {
  return $full.Substring($root.Length).TrimStart('\\')
}

function Add-Set([System.Collections.Generic.HashSet[string]]$set, [string]$value) {
  if (-not [string]::IsNullOrWhiteSpace($value)) { [void]$set.Add($value) }
}

function Get-ProjectFiles([string]$path) {
  Get-ChildItem -Path $path -Recurse -File -ErrorAction SilentlyContinue | Where-Object {
    -not (Is-ExcludedDir $_.FullName)
  }
}

function Get-LanguageSummary($files) {
  $extCounts = @{}
  foreach ($f in $files) {
    $ext = $f.Extension.ToLowerInvariant()
    if ([string]::IsNullOrWhiteSpace($ext)) { continue }
    if (-not $extCounts.ContainsKey($ext)) { $extCounts[$ext] = 0 }
    $extCounts[$ext]++
  }

  $langCounts = @{}
  foreach ($ext in $extCounts.Keys) {
    if ($extToLang.ContainsKey($ext)) {
      $lang = $extToLang[$ext]
      if (-not $langCounts.ContainsKey($lang)) { $langCounts[$lang] = 0 }
      $langCounts[$lang] += $extCounts[$ext]
    }
  }

  return @{
    Lang = ($langCounts.GetEnumerator() | Sort-Object Value -Descending | Select-Object -First 10 | ForEach-Object { $_.Key })
    Types = ($extCounts.GetEnumerator() | Sort-Object Value -Descending | Select-Object -First 10 | ForEach-Object { $_.Key })
  }
}

function Get-Manifests([string]$path) {
  $set = New-Object System.Collections.Generic.HashSet[string]
  foreach ($pat in $manifestMarkers) {
    $hits = Get-ChildItem -Path $path -Recurse -File -Filter $pat -ErrorAction SilentlyContinue | Where-Object {
      -not (Is-ExcludedDir $_.FullName)
    }
    foreach ($h in $hits) { Add-Set $set (Rel $path $h.FullName) }
  }
  return $set
}

function Parse-Dependencies([string]$path) {
  $set = New-Object System.Collections.Generic.HashSet[string]

  $pkgFiles = Get-ChildItem -Path $path -Recurse -File -Filter package.json -ErrorAction SilentlyContinue | Where-Object { -not (Is-ExcludedDir $_.FullName) }
  foreach ($pkg in $pkgFiles) {
    try {
      $json = Get-Content $pkg.FullName -Raw | ConvertFrom-Json
      if ($json.dependencies) { $json.dependencies.PSObject.Properties.Name | ForEach-Object { Add-Set $set $_ } }
      if ($json.devDependencies) { $json.devDependencies.PSObject.Properties.Name | ForEach-Object { Add-Set $set $_ } }
    } catch {}
  }

  $reqFiles = Get-ChildItem -Path $path -Recurse -File -Filter requirements.txt -ErrorAction SilentlyContinue | Where-Object { -not (Is-ExcludedDir $_.FullName) }
  foreach ($req in $reqFiles) {
    Get-Content $req.FullName | ForEach-Object {
      $line = $_.Trim()
      if ($line -and -not $line.StartsWith('#')) {
        $name = ($line -split '[<>=!~\[]')[0].Trim()
        Add-Set $set $name
      }
    }
  }

  $csprojFiles = Get-ChildItem -Path $path -Recurse -File -Filter *.csproj -ErrorAction SilentlyContinue | Where-Object { -not (Is-ExcludedDir $_.FullName) }
  foreach ($csproj in $csprojFiles) {
    try {
      [xml]$xml = Get-Content $csproj.FullName -Raw
      foreach ($pr in $xml.Project.ItemGroup.PackageReference) {
        if ($pr.Include) { Add-Set $set $pr.Include }
      }
    } catch {}
  }

  return $set
}

function Detect-TechKeywords([string]$path, $files) {
  $set = New-Object System.Collections.Generic.HashSet[string]
  $textFiles = $files | Where-Object {
    $_.Length -le 1MB -and @('.txt','.md','.json','.yaml','.yml','.toml','.xml','.ini','.cfg','.conf','.py','.js','.jsx','.ts','.tsx','.cs','.csproj','.sln','.cpp','.c','.h','.hpp','.ino','.html','.css','.scss','.sql','.sh','.ps1','.bat','.cmd','.pro','.pri','.ioc','.xaml') -contains $_.Extension.ToLowerInvariant()
  } | Select-Object -First 4000

  foreach ($rule in $keywordMap) {
    $found = $false
    foreach ($f in $textFiles) {
      if ($found) { break }
      try {
        if (Select-String -Path $f.FullName -Pattern $rule.Pattern -CaseSensitive:$false -Quiet) {
          Add-Set $set $rule.Tech
          $found = $true
        }
      } catch {}
    }
  }

  return $set
}

$allResults = @()

foreach ($projectPath in $projects) {
  if (-not (Test-Path $projectPath)) { continue }

  $files = Get-ProjectFiles $projectPath
  $langData = Get-LanguageSummary $files
  $manifests = Get-Manifests $projectPath
  $deps = Parse-Dependencies $projectPath
  $techByKeywords = Detect-TechKeywords $projectPath $files

  $explicitTech = New-Object System.Collections.Generic.HashSet[string]

  foreach ($m in $manifests) {
    if ($m -like 'package.json') { Add-Set $explicitTech 'Node.js ecosystem (npm/yarn/pnpm)' }
    if ($m -like '*.csproj' -or $m -like '*.sln') { Add-Set $explicitTech '.NET / C#' }
    if ($m -like '*.ino' -or $m -like 'platformio.ini') { Add-Set $explicitTech 'Arduino ecosystem' }
    if ($m -like '*.ioc') { Add-Set $explicitTech 'STM32CubeMX / STM32' }
    if ($m -like 'Dockerfile*' -or $m -like 'docker-compose*.yml') { Add-Set $explicitTech 'Docker' }
    if ($m -like '.github\workflows\*.yml') { Add-Set $explicitTech 'GitHub Actions (CI/CD)' }
    if ($m -like 'requirements.txt' -or $m -like 'pyproject.toml') { Add-Set $explicitTech 'Python ecosystem (pip/pyproject)' }
    if ($m -like '*.pro' -or $m -like '*.pri') { Add-Set $explicitTech 'Qt/qmake' }
  }

  foreach ($t in $techByKeywords) { Add-Set $explicitTech $t }

  $allResults += [PSCustomObject]@{
    ProjectName = Split-Path $projectPath -Leaf
    Path = $projectPath
    Languages = ($langData.Lang | Sort-Object -Unique)
    FileTypes = ($langData.Types | Sort-Object -Unique)
    Manifests = ($manifests | Sort-Object)
    Technologies = ($explicitTech | Sort-Object)
    Dependencies = ($deps | Sort-Object | Select-Object -First 120)
  }
}

$reportPath = 'D:\My_project\CV_project\projects_technology_report.md'
$jsonPath = 'D:\My_project\CV_project\projects_technology_report.json'

$lines = New-Object System.Collections.Generic.List[string]
$lines.Add('# Portfolio Projects Technology Audit')
$lines.Add('')
$lines.Add("Generated: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')")
$lines.Add('')
$lines.Add('## Scope')
$lines.Add('All requested project folders were scanned recursively with exclusions for heavy build/dependency folders.')
$lines.Add('')
$lines.Add('Excluded directories: node_modules, .git, dist, build, bin, obj, .vs, .idea, .vscode, __pycache__, .venv, venv, target, out, Debug, Release')
$lines.Add('')
$lines.Add('## Related Project Groups')
foreach ($group in $relatedGroups) {
  $lines.Add("- " + ($group -join ' + '))
}
$lines.Add('')
$lines.Add('## Projects')
$lines.Add('')

foreach ($r in $allResults | Sort-Object ProjectName) {
  $lines.Add("### $($r.ProjectName)")
  $lines.Add("Path: $($r.Path)")
  $lines.Add('')

  if ($r.Languages.Count -gt 0) {
    $lines.Add('Languages: ' + ($r.Languages -join ', '))
  } else {
    $lines.Add('Languages: not confidently detected')
  }

  if ($r.Technologies.Count -gt 0) {
    $lines.Add('Key technologies: ' + ($r.Technologies -join ', '))
  } else {
    $lines.Add('Key technologies: not confidently detected from code/manifests')
  }

  if ($r.Manifests.Count -gt 0) {
    $lines.Add('Detected manifests/configs:')
    foreach ($m in ($r.Manifests | Select-Object -First 30)) {
      $lines.Add("- $m")
    }
  } else {
    $lines.Add('Detected manifests/configs: none found by known patterns')
  }

  if ($r.Dependencies.Count -gt 0) {
    $lines.Add('Detected dependencies/packages:')
    foreach ($d in ($r.Dependencies | Select-Object -First 40)) {
      $lines.Add("- $d")
    }
  } else {
    $lines.Add('Detected dependencies/packages: none parsed from known dependency files')
  }

  $lines.Add('')
}

$allTech = $allResults | ForEach-Object { $_.Technologies } | Sort-Object -Unique
$lines.Add('## Global Technology Index')
if ($allTech.Count -gt 0) {
  foreach ($t in $allTech) {
    $lines.Add("- $t")
  }
} else {
  $lines.Add('- No technologies were detected by the current rules.')
}

$lines.Add('')
$lines.Add('## Notes')
$lines.Add('- This report is generated by static scanning rules across manifests and source text patterns.')
$lines.Add('- If needed, rules can be expanded with additional domain-specific markers to increase recall even further.')

Set-Content -Path $reportPath -Value $lines -Encoding UTF8
$allResults | ConvertTo-Json -Depth 8 | Set-Content -Path $jsonPath -Encoding UTF8

Write-Output "WROTE: $reportPath"
Write-Output "WROTE: $jsonPath"

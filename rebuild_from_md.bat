@echo off
cd /d "%~dp0"

echo Rebuilding portfolio data from project.md files...
python rebuild_from_md.py

if errorlevel 1 (
  echo.
  echo Rebuild failed.
  echo Press any key to close this window...
  pause >nul
  exit /b 1
)

echo.
echo Build finished successfully.
echo Press any key to close this window...
pause >nul

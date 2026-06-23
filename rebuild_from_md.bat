@echo off
setlocal
cd /d "%~dp0"

set PORT=8090

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
echo.
echo ============================================================
echo   Local site is starting. Open it in your browser:
echo.
echo     http://localhost:%PORT%/
echo     http://localhost:%PORT%/project.html?id=bandora
echo.
echo   (Ctrl+click the link, or copy it into the browser.)
echo ============================================================
echo.

python serve_nocache.py %PORT%

endlocal

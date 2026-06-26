# EAGLE ULP Pin Analyzer

**Subtitle:** Schematic pin-connection analysis script
**Tags:** EAGLE ULP, EDA, Schematic, HTML export, CSV
**Path:** 
**Button:** 
**Platform:** EAGLE ULP / Autodesk EAGLE

## Purpose

A custom EAGLE ULP (User Language Program) for the EAGLE Schematic Editor that analyzes pin-level connectivity between components. You pick a Source component and a Target, and the tool reports, pin by pin, which Source pins connect to the Target and which are free (not connected). It runs inside EAGLE and presents the result in an interactive dialog with filtering, sorting and export.

## Key features

- Runs inside EAGLE from the "Run ULP" toolbar button; ships as a single `pin-usage-analyzer.ulp` placed in EAGLE's ulp folder
- Source and Target selectors: dropdowns that list every part in the schematic by reference and part number (for example "IC1 (STM32H743IIT6)"); the Target can be one component or "All elements"
- Analyze and Reset buttons run or clear the analysis; a status line shows progress (Ready / done)
- Results table with columns: Component Name, Pin #, Pin Name, Net Name, Target Pin, Target Component
- Color-coded rows: connected pins are highlighted (green), free / not-connected pins are shown distinctly, so pin usage is readable at a glance
- Filter by connection state: All, Connected, Free (N/C), each with a live count
- Sort by any column (Component Name and more), ascending or descending, applied on demand
- One-click export of the table to CSV, TXT or HTML
- Statistics line with a live counter of connected and free pins

## Tech Stack

| Component | Technology |
|---|---|
| Language | EAGLE ULP (C-like DSL) |
| Host | Autodesk EAGLE 7.6 (Schematic Editor) |
| Launch | Run ULP toolbar button (ulp/pin-usage-analyzer.ulp) |
| UI | Native EAGLE dialog: dropdowns, results table, filter / sort, export |
| Output | CSV, TXT, HTML |

## Media

### Photos
- projects/08-eagle-ulp/foto/Foto_1.png
- projects/08-eagle-ulp/foto/Foto_2.png
- projects/08-eagle-ulp/foto/Foto_3.png
- projects/08-eagle-ulp/foto/Foto_4.png
- projects/08-eagle-ulp/foto/Foto_5.png

### Videos

## Notes

<!-- Additional notes, links, screenshots, versions -->

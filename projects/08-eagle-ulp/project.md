# EAGLE ULP Pin Analyzer

**Subtitle:** Schematic pin-connection analysis script
**Tags:** EAGLE ULP, EDA, Schematic, HTML export, CSV
**Path:** `D:\My_project\eagle-upl-scripts`
**Button:** Go to App Website
**Platform:** EAGLE ULP / Autodesk EAGLE

## Purpose

Script analyzer for EAGLE Schematic Editor: analyzes which pins of the Source component are connected to the Target and which are free (N/C).

## Key features

- Autoassembly of components - schematic(SCH) { SCH.parts(P) } - name + value list
- Netlist analysis - for each Source pin, search for net connections with Target
- Filtering and sorting - All/Connected/Free N/C; 7 sorting criteria
- HTML rendering in EAGLE viewer with color marking (green/gray)
- Multi-format export - CSV, TXT, HTML
- Statistics line - counter of connected/free pins

## Tech Stack

| Component | Technology |
|---|---|
| Language | EAGLE ULP (C-like DSL) |
| Platform | Autodesk EAGLE / Fusion 360 Electronics |
| Output | HTML, CSV, TXT |

## Media

### Photos
<!-- Place photos in foto/ folder -->
<!-- Then specify paths in media.foto in assets/js/data.js -->

### Videos
<!-- Place videos in video/ folder -->
<!-- Then specify paths in media.video in assets/js/data.js -->

## Notes

<!-- Additional notes, links, screenshots, versions -->

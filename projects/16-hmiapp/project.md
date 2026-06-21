# HMIApp — Industrial HMI

**Subtitle:** Cable stripping machine Qt6 touchscreen HMI
**Tags:** C++17, Qt6, QML, Modbus RTU, SQLite, Kiosk, Inno Setup
**Path:** 
**Platform:** C++ + Qt6 + QML / Windows embedded

## Purpose

Full-featured industrial HMI for a cable stripping machine. 
Touchscreen UI on Qt Quick/QML with Modbus communication, recipe management and diagnostics.

## Key features

- Modbus async queue with priority queue and success statistics
- Barcode scanner — serial port or HID keyboard emulation via eventFilter
- Recipe engine — CRUD in SQLite
- Multi-axis config — corrections, offsets
- Details replacement wizard — guided step-by-step process
- USB detection — WMI COM object for arrival/removal
- Kiosk mode — Windows Registry Shell key;
- Release pipeline — Inno Setup + rcedit + signtool + PFX; i18n

## Tech Stack

| Component | Technology |
|---|---|
| Language | C++17 |
| UI | Qt6 Quick/QML|
| Database | SQLite |
| Communication | ModbusClient, SerialPort |
| Build | CMake 3.16+, Ninja, VS2022 |
| Deployment | Inno Setup, rcedit, signtool |
| Target | Windows 10 embedded (kiosk mode) |

## Media

### Photos
<!-- Place photos in foto/ folder -->
<!-- Then specify paths in media.foto in assets/js/data.js -->

### Videos
<!-- Place videos in video/ folder -->
<!-- Then specify paths in media.video in assets/js/data.js -->

## Notes

<!-- Additional notes, links, screenshots, versions -->

# HMIApp — Industrial HMI

**Subtitle:** Cable stripping machine Qt6 touchscreen HMI
**Path:** `D:\WORK_PROJECTS\UI-App`
**Platform:** C++ + Qt6 + QML / Windows embedded

## Purpose

Full-featured industrial HMI for a cable stripping machine. Touchscreen UI on Qt Quick/QML with Modbus communication, recipe management and diagnostics.

## Key features

- DeviceDataManager — 50+ Q_PROPERTY: machineState, pressure, barometer, LED strips, service counters
- Modbus async queue (QModbusClient) with priority queue and success statistics
- Barcode scanner — serial port or HID keyboard emulation via eventFilter
- Recipe engine (RecipeManager, ProductionDatabase) — CRUD in SQLite
- Multi-axis config A1–A4 — corrections, offsets, PID enable
- Blade replacement wizard — guided step-by-step process
- USB detection (UsbManager) — WMI COM object for arrival/removal
- Kiosk mode — Windows Registry Shell key; Qt Virtual Keyboard
- Release pipeline — Inno Setup + rcedit + signtool + PFX; i18n Qt Linguist

## Tech Stack

| Component | Technology |
|---|---|
| Language | C++17 |
| UI | Qt6 Quick/QML, Qt Virtual Keyboard |
| Database | Qt SQL (SQLite) |
| Communication | QModbusClient (SerialBus), QSerialPort |
| Build | CMake 3.16+, Ninja, VS2022 |
| Deployment | windeployqt, Inno Setup, rcedit, signtool |
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

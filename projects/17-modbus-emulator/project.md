# ModbusEmulator

**Subtitle:** Modbus RTU/TCP slave emulator for testing
**Tags:** C++17, Qt6, QML, QModbusServer, Testing tool
**Path:** `D:\WORK_PROJECTS\ModbusEmulator`
**Button:** Go to App Website
**Platform:** C++ + Qt6 + QML / Windows

## Purpose

Desktop for emulating Modbus RTU/TCP slave devices - testing master applications (e.g. HPLC Pump) without real hardware.

## Key features

- QModbusServer - FC 0x03/0x10, response generation
- ModbusDataStore - register bank: bulk init, per-address R/W, notifications
- QML UI - port/slave-ID configuration, real-time register table, Start/Stop
- LogHandler - a structured log of requests/responses with a timestamp
- CMakePresets - debug/release profiles

## Tech Stack

| Component | Technology |
|---|---|
| Language | C++17 |
| UI | Qt6 Quick/QML |
| Protocol | Qt Modbus (QModbusServer, SerialBus) |
| Build | CMake 3.16+, Ninja |

## Media

### Photos
<!-- Place photos in foto/ folder -->
<!-- Then specify paths in media.foto in assets/js/data.js -->

### Videos
<!-- Place videos in video/ folder -->
<!-- Then specify paths in media.video in assets/js/data.js -->

## Notes

<!-- Additional notes, links, screenshots, versions -->

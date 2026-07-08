# ModbusEmulator

**Subtitle:** Modbus RTU/TCP slave emulator with a QML dashboard
**Category:** Desktop / Qt
**Tags:** C++17, Qt6, QML, Modbus RTU, Modbus TCP, Testing tool
**Path:** https://github.com/dgimbialo/ModbusEmulator
**Button:** Go to Git
**Platform:** C++ + Qt6 + QML / Windows

## Purpose

The project started as a small helper tool for testing Modbus communication in a commercial project. Similar emulators do exist, but I chose to build a simple one of my own for testing; it kept gaining features and grew into a full-fledged application.

A desktop Modbus slave (server) emulator built with Qt 6 / QML and C++17. It emulates a field device over a serial line (Modbus RTU) or a network socket (Modbus TCP), exposes all four Modbus tables for live editing, and can feed registers with generated waveforms so a connected master sees realistic process data. Built to test Modbus master applications without real hardware.

The app doubles as a QML showcase: a custom dark industrial theme, a component-based UI, Canvas-drawn real-time charts, animated delegates and a clean C++ backend integration.

## Key features

- Modbus RTU and Modbus TCP server modes, switchable at runtime, with a full connection editor (serial port, baud, parity, stop bits, TCP port, unit ID)
- All four Modbus tables live: holding / input registers with named address groups, filtering and an inline 16-bit editor; coils / discrete inputs as an LED-style toggle grid
- Signal simulation engine: sine, square, ramp, random and increment generators writing into any register at a configurable interval
- Dashboard: read/write/error counters, uptime and a real-time auto-scaling trend chart of any register drawn on a Canvas
- JSON project files: the whole emulator state (connection, tables, groups, generators, view settings) saves to a human-readable .json and reopens on start
- Console with severity filtering, batched updates and smart auto-scroll
- Two-way sync: master writes appear in the UI instantly; UI edits are pushed to the server data map

## Tech Stack

| Component | Technology |
|---|---|
| Language | C++17 |
| UI | Qt6 Quick / QML (Material dark, custom theme) |
| Protocol | Qt SerialBus (QModbusServer, RTU + TCP) |
| Charts | QML Canvas (auto-scale, grid, gradient fill) |
| Persistence | JSON project files |
| Build | CMake 3.16+, Qt 6.4+ |

## Media

### Photos
- projects/17-modbus-emulator/foto/Foto_1.png
- projects/17-modbus-emulator/foto/Foto_2.png
- projects/17-modbus-emulator/foto/Foto_3.png
- projects/17-modbus-emulator/foto/Foto_4.png
- projects/17-modbus-emulator/foto/Foto_6.png
- projects/17-modbus-emulator/foto/Foto_7.png

### Videos

## Notes

- MIT-licensed application code; built with Qt 6 used under LGPLv3 (dynamic linking).
- Works without hardware: Modbus TCP against 127.0.0.1, or Modbus RTU over a virtual serial port pair (com0com).

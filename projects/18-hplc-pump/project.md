# HPLC Syringe Pump

**Subtitle:** HPLC pump desktop control via Modbus RTU
**Category:** Desktop / Qt
**Tags:** Commercial, C++17, Qt6, QML, Modbus RTU, LGPLv3, Custom Charts
**Path:** 
**Button:** 
**Platform:** C++ + Qt6 + QML / Windows

## Purpose

Commercial Windows desktop application to control and monitor an HPLC syringe pump over Modbus RTU: flow control, real-time pressure and flow monitoring, a guided calibration procedure and flow-method management. Built with C++17 and Qt6/QML.

A deliberate licensing and engineering decision runs through the project: everything is built to use Qt for free under the LGPLv3 license, with no paid Qt component. In particular, a custom multi-axis real-time chart was developed own instead of Qt Charts(is not free), which is only available under GPL or a commercial license. This keeps all the benefits of Qt at zero licensing cost.

## Key features

- Custom multi-axis real-time chart: developed in-house in Qt Quick to plot flow, pressure and more on independent axes, deliberately avoiding the commercial / GPL-only Qt Charts module
- Modbus RTU master: asynchronous priority queue over Qt SerialBus, with auto-reconnect and an adjustable interval
- Flow Method Manager: create, store and run flow methods
- Guided calibration procedure
- Real-time monitoring of flow and pressure
- Free-Qt architecture: the whole application uses Qt under LGPLv3 (dynamic linking), so no paid Qt license is required

## Tech Stack

| Component | Technology |
|---|---|
| Language | C++17 |
| UI | Qt6 Quick / QML |
| Charting | Custom in-house multi-axis chart (no Qt Charts, no commercial chart library) |
| Communication | Qt SerialBus, Modbus RTU |
| Qt license | LGPLv3 (dynamic linking, no paid components) |
| Build | CMake 3.16+, Ninja |
| Deployment | Inno Setup, signtool |

## Media

### Photos
- projects/18-hplc-pump/foto/Foto_1.png
- projects/18-hplc-pump/foto/Foto_2.png
- projects/18-hplc-pump/foto/Foto_3.png
- projects/18-hplc-pump/foto/Foto_4.png
- projects/18-hplc-pump/foto/Foto_5.png
- projects/18-hplc-pump/foto/Foto_6.png
- projects/18-hplc-pump/foto/Foto_7.png
- projects/18-hplc-pump/foto/Foto_8.png

### Videos

## Notes

- Commercial project C++/Qt/QML.
- Qt is used under the free LGPLv3 license (dynamic linking). A custom multi-axis chart replaces the commercial / GPL-only Qt Charts module, so the app needs no paid Qt component.

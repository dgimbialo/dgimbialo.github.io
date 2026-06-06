# HPLC Syringe Pump

**Subtitle:** HPLC pump desktop control via Modbus RTU
**Path:** `D:\WORK_PROJECTS\hplcpump`
**Platform:** C++ + Qt6 + QML / Windows

## Purpose

Desktop control of an HPLC syringe pump via Modbus RTU: flow parameters, automated methods, pressure and flow monitoring.

## Key features

- PumpManager — 30+ Q_PROPERTY: flowRate, syringeA/BVolume, pressures, sequencerStep, faultCode
- Modbus async priority queue — readHolding/readInput/writeSingle/writeMultipleAsync; statistics
- Auto-reconnect with adjustable interval
- Flow Method Manager — sequence steps: flowRate, composition, duration, volume
- Flowmeter calibration (FlowMeterCalibrationManager) — guided procedure
- Setpoints R/W — flowRateSetpoint, pmin/pmax, fillFlowRate, flushFlowRate
- 8 valves (valve1–8), 2 relays; homed/filling pump A/B
- Real-time charting (HPLCChart.qml) — pressure/flow
- Qt Test + CTest unit tests

## Tech Stack

| Component | Technology |
|---|---|
| Language | C++17 |
| UI | Qt6 Quick/QML |
| Communication | QModbusClient (SerialBus RTU) |
| Testing | Qt Test + CTest |
| Build | CMake 3.16+, Ninja |
| Deployment | windeployqt, Inno Setup, signtool |

## Media

### Photos
<!-- Place photos in foto/ folder -->
<!-- Then specify paths in media.foto in assets/js/data.js -->

### Videos
<!-- Place videos in video/ folder -->
<!-- Then specify paths in media.video in assets/js/data.js -->

## Notes

<!-- Additional notes, links, screenshots, versions -->

# HPLC Syringe Pump

**Підзаголовок:** HPLC pump desktop control via Modbus RTU  
**Шлях:** `D:\WORK_PROJECTS\hplcpump`  
**Платформа:** C++ + Qt6 + QML / Windows

## Призначення

Desktop управління HPLC шприцевим насосом через Modbus RTU: параметри потоку, автоматизовані методи, моніторинг тиску та витрати.

## Ключові функції

- PumpManager — 30+ Q_PROPERTY: flowRate, syringeA/BVolume, pressures, sequencerStep, faultCode
- Modbus async priority queue — readHolding/readInput/writeSingle/writeMultipleAsync; статистика
- Auto-reconnect з налаштовуваним інтервалом
- Flow Method Manager — sequence steps: flowRate, composition, duration, volume
- Flowmeter calibration (FlowMeterCalibrationManager) — guided процедура
- Setpoints R/W — flowRateSetpoint, pmin/pmax, fillFlowRate, flushFlowRate
- 8 клапанів (valve1–8), 2 реле; homed/filling pump A/B
- Real-time charting (HPLCChart.qml) — тиск/витрата
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

## Медіа

### Photos
<!-- Place photos in foto/ folder -->
<!-- Then specify paths in media.foto in assets/js/data.js -->

### Videos
<!-- Place videos in video/ folder -->
<!-- Then specify paths in media.video in assets/js/data.js -->

## Нотатки

<!-- Додаткові нотатки, посилання, скріншоти, версії -->

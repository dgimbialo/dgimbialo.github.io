# ModbusEmulator

**Підзаголовок:** Modbus RTU/TCP slave emulator for testing  
**Шлях:** `D:\WORK_PROJECTS\ModbusEmulator`  
**Платформа:** C++ + Qt6 + QML / Windows

## Призначення

Desktop для емуляції Modbus RTU/TCP slave пристрою — тестування master-застосунків (HMIApp, HPLC Pump) без реального обладнання.

## Ключові функції

- QModbusServer — FC 0x03/0x10, генерація відповідей
- ModbusDataStore — register bank: bulk init, per-address R/W, notifications
- QML UI — конфігурація порту/slave-ID, real-time таблиця регістрів, Start/Stop
- LogHandler — структурований лог запитів/відповідей із timestamp
- CMakePresets — debug/release profiles

## Tech Stack

| Component | Technology |
|---|---|
| Language | C++17 |
| UI | Qt6 Quick/QML |
| Protocol | Qt Modbus (QModbusServer, SerialBus) |
| Build | CMake 3.16+, Ninja |

## Медіа

### Photos
<!-- Place photos in foto/ folder -->
<!-- Then specify paths in media.foto in assets/js/data.js -->

### Videos
<!-- Place videos in video/ folder -->
<!-- Then specify paths in media.video in assets/js/data.js -->

## Нотатки

<!-- Додаткові нотатки, посилання, скріншоти, версії -->

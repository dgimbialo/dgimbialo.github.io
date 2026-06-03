# ModbusEmulator

**-ƒ-û-¦-+-¦-¦-+-+-+-¦-+-¦:** Modbus RTU/TCP slave emulator for testing  
**-¿-+-Å-à:** `D:\WORK_PROJECTS\ModbusEmulator`  
**-ƒ-+-¦-é-ä-+-Ç-+-¦:** C++ + Qt6 + QML / Windows

## -ƒ-Ç-+-+-+-¦-ç-¦-+-+-Å

Desktop -¦-+-Å -¦-+-â-+-Å-å-û-ù Modbus RTU/TCP slave -+-Ç-+-ü-é-Ç-+-Ä GÇö -é-¦-ü-é-â-¦-¦-+-+-Å master--+-¦-ü-é-+-ü-â-+-¦-û-¦ (HMIApp, HPLC Pump) -¦-¦-+ -Ç-¦-¦-+-î-+-+-¦-+ -+-¦-+-¦-¦-+-¦-+-+-Å.

## -Ü-+-Ä-ç-+-¦-û -ä-â-+-¦-å-û-ù

- QModbusServer GÇö FC 0x03/0x10, -¦-¦-+-¦-Ç-¦-å-û-Å -¦-û-¦-+-+-¦-û-¦-¦-¦
- ModbusDataStore GÇö register bank: bulk init, per-address R/W, notifications
- QML UI GÇö -¦-+-+-ä-û-¦-â-Ç-¦-å-û-Å -+-+-Ç-é-â/slave-ID, real-time -é-¦-¦-+-+-å-Å -Ç-¦-¦-û-ü-é-Ç-û-¦, Start/Stop
- LogHandler GÇö -ü-é-Ç-â-¦-é-â-Ç-+-¦-¦-+-+-¦ -+-+-¦ -+-¦-+-+-é-û-¦/-¦-û-¦-+-+-¦-û-¦-¦-¦ -û-+ timestamp
- CMakePresets GÇö debug/release profiles

## Tech Stack

| Component | Technology |
|---|---|
| Language | C++17 |
| UI | Qt6 Quick/QML |
| Protocol | Qt Modbus (QModbusServer, SerialBus) |
| Build | CMake 3.16+, Ninja |

## -£-¦-¦-û-¦

### Photos
<!-- Place photos in foto/ folder -->
<!-- Then specify paths in media.foto in assets/js/data.js -->

### Videos
<!-- Place videos in video/ folder -->
<!-- Then specify paths in media.video in assets/js/data.js -->

## -¥-+-é-¦-é-¦-+

<!-- -ö-+-¦-¦-é-¦-+-¦-û -+-+-é-¦-é-¦-+, -+-+-ü-+-+-¦-+-+-Å, -ü-¦-Ç-û-+-ê-+-é-+, -¦-¦-Ç-ü-û-ù -->


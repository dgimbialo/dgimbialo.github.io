# HMIApp GÇö Industrial HMI

**-ƒ-û-¦-+-¦-¦-+-+-+-¦-+-¦:** Cable stripping machine Qt6 touchscreen HMI  
**-¿-+-Å-à:** `D:\WORK_PROJECTS\UI-App`  
**-ƒ-+-¦-é-ä-+-Ç-+-¦:** C++ + Qt6 + QML / Windows embedded

## -ƒ-Ç-+-+-+-¦-ç-¦-+-+-Å

-ƒ-+-¦-+-+-ä-â-+-¦-å-û-+-+-¦-+-î-+-+-¦ industrial HMI -¦-+-Å -¦-¦-¦-¦-+-¦-+-¦-ç-+-ü-+-+-¦-+ -¦-¦-Ç-ü-é-¦-é-â. Touchscreen UI -+-¦ Qt Quick/QML -+ Modbus -+-¦'-Å-+-¦-+-+, -â-+-Ç-¦-¦-+-û-+-+-Å-+ -Ç-¦-å-¦-+-é-¦-+-+ -é-¦ -¦-û-¦-¦-+-+-ü-é-+-¦-+-Ä.

## -Ü-+-Ä-ç-+-¦-û -ä-â-+-¦-å-û-ù

- DeviceDataManager GÇö 50+ Q_PROPERTY: machineState, pressure, barometer, LED strips, service counters
- Modbus async queue (QModbusClient) -+ priority queue -é-¦ -ü-é-¦-é-+-ü-é-+-¦-+-Ä -â-ü-+-û-ê-+-+-ü-é-û
- Barcode scanner GÇö serial port -¦-¦-+ HID keyboard emulation -ç-¦-Ç-¦-+ eventFilter
- Recipe engine (RecipeManager, ProductionDatabase) GÇö CRUD -â SQLite
- Multi-axis config A1GÇôA4 GÇö corrections, offsets, PID enable
- Blade replacement wizard GÇö guided -+-+-¦-Ç-+-¦-+-¦-+-¦ -+-Ç-+-å-¦-ü
- USB detection (UsbManager) GÇö WMI COM--+-¦'-ö-¦-é -¦-+-Å arrival/removal
- Kiosk mode GÇö Windows Registry Shell key; Qt Virtual Keyboard
- Release pipeline GÇö Inno Setup + rcedit + signtool + PFX; i18n Qt Linguist

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

## -£-¦-¦-û-¦

### Photos
<!-- Place photos in foto/ folder -->
<!-- Then specify paths in media.foto in assets/js/data.js -->

### Videos
<!-- Place videos in video/ folder -->
<!-- Then specify paths in media.video in assets/js/data.js -->

## -¥-+-é-¦-é-¦-+

<!-- -ö-+-¦-¦-é-¦-+-¦-û -+-+-é-¦-é-¦-+, -+-+-ü-+-+-¦-+-+-Å, -ü-¦-Ç-û-+-ê-+-é-+, -¦-¦-Ç-ü-û-ù -->


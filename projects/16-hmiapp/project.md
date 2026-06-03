# HMIApp — Industrial HMI

**Підзаголовок:** Cable stripping machine Qt6 touchscreen HMI  
**Шлях:** `D:\WORK_PROJECTS\UI-App`  
**Платформа:** C++ + Qt6 + QML / Windows embedded

## Призначення

Повнофункціональний industrial HMI для кабелезачисного верстату. Touchscreen UI на Qt Quick/QML з Modbus зв'язком, управлінням рецептами та діагностикою.

## Ключові функції

- DeviceDataManager — 50+ Q_PROPERTY: machineState, pressure, barometer, LED strips, service counters
- Modbus async queue (QModbusClient) з priority queue та статистикою успішності
- Barcode scanner — serial port або HID keyboard emulation через eventFilter
- Recipe engine (RecipeManager, ProductionDatabase) — CRUD у SQLite
- Multi-axis config A1–A4 — corrections, offsets, PID enable
- Blade replacement wizard — guided покроковий процес
- USB detection (UsbManager) — WMI COM-об'єкт для arrival/removal
- Kiosk mode — Windows Registry Shell key; Qt Virtual Keyboard
- Release pipeline — Inno Setup + rcedit + signtool + PFX; i18n Qt Linguist

## Технологічний стек

| Компонент | Технологія |
|---|---|
| Мова | C++17 |
| UI | Qt6 Quick/QML, Qt Virtual Keyboard |
| Database | Qt SQL (SQLite) |
| Communication | QModbusClient (SerialBus), QSerialPort |
| Build | CMake 3.16+, Ninja, VS2022 |
| Deployment | windeployqt, Inno Setup, rcedit, signtool |
| Target | Windows 10 embedded (kiosk mode) |

## Медіа

### Фото
<!-- Розмістіть фотографії у папці foto/ -->
<!-- Потім вкажіть шляхи у media.foto в assets/js/data.js -->

### Відео
<!-- Розмістіть відеофайли у папці video/ -->
<!-- Потім вкажіть шляхи у media.video в assets/js/data.js -->

## Нотатки

<!-- Додаткові нотатки, посилання, скріншоти, версії -->

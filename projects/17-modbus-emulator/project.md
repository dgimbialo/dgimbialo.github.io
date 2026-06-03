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

## Технологічний стек

| Компонент | Технологія |
|---|---|
| Мова | C++17 |
| UI | Qt6 Quick/QML |
| Protocol | Qt Modbus (QModbusServer, SerialBus) |
| Build | CMake 3.16+, Ninja |

## Медіа

### Фото
<!-- Розмістіть фотографії у папці foto/ -->
<!-- Потім вкажіть шляхи у media.foto в assets/js/data.js -->

### Відео
<!-- Розмістіть відеофайли у папці video/ -->
<!-- Потім вкажіть шляхи у media.video в assets/js/data.js -->

## Нотатки

<!-- Додаткові нотатки, посилання, скріншоти, версії -->

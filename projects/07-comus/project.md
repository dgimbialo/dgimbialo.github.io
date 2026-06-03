# COMUS Temp Controller

**Підзаголовок:** Solar collector thermal management firmware  
**Шлях:** `D:\My_project\COMUS_ACTUAL`  
**Платформа:** Arduino C/C++ / ATmega

## Призначення

Firmware автономного контролера для системи сонячного колектора: управляє вентилятором/насосом на основі різниці температур між колектором і приміщенням.

## Ключові функції

- Двосенсорна система DS18B20 (OneWire) — HomeThermometer + CollectorThermometer; перевірка 2 девайсів при старті
- 3 режими — OFF / COOL / HEAT на основі різниці температур + ручний режим
- EEPROM persistence — nSetTemp та nManualMode відновлюються після вимкнення
- Interrupt-driven кнопки — attachInterrupt pin 2; debounce 100 мс; Temp Down / Mode / Temp Up
- LCD UI (LiquidCrystal 16×2) — обидві температури, режим, задана температура

## Технологічний стек

| Компонент | Технологія |
|---|---|
| Platform | Arduino (ATmega) |
| Sensors | DS18B20 via OneWire + DallasTemperature |
| Display | LiquidCrystal 16×2 |
| Persistence | EEPROM read/write/update |
| Interrupts | attachInterrupt |

## Медіа

### Фото
<!-- Розмістіть фотографії у папці foto/ -->
<!-- Потім вкажіть шляхи у media.foto в assets/js/data.js -->

### Відео
<!-- Розмістіть відеофайли у папці video/ -->
<!-- Потім вкажіть шляхи у media.video в assets/js/data.js -->

## Нотатки

<!-- Додаткові нотатки, посилання, скріншоти, версії -->

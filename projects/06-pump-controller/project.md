# Pump Controller Arduino

**Підзаголовок:** 3-sensor liquid level controller  
**Шлях:** `D:\My_project\Pump_Controller_MEGA_2560`  
**Платформа:** Arduino C/C++ / Arduino Mega 2560

## Призначення

Firmware контролера насосу для автоматичної та ручної подачі рідини з 3-сенсорною системою визначення рівня.

## Ключові функції

- 3-сенсорна система — LOW/MIDDLE/HIGH рівень; управління реле насосу
- Автоматичний режим — управління за рівнем рідини
- Ручний режим — override через кнопки з індикацією на LCD
- Error state detection — аварійні ситуації (відсутність/помилка сенсора)
- LCD UI (LiquidCrystal 16×2) — режим, рівень, стан помилок
- Централізований custom_pins.h для GPIO маппінгу

## Технологічний стек

| Компонент | Технологія |
|---|---|
| Platform | Arduino Mega 2560 |
| Framework | Arduino C/C++ |
| Display | LiquidCrystal 16×2 |
| Build | Arduino IDE |

## Медіа

### Фото
<!-- Розмістіть фотографії у папці foto/ -->
<!-- Потім вкажіть шляхи у media.foto в assets/js/data.js -->

### Відео
<!-- Розмістіть відеофайли у папці video/ -->
<!-- Потім вкажіть шляхи у media.video в assets/js/data.js -->

## Нотатки

<!-- Додаткові нотатки, посилання, скріншоти, версії -->

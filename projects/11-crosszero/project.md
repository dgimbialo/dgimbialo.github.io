# CrossZeroDetector

**Підзаголовок:** ESP32 grid frequency meter via zero-crossing  
**Шлях:** `D:\My_project\CrossZeroDetector`  
**Платформа:** Arduino C++ / ESP32 (Heltec WiFi LoRa 32 V2)
**Парна система:** webHz (#5)

## Призначення

Embedded пристрій для точного вимірювання частоти мережі 50 Гц методом підрахунку переходів через нуль. Відправляє виміри до Google Sheets, відображає на OLED.

## Ключові функції

- Interrupt-based (IRAM_ATTR handleInterrupt) — 50 фронтів = 1 цикл; frequency = 50.0 * 1e6 / duration
- SSD1306 OLED — real-time частота з точністю 4 знаки після коми
- NTP синхронізація (NTPClient + WiFiUDP) — UNIX timestamp для кожного виміру
- Фільтрація 45–55 Гц; накопичення за 10-секундне вікно
- Google Sheets POST JSON (ArduinoJson) до Apps Script кожні 10 секунд
- Heltec V2 специфіка — Vext/RST управління живленням OLED

## Технологічний стек

| Компонент | Технологія |
|---|---|
| Platform | ESP32 (Heltec WiFi LoRa 32 V2) |
| Framework | PlatformIO + Arduino |
| Display | SSD1306Wire (OLED 128×64) |
| Time | NTPClient (pool.ntp.org) |
| Serialization | ArduinoJson |
| Cloud | Google Apps Script HTTP endpoint |

## Медіа

### Фото
<!-- Розмістіть фотографії у папці foto/ -->
<!-- Потім вкажіть шляхи у media.foto в assets/js/data.js -->

### Відео
<!-- Розмістіть відеофайли у папці video/ -->
<!-- Потім вкажіть шляхи у media.video в assets/js/data.js -->

## Нотатки

<!-- Додаткові нотатки, посилання, скріншоти, версії -->

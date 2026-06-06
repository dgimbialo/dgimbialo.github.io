# CrossZeroDetector

**Subtitle:** ESP32 grid frequency meter via zero-crossing
**Path:** `D:\My_project\CrossZeroDetector`
**Platform:** Arduino C++ / ESP32 (Heltec WiFi LoRa 32 V2)
**Pair system:** webHz (#5)

## Purpose

Embedded device for accurate measurement of 50 Hz network frequency by counting zero crossings. Sends measurements to Google Sheets, displays on OLED.

## Key features

- Interrupt-based (IRAM_ATTR handleInterrupt) — 50 edges = 1 cycle; frequency = 50.0 * 1e6 / duration
- SSD1306 OLED — real-time frequency with 4 decimal places
- NTP synchronization (NTPClient + WiFiUDP) — UNIX timestamp for each measurement
- Filtering 45–55 Hz; accumulation in a 10-second window
- Google Sheets POST JSON (ArduinoJson) to Apps Script every 10 seconds
- Heltec V2 specification — Vext/RST OLED power management

## Tech Stack

| Component | Technology |
|---|---|
| Platform | ESP32 (Heltec WiFi LoRa 32 V2) |
| Framework | PlatformIO + Arduino |
| Display | SSD1306Wire (OLED 128×64) |
| Time | NTPClient (pool.ntp.org) |
| Serialization | ArduinoJson |
| Cloud | Google Apps Script HTTP endpoint |

## Media

### Photos
<!-- Place photos in foto/ folder -->
<!-- Then specify paths in media.foto in assets/js/data.js -->

### Videos
<!-- Place videos in video/ folder -->
<!-- Then specify paths in media.video in assets/js/data.js -->

## Notes

<!-- Additional notes, links, screenshots, versions -->

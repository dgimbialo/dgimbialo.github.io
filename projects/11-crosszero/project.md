# CrossZeroDetector

**Subtitle:** Interrupt-driven AC power-grid frequency meter · Heltec WiFi LoRa 32 V2 → Supabase
**Path:**
**Platform:** Arduino C++ / ESP32 (Heltec WiFi LoRa 32 V2) + FreeRTOS
**GitHub:** https://github.com/dgimbialo/CrossZeroDetector
**Pair System:** webHz (#05)

## Purpose

Firmware for measuring the frequency of the AC power grid (nominal 50 Hz) using zero-crossing detection. Timestamps each sample via NTP with DST awareness, and batches them to Supabase over HTTPS every 5s. FreeRTOS runs the sender on Core 0 and the ISR + sampling loop on Core 1.

## Key Features

- Hardware interrupt (IRAM_ATTR) on GPIO 13 with 15 ms noise filter (> 66 Hz ignored)
- Sanity check: only records samples in range 45–55 Hz
- 1-second sampling interval; batches up to 60 samples sent every 5 s
- FreeRTOS dual-core: senderTask on Core 0, ISR + loop on Core 1 with portMUX mutex
- 3-attempt HTTP retry with 2 s delay on Supabase POST failure
- ISO 8601 timestamps with ms precision and Kyiv DST (UTC+2/+3) computed from NTP
- NTP re-sync every 60 s for drift-free timestamps
- SSD1306 OLED 128x64 — frequency (4 decimal places), time, Wi-Fi & DB status
- Auto Wi-Fi reconnect on link loss

## Tech Stack

| Component | Technology |
|---|---|
| Platform | ESP32 (Heltec WiFi LoRa 32 V2) |
| Build | PlatformIO + Arduino framework |
| RTOS | FreeRTOS (built-in ESP-IDF) |
| Cloud | Supabase REST API (PostgreSQL + PostgREST) |
| Serialization | ArduinoJson 7.2.1 |
| Time | NTPClient 3.2.1 (pool.ntp.org) + custom Kyiv DST |
| Display | Heltec_LoRa_OLED / SSD1306Wire (128x64) |

## Media

### Photos

- projects/11-crosszero/foto/foto_1.JPG
- projects/11-crosszero/foto/foto_2.JPG

### Videos

## Notes


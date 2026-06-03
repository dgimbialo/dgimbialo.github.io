# CrossZeroDetector

**-ƒ-û-¦-+-¦-¦-+-+-+-¦-+-¦:** ESP32 grid frequency meter via zero-crossing  
**-¿-+-Å-à:** `D:\My_project\CrossZeroDetector`  
**-ƒ-+-¦-é-ä-+-Ç-+-¦:** Arduino C++ / ESP32 (Heltec WiFi LoRa 32 V2)
**-ƒ-¦-Ç-+-¦ -ü-+-ü-é-¦-+-¦:** webHz (#5)

## -ƒ-Ç-+-+-+-¦-ç-¦-+-+-Å

Embedded -+-Ç-+-ü-é-Ç-û-¦ -¦-+-Å -é-+-ç-+-+-¦-+ -¦-+-+-û-Ç-Ä-¦-¦-+-+-Å -ç-¦-ü-é-+-é-+ -+-¦-Ç-¦-¦-û 50 -ô-å -+-¦-é-+-¦-+-+ -+-û-¦-Ç-¦-à-â-+-¦-â -+-¦-Ç-¦-à-+-¦-û-¦ -ç-¦-Ç-¦-+ -+-â-+-î. -Æ-û-¦-+-Ç-¦-¦-+-Å-ö -¦-+-+-û-Ç-+ -¦-+ Google Sheets, -¦-û-¦-+-¦-Ç-¦-¦-¦-ö -+-¦ OLED.

## -Ü-+-Ä-ç-+-¦-û -ä-â-+-¦-å-û-ù

- Interrupt-based (IRAM_ATTR handleInterrupt) GÇö 50 -ä-Ç-+-+-é-û-¦ = 1 -å-+-¦-+; frequency = 50.0 * 1e6 / duration
- SSD1306 OLED GÇö real-time -ç-¦-ü-é-+-é-¦ -+ -é-+-ç-+-û-ü-é-Ä 4 -+-+-¦-¦-+ -+-û-ü-+-Å -¦-+-+-+
- NTP -ü-+-+-à-Ç-+-+-û-+-¦-å-û-Å (NTPClient + WiFiUDP) GÇö UNIX timestamp -¦-+-Å -¦-+-¦-+-+-¦-+ -¦-+-+-û-Ç-â
- -ñ-û-+-î-é-Ç-¦-å-û-Å 45GÇô55 -ô-å; -+-¦-¦-+-+-+-ç-¦-+-+-Å -+-¦ 10--ü-¦-¦-â-+-¦-+-¦ -¦-û-¦-+-+
- Google Sheets POST JSON (ArduinoJson) -¦-+ Apps Script -¦-+-¦-+-û 10 -ü-¦-¦-â-+-¦
- Heltec V2 -ü-+-¦-å-+-ä-û-¦-¦ GÇö Vext/RST -â-+-Ç-¦-¦-+-û-+-+-Å -¦-+-¦-+-¦-+-+-Å-+ OLED

## Tech Stack

| Component | Technology |
|---|---|
| Platform | ESP32 (Heltec WiFi LoRa 32 V2) |
| Framework | PlatformIO + Arduino |
| Display | SSD1306Wire (OLED 128+ù64) |
| Time | NTPClient (pool.ntp.org) |
| Serialization | ArduinoJson |
| Cloud | Google Apps Script HTTP endpoint |

## -£-¦-¦-û-¦

### Photos
<!-- Place photos in foto/ folder -->
<!-- Then specify paths in media.foto in assets/js/data.js -->

### Videos
<!-- Place videos in video/ folder -->
<!-- Then specify paths in media.video in assets/js/data.js -->

## -¥-+-é-¦-é-¦-+

<!-- -ö-+-¦-¦-é-¦-+-¦-û -+-+-é-¦-é-¦-+, -+-+-ü-+-+-¦-+-+-Å, -ü-¦-Ç-û-+-ê-+-é-+, -¦-¦-Ç-ü-û-ù -->


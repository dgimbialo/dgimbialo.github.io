# COMUS Temp Controller

**Subtitle:** Solar collector thermal management firmware
**Tags:** Commercial, Arduino, C/C++, DS18B20, OneWire, EEPROM, LCD
**Path:** 
**Button:** Go to App Website
**Platform:** Arduino C/C++ / ATmega

## Purpose

Commercial standalone controller firmware for a solar collector system: Controls the fan based on the temperature difference between the collector and the room.

## Key features

- Two-sensor system DS18B20 (OneWire) - HomeThermometer + CollectorThermometer; check of 2 devices at start
- 3 modes - OFF / COOL / HEAT based on temperature difference + manual mode
- EEPROM persistence - nSetTemp and nManualMode are restored after shutdown
- Interrupt-driven buttons -  debounce 100 ms; Temp Down / Mode / Temp Up
- LCD UI (LiquidCrystal 16×2) - both temperatures, mode, set temperature

## Tech Stack

| Component | Technology |
|---|---|
| Platform | Arduino (ATmega) |
| Sensors | DS18B20 via OneWire + DallasTemperature |
| Display | LiquidCrystal 16×2 |
| Persistence | EEPROM read/write/update |
| Interrupts | attachInterrupt |

## Media

### Photos
<!-- Place photos in foto/ folder -->
<!-- Then specify paths in media.foto in assets/js/data.js -->

### Videos
<!-- Place videos in video/ folder -->
<!-- Then specify paths in media.video in assets/js/data.js -->

## Notes

<!-- Additional notes, links, screenshots, versions -->

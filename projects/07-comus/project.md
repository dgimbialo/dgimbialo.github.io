# MUSON Temp Controller

**Subtitle:** Controller for a solar air collector (firmware + hardware)
**Category:** Embedded / PlatformIO
**Tags:** Commercial, PlatformIO, C/C++, PCB, DS18B20, OneWire, EEPROM, LCD
**Path:** 
**Button:** 
**Platform:** PlatformIO / C/C++ / ATmega

## Purpose

Commercial controller (firmware and hardware) for a MUSON solar air collector: a device that heats outdoor air on a solar absorber and blows warm, dry, fresh air into a room to cut humidity, mould and odours and save on heating. The MUSON controller drives the fan automatically from the temperature difference between the collector and the room, so air is only pushed inside once the collector is hot enough.

The device went through several design iterations, from version 1 to version 3, over the course of development; the different revisions can be seen in the photos. The work covered the full path to production, including the BOM, Gerber files and manufacturing preparation.

## Key features

- Fan control by temperature difference: reads the collector and room temperatures and runs the fan only when the collector is warm enough to deliver useful heat
- Two DS18B20 sensors over OneWire (collector + room), with a device check at startup
- Operating modes: OFF / COOL / HEAT by temperature difference, plus a manual mode
- EEPROM persistence: the set temperature and manual mode are restored after a power cycle
- Interrupt-driven buttons with debounce: Temp Down / Mode / Temp Up
- LCD UI (16x2): both temperatures, the current mode and the set temperature
- Hardware taken through three PCB revisions (v1 to v3) to a production-ready design

## Tech Stack

| Component | Technology |
|---|---|
| Toolchain | AVR Studio / PlatformIO |
| Sensors | DS18B20 over OneWire (DallasTemperature) |
| Display | LiquidCrystal 16x2 |
| Persistence | EEPROM read / write / update |
| Inputs | Interrupt-driven buttons (attachInterrupt) |
| Hardware | Custom PCB, v1 to v3, with BOM and Gerber for manufacturing |

## Media

### Photos
- projects/07-comus/foto/Foto_1.jpg
- projects/07-comus/foto/Foto_2.png
- projects/07-comus/foto/Foto_3.png
- projects/07-comus/foto/Foto_4.png
- projects/07-comus/foto/Foto_5.jpg
- projects/07-comus/foto/Foto_6.jpg
- projects/07-comus/foto/Foto_7.png
- projects/07-comus/foto/Foto_8.png
- projects/07-comus/foto/Foto_9.JPG
- projects/07-comus/foto/Foto_10.jpg
- projects/07-comus/foto/Foto_11.png
- projects/07-comus/foto/Foto_12.png
- projects/07-comus/foto/Foto_13.png
- projects/07-comus/foto/Foto_14.png
- projects/07-comus/foto/Foto_15.png
- projects/07-comus/foto/Foto_16.png
- projects/07-comus/foto/Foto_17.png
- projects/07-comus/foto/Foto_18.jpg
- projects/07-comus/foto/Foto_19.jpg
- projects/07-comus/foto/Foto_20.jpg
- projects/07-comus/foto/Foto_21.jpg

### Videos

## Notes

- The controller runs a MUSON solar air collector, which supplies 20 to 60 m3/h of warm, dry, fresh air and can cut heating costs by up to about 30% over a season.
- Hardware iterated through three revisions (v1 to v3); BOM, Gerber files and manufacturing preparation were part of the work.

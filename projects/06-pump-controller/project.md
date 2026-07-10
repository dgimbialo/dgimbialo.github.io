# Pump Controller Arduino

**Subtitle:** Home water-tank level controller (hardware + firmware)
**Tags:** Arduino, C/C++, Mega 2560, LCD, Relay
**Path:** 
**Button:** 
**Platform:** Arduino C/C++ / Arduino Mega 2560

## Purpose

A hardware and software device I designed that keeps the water level in a home tank at the right point, both automatically and manually. It drives the pump from a three-sensor level system (low / middle / high): in automatic mode it tops the tank up by level, and a manual mode with buttons and an LCD lets you override and run the pump by hand. It also detects fault conditions, such as a missing or faulty sensor.

## Key features

- 3-sensor system - LOW/MIDDLE/HIGH level; pump relay control
- Automatic mode - control by liquid level
- Manual mode - override via buttons with LCD display
- Error state detection - emergency situations (absence/error of the sensor)
- LCD UI (LiquidCrystal 16×2) - mode, level, error status
- Centralized custom_pins.h for GPIO mapping

## Tech Stack

| Component | Technology |
|---|---|
| Platform | Arduino Mega 2560 |
| Framework | Arduino C/C++ |
| Display | LiquidCrystal 16×2 |
| Build | Arduino IDE |

## Media

### Photos
- projects/06-pump-controller/foto/Foto_1.jpg

### Videos
<!-- Place videos in video/ folder -->
<!-- Then specify paths in media.video in assets/js/data.js -->

## Notes

<!-- Additional notes, links, screenshots, versions -->

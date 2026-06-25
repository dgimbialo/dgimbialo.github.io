# HMI Touchscreen (PIC24)

**Subtitle:** Bare-metal touchscreen HMI for a syringe pump
**Category:** Embedded / PIC
**Tags:** Commercial, PIC24, C, XC16, Bare-metal, Modbus RTU, TFT35, Touchscreen
**Paired:** HPLC Syringe Pump (#18)
**Path:** 
**Button:** 
**Platform:** Embedded C / PIC24 / MPLAB XC16

## Purpose

Commercial standalone touchscreen HMI for an industrial syringe pump. It runs bare metal on a small PIC24 microcontroller, drives a TFT35 touch display, and talks to the pump controller over Modbus RTU. The entire graphics stack and user interface were written from scratch, with no third-party graphics libraries.

## What I Did

- Built the complete graphics stack on bare metal, with no third-party graphics libraries: low-level display driver, drawing primitives and a custom UI framework, all written from scratch
- Designed the touchscreen interface from the ground up: menus, on-screen keypad, method and setup screens, touch input and calibration
- Optimized custom bitmap fonts, to keep memory usage to a minimum
- Optimized program and data memory to fit the full interface on a small PIC24, reducing flash usage while still adding features
- Worked on the serial bootloader for in-field firmware updates and integrated it into the build pipeline
- Implemented the Modbus RTU master with a connection watchdog and automatic recovery

## Key features

- Bare-metal graphics: display driver and rendering written directly against the hardware, with no external GUI library
- Custom UI framework built from scratch: text, buttons, input fields, menus and full screens
- Responsive rendering on a low-power MCU: only what changed on screen is redrawn
- Resistive touchscreen input with persistent calibration
- Memory-optimized custom bitmap fonts with a dedicated conversion tool
- Modbus RTU master with connection watchdog and automatic recovery
- Serial bootloader for firmware updates over the serial port(UART)
- Tuned to fit the limited program and data memory of a small PIC24

## Tech Stack

| Component | Technology |
|---|---|
| MCU | PIC24 |
| Language | C (MPLAB XC16) |
| Graphics | Bare metal, no third-party libraries |
| Display | TFT35 over SPI |
| Touch | Resistive touchscreen with calibration |
| Protocol | Modbus RTU (serial) |
| Firmware update | Custom serial bootloader |
| Persistence | Internal PIC24 flash |
| Build | MPLAB X / Makefile |

## Media

### Photos
- projects/14-hmi-pic24/foto/Foto_1.JPEG
- projects/14-hmi-pic24/foto/Foto_2.JPEG
- projects/14-hmi-pic24/foto/Foto_3.JPEG
- projects/14-hmi-pic24/foto/Foto_4.JPEG
- projects/14-hmi-pic24/foto/Foto_5.JPEG
- projects/14-hmi-pic24/foto/Foto_6.JPEG

### Videos

## Notes
- Paired with the HPLC Syringe Pump desktop control over Modbus RTU.

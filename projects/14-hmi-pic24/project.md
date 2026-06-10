# HMI Touchscreen (PIC24)

**Subtitle:** Syringe pump HMI — TFT35 + Modbus RTU
**Path:** 
**Platform:** Embedded C / PIC24 / MPLAB XC16

## Purpose

Standalone HMI for controlling an industrial syringe pump via a TFT35 touch display via Modbus RTU.

## Key features

- TFT35 SPI display — initialization, backlight, text/primitives
- Touchscreen calibration — persistent in internal flash
- TFTUI — TextBox, SelectFont, SetBackground/Foreground, center-aligned
- Modbus master 
- Poll/update state machine — differential update only when registers are changed
- UI BreakHook — callback during redraw for Modbus polling without blocking
- Bootloader

## Tech Stack

| Component | Technology |
|---|---|
| MCU | PIC24 |
| Language | C (XC16 compiler) |
| Display | TFT35 SPI |
| Touch | Resistive touchscreen + calibration |
| Protocol | Modbus RTU (Serial) |
| Persistence | Internal PIC Flash |
| Build | MPLAB / Makefile / nbproject |

## Media

### Photos
<!-- Place photos in foto/ folder -->
<!-- Then specify paths in media.foto in assets/js/data.js -->

### Videos
<!-- Place videos in video/ folder -->
<!-- Then specify paths in media.video in assets/js/data.js -->

## Notes

<!-- Additional notes, links, screenshots, versions -->

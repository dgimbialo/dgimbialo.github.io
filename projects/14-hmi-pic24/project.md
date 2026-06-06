# HMI Touchscreen (PIC24)

**Subtitle:** Syringe pump HMI — TFT35 + Modbus RTU
**Path:** `D:\WORK_PROJECTS\hmitouchscreenold`
**Platform:** Embedded C / PIC24FJ64GB002 / MPLAB XC16

## Purpose

Standalone HMI for controlling an industrial syringe pump of the ASI 500 series via a TFT35 touch display via Modbus RTU.

## Key features

- TFT35 SPI display (TFT35_SPI.c) — initialization, backlight, text/primitives
- Touchscreen calibration (touchscreen.c) — persistent in internal flash
- TFTUI (TFTUI.h) — TextBox, SelectFont, SetBackground/Foreground, center-aligned
- Modbus master (SerialModbus.c) — FC 0x03/0x10, CRC16, timeout 300 ms
- Poll/update state machine — differential update only when registers are changed
- WSoD mitigation — TFT35_Enable() every 3 s
- UI BreakHook — callback during redraw for Modbus polling without blocking

## Tech Stack

| Component | Technology |
|---|---|
| MCU | PIC24FJ64GB002 |
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

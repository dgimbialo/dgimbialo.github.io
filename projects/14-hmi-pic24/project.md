# HMI Touchscreen (PIC24)

**Підзаголовок:** Syringe pump HMI — TFT35 + Modbus RTU  
**Шлях:** `D:\WORK_PROJECTS\hmitouchscreenold`  
**Платформа:** Embedded C / PIC24FJ64GB002 / MPLAB XC16

## Призначення

Standalone HMI для управління промисловим шприцевим насосом серії ASI 500 через TFT35 сенсорний дисплей по Modbus RTU.

## Ключові функції

- TFT35 SPI дисплей (TFT35_SPI.c) — ініціалізація, backlight, текст/примітиви
- Touchscreen калібрація (touchscreen.c) — persistent у internal flash
- TFTUI (TFTUI.h) — TextBox, SelectFont, SetBackground/Foreground, center-aligned
- Modbus master (SerialModbus.c) — FC 0x03/0x10, CRC16, timeout 300 мс
- Poll/update state machine — differential update тільки при змінах регістрів
- WSoD mitigation — TFT35_Enable() кожні 3 с
- UI BreakHook — callback під час перерисовки для Modbus polling без блокування

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

## Медіа

### Photos
<!-- Place photos in foto/ folder -->
<!-- Then specify paths in media.foto in assets/js/data.js -->

### Videos
<!-- Place videos in video/ folder -->
<!-- Then specify paths in media.video in assets/js/data.js -->

## Нотатки

<!-- Додаткові нотатки, посилання, скріншоти, версії -->

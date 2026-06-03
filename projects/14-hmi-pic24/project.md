# HMI Touchscreen (PIC24)

**-ƒ-û-¦-+-¦-¦-+-+-+-¦-+-¦:** Syringe pump HMI GÇö TFT35 + Modbus RTU  
**-¿-+-Å-à:** `D:\WORK_PROJECTS\hmitouchscreenold`  
**-ƒ-+-¦-é-ä-+-Ç-+-¦:** Embedded C / PIC24FJ64GB002 / MPLAB XC16

## -ƒ-Ç-+-+-+-¦-ç-¦-+-+-Å

Standalone HMI -¦-+-Å -â-+-Ç-¦-¦-+-û-+-+-Å -+-Ç-+-+-+-ü-+-+-¦-+-+ -ê-+-Ç-+-å-¦-¦-+-+ -+-¦-ü-+-ü-+-+ -ü-¦-Ç-û-ù ASI 500 -ç-¦-Ç-¦-+ TFT35 -ü-¦-+-ü-+-Ç-+-+-¦ -¦-+-ü-+-+-¦-¦ -+-+ Modbus RTU.

## -Ü-+-Ä-ç-+-¦-û -ä-â-+-¦-å-û-ù

- TFT35 SPI -¦-+-ü-+-+-¦-¦ (TFT35_SPI.c) GÇö -û-+-û-å-û-¦-+-û-+-¦-å-û-Å, backlight, -é-¦-¦-ü-é/-+-Ç-+-+-û-é-+-¦-+
- Touchscreen -¦-¦-+-û-¦-Ç-¦-å-û-Å (touchscreen.c) GÇö persistent -â internal flash
- TFTUI (TFTUI.h) GÇö TextBox, SelectFont, SetBackground/Foreground, center-aligned
- Modbus master (SerialModbus.c) GÇö FC 0x03/0x10, CRC16, timeout 300 -+-ü
- Poll/update state machine GÇö differential update -é-û-+-î-¦-+ -+-Ç-+ -+-+-û-+-¦-à -Ç-¦-¦-û-ü-é-Ç-û-¦
- WSoD mitigation GÇö TFT35_Enable() -¦-+-¦-+-û 3 -ü
- UI BreakHook GÇö callback -+-û-¦ -ç-¦-ü -+-¦-Ç-¦-Ç-+-ü-+-¦-¦-+ -¦-+-Å Modbus polling -¦-¦-+ -¦-+-+-¦-â-¦-¦-+-+-Å

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

## -£-¦-¦-û-¦

### Photos
<!-- Place photos in foto/ folder -->
<!-- Then specify paths in media.foto in assets/js/data.js -->

### Videos
<!-- Place videos in video/ folder -->
<!-- Then specify paths in media.video in assets/js/data.js -->

## -¥-+-é-¦-é-¦-+

<!-- -ö-+-¦-¦-é-¦-+-¦-û -+-+-é-¦-é-¦-+, -+-+-ü-+-+-¦-+-+-Å, -ü-¦-Ç-û-+-ê-+-é-+, -¦-¦-Ç-ü-û-ù -->


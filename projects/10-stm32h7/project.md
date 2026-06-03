# STM32H7 Fast Acquisition

**-ƒ-û-¦-+-¦-¦-+-+-+-¦-+-¦:** High-speed ADC firmware with on-device FFT  
**-¿-+-Å-à:** `D:\My_project\ADC_STM32H7`  
**-ƒ-+-¦-é-ä-+-Ç-+-¦:** C + ASM / STM32H743 / arm-none-eabi
**-ƒ-¦-Ç-+-¦ -ü-+-ü-é-¦-+-¦:** FastAcqWinApp (#9)

## -ƒ-Ç-+-+-+-¦-ç-¦-+-+-Å

Firmware high-speed ADC -+-Ç-+-ü-é-Ç-+-Ä -+-¦ STM32H743 (Cortex-M7, 480 MHz). -ù-¦-à-+-+-+-Ä-ö -¦-+-¦-+-+-¦-+-¦-+-¦ -ü-+-¦-+-¦-+ -ç-¦-Ç-¦-+ -+-¦-Ç-¦-+-¦-+-î-+-+-¦ DCMI ADC, -¦-+-¦-+-+-â-ö chirp-excitation -é-¦ FFT -+-¦ MCU.

## -Ü-+-Ä-ç-+-¦-û -ä-â-+-¦-å-û-ù

- DCMI ADC capture (dcmi_adc.c) GÇö -+-¦-Ç-¦-+-¦-+-î-+-¦ 8/16--¦-û-é-+-¦ -ê-+-+-¦; DMA GåÆ -+-+-¦-+-û-ê-+-Å SDRAM
- External SDRAM (sdram_init.c) GÇö FMC -¦-+-+-é-Ç-+-+-¦-Ç -¦-+-Å -¦-¦-+-+-¦-+-à -+-¦-ü-+-¦-û-¦ -¦-+-¦-û-Ç-+-¦
- Chirp DAC (chirp_dac.c) GÇö -¦-¦-+-¦-Ç-¦-å-û-Å -+-¦-â-¦-¦-â-Ä-ç-+-¦-+ chirp--ü-+-¦-+-¦-+-â -ç-¦-Ç-¦-+ DAC
- On-device FFT (chirp_fft.c) GÇö -ü-+-¦-¦-é-Ç -+-¦ MCU; -ü-é-+-ü-+-¦-+-+-Å -+-¦-Ç-¦-¦ USB -+-¦-Ç-¦-¦-¦-ç-¦-Ä
- Phase analysis (phase_a.c, phase_b.c) GÇö -¦-¦-+-¦-¦-+-¦-+-î-+-+-¦ -ä-¦-+-+-¦-+-¦ -¦-+-¦-+-û-+
- USB CDC binary protocol (usb_protocol.h) GÇö -¦-û-¦-+-+-¦-û-¦-î -+-¦ -¦-+-+-¦-+-¦-+ FastAcqWinApp

## Tech Stack

| Component | Technology |
|---|---|
| MCU | STM32H743 (Cortex-M7, 480 MHz) |
| Language | C + startup ASM |
| HAL | STM32 HAL / CMSIS |
| Peripherals | DCMI, DMA, SDRAM (FMC), DAC, USB FS |
| Build | CMake + arm-none-eabi-gcc, Ninja |
| Config | STM32CubeMX (.ioc) + J-Link scripts |

## -£-¦-¦-û-¦

### Photos
<!-- Place photos in foto/ folder -->
<!-- Then specify paths in media.foto in assets/js/data.js -->

### Videos
<!-- Place videos in video/ folder -->
<!-- Then specify paths in media.video in assets/js/data.js -->

## -¥-+-é-¦-é-¦-+

<!-- -ö-+-¦-¦-é-¦-+-¦-û -+-+-é-¦-é-¦-+, -+-+-ü-+-+-¦-+-+-Å, -ü-¦-Ç-û-+-ê-+-é-+, -¦-¦-Ç-ü-û-ù -->


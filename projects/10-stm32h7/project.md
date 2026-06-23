# STM32H7 Fast Acquisition

**Subtitle:** High-speed ADC firmware with on-device FFT
**Tags:** STM32H7, C, HAL, DCMI, DMA, USB CDC, CMake
**Path:** `D:\My_project\ADC_STM32H7`
**Button:** Go to App Website
**Platform:** C + ASM / STM32H743 / arm-none-eabi
**Pair System:** FastAcqWinApp (#9)

## Purpose

Firmware high-speed ADC device on STM32H743 (Cortex-M7, 480 MHz). Captures analog signal via parallel DCMI ADC, performs chirp-excitation and FFT on MCU.

## Key features

- DCMI ADC capture (dcmi_adc.c) - parallel 8/16-bit bus; DMA → external SDRAM
- External SDRAM (sdram_init.c) - FMC controller for large arrays of samples
- Chirp DAC (chirp_dac.c) - generation of an exciting chirp signal through a DAC
- On-device FFT (chirp_fft.c) - spectrum on the MCU; compression before USB transfer
- Phase analysis (phase_a.c, phase_b.c) - two-channel phase analysis
- USB CDC binary protocol (usb_protocol.h) - response to FastAcqWinApp commands

## Tech Stack

| Component | Technology |
|---|---|
| MCU | STM32H743 (Cortex-M7, 480 MHz) |
| Language | C + startup ASM |
| HAL | STM32 HAL / CMSIS |
| Peripherals | DCMI, DMA, SDRAM (FMC), DAC, USB FS |
| Build | CMake + arm-none-eabi-gcc, Ninja |
| Config | STM32CubeMX (.ioc) + J-Link scripts |

## Media

### Photos
<!-- Place photos in foto/ folder -->
<!-- Then specify paths in media.foto in assets/js/data.js -->

### Videos
<!-- Place videos in video/ folder -->
<!-- Then specify paths in media.video in assets/js/data.js -->

## Notes

<!-- Additional notes, links, screenshots, versions -->

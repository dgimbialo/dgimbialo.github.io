# STM32H7 Fast Acquisition

**Підзаголовок:** High-speed ADC firmware with on-device FFT  
**Шлях:** `D:\My_project\ADC_STM32H7`  
**Платформа:** C + ASM / STM32H743 / arm-none-eabi
**Парна система:** FastAcqWinApp (#9)

## Призначення

Firmware high-speed ADC пристрою на STM32H743 (Cortex-M7, 480 MHz). Захоплює аналоговий сигнал через паралельний DCMI ADC, виконує chirp-excitation та FFT на MCU.

## Ключові функції

- DCMI ADC capture (dcmi_adc.c) — паралельна 8/16-бітна шина; DMA → зовнішня SDRAM
- External SDRAM (sdram_init.c) — FMC контролер для великих масивів вибірок
- Chirp DAC (chirp_dac.c) — генерація збуджуючого chirp-сигналу через DAC
- On-device FFT (chirp_fft.c) — спектр на MCU; стиснення перед USB передачею
- Phase analysis (phase_a.c, phase_b.c) — двоканальний фазовий аналіз
- USB CDC binary protocol (usb_protocol.h) — відповідь на команди FastAcqWinApp

## Технологічний стек

| Компонент | Технологія |
|---|---|
| MCU | STM32H743 (Cortex-M7, 480 MHz) |
| Мова | C + startup ASM |
| HAL | STM32 HAL / CMSIS |
| Peripherals | DCMI, DMA, SDRAM (FMC), DAC, USB FS |
| Build | CMake + arm-none-eabi-gcc, Ninja |
| Config | STM32CubeMX (.ioc) + J-Link scripts |

## Медіа

### Фото
<!-- Розмістіть фотографії у папці foto/ -->
<!-- Потім вкажіть шляхи у media.foto в assets/js/data.js -->

### Відео
<!-- Розмістіть відеофайли у папці video/ -->
<!-- Потім вкажіть шляхи у media.video в assets/js/data.js -->

## Нотатки

<!-- Додаткові нотатки, посилання, скріншоти, версії -->

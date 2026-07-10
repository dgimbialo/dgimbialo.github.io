# STM32H7 Fast Acquisition

**Subtitle:** High-speed data acquisition with an external ADC over DCMI
**Category:** Embedded / STM32
**Tags:** STM32H7, C, HAL, DCMI, DMA, AD9226, USB CDC, CMake
**Paired:** FastAcqWinApp (#9)
**Path:** 
**Button:** 
**Platform:** C + ASM / STM32H743 / arm-none-eabi

## Purpose

A high-speed data-acquisition device built around an STM32H743 (Cortex-M7 at 480 MHz). The working prototype runs on a breadboard: it is built, tested and works; the schematic and PCB are being designed now.

What makes it unusual is how the samples are captured. Instead of the MCU's built-in ADC, it uses an external AD9226 12-bit ADC (65 MSPS-class, run here at 60 MS/s) and streams the samples into the MCU over its DCMI digital-camera interface: the ADC data is captured as if it were a video frame, with DMA moving it straight into memory. That offloads the CPU almost completely during a capture, so the Cortex-M7 stays free while high-rate acquisition runs in the background.

## Key features

- External AD9226 12-bit ADC at 60 MS/s, far faster than the MCU's on-chip ADC
- Capture over the DCMI camera interface in continuous mode: the ADC stream is read like a video frame, so sampling does not load the CPU
- DMA double-buffering straight into fast on-chip AXI SRAM
- Large captures: about 650,000 samples per acquisition
- Fast enough to resolve a clean square wave (meander) up to about 6 MHz
- External FMC SDRAM for large sample buffers
- DAC-generated chirp excitation output for the analysis stage
- USB CDC link to the desktop app (FastAcqWinApp), plus UART debug with Serial Plotter

## Tech Stack

| Component | Technology |
|---|---|
| MCU | STM32H743IIT6 (Cortex-M7, 480 MHz) |
| External ADC | AD9226 12-bit (65 MSPS-class, 60 MS/s here) |
| Capture path | DCMI camera interface + DMA double-buffer to AXI SRAM |
| External memory | FMC SDRAM (16-bit) |
| Excitation | DAC chirp output |
| Host link | USB CDC (to FastAcqWinApp) + UART debug |
| Build | STM32CubeCLT, CMake + Ninja, arm-none-eabi-gcc, J-Link |
| Config | STM32CubeMX (.ioc) |

## Media

### Photos
- projects/10-stm32h7/foto/Foto_1.JPEG
- projects/10-stm32h7/foto/Foto_2.png
- projects/10-stm32h7/foto/Foto_3.png
- projects/10-stm32h7/foto/Foto_4.png

### Videos

## Notes

- Current status: the prototype works on a breadboard, the schematic and PCB are in design.
- Pairs with the FastAcqWinApp desktop application, which receives the captured data over USB CDC.

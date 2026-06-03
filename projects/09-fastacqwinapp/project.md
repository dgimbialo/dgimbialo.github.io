# FastAcqWinApp

**Підзаголовок:** Real-time signal acquisition & FFT analysis  
**Шлях:** `D:\My_project\FastAcqWinApp`  
**Платформа:** C++ + MFC / Windows (MSVC, x64)
**Парна система:** STM32H7 Firmware (#10)

## Призначення

Windows desktop для real-time прийому та аналізу сигналів від STM32H7 ADC-пристрою через USB CDC. Режими: FFT-on-device та PC-side FFT (RAW samples + локальна обробка).

## Ключові функції

- SerialWorker — background thread: Win32 COM API, ReadFile loop, CRC бінарний протокол
- ChirpStore — CRITICAL_SECTION ring buffer 200 chirp frames: Push/GetLatest/GetAt
- LocalFft — Radix-2 Cooley-Tukey FFT до 16384 точок; Rectangular/Hann/Hamming/Blackman вікна
- WaveformView — GDI zoom/pan (X+/X−/Y+/Y− + mousewheel + scrollbars)
- SpectrumView — лінійна/логарифмічна АЧХ з cursor overlay
- WaterfallView — spectrogram у псевдокольорі
- CommandPanel — COM combo, Start/Stop, Set Freq/Samples, Ping, Mode, Trigger, PC/Device mode

## Tech Stack

| Component | Technology |
|---|---|
| Language | C++17 |
| UI | MFC (CWnd custom panels, GDI double-buffer) |
| Communication | Win32 COM port API, binary protocol |
| DSP | Radix-2 FFT, windowing functions |
| Build | VS2022, FastAcq.sln, x64 |

## Медіа

### Photos
<!-- Place photos in foto/ folder -->
<!-- Then specify paths in media.foto in assets/js/data.js -->

### Videos
<!-- Place videos in video/ folder -->
<!-- Then specify paths in media.video in assets/js/data.js -->

## Нотатки

<!-- Додаткові нотатки, посилання, скріншоти, версії -->

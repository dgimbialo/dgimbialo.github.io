# FastAcqWinApp

**Subtitle:** Real-time signal acquisition & FFT analysis
**Path:** `D:\My_project\FastAcqWinApp`
**Platform:** C++ + MFC / Windows (MSVC, x64)
**Pair System:** STM32H7 Firmware (#10)

## Purpose

Windows desktop for real-time reception and analysis of signals from STM32H7 ADC device via USB CDC. Modes: FFT-on-device and PC-side FFT (RAW samples + local processing).

## Key features

- SerialWorker — background thread: Win32 COM API, ReadFile loop, CRC binary protocol
- ChirpStore — CRITICAL_SECTION ring buffer 200 chirp frames: Push/GetLatest/GetAt
- LocalFft — Radix-2 Cooley-Tukey FFT up to 16384 points; Rectangular/Hann/Hamming/Blackman windows
- WaveformView — GDI zoom/pan (X+/X−/Y+/Y− + mousewheel + scrollbars)
- SpectrumView — linear/logarithmic frequency response with cursor overlay
- WaterfallView — spectrogram in pseudo-color
- CommandPanel — COM combo, Start/Stop, Set Freq/Samples, Ping, Mode, Trigger, PC/Device mode

## Tech Stack

| Component | Technology |
|---|---|
| Language | C++17 |
| UI | MFC (CWnd custom panels, GDI double-buffer) |
| Communication | Win32 COM port API, binary protocol |
| DSP | Radix-2 FFT, windowing functions |
| Build | VS2022, FastAcq.sln, x64 |

## Media

### Photos
<!-- Place photos in foto/ folder -->
<!-- Then specify paths in media.foto in assets/js/data.js -->

### Videos
<!-- Place videos in video/ folder -->
<!-- Then specify paths in media.video in assets/js/data.js -->

## Notes

<!-- Additional notes, links, screenshots, versions -->

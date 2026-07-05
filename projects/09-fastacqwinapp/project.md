# FastAcqWinApp

**Subtitle:** Real-time signal acquisition and FFT analysis
**Category:** Desktop / DSP
**Tags:** C++17, MFC, FFT, USB CDC, GDI, Spectrogram
**Paired:** STM32H7 Fast Acquisition (#10)
**Path:** https://github.com/dgimbialo/FastAcqWinApp
**Button:** Go to Git
**Platform:** C++ + MFC / Windows (MSVC, x64)

## Purpose

Windows desktop application for real-time acquisition and analysis of signals streamed from an STM32H7 ADC board over USB CDC. It receives sample frames, runs FFT analysis and renders live waveform, spectrum and waterfall (spectrogram) views.

It is built entirely on C++ and MFC with GDI rendering, with no third-party libraries. 
MFC was chosen deliberately for speed, reliability and self-containment: the result is a single native executable with no runtime dependencies, low latency and predictable real-time performance.

## Key features

- Real-time serial acquisition: a background worker thread reads the USB CDC stream through a binary, CRC-checked protocol without blocking the UI
- Ring-buffer frame store: the latest acquisition frames are kept for smooth live display while new data keeps arriving
- In-house Radix-2 (Cooley-Tukey) FFT up to 16384 points, with selectable windows (Rectangular / Hann / Hamming / Blackman)
- Waveform view: GDI double-buffered, with zoom and pan (keys, mouse wheel and scrollbars)
- Spectrum view: linear or logarithmic magnitude with a cursor readout
- Waterfall view: pseudo-color spectrogram
- On-device or PC-side FFT: process raw samples locally or use the device result
- Command panel: port select, start/stop, set frequency and samples, ping, trigger and mode switch
- Custom-drawn modern UI (buttons, tabs, theme) on plain MFC, with no UI framework
- Single native executable, no third-party dependencies

## Tech Stack

| Component | Technology |
|---|---|
| Language | C++17 |
| UI | MFC with GDI double-buffered custom rendering (no third-party UI libs) |
| Acquisition | USB CDC virtual COM, Win32 serial API, binary CRC protocol |
| DSP | In-house Radix-2 Cooley-Tukey FFT, windowing |
| Views | Waveform, spectrum, waterfall (spectrogram) |
| Build | Visual Studio 2022, x64 |
| Dependencies | None (Win32 + MFC only) |

## Media

### Photos
- projects/09-fastacqwinapp/foto/Foto_1.png
- projects/09-fastacqwinapp/foto/Foto_2.png
- projects/09-fastacqwinapp/foto/Foto_3.png
- projects/09-fastacqwinapp/foto/Foto_4.png
- projects/09-fastacqwinapp/foto/Foto_5.png
- projects/09-fastacqwinapp/foto/Foto_6.png

### Videos

## Notes

- MIT licensed.
- Pairs with the STM32H7 Fast Acquisition firmware, which streams the ADC data over USB CDC.

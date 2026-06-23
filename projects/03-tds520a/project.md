# TDS 520A GPIB Desktop

**Subtitle:** Oscilloscope control + mobile web viewer
**Tags:** C++17, MFC, GPIB, NI-488.2, SCPI, WebSocket
**Path:** `D:\My_project\TDS_520A_GPIB`
**Button:** Go to App Website
**Platform:** C++17 + MFC + NI-488.2 / Win64

## Purpose

Windows application for controlling the Tektronix TDS 520A oscilloscope via GPIB (IEEE-488). Provides a GDI waveform viewer and a built-in web interface for mobile viewing.

## Key features

- GPIB auto-scan - scan of addresses 1–30 on board 0, identification by *IDN?
- SCPI protocol - WFMPRE?, CURVE?, ACQuire? for preamble and binary curve data
- Waveform decoder - conversion of raw ADC to V/s by YMULT/YOFF/YZERO/XINCR
- GDI double-buffered renderer - zoom/pan, autoscale, cursor overlay, ~10 FPS
- Lock-free ring buffer (SPSC) - thread-safe transfer between acquisition thread and GUI
- Embedded HTTP + WebSocket server (RFC 6455) with self-contained SHA-1 and Base64
- HtmlGenerator - autogenerates single-page frontend; waveform via WebSocket to mobile

## Tech Stack

| Component | Technology |
|---|---|
| Language | C++17 |
| UI | MFC (CFrameWnd, GDI) |
| GPIB | NI-488.2 (ni4882.lib) |
| Protocol | SCPI over GPIB |
| Networking | Raw Winsock, WebSocket RFC 6455 |
| Build | VS2022, x64 |

## Media

### Photos
- projects/03-tds520a/foto/Gpib_4.JPG
- projects/03-tds520a/foto/Gpib_5.JPG
- projects/03-tds520a/foto/Gpib_6.JPG
- projects/03-tds520a/foto/Gpib_7.JPG
- projects/03-tds520a/foto/Gpib_9.JPG
- projects/03-tds520a/foto/Gpib_1.png
- projects/03-tds520a/foto/Gpib_2.png
- projects/03-tds520a/foto/Gpib_3.png

### Videos
- https://youtu.be/X9rVDsOkLpQ

## Notes
<!-- Additional notes, links, screenshots, versions -->

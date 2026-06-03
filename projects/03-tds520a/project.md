# TDS 520A GPIB Desktop

**-ƒ-û-¦-+-¦-¦-+-+-+-¦-+-¦:** Oscilloscope control + mobile web viewer  
**-¿-+-Å-à:** `D:\My_project\TDS_520A_GPIB`  
**-ƒ-+-¦-é-ä-+-Ç-+-¦:** C++17 + MFC + NI-488.2 / Win64

## -ƒ-Ç-+-+-+-¦-ç-¦-+-+-Å

Windows--+-¦-ü-é-+-ü-â-+-+-¦ -¦-+-Å -â-+-Ç-¦-¦-+-û-+-+-Å -+-ü-å-+-+-+-¦-Ç-¦-ä-+-+ Tektronix TDS 520A -ç-¦-Ç-¦-+ GPIB (IEEE-488). -¥-¦-¦-¦-ö GDI waveform viewer -û -¦-¦-â-¦-+-¦-¦-+-+-¦ -¦-¦-¦--û-+-é-¦-Ç-ä-¦-¦-ü -¦-+-Å -+-¦-Ç-¦-¦-+-Å-¦-â -+ -+-+-¦-û-+-î-+-+-¦-+.

## -Ü-+-Ä-ç-+-¦-û -ä-â-+-¦-å-û-ù

- GPIB auto-scan GÇö -ü-¦-¦-+ -¦-¦-Ç-¦-ü 1GÇô30 -+-¦ board 0, -û-¦-¦-+-é-+-ä-û-¦-¦-å-û-Å -+-¦ *IDN?
- SCPI -+-Ç-+-é-+-¦-+-+ GÇö WFMPRE?, CURVE?, ACQuire? -¦-+-Å preamble -û -¦-û-+-¦-Ç-+-+-à -¦-¦-+-+-à -¦-Ç-+-¦-+-ù
- Waveform decoder GÇö -¦-+-+-¦-¦-Ç-é-¦-å-û-Å raw ADC -â -Æ/-ü -+-¦ YMULT/YOFF/YZERO/XINCR
- GDI double-buffered renderer GÇö zoom/pan, -¦-¦-é-+-+-¦-ü-ê-é-¦-¦, cursor overlay, ~10 FPS
- Lock-free ring buffer (SPSC) GÇö -+-+-é-+-¦-+-¦-¦-+-+-¦-ç-+-¦ -+-¦-Ç-¦-¦-¦-ç-¦ -+-û-¦ acquisition thread -û GUI
- Embedded HTTP + WebSocket server (RFC 6455) -+ self-contained SHA-1 -é-¦ Base64
- HtmlGenerator GÇö -¦-¦-é-+-¦-¦-+-¦-Ç-â-ö single-page frontend; waveform -+-+ WebSocket -+-¦ -+-+-¦-û-+-î-+-+-¦

## Tech Stack

| Component | Technology |
|---|---|
| Language | C++17 |
| UI | MFC (CFrameWnd, GDI) |
| GPIB | NI-488.2 (ni4882.lib) |
| -ƒ-Ç-+-é-+-¦-+-+ | SCPI over GPIB |
| Networking | Raw Winsock, WebSocket RFC 6455 |
| Build | VS2022, x64 |

## -£-¦-¦-û-¦

### Photos
<!-- Place photos in foto/ folder -->
<!-- Then specify paths in media.foto in assets/js/data.js -->

### Videos
<!-- Place videos in video/ folder -->
<!-- Then specify paths in media.video in assets/js/data.js -->

## -¥-+-é-¦-é-¦-+

<!-- -ö-+-¦-¦-é-¦-+-¦-û -+-+-é-¦-é-¦-+, -+-+-ü-+-+-¦-+-+-Å, -ü-¦-Ç-û-+-ê-+-é-+, -¦-¦-Ç-ü-û-ù -->


# TDS 520A GPIB Desktop

**Підзаголовок:** Oscilloscope control + mobile web viewer  
**Шлях:** `D:\My_project\TDS_520A_GPIB`  
**Платформа:** C++17 + MFC + NI-488.2 / Win64

## Призначення

Windows-застосунок для управління осцилографом Tektronix TDS 520A через GPIB (IEEE-488). Надає GDI waveform viewer і вбудований веб-інтерфейс для перегляду з мобільного.

## Ключові функції

- GPIB auto-scan — скан адрес 1–30 на board 0, ідентифікація за *IDN?
- SCPI протокол — WFMPRE?, CURVE?, ACQuire? для preamble і бінарних даних кривої
- Waveform decoder — конвертація raw ADC у В/с за YMULT/YOFF/YZERO/XINCR
- GDI double-buffered renderer — zoom/pan, автомасштаб, cursor overlay, ~10 FPS
- Lock-free ring buffer (SPSC) — потокобезпечна передача між acquisition thread і GUI
- Embedded HTTP + WebSocket server (RFC 6455) з self-contained SHA-1 та Base64
- HtmlGenerator — автогенерує single-page frontend; waveform по WebSocket на мобільний

## Технологічний стек

| Компонент | Технологія |
|---|---|
| Мова | C++17 |
| UI | MFC (CFrameWnd, GDI) |
| GPIB | NI-488.2 (ni4882.lib) |
| Протокол | SCPI over GPIB |
| Networking | Raw Winsock, WebSocket RFC 6455 |
| Build | VS2022, x64 |

## Медіа

### Фото
<!-- Розмістіть фотографії у папці foto/ -->
<!-- Потім вкажіть шляхи у media.foto в assets/js/data.js -->

### Відео
<!-- Розмістіть відеофайли у папці video/ -->
<!-- Потім вкажіть шляхи у media.video в assets/js/data.js -->

## Нотатки

<!-- Додаткові нотатки, посилання, скріншоти, версії -->

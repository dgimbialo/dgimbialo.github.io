# SimpleMidiViewer

**Підзаголовок:** MIDI file parser & score renderer  
**Шлях:** `D:\My_project\SimpleMidiViwer`  
**Платформа:** C++17 + MFC + CMake / Windows

## Призначення

Desktop Windows-застосунок для відкриття, парсингу та візуалізації MIDI-файлів у вигляді нотних рядків.

## Ключові функції

- MIDI parser — SMF: header/track chunks, VLQ decoding, note on/off, meta, SysEx
- Score rendering — відображення нот у стандартних нотних лінійках з масштабуванням
- MFC MDI GUI — MainFrame, ScoreView, меню Open/Save/Export
- CMake build з precompiled headers

## Tech Stack

| Component | Technology |
|---|---|
| Language | C++17 |
| UI | MFC (MDI) |
| MIDI | Власний SMF parser |
| Build | CMake + MSVC |

## Медіа

### Photos
<!-- Place photos in foto/ folder -->
<!-- Then specify paths in media.foto in assets/js/data.js -->

### Videos
<!-- Place videos in video/ folder -->
<!-- Then specify paths in media.video in assets/js/data.js -->

## Нотатки

<!-- Додаткові нотатки, посилання, скріншоти, версії -->

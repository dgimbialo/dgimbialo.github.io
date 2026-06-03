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

## Технологічний стек

| Компонент | Технологія |
|---|---|
| Мова | C++17 |
| UI | MFC (MDI) |
| MIDI | Власний SMF parser |
| Build | CMake + MSVC |

## Медіа

### Фото
<!-- Розмістіть фотографії у папці foto/ -->
<!-- Потім вкажіть шляхи у media.foto в assets/js/data.js -->

### Відео
<!-- Розмістіть відеофайли у папці video/ -->
<!-- Потім вкажіть шляхи у media.video в assets/js/data.js -->

## Нотатки

<!-- Додаткові нотатки, посилання, скріншоти, версії -->

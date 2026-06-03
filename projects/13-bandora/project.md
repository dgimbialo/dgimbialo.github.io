# Bandora / JAMMER Professional

**Підзаголовок:** Professional MIDI sequencer & music compositor  
**Шлях:** `D:\WORK_PROJECTS\bandora`  
**Платформа:** C++ + MFC / Win32 + C# installer

## Призначення

Повнофункціональний MIDI секвенсор та music compositing застосунок (JAMMER Professional) з нотним записом, VST плагінами та audio recording.

## Ключові функції

- MIDI engine — I/O, real-time playback, SysEx, channel mode messages
- 32-track Sequencer (Sequencer32) — piano roll + нотний редактор
- Audio capture — WAV та MP3 через DirectShow/WASAPI + Lame/GoGo encoder
- Score notation editor (ScoreEdit) — WYSIWYG: measures, staves, clef, time/key signatures
- VST Host (VSTHost/) — завантаження та виконання VST 2.x плагінів
- SoundTouch — time-stretching та pitch-shifting у реальному часі
- Multi-language UI (LanguageManager, .idm) — dynamic language switch without restart
- C# installer custom actions (InstallStep/UninstallStep) через Inno Setup

## Tech Stack

| Component | Technology |
|---|---|
| Language | C++ (MSVC) + C# |
| UI | MFC (Dynamic) |
| MIDI | WinMM, DirectMusic |
| Audio | DirectShow, WASAPI, Lame/GoGo |
| VST | VST 2.x host |
| Installer | Inno Setup + C# Custom Actions |
| Build | VS2022, Bandora.sln |

## Медіа

### Photos
<!-- Place photos in foto/ folder -->
<!-- Then specify paths in media.foto in assets/js/data.js -->

### Videos
<!-- Place videos in video/ folder -->
<!-- Then specify paths in media.video in assets/js/data.js -->

## Нотатки

<!-- Додаткові нотатки, посилання, скріншоти, версії -->

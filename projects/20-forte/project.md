# Forte / Genesis Notation

**Підзаголовок:** Full-featured music notation editor (Finale-class)  
**Шлях:** `D:\WORK_PROJECTS\forte_new`  
**Платформа:** C++ + MFC / Windows (MSVC, v140 toolset)

## Призначення

Повнофункціональний music notation editor (аналог Finale/Sibelius) з MIDI, audio recording, VST та CD burning.

## Ключові функції

- Score editor — WYSIWYG: measures, staves, clef, time/key signatures
- MIDI playback/recording (Sequencer32, piano roll)
- Audio capture (AudioCapture2MP3/WaveDlg) — WAV та MP3 через Lame/GoGo
- Audio CD burn (MCAudioBurnCtrl/Drive)
- VST Host (VSTHost/) — VST 2.x плагіни
- SoundTouch — time-stretch та pitch-shift
- Multi-language (LanguageManager) — .idm файли, без перезапуску
- Undo history (CUNDOHISTORY), online updater (CUpdater)

## Tech Stack

| Component | Technology |
|---|---|
| Language | C++ (MSVC) |
| UI | MFC (Dynamic), Win32 |
| MIDI | WinMM, DirectMusic |
| Audio | DirectShow, WASAPI, Lame, GoGo |
| VST | VST 2.x host |
| DSP | SoundTouch |
| Build | VS (v140 toolset), Genesis.sln |

## Медіа

### Photos
<!-- Place photos in foto/ folder -->
<!-- Then specify paths in media.foto in assets/js/data.js -->

### Videos
<!-- Place videos in video/ folder -->
<!-- Then specify paths in media.video in assets/js/data.js -->

## Нотатки

<!-- Додаткові нотатки, посилання, скріншоти, версії -->

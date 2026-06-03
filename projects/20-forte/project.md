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

## Технологічний стек

| Компонент | Технологія |
|---|---|
| Мова | C++ (MSVC) |
| UI | MFC (Dynamic), Win32 |
| MIDI | WinMM, DirectMusic |
| Audio | DirectShow, WASAPI, Lame, GoGo |
| VST | VST 2.x host |
| DSP | SoundTouch |
| Build | VS (v140 toolset), Genesis.sln |

## Медіа

### Фото
<!-- Розмістіть фотографії у папці foto/ -->
<!-- Потім вкажіть шляхи у media.foto в assets/js/data.js -->

### Відео
<!-- Розмістіть відеофайли у папці video/ -->
<!-- Потім вкажіть шляхи у media.video в assets/js/data.js -->

## Нотатки

<!-- Додаткові нотатки, посилання, скріншоти, версії -->

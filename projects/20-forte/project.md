# Forte / Genesis Notation

**Subtitle:** Full-featured music notation editor (Finale-class)
**Path:** `D:\WORK_PROJECTS\forte_new`
**Platform:** C++ + MFC / Windows (MSVC, v140 toolset)

## Purpose

Full-featured music notation editor (similar to Finale/Sibelius) with MIDI, audio recording, VST and CD burning.

## Key features

- Score editor — WYSIWYG: measures, staves, clef, time/key signatures
- MIDI playback/recording (Sequencer32, piano roll)
- Audio capture (AudioCapture2MP3/WaveDlg) — WAV and MP3 via Lame/GoGo
- Audio CD burn (MCAudioBurnCtrl/Drive)
- VST Host (VSTHost/) — VST 2.x plug-ins
- SoundTouch — time-stretch and pitch-shift
- Multi-language (LanguageManager) — .idm files, without restart
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

## Media

### Photos
<!-- Place photos in foto/ folder -->
<!-- Then specify paths in media.foto in assets/js/data.js -->

### Videos
<!-- Place videos in video/ folder -->
<!-- Then specify paths in media.video in assets/js/data.js -->

## Notes

<!-- Additional notes, links, screenshots, versions -->

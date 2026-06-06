# Bandora / JAMMER Professional

**Subtitle:** Professional MIDI sequencer & music compositor
**Path:** `D:\WORK_PROJECTS\bandora`
**Platform:** C++ + MFC / Win32 + C# installer

## Purpose

Full-featured MIDI sequencer and music compositing application (JAMMER Professional) with notation, VST plug-ins and audio recording.

## Key features

- MIDI engine — I/O, real-time playback, SysEx, channel mode messages
- 32-track Sequencer (Sequencer32) — piano roll + sheet music editor
- Audio capture — WAV and MP3 via DirectShow/WASAPI + Lame/GoGo encoder
- Score notation editor (ScoreEdit) — WYSIWYG: measures, staves, clef, time/key signatures
- VST Host (VSTHost/) — download and run VST 2.x plug-ins
- SoundTouch — time-stretching and pitch-shifting in real time
- Multi-language UI (LanguageManager, .idm) — dynamic language switch without restart
- C# installer custom actions (InstallStep/UninstallStep) via Inno Setup

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

## Media

### Photos
<!-- Place photos in foto/ folder -->
<!-- Then specify paths in media.foto in assets/js/data.js -->

### Videos
<!-- Place videos in video/ folder -->
<!-- Then specify paths in media.video in assets/js/data.js -->

## Notes

<!-- Additional notes, links, screenshots, versions -->

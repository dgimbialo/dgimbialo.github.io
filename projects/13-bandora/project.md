# BANDORA

**Subtitle:** Virtual Music Arrаnger & Composer
**Tags:** Commercial, C++, MFC, MIDI, BASS, BASSMIDI, SoundFont, WinMM
**Path:** [https://web.archive.org/web/20221209193625/https://bandora.com/en/](https://web.archive.org/web/20221209193625/https://bandora.com/en/)
**Button:** Bandora Archive Website
**Platform:** C++ + MFC/Win32 (MSVC)

## Purpose

Commercial Windows music-creation suite for building full arrangements from chord charts. You enter a chord progression and pick a band style, and the app generates a multi-instrument arrangement: bass, drums, comping, riffs and transitions - that plays back in real time. Shipped in several editions (Creator/Producer), each with its own feature set. Distribution is a signed installer with online license activation and an English/German localized UI.

## What I Did

- Extended the audio engine with support for multiple virtual BASS output devices
- Worked on song-editor and arranger features
- Set up and tuned the installer and release-packaging pipeline
- Implemented the trial and licensing flow
- Automated build, packaging and resource-management tooling

## Key features

- Style-based arranger: band styles, drum styles, grooves, riffs, progression styles, chord voicings and transitions combine into a generated multi-track arrangement
- Song editor: chord progression entry, key/time-signature changes, per-track layouts and templates
- Real-time MIDI engine: playback to external MIDI devices or to the built-in soundfont synth
- SoundFont synthesis: BASSMIDI renders MIDI through SF2 instrument banks, no external synth required
- MIDI device profiles: General MIDI/GS patch-name maps for external sound modules (Roland, Korg, Yamaha)
- Audio export: offline render of an arrangement to WAV, with MP3 encoding
- Multi-edition build: Creator and Producer editions from one codebase
- Multi-language UI: per-locale resource DLLs (English/German), switchable without reinstall
- Licensing: online activation with serial-key validation

## Tech Stack

| Component | Technology |
|---|---|
| Language | C++ (MSVC) |
| UI framework | MFC (dynamic dialogs, docking bars) |
| Audio engine | BASS audio library (un4seen) |
| MIDI synthesis | BASSMIDI (SoundFont SF2) |
| Audio export | BASSenc, BASSenc_MP3 (WAV / MP3) |
| MIDI I/O | WinMM, GM / GS device profiles |
| Sequencer | In-house sequencer engine |
| Localization | Per-locale resource DLLs (EN / DE) |
| Installer | Visual Studio Setup Project |
| Build | Visual Studio 2022, x86 |
| Target OS | Windows 7/8/10/11 |

## Media

### Photos
- projects/13-bandora/foto/Bandora_1.png
- projects/13-bandora/foto/Bandora_2.png
- projects/13-bandora/foto/Bandora_3.png
- projects/13-bandora/foto/Bandora_4.png

### Videos
- https://www.youtube.com/watch?v=0KTqOvhLUM8

## Notes

<!-- Additional notes, links, screenshots, versions -->

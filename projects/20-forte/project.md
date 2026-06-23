# FORTE 12

**Subtitle:** Full-featured music notation editor
**Tags:** Commercial, C++, MFC, BCGSoft, MIDI, WinMM, VST 2.x, Inno Setup, MusicXML
**Path:** [https://www.fortenotation.com/en/](https://www.fortenotation.com/en/)
**Button:** FORTE 12 Website
**Platform:** C++ + MFC/Windows (MSVC)

## Purpose

Commercial Windows music notation software (Basic/Home/Premium editions). The core is a score document model with a custom rendering pipeline that lays out staves, measures, noteheads, beams, ties, slurs and all standard engraving elements to GDI. 
Live recording from your MIDI-device to write your notes, the app integrates a real-time MIDI capture thread (WinMM), a VST 2.x plugin host, an audio render pipeline (DirectShow/WASAPI), and a MusicXML serializer. BCGSoft Ribbon replaces classic MFC menu bar. Distribution is a signed installer with HTTPS-based license activation and an in-app update mechanism.

## What I Did

- Redesigned and extended the MIDI mixer - track info UI, master section, and channel/program-change controls
- Improved the score and note-editing experience (measure handling, note input, undo/redo)
- Enhanced VST hosting and playback integration
- Worked on MusicXML import and compatibility with files from earlier versions
- General stability, performance and UI polish across the editor

## Key features
live recording from your MIDI-device to write your notes
- Score document model - internal tree, supports all standard clefs, key/time signatures, tuplets, grace notes, multi-measure rests
- Notation elements - noteheads, stems, beams (automatic grouping by time signature), ties, slurs, articulations, dynamics (hairpins, text), fermatas, trills, ornaments, chord symbols, guitar tablature (custom tuning per track), lyrics (16 verses per staff)
- Multi-voice/multi-track - independent voices per staff, up to 32 instrument tracks per system
- Ribbon UI (BCGSoft) - tabbed command bar (Home/Score/Record/Options/Help) built on BCGControlBar Pro, context-sensitive tabs for selection state, custom input palette docked as a side panel
- MIDI live recording - WinMM `midiInOpen` / callback thread captures note-on/off, real-time mode quantizes to selected grid after recording, step-input mode
- MIDI routing & mixing - in-app mixer (track volume, pan, mute/solo, channel assignment), MIDI-IN routing dialog for channel filter, split point (bass/treble clef auto-split), voice-to-track mapping
- MIDI playback - WinMM or DirectMusic backend, General MIDI channel mapping, tempo track with BPM automation, loop and lead-in for recording
- VST 2.x host - scans plugin directories for `*.dll`, instantiates via `VSTPluginMain`, routes audio via ASIO-style float buffers, FORTE Player is a bundled VST instrument with a GM sound library
- Audio export - offline render of the entire score to PCM WAV, MP3 encoding via bundled encoder, uses DirectShow graph or WASAPI exclusive for output device routing
- MusicXML I/O - custom DOM-based parser/writer against MusicXML 3.x schema, import maps `<note>`, `<attributes>`, `<direction>` to internal model, export round-trips to Sibelius, Finale, MuseScore
- Layout engine - staff size scaling (%), margin/indent control, per-page system count, multi-measure rest merging, font overrides for all text element types, live preview in layout dialog
- Print pipeline - GDI+ page renderer, outputs to Windows printer DC or EMF metafile for PDF export
- Online updater - HTTPS manifest check at startup, downloads versioned installer and relaunches with elevation
- License activation - RSA-signed serial key, online activation against license server, offline re-activation via email flow
- Localization - resource DLL per locale; runtime language switch without restart (German, English)

## Tech Stack

| Component | Technology |
|---|---|
| Language | C++ (MSVC) |
| UI framework | MFC (SDI/MDI, dynamic dialogs) |
| Ribbon/toolbar | BCGControlBar Pro (BCGSoft) |
| MIDI I/O | WinMM |
| MIDI extended | DirectMusic |
| Audio playback | DirectShow filter graph, WASAPI |
| Audio export | WAV, MP3|
| VST | VST 2.x SDK |
| MusicXML | Custom DOM parser/writer (MusicXML 3.x) |
| Score rendering | GDI/GDI+ (noteheads, beams, curves) |
| Print / export | GDI+ → printer DC metafile |
| Updater | HTTPS manifest + downloader |
| Installer | Signed NSI /Inno Setup package |
| Build | Visual Studio (MSVC), x86 |
| Target OS | Windows 7/8/10/11|

## Media

### Photos
- projects/20-forte/foto/Foto_1.png
- projects/20-forte/foto/Foto_4.png
- projects/20-forte/foto/Foto_3.png
- projects/20-forte/foto/Foto_2.png
- projects/20-forte/foto/Foto_5.jpg
- projects/20-forte/foto/Foto_11.jpg

### Videos
- https://youtube.com/watch?v=XzOZawpz8q4

## Notes
- Online manual FORTE 12: https://www.fortenotation.com/en/manual/FORTE12/Welcome.html



# SimpleMidiViewer

**Subtitle:** Score and note inspector for Standard MIDI Files
**Category:** Desktop / Audio
**Tags:** C++17, MFC, WinAPI, MIDI, CMake, Native
**Path:** https://github.com/dgimbialo/MidiViewer
**Button:** Go to Git
**Platform:** C++17 + MFC / Windows

## Purpose

The app grew out of another commercial project that needed detailed, note-by-note analysis of MIDI tracks to debug the algorithms recognizing live-recorded MIDI notes. That need turned into a standalone tool.

A lightweight Windows desktop app for inspecting Standard MIDI Files (.mid / .midi): a piano-roll score, a synchronized note table, and tick-accurate timing tools. It is built deliberately on raw WinAPI / MFC, with no Qt, Electron, .NET or third-party libraries, so it compiles to a single self-contained .exe that starts instantly, uses very little memory, and runs on any Windows machine with nothing to install.

## Key features

- Piano-roll score: notes drawn as pitch/time rectangles shaded by velocity, one semitone per lane so they never overlap vertically
- Bar-grouped note table: start tick and ms, note name, pitch, duration (ticks and ms), velocity and channel, organized by bar
- Two-way selection sync: click a note in the score or the list and the other view highlights, scrolls to it, and shows details in the status bar
- Per-track viewing: a chooser for multi-track files and a Track menu that switches tracks live (score and table reload)
- Per-bar tick ruler: hover a bar for a ruler relative to it, with beat marks, sub-beat ticks, a live cursor and an exact tick readout
- Center-anchored zoom with Ctrl + Wheel or Ctrl + +/-/0, keeping the viewport center in place
- Dockable note list: dock right or bottom, or float it as a separate window
- Header read-out: tempo (BPM), time signature, bar count, note count and total duration
- Correct timing math: honors tempo and time-signature changes for tick to ms and bar conversions; track names decoded as UTF-8 (Cyrillic displays correctly)
- Self-contained: static MFC and static CRT, so the .exe runs with no extra redistributables

## Tech Stack

| Component | Technology |
|---|---|
| Language | C++17 |
| UI | MFC / WinAPI (MDI, GDI double-buffered) |
| MIDI | Own Standard MIDI File parser (format 0 / 1) |
| Build | CMake 3.20+ with MSVC (Visual Studio 2022) |
| Linking | Static MFC + static CRT (single self-contained .exe) |
| Dependencies | None (Windows system libraries only) |
| Target OS | Windows 10 / 11 |

## Media

### Photos
- projects/04-simplemidiviewer/foto/Foto_1.png
- projects/04-simplemidiviewer/foto/Foto_2.png

### Videos

## Notes

- MIT licensed.
- Input: Standard MIDI Files, format 0 or 1 (.mid / .midi).

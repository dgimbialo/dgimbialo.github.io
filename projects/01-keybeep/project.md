# KeyBeep

**Subtitle:** Windows hotkey audio feedback tray app
**Tags:** C++, Win32 API, WinMM, MIDI, Registry
**Path:** `D:\My_project\chenge_lang`
**Platform:** C++ / Win32 API / Windows
**GitHub:** [dgimbialo/KeyBeep](https://github.com/dgimbialo/KeyBeep)

## Purpose

Lightweight Windows tray program for audio confirmation of language switching or any hotkey. Solves the problem of no feedback when a key is pressed.

## Key features

- Global keyboard hook (WH_KEYBOARD_LL) — hotkey interception throughout the system regardless of the active window
- MIDI audio via WinMM — always open HMIDIOUT handle, bypasses WASAPI delay
- 4 types of sounds — 4 MIDI tones (Low/Mid/High/Double Beep)
- System tray (Shell_NotifyIcon) — minimalistic UI; double-click settings
- Configuration in the HKCU\Software\KeyBeep registry — VK code, modifiers, sound type; persist after reboot
- Self-installer — setup.exe extracts KeyBeep.exe to %LOCALAPPDATA%\KeyBeep\ and adds it to autostart
- Thread safety — the hook posts WM_USER+10 and returns; playback in worker thread

## Tech Stack

| Component | Technology |
|---|---|
| Language | C++ (MSVC) |
| GUI | Win32 API, SystemTray, Keyboard hooks |
| Audio | WinMM (MIDI Out) |
| Persistence | Windows Registry |
| Build | batch build.bat |
| Size | 180 KB, zero dependencies |

## Media

### Photos
<!-- Place photos in foto/ folder -->
<!-- Then specify paths in media.foto in assets/js/data.js -->

### Videos
<!-- Place videos in video/ folder -->
<!-- Then specify paths in media.video in assets/js/data.js -->

## Notes
<!-- Additional notes, links, screenshots, versions -->

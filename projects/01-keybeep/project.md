# KeyBeep

**Subtitle:** Windows hotkey audio feedback tray app
**Tags:** C++, Win32 API, WinMM, MIDI, Registry
**Path:** [dgimbialo/KeyBeep](https://github.com/dgimbialo/KeyBeep)
**Button:** Go to GitHub
**Platform:** C++/Win32 API/Windows


## Purpose

Lightweight Windows tray app that plays an instant, configurable sound every time a chosen hotkey is pressed, giving immediate audible confirmation that the key registered. It was born from a sticky keyboard that occasionally missed the language-switch key, leaving no way to tell whether the press worked. Useful for language-switch keys, mute / push-to-talk buttons, macro keys, or any key you want audio feedback for.

## Key features

- Global hotkey with optional modifiers (Ctrl/Alt/Shift/Win) and key-combo detection
- Instant audio via MIDI Out (WinMM), reliable even right after Windows volume or notification sounds (bypasses the audio engine)
- Several MIDI sound types (low/medium/high/double beep) with a Test Sound button
- Runs silently in the system tray; settings window opens on double-click
- Settings saved to the registry (HKCU\Software\KeyBeep) and persist across reboots
- Self-installer: copies the app to %LOCALAPPDATA%\KeyBeep\ and adds autostart; uninstall from the tray menu
- Thread-safe low-level keyboard hook: the callback posts a message and returns immediately, playback runs on a worker thread
- Single EXE, zero external dependencies (Windows built-in libraries only)

## Tech Stack

| Component | Technology |
|---|---|
| Language | C++ (MSVC) |
| GUI | Win32 API, system tray (Shell_NotifyIcon), low-level keyboard hook |
| Audio | WinMM MIDI Out (persistent HMIDIOUT handle) |
| Persistence | Windows Registry (HKCU) |
| Installer | Embedded-resource self-installer (setup.exe) |
| Build | build.bat, Visual Studio 2017/2019/2022 |
| Dependencies | Windows built-in libs only (user32, winmm, shell32, advapi32) |

## Media

### Photos
- projects/01-keybeep/foto/Foto_1.png
- projects/01-keybeep/foto/Foto_2.png
- projects/01-keybeep/foto/Foto_3.png

### Videos

## Notes


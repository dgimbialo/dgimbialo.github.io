# KeyBeep

**-ƒ-û-¦-+-¦-¦-+-+-+-¦-+-¦:** Windows hotkey audio feedback tray app  
**-¿-+-Å-à:** `D:\My_project\chenge_lang`  
**-ƒ-+-¦-é-ä-+-Ç-+-¦:** C++ / Win32 API / Windows
**GitHub:** [dgimbialo/KeyBeep](https://github.com/dgimbialo/KeyBeep)

## -ƒ-Ç-+-+-+-¦-ç-¦-+-+-Å

Lightweight Windows tray--+-Ç-+-¦-Ç-¦-+-¦ -¦-+-Å -¦-â-¦-û-¦-+-î-+-+-¦-+ -+-û-¦-é-¦-¦-Ç-¦-¦-¦-+-+-Å -+-¦-Ç-¦-+-+-¦-¦-+-+-Å -+-+-¦-+ -¦-¦-+ -¦-â-¦-î--Å-¦-+-¦-+ hotkey. -Æ-+-Ç-û-ê-â-ö -+-Ç-+-¦-+-¦-+-â -¦-û-¦-ü-â-é-+-+-ü-é-û -+-¦-+-Ç-+-é-+-+-¦-+ -+-¦'-Å-+-¦-â -+-Ç-+ -+-Ç-+-+-â-ë-¦-+-+-+-â -+-¦-é-+-ü-¦-¦-+-+-û -¦-+-¦-¦-û-ê-û -+-¦-Ç-¦-+-+-¦-¦-+-+-Å -+-+-¦-+.

## -Ü-+-Ä-ç-+-¦-û -ä-â-+-¦-å-û-ù

- -ô-+-+-¦-¦-+-î-+-+-¦ -à-â-¦ -¦-+-¦-¦-û-¦-é-â-Ç-+ (WH_KEYBOARD_LL) GÇö -+-¦-Ç-¦-à-+-+-+-¦-+-+-Å hotkey -+-+ -¦-ü-û-¦ -ü-+-ü-é-¦-+-û -+-¦-+-¦-+-¦-¦-+-+ -¦-û-¦ -¦-¦-é-+-¦-+-+-¦-+ -¦-û-¦-+-¦
- MIDI--¦-â-¦-û-+ -ç-¦-Ç-¦-+ WinMM GÇö -+-+-ü-é-û-¦-+-+ -¦-û-¦-¦-Ç-+-é-+-¦ HMIDIOUT handle, -+-¦-à-+-¦-+-é-î -+-¦-é-Ç-+-+-¦-â WASAPI
- 7 -é-+-+-û-¦ -+-¦-â-¦-û-¦ GÇö 4 MIDI -é-+-+-+ (Low/Mid/High/Double Beep) + 3 -ü-+-ü-é-¦-+-+-+-à Windows -+-¦-â-¦-+
- -í-+-ü-é-¦-+-+-+-¦ -é-Ç-¦-¦ (Shell_NotifyIcon) GÇö -+-û-+-û-+-¦-+-û-ü-é-+-ç-+-+-¦ UI; -+-¦-+-¦-ê-é-â-¦-¦-+-+-Å -+-+-¦-¦-û-¦-+-+-+ -¦-+-û-¦-+-+
- -Ü-+-+-ä-û-¦-â-Ç-¦-å-û-Å -â -Ç-¦-ö-ü-é-Ç-û HKCU\Software\KeyBeep GÇö VK--¦-+-¦, modifiers, -é-+-+ -+-¦-â-¦-â; -+-¦-¦-Ç-û-¦-¦-Ä-é-î-ü-Å -+-û-ü-+-Å -+-¦-Ç-¦-+-¦-¦-¦-+-é-¦-¦-¦-+-+-Å
- Self-installer GÇö setup.exe -¦-+-é-Å-¦-â-ö KeyBeep.exe -¦-+ %LOCALAPPDATA%\KeyBeep\ -û -¦-+-¦-¦-ö -¦ autostart
- Thread safety GÇö -à-â-¦ -+-+-ü-é-+-é-î WM_USER+10 -û -+-+-¦-¦-Ç-é-¦-ö-é-î-ü-Å; -¦-û-¦-é-¦-+-Ç-¦-+-+-Å -â worker thread

## Tech Stack

| Component | Technology |
|---|---|
| Language | C++ (MSVC) |
| GUI | Win32 API, SystemTray, Keyboard hooks |
| Audio | WinMM (MIDI Out) |
| Persistence | Windows Registry |
| Build | batch build.bat |
| Size | ~80 KB, -+-â-+-î-+-¦-û -+-¦-+-¦-¦-+-+-ü-é-û |

## -£-¦-¦-û-¦

### Photos
<!-- Place photos in foto/ folder -->
<!-- Then specify paths in media.foto in assets/js/data.js -->

### Videos
<!-- Place videos in video/ folder -->
<!-- Then specify paths in media.video in assets/js/data.js -->

## -¥-+-é-¦-é-¦-+

<!-- -ö-+-¦-¦-é-¦-+-¦-û -+-+-é-¦-é-¦-+, -+-+-ü-+-+-¦-+-+-Å, -ü-¦-Ç-û-+-ê-+-é-+, -¦-¦-Ç-ü-û-ù -->


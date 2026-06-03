# KeyBeep

**Підзаголовок:** Windows hotkey audio feedback tray app  
**Шлях:** `D:\My_project\chenge_lang`  
**Платформа:** C++ / Win32 API / Windows
**GitHub:** [dgimbialo/KeyBeep](https://github.com/dgimbialo/KeyBeep)

## Призначення

Lightweight Windows tray-програма для аудіального підтвердження перемикання мови або будь-якого hotkey. Вирішує проблему відсутності зворотного зв'язку при пропущеному натисканні клавіші перемикання мови.

## Ключові функції

- Глобальний хук клавіатури (WH_KEYBOARD_LL) — перехоплення hotkey по всій системі незалежно від активного вікна
- MIDI-аудіо через WinMM — постійно відкритий HMIDIOUT handle, обходить затримку WASAPI
- 7 типів звуків — 4 MIDI тони (Low/Mid/High/Double Beep) + 3 системних Windows звуки
- Системний трей (Shell_NotifyIcon) — мінімалістичний UI; налаштування подвійним кліком
- Конфігурація у реєстрі HKCU\Software\KeyBeep — VK-код, modifiers, тип звуку; зберігаються після перезавантаження
- Self-installer — setup.exe витягує KeyBeep.exe до %LOCALAPPDATA%\KeyBeep\ і додає в autostart
- Thread safety — хук постить WM_USER+10 і повертається; відтворення у worker thread

## Tech Stack

| Component | Technology |
|---|---|
| Language | C++ (MSVC) |
| GUI | Win32 API, SystemTray, Keyboard hooks |
| Audio | WinMM (MIDI Out) |
| Persistence | Windows Registry |
| Build | batch build.bat |
| Size | ~80 KB, нульові залежності |

## Медіа

### Photos
<!-- Place photos in foto/ folder -->
<!-- Then specify paths in media.foto in assets/js/data.js -->

### Videos
<!-- Place videos in video/ folder -->
<!-- Then specify paths in media.video in assets/js/data.js -->

## Нотатки

<!-- Додаткові нотатки, посилання, скріншоти, версії -->

# Детальний аудит проектів: технології та ключові функції

**Дата:** 2026-06-01

---

## Зміст

1. KeyBeep — chenge_lang
2. Golden Cooperation Website — gold-coop
3. TDS 520A GPIB Desktop — TDS_520A_GPIB
4. SimpleMidiViewer — SimpleMidiViwer
5. webHz
6. Pump Controller Arduino — Pump_Controller_MEGA_2560
7. COMUS Temperature Controller — COMUS_ACTUAL
8. EAGLE ULP Pin Analyzer — eagle-upl-scripts
9. FastAcqWinApp
10. STM32H7 Fast Acquisition Firmware — ADC_STM32H7
11. CrossZeroDetector (ESP32)
12. Git Change Keeper — Git_Keeper
13. Bandora / JAMMER Professional
14. HMI Touchscreen Legacy PIC24 — hmitouchscreenold
15. Drag and Drop HTML Editor — drag_drop_html_editor
16. UI-App / HMIApp Industrial HMI
17. ModbusEmulator
18. HPLC Syringe Pump — hplcpump
19. ScanScore — scanscore_for_vol
20. Forte / Genesis Music Notation — forte_new
21. Onyx
22. AI Memory System

---

## Пов'язані групи проектів

| Група | Проекти | Зв'язок |
|---|---|---|
| Signal Acquisition System | FastAcqWinApp + STM32H7 Firmware | Desktop PC ↔ STM32: UART/USB CDC бінарний протокол |
| Frequency Monitoring | webHz + CrossZeroDetector | Flask веб-сервер + ESP32: HTTP POST JSON |

---

## 1. KeyBeep

**Шлях:** `D:\My_project\chenge_lang`  
**Мова/Платформа:** C++ / Win32 API / Windows

### Призначення
Lightweight Windows tray-програма для аудіального підтвердження перемикання мови або будь-якого hotkey. Вирішує проблему відсутності зворотного зв'язку при пропущеному натисканні клавіші перемикання мови.

### Ключові функції
- **Глобальний хук клавіатури** (`WH_KEYBOARD_LL`) — перехоплення hotkey по всій системі незалежно від активного вікна.
- **MIDI-аудіо через WinMM** — постійно відкритий `HMIDIOUT` handle, обходить затримку WASAPI.
- **7 типів звуків** — 4 MIDI тони (Low/Mid/High/Double Beep) + 3 системних Windows звуки.
- **Системний трей** (`Shell_NotifyIcon`) — мінімалістичний UI: налаштування відкриваються подвійним кліком.
- **Конфігурація у реєстрі** (`HKCU\Software\KeyBeep`) — VK код, modifiers, тип звуку; виживають після перезавантаження.
- **Self-installer** — `setup.exe` витягує `KeyBeep.exe` до `%LOCALAPPDATA%\KeyBeep\` і додає в autostart.
- **Thread safety** — хук постить `WM_USER+10` і повертається; відтворення в окремому worker thread.

### Технологічний стек
| Компонент | Технологія |
|---|---|
| Мова | C++ (MSVC) |
| GUI | Win32 API, SystemTray, Keyboard hooks |
| Аудіо | WinMM (MIDI Out) |
| Persistence | Windows Registry |
| Build | Batch-скрипт build.bat |
| Розмір | ~80 KB, нульові зовнішні залежності |

---

## 2. Golden Cooperation Website

**Шлях:** `D:\My_project\gold-coop`  
**Мова/Платформа:** HTML/CSS/JS + Cloudflare Pages

### Призначення
Корпоративний сайт EPC-підрядника з будівництва сонячних електростанцій (Photovoltaik) для ринків Германія / Польща / Австрія / Бельгія / Нідерланди.

### Ключові функції
- **Мультимовна локалізація (i18n)** — 4 мови: DE/PL/UK/EN. Зміна мови без перезавантаження сторінки.
- **SEO-оптимізація** — `hreflang` теги, OpenGraph, Twitter Card, JSON-LD `Organization + ProfessionalService` structured data, Google Analytics 4.
- **Адаптивний дизайн** — responsive CSS для мобільних та десктоп.
- **Деплой на Cloudflare Pages** через Wrangler CLI — zero-config edge hosting.
- **Image processing pipeline** — Sharp для оптимізації фотографій проектів (сонячні ел. станції 7.4 MW+).
- **Sitemap/robots.txt** для коректної індексації пошуковиками.

### Технологічний стек
| Компонент | Технологія |
|---|---|
| Frontend | HTML5, CSS3, vanilla JS |
| i18n | Власна система через locales/ JSON |
| Hosting | Cloudflare Pages (Wrangler) |
| Build tools | npm, Sharp |
| Analytics | Google Analytics 4 (gtag.js) |

---

## 3. TDS 520A GPIB Desktop Application

**Шлях:** `D:\My_project\TDS_520A_GPIB`  
**Мова/Платформа:** C++17 + MFC + NI-488.2 / Win64

### Призначення
Windows-застосунок для управління осцилографом Tektronix TDS 520A через GPIB (IEEE-488). Надає GDI waveform viewer і вбудований веб-інтерфейс для перегляду з мобільного пристрою.

### Ключові функції
- **GPIB auto-scan** — автоматичний скан адрес 1–30 на board 0, ідентифікація за SCPI `*IDN?`.
- **SCPI протокол** — `WFMPRE?`, `CURVE?`, `ACQuire?` для waveform preamble і бінарних даних кривої.
- **Waveform decoder** — конвертація raw ADC у фізичні одиниці (В/с) згідно YMULT, YOFF, YZERO, XINCR з преамбули.
- **GDI double-buffered renderer** — zoom/pan, автомасштаб, cursor overlay, ~10+ FPS.
- **Lock-free ring buffer (SPSC)** — потокобезпечна передача waveform між acquisition thread і GUI.
- **Embedded HTTP + WebSocket server** — Winsock accept loop + thread pool; WebSocket RFC 6455 з self-contained SHA-1 та Base64.
- **HTML/JS Web UI** — `HtmlGenerator` автогенерує single-page frontend; waveform дані пушаться по WebSocket на мобільний браузер.
- **Acquisition thread** — фоновий цикл читання з осцилографа; старт/стоп через меню.

### Технологічний стек
| Компонент | Технологія |
|---|---|
| Мова | C++17 |
| UI | MFC (CFrameWnd, CWnd, GDI) |
| GPIB | NI-488.2 (ni4882.lib) |
| Протокол | SCPI over GPIB |
| Networking | Raw Winsock, WebSocket RFC 6455 |
| Build | VS2022, TDS520A.sln, x64 |

---

## 4. SimpleMidiViewer

**Шлях:** `D:\My_project\SimpleMidiViwer`  
**Мова/Платформа:** C++17 + MFC + CMake / Windows

### Призначення
Desktop Windows-застосунок для відкриття, парсингу та візуалізації MIDI-файлів у вигляді нотних рядків.

### Ключові функції
- **MIDI parser** — читання Standard MIDI File (.mid): header/track chunks, variable-length quantity decoding, note on/off, meta, SysEx.
- **Score rendering** — відображення нот у стандартних нотних лінійках з налаштуванням масштабу.
- **MFC GUI** — `MainFrame`, `ScoreView`, меню Open/Save/Export.
- **CMake build** — precompiled headers.

### Технологічний стек
| Компонент | Технологія |
|---|---|
| Мова | C++17 |
| UI | MFC (MDI) |
| MIDI | Власний parser |
| Build | CMake + MSVC |

---

## 5. webHz

**Шлях:** `D:\My_project\webHz`  
**Мова/Платформа:** Python + Flask + MySQL

### Призначення
Веб-сервер для моніторингу та логування даних частоти мережі (50 Гц). Отримує дані від CrossZeroDetector (ESP32) і надає адмін-інтерфейс з переглядом логів.

### Ключові функції
- **REST API ендпоінт** `/frequency_data` — повертає JSON з поточним значенням частоти.
- **Веб-форма** `/entry` — Jinja2 HTML шаблон для введення параметрів.
- **Адмін-сторінка** `/admin` — захищена `@check_logged_in` декоратором.
- **Перегляд логу** `/viewlog` — таблиця логів з MySQL: phrase, letters, ip, browser_string, result.
- **MySQL інтеграція** через `UseDatabase` context manager (DBcm.py) — exception-safe закриття з'єднання.
- **Auth middleware** (checker.py) — перевірка активної Flask сесії.
- **Custom exceptions** — `ConnectionError`, `CredentialsError`, `SQLError` для диференційованої обробки БД помилок.

### Технологічний стек
| Компонент | Технологія |
|---|---|
| Мова | Python 3 |
| Web framework | Flask |
| Templating | Jinja2 |
| Database | MySQL (mysql-connector-python) |
| Auth | Flask session |

---

## 6. Pump Controller Arduino

**Шлях:** `D:\My_project\Pump_Controller_MEGA_2560`  
**Мова/Платформа:** Arduino C/C++ / Arduino Mega 2560

### Призначення
Firmware контролера насосу для автоматичної та ручної подачі рідини з 3-сенсорною системою визначення рівня.

### Ключові функції
- **3-сенсорна система рівня рідини** — визначення LOW/MIDDLE/HIGH рівня, управління реле насосу.
- **Автоматичний режим** — управління насосом на основі поточного рівня.
- **Ручний режим** — override через кнопки з індикацією на LCD.
- **Error state detection** — обробка аварійних ситуацій (відсутність/помилка сенсора).
- **LCD UI** (LiquidCrystal 16×2) — режим, рівень, стан помилок.
- **Custom pin mapping** (custom_pins.h) — централізоване визначення GPIO.

### Технологічний стек
| Компонент | Технологія |
|---|---|
| Platform | Arduino Mega 2560 |
| Framework | Arduino C/C++ |
| Display | LiquidCrystal 16×2 |
| Build | Arduino IDE / .ino sketch |

---

## 7. COMUS Temperature Controller

**Шлях:** `D:\My_project\COMUS_ACTUAL\project_402_Stable`  
**Мова/Платформа:** Arduino C/C++ / Arduino (ATmega)

### Призначення
Firmware автономного контролера температури для системи сонячного колектора: управляє вентилятором/насосом на основі різниці температур між колектором і приміщенням.

### Ключові функції
- **Двосенсорна система** — DS18B20 (HomeThermometer + CollectorThermometer) на шині OneWire. Перевірка наявності 2 девайсів при старті.
- **3 режими управління** — OFF / COOL (охолодження) / HEAT (підігрів). Рішення за різницею температур + ручний режим.
- **EEPROM persistence** — `nSetTemp` та `nManualMode` зберігаються і відновлюються після вимкнення живлення.
- **Interrupt-driven кнопки** — `attachInterrupt` на pin 2; debounce 100 мс. Temp Down / Mode Toggle / Temp Up.
- **LCD UI** (LiquidCrystal 16×2) — обидві температури, режим, задана температура.

### Технологічний стек
| Компонент | Технологія |
|---|---|
| Platform | Arduino (ATmega) |
| Sensors | DS18B20 via OneWire + DallasTemperature |
| Display | LiquidCrystal 16×2 |
| Persistence | EEPROM read/write/update |
| Interrupts | digitalPinToInterrupt, attachInterrupt |

---

## 8. EAGLE ULP Pin Analyzer

**Шлях:** `D:\My_project\eagle-upl-scripts`  
**Мова/Платформа:** EAGLE ULP / Autodesk EAGLE

### Призначення
Скрипт-аналізатор для EAGLE Schematic Editor: обирає два компоненти і аналізує які піни Source з'єднані з Target, а які вільні (N/C).

### Ключові функції
- **Автозбір компонентів** — `schematic(SCH) { SCH.parts(P) {...} }` — список всіх parts з name + value.
- **Аналіз netlist** — для кожного піна Source шукає net-з'єднання і відповідні піни Target.
- **Фільтрація та сортування** — фільтр по тексту/статусу (All/Connected/Free N/C), 7 критеріїв сортування.
- **HTML-рендеринг** у вбудованому EAGLE HTML viewer з кольоровим маркуванням (connected/free).
- **Мульти-формат експорту** — CSV, TXT, HTML.
- **Statistics line** — лічильник connected/free пінів у статус-рядку.

### Технологічний стек
| Компонент | Технологія |
|---|---|
| Мова | EAGLE ULP (C-like DSL) |
| Платформа | Autodesk EAGLE / Fusion 360 Electronics |
| Output | HTML, CSV, TXT |

---

## 9. FastAcqWinApp

**Шлях:** `D:\My_project\FastAcqWinApp`  
**Мова/Платформа:** C++ + MFC / Windows (MSVC, x64)
**Парна система з:** STM32H7 Firmware (#10)

### Призначення
Windows desktop-застосунок для real-time прийому та аналізу сигналів від кастомного STM32H7 ADC-пристрою через USB CDC. Режими: FFT-on-device (готові дані) та PC-side FFT (RAW samples + локальна обробка).

### Ключові функції
- **SerialWorker** — background reader thread: COM-порт Win32 API, `ReadFile` loop, CRC-верифікований бінарний протокол, `SendCommand(cmd, arg1, arg2, arg3)`. `EnumPorts()` для auto-discovery.
- **ProtocolParser** — кадровий парсер: `FramesOk()` / `FramesBadCrc()` статистика.
- **ChirpStore** — CRITICAL_SECTION ring buffer 200 chirp frames: `Push(ChirpFrame&&)`, `GetLatest()`, `GetAt(index)`. Кожен `ChirpFrame` — raw samples + FFT magnitudes.
- **LocalFft** — PC-side Radix-2 Cooley-Tukey FFT до 16384 точок; вікна Rectangular/Hann/Hamming/Blackman. `PeakFrequencyHz()`.
- **WaveformView** — GDI waveform з zoom/pan (кнопки X+/X−/Y+/Y− + mousewheel + scrollbars).
- **SpectrumView** — лінійна/логарифмічна АЧХ з cursor overlay.
- **WaterfallView** — spectrogram (waterfall) у псевдокольорі.
- **CommandPanel** — COM combo, Start/Stop, Set Frequency/Samples, Ping, Save Frame, Mode select, Data Mask, Trigger, PC/Device mode toggle.
- **CommLogWnd** — лог байт обміну в реальному часі.

### Технологічний стек
| Компонент | Технологія |
|---|---|
| Мова | C++17 |
| UI | MFC (CWnd custom panels, GDI double-buffer) |
| Communication | Win32 COM port API, binary protocol |
| DSP | Radix-2 FFT, windowing functions |
| Build | VS2022, FastAcq.sln, x64 |

---

## 10. STM32H7 Fast Acquisition Firmware

**Шлях:** `D:\My_project\ADC_STM32H7\Fast_Acquisition_Device`  
**Мова/Платформа:** C + ASM / STM32H743 / arm-none-eabi
**Парна система з:** FastAcqWinApp (#9)

### Призначення
Firmware high-speed ADC пристрою на STM32H743 (Cortex-M7, 480 MHz). Захоплює аналоговий сигнал через паралельний ADC (DCMI), виконує chirp-excitation та FFT на MCU, передає результати по USB CDC.

### Ключові функції
- **DCMI ADC capture** (dcmi_adc.c) — паралельна 8/16-бітна шина ADC через DCMI; DMA-трансфер у зовнішню SDRAM.
- **External SDRAM** (sdram_init.c) — ініціалізація FMC контролера для великих масивів вибірок.
- **Chirp DAC** (chirp_dac.c) — генерація chirp-збуджуючого сигналу через DAC.
- **On-device FFT** (chirp_fft.c) — обчислення спектру на MCU для стиснення даних перед передачею.
- **Phase analysis** (phase_a.c, phase_b.c) — двоканальний фазовий аналіз.
- **USB CDC protocol** (usb_protocol.h) — бінарний протокол поверх USB CDC; відповідь на команди FastAcqWinApp.
- **UART debug** — `printf` redirect через `HAL_UART_Transmit(&huart1)`.

### Технологічний стек
| Компонент | Технологія |
|---|---|
| MCU | STM32H743 (Cortex-M7, 480 MHz) |
| Мова | C + startup ASM |
| HAL | STM32 HAL / CMSIS |
| Peripherals | DCMI, DMA, SDRAM (FMC), DAC, LPTIM, USART, USB FS |
| Build | CMake + arm-none-eabi-gcc, Ninja |
| Config | STM32CubeMX (.ioc) + J-Link scripts |

---

## 11. CrossZeroDetector (ESP32)

**Шлях:** `D:\My_project\CrossZeroDetector`  
**Мова/Платформа:** Arduino C++ / ESP32 (Heltec WiFi LoRa 32 V2)
**Парна система з:** webHz (#5)

### Призначення
Embedded пристрій для точного вимірювання частоти мережі 50 Гц методом підрахунку переходів через нуль. Відправляє виміри до Google Sheets і відображає на OLED.

### Ключові функції
- **Interrupt-based вимірювання** (`IRAM_ATTR handleInterrupt`) — 50 фронтів = 1 цикл; `frequency = 50.0 * 1e6 / duration`. Вища точність ніж polling.
- **SSD1306 OLED** — real-time частота з точністю 4 знаки після коми.
- **NTP синхронізація** (NTPClient + WiFiUDP) — UNIX timestamp для кожного виміру.
- **Буферизація та фільтрація** — тільки 45–55 Гц; накопичення за 10-секундне вікно.
- **Google Sheets інтеграція** — POST JSON (ArduinoJson) до Google Apps Script endpoint кожні 10 секунд.
- **Heltec V2 специфіка** — Vext/RST управління живленням OLED.

### Технологічний стек
| Компонент | Технологія |
|---|---|
| Platform | ESP32 (Heltec WiFi LoRa 32 V2) |
| Framework | PlatformIO + Arduino |
| Display | SSD1306Wire (OLED 128×64) |
| Time | NTPClient (pool.ntp.org) |
| Serialization | ArduinoJson |
| Cloud | Google Apps Script HTTP endpoint |

---

## 12. Git Change Keeper

**Шлях:** `D:\WORK_PROJECTS\Git_Keeper`  
**Мова/Платформа:** Python 3 / CLI

### Призначення
CLI-інструмент для автоматичного збереження `git diff` snapshots у `.diff` файлах. Запускається на регулярній основі і зберігає лише нові зміни, уникаючи дублікатів за SHA-256 хешем.

### Ключові функції
- **GitPython інтеграція** — `repo.is_dirty()`, `repo.git.diff(None, name_only=True)` для переліку змінених файлів.
- **SHA-256 deduplication** — `sha256(diff_content)` для кожного файлу; дублікати не зберігаються.
- **Hash store persistence** — plain-text файл хешів; завантажується на старті, оновлюється після запису.
- **Timestamped output dirs** — `changes_YYYYMMDD_HHMMSS/` для кожного batch змін.
- **Multi-file support** — кожен dirty файл → окремий `.diff` у batch-директорії.
- **argparse CLI** — repo path, output path, hash store path; підтримка polling/daemon режиму.

### Технологічний стек
| Компонент | Технологія |
|---|---|
| Мова | Python 3 |
| Git | GitPython |
| Hashing | hashlib (SHA-256) |
| CLI | argparse |
| Storage | Flat files (.diff + hash store text) |

---

## 13. Bandora / JAMMER Professional

**Шлях:** `D:\WORK_PROJECTS\bandora`  
**Мова/Платформа:** C++ + MFC / Windows (Win32) + C# installer

### Призначення
Повнофункціональний MIDI секвенсор та music compositing застосунок (JAMMER Professional) з підтримкою нотного запису, VST плагінів та audio recording.

### Ключові функції
- **MIDI engine** — MIDI I/O, real-time playback, SysEx, channel mode messages.
- **32-track Sequencer** (Sequencer32) — MIDI sequencer з piano roll та нотним редактором.
- **Audio capture** — запис у WAV та MP3 через DirectShow/WASAPI + Lame/GoGo encoder.
- **Score notation editor** (ScoreEdit, ScoreView) — WYSIWYG нотний редактор: measures, staves, clef, time/key signatures.
- **VST Host** (VSTHost/) — завантаження та виконання VST 2.x плагінів.
- **SoundTouch** — time-stretching та pitch-shifting у реальному часі.
- **Multi-language UI** (LanguageManager, .idm файли) — динамічна зміна мови без перезапуску.
- **Trial/activation system** (LicenseTest/TrialCheck) — перевірка ліцензії.
- **C# installer custom actions** (InstallStep/UninstallStep) через Inno Setup.

### Технологічний стек
| Компонент | Технологія |
|---|---|
| Мова | C++ (MSVC, Win32) + C# |
| UI | MFC (Dynamic) |
| MIDI | WinMM, DirectMusic |
| Audio | DirectShow, WASAPI, Lame/GoGo |
| DSP | SoundTouch |
| VST | VST 2.x host |
| Installer | Inno Setup + C# Custom Actions |
| Build | VS2022, Bandora.sln |

---

## 14. HMI Touchscreen (Legacy PIC24)

**Шлях:** `D:\WORK_PROJECTS\hmitouchscreenold`  
**Мова/Платформа:** Embedded C / PIC24FJ64GB002 / MPLAB XC16

### Призначення
Standalone HMI модуль для управління промисловим шприцевим насосом серії ASI 500 через TFT35 сенсорний дисплей по Modbus RTU.

### Ключові функції
- **TFT35 SPI дисплей** (TFT35_SPI.c) — ініціалізація, backlight, текст та примітиви через SPI.
- **Touchscreen калібрація** (touchscreen.c) — touch-point calibration procedure, persistent у flash.
- **TFTUI** (TFTUI.h) — рівень UI: TextBox, SelectFont, SetBackground/Foreground, center-aligned.
- **Modbus master** (SerialModbus.c) — FC 0x03/0x10, CRC16, timeout 300 мс.
- **Poll/update state machine** — цикл опитування регістрів насоса; differential update тільки при змінах.
- **Flash config** (flash.c) — зберігання calibration у non-volatile flash PIC.
- **WSoD mitigation** — `TFT35_Enable()` кожні 3 с для запобігання white screen of death.
- **UI BreakHook** — callback під час перерисовки для Modbus polling без блокування UI.

### Технологічний стек
| Компонент | Технологія |
|---|---|
| MCU | PIC24FJ64GB002 |
| Мова | C (XC16 compiler) |
| Display | TFT35 SPI |
| Touch | Resistive touchscreen з калібруванням |
| Protocol | Modbus RTU (Serial) |
| Persistence | Internal PIC Flash |
| Build | MPLAB / Makefile / nbproject |

---

## 15. Drag and Drop HTML Editor

**Шлях:** `D:\WORK_PROJECTS\drag_drop_html_editor`  
**Мова/Платформа:** C++ + Qt5 Widgets / Windows (CMake)

### Призначення
WYSIWYG редактор HTML-файлів для TFT дисплеїв: drag-and-drop елементів на канвасі з синхронним редагуванням HTML-коду. Призначений для дизайнерів HMI-інтерфейсів.

### Ключові функції
- **Dual-view editing** — canvas view (drag/resize) + code view (HTML). Зміни синхронізуються в обидва боки.
- **Drag-and-drop palette** — перетягування елементів (текст, кнопка, зображення, лінія) на канвас з (x, y) координатами.
- **Element management** — select/move/resize/copy/paste/duplicate/delete.
- **Property panel** (PropertyPanel) — position, size, text, color, font обраного елемента.
- **Undo/Redo** (QUndoStack, DocumentStateCommand) — повна history через Command pattern.
- **Grid** — конфігурована сітка; snap-to-grid при переміщенні.
- **Font management** — кастомні шрифти, Font Editor, system fonts menu.
- **HTML parser** (model/htmlparser.h) — parsing HTML у внутрішню document model.

### Технологічний стек
| Компонент | Технологія |
|---|---|
| Мова | C++17 |
| UI | Qt5 (Widgets, QMainWindow) |
| Patterns | Command (QUndoStack), MVC |
| Build | CMake, windeployqt |
| Installer | PowerShell build_installer.ps1 |

---

## 16. UI-App / HMIApp (Industrial HMI)

**Шлях:** `D:\WORK_PROJECTS\UI-App\HMIApp`  
**Мова/Платформа:** C++ + Qt6 + QML / Windows embedded

### Призначення
Повнофункціональний industrial HMI для управління кабелезачисним верстатом. Touchscreen-UI на Qt Quick/QML з Modbus зв'язком, управлінням рецептами, діагностикою та обслуговуванням.

### Ключові функції
- **DeviceDataManager** — 50+ Q_PROPERTY для Modbus регістрів: machineState, activeMachineCommand, axis corrections, clamping pressure/position, barometer, LED strips, blade replacement steps, service counters.
- **Modbus комунікація** (Comm, PortManager) — async reads/writes через QSerialBus/QModbusClient з priority queue та статистикою.
- **Barcode scanner** (PortManager) — dual-mode: serial port або HID keyboard emulation через eventFilter.
- **Recipe engine** (RecipeManager, ProductionDatabase) — CRUD рецептів у SQLite.
- **Multi-axis config** (CMachineAxisSettings) — параметри 4+ осей A1–A4: reference corrections, offsets, PID enable.
- **Blade replacement wizard** — покроковий guided процес з enable/disable next/prev/stop.
- **USB detection** (UsbManager, UsbDeviceWatcher) — WMI COM-об'єкт для USB arrival/removal.
- **Qt Virtual Keyboard** — для touchscreen введення.
- **Kiosk mode** — Single App Mode через Windows Registry Shell key.
- **i18n** — Qt Linguist (.ts/.qm), qsTr() у QML.
- **Release pipeline** — Inno Setup + rcedit + code signing (signtool + PFX).

### Технологічний стек
| Компонент | Технологія |
|---|---|
| Мова | C++17 |
| UI | Qt6 Quick/QML, Qt Virtual Keyboard |
| Database | Qt SQL (SQLite) |
| Communication | QModbusClient (SerialBus), QSerialPort |
| Build | CMake 3.16+, Ninja, VS2022 |
| Deployment | windeployqt, Inno Setup, rcedit, signtool |
| Target | Windows 10 embedded (kiosk mode) |

---

## 17. ModbusEmulator

**Шлях:** `D:\WORK_PROJECTS\ModbusEmulator`  
**Мова/Платформа:** C++ + Qt6 + QML / Windows

### Призначення
Desktop-застосунок для емуляції Modbus RTU/TCP slave пристрою — тестування Modbus master-застосунків (HMIApp, HPLC Pump) без реального обладнання.

### Ключові функції
- **ModbusServer** — Qt QModbusServer як slave: FC 0x03 (Read Holding), FC 0x10 (Write Multiple), генерація відповідей.
- **ModbusDataStore** — register bank: bulk init, per-address read/write, notifications при змінах.
- **QML UI** — конфігурація порту/slave-ID, real-time таблиця регістрів, Start/Stop, log панель.
- **LogHandler** — структурований лог запитів/відповідей із timestamp.
- **CMakePresets** — debug/release profiles; windeployqt deployment.

### Технологічний стек
| Компонент | Технологія |
|---|---|
| Мова | C++17 |
| UI | Qt6 Quick/QML |
| Protocol | Qt Modbus (QModbusServer, SerialBus) |
| Build | CMake 3.16+, Ninja |

---

## 18. HPLC Syringe Pump

**Шлях:** `D:\WORK_PROJECTS\hplcpump`  
**Мова/Платформа:** C++ + Qt6 + QML / Windows

### Призначення
Desktop-застосунок для управління HPLC шприцевим насосом через Modbus RTU: параметри потоку, автоматизовані методи, моніторинг тиску та витрати.

### Ключові функції
- **PumpManager** — 30+ Q_PROPERTY: currentFlowRate, syringeA/BVolume, syringeA/BPressure, outletPressure, sequencerStep, pumpA/BFlowmeter, faultCode/Description, firmwareVersion, pumpType.
- **Modbus async queue** (ModbusManager) — пріоритетна черга callbacks: readHolding/readInput/writeSingle/writeMultiple Async. Статистика: totalRequests, successRate, averageResponseTime.
- **Auto-reconnect** — автоматичне перепідключення з налаштовуваним інтервалом.
- **Flow Method Manager** — sequence of steps: flowRate, composition, duration, volume на кожному кроці.
- **Flowmeter calibration** (FlowMeterCalibrationManager) — guided процедура калібрування.
- **Setpoints R/W** — flowRateSetpoint, compositionSetpoint, volumeSetpoint, pmin/pmax, fillFlowRate/flushFlowRate.
- **Valve/relay status** — 8 клапанів (valve1–8), 2 реле, homed/filling статуси pump A/B.
- **Real-time charting** (HPLCChart.qml) — кастомний багатоосьовий графік тиску/витрати в часі.(створений щоб уникнути використання комерційної Qt бібліотеки і щоб брограма відповідала вільній ліцензії Qt)
- **Qt Test unit tests** (tests/) — запуск після debug build.

### Технологічний стек
| Компонент | Технологія |
|---|---|
| Мова | C++17 |
| UI | Qt6 Quick/QML |
| Communication | QModbusClient (SerialBus RTU) |
| Testing | Qt Test + CTest |
| Build | CMake 3.16+, Ninja |
| Deployment | windeployqt, Inno Setup, signtool |

---

## 19. ScanScore

**Шлях:** `D:\WORK_PROJECTS\scanscore_for_vol`  
**Мова/Платформа:** C++ + Qt5 + OpenCV + Tesseract / Windows + macOS

### Призначення
Кросплатформний застосунок для оптичного розпізнавання музичних нот (OMR — Optical Music Recognition) зі сканованих нотних сторінок.

### Ключові функції
- **OCR pipeline** (Tesseract + Leptonica) — розпізнавання символів нотного письма.
- **Image preprocessing** (OpenCV cv::Mat) — grayscale, threshold, morphological operations, staff line detection/removal.
- **ML classification** (Armadillo + OpenBLAS) — матричні операції для класифікації нотних символів (noteheads, stems, flags, rests, clefs).
- **Qt5 GUI** — QMainWindow, scan view, results panel.
- **MIDI/notation output** — конвертація у MusicXML або MIDI.
- **VS Setup project** (Scan Setup.vdproj) — Windows installer.
- **Cross-platform** — vcpkg toolchain; Windows (x64-windows) + macOS (x64-osx); AddressSanitizer у debug.

### Технологічний стек
| Компонент | Технологія |
|---|---|
| Мова | C++11 |
| UI | Qt5 (Core, Gui, Widgets, Multimedia, PrintSupport, Pdf) |
| OCR | Tesseract + Leptonica |
| Image | OpenCV (imgproc, core) |
| Math/ML | Armadillo + OpenBLAS |
| Packages | vcpkg |
| Build | CMake, VS multi-config, Windows + macOS |

---

## 20. Forte / Genesis Music Notation

**Шлях:** `D:\WORK_PROJECTS\forte_new\forte`  
**Мова/Платформа:** C++ + MFC / Windows (MSVC, Win32, v140 toolset)

### Призначення
Повнофункціональний music notation editor (аналог Finale/Sibelius) з нотним записом, MIDI, audio recording, VST плагінами та CD burning.

### Ключові функції
- **Score editor** (ScoreEdit/) — WYSIWYG нотний редактор: measures, staves, clef, time/key signatures.
- **MIDI playback/recording** (Sequencer32, piano roll) — програвання через MIDI пристрої.
- **Audio capture** (AudioCapture2MP3/WaveDlg) — WAV та MP3 через Lame/GoGo.
- **Audio CD burn** (MCAudioBurnCtrl/Drive) — запис аудіо CD.
- **VST Host** (VSTHost/) — VST 2.x плагіни.
- **SoundTouch** — time-stretch та pitch-shift у реальному часі.
- **Multi-language** (LanguageManager) — динамічна зміна через .idm файли без перезапуску.
- **Piano roll, Mixer, Inspector** — спеціалізовані редактори.
- **Undo history** (CUNDOHISTORY) — повна підтримка undo/redo.
- **Online updater** (CUpdater) — механізм онлайн оновлень.

### Технологічний стек
| Компонент | Технологія |
|---|---|
| Мова | C++ (MSVC) |
| UI | MFC (Dynamic), Win32 |
| MIDI | WinMM, DirectMusic |
| Audio | DirectShow, WASAPI, Lame, GoGo |
| DSP | SoundTouch |
| VST | VST 2.x host |
| Build | VS (v140 toolset), Genesis.sln |

---

## 21. Onyx

**Шлях:** `D:\WORK_PROJECTS\onyx`  
**Мова/Платформа:** C/C++ / Windows (MSVC legacy)

### Призначення
Legacy desktop-застосунок із plugin-архітектурою. Multimedia або productivity tool з розширюваною системою DLL-плагінів.

### Ключові функції
- **Plugin architecture** (Plugins/) — DLL-плагіни, завантажуються динамічно.
- **Application modules** (Apps/) — набір підзастосунків у рамках одного процесу.
- **Core library** (src/) — shared логіка між Apps та Plugins.
- **Legacy VS2005 solution** — потребує міграції на сучасний toolset.

### Технологічний стек
| Компонент | Технологія |
|---|---|
| Мова | C/C++ |
| UI | Win32 / MFC |
| Architecture | Plugin-based (DLL) |
| Build | Visual Studio legacy (.sln) |

---

## 22. AI Memory System

**Шлях:** `D:\ai_memory_system`  
**Мова/Платформа:** Python 3

### Призначення
CLI-утиліта для ведення семантичної пам'яті AI-асистента або розробника: збереження технічних рішень, помилок, залежностей між фрагментами коду між сесіями.

### Ключові функції
- **MemoryEngine** (core/engine.py) — `add_memory(payload)`, `session_summary(description, tags, since_n)`.
- **Structured records** — type, description, cause, fix, files[], functions[], decisions[], status, confidence, tags[], depends_on[], test_ids[].
- **Project-scoped storage** — ізольовані `data/projects/{slug}/` директорії.
- **Tag system** — довільні теги + авто `project:{slug}`; фільтрація при пошуку.
- **Semantic search** (опціонально, sentence-transformers) — векторний пошук.
- **File watcher** (опціонально, watchdog) — автовідстеження змін у watch-директоріях.
- **JSON CLI output** — всі операції повертають JSON для інтеграції з іншими інструментами.
- **Test suite** (tests/, pytest) — покриття core engine.

### Технологічний стек
| Компонент | Технологія |
|---|---|
| Мова | Python 3 |
| CLI | argparse |
| Storage | JSON files (flat-file DB) |
| Search | sentence-transformers (optional) |
| Watcher | watchdog (optional) |
| Testing | pytest |

---

## Зведений технологічний індекс

### Мови програмування
| Мова | Проекти |
|---|---|
| C++ MFC | TDS520A, FastAcqWinApp, Bandora, Forte, SimpleMidiViewer, Onyx |
| C++ Qt6/QML | HMIApp, ModbusEmulator, HPLC Pump |
| C++ Qt5/Widgets | ScanScore, Drag-and-Drop HTML Editor |
| C++ Win32 | KeyBeep |
| C embedded | STM32H7 Firmware, PIC24 HMI |
| C# | Bandora installer custom actions |
| Python | webHz, Git Keeper, AI Memory System |
| Arduino C++ | CrossZeroDetector, Pump Controller, COMUS |
| EAGLE ULP | Pin Analyzer |
| HTML/CSS/JS | Golden Cooperation website |

### Протоколи та Interfaces
| Протокол | Проекти |
|---|---|
| Modbus RTU | HMIApp, HPLC Pump, ModbusEmulator, PIC24 HMI |
| GPIB IEEE-488 / NI-488.2 / SCPI | TDS520A |
| USB CDC binary protocol | STM32H7 ↔ FastAcqWinApp |
| Serial UART/RS232 | COMUS, HMIApp, FastAcqWinApp |
| WebSocket RFC 6455 | TDS520A web UI |
| HTTP REST JSON | webHz, CrossZeroDetector → Google Sheets |
| MIDI WinMM/DirectMusic | KeyBeep, Bandora, Forte, SimpleMidiViewer |
| OneWire | COMUS DS18B20 |
| SPI | PIC24 HMI TFT35 |

### Build Systems та Deployment
| Система | Проекти |
|---|---|
| CMake + MSVC/Ninja | HMIApp, HPLC Pump, ModbusEmulator, STM32 Firmware, ScanScore, HTML Editor, SimpleMidiViewer |
| Visual Studio MSBuild/SLN | TDS520A, FastAcqWinApp, Bandora, Forte |
| PlatformIO | CrossZeroDetector |
| MPLAB / Makefile | PIC24 HMI |
| npm / Cloudflare Wrangler | Golden Cooperation |
| Inno Setup | HMIApp, HPLC Pump, ModbusEmulator, Bandora |
| windeployqt | всі Qt6/Qt5 проекти |
| signtool + PFX | HMIApp, HPLC Pump |

const PROFILE = {
  "name": "Taras Pavlyk",
  "initials": "TP",
  "title": "Embedded & Desktop Software Engineer",
  "location": "Ukraine",
  "linkedin": "https://www.linkedin.com/in/taras-pavlyk-861b84123/",
  "github": "https://github.com/dgimbialo",
  "email": "",
  "summary": "Experienced software engineer with deep expertise in embedded systems, industrial automation, and desktop application development. Designed and built real-time control systems (STM32, PIC24, Arduino, ESP32), professional industrial HMI interfaces (Qt6/QML, MFC/Win32), signal acquisition & FFT analysis tools, and commercial music software (JAMMER Professional, Forte Genesis). Comfortable across the full stack — from bare-metal firmware to cross-platform desktop GUI and web deployments.",
  "skills": [
    {
      "category": "Embedded Systems",
      "items": [
        "STM32H7 / HAL / CMSIS",
        "PIC24 (MPLAB XC16)",
        "Arduino Mega",
        "ESP32 / PlatformIO",
        "DCMI / DMA / ADC",
        "OneWire / SPI / I2C"
      ]
    },
    {
      "category": "Desktop C++",
      "items": [
        "Qt6 Quick/QML",
        "Qt5 Widgets",
        "MFC / Win32 API",
        "CMake / Ninja / MSBuild",
        "MSVC / arm-none-eabi-gcc"
      ]
    },
    {
      "category": "Protocols & Interfaces",
      "items": [
        "Modbus RTU / TCP",
        "GPIB / SCPI (NI-488.2)",
        "USB CDC (binary)",
        "WebSocket RFC 6455",
        "MIDI WinMM / DirectMusic",
        "HTTP REST / JSON"
      ]
    },
    {
      "category": "DSP & Instruments",
      "items": [
        "FFT Radix-2 (16384 pt)",
        "Waveform Visualization",
        "VST 2.x Host",
        "SoundTouch (time-stretch)",
        "OpenCV / OMR",
        "Google Sheets API"
      ]
    },
    {
      "category": "Web & Scripting",
      "items": [
        "Python / Flask / Jinja2",
        "HTML5 / CSS3 / JS",
        "MySQL / SQLite",
        "Cloudflare Pages",
        "Git / GitPython",
        "EAGLE ULP scripting"
      ]
    }
  ]
};

const PROJECTS = [
  {
    "id": "keybeep",
    "slug": "01-keybeep",
    "number": "01",
    "title": "KeyBeep",
    "subtitle": "Windows hotkey audio feedback tray app  ",
    "category": "Desktop / Win32",
    "filterGroup": "desktop",
    "color": "#1565c0",
    "tags": [
      "C++",
      "Win32 API",
      "WinMM",
      "MIDI",
      "Registry"
    ],
    "path": "`D:\\My_project\\chenge_lang`",
    "platform": "C++ / Win32 API / Windows",
    "paired": null,
    "github": "https://github.com/dgimbialo/KeyBeep",
    "description": "Lightweight Windows tray-програма для аудіального підтвердження перемикання мови або будь-якого hotkey. Вирішує проблему відсутності зворотного зв'язку при пропущеному натисканні клавіші перемикання мови.",
    "features": [
      "Глобальний хук клавіатури (WH_KEYBOARD_LL) — перехоплення hotkey по всій системі незалежно від активного вікна",
      "MIDI-аудіо через WinMM — постійно відкритий HMIDIOUT handle, обходить затримку WASAPI",
      "7 типів звуків — 4 MIDI тони (Low/Mid/High/Double Beep) + 3 системних Windows звуки",
      "Системний трей (Shell_NotifyIcon) — мінімалістичний UI; налаштування подвійним кліком",
      "Конфігурація у реєстрі HKCU\\Software\\KeyBeep — VK-код, modifiers, тип звуку; зберігаються після перезавантаження",
      "Self-installer — setup.exe витягує KeyBeep.exe до %LOCALAPPDATA%\\KeyBeep\\ і додає в autostart",
      "Thread safety — хук постить WM_USER+10 і повертається; відтворення у worker thread"
    ],
    "stack": [
      [
        "---",
        "---"
      ],
      [
        "Мова",
        "C++ (MSVC)"
      ],
      [
        "GUI",
        "Win32 API, SystemTray, Keyboard hooks"
      ],
      [
        "Аудіо",
        "WinMM (MIDI Out)"
      ],
      [
        "Persistence",
        "Windows Registry"
      ],
      [
        "Build",
        "batch build.bat"
      ],
      [
        "Розмір",
        "~80 KB, нульові залежності"
      ]
    ],
    "media": {
      "foto": [],
      "video": []
    }
  },
  {
    "id": "golden-cooperation",
    "slug": "02-golden-cooperation",
    "number": "02",
    "title": "Golden Cooperation",
    "subtitle": "Corporate website for solar EPC contractor  ",
    "category": "Web",
    "filterGroup": "web",
    "color": "#2e7d32",
    "tags": [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Cloudflare Pages",
      "i18n",
      "SEO"
    ],
    "path": "https://www.golden-cooperation.com/",
    "platform": "HTML/CSS/JS + Cloudflare Pages",
    "paired": null,
    "github": "",
    "description": "Корпоративний сайт EPC-підрядника з будівництва сонячних електростанцій (Photovoltaik) для ринків Германія / Польща / Австрія / Бельгія / Нідерланди.",
    "features": [
      "Мультимовна локалізація (i18n) — 4 мови: DE/PL/UK/EN; зміна без перезавантаження",
      "SEO-оптимізація — hreflang, OpenGraph, Twitter Card, JSON-LD Organization + ProfessionalService, GA4",
      "Адаптивний дизайн — responsive CSS для мобільних та десктоп",
      "Деплой на Cloudflare Pages через Wrangler CLI — zero-config edge hosting",
      "Image processing pipeline — Sharp для оптимізації фото проектів (7.4 MW+)",
      "Sitemap / robots.txt для коректної індексації"
    ],
    "stack": [
      [
        "---",
        "---"
      ],
      [
        "Frontend",
        "HTML5, CSS3, vanilla JS"
      ],
      [
        "i18n",
        "Власна система через locales/ JSON"
      ],
      [
        "Hosting",
        "Cloudflare Pages (Wrangler)"
      ],
      [
        "Build",
        "npm, Sharp"
      ],
      [
        "Analytics",
        "Google Analytics 4"
      ]
    ],
    "media": {
      "foto": [],
      "video": []
    }
  },
  {
    "id": "tds520a",
    "slug": "03-tds520a",
    "number": "03",
    "title": "TDS 520A GPIB Desktop",
    "subtitle": "Oscilloscope control + mobile web viewer  ",
    "category": "Desktop / Instruments",
    "filterGroup": "desktop",
    "color": "#6a1b9a",
    "tags": [
      "C++17",
      "MFC",
      "GPIB",
      "NI-488.2",
      "SCPI",
      "WebSocket"
    ],
    "path": "`D:\\My_project\\TDS_520A_GPIB`",
    "platform": "C++17 + MFC + NI-488.2 / Win64",
    "paired": null,
    "github": "",
    "description": "Windows-застосунок для управління осцилографом Tektronix TDS 520A через GPIB (IEEE-488). Надає GDI waveform viewer і вбудований веб-інтерфейс для перегляду з мобільного.",
    "features": [
      "GPIB auto-scan — скан адрес 1–30 на board 0, ідентифікація за *IDN?",
      "SCPI протокол — WFMPRE?, CURVE?, ACQuire? для preamble і бінарних даних кривої",
      "Waveform decoder — конвертація raw ADC у В/с за YMULT/YOFF/YZERO/XINCR",
      "GDI double-buffered renderer — zoom/pan, автомасштаб, cursor overlay, ~10 FPS",
      "Lock-free ring buffer (SPSC) — потокобезпечна передача між acquisition thread і GUI",
      "Embedded HTTP + WebSocket server (RFC 6455) з self-contained SHA-1 та Base64",
      "HtmlGenerator — автогенерує single-page frontend; waveform по WebSocket на мобільний"
    ],
    "stack": [
      [
        "---",
        "---"
      ],
      [
        "Мова",
        "C++17"
      ],
      [
        "UI",
        "MFC (CFrameWnd, GDI)"
      ],
      [
        "GPIB",
        "NI-488.2 (ni4882.lib)"
      ],
      [
        "Протокол",
        "SCPI over GPIB"
      ],
      [
        "Networking",
        "Raw Winsock, WebSocket RFC 6455"
      ],
      [
        "Build",
        "VS2022, x64"
      ]
    ],
    "media": {
      "foto": [],
      "video": []
    }
  },
  {
    "id": "simplemidiviewer",
    "slug": "04-simplemidiviewer",
    "number": "04",
    "title": "SimpleMidiViewer",
    "subtitle": "MIDI file parser & score renderer  ",
    "category": "Desktop / Audio",
    "filterGroup": "audio",
    "color": "#880e4f",
    "tags": [
      "C++17",
      "MFC",
      "MIDI",
      "CMake"
    ],
    "path": "`D:\\My_project\\SimpleMidiViwer`",
    "platform": "C++17 + MFC + CMake / Windows",
    "paired": null,
    "github": "",
    "description": "Desktop Windows-застосунок для відкриття, парсингу та візуалізації MIDI-файлів у вигляді нотних рядків.",
    "features": [
      "MIDI parser — SMF: header/track chunks, VLQ decoding, note on/off, meta, SysEx",
      "Score rendering — відображення нот у стандартних нотних лінійках з масштабуванням",
      "MFC MDI GUI — MainFrame, ScoreView, меню Open/Save/Export",
      "CMake build з precompiled headers"
    ],
    "stack": [
      [
        "---",
        "---"
      ],
      [
        "Мова",
        "C++17"
      ],
      [
        "UI",
        "MFC (MDI)"
      ],
      [
        "MIDI",
        "Власний SMF parser"
      ],
      [
        "Build",
        "CMake + MSVC"
      ]
    ],
    "media": {
      "foto": [],
      "video": []
    }
  },
  {
    "id": "webhz",
    "slug": "05-webhz",
    "number": "05",
    "title": "webHz",
    "subtitle": "Grid frequency monitoring web server  ",
    "category": "Web / Python",
    "filterGroup": "web",
    "color": "#00796b",
    "tags": [
      "Python",
      "Flask",
      "MySQL",
      "Jinja2",
      "REST API"
    ],
    "path": "`D:\\My_project\\webHz`",
    "platform": "Python + Flask + MySQL",
    "paired": "CrossZeroDetector (#11)",
    "github": "",
    "description": "Веб-сервер для моніторингу та логування даних частоти мережі 50 Гц. Отримує дані від CrossZeroDetector (ESP32) і надає адмін-інтерфейс.",
    "features": [
      "REST API /frequency_data — повертає JSON з поточним значенням частоти",
      "Jinja2 web-форма /entry для введення параметрів",
      "Адмін-сторінка /admin — захищена @check_logged_in",
      "Перегляд логу /viewlog — таблиця MySQL: phrase, letters, ip, browser, result",
      "MySQL через UseDatabase context manager (DBcm.py) — exception-safe",
      "Auth middleware checker.py — Flask session",
      "Custom exceptions — ConnectionError, CredentialsError, SQLError"
    ],
    "stack": [
      [
        "---",
        "---"
      ],
      [
        "Мова",
        "Python 3"
      ],
      [
        "Framework",
        "Flask"
      ],
      [
        "Templating",
        "Jinja2"
      ],
      [
        "Database",
        "MySQL (mysql-connector-python)"
      ],
      [
        "Auth",
        "Flask session"
      ]
    ],
    "media": {
      "foto": [],
      "video": []
    }
  },
  {
    "id": "pump-controller",
    "slug": "06-pump-controller",
    "number": "06",
    "title": "Pump Controller Arduino",
    "subtitle": "3-sensor liquid level controller  ",
    "category": "Embedded / Arduino",
    "filterGroup": "embedded",
    "color": "#e65100",
    "tags": [
      "Arduino",
      "C/C++",
      "Mega 2560",
      "LCD",
      "Relay"
    ],
    "path": "`D:\\My_project\\Pump_Controller_MEGA_2560`",
    "platform": "Arduino C/C++ / Arduino Mega 2560",
    "paired": null,
    "github": "",
    "description": "Firmware контролера насосу для автоматичної та ручної подачі рідини з 3-сенсорною системою визначення рівня.",
    "features": [
      "3-сенсорна система — LOW/MIDDLE/HIGH рівень; управління реле насосу",
      "Автоматичний режим — управління за рівнем рідини",
      "Ручний режим — override через кнопки з індикацією на LCD",
      "Error state detection — аварійні ситуації (відсутність/помилка сенсора)",
      "LCD UI (LiquidCrystal 16×2) — режим, рівень, стан помилок",
      "Централізований custom_pins.h для GPIO маппінгу"
    ],
    "stack": [
      [
        "---",
        "---"
      ],
      [
        "Platform",
        "Arduino Mega 2560"
      ],
      [
        "Framework",
        "Arduino C/C++"
      ],
      [
        "Display",
        "LiquidCrystal 16×2"
      ],
      [
        "Build",
        "Arduino IDE"
      ]
    ],
    "media": {
      "foto": [],
      "video": []
    }
  },
  {
    "id": "comus",
    "slug": "07-comus",
    "number": "07",
    "title": "COMUS Temp Controller",
    "subtitle": "Solar collector thermal management firmware  ",
    "category": "Embedded / Arduino",
    "filterGroup": "embedded",
    "color": "#e65100",
    "tags": [
      "Arduino",
      "C/C++",
      "DS18B20",
      "OneWire",
      "EEPROM",
      "LCD"
    ],
    "path": "`D:\\My_project\\COMUS_ACTUAL`",
    "platform": "Arduino C/C++ / ATmega",
    "paired": null,
    "github": "",
    "description": "Firmware автономного контролера для системи сонячного колектора: управляє вентилятором/насосом на основі різниці температур між колектором і приміщенням.",
    "features": [
      "Двосенсорна система DS18B20 (OneWire) — HomeThermometer + CollectorThermometer; перевірка 2 девайсів при старті",
      "3 режими — OFF / COOL / HEAT на основі різниці температур + ручний режим",
      "EEPROM persistence — nSetTemp та nManualMode відновлюються після вимкнення",
      "Interrupt-driven кнопки — attachInterrupt pin 2; debounce 100 мс; Temp Down / Mode / Temp Up",
      "LCD UI (LiquidCrystal 16×2) — обидві температури, режим, задана температура"
    ],
    "stack": [
      [
        "---",
        "---"
      ],
      [
        "Platform",
        "Arduino (ATmega)"
      ],
      [
        "Sensors",
        "DS18B20 via OneWire + DallasTemperature"
      ],
      [
        "Display",
        "LiquidCrystal 16×2"
      ],
      [
        "Persistence",
        "EEPROM read/write/update"
      ],
      [
        "Interrupts",
        "attachInterrupt"
      ]
    ],
    "media": {
      "foto": [],
      "video": []
    }
  },
  {
    "id": "eagle-ulp",
    "slug": "08-eagle-ulp",
    "number": "08",
    "title": "EAGLE ULP Pin Analyzer",
    "subtitle": "Schematic pin-connection analysis script  ",
    "category": "EDA / Scripting",
    "filterGroup": "tools",
    "color": "#4527a0",
    "tags": [
      "EAGLE ULP",
      "EDA",
      "Schematic",
      "HTML export",
      "CSV"
    ],
    "path": "`D:\\My_project\\eagle-upl-scripts`",
    "platform": "EAGLE ULP / Autodesk EAGLE",
    "paired": null,
    "github": "",
    "description": "Скрипт-аналізатор для EAGLE Schematic Editor: аналізує які піни Source компонента з'єднані з Target, а які вільні (N/C).",
    "features": [
      "Автозбір компонентів — schematic(SCH) { SCH.parts(P) } — name + value список",
      "Аналіз netlist — для кожного піна Source пошук net-з'єднань із Target",
      "Фільтрація та сортування — All/Connected/Free N/C; 7 критеріїв сортування",
      "HTML-рендеринг у EAGLE viewer з кольоровим маркуванням (зелений/сірий)",
      "Мульти-формат експорту — CSV, TXT, HTML",
      "Statistics line — лічильник connected/free пінів"
    ],
    "stack": [
      [
        "---",
        "---"
      ],
      [
        "Мова",
        "EAGLE ULP (C-like DSL)"
      ],
      [
        "Платформа",
        "Autodesk EAGLE / Fusion 360 Electronics"
      ],
      [
        "Output",
        "HTML, CSV, TXT"
      ]
    ],
    "media": {
      "foto": [],
      "video": []
    }
  },
  {
    "id": "fastacqwinapp",
    "slug": "09-fastacqwinapp",
    "number": "09",
    "title": "FastAcqWinApp",
    "subtitle": "Real-time signal acquisition & FFT analysis  ",
    "category": "Desktop / DSP",
    "filterGroup": "desktop",
    "color": "#1565c0",
    "tags": [
      "C++17",
      "MFC",
      "FFT",
      "USB CDC",
      "GDI",
      "Spectrogram"
    ],
    "path": "`D:\\My_project\\FastAcqWinApp`",
    "platform": "C++ + MFC / Windows (MSVC, x64)",
    "paired": "STM32H7 Firmware (#10)",
    "github": "",
    "description": "Windows desktop для real-time прийому та аналізу сигналів від STM32H7 ADC-пристрою через USB CDC. Режими: FFT-on-device та PC-side FFT (RAW samples + локальна обробка).",
    "features": [
      "SerialWorker — background thread: Win32 COM API, ReadFile loop, CRC бінарний протокол",
      "ChirpStore — CRITICAL_SECTION ring buffer 200 chirp frames: Push/GetLatest/GetAt",
      "LocalFft — Radix-2 Cooley-Tukey FFT до 16384 точок; Rectangular/Hann/Hamming/Blackman вікна",
      "WaveformView — GDI zoom/pan (X+/X−/Y+/Y− + mousewheel + scrollbars)",
      "SpectrumView — лінійна/логарифмічна АЧХ з cursor overlay",
      "WaterfallView — spectrogram у псевдокольорі",
      "CommandPanel — COM combo, Start/Stop, Set Freq/Samples, Ping, Mode, Trigger, PC/Device mode"
    ],
    "stack": [
      [
        "---",
        "---"
      ],
      [
        "Мова",
        "C++17"
      ],
      [
        "UI",
        "MFC (CWnd custom panels, GDI double-buffer)"
      ],
      [
        "Communication",
        "Win32 COM port API, binary protocol"
      ],
      [
        "DSP",
        "Radix-2 FFT, windowing functions"
      ],
      [
        "Build",
        "VS2022, FastAcq.sln, x64"
      ]
    ],
    "media": {
      "foto": [],
      "video": []
    }
  },
  {
    "id": "stm32h7",
    "slug": "10-stm32h7",
    "number": "10",
    "title": "STM32H7 Fast Acquisition",
    "subtitle": "High-speed ADC firmware with on-device FFT  ",
    "category": "Embedded / STM32",
    "filterGroup": "embedded",
    "color": "#b71c1c",
    "tags": [
      "STM32H7",
      "C",
      "HAL",
      "DCMI",
      "DMA",
      "USB CDC",
      "CMake"
    ],
    "path": "`D:\\My_project\\ADC_STM32H7`",
    "platform": "C + ASM / STM32H743 / arm-none-eabi",
    "paired": "FastAcqWinApp (#9)",
    "github": "",
    "description": "Firmware high-speed ADC пристрою на STM32H743 (Cortex-M7, 480 MHz). Захоплює аналоговий сигнал через паралельний DCMI ADC, виконує chirp-excitation та FFT на MCU.",
    "features": [
      "DCMI ADC capture (dcmi_adc.c) — паралельна 8/16-бітна шина; DMA → зовнішня SDRAM",
      "External SDRAM (sdram_init.c) — FMC контролер для великих масивів вибірок",
      "Chirp DAC (chirp_dac.c) — генерація збуджуючого chirp-сигналу через DAC",
      "On-device FFT (chirp_fft.c) — спектр на MCU; стиснення перед USB передачею",
      "Phase analysis (phase_a.c, phase_b.c) — двоканальний фазовий аналіз",
      "USB CDC binary protocol (usb_protocol.h) — відповідь на команди FastAcqWinApp"
    ],
    "stack": [
      [
        "---",
        "---"
      ],
      [
        "MCU",
        "STM32H743 (Cortex-M7, 480 MHz)"
      ],
      [
        "Мова",
        "C + startup ASM"
      ],
      [
        "HAL",
        "STM32 HAL / CMSIS"
      ],
      [
        "Peripherals",
        "DCMI, DMA, SDRAM (FMC), DAC, USB FS"
      ],
      [
        "Build",
        "CMake + arm-none-eabi-gcc, Ninja"
      ],
      [
        "Config",
        "STM32CubeMX (.ioc) + J-Link scripts"
      ]
    ],
    "media": {
      "foto": [],
      "video": []
    }
  },
  {
    "id": "crosszero",
    "slug": "11-crosszero",
    "number": "11",
    "title": "CrossZeroDetector",
    "subtitle": "ESP32 grid frequency meter via zero-crossing  ",
    "category": "Embedded / ESP32",
    "filterGroup": "embedded",
    "color": "#e65100",
    "tags": [
      "ESP32",
      "Arduino",
      "PlatformIO",
      "OLED",
      "NTP",
      "Google Sheets"
    ],
    "path": "`D:\\My_project\\CrossZeroDetector`",
    "platform": "Arduino C++ / ESP32 (Heltec WiFi LoRa 32 V2)",
    "paired": "webHz (#5)",
    "github": "",
    "description": "Embedded пристрій для точного вимірювання частоти мережі 50 Гц методом підрахунку переходів через нуль. Відправляє виміри до Google Sheets, відображає на OLED.",
    "features": [
      "Interrupt-based (IRAM_ATTR handleInterrupt) — 50 фронтів = 1 цикл; frequency = 50.0 * 1e6 / duration",
      "SSD1306 OLED — real-time частота з точністю 4 знаки після коми",
      "NTP синхронізація (NTPClient + WiFiUDP) — UNIX timestamp для кожного виміру",
      "Фільтрація 45–55 Гц; накопичення за 10-секундне вікно",
      "Google Sheets POST JSON (ArduinoJson) до Apps Script кожні 10 секунд",
      "Heltec V2 специфіка — Vext/RST управління живленням OLED"
    ],
    "stack": [
      [
        "---",
        "---"
      ],
      [
        "Platform",
        "ESP32 (Heltec WiFi LoRa 32 V2)"
      ],
      [
        "Framework",
        "PlatformIO + Arduino"
      ],
      [
        "Display",
        "SSD1306Wire (OLED 128×64)"
      ],
      [
        "Time",
        "NTPClient (pool.ntp.org)"
      ],
      [
        "Serialization",
        "ArduinoJson"
      ],
      [
        "Cloud",
        "Google Apps Script HTTP endpoint"
      ]
    ],
    "media": {
      "foto": [],
      "video": []
    }
  },
  {
    "id": "git-keeper",
    "slug": "12-git-keeper",
    "number": "12",
    "title": "Git Change Keeper",
    "subtitle": "Automatic git diff snapshot with SHA-256 dedup  ",
    "category": "Python / CLI",
    "filterGroup": "tools",
    "color": "#00695c",
    "tags": [
      "Python",
      "GitPython",
      "SHA-256",
      "CLI",
      "argparse"
    ],
    "path": "`D:\\WORK_PROJECTS\\Git_Keeper`",
    "platform": "Python 3 / CLI",
    "paired": null,
    "github": "",
    "description": "CLI-інструмент для автоматичного збереження git diff snapshots у .diff файлах. Запускається регулярно і зберігає лише нові зміни, уникаючи дублікатів за SHA-256.",
    "features": [
      "GitPython — repo.is_dirty(), repo.git.diff(None, name_only=True)",
      "SHA-256 deduplication — sha256(diff_content); дублікати не зберігаються",
      "Hash store persistence — plain-text файл хешів; завантаження/оновлення",
      "Timestamped output dirs — changes_YYYYMMDD_HHMMSS/",
      "Multi-file — кожен dirty файл → окремий .diff у batch-директорії",
      "argparse CLI — repo path, output path, hash store; polling/daemon режим"
    ],
    "stack": [
      [
        "---",
        "---"
      ],
      [
        "Мова",
        "Python 3"
      ],
      [
        "Git",
        "GitPython"
      ],
      [
        "Hashing",
        "hashlib (SHA-256)"
      ],
      [
        "CLI",
        "argparse"
      ],
      [
        "Storage",
        "Flat files (.diff + hash store)"
      ]
    ],
    "media": {
      "foto": [],
      "video": []
    }
  },
  {
    "id": "bandora",
    "slug": "13-bandora",
    "number": "13",
    "title": "Bandora / JAMMER Professional",
    "subtitle": "Professional MIDI sequencer & music compositor  ",
    "category": "Desktop / Audio",
    "filterGroup": "audio",
    "color": "#880e4f",
    "tags": [
      "C++",
      "MFC",
      "MIDI",
      "WinMM",
      "VST 2.x",
      "SoundTouch",
      "DirectShow"
    ],
    "path": "`D:\\WORK_PROJECTS\\bandora`",
    "platform": "C++ + MFC / Win32 + C# installer",
    "paired": null,
    "github": "",
    "description": "Повнофункціональний MIDI секвенсор та music compositing застосунок (JAMMER Professional) з нотним записом, VST плагінами та audio recording.",
    "features": [
      "MIDI engine — I/O, real-time playback, SysEx, channel mode messages",
      "32-track Sequencer (Sequencer32) — piano roll + нотний редактор",
      "Audio capture — WAV та MP3 через DirectShow/WASAPI + Lame/GoGo encoder",
      "Score notation editor (ScoreEdit) — WYSIWYG: measures, staves, clef, time/key signatures",
      "VST Host (VSTHost/) — завантаження та виконання VST 2.x плагінів",
      "SoundTouch — time-stretching та pitch-shifting у реальному часі",
      "Multi-language UI (LanguageManager, .idm) — динамічна зміна мови без перезапуску",
      "C# installer custom actions (InstallStep/UninstallStep) через Inno Setup"
    ],
    "stack": [
      [
        "---",
        "---"
      ],
      [
        "Мова",
        "C++ (MSVC) + C#"
      ],
      [
        "UI",
        "MFC (Dynamic)"
      ],
      [
        "MIDI",
        "WinMM, DirectMusic"
      ],
      [
        "Audio",
        "DirectShow, WASAPI, Lame/GoGo"
      ],
      [
        "VST",
        "VST 2.x host"
      ],
      [
        "Installer",
        "Inno Setup + C# Custom Actions"
      ],
      [
        "Build",
        "VS2022, Bandora.sln"
      ]
    ],
    "media": {
      "foto": [],
      "video": []
    }
  },
  {
    "id": "hmi-pic24",
    "slug": "14-hmi-pic24",
    "number": "14",
    "title": "HMI Touchscreen (PIC24)",
    "subtitle": "Syringe pump HMI — TFT35 + Modbus RTU  ",
    "category": "Embedded / PIC",
    "filterGroup": "embedded",
    "color": "#b71c1c",
    "tags": [
      "PIC24",
      "C",
      "XC16",
      "Modbus RTU",
      "TFT35",
      "Touchscreen",
      "Flash"
    ],
    "path": "`D:\\WORK_PROJECTS\\hmitouchscreenold`",
    "platform": "Embedded C / PIC24FJ64GB002 / MPLAB XC16",
    "paired": null,
    "github": "",
    "description": "Standalone HMI для управління промисловим шприцевим насосом серії ASI 500 через TFT35 сенсорний дисплей по Modbus RTU.",
    "features": [
      "TFT35 SPI дисплей (TFT35_SPI.c) — ініціалізація, backlight, текст/примітиви",
      "Touchscreen калібрація (touchscreen.c) — persistent у internal flash",
      "TFTUI (TFTUI.h) — TextBox, SelectFont, SetBackground/Foreground, center-aligned",
      "Modbus master (SerialModbus.c) — FC 0x03/0x10, CRC16, timeout 300 мс",
      "Poll/update state machine — differential update тільки при змінах регістрів",
      "WSoD mitigation — TFT35_Enable() кожні 3 с",
      "UI BreakHook — callback під час перерисовки для Modbus polling без блокування"
    ],
    "stack": [
      [
        "---",
        "---"
      ],
      [
        "MCU",
        "PIC24FJ64GB002"
      ],
      [
        "Мова",
        "C (XC16 compiler)"
      ],
      [
        "Display",
        "TFT35 SPI"
      ],
      [
        "Touch",
        "Resistive touchscreen + calibration"
      ],
      [
        "Protocol",
        "Modbus RTU (Serial)"
      ],
      [
        "Persistence",
        "Internal PIC Flash"
      ],
      [
        "Build",
        "MPLAB / Makefile / nbproject"
      ]
    ],
    "media": {
      "foto": [],
      "video": []
    }
  },
  {
    "id": "html-editor",
    "slug": "15-html-editor",
    "number": "15",
    "title": "Drag & Drop HTML Editor",
    "subtitle": "WYSIWYG HTML editor for TFT display design  ",
    "category": "Desktop / Qt",
    "filterGroup": "desktop",
    "color": "#1565c0",
    "tags": [
      "C++17",
      "Qt5",
      "QUndoStack",
      "CMake",
      "Drag & Drop",
      "WYSIWYG"
    ],
    "path": "`D:\\WORK_PROJECTS\\drag_drop_html_editor`",
    "platform": "C++ + Qt5 Widgets / Windows (CMake)",
    "paired": null,
    "github": "",
    "description": "WYSIWYG редактор HTML для TFT дисплеїв: drag-and-drop елементів на канвасі з синхронним редагуванням HTML-коду.",
    "features": [
      "Dual-view editing — canvas (drag/resize) ↔ code (HTML); двостороння синхронізація",
      "Drag-and-drop palette — текст, кнопка, зображення, лінія → канвас з (x, y)",
      "Element management — select/move/resize/copy/paste/duplicate/delete",
      "Property panel — position, size, text, color, font обраного елемента",
      "Undo/Redo (QUndoStack, DocumentStateCommand) — Command pattern",
      "Grid — конфігурована сітка; snap-to-grid при переміщенні",
      "Font management — кастомні шрифти, Font Editor, system fonts menu",
      "HTML parser (model/htmlparser.h) — parsing у внутрішню document model"
    ],
    "stack": [
      [
        "---",
        "---"
      ],
      [
        "Мова",
        "C++17"
      ],
      [
        "UI",
        "Qt5 (Widgets, QMainWindow)"
      ],
      [
        "Patterns",
        "Command (QUndoStack), MVC"
      ],
      [
        "Build",
        "CMake, windeployqt"
      ],
      [
        "Installer",
        "PowerShell build_installer.ps1"
      ]
    ],
    "media": {
      "foto": [],
      "video": []
    }
  },
  {
    "id": "hmiapp",
    "slug": "16-hmiapp",
    "number": "16",
    "title": "HMIApp — Industrial HMI",
    "subtitle": "Cable stripping machine Qt6 touchscreen HMI  ",
    "category": "Desktop / Qt / Industrial",
    "filterGroup": "desktop",
    "color": "#1565c0",
    "tags": [
      "C++17",
      "Qt6",
      "QML",
      "Modbus RTU",
      "SQLite",
      "Kiosk",
      "Inno Setup"
    ],
    "path": "`D:\\WORK_PROJECTS\\UI-App`",
    "platform": "C++ + Qt6 + QML / Windows embedded",
    "paired": null,
    "github": "",
    "description": "Повнофункціональний industrial HMI для кабелезачисного верстату. Touchscreen UI на Qt Quick/QML з Modbus зв'язком, управлінням рецептами та діагностикою.",
    "features": [
      "DeviceDataManager — 50+ Q_PROPERTY: machineState, pressure, barometer, LED strips, service counters",
      "Modbus async queue (QModbusClient) з priority queue та статистикою успішності",
      "Barcode scanner — serial port або HID keyboard emulation через eventFilter",
      "Recipe engine (RecipeManager, ProductionDatabase) — CRUD у SQLite",
      "Multi-axis config A1–A4 — corrections, offsets, PID enable",
      "Blade replacement wizard — guided покроковий процес",
      "USB detection (UsbManager) — WMI COM-об'єкт для arrival/removal",
      "Kiosk mode — Windows Registry Shell key; Qt Virtual Keyboard",
      "Release pipeline — Inno Setup + rcedit + signtool + PFX; i18n Qt Linguist"
    ],
    "stack": [
      [
        "---",
        "---"
      ],
      [
        "Мова",
        "C++17"
      ],
      [
        "UI",
        "Qt6 Quick/QML, Qt Virtual Keyboard"
      ],
      [
        "Database",
        "Qt SQL (SQLite)"
      ],
      [
        "Communication",
        "QModbusClient (SerialBus), QSerialPort"
      ],
      [
        "Build",
        "CMake 3.16+, Ninja, VS2022"
      ],
      [
        "Deployment",
        "windeployqt, Inno Setup, rcedit, signtool"
      ],
      [
        "Target",
        "Windows 10 embedded (kiosk mode)"
      ]
    ],
    "media": {
      "foto": [],
      "video": []
    }
  },
  {
    "id": "modbus-emulator",
    "slug": "17-modbus-emulator",
    "number": "17",
    "title": "ModbusEmulator",
    "subtitle": "Modbus RTU/TCP slave emulator for testing  ",
    "category": "Desktop / Qt / Industrial",
    "filterGroup": "desktop",
    "color": "#1565c0",
    "tags": [
      "C++17",
      "Qt6",
      "QML",
      "QModbusServer",
      "Testing tool"
    ],
    "path": "`D:\\WORK_PROJECTS\\ModbusEmulator`",
    "platform": "C++ + Qt6 + QML / Windows",
    "paired": null,
    "github": "",
    "description": "Desktop для емуляції Modbus RTU/TCP slave пристрою — тестування master-застосунків (HMIApp, HPLC Pump) без реального обладнання.",
    "features": [
      "QModbusServer — FC 0x03/0x10, генерація відповідей",
      "ModbusDataStore — register bank: bulk init, per-address R/W, notifications",
      "QML UI — конфігурація порту/slave-ID, real-time таблиця регістрів, Start/Stop",
      "LogHandler — структурований лог запитів/відповідей із timestamp",
      "CMakePresets — debug/release profiles"
    ],
    "stack": [
      [
        "---",
        "---"
      ],
      [
        "Мова",
        "C++17"
      ],
      [
        "UI",
        "Qt6 Quick/QML"
      ],
      [
        "Protocol",
        "Qt Modbus (QModbusServer, SerialBus)"
      ],
      [
        "Build",
        "CMake 3.16+, Ninja"
      ]
    ],
    "media": {
      "foto": [],
      "video": []
    }
  },
  {
    "id": "hplc-pump",
    "slug": "18-hplc-pump",
    "number": "18",
    "title": "HPLC Syringe Pump",
    "subtitle": "HPLC pump desktop control via Modbus RTU  ",
    "category": "Desktop / Qt / Industrial",
    "filterGroup": "desktop",
    "color": "#1565c0",
    "tags": [
      "C++17",
      "Qt6",
      "QML",
      "Modbus RTU",
      "Qt Test",
      "Charts"
    ],
    "path": "`D:\\WORK_PROJECTS\\hplcpump`",
    "platform": "C++ + Qt6 + QML / Windows",
    "paired": null,
    "github": "",
    "description": "Desktop управління HPLC шприцевим насосом через Modbus RTU: параметри потоку, автоматизовані методи, моніторинг тиску та витрати.",
    "features": [
      "PumpManager — 30+ Q_PROPERTY: flowRate, syringeA/BVolume, pressures, sequencerStep, faultCode",
      "Modbus async priority queue — readHolding/readInput/writeSingle/writeMultipleAsync; статистика",
      "Auto-reconnect з налаштовуваним інтервалом",
      "Flow Method Manager — sequence steps: flowRate, composition, duration, volume",
      "Flowmeter calibration (FlowMeterCalibrationManager) — guided процедура",
      "Setpoints R/W — flowRateSetpoint, pmin/pmax, fillFlowRate, flushFlowRate",
      "8 клапанів (valve1–8), 2 реле; homed/filling pump A/B",
      "Real-time charting (HPLCChart.qml) — тиск/витрата",
      "Qt Test + CTest unit tests"
    ],
    "stack": [
      [
        "---",
        "---"
      ],
      [
        "Мова",
        "C++17"
      ],
      [
        "UI",
        "Qt6 Quick/QML"
      ],
      [
        "Communication",
        "QModbusClient (SerialBus RTU)"
      ],
      [
        "Testing",
        "Qt Test + CTest"
      ],
      [
        "Build",
        "CMake 3.16+, Ninja"
      ],
      [
        "Deployment",
        "windeployqt, Inno Setup, signtool"
      ]
    ],
    "media": {
      "foto": [],
      "video": []
    }
  },
  {
    "id": "scanscore",
    "slug": "19-scanscore",
    "number": "19",
    "title": "ScanScore (OMR)",
    "subtitle": "Optical Music Recognition from scanned sheets  ",
    "category": "Desktop / CV / ML",
    "filterGroup": "desktop",
    "color": "#6a1b9a",
    "tags": [
      "C++11",
      "Qt5",
      "OpenCV",
      "Tesseract",
      "Armadillo",
      "MusicXML",
      "vcpkg"
    ],
    "path": "`D:\\WORK_PROJECTS\\scanscore_for_vol`",
    "platform": "C++ + Qt5 + OpenCV + Tesseract / Windows + macOS",
    "paired": null,
    "github": "",
    "description": "Кросплатформний застосунок для оптичного розпізнавання музичних нот (OMR — Optical Music Recognition) зі сканованих нотних сторінок.",
    "features": [
      "OCR (Tesseract + Leptonica) — розпізнавання символів нотного письма",
      "Image preprocessing (OpenCV) — grayscale, threshold, morphological, staff line detection/removal",
      "ML classification (Armadillo + OpenBLAS) — noteheads, stems, flags, rests, clefs",
      "Qt5 GUI — scan view, results panel",
      "MIDI/notation output — MusicXML або MIDI",
      "Cross-platform — vcpkg; Windows (x64) + macOS; AddressSanitizer у debug"
    ],
    "stack": [
      [
        "---",
        "---"
      ],
      [
        "Мова",
        "C++11"
      ],
      [
        "UI",
        "Qt5 (Widgets, Multimedia, Pdf)"
      ],
      [
        "OCR",
        "Tesseract + Leptonica"
      ],
      [
        "Image",
        "OpenCV (imgproc, core)"
      ],
      [
        "Math/ML",
        "Armadillo + OpenBLAS"
      ],
      [
        "Packages",
        "vcpkg"
      ],
      [
        "Build",
        "CMake, Windows + macOS"
      ]
    ],
    "media": {
      "foto": [],
      "video": []
    }
  },
  {
    "id": "forte",
    "slug": "20-forte",
    "number": "20",
    "title": "Forte / Genesis Notation",
    "subtitle": "Full-featured music notation editor (Finale-class)  ",
    "category": "Desktop / Audio",
    "filterGroup": "audio",
    "color": "#880e4f",
    "tags": [
      "C++",
      "MFC",
      "MIDI",
      "WinMM",
      "VST 2.x",
      "SoundTouch",
      "CD Burn"
    ],
    "path": "`D:\\WORK_PROJECTS\\forte_new`",
    "platform": "C++ + MFC / Windows (MSVC, v140 toolset)",
    "paired": null,
    "github": "",
    "description": "Повнофункціональний music notation editor (аналог Finale/Sibelius) з MIDI, audio recording, VST та CD burning.",
    "features": [
      "Score editor — WYSIWYG: measures, staves, clef, time/key signatures",
      "MIDI playback/recording (Sequencer32, piano roll)",
      "Audio capture (AudioCapture2MP3/WaveDlg) — WAV та MP3 через Lame/GoGo",
      "Audio CD burn (MCAudioBurnCtrl/Drive)",
      "VST Host (VSTHost/) — VST 2.x плагіни",
      "SoundTouch — time-stretch та pitch-shift",
      "Multi-language (LanguageManager) — .idm файли, без перезапуску",
      "Undo history (CUNDOHISTORY), online updater (CUpdater)"
    ],
    "stack": [
      [
        "---",
        "---"
      ],
      [
        "Мова",
        "C++ (MSVC)"
      ],
      [
        "UI",
        "MFC (Dynamic), Win32"
      ],
      [
        "MIDI",
        "WinMM, DirectMusic"
      ],
      [
        "Audio",
        "DirectShow, WASAPI, Lame, GoGo"
      ],
      [
        "VST",
        "VST 2.x host"
      ],
      [
        "DSP",
        "SoundTouch"
      ],
      [
        "Build",
        "VS (v140 toolset), Genesis.sln"
      ]
    ],
    "media": {
      "foto": [],
      "video": []
    }
  },
  {
    "id": "onyx",
    "slug": "21-onyx",
    "number": "21",
    "title": "Onyx",
    "subtitle": "Plugin-based multimedia desktop application  ",
    "category": "Desktop / Win32",
    "filterGroup": "desktop",
    "color": "#1565c0",
    "tags": [
      "C/C++",
      "Win32",
      "MFC",
      "DLL plugins",
      "Legacy"
    ],
    "path": "`D:\\WORK_PROJECTS\\onyx`",
    "platform": "C/C++ / Windows (MSVC legacy)",
    "paired": null,
    "github": "",
    "description": "Legacy desktop-застосунок із plugin-архітектурою. Multimedia або productivity tool з розширюваною системою DLL-плагінів.",
    "features": [
      "Plugin architecture (Plugins/) — DLL-плагіни, динамічне завантаження",
      "Application modules (Apps/) — підзастосунки у рамках одного процесу",
      "Core library (src/) — shared логіка між Apps та Plugins",
      "Legacy VS2005 solution"
    ],
    "stack": [
      [
        "---",
        "---"
      ],
      [
        "Мова",
        "C/C++"
      ],
      [
        "UI",
        "Win32 / MFC"
      ],
      [
        "Architecture",
        "Plugin-based (DLL)"
      ],
      [
        "Build",
        "Visual Studio legacy (.sln)"
      ]
    ],
    "media": {
      "foto": [],
      "video": []
    }
  },
  {
    "id": "ai-memory",
    "slug": "22-ai-memory",
    "number": "22",
    "title": "AI Memory System",
    "subtitle": "Semantic memory CLI for AI-assisted development  ",
    "category": "Python / CLI",
    "filterGroup": "tools",
    "color": "#00695c",
    "tags": [
      "Python",
      "argparse",
      "JSON",
      "sentence-transformers",
      "watchdog",
      "pytest"
    ],
    "path": "`D:\\ai_memory_system`",
    "platform": "Python 3",
    "paired": null,
    "github": "",
    "description": "CLI-утиліта для ведення семантичної пам'яті AI-асистента: збереження технічних рішень, помилок, залежностей між сесіями.",
    "features": [
      "MemoryEngine (core/engine.py) — add_memory(payload), session_summary()",
      "Structured records — type, description, cause, fix, files[], decisions[], tags[], depends_on[]",
      "Project-scoped storage — data/projects/{slug}/",
      "Tag system — довільні теги + авто project:{slug}; фільтрація при пошуку",
      "Semantic search (опціонально, sentence-transformers) — векторний пошук",
      "File watcher (опціонально, watchdog) — автовідстеження змін",
      "JSON CLI output — всі операції повертають JSON",
      "pytest test suite"
    ],
    "stack": [
      [
        "---",
        "---"
      ],
      [
        "Мова",
        "Python 3"
      ],
      [
        "CLI",
        "argparse"
      ],
      [
        "Storage",
        "JSON files (flat-file DB)"
      ],
      [
        "Search",
        "sentence-transformers (optional)"
      ],
      [
        "Watcher",
        "watchdog (optional)"
      ],
      [
        "Testing",
        "pytest"
      ]
    ],
    "media": {
      "foto": [],
      "video": []
    }
  }
];

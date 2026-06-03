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
    "path": "",
    "platform": "C++ / Win32 API / Windows",
    "paired": null,
    "github": "https://github.com/dgimbialo/KeyBeep",
    "description": "Lightweight Windows tray app for audio feedback on language switching or any custom hotkey. Solves the problem of missing feedback on missed key presses.",
    "features": [
      "Global keyboard hook (WH_KEYBOARD_LL) — intercept hotkey system-wide regardless of active window",
      "MIDI audio via WinMM — persistent HMIDIOUT handle, bypasses WASAPI latency",
      "7 sound types — 4 MIDI tones (Low/Mid/High/Double Beep) + 3 Windows system sounds",
      "System tray (Shell_NotifyIcon) — minimalist UI; configure via double-click",
      "Конфігурація у реєстрі HKCU\\Software\\KeyBeep — VK-код, modifiers, тип звуку; зберігаються після перезавантаження",
      "Self-installer — setup.exe витягує KeyBeep.exe до %LOCALAPPDATA%\\KeyBeep\\ і додає в autostart",
      "Thread safety — hook posts WM_USER+10 and returns; playback in worker thread"
    ],
    "stack": [
      [
        "---",
        "---"
      ],
      [
        "Language",
        "C++ (MSVC)"
      ],
      [
        "GUI",
        "Win32 API, SystemTray, Keyboard hooks"
      ],
      [
        "Audio",
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
        "Size",
        "~80 KB, zero dependencies"
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
    "description": "Corporate website for EPC solar contractor serving markets in Germany / Poland / Austria / Belgium / Netherlands.",
    "features": [
      "Multilingual localization (i18n) — 4 languages: DE/PL/UK/EN; switch without reload",
      "SEO optimization — hreflang, OpenGraph, Twitter Card, JSON-LD Organization + ProfessionalService, GA4",
      "Responsive design — responsive CSS for mobile and desktop",
      "Deployed on Cloudflare Pages via Wrangler CLI — zero-config edge hosting",
      "Image processing pipeline — Sharp for optimizing project photos (7.4 MW+)",
      "Sitemap / robots.txt for proper indexing"
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
        "Custom system via locales/ JSON"
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
    "path": "",
    "platform": "C++17 + MFC + NI-488.2 / Win64",
    "paired": null,
    "github": "",
    "description": "Windows application for controlling Tektronix TDS 520A oscilloscope via GPIB (IEEE-488). Provides GDI waveform viewer and embedded web interface for mobile viewing.",
    "features": [
      "GPIB auto-scan — scan addresses 1–30 on board 0, identify via *IDN?",
      "SCPI protocol — WFMPRE?, CURVE?, ACQuire? for preamble and binary waveform data",
      "Waveform decoder — convert raw ADC to V/s using YMULT/YOFF/YZERO/XINCR",
      "GDI double-buffered renderer — zoom/pan, autoscale, cursor overlay, ~10 FPS",
      "Lock-free ring buffer (SPSC) — thread-safe transfer between acquisition thread and GUI",
      "Embedded HTTP + WebSocket server (RFC 6455) with self-contained SHA-1 and Base64",
      "HtmlGenerator — автогенерує single-page frontend; waveform по WebSocket на мобільний"
    ],
    "stack": [
      [
        "---",
        "---"
      ],
      [
        "Language",
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
        "Protocol",
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
    "path": "",
    "platform": "C++17 + MFC + CMake / Windows",
    "paired": null,
    "github": "",
    "description": "Desktop Windows application for opening, parsing, and visualizing MIDI files as musical notation.",
    "features": [
      "MIDI parser — SMF: header/track chunks, VLQ decoding, note on/off, meta, SysEx",
      "Score rendering — display notes in standard staves with zoom capability",
      "MFC MDI GUI — MainFrame, ScoreView, Open/Save/Export menus",
      "CMake build with precompiled headers"
    ],
    "stack": [
      [
        "---",
        "---"
      ],
      [
        "Language",
        "C++17"
      ],
      [
        "UI",
        "MFC (MDI)"
      ],
      [
        "MIDI",
        "Custom SMF parser"
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
    "path": "",
    "platform": "Python + Flask + MySQL",
    "paired": "CrossZeroDetector (#11)",
    "github": "",
    "description": "Web server for monitoring and logging grid frequency data at 50 Hz. Receives data from CrossZeroDetector (ESP32) and provides admin interface.",
    "features": [
      "REST API /frequency_data — returns JSON with current frequency value",
      "Jinja2 web form /entry for parameter input",
      "Admin page /admin — protected with @check_logged_in",
      "Log view /viewlog — MySQL table: phrase, letters, ip, browser, result",
      "MySQL via UseDatabase context manager (DBcm.py) — exception-safe",
      "Auth middleware checker.py — Flask session",
      "Custom exceptions — ConnectionError, CredentialsError, SQLError"
    ],
    "stack": [
      [
        "---",
        "---"
      ],
      [
        "Language",
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
    "path": "",
    "platform": "Arduino C/C++ / Arduino Mega 2560",
    "paired": null,
    "github": "",
    "description": "Pump controller firmware for automatic and manual liquid supply with 3-sensor level detection system.",
    "features": [
      "3-sensor system — LOW/MIDDLE/HIGH levels; pump relay control",
      "Automatic mode — control based on liquid level",
      "Manual mode — override via buttons with LCD indication",
      "Error state detection — emergency situations (sensor missing/fault)",
      "LCD UI (LiquidCrystal 16×2) — mode, level, error states",
      "Centralized custom_pins.h for GPIO mapping"
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
    "path": "",
    "platform": "Arduino C/C++ / ATmega",
    "paired": null,
    "github": "",
    "description": "Firmware for autonomous solar collector system controller: manages fan/pump based on temperature difference between collector and room.",
    "features": [
      "Dual-sensor system DS18B20 (OneWire) — HomeThermometer + CollectorThermometer; verify 2 devices at startup",
      "3 modes — OFF / COOL / HEAT based on temperature difference + manual mode",
      "EEPROM persistence — nSetTemp and nManualMode restored after power cycle",
      "Interrupt-driven buttons — attachInterrupt pin 2; debounce 100 ms; Temp Down / Mode / Temp Up",
      "LCD UI (LiquidCrystal 16×2) — both temperatures, mode, setpoint"
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
    "path": "",
    "platform": "EAGLE ULP / Autodesk EAGLE",
    "paired": null,
    "github": "",
    "description": "Script analyzer for EAGLE Schematic Editor: analyzes which Source component pins are connected to Target and which are free (N/C).",
    "features": [
      "Auto-collect components — schematic(SCH) { SCH.parts(P) } — name + value list",
      "Netlist analysis — for each Source pin find net connections with Target",
      "Filtering and sorting — All/Connected/Free N/C; 7 sort criteria",
      "HTML rendering in EAGLE viewer with color coding (green/gray)",
      "Multi-format export — CSV, TXT, HTML",
      "Statistics line — counter of connected/free pins"
    ],
    "stack": [
      [
        "---",
        "---"
      ],
      [
        "Language",
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
    "path": "",
    "platform": "C++ + MFC / Windows (MSVC, x64)",
    "paired": "STM32H7 Firmware (#10)",
    "github": "",
    "description": "Windows desktop for real-time signal acquisition and analysis from STM32H7 ADC device via USB CDC. Modes: FFT-on-device and PC-side FFT (RAW samples + local processing).",
    "features": [
      "SerialWorker — background thread: Win32 COM API, ReadFile loop, CRC binary protocol",
      "ChirpStore — CRITICAL_SECTION ring buffer 200 chirp frames: Push/GetLatest/GetAt",
      "LocalFft — Radix-2 Cooley-Tukey FFT up to 16384 points; Rectangular/Hann/Hamming/Blackman windows",
      "WaveformView — GDI zoom/pan (X+/X−/Y+/Y− + mousewheel + scrollbars)",
      "SpectrumView — linear/logarithmic frequency response with cursor overlay",
      "WaterfallView — spectrogram in pseudocolor",
      "CommandPanel — COM combo, Start/Stop, Set Freq/Samples, Ping, Mode, Trigger, PC/Device mode"
    ],
    "stack": [
      [
        "---",
        "---"
      ],
      [
        "Language",
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
    "path": "",
    "platform": "C + ASM / STM32H743 / arm-none-eabi",
    "paired": "FastAcqWinApp (#9)",
    "github": "",
    "description": "High-speed ADC firmware on STM32H743 (Cortex-M7, 480 MHz). Captures analog signal via parallel DCMI ADC, performs chirp-excitation and FFT on MCU.",
    "features": [
      "DCMI ADC capture (dcmi_adc.c) — parallel 8/16-bit bus; DMA → external SDRAM",
      "External SDRAM (sdram_init.c) — FMC controller for large sample arrays",
      "Chirp DAC (chirp_dac.c) — generate excitation chirp signal via DAC",
      "On-device FFT (chirp_fft.c) — spectrum on MCU; compress before USB transmission",
      "Phase analysis (phase_a.c, phase_b.c) — dual-channel phase analysis",
      "USB CDC binary protocol (usb_protocol.h) — respond to FastAcqWinApp commands"
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
        "Language",
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
    "path": "",
    "platform": "Arduino C++ / ESP32 (Heltec WiFi LoRa 32 V2)",
    "paired": "webHz (#5)",
    "github": "",
    "description": "Embedded device for precise 50 Hz grid frequency measurement via zero-crossing counting. Sends measurements to Google Sheets, displays on OLED.",
    "features": [
      "Interrupt-based (IRAM_ATTR handleInterrupt) — 50 edges = 1 cycle; frequency = 50.0 * 1e6 / duration",
      "SSD1306 OLED — real-time frequency to 4 decimal places",
      "NTP synchronization (NTPClient + WiFiUDP) — UNIX timestamp for each measurement",
      "Filter 45–55 Hz; accumulate over 10-second window",
      "Google Sheets POST JSON (ArduinoJson) to Apps Script every 10 seconds",
      "Heltec V2 specific — Vext/RST control OLED power"
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
    "path": "",
    "platform": "Python 3 / CLI",
    "paired": null,
    "github": "",
    "description": "CLI tool for automatic git diff snapshot saving in .diff files. Runs regularly and stores only new changes, avoiding SHA-256 duplicates.",
    "features": [
      "GitPython — repo.is_dirty(), repo.git.diff(None, name_only=True)",
      "SHA-256 deduplication — sha256(diff_content); duplicates not stored",
      "Hash store persistence — plain-text hash file; load/update",
      "Timestamped output dirs — changes_YYYYMMDD_HHMMSS/",
      "Multi-file — each dirty file → separate .diff in batch directory",
      "argparse CLI — repo path, output path, hash store; polling/daemon mode"
    ],
    "stack": [
      [
        "---",
        "---"
      ],
      [
        "Language",
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
    "path": "",
    "platform": "C++ + MFC / Win32 + C# installer",
    "paired": null,
    "github": "",
    "description": "Full-featured MIDI sequencer and music composition application (JAMMER Professional) with notation, VST plugins, and audio recording.",
    "features": [
      "MIDI engine — I/O, real-time playback, SysEx, channel mode messages",
      "32-track Sequencer (Sequencer32) — piano roll + score editor",
      "Audio capture — WAV and MP3 via DirectShow/WASAPI + Lame/GoGo encoder",
      "Score notation editor (ScoreEdit) — WYSIWYG: measures, staves, clef, time/key signatures",
      "VST Host (VSTHost/) — load and run VST 2.x plugins",
      "SoundTouch — real-time time-stretching and pitch-shifting",
      "Multi-language UI (LanguageManager, .idm) — dynamic language switch without restart",
      "C# installer custom actions (InstallStep/UninstallStep) via Inno Setup"
    ],
    "stack": [
      [
        "---",
        "---"
      ],
      [
        "Language",
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
    "path": "",
    "platform": "Embedded C / PIC24FJ64GB002 / MPLAB XC16",
    "paired": null,
    "github": "",
    "description": "Standalone HMI for controlling ASI 500 industrial syringe pump via TFT35 touchscreen display over Modbus RTU.",
    "features": [
      "TFT35 SPI display (TFT35_SPI.c) — initialization, backlight, text/primitives",
      "Touchscreen calibration (touchscreen.c) — persistent in internal flash",
      "TFTUI (TFTUI.h) — TextBox, SelectFont, SetBackground/Foreground, center-aligned",
      "Modbus master (SerialModbus.c) — FC 0x03/0x10, CRC16, timeout 300 ms",
      "Poll/update state machine — differential update only on register changes",
      "WSoD mitigation — TFT35_Enable() every 3 seconds",
      "UI BreakHook — callback during repaint for non-blocking Modbus polling"
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
        "Language",
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
    "path": "",
    "platform": "C++ + Qt5 Widgets / Windows (CMake)",
    "paired": null,
    "github": "",
    "description": "WYSIWYG HTML editor for TFT displays: drag-and-drop elements on canvas with synchronized HTML editing.",
    "features": [
      "Dual-view editing — canvas (drag/resize) ↔ code (HTML); bidirectional sync",
      "Drag-and-drop palette — text, button, image, line → canvas with (x, y)",
      "Element management — select/move/resize/copy/paste/duplicate/delete",
      "Property panel — position, size, text, color, font of selected element",
      "Undo/Redo (QUndoStack, DocumentStateCommand) — Command pattern",
      "Grid — configurable grid; snap-to-grid on move",
      "Font management — custom fonts, Font Editor, system fonts menu",
      "HTML parser (model/htmlparser.h) — parse into internal document model"
    ],
    "stack": [
      [
        "---",
        "---"
      ],
      [
        "Language",
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
    "path": "",
    "platform": "C++ + Qt6 + QML / Windows embedded",
    "paired": null,
    "github": "",
    "description": "Full-featured industrial HMI for cable stripping machine. Qt Quick/QML touchscreen UI with Modbus communication, recipe management, and diagnostics.",
    "features": [
      "DeviceDataManager — 50+ Q_PROPERTY: machineState, pressure, barometer, LED strips, service counters",
      "Modbus async queue (QModbusClient) with priority queue and success statistics",
      "Barcode scanner — serial port or HID keyboard emulation via eventFilter",
      "Recipe engine (RecipeManager, ProductionDatabase) — CRUD in SQLite",
      "Multi-axis config A1–A4 — corrections, offsets, PID enable",
      "Blade replacement wizard — guided step-by-step process",
      "USB detection (UsbManager) — WMI COM object for arrival/removal",
      "Kiosk mode — Windows Registry Shell key; Qt Virtual Keyboard",
      "Release pipeline — Inno Setup + rcedit + signtool + PFX; i18n Qt Linguist"
    ],
    "stack": [
      [
        "---",
        "---"
      ],
      [
        "Language",
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
    "path": "",
    "platform": "C++ + Qt6 + QML / Windows",
    "paired": null,
    "github": "",
    "description": "Desktop for emulating Modbus RTU/TCP slave device — test master applications (HMIApp, HPLC Pump) without real hardware.",
    "features": [
      "QModbusServer — FC 0x03/0x10, generate responses",
      "ModbusDataStore — register bank: bulk init, per-address R/W, notifications",
      "QML UI — port/slave-ID configuration, real-time register table, Start/Stop",
      "LogHandler — structured request/response log with timestamp",
      "CMakePresets — debug/release profiles"
    ],
    "stack": [
      [
        "---",
        "---"
      ],
      [
        "Language",
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
    "path": "",
    "platform": "C++ + Qt6 + QML / Windows",
    "paired": null,
    "github": "",
    "description": "HPLC syringe pump control via Modbus RTU: flow parameters, automated methods, pressure and flow monitoring.",
    "features": [
      "PumpManager — 30+ Q_PROPERTY: flowRate, syringeA/BVolume, pressures, sequencerStep, faultCode",
      "Modbus async priority queue — readHolding/readInput/writeSingle/writeMultipleAsync; statistics",
      "Auto-reconnect with configurable interval",
      "Flow Method Manager — sequence steps: flowRate, composition, duration, volume",
      "Flowmeter calibration (FlowMeterCalibrationManager) — guided procedure",
      "Setpoints R/W — flowRateSetpoint, pmin/pmax, fillFlowRate, flushFlowRate",
      "8 valves (valve1–8), 2 relays; homed/filling pump A/B",
      "Real-time charting (HPLCChart.qml) — pressure/flow",
      "Qt Test + CTest unit tests"
    ],
    "stack": [
      [
        "---",
        "---"
      ],
      [
        "Language",
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
    "path": "",
    "platform": "C++ + Qt5 + OpenCV + Tesseract / Windows + macOS",
    "paired": null,
    "github": "",
    "description": "Cross-platform application for optical music recognition (OMR) from scanned sheet music pages.",
    "features": [
      "OCR (Tesseract + Leptonica) — recognize music notation symbols",
      "Image preprocessing (OpenCV) — grayscale, threshold, morphological, staff line detection/removal",
      "ML classification (Armadillo + OpenBLAS) — noteheads, stems, flags, rests, clefs",
      "Qt5 GUI — scan view, results panel",
      "MIDI/notation output — MusicXML or MIDI",
      "Cross-platform — vcpkg; Windows (x64) + macOS; AddressSanitizer in debug"
    ],
    "stack": [
      [
        "---",
        "---"
      ],
      [
        "Language",
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
    "path": "",
    "platform": "C++ + MFC / Windows (MSVC, v140 toolset)",
    "paired": null,
    "github": "",
    "description": "Full-featured music notation editor (Finale/Sibelius-class) with MIDI, audio recording, VST, and CD burning.",
    "features": [
      "Score editor — WYSIWYG: measures, staves, clef, time/key signatures",
      "MIDI playback/recording (Sequencer32, piano roll)",
      "Audio capture (AudioCapture2MP3/WaveDlg) — WAV and MP3 via Lame/GoGo",
      "Audio CD burn (MCAudioBurnCtrl/Drive)",
      "VST Host (VSTHost/) — VST 2.x plugins",
      "SoundTouch — time-stretch and pitch-shift",
      "Multi-language (LanguageManager) — .idm files, no restart",
      "Undo history (CUNDOHISTORY), online updater (CUpdater)"
    ],
    "stack": [
      [
        "---",
        "---"
      ],
      [
        "Language",
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
    "path": "",
    "platform": "C/C++ / Windows (MSVC legacy)",
    "paired": null,
    "github": "",
    "description": "Legacy desktop application with plugin architecture. Multimedia or productivity tool with extensible DLL plugin system.",
    "features": [
      "Plugin architecture (Plugins/) — DLL plugins, dynamic loading",
      "Application modules (Apps/) — sub-applications within single process",
      "Core library (src/) — shared logic between Apps and Plugins",
      "Legacy VS2005 solution"
    ],
    "stack": [
      [
        "---",
        "---"
      ],
      [
        "Language",
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
    "path": "",
    "platform": "Python 3",
    "paired": null,
    "github": "",
    "description": "CLI utility for maintaining semantic memory of AI assistant: store technical decisions, errors, dependencies across sessions.",
    "features": [
      "MemoryEngine (core/engine.py) — add_memory(payload), session_summary()",
      "Structured records — type, description, cause, fix, files[], decisions[], tags[], depends_on[]",
      "Project-scoped storage — data/projects/{slug}/",
      "Tag system — arbitrary tags + auto project:{slug}; filter on search",
      "Semantic search (optional, sentence-transformers) — vector search",
      "File watcher (optional, watchdog) — auto-track changes",
      "JSON CLI output — all operations return JSON",
      "pytest test suite"
    ],
    "stack": [
      [
        "---",
        "---"
      ],
      [
        "Language",
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

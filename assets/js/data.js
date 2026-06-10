const PROFILE = {
  "name": "Taras Pavlyk",
  "initials": "TP",
  "title": "Embedded & Desktop Software Engineer",
  "location": "Ukraine",
  "linkedin": "https://www.linkedin.com/in/taras-pavlyk-861b84123/",
  "github": "https://github.com/dgimbialo",
  "email": "",
  "summary": "Software engineer specialising in embedded systems, industrial automation, and desktop applications — building reliable products from the firmware up to the user interface.",
  "about": [
    "I build systems where hardware meets software. My main focus is embedded development and industrial automation — the real-time firmware and control logic that keeps physical devices running reliably, around the clock.",
    "On top of that low-level work, I design the desktop tools that operators and engineers actually use day to day: instrument control, signal acquisition and analysis, and professional HMI panels for industrial equipment.",
    "I've also shipped commercial desktop software beyond the industrial world, including music notation and arrangement applications. Across every project my goal stays the same — turn complex hardware into something dependable and genuinely easy to work with."
  ],
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
    "subtitle": "Windows hotkey audio feedback tray app",
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
    "description": "Lightweight Windows tray program for audio confirmation of language switching or any hotkey. Solves the problem of no feedback when a key is pressed.",
    "features": [
      "Global keyboard hook (WH_KEYBOARD_LL) — hotkey interception throughout the system regardless of the active window",
      "MIDI audio via WinMM — always open HMIDIOUT handle, bypasses WASAPI delay",
      "4 types of sounds — 4 MIDI tones (Low/Mid/High/Double Beep)",
      "System tray (Shell_NotifyIcon) — minimalistic UI; double-click settings",
      "Configuration in the HKCU\\Software\\KeyBeep registry — VK code, modifiers, sound type; persist after reboot",
      "Self-installer — setup.exe extracts KeyBeep.exe to %LOCALAPPDATA%\\KeyBeep\\ and adds it to autostart",
      "Thread safety — the hook posts WM_USER+10 and returns; playback in worker thread"
    ],
    "stack": [
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
        "180 KB, zero dependencies"
      ]
    ],
    "media": {
      "foto": [],
      "video": []
    },
    "notes": ""
  },
  {
    "id": "golden-cooperation",
    "slug": "02-golden-cooperation",
    "number": "02",
    "title": "Golden Cooperation",
    "subtitle": "Corporate website for solar EPC contractor",
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
    "description": "Corporate site of the EPC contractor for the construction of solar power plants (Photovoltaik) for the markets Germany / Poland / Austria / Belgium / Netherlands.",
    "features": [
      "Multilingual localization (i18n) — 4 languages: DE/PL/UK/EN; change without rebooting",
      "SEO optimization — hreflang, OpenGraph, Twitter Card, JSON-LD Organization + ProfessionalService, GA4",
      "Responsive design — responsive CSS for mobile and desktop",
      "Deployment on Cloudflare Pages via Wrangler CLI — zero-config edge hosting",
      "Image processing pipeline — Sharp for optimization of photo projects (7.4 MW+)",
      "Sitemap / robots.txt for correct indexing"
    ],
    "stack": [
      [
        "Frontend",
        "HTML5, CSS3, vanilla JS"
      ],
      [
        "i18n",
        "Own system via locales/ JSON"
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
    },
    "notes": ""
  },
  {
    "id": "tds520a",
    "slug": "03-tds520a",
    "number": "03",
    "title": "TDS 520A GPIB Desktop",
    "subtitle": "Oscilloscope control + mobile web viewer",
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
    "description": "Windows application for controlling the Tektronix TDS 520A oscilloscope via GPIB (IEEE-488). Provides a GDI waveform viewer and a built-in web interface for mobile viewing.",
    "features": [
      "GPIB auto-scan — scan of addresses 1–30 on board 0, identification by *IDN?",
      "SCPI protocol — WFMPRE?, CURVE?, ACQuire? for preamble and binary curve data",
      "Waveform decoder — conversion of raw ADC to V/s by YMULT/YOFF/YZERO/XINCR",
      "GDI double-buffered renderer — zoom/pan, autoscale, cursor overlay, ~10 FPS",
      "Lock-free ring buffer (SPSC) — thread-safe transfer between acquisition thread and GUI",
      "Embedded HTTP + WebSocket server (RFC 6455) with self-contained SHA-1 and Base64",
      "HtmlGenerator — autogenerates single-page frontend; waveform via WebSocket to mobile"
    ],
    "stack": [
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
      "foto": [
        "projects/03-tds520a/foto/Gpib_4.JPG",
        "projects/03-tds520a/foto/Gpib_5.JPG",
        "projects/03-tds520a/foto/Gpib_6.JPG",
        "projects/03-tds520a/foto/Gpib_7.JPG",
        "projects/03-tds520a/foto/Gpib_9.JPG",
        "projects/03-tds520a/foto/Gpib_1.png",
        "projects/03-tds520a/foto/Gpib_2.png",
        "projects/03-tds520a/foto/Gpib_3.png"
      ],
      "video": [
        "https://youtu.be/X9rVDsOkLpQ"
      ]
    },
    "notes": ""
  },
  {
    "id": "simplemidiviewer",
    "slug": "04-simplemidiviewer",
    "number": "04",
    "title": "SimpleMidiViewer",
    "subtitle": "MIDI file parser & score renderer",
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
    "description": "Desktop Windows application for opening, parsing and visualizing MIDI files in the form of music strings.",
    "features": [
      "MIDI parser — SMF: header/track chunks, VLQ decoding, note on/off, meta, SysEx",
      "Score rendering — display of notes in standard staves with scaling",
      "MFC MDI GUI — MainFrame, ScoreView, Open/Save/Export menu",
      "CMake build with precompiled headers"
    ],
    "stack": [
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
        "Own SMF parser"
      ],
      [
        "Build",
        "CMake + MSVC"
      ]
    ],
    "media": {
      "foto": [],
      "video": []
    },
    "notes": ""
  },
  {
    "id": "webhz",
    "slug": "05-webhz",
    "number": "05",
    "title": "Power Grid Frequency Monitor",
    "subtitle": "Real-time AC grid frequency dashboard — ESP32 → Supabase → GitHub Pages",
    "category": "Web / Static",
    "filterGroup": "web",
    "color": "#00796b",
    "tags": [
      "JavaScript",
      "Chart.js",
      "Supabase",
      "GitHub Pages",
      "PWA",
      "i18n"
    ],
    "path": "https://dgimbialo.github.io/webHz",
    "platform": "Vanilla JS + Chart.js 4.4.0 + Supabase REST API + GitHub Pages",
    "paired": "CrossZeroDetector (#11)",
    "github": "https://github.com/dgimbialo/webHz.github.io",
    "description": "Fully serverless real-time dashboard that visualises power grid frequency. An ESP32 measures zero-crossing frequency every second and writes directly to Supabase — the browser reads via REST API with a publishable anon key. No server, no backend code. Hosted for free on GitHub Pages as a pure static site.",
    "features": [
      "Real-time polling every 2 s via Supabase REST API (read-only anon key)",
      "Smart drip queue — live mode: 1 point/s animation; backlog: instant flush",
      "Null injection for gaps > 12 s — visible breaks instead of connecting lines",
      "Viewport anchoring — live data scrolls to now; historical anchors to last point",
      "Auto Y-scale always keeps 50.000 Hz nominal line in view",
      "Data Age indicator — X:YY min format; turns red when data is older than 2 min",
      "Range buttons 1 min – 48 h; user selection preserved (no auto-override)",
      "EN / UA full i18n — units, labels, range buttons, badges",
      "CSV export of all visible data points",
      "PWA-ready: site.webmanifest, theme-color, standalone display",
      "Security: CSP meta tag, X-Content-Type-Options, Referrer-Policy, security.txt"
    ],
    "stack": [
      [
        "Language",
        "Vanilla JS (ES2020), HTML5, CSS3"
      ],
      [
        "Charts",
        "Chart.js 4.4.0 + chartjs-adapter-date-fns + chartjs-plugin-zoom"
      ],
      [
        "Database",
        "Supabase (PostgreSQL + PostgREST + RLS)"
      ],
      [
        "Hosting",
        "GitHub Pages (static, CDN, HTTPS)"
      ],
      [
        "Fonts",
        "Orbitron + Inter (Google Fonts)"
      ],
      [
        "i18n",
        "Custom EN/UA translation module"
      ],
      [
        "PWA",
        "site.webmanifest + theme-color"
      ]
    ],
    "media": {
      "foto": [
        "projects/05-webhz/foto/Foto_1.png",
        "projects/05-webhz/foto/Foto_2.png",
        "projects/05-webhz/foto/Foto_3.JPG"
      ],
      "video": []
    },
    "notes": "Service-role key lives only in ESP32 firmware."
  },
  {
    "id": "pump-controller",
    "slug": "06-pump-controller",
    "number": "06",
    "title": "Pump Controller Arduino",
    "subtitle": "3-sensor liquid level controller",
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
      "3-sensor system — LOW/MIDDLE/HIGH level; pump relay control",
      "Automatic mode — control by liquid level",
      "Manual mode — override via buttons with LCD display",
      "Error state detection — emergency situations (absence/error of the sensor)",
      "LCD UI (LiquidCrystal 16×2) — mode, level, error status",
      "Centralized custom_pins.h for GPIO mapping"
    ],
    "stack": [
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
    },
    "notes": ""
  },
  {
    "id": "comus",
    "slug": "07-comus",
    "number": "07",
    "title": "COMUS Temp Controller",
    "subtitle": "Solar collector thermal management firmware",
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
    "description": "Standalone Controller Firmware for Solar Collector System: Controls the fan based on the temperature difference between the collector and the room.",
    "features": [
      "Two-sensor system DS18B20 (OneWire) — HomeThermometer + CollectorThermometer; check of 2 devices at start",
      "3 modes — OFF / COOL / HEAT based on temperature difference + manual mode",
      "EEPROM persistence — nSetTemp and nManualMode are restored after shutdown",
      "Interrupt-driven buttons —  debounce 100 ms; Temp Down / Mode / Temp Up",
      "LCD UI (LiquidCrystal 16×2) — both temperatures, mode, set temperature"
    ],
    "stack": [
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
    },
    "notes": ""
  },
  {
    "id": "eagle-ulp",
    "slug": "08-eagle-ulp",
    "number": "08",
    "title": "EAGLE ULP Pin Analyzer",
    "subtitle": "Schematic pin-connection analysis script",
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
    "description": "Script analyzer for EAGLE Schematic Editor: analyzes which pins of the Source component are connected to the Target and which are free (N/C).",
    "features": [
      "Autoassembly of components — schematic(SCH) { SCH.parts(P) } — name + value list",
      "Netlist analysis — for each Source pin, search for net connections with Target",
      "Filtering and sorting — All/Connected/Free N/C; 7 sorting criteria",
      "HTML rendering in EAGLE viewer with color marking (green/gray)",
      "Multi-format export — CSV, TXT, HTML",
      "Statistics line — counter of connected/free pins"
    ],
    "stack": [
      [
        "Language",
        "EAGLE ULP (C-like DSL)"
      ],
      [
        "Platform",
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
    },
    "notes": ""
  },
  {
    "id": "fastacqwinapp",
    "slug": "09-fastacqwinapp",
    "number": "09",
    "title": "FastAcqWinApp",
    "subtitle": "Real-time signal acquisition & FFT analysis",
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
    "description": "Windows desktop for real-time reception and analysis of signals from STM32H7 ADC device via USB CDC. Modes: FFT-on-device and PC-side FFT (RAW samples + local processing).",
    "features": [
      "SerialWorker — background thread: Win32 COM API, ReadFile loop, CRC binary protocol",
      "ChirpStore — CRITICAL_SECTION ring buffer 200 chirp frames: Push/GetLatest/GetAt",
      "LocalFft — Radix-2 Cooley-Tukey FFT up to 16384 points; Rectangular/Hann/Hamming/Blackman windows",
      "WaveformView — GDI zoom/pan (X+/X−/Y+/Y− + mousewheel + scrollbars)",
      "SpectrumView — linear/logarithmic frequency response with cursor overlay",
      "WaterfallView — spectrogram in pseudo-color",
      "CommandPanel — COM combo, Start/Stop, Set Freq/Samples, Ping, Mode, Trigger, PC/Device mode"
    ],
    "stack": [
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
    },
    "notes": ""
  },
  {
    "id": "stm32h7",
    "slug": "10-stm32h7",
    "number": "10",
    "title": "STM32H7 Fast Acquisition",
    "subtitle": "High-speed ADC firmware with on-device FFT",
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
    "description": "Firmware high-speed ADC device on STM32H743 (Cortex-M7, 480 MHz). Captures analog signal via parallel DCMI ADC, performs chirp-excitation and FFT on MCU.",
    "features": [
      "DCMI ADC capture (dcmi_adc.c) — parallel 8/16-bit bus; DMA → external SDRAM",
      "External SDRAM (sdram_init.c) — FMC controller for large arrays of samples",
      "Chirp DAC (chirp_dac.c) — generation of an exciting chirp signal through a DAC",
      "On-device FFT (chirp_fft.c) — spectrum on the MCU; compression before USB transfer",
      "Phase analysis (phase_a.c, phase_b.c) — two-channel phase analysis",
      "USB CDC binary protocol (usb_protocol.h) — response to FastAcqWinApp commands"
    ],
    "stack": [
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
    },
    "notes": ""
  },
  {
    "id": "crosszero",
    "slug": "11-crosszero",
    "number": "11",
    "title": "CrossZeroDetector",
    "subtitle": "Interrupt-driven AC power-grid frequency meter · Heltec WiFi LoRa 32 V2 → Supabase",
    "category": "Embedded / ESP32",
    "filterGroup": "embedded",
    "color": "#e65100",
    "tags": [
      "ESP32",
      "Arduino",
      "PlatformIO",
      "FreeRTOS",
      "Supabase",
      "NTP",
      "OLED"
    ],
    "path": "",
    "platform": "Arduino C++ / ESP32 (Heltec WiFi LoRa 32 V2) + FreeRTOS",
    "paired": "webHz (#5)",
    "github": "https://github.com/dgimbialo/CrossZeroDetector",
    "description": "Firmware for measuring the frequency of the AC power grid (nominal 50 Hz) using zero-crossing detection. Timestamps each sample via NTP with DST awareness, and batches them to Supabase over HTTPS every 5s. FreeRTOS runs the sender on Core 0 and the ISR + sampling loop on Core 1.",
    "features": [
      "Hardware interrupt (IRAM_ATTR) on GPIO 13 with 15 ms noise filter (> 66 Hz ignored)",
      "Sanity check: only records samples in range 45–55 Hz",
      "1-second sampling interval; batches up to 60 samples sent every 5 s",
      "FreeRTOS dual-core: senderTask on Core 0, ISR + loop on Core 1 with portMUX mutex",
      "3-attempt HTTP retry with 2 s delay on Supabase POST failure",
      "ISO 8601 timestamps with ms precision and Kyiv DST (UTC+2/+3) computed from NTP",
      "NTP re-sync every 60 s for drift-free timestamps",
      "SSD1306 OLED 128x64 — frequency (4 decimal places), time, Wi-Fi & DB status",
      "Auto Wi-Fi reconnect on link loss"
    ],
    "stack": [
      [
        "Platform",
        "ESP32 (Heltec WiFi LoRa 32 V2)"
      ],
      [
        "Build",
        "PlatformIO + Arduino framework"
      ],
      [
        "RTOS",
        "FreeRTOS (built-in ESP-IDF)"
      ],
      [
        "Cloud",
        "Supabase REST API (PostgreSQL + PostgREST)"
      ],
      [
        "Serialization",
        "ArduinoJson 7.2.1"
      ],
      [
        "Time",
        "NTPClient 3.2.1 (pool.ntp.org) + custom Kyiv DST"
      ],
      [
        "Display",
        "Heltec_LoRa_OLED / SSD1306Wire (128x64)"
      ]
    ],
    "media": {
      "foto": [
        "projects/11-crosszero/foto/foto_1.JPG",
        "projects/11-crosszero/foto/foto_2.JPG",
        "projects/11-crosszero/foto/Foto_3.png"
      ],
      "video": []
    },
    "notes": ""
  },
  {
    "id": "git-keeper",
    "slug": "12-git-keeper",
    "number": "12",
    "title": "Git Change Keeper",
    "subtitle": "Automatic git diff snapshot with SHA-256 dedup",
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
    "description": "CLI tool for automatically saving git diff snapshots in .diff files. Runs regularly and saves only new changes, avoiding SHA-256 duplicates.",
    "features": [
      "GitPython — repo.is_dirty(), repo.git.diff(None, name_only=True)",
      "SHA-256 deduplication — sha256(diff_content); duplicates not stored",
      "Hash store persistence — plain-text file of hashes; download/update",
      "Timestamped output dirs — changes_YYYYMMDD_HHMMSS/",
      "Multi-file — each dirty file → a separate .diff in the batch directory",
      "argparse CLI — repo path, output path, hash store; polling/daemon mode"
    ],
    "stack": [
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
    },
    "notes": ""
  },
  {
    "id": "bandora",
    "slug": "13-bandora",
    "number": "13",
    "title": "JAMMER Professional",
    "subtitle": "Professional MIDI sequencer & music compositor",
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
    "platform": "C++ + MFC / Win32",
    "paired": null,
    "github": "",
    "description": "Full-featured MIDI sequencer and music compositing application with notation, VST plug-ins and audio recording.",
    "features": [
      "MIDI engine — I/O, real-time playback, SysEx, channel mode messages",
      "Track Sequencer — piano roll + sheet music editor",
      "Audio capture — WAV and MP3 via DirectShow/WASAPI",
      "Score notation editor — measures, staves, clef, time/key signatures",
      "VST Host — download and run VST 2.x plug-ins",
      "Multi-language UI — dynamic language switch without restart"
    ],
    "stack": [
      [
        "Language",
        "C++ (MSVC)"
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
        "DirectShow, WASAPI"
      ],
      [
        "VST",
        "VST 2.x host"
      ],
      [
        "Installer",
        "Inno Setup"
      ],
      [
        "Build",
        "VS2022"
      ]
    ],
    "media": {
      "foto": [],
      "video": []
    },
    "notes": ""
  },
  {
    "id": "hmi-pic24",
    "slug": "14-hmi-pic24",
    "number": "14",
    "title": "HMI Touchscreen (PIC24)",
    "subtitle": "Syringe pump HMI — TFT35 + Modbus RTU",
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
    "platform": "Embedded C / PIC24 / MPLAB XC16",
    "paired": null,
    "github": "",
    "description": "Standalone HMI for controlling an industrial syringe pump via a TFT35 touch display via Modbus RTU.",
    "features": [
      "TFT35 SPI display — initialization, backlight, text/primitives",
      "Touchscreen calibration — persistent in internal flash",
      "TFTUI — TextBox, SelectFont, SetBackground/Foreground, center-aligned",
      "Modbus master",
      "Poll/update state machine — differential update only when registers are changed",
      "UI BreakHook — callback during redraw for Modbus polling without blocking",
      "Bootloader"
    ],
    "stack": [
      [
        "MCU",
        "PIC24"
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
    },
    "notes": ""
  },
  {
    "id": "html-editor",
    "slug": "15-html-editor",
    "number": "15",
    "title": "Drag & Drop HTML Editor",
    "subtitle": "WYSIWYG HTML editor for TFT display design",
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
    "description": "WYSIWYG HTML editor for TFT displays: drag-and-drop elements on the canvas with simultaneous editing of HTML code.",
    "features": [
      "Dual-view editing — canvas (drag/resize) ↔ code (HTML); two-way synchronization",
      "Drag-and-drop palette — text, button, image, line → canvas with (x, y)",
      "Element management — select/move/resize/copy/paste/duplicate/delete",
      "Property panel — position, size, text, color, font of the selected element",
      "Undo/Redo (QUndoStack, DocumentStateCommand) — Command pattern",
      "Grid — configurable grid; snap-to-grid when moving",
      "Font management — custom fonts, Font Editor, system fonts menu",
      "HTML parser (model/htmlparser.h) — parsing into the internal document model"
    ],
    "stack": [
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
    },
    "notes": ""
  },
  {
    "id": "hmiapp",
    "slug": "16-hmiapp",
    "number": "16",
    "title": "HMIApp — Industrial HMI",
    "subtitle": "Cable stripping machine Qt6 touchscreen HMI",
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
    "description": "Full-featured industrial HMI for a cable stripping machine. Touchscreen UI on Qt Quick/QML with Modbus communication, recipe management and diagnostics.",
    "features": [
      "Modbus async queue with priority queue and success statistics",
      "Barcode scanner — serial port or HID keyboard emulation via eventFilter",
      "Recipe engine — CRUD in SQLite",
      "Multi-axis config — corrections, offsets",
      "Details replacement wizard — guided step-by-step process",
      "USB detection — WMI COM object for arrival/removal",
      "Kiosk mode — Windows Registry Shell key;",
      "Release pipeline — Inno Setup + rcedit + signtool + PFX; i18n"
    ],
    "stack": [
      [
        "Language",
        "C++17"
      ],
      [
        "UI",
        "Qt6 Quick/QML"
      ],
      [
        "Database",
        "SQLite"
      ],
      [
        "Communication",
        "ModbusClient, SerialPort"
      ],
      [
        "Build",
        "CMake 3.16+, Ninja, VS2022"
      ],
      [
        "Deployment",
        "Inno Setup, rcedit, signtool"
      ],
      [
        "Target",
        "Windows 10 embedded (kiosk mode)"
      ]
    ],
    "media": {
      "foto": [],
      "video": []
    },
    "notes": ""
  },
  {
    "id": "modbus-emulator",
    "slug": "17-modbus-emulator",
    "number": "17",
    "title": "ModbusEmulator",
    "subtitle": "Modbus RTU/TCP slave emulator for testing",
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
    "description": "Desktop for emulating Modbus RTU/TCP slave devices — testing master applications (HMIApp, HPLC Pump) without real hardware.",
    "features": [
      "QModbusServer — FC 0x03/0x10, response generation",
      "ModbusDataStore — register bank: bulk init, per-address R/W, notifications",
      "QML UI — port/slave-ID configuration, real-time register table, Start/Stop",
      "LogHandler — a structured log of requests/responses with a timestamp",
      "CMakePresets — debug/release profiles"
    ],
    "stack": [
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
    },
    "notes": ""
  },
  {
    "id": "hplc-pump",
    "slug": "18-hplc-pump",
    "number": "18",
    "title": "HPLC Syringe Pump",
    "subtitle": "HPLC pump desktop control via Modbus RTU",
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
    "description": "Desktop control of an HPLC syringe pump via Modbus RTU: flow,  pressure and flow monitoring.",
    "features": [
      "Modbus async priority queue",
      "Auto-reconnect with adjustable interval",
      "Flow Method Manager",
      "Calibration — guided procedure",
      "Custom real-time charting"
    ],
    "stack": [
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
        "SerialBus RTU"
      ],
      [
        "Build",
        "CMake 3.16+, Ninja"
      ],
      [
        "Deployment",
        "Inno Setup, signtool"
      ]
    ],
    "media": {
      "foto": [],
      "video": []
    },
    "notes": ""
  },
  {
    "id": "scanscore",
    "slug": "19-scanscore",
    "number": "19",
    "title": "ScanScore (OMR)",
    "subtitle": "Optical Music Recognition from scanned sheets",
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
    "platform": "C++ Qt5 / Windows + macOS",
    "paired": null,
    "github": "",
    "description": "Cross-platform application for optical music recognition (OMR — Optical Music Recognition) from scanned sheet music.",
    "features": [
      "OCR — recognition of musical notation symbols",
      "Image preprocessing — grayscale, threshold, morphological, staff line detection/removal",
      "Qt5 GUI — scan view, results panel",
      "MIDI/notation output — MusicXML or MIDI",
      "Cross-platform — vcpkg; Windows (x64) + macOS;"
    ],
    "stack": [
      [
        "Language",
        "C++11"
      ],
      [
        "UI",
        "Qt5 (Widgets, Multimedia, Pdf)"
      ],
      [
        "Image",
        "OpenCV (imgproc, core)"
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
    },
    "notes": ""
  },
  {
    "id": "forte",
    "slug": "20-forte",
    "number": "20",
    "title": "Forte Notation",
    "subtitle": "Full-featured music notation editor",
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
    "platform": "C++ + MFC / Windows (MSVC)",
    "paired": null,
    "github": "",
    "description": "Full-featured music notation editor with MIDI recording, VST.",
    "features": [
      "Score editor — measures, staves, clef, time/key signatures",
      "MIDI playback/recording",
      "Audio capture — MIDI",
      "VST Host — VST 2.x plug-ins",
      "Multi-language — without restart",
      "Undo history, online updater"
    ],
    "stack": [
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
        "DirectShow, WASAPI"
      ],
      [
        "VST",
        "VST 2.x host"
      ],
      [
        "Build",
        "VS"
      ]
    ],
    "media": {
      "foto": [],
      "video": []
    },
    "notes": ""
  },
  {
    "id": "onyx",
    "slug": "21-onyx",
    "number": "21",
    "title": "Onyx",
    "subtitle": "Plugin-based multimedia desktop application",
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
    "description": "Legacy desktop application with plugin architecture. Multimedia or productivity tool with an extensible system of DLL plugins.",
    "features": [
      "Plugin architecture — DLL plugins, dynamic loading",
      "Application modules — sub-applications within one process",
      "Shared logic between Apps and Plugins",
      "Legacy solution"
    ],
    "stack": [
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
    },
    "notes": ""
  },
  {
    "id": "ai-memory",
    "slug": "22-ai-memory",
    "number": "22",
    "title": "AI Memory System",
    "subtitle": "Semantic memory CLI for AI-assisted development",
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
    },
    "notes": ""
  }
];

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
    "path": "https://github.com/dgimbialo/KeyBeep",
    "platform": "C++/Win32 API/Windows",
    "paired": null,
    "github": "",
    "description": "Lightweight Windows tray app that plays an instant, configurable sound every time a chosen hotkey is pressed, giving immediate audible confirmation that the key registered. It was born from a sticky keyboard that occasionally missed the language-switch key, leaving no way to tell whether the press worked. Useful for language-switch keys, mute / push-to-talk buttons, macro keys, or any key you want audio feedback for.",
    "features": [
      "Global hotkey with optional modifiers (Ctrl/Alt/Shift/Win) and key-combo detection",
      "Instant audio via MIDI Out (WinMM), reliable even right after Windows volume or notification sounds (bypasses the audio engine)",
      "Several MIDI sound types (low/medium/high/double beep) with a Test Sound button",
      "Runs silently in the system tray; settings window opens on double-click",
      "Settings saved to the registry (HKCU\\Software\\KeyBeep) and persist across reboots",
      "Self-installer: copies the app to %LOCALAPPDATA%\\KeyBeep\\ and adds autostart; uninstall from the tray menu",
      "Thread-safe low-level keyboard hook: the callback posts a message and returns immediately, playback runs on a worker thread",
      "Single EXE, zero external dependencies (Windows built-in libraries only)"
    ],
    "stack": [
      [
        "Language",
        "C++ (MSVC)"
      ],
      [
        "GUI",
        "Win32 API, system tray (Shell_NotifyIcon), low-level keyboard hook"
      ],
      [
        "Audio",
        "WinMM MIDI Out (persistent HMIDIOUT handle)"
      ],
      [
        "Persistence",
        "Windows Registry (HKCU)"
      ],
      [
        "Installer",
        "Embedded-resource self-installer (setup.exe)"
      ],
      [
        "Build",
        "build.bat, Visual Studio 2017/2019/2022"
      ],
      [
        "Dependencies",
        "Windows built-in libs only (user32, winmm, shell32, advapi32)"
      ]
    ],
    "media": {
      "foto": [
        "projects/01-keybeep/foto/Foto_1.png",
        "projects/01-keybeep/foto/Foto_2.png",
        "projects/01-keybeep/foto/Foto_3.png"
      ],
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
      "Multilingual localization (i18n) - 4 languages: DE/PL/UK/EN; change without rebooting",
      "SEO optimization - hreflang, OpenGraph, Twitter Card, JSON-LD Organization + ProfessionalService, GA4",
      "Responsive design - responsive CSS for mobile and desktop",
      "Deployment on Cloudflare Pages via Wrangler CLI - zero-config edge hosting",
      "Image processing pipeline - Sharp for optimization of photo projects (7.4 MW+)",
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
      "GPIB auto-scan - scan of addresses 1–30 on board 0, identification by *IDN?",
      "SCPI protocol - WFMPRE?, CURVE?, ACQuire? for preamble and binary curve data",
      "Waveform decoder - conversion of raw ADC to V/s by YMULT/YOFF/YZERO/XINCR",
      "GDI double-buffered renderer - zoom/pan, autoscale, cursor overlay, ~10 FPS",
      "Lock-free ring buffer (SPSC) - thread-safe transfer between acquisition thread and GUI",
      "Embedded HTTP + WebSocket server (RFC 6455) with self-contained SHA-1 and Base64",
      "HtmlGenerator - autogenerates single-page frontend; waveform via WebSocket to mobile"
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
    "subtitle": "Score and note inspector for Standard MIDI Files",
    "category": "Desktop / Audio",
    "filterGroup": "audio",
    "color": "#880e4f",
    "tags": [
      "C++17",
      "MFC",
      "WinAPI",
      "MIDI",
      "CMake",
      "Native"
    ],
    "path": "https://github.com/dgimbialo/MidiViewer",
    "platform": "C++17 + MFC / Windows",
    "paired": null,
    "github": "",
    "description": "The app grew out of another commercial project that needed detailed, note-by-note analysis of MIDI tracks to debug the algorithms recognizing live-recorded MIDI notes. That need turned into a standalone tool. A lightweight Windows desktop app for inspecting Standard MIDI Files (.mid / .midi): a piano-roll score, a synchronized note table, and tick-accurate timing tools. It is built deliberately on raw WinAPI / MFC, with no Qt, Electron, .NET or third-party libraries, so it compiles to a single self-contained .exe that starts instantly, uses very little memory, and runs on any Windows machine with nothing to install.",
    "features": [
      "Piano-roll score: notes drawn as pitch/time rectangles shaded by velocity, one semitone per lane so they never overlap vertically",
      "Bar-grouped note table: start tick and ms, note name, pitch, duration (ticks and ms), velocity and channel, organized by bar",
      "Two-way selection sync: click a note in the score or the list and the other view highlights, scrolls to it, and shows details in the status bar",
      "Per-track viewing: a chooser for multi-track files and a Track menu that switches tracks live (score and table reload)",
      "Per-bar tick ruler: hover a bar for a ruler relative to it, with beat marks, sub-beat ticks, a live cursor and an exact tick readout",
      "Center-anchored zoom with Ctrl + Wheel or Ctrl + +/-/0, keeping the viewport center in place",
      "Dockable note list: dock right or bottom, or float it as a separate window",
      "Header read-out: tempo (BPM), time signature, bar count, note count and total duration",
      "Correct timing math: honors tempo and time-signature changes for tick to ms and bar conversions; track names decoded as UTF-8 (Cyrillic displays correctly)",
      "Self-contained: static MFC and static CRT, so the .exe runs with no extra redistributables"
    ],
    "stack": [
      [
        "Language",
        "C++17"
      ],
      [
        "UI",
        "MFC / WinAPI (MDI, GDI double-buffered)"
      ],
      [
        "MIDI",
        "Own Standard MIDI File parser (format 0 / 1)"
      ],
      [
        "Build",
        "CMake 3.20+ with MSVC (Visual Studio 2022)"
      ],
      [
        "Linking",
        "Static MFC + static CRT (single self-contained .exe)"
      ],
      [
        "Dependencies",
        "None (Windows system libraries only)"
      ],
      [
        "Target OS",
        "Windows 10 / 11"
      ]
    ],
    "media": {
      "foto": [
        "projects/04-simplemidiviewer/foto/Foto_1.png",
        "projects/04-simplemidiviewer/foto/Foto_2.png"
      ],
      "video": []
    },
    "notes": "- MIT licensed. - Input: Standard MIDI Files, format 0 or 1 (.mid / .midi)."
  },
  {
    "id": "webhz",
    "slug": "05-webhz",
    "number": "05",
    "title": "Power Grid Frequency Monitor",
    "subtitle": "Real-time AC grid frequency dashboard - ESP32 → Supabase → GitHub Pages",
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
    "description": "Fully serverless real-time dashboard that visualises power grid frequency. An ESP32 measures zero-crossing frequency every second and writes directly to Supabase - the browser reads via REST API with a publishable anon key. No server, no backend code. Hosted for free on GitHub Pages as a pure static site.",
    "features": [
      "Real-time polling every 2 s via Supabase REST API (read-only anon key)",
      "Smart drip queue - live mode: 1 point/s animation; backlog: instant flush",
      "Null injection for gaps > 12 s - visible breaks instead of connecting lines",
      "Viewport anchoring - live data scrolls to now; historical anchors to last point",
      "Auto Y-scale always keeps 50.000 Hz nominal line in view",
      "Data Age indicator - X:YY min format; turns red when data is older than 2 min",
      "Range buttons 1 min – 48 h; user selection preserved (no auto-override)",
      "EN / UA full i18n - units, labels, range buttons, badges",
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
      "3-sensor system - LOW/MIDDLE/HIGH level; pump relay control",
      "Automatic mode - control by liquid level",
      "Manual mode - override via buttons with LCD display",
      "Error state detection - emergency situations (absence/error of the sensor)",
      "LCD UI (LiquidCrystal 16×2) - mode, level, error status",
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
      "Commercial",
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
    "description": "Commercial standalone controller firmware for a solar collector system: Controls the fan based on the temperature difference between the collector and the room.",
    "features": [
      "Two-sensor system DS18B20 (OneWire) - HomeThermometer + CollectorThermometer; check of 2 devices at start",
      "3 modes - OFF / COOL / HEAT based on temperature difference + manual mode",
      "EEPROM persistence - nSetTemp and nManualMode are restored after shutdown",
      "Interrupt-driven buttons -  debounce 100 ms; Temp Down / Mode / Temp Up",
      "LCD UI (LiquidCrystal 16×2) - both temperatures, mode, set temperature"
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
    "description": "A custom EAGLE ULP (User Language Program) for the EAGLE Schematic Editor that analyzes pin-level connectivity between components. You pick a Source component and a Target, and the tool reports, pin by pin, which Source pins connect to the Target and which are free (not connected). It runs inside EAGLE and presents the result in an interactive dialog with filtering, sorting and export.",
    "features": [
      "Runs inside EAGLE from the \"Run ULP\" toolbar button; ships as a single `pin-usage-analyzer.ulp` placed in EAGLE's ulp folder",
      "Source and Target selectors: dropdowns that list every part in the schematic by reference and part number (for example \"IC1 (STM32H743IIT6)\"); the Target can be one component or \"All elements\"",
      "Analyze and Reset buttons run or clear the analysis; a status line shows progress (Ready / done)",
      "Results table with columns: Component Name, Pin #, Pin Name, Net Name, Target Pin, Target Component",
      "Color-coded rows: connected pins are highlighted (green), free / not-connected pins are shown distinctly, so pin usage is readable at a glance",
      "Filter by connection state: All, Connected, Free (N/C), each with a live count",
      "Sort by any column (Component Name and more), ascending or descending, applied on demand",
      "One-click export of the table to CSV, TXT or HTML",
      "Statistics line with a live counter of connected and free pins"
    ],
    "stack": [
      [
        "Language",
        "EAGLE ULP (C-like DSL)"
      ],
      [
        "Host",
        "Autodesk EAGLE 7.6 (Schematic Editor)"
      ],
      [
        "Launch",
        "Run ULP toolbar button (ulp/pin-usage-analyzer.ulp)"
      ],
      [
        "UI",
        "Native EAGLE dialog: dropdowns, results table, filter / sort, export"
      ],
      [
        "Output",
        "CSV, TXT, HTML"
      ]
    ],
    "media": {
      "foto": [
        "projects/08-eagle-ulp/foto/Foto_1.png",
        "projects/08-eagle-ulp/foto/Foto_2.png",
        "projects/08-eagle-ulp/foto/Foto_3.png",
        "projects/08-eagle-ulp/foto/Foto_4.png",
        "projects/08-eagle-ulp/foto/Foto_5.png"
      ],
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
      "SerialWorker - background thread: Win32 COM API, ReadFile loop, CRC binary protocol",
      "ChirpStore - CRITICAL_SECTION ring buffer 200 chirp frames: Push/GetLatest/GetAt",
      "LocalFft - Radix-2 Cooley-Tukey FFT up to 16384 points; Rectangular/Hann/Hamming/Blackman windows",
      "WaveformView - GDI zoom/pan (X+/X−/Y+/Y− + mousewheel + scrollbars)",
      "SpectrumView - linear/logarithmic frequency response with cursor overlay",
      "WaterfallView - spectrogram in pseudo-color",
      "CommandPanel - COM combo, Start/Stop, Set Freq/Samples, Ping, Mode, Trigger, PC/Device mode"
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
      "DCMI ADC capture (dcmi_adc.c) - parallel 8/16-bit bus; DMA → external SDRAM",
      "External SDRAM (sdram_init.c) - FMC controller for large arrays of samples",
      "Chirp DAC (chirp_dac.c) - generation of an exciting chirp signal through a DAC",
      "On-device FFT (chirp_fft.c) - spectrum on the MCU; compression before USB transfer",
      "Phase analysis (phase_a.c, phase_b.c) - two-channel phase analysis",
      "USB CDC binary protocol (usb_protocol.h) - response to FastAcqWinApp commands"
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
      "SSD1306 OLED 128x64 - frequency (4 decimal places), time, Wi-Fi & DB status",
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
    "subtitle": "Auto-saves uncommitted git diffs to timestamped folders",
    "category": "Python / Tooling",
    "filterGroup": "tools",
    "color": "#00695c",
    "tags": [
      "Python",
      "GitPython",
      "pystray",
      "Tkinter",
      "SHA-256",
      "System Tray"
    ],
    "path": "https://github.com/dgimbialo/Git_Change_Keeper",
    "platform": "Python 3 / Windows",
    "paired": null,
    "github": "",
    "description": "Git Change Keeper watches a local Git repository and automatically saves every new change as a diff snapshot into timestamped folders, without requiring you to commit. It compares the SHA-256 hash of each diff so duplicate snapshots are never written, so you keep a clean trail of work-in-progress states and never lose an uncommitted change. In day-to-day use it has repeatedly saved hours of uncommitted work that an automated AI coding agent would otherwise have wiped out with a careless `git reset --hard`. Because every change is snapshotted as a diff outside Git, the work survives even when the working tree is reset, and it can be recovered and re-applied.",
    "features": [
      "GUI launcher: a settings window to pick the repository and output paths with a file-browser dialog",
      "Background operation: after Start Monitoring the window hides and monitoring keeps running silently",
      "System-tray icon: a small icon near the Windows clock, with a right-click context menu (Show Settings, Stop Monitoring, Exit)",
      "Hash-based deduplication: only genuinely new diffs are saved, compared by SHA-256",
      "Timestamped snapshots: each detected change set is written to its own folder, with an internal hash store",
      "Configurable check interval: any value up to 100000 seconds (default 600)"
    ],
    "stack": [
      [
        "Language",
        "Python 3.10+"
      ],
      [
        "Git",
        "GitPython"
      ],
      [
        "GUI",
        "Tkinter settings window with file dialogs"
      ],
      [
        "System tray",
        "pystray + Pillow"
      ],
      [
        "Hashing",
        "hashlib (SHA-256)"
      ],
      [
        "Output",
        "Timestamped folders of .diff files + hash store"
      ],
      [
        "Target OS",
        "Windows 10 / 11"
      ]
    ],
    "media": {
      "foto": [
        "projects/12-git-keeper/foto/Foto_1.png",
        "projects/12-git-keeper/foto/Foto_2.png",
        "projects/12-git-keeper/foto/Foto_3.png"
      ],
      "video": []
    },
    "notes": "- Install: pip install gitpython pillow pystray - Output: snapshots are saved under a Keeper_Of_Changes folder (timestamped subfolders plus a hashes.txt store)."
  },
  {
    "id": "bandora",
    "slug": "13-bandora",
    "number": "13",
    "title": "BANDORA",
    "subtitle": "Virtual Music Arrаnger & Composer",
    "category": "Desktop / Audio",
    "filterGroup": "audio",
    "color": "#880e4f",
    "tags": [
      "Commercial",
      "C++",
      "MFC",
      "MIDI",
      "BASS",
      "BASSMIDI",
      "SoundFont",
      "WinMM"
    ],
    "path": "https://web.archive.org/web/20221209193625/https://bandora.com/en/",
    "platform": "C++ + MFC/Win32 (MSVC)",
    "paired": null,
    "github": "",
    "description": "Commercial Windows music-creation suite for building full arrangements from chord charts. You enter a chord progression and pick a band style, and the app generates a multi-instrument arrangement: bass, drums, comping, riffs and transitions - that plays back in real time. Shipped in several editions (Creator/Producer), each with its own feature set. Distribution is a signed installer with online license activation and an English/German localized UI.",
    "features": [
      "Style-based arranger: band styles, drum styles, grooves, riffs, progression styles, chord voicings and transitions combine into a generated multi-track arrangement",
      "Song editor: chord progression entry, key/time-signature changes, per-track layouts and templates",
      "Real-time MIDI engine: playback to external MIDI devices or to the built-in soundfont synth",
      "SoundFont synthesis: BASSMIDI renders MIDI through SF2 instrument banks, no external synth required",
      "MIDI device profiles: General MIDI/GS patch-name maps for external sound modules (Roland, Korg, Yamaha)",
      "Audio export: offline render of an arrangement to WAV, with MP3 encoding",
      "Multi-edition build: Creator and Producer editions from one codebase",
      "Multi-language UI: per-locale resource DLLs (English/German), switchable without reinstall",
      "Licensing: online activation with serial-key validation"
    ],
    "stack": [
      [
        "Language",
        "C++ (MSVC)"
      ],
      [
        "UI framework",
        "MFC (dynamic dialogs, docking bars)"
      ],
      [
        "Audio engine",
        "BASS audio library (un4seen)"
      ],
      [
        "MIDI synthesis",
        "BASSMIDI (SoundFont SF2)"
      ],
      [
        "Audio export",
        "BASSenc, BASSenc_MP3 (WAV / MP3)"
      ],
      [
        "MIDI I/O",
        "WinMM, GM / GS device profiles"
      ],
      [
        "Sequencer",
        "In-house sequencer engine"
      ],
      [
        "Localization",
        "Per-locale resource DLLs (EN / DE)"
      ],
      [
        "Installer",
        "Visual Studio Setup Project"
      ],
      [
        "Build",
        "Visual Studio 2022, x86"
      ],
      [
        "Target OS",
        "Windows 7/8/10/11"
      ]
    ],
    "media": {
      "foto": [
        "projects/13-bandora/foto/Bandora_1.png",
        "projects/13-bandora/foto/Bandora_2.png",
        "projects/13-bandora/foto/Bandora_3.png",
        "projects/13-bandora/foto/Bandora_4.png"
      ],
      "video": [
        "https://www.youtube.com/watch?v=0KTqOvhLUM8"
      ]
    },
    "notes": ""
  },
  {
    "id": "hmi-pic24",
    "slug": "14-hmi-pic24",
    "number": "14",
    "title": "HMI Touchscreen (PIC24)",
    "subtitle": "Bare-metal touchscreen HMI for a syringe pump",
    "category": "Embedded / PIC",
    "filterGroup": "embedded",
    "color": "#b71c1c",
    "tags": [
      "Commercial",
      "PIC24",
      "C",
      "XC16",
      "Bare-metal",
      "Modbus RTU",
      "TFT35",
      "Touchscreen"
    ],
    "path": "",
    "platform": "Embedded C / PIC24 / MPLAB XC16",
    "paired": "HPLC Syringe Pump (#18)",
    "github": "",
    "description": "Commercial standalone touchscreen HMI for an industrial syringe pump. It runs bare metal on a small PIC24 microcontroller, drives a TFT35 touch display, and talks to the pump controller over Modbus RTU. The entire graphics stack and user interface were written from scratch, with no third-party graphics libraries.",
    "features": [
      "Bare-metal graphics: display driver and rendering written directly against the hardware, with no external GUI library",
      "Custom UI framework built from scratch: text, buttons, input fields, menus and full screens",
      "Responsive rendering on a low-power MCU: only what changed on screen is redrawn",
      "Resistive touchscreen input with persistent calibration",
      "Memory-optimized custom bitmap fonts with a dedicated conversion tool",
      "Modbus RTU master with connection watchdog and automatic recovery",
      "Serial bootloader for firmware updates over the serial port(UART)",
      "Tuned to fit the limited program and data memory of a small PIC24"
    ],
    "stack": [
      [
        "MCU",
        "PIC24"
      ],
      [
        "Language",
        "C (MPLAB XC16)"
      ],
      [
        "Graphics",
        "Bare metal, no third-party libraries"
      ],
      [
        "Display",
        "TFT35 over SPI"
      ],
      [
        "Touch",
        "Resistive touchscreen with calibration"
      ],
      [
        "Protocol",
        "Modbus RTU (serial)"
      ],
      [
        "Firmware update",
        "Custom serial bootloader"
      ],
      [
        "Persistence",
        "Internal PIC24 flash"
      ],
      [
        "Build",
        "MPLAB X / Makefile"
      ]
    ],
    "media": {
      "foto": [
        "projects/14-hmi-pic24/foto/Foto_1.JPEG",
        "projects/14-hmi-pic24/foto/Foto_2.JPEG",
        "projects/14-hmi-pic24/foto/Foto_3.JPEG",
        "projects/14-hmi-pic24/foto/Foto_4.JPEG",
        "projects/14-hmi-pic24/foto/Foto_5.JPEG",
        "projects/14-hmi-pic24/foto/Foto_6.JPEG"
      ],
      "video": []
    },
    "notes": "- Paired with the HPLC Syringe Pump desktop control over Modbus RTU."
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
      "Dual-view editing - canvas (drag/resize) ↔ code (HTML); two-way synchronization",
      "Drag-and-drop palette - text, button, image, line → canvas with (x, y)",
      "Element management - select/move/resize/copy/paste/duplicate/delete",
      "Property panel - position, size, text, color, font of the selected element",
      "Undo/Redo (QUndoStack, DocumentStateCommand) - Command pattern",
      "Grid - configurable grid; snap-to-grid when moving",
      "Font management - custom fonts, Font Editor, system fonts menu",
      "HTML parser (model/htmlparser.h) - parsing into the internal document model"
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
    "description": "Desktop for emulating Modbus RTU/TCP slave devices - testing master applications (e.g. HPLC Pump) without real hardware.",
    "features": [
      "QModbusServer - FC 0x03/0x10, response generation",
      "ModbusDataStore - register bank: bulk init, per-address R/W, notifications",
      "QML UI - port/slave-ID configuration, real-time register table, Start/Stop",
      "LogHandler - a structured log of requests/responses with a timestamp",
      "CMakePresets - debug/release profiles"
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
      "Commercial",
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
    "description": "Commercial desktop control of an HPLC syringe pump via Modbus RTU: flow,  pressure and flow monitoring.",
    "features": [
      "Modbus async priority queue",
      "Auto-reconnect with adjustable interval",
      "Flow Method Manager",
      "Calibration - guided procedure",
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
      "Commercial",
      "C++11",
      "Qt5",
      "OpenCV",
      "Tesseract",
      "MusicXML"
    ],
    "path": "https://scan-score.com/en/",
    "platform": "C++/ Qt5/ Windows + macOS",
    "paired": null,
    "github": "",
    "contribution": [
      "Bug fixing across the OMR recognition pipeline, score editor and export modules",
      "Implemented new features in Scan mode and the Score-mode notation editor",
      "Improved existing behaviour of playback, transpose and MusicXML/MIDI export",
      "Refined UI dialogs, error handling and cross-platform (Windows/macOS) builds"
    ],
    "description": "Cross-platform commercial OMR (Optical Music Recognition) application (Melody/Ensemble/Professional editions). 20,000+ licensed customers. Ingests raster images (JPEG, PNG, TIFF) and multi-page PDFs, runs a symbol-detection pipeline to extract standard Western music notation, and produces an editable score document. The document can be played back, transposed, corrected in a built-in notation editor (Score mode), and exported as MusicXML or MIDI for downstream tools (Sibelius, Finale, Dorico, MuseScore, DAWs). Shipped as a licensed installer for Windows (8+) and macOS (10.12 Sierra+); 1-year license key with HTTPS activation.",
    "features": [
      "Image and PDF import: load scans and photos (JPEG, PNG, TIFF, BMP) and multi-page PDFs, with a scan dialog for resolution, contrast and page format",
      "Music recognition: reads standard notation including notes, rests, accidentals, clefs, key and time signatures, beams, ties, slurs, articulations, dynamics, lyrics and chord symbols",
      "Scan mode: original image and recognized score side by side, with inline correction tools and per-element properties",
      "Score mode: built-in notation editor to add or remove measures and sections, manage instrument tracks and voices, and control system and page breaks",
      "Playback: multi-track playback with a per-track mixer (volume, pan, sound, mute/solo), metronome, adjustable tempo and loop regions",
      "Transpose: transpose the whole score or individual staves by interval or key, including transposing-instrument conversion",
      "Export: MusicXML, MIDI, PDF and audio export, compatible with major notation apps and DAWs",
      "ScanScore Capture mobile companion: scan pages with a phone camera and pair to the desktop by QR code",
      "Updates and licensing: online updates and activation with a time-limited license key"
    ],
    "stack": [
      [
        "Language",
        "C++11"
      ],
      [
        "UI framework",
        "Qt5 (QWidgets)"
      ],
      [
        "Multimedia/playback",
        "Qt5 Multimedia (QMediaPlayer, QAudioOutput)"
      ],
      [
        "PDF rendering",
        "Qt5 Pdf module"
      ],
      [
        "Image processing",
        "OpenCV"
      ],
      [
        "OMR engine",
        "Custom music-recognition engine"
      ],
      [
        "MusicXML I/O",
        "Custom writer/QXmlStreamReader parser (MusicXML 3.x)"
      ],
      [
        "MIDI export",
        "Custom MIDI type-1 file writer"
      ],
      [
        "Audio export",
        "MP3 encoding (bundled encoder)"
      ],
      [
        "Build system",
        "CMake"
      ],
      [
        "Target OS",
        "Windows 8+ (x64), macOS 10.12 Sierra+"
      ]
    ],
    "media": {
      "foto": [
        "projects/19-scanscore/foto/app_quartet_score.jpg",
        "projects/19-scanscore/foto/score_editor.jpg",
        "projects/19-scanscore/foto/mixer.png",
        "projects/19-scanscore/foto/transpose_dialog.jpg",
        "projects/19-scanscore/foto/time_signature_dialog.jpg",
        "projects/19-scanscore/foto/options_qr.png",
        "projects/19-scanscore/foto/app_main.png"
      ],
      "video": [
        "https://youtu.be/7I0dLa9V3qA"
      ]
    },
    "notes": "- FAQ: https://scan-score.com/en/faq/"
  },
  {
    "id": "forte",
    "slug": "20-forte",
    "number": "20",
    "title": "FORTE 12",
    "subtitle": "Full-featured music notation editor",
    "category": "Desktop / Audio",
    "filterGroup": "audio",
    "color": "#880e4f",
    "tags": [
      "Commercial",
      "C++",
      "MFC",
      "BCGSoft",
      "MIDI",
      "WinMM",
      "VST 2.x",
      "Inno Setup",
      "MusicXML"
    ],
    "path": "https://www.fortenotation.com/en/",
    "platform": "C++ + MFC/Windows (MSVC)",
    "paired": null,
    "github": "",
    "contribution": [
      "Bug fixing in the MIDI capture/routing pipeline (note-on/off, channel split, quantization)",
      "Added new notation, layout and score-editor features",
      "Improved existing playback, mixer and VST 2.x host behaviour",
      "Reworked BCGSoft Ribbon dialogs, localization and the in-app updater flow"
    ],
    "description": "Commercial Windows music notation software (Basic/Home/Premium editions). The core is a score document model with a custom rendering pipeline that lays out staves, measures, noteheads, beams, ties, slurs and all standard engraving elements to GDI. Live recording from your MIDI-device to write your notes, the app integrates a real-time MIDI capture thread (WinMM), a VST 2.x plugin host, an audio render pipeline (DirectShow/WASAPI), and a MusicXML serializer. BCGSoft Ribbon replaces classic MFC menu bar. Distribution is a signed installer with HTTPS-based license activation and an in-app update mechanism.",
    "features": [
      "Score document model - internal tree, supports all standard clefs, key/time signatures, tuplets, grace notes, multi-measure rests",
      "Notation elements - noteheads, stems, beams (automatic grouping by time signature), ties, slurs, articulations, dynamics (hairpins, text), fermatas, trills, ornaments, chord symbols, guitar tablature (custom tuning per track), lyrics (16 verses per staff)",
      "Multi-voice/multi-track - independent voices per staff, up to 32 instrument tracks per system",
      "Ribbon UI (BCGSoft) - tabbed command bar (Home/Score/Record/Options/Help) built on BCGControlBar Pro, context-sensitive tabs for selection state, custom input palette docked as a side panel",
      "MIDI live recording - WinMM `midiInOpen` / callback thread captures note-on/off, real-time mode quantizes to selected grid after recording, step-input mode",
      "MIDI routing & mixing - in-app mixer (track volume, pan, mute/solo, channel assignment), MIDI-IN routing dialog for channel filter, split point (bass/treble clef auto-split), voice-to-track mapping",
      "MIDI playback - WinMM or DirectMusic backend, General MIDI channel mapping, tempo track with BPM automation, loop and lead-in for recording",
      "VST 2.x host - scans plugin directories for `*.dll`, instantiates via `VSTPluginMain`, routes audio via ASIO-style float buffers, FORTE Player is a bundled VST instrument with a GM sound library",
      "Audio export - offline render of the entire score to PCM WAV, MP3 encoding via bundled encoder, uses DirectShow graph or WASAPI exclusive for output device routing",
      "MusicXML I/O - custom DOM-based parser/writer against MusicXML 3.x schema, import maps `<note>`, `<attributes>`, `<direction>` to internal model, export round-trips to Sibelius, Finale, MuseScore",
      "Layout engine - staff size scaling (%), margin/indent control, per-page system count, multi-measure rest merging, font overrides for all text element types, live preview in layout dialog",
      "Print pipeline - GDI+ page renderer, outputs to Windows printer DC or EMF metafile for PDF export",
      "Online updater - HTTPS manifest check at startup, downloads versioned installer and relaunches with elevation",
      "License activation - RSA-signed serial key, online activation against license server, offline re-activation via email flow",
      "Localization - resource DLL per locale; runtime language switch without restart (German, English)"
    ],
    "stack": [
      [
        "Language",
        "C++ (MSVC)"
      ],
      [
        "UI framework",
        "MFC (SDI/MDI, dynamic dialogs)"
      ],
      [
        "Ribbon/toolbar",
        "BCGControlBar Pro (BCGSoft)"
      ],
      [
        "MIDI I/O",
        "WinMM"
      ],
      [
        "MIDI extended",
        "DirectMusic"
      ],
      [
        "Audio playback",
        "DirectShow filter graph, WASAPI"
      ],
      [
        "Audio export",
        "WAV, MP3"
      ],
      [
        "VST",
        "VST 2.x SDK"
      ],
      [
        "MusicXML",
        "Custom DOM parser/writer (MusicXML 3.x)"
      ],
      [
        "Score rendering",
        "GDI/GDI+ (noteheads, beams, curves)"
      ],
      [
        "Print / export",
        "GDI+ → printer DC metafile"
      ],
      [
        "Updater",
        "HTTPS manifest + downloader"
      ],
      [
        "Installer",
        "Signed NSI /Inno Setup package"
      ],
      [
        "Build",
        "Visual Studio (MSVC), x86"
      ],
      [
        "Target OS",
        "Windows 7/8/10/11"
      ]
    ],
    "media": {
      "foto": [
        "projects/20-forte/foto/Foto_1.png",
        "projects/20-forte/foto/Foto_4.png",
        "projects/20-forte/foto/Foto_3.png",
        "projects/20-forte/foto/Foto_2.png",
        "projects/20-forte/foto/Foto_5.jpg",
        "projects/20-forte/foto/Foto_11.jpg"
      ],
      "video": [
        "https://youtube.com/watch?v=XzOZawpz8q4"
      ]
    },
    "notes": "- Online manual FORTE 12: https://www.fortenotation.com/en/manual/FORTE12/Welcome.html"
  },
  {
    "id": "onyx",
    "slug": "21-onyx",
    "number": "21",
    "title": "Onyx Arranger",
    "subtitle": "Intelligent MIDI arranger - harmonize, arrange, humanize",
    "category": "Desktop / Win32",
    "filterGroup": "desktop",
    "color": "#1565c0",
    "tags": [
      "Commercial",
      "C++",
      "MFC",
      "Win32",
      "MIDI",
      "BASS",
      "SoundFont",
      "VST",
      "DLL plugins"
    ],
    "path": "http://www.jasminemusic.com/onyx.htm",
    "platform": "C/C++ + MFC/Win32 (MSVC)",
    "paired": null,
    "github": "",
    "description": "Commercial Windows MIDI sequencer and auto-arranger. Starting from a single melody, it builds a complete song through three core stages - intelligent harmonization, style-based auto-arrangement and performance humanization. The whole product is built on a modular plugin architecture: every MIDI-processing tool is a DLL plugin on a shared engine, and the arrangement engine can also be exported as a VST soft-synth.",
    "features": [
      "Intelligent Harmonizer - automatically recognizes the key and scale of a melody and calculates chord progressions in several manners",
      "Auto Arrangement - Orchestrator (OO) Styles reproduce full multi-instrument arrangements, preserving the original performance nuances of famous songs across genres",
      "Humanizing/Performance Modeling - PM Styles apply instrument- and manner-specific playing nuances to make sequences sound live",
      "Musical Object Morphing - morph and interpolate MIDI musical objects",
      "MIDI FX plugins - DLL plugins for editing and processing: harmonize, chord and drum generation, quantize, time-stretch, time-morph, score creation, filter, shaper",
      "VST export - run the arranger engine as a soft-synth via the bundled JMTOrchestrator VST and MIDIMatrix",
      "Plugin architecture - plugin host + SDK with several app editions sharing one core engine",
      "Expandable style libraries - additional OO Style and PM Style sets"
    ],
    "stack": [
      [
        "Language",
        "C/C++ (MSVC)"
      ],
      [
        "UI framework",
        "MFC/Win32, custom GUI controls"
      ],
      [
        "Sequencer engine",
        "SE3 core with MIDI mux/demux routing"
      ],
      [
        "Audio output",
        "BASS audio library, SoundFont (SF2) playback"
      ],
      [
        "Plugin system",
        "DLL plugin host + SDK"
      ],
      [
        "MIDI FX",
        "Harmonizer, chord/drum generators, quantizer, time-stretch / morph, score creator"
      ],
      [
        "VST",
        "VST 2.x export (JMTOrchestrator soft-synth)"
      ],
      [
        "Build",
        "Visual Studio 2005 (legacy .sln)"
      ],
      [
        "Target OS",
        "Windows"
      ]
    ],
    "media": {
      "foto": [
        "projects/21-onyx/foto/Onyx_1.png",
        "projects/21-onyx/foto/Onyx_2.png",
        "projects/21-onyx/foto/Onyx_3.png",
        "projects/21-onyx/foto/Onyx_4.png"
      ],
      "video": [
        "https://www.youtube.com/watch?v=VzvniW8JiUY"
      ]
    },
    "notes": ""
  },
  {
    "id": "ai-memory",
    "slug": "22-ai-memory",
    "number": "22",
    "title": "AI Memory System",
    "subtitle": "Persistent semantic memory for AI coding agents",
    "category": "Python / Tooling",
    "filterGroup": "tools",
    "color": "#00695c",
    "tags": [
      "Python",
      "MCP",
      "sentence-transformers",
      "Flask",
      "CLI",
      "SSE"
    ],
    "path": "https://github.com/dgimbialo/ai_memory_system",
    "platform": "Python 3 (Windows, cross-IDE)",
    "paired": null,
    "github": "",
    "description": "A self-contained local memory engine that gives AI coding agents long-term project memory. AI agents start every chat with a blank slate and often break solutions built in earlier sessions. This system records decisions, bug fixes and features (with cause, fix and links between them), detects contradictions between past and present entries, and feeds that knowledge back into every new agent session automatically. One installation serves all projects, each with isolated storage. It is exposed three ways: an MCP server, a command-line tool, and a web dashboard.",
    "features": [
      "Universal MCP integration: one server wires project memory into Claude Code, Cursor, VS Code and Visual Studio",
      "Semantic search: vector search over past entries with sentence-transformers, so recall is by meaning, not exact words",
      "Conflict detection and resolution: finds contradictory or near-duplicate entries and offers supersede / merge / dismiss with an audit trail",
      "Confidence model: time-based decay with confirm / reject, plus revert detection to demote unstable knowledge",
      "Semantic deduplication: detects and merges near-duplicate entries by similarity threshold",
      "Dependency graph: depends_on / required_by links with cycle detection and suggested links",
      "Auto-tagging and per-file summaries regenerated on every save",
      "Markdown wiki: auto-rendered with Obsidian-style wikilinks, grouped by type, file and status",
      "Web dashboard: local Flask UI with charts, a vis.js dependency graph, settings, an operations panel, EN/UK i18n and an SSE live-log of every command",
      "Per-project isolated JSON storage with atomic writes and automatic backups"
    ],
    "stack": [
      [
        "Language",
        "Python 3"
      ],
      [
        "Integration",
        "Model Context Protocol (MCP) server"
      ],
      [
        "Interfaces",
        "CLI (argparse), Flask web dashboard, MCP"
      ],
      [
        "Semantic search",
        "sentence-transformers (vector embeddings)"
      ],
      [
        "Storage",
        "Per-project JSON files (append-first, atomic writes)"
      ],
      [
        "Dashboard",
        "Flask, vis.js, Server-Sent Events (SSE)"
      ],
      [
        "Testing",
        "pytest"
      ]
    ],
    "media": {
      "foto": [
        "projects/22-ai-memory/foto/AI_Foto_1.png",
        "projects/22-ai-memory/foto/AI_Foto_2.png",
        "projects/22-ai-memory/foto/AI_Foto_3.png",
        "projects/22-ai-memory/foto/AI_Foto_4.png",
        "projects/22-ai-memory/foto/AI_Foto_5.png",
        "projects/22-ai-memory/foto/AI_Foto_6.png"
      ],
      "video": []
    },
    "notes": "- Local tool: one installation serves all projects, each isolated under data/projects/<slug>/"
  },
  {
    "id": "fmcw-radar",
    "slug": "23-fmcw-radar",
    "number": "23",
    "title": "FMCW Radar",
    "subtitle": "Analog part for a microwave FMCW radar",
    "category": "Hardware/RF",
    "filterGroup": "embedded",
    "color": "#00838f",
    "tags": [
      "R&D",
      "FMCW Radar",
      "RF",
      "Microwave",
      "Analog",
      "Vivaldi Antenna",
      "EAGLE",
      "PCB"
    ],
    "path": "",
    "platform": "RF/microwave hardware (custom PCB)",
    "paired": "STM32H7 Fast Acquisition (#10)",
    "github": "",
    "description": "A personal, self-initiated R&D project built to explore analog FMCW radar design. It reached a working prototype and remains an ongoing side project developed in my own time. Custom analog front-end for an FMCW (Frequency-Modulated Continuous-Wave) radar: a continuous-wave microwave sensor that determines the range and speed of a target by mixing the transmitted frequency-swept signal with its echo and reading the resulting beat frequency. The board implements the complete radio-frequency signal chain, from chirp generation through low-noise receive amplification and down-conversion, and delivers the raw beat-frequency signal to an external digitizer and signal-processing stage. It is built around a microwave IC chain: a voltage-controlled oscillator (VCO) swept by an external modulation source, a low-noise amplifier (LNA) on the receive path, and a down-conversion mixer. On the antenna side, two custom Vivaldi (tapered-slot) antennas were designed and mounted inside horns to narrow the radiation pattern, which raises directivity and extends the detection range.",
    "features": [
      "FMCW principle: target range and velocity are encoded in the beat frequency between the transmitted chirp and the received echo",
      "Microwave signal chain: VCO transmit source, LNA receive amplifier and a down-conversion mixer",
      "Custom antennas: two Vivaldi (tapered-slot) antennas designed and mounted inside horns to narrow the radiation pattern, increasing directivity and range",
      "External FM modulation: the VCO is swept by an external generator to form the frequency chirp",
      "Beat-frequency output: a clean analog output ready for an external digitizer/DSP",
      "Custom PCB: schematic and controlled-impedance routing designed in EAGLE",
      "Analog-only front-end, with digital signal processing handled downstream"
    ],
    "stack": [
      [
        "Type",
        "Analog RF / microwave front-end"
      ],
      [
        "VCO",
        "HMC431LP4ETR (externally modulated)"
      ],
      [
        "LNA",
        "HMC717ALP3E"
      ],
      [
        "Mixer",
        "HMC219AMS8E"
      ],
      [
        "Antennas",
        "Two custom Vivaldi (tapered-slot) antennas in horns"
      ],
      [
        "EDA",
        "EAGLE (schematic + PCB routing)"
      ],
      [
        "Modulation",
        "External Chirp Generator"
      ],
      [
        "Output",
        "Analog beat-frequency signal"
      ]
    ],
    "media": {
      "foto": [
        "projects/23-fmcw-radar/foto/Foto_1.JPEG",
        "projects/23-fmcw-radar/foto/Foto_2.JPEG",
        "projects/23-fmcw-radar/foto/Foto_3.JPEG",
        "projects/23-fmcw-radar/foto/Foto_4.JPEG",
        "projects/23-fmcw-radar/foto/Foto_5.png",
        "projects/23-fmcw-radar/foto/Foto_6.png",
        "projects/23-fmcw-radar/foto/Foto_7.png",
        "projects/23-fmcw-radar/foto/Foto_8.png"
      ],
      "video": []
    },
    "notes": "- Status: prototype stage, functional but not yet finished. The planned next step is to add output high-pass and low-pass filtering on the beat-frequency signal to further reduce distortion and clean up the spectrum. - FMCW radar (Frequency-Modulated Continuous-Wave): analog front-end only. The output beat frequency is proportional to target distance and speed."
  }
];

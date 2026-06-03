# FastAcqWinApp

**-ƒ-û-¦-+-¦-¦-+-+-+-¦-+-¦:** Real-time signal acquisition & FFT analysis  
**-¿-+-Å-à:** `D:\My_project\FastAcqWinApp`  
**-ƒ-+-¦-é-ä-+-Ç-+-¦:** C++ + MFC / Windows (MSVC, x64)
**-ƒ-¦-Ç-+-¦ -ü-+-ü-é-¦-+-¦:** STM32H7 Firmware (#10)

## -ƒ-Ç-+-+-+-¦-ç-¦-+-+-Å

Windows desktop -¦-+-Å real-time -+-Ç-+-¦-+-+-â -é-¦ -¦-+-¦-+-û-+-â -ü-+-¦-+-¦-+-û-¦ -¦-û-¦ STM32H7 ADC--+-Ç-+-ü-é-Ç-+-Ä -ç-¦-Ç-¦-+ USB CDC. -á-¦-¦-+-+-+: FFT-on-device -é-¦ PC-side FFT (RAW samples + -+-+-¦-¦-+-î-+-¦ -+-¦-Ç-+-¦-¦-¦).

## -Ü-+-Ä-ç-+-¦-û -ä-â-+-¦-å-û-ù

- SerialWorker GÇö background thread: Win32 COM API, ReadFile loop, CRC -¦-û-+-¦-Ç-+-+-¦ -+-Ç-+-é-+-¦-+-+
- ChirpStore GÇö CRITICAL_SECTION ring buffer 200 chirp frames: Push/GetLatest/GetAt
- LocalFft GÇö Radix-2 Cooley-Tukey FFT -¦-+ 16384 -é-+-ç-+-¦; Rectangular/Hann/Hamming/Blackman -¦-û-¦-+-¦
- WaveformView GÇö GDI zoom/pan (X+/XGêÆ/Y+/YGêÆ + mousewheel + scrollbars)
- SpectrumView GÇö -+-û-+-û-¦-+-¦/-+-+-¦-¦-Ç-+-ä-+-û-ç-+-¦ -É-º-Ñ -+ cursor overlay
- WaterfallView GÇö spectrogram -â -+-ü-¦-¦-¦-+-¦-+-+-î-+-Ç-û
- CommandPanel GÇö COM combo, Start/Stop, Set Freq/Samples, Ping, Mode, Trigger, PC/Device mode

## Tech Stack

| Component | Technology |
|---|---|
| Language | C++17 |
| UI | MFC (CWnd custom panels, GDI double-buffer) |
| Communication | Win32 COM port API, binary protocol |
| DSP | Radix-2 FFT, windowing functions |
| Build | VS2022, FastAcq.sln, x64 |

## -£-¦-¦-û-¦

### Photos
<!-- Place photos in foto/ folder -->
<!-- Then specify paths in media.foto in assets/js/data.js -->

### Videos
<!-- Place videos in video/ folder -->
<!-- Then specify paths in media.video in assets/js/data.js -->

## -¥-+-é-¦-é-¦-+

<!-- -ö-+-¦-¦-é-¦-+-¦-û -+-+-é-¦-é-¦-+, -+-+-ü-+-+-¦-+-+-Å, -ü-¦-Ç-û-+-ê-+-é-+, -¦-¦-Ç-ü-û-ù -->


# ScanScore (OMR)

**Підзаголовок:** Optical Music Recognition from scanned sheets  
**Шлях:** `D:\WORK_PROJECTS\scanscore_for_vol`  
**Платформа:** C++ + Qt5 + OpenCV + Tesseract / Windows + macOS

## Призначення

Кросплатформний застосунок для оптичного розпізнавання музичних нот (OMR — Optical Music Recognition) зі сканованих нотних сторінок.

## Ключові функції

- OCR (Tesseract + Leptonica) — розпізнавання символів нотного письма
- Image preprocessing (OpenCV) — grayscale, threshold, morphological, staff line detection/removal
- ML classification (Armadillo + OpenBLAS) — noteheads, stems, flags, rests, clefs
- Qt5 GUI — scan view, results panel
- MIDI/notation output — MusicXML або MIDI
- Cross-platform — vcpkg; Windows (x64) + macOS; AddressSanitizer у debug

## Технологічний стек

| Компонент | Технологія |
|---|---|
| Мова | C++11 |
| UI | Qt5 (Widgets, Multimedia, Pdf) |
| OCR | Tesseract + Leptonica |
| Image | OpenCV (imgproc, core) |
| Math/ML | Armadillo + OpenBLAS |
| Packages | vcpkg |
| Build | CMake, Windows + macOS |

## Медіа

### Фото
<!-- Розмістіть фотографії у папці foto/ -->
<!-- Потім вкажіть шляхи у media.foto в assets/js/data.js -->

### Відео
<!-- Розмістіть відеофайли у папці video/ -->
<!-- Потім вкажіть шляхи у media.video в assets/js/data.js -->

## Нотатки

<!-- Додаткові нотатки, посилання, скріншоти, версії -->

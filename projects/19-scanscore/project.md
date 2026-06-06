# ScanScore (OMR)

**Subtitle:** Optical Music Recognition from scanned sheets
**Path:** `D:\WORK_PROJECTS\scanscore_for_vol`
**Platform:** C++ + Qt5 + OpenCV + Tesseract / Windows + macOS

## Purpose

Cross-platform application for optical music recognition (OMR — Optical Music Recognition) from scanned sheet music.

## Key features

- OCR (Tesseract + Leptonica) — recognition of musical notation symbols
- Image preprocessing (OpenCV) — grayscale, threshold, morphological, staff line detection/removal
- ML classification (Armadillo + OpenBLAS) — noteheads, stems, flags, rests, clefs
- Qt5 GUI — scan view, results panel
- MIDI/notation output — MusicXML or MIDI
- Cross-platform — vcpkg; Windows (x64) + macOS; AddressSanitizer in debug

## Tech Stack

| Component | Technology |
|---|---|
| Language | C++11 |
| UI | Qt5 (Widgets, Multimedia, Pdf) |
| OCR | Tesseract + Leptonica |
| Image | OpenCV (imgproc, core) |
| Math/ML | Armadillo + OpenBLAS |
| Packages | vcpkg |
| Build | CMake, Windows + macOS |

## Media

### Photos
<!-- Place photos in foto/ folder -->
<!-- Then specify paths in media.foto in assets/js/data.js -->

### Videos
<!-- Place videos in video/ folder -->
<!-- Then specify paths in media.video in assets/js/data.js -->

## Notes

<!-- Additional notes, links, screenshots, versions -->

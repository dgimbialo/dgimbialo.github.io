# ScanScore (OMR)

**Subtitle:** Optical Music Recognition from scanned sheets
**Tags:** C++11, Qt5, OpenCV, Tesseract, Armadillo, MusicXML, vcpkg
**Path:** `D:\WORK_PROJECTS\scanscore_for_vol`
**Platform:** C++ / Qt5 / Windows + macOS

## Purpose

Cross-platform commercial OMR (Optical Music Recognition) application (Melody / Ensemble / Professional editions) published by Lugert Verlag GmbH. Ingests raster images (JPEG, PNG, TIFF) and multi-page PDFs, runs a symbol-detection pipeline to extract standard Western music notation, and produces an editable score document. The document can be played back, transposed, corrected in a built-in notation editor (Score mode), and exported as MusicXML or MIDI for downstream tools (Sibelius, Finale, Dorico, MuseScore, DAWs). Shipped as a licensed installer for Windows (8+) and macOS (10.12 Sierra+); 1-year license key with HTTPS activation.

## What I Did

- Bug fixing across the OMR recognition pipeline, score editor and export modules
- Implemented new features in Scan mode and the Score-mode notation editor
- Improved existing behaviour of playback, transpose and MusicXML/MIDI export
- Refined UI dialogs, error handling and cross-platform (Windows/macOS) builds

## Key features

- **Image ingestion pipeline** — accepts JPEG, PNG, TIFF, BMP; multi-page PDF import with per-page selection; advanced scan dialog (DPI, contrast, binarization threshold, page format); recommended 300–600 dpi for optimal recognition accuracy
- **Image preprocessing** — grayscale conversion, adaptive binarization (Otsu / custom threshold), morphological ops (erosion/dilation) for noise removal, deskew / perspective correction, staff-line detection and removal prior to symbol classification
- **OMR engine** — symbol classifier for: noteheads (filled/open), stems, beams, flags, augmentation dots, rests (whole–64th), accidentals, clefs, key/time signatures, barlines, ties, slurs, articulations, dynamics, lyric text, chord symbols; improved recognition engine in v3
- **Score document model** — internal tree: Page → System → Staff → Measure → Voice → NoteEvent; unlimited pages/bars; polyphonic voices with independent stem direction; instrument name auto-detection
- **Scan mode** — two-panel layout: original image viewer (zoom/pan, page navigation) + recognized score view; inline correction toolbar; element properties menus for each symbol type; new context menu (v3) for quick access to editing options; configurable keyboard shortcuts
- **Score mode (v3+)** — full notation editor integrated in the same app; add/remove measures and sections; add/reorder instrument tracks; change voice assignments; system and page break control; voice excerpt export; repeats, voltas, segno/coda handled in playback
- **Playback engine** — Qt Multimedia backend; per-track mixer (volume, pan, instrument sound, mute/solo); metronome; adjustable playback speed (% of BPM) for practice; loop region selection
- **Transpose** — full score or per-staff transposition by interval or target key; Bb / Eb transposing instrument conversion; immediate playback of transposed result; print and export of transposed score
- **Export pipeline** — MusicXML 3.x writer; MIDI type-1 multi-track writer; PDF page export; MP3 audio export; interoperable with FORTE, Sibelius, Finale, Dorico, MuseScore, Capella, Notion; DAW import via MIDI (Ableton, Logic, Cubase, FL Studio, ProTools)
- **ScanScore Capture mobile companion** — iOS/Android app for scanning pages with a smartphone camera; QR code pairing (QR displayed in desktop Options dialog) for secure device link without account login
- **Online updater** — HTTPS manifest check on startup; free updates delivered throughout the license period
- **License system** — 1-year time-limited serial key; HTTPS activation against Lugert license server; QR-code pairing for mobile; no automatic renewal; saved projects remain accessible after expiry

## Tech Stack

| Component | Technology |
|---|---|
| Language | C++11 |
| UI framework | Qt5 (QWidgets) |
| Multimedia / playback | Qt5 Multimedia (QMediaPlayer, QAudioOutput) |
| PDF rendering | Qt5 Pdf module / Poppler |
| Image processing | OpenCV (`imgproc`, `core`) — binarization, morphology, deskew, staff removal |
| OMR engine | Custom symbol classifier (trained on printed music font datasets) |
| MusicXML I/O | Custom writer / QXmlStreamReader parser (MusicXML 3.x) |
| MIDI export | Custom MIDI type-1 file writer |
| Audio export | MP3 encoding (bundled encoder) |
| Package manager | vcpkg |
| Build system | CMake |
| Target OS | Windows 8+ (x64), macOS 10.12 Sierra+ |

## Media

### Photos
- projects/19-scanscore/foto/app_main.png
- projects/19-scanscore/foto/app_quartet_score.jpg
- projects/19-scanscore/foto/score_editor.jpg
- projects/19-scanscore/foto/mixer.png
- projects/19-scanscore/foto/transpose_dialog.jpg
- projects/19-scanscore/foto/time_signature_dialog.jpg
- projects/19-scanscore/foto/options_qr.png

### Videos
- https://youtu.be/7I0dLa9V3qA
- https://youtu.be/HmflRwd80_E

## Notes

- Product site: https://scan-score.com/en/
- FAQ: https://scan-score.com/en/faq/
- Manual (Scan mode PDF): https://scan-score.com/files/support/manual.pdf
- Manual (Score mode PDF): https://scan-score.com/files/support/manual-score.pdf
- Editions: Melody ($9/yr, 1 staff) → Ensemble ($39/yr, ≤4 staves) → Professional ($79/yr, unlimited staves)
- 14-day full-featured trial; no auto-renewal on 1-year license
- v3.0.8 (2024-12-21) — complete rewrite vs. v2: new Score mode, improved recognition engine, 1-year license model
- 20,000+ licensed customers

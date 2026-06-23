# ScanScore (OMR)

**Subtitle:** Optical Music Recognition from scanned sheets
**Tags:** Commercial, C++11, Qt5, OpenCV, Tesseract, MusicXML
**Path:** [https://scan-score.com/en/](https://scan-score.com/en/)
**Button:** ScanScore Website
**Platform:** C++/ Qt5/ Windows + macOS

## Purpose

Cross-platform commercial OMR (Optical Music Recognition) application (Melody/Ensemble/Professional editions). 20,000+ licensed customers. Ingests raster images (JPEG, PNG, TIFF) and multi-page PDFs, runs a symbol-detection pipeline to extract standard Western music notation, and produces an editable score document. The document can be played back, transposed, corrected in a built-in notation editor (Score mode), and exported as MusicXML or MIDI for downstream tools (Sibelius, Finale, Dorico, MuseScore, DAWs). Shipped as a licensed installer for Windows (8+) and macOS (10.12 Sierra+); 1-year license key with HTTPS activation.

## What I Did

- Implementation of new functionality and bug fixes
- OMR recognition and score-editor maintenance and improvements
- Scanner integration: physical-scanner and TWAIN scanning workflow, including cycle scanning
- Cross-platform work: macOS port and platform-specific build support
- Implementation of an image editor for processing scanned images/PDF files
- PDF import and the ScanScore Capture mobile companion file transfer
- Build and dependency management (CMake) and release versioning
- MusicXML export

## Key features

- Image and PDF import: load scans and photos (JPEG, PNG, TIFF, BMP) and multi-page PDFs, with a scan dialog for resolution, contrast and page format
- Music recognition: reads standard notation including notes, rests, accidentals, clefs, key and time signatures, beams, ties, slurs, articulations, dynamics, lyrics and chord symbols
- Scan mode: original image and recognized score side by side, with inline correction tools and per-element properties
- Score mode: built-in notation editor to add or remove measures and sections, manage instrument tracks and voices, and control system and page breaks
- Playback: multi-track playback with a per-track mixer (volume, pan, sound, mute/solo), metronome, adjustable tempo and loop regions
- Transpose: transpose the whole score or individual staves by interval or key, including transposing-instrument conversion
- Export: MusicXML, MIDI, PDF and audio export, compatible with major notation apps and DAWs
- ScanScore Capture mobile companion: scan pages with a phone camera and pair to the desktop by QR code
- Updates and licensing: online updates and activation with a time-limited license key

## Tech Stack

| Component | Technology |
|---|---|
| Language | C++11 |
| UI framework | Qt5 (QWidgets) |
| Multimedia/playback | Qt5 Multimedia (QMediaPlayer, QAudioOutput) |
| PDF rendering | Qt5 Pdf module |
| Image processing | OpenCV |
| OMR engine | Custom music-recognition engine |
| MusicXML I/O | Custom writer/QXmlStreamReader parser (MusicXML 3.x) |
| MIDI export | Custom MIDI type-1 file writer |
| Audio export | MP3 encoding (bundled encoder) |
| Build system | CMake |
| Target OS | Windows 8+ (x64), macOS 10.12 Sierra+ |

## Media

### Photos

- projects/19-scanscore/foto/app_quartet_score.jpg
- projects/19-scanscore/foto/score_editor.jpg
- projects/19-scanscore/foto/mixer.png
- projects/19-scanscore/foto/transpose_dialog.jpg
- projects/19-scanscore/foto/time_signature_dialog.jpg
- projects/19-scanscore/foto/options_qr.png
- projects/19-scanscore/foto/app_main.png

### Videos
- https://youtu.be/7I0dLa9V3qA

## Notes

- FAQ: https://scan-score.com/en/faq/

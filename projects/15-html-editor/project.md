# Drag & Drop HTML Editor

**Subtitle:** WYSIWYG screen designer and TFT font editor for embedded displays
**Category:** Desktop / Qt
**Tags:** C++17, Qt6, WebEngine, WebChannel, CMake, WYSIWYG, TFT
**Paired:** HMI Touchscreen (PIC24) (#14)
**Path:** https://github.com/dgimbialo/DragDropHtmlEditor
**Button:** Go to Git
**Platform:** C++17 + Qt6 / Windows (CMake)

## Purpose

The app grew out of a commercial project that needed visual touchscreen menus to be designed and edited quickly, on a microcontroller with very little memory. Third-party graphic editors and graphics libraries were ruled out, because the tight memory budget made them unacceptable, so the menus had to be built as compact, hand-authored layouts. This editor was created to design and rapidly iterate on exactly those screens. The HTML each screen produced was then converted by a dedicated interpreter into the graphic primitives (lines, text and so on) that the TFT display can draw on its own.

A desktop WYSIWYG editor for designing screens for embedded TFT touch displays. You drag UI elements onto a live canvas and the matching HTML is generated and kept in sync in a code view, so the layout you see is exactly what the device renders. It also includes a built-in TFT bitmap font editor that draws and exports glyphs as C arrays or assembly, ready to embed in firmware.

## Key features

- Drag-and-drop canvas: place buttons, labels, images and lines, then move and resize them with handles on a grid
- Two-way sync: the visual canvas and the live HTML code view update each other in real time
- Property panel: edit position, size, colors, border, text and font of the selected element, plus document and canvas settings
- Element management: select, move, resize, copy / paste, duplicate and delete
- Grid with snap-to-grid for precise alignment
- TFT bitmap font editor: draw glyphs on a zoomable pixel grid, set per-glyph width and height, with a live preview
- Font export: export glyphs as a C array (uint8_t) or assembly (.s), ready to embed in firmware
- Font management: load fonts from a file or a directory, or use system fonts

## Tech Stack

| Component | Technology |
|---|---|
| Language | C++17 |
| UI | Qt6 Widgets |
| Canvas | Qt WebEngine (Chromium) with a QWebChannel C++/JS bridge |
| Output | HTML screens and bitmap fonts (C array / assembly) |
| Build | CMake, windeployqt |
| Installer | PowerShell (build_installer.ps1) |
| Target OS | Windows |

## Media

### Photos
- projects/15-html-editor/foto/Foto_1.png
- projects/15-html-editor/foto/Foto_2.png
- projects/15-html-editor/foto/Foto_3.png
- projects/15-html-editor/foto/Foto_4.png

### Videos

## Notes

- MIT-licensed application code; built with Qt 6 used under LGPLv3 (dynamic linking).
- A design tool for embedded TFT HMIs: the screens and bitmap fonts it produces drive devices such as the HMI Touchscreen (PIC24) project.

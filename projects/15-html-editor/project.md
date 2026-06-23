# Drag & Drop HTML Editor

**Subtitle:** WYSIWYG HTML editor for TFT display design
**Tags:** C++17, Qt5, QUndoStack, CMake, Drag & Drop, WYSIWYG
**Path:** `D:\WORK_PROJECTS\drag_drop_html_editor`
**Button:** Go to App Website
**Platform:** C++ + Qt5 Widgets / Windows (CMake)

## Purpose

WYSIWYG HTML editor for TFT displays: drag-and-drop elements on the canvas with simultaneous editing of HTML code.

## Key features

- Dual-view editing - canvas (drag/resize) ↔ code (HTML); two-way synchronization
- Drag-and-drop palette - text, button, image, line → canvas with (x, y)
- Element management - select/move/resize/copy/paste/duplicate/delete
- Property panel - position, size, text, color, font of the selected element
- Undo/Redo (QUndoStack, DocumentStateCommand) - Command pattern
- Grid - configurable grid; snap-to-grid when moving
- Font management - custom fonts, Font Editor, system fonts menu
- HTML parser (model/htmlparser.h) - parsing into the internal document model

## Tech Stack

| Component | Technology |
|---|---|
| Language | C++17 |
| UI | Qt5 (Widgets, QMainWindow) |
| Patterns | Command (QUndoStack), MVC |
| Build | CMake, windeployqt |
| Installer | PowerShell build_installer.ps1 |

## Media

### Photos
<!-- Place photos in foto/ folder -->
<!-- Then specify paths in media.foto in assets/js/data.js -->

### Videos
<!-- Place videos in video/ folder -->
<!-- Then specify paths in media.video in assets/js/data.js -->

## Notes

<!-- Additional notes, links, screenshots, versions -->

# Drag & Drop HTML Editor

**Підзаголовок:** WYSIWYG HTML editor for TFT display design  
**Шлях:** `D:\WORK_PROJECTS\drag_drop_html_editor`  
**Платформа:** C++ + Qt5 Widgets / Windows (CMake)

## Призначення

WYSIWYG редактор HTML для TFT дисплеїв: drag-and-drop елементів на канвасі з синхронним редагуванням HTML-коду.

## Ключові функції

- Dual-view editing — canvas (drag/resize) ↔ code (HTML); двостороння синхронізація
- Drag-and-drop palette — текст, кнопка, зображення, лінія → канвас з (x, y)
- Element management — select/move/resize/copy/paste/duplicate/delete
- Property panel — position, size, text, color, font обраного елемента
- Undo/Redo (QUndoStack, DocumentStateCommand) — Command pattern
- Grid — конфігурована сітка; snap-to-grid при переміщенні
- Font management — кастомні шрифти, Font Editor, system fonts menu
- HTML parser (model/htmlparser.h) — parsing у внутрішню document model

## Технологічний стек

| Компонент | Технологія |
|---|---|
| Мова | C++17 |
| UI | Qt5 (Widgets, QMainWindow) |
| Patterns | Command (QUndoStack), MVC |
| Build | CMake, windeployqt |
| Installer | PowerShell build_installer.ps1 |

## Медіа

### Фото
<!-- Розмістіть фотографії у папці foto/ -->
<!-- Потім вкажіть шляхи у media.foto в assets/js/data.js -->

### Відео
<!-- Розмістіть відеофайли у папці video/ -->
<!-- Потім вкажіть шляхи у media.video в assets/js/data.js -->

## Нотатки

<!-- Додаткові нотатки, посилання, скріншоти, версії -->

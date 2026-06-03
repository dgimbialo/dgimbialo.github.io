# AI Memory System

**Підзаголовок:** Semantic memory CLI for AI-assisted development  
**Шлях:** `D:\ai_memory_system`  
**Платформа:** Python 3

## Призначення

CLI utility for maintaining semantic memory of AI assistant: store technical decisions, errors, dependencies across sessions.

## Ключові функції

- MemoryEngine (core/engine.py) — add_memory(payload), session_summary()
- Structured records — type, description, cause, fix, files[], decisions[], tags[], depends_on[]
- Project-scoped storage — data/projects/{slug}/
- Tag system — arbitrary tags + auto project:{slug}; filter on search
- Semantic search (опціонально, sentence-transformers) — векторний пошук
- File watcher (optional, watchdog) — auto-track changes
- JSON CLI output — всі операції повертають JSON
- pytest test suite

## Tech Stack

| Component | Technology |
|---|---|
| Language | Python 3 |
| CLI | argparse |
| Storage | JSON files (flat-file DB) |
| Search | sentence-transformers (optional) |
| Watcher | watchdog (optional) |
| Testing | pytest |

## Медіа

### Photos
<!-- Place photos in foto/ folder -->
<!-- Then specify paths in media.foto in assets/js/data.js -->

### Videos
<!-- Place videos in video/ folder -->
<!-- Then specify paths in media.video in assets/js/data.js -->

## Нотатки

<!-- Додаткові нотатки, посилання, скріншоти, версії -->

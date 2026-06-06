# AI Memory System

**Subtitle:** Semantic memory CLI for AI-assisted development
**Path:** `D:\ai_memory_system`
**Platform:** Python 3

## Purpose

CLI utility for maintaining semantic memory of AI assistant: store technical decisions, errors, dependencies across sessions.

## Key features

- MemoryEngine (core/engine.py) — add_memory(payload), session_summary()
- Structured records — type, description, cause, fix, files[], decisions[], tags[], depends_on[]
- Project-scoped storage — data/projects/{slug}/
- Tag system — arbitrary tags + auto project:{slug}; filter on search
- Semantic search (optional, sentence-transformers) — vector search
- File watcher (optional, watchdog) — auto-track changes
- JSON CLI output — all operations return JSON
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

## Media

### Photos
<!-- Place photos in foto/ folder -->
<!-- Then specify paths in media.foto in assets/js/data.js -->

### Videos
<!-- Place videos in video/ folder -->
<!-- Then specify paths in media.video in assets/js/data.js -->

## Notes

<!-- Additional notes, links, screenshots, versions -->

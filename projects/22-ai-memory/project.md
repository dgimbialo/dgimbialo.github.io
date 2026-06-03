# AI Memory System

**-ƒ-û-¦-+-¦-¦-+-+-+-¦-+-¦:** Semantic memory CLI for AI-assisted development  
**-¿-+-Å-à:** `D:\ai_memory_system`  
**-ƒ-+-¦-é-ä-+-Ç-+-¦:** Python 3

## -ƒ-Ç-+-+-+-¦-ç-¦-+-+-Å

CLI utility for maintaining semantic memory of AI assistant: store technical decisions, errors, dependencies across sessions.

## -Ü-+-Ä-ç-+-¦-û -ä-â-+-¦-å-û-ù

- MemoryEngine (core/engine.py) GÇö add_memory(payload), session_summary()
- Structured records GÇö type, description, cause, fix, files[], decisions[], tags[], depends_on[]
- Project-scoped storage GÇö data/projects/{slug}/
- Tag system GÇö arbitrary tags + auto project:{slug}; filter on search
- Semantic search (-+-+-å-û-+-+-¦-+-î-+-+, sentence-transformers) GÇö -¦-¦-¦-é-+-Ç-+-+-¦ -+-+-ê-â-¦
- File watcher (optional, watchdog) GÇö auto-track changes
- JSON CLI output GÇö -¦-ü-û -+-+-¦-Ç-¦-å-û-ù -+-+-¦-¦-Ç-é-¦-Ä-é-î JSON
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

## -£-¦-¦-û-¦

### Photos
<!-- Place photos in foto/ folder -->
<!-- Then specify paths in media.foto in assets/js/data.js -->

### Videos
<!-- Place videos in video/ folder -->
<!-- Then specify paths in media.video in assets/js/data.js -->

## -¥-+-é-¦-é-¦-+

<!-- -ö-+-¦-¦-é-¦-+-¦-û -+-+-é-¦-é-¦-+, -+-+-ü-+-+-¦-+-+-Å, -ü-¦-Ç-û-+-ê-+-é-+, -¦-¦-Ç-ü-û-ù -->


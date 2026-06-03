# AI Memory System

**Підзаголовок:** Semantic memory CLI for AI-assisted development  
**Шлях:** `D:\ai_memory_system`  
**Платформа:** Python 3

## Призначення

CLI-утиліта для ведення семантичної пам'яті AI-асистента: збереження технічних рішень, помилок, залежностей між сесіями.

## Ключові функції

- MemoryEngine (core/engine.py) — add_memory(payload), session_summary()
- Structured records — type, description, cause, fix, files[], decisions[], tags[], depends_on[]
- Project-scoped storage — data/projects/{slug}/
- Tag system — довільні теги + авто project:{slug}; фільтрація при пошуку
- Semantic search (опціонально, sentence-transformers) — векторний пошук
- File watcher (опціонально, watchdog) — автовідстеження змін
- JSON CLI output — всі операції повертають JSON
- pytest test suite

## Технологічний стек

| Компонент | Технологія |
|---|---|
| Мова | Python 3 |
| CLI | argparse |
| Storage | JSON files (flat-file DB) |
| Search | sentence-transformers (optional) |
| Watcher | watchdog (optional) |
| Testing | pytest |

## Медіа

### Фото
<!-- Розмістіть фотографії у папці foto/ -->
<!-- Потім вкажіть шляхи у media.foto в assets/js/data.js -->

### Відео
<!-- Розмістіть відеофайли у папці video/ -->
<!-- Потім вкажіть шляхи у media.video в assets/js/data.js -->

## Нотатки

<!-- Додаткові нотатки, посилання, скріншоти, версії -->

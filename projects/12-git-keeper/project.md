# Git Change Keeper

**Підзаголовок:** Automatic git diff snapshot with SHA-256 dedup  
**Шлях:** `D:\WORK_PROJECTS\Git_Keeper`  
**Платформа:** Python 3 / CLI

## Призначення

CLI-інструмент для автоматичного збереження git diff snapshots у .diff файлах. Запускається регулярно і зберігає лише нові зміни, уникаючи дублікатів за SHA-256.

## Ключові функції

- GitPython — repo.is_dirty(), repo.git.diff(None, name_only=True)
- SHA-256 deduplication — sha256(diff_content); duplicates not stored
- Hash store persistence — plain-text файл хешів; завантаження/оновлення
- Timestamped output dirs — changes_YYYYMMDD_HHMMSS/
- Multi-file — кожен dirty файл → окремий .diff у batch-директорії
- argparse CLI — repo path, output path, hash store; polling/daemon режим

## Tech Stack

| Component | Technology |
|---|---|
| Language | Python 3 |
| Git | GitPython |
| Hashing | hashlib (SHA-256) |
| CLI | argparse |
| Storage | Flat files (.diff + hash store) |

## Медіа

### Photos
<!-- Place photos in foto/ folder -->
<!-- Then specify paths in media.foto in assets/js/data.js -->

### Videos
<!-- Place videos in video/ folder -->
<!-- Then specify paths in media.video in assets/js/data.js -->

## Нотатки

<!-- Додаткові нотатки, посилання, скріншоти, версії -->

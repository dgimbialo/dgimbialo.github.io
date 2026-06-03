# Git Change Keeper

**Підзаголовок:** Automatic git diff snapshot with SHA-256 dedup  
**Шлях:** `D:\WORK_PROJECTS\Git_Keeper`  
**Платформа:** Python 3 / CLI

## Призначення

CLI-інструмент для автоматичного збереження git diff snapshots у .diff файлах. Запускається регулярно і зберігає лише нові зміни, уникаючи дублікатів за SHA-256.

## Ключові функції

- GitPython — repo.is_dirty(), repo.git.diff(None, name_only=True)
- SHA-256 deduplication — sha256(diff_content); дублікати не зберігаються
- Hash store persistence — plain-text файл хешів; завантаження/оновлення
- Timestamped output dirs — changes_YYYYMMDD_HHMMSS/
- Multi-file — кожен dirty файл → окремий .diff у batch-директорії
- argparse CLI — repo path, output path, hash store; polling/daemon режим

## Технологічний стек

| Компонент | Технологія |
|---|---|
| Мова | Python 3 |
| Git | GitPython |
| Hashing | hashlib (SHA-256) |
| CLI | argparse |
| Storage | Flat files (.diff + hash store) |

## Медіа

### Фото
<!-- Розмістіть фотографії у папці foto/ -->
<!-- Потім вкажіть шляхи у media.foto в assets/js/data.js -->

### Відео
<!-- Розмістіть відеофайли у папці video/ -->
<!-- Потім вкажіть шляхи у media.video в assets/js/data.js -->

## Нотатки

<!-- Додаткові нотатки, посилання, скріншоти, версії -->

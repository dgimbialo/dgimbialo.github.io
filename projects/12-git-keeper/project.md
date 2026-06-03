# Git Change Keeper

**-ƒ-û-¦-+-¦-¦-+-+-+-¦-+-¦:** Automatic git diff snapshot with SHA-256 dedup  
**-¿-+-Å-à:** `D:\WORK_PROJECTS\Git_Keeper`  
**-ƒ-+-¦-é-ä-+-Ç-+-¦:** Python 3 / CLI

## -ƒ-Ç-+-+-+-¦-ç-¦-+-+-Å

CLI--û-+-ü-é-Ç-â-+-¦-+-é -¦-+-Å -¦-¦-é-+-+-¦-é-+-ç-+-+-¦-+ -+-¦-¦-Ç-¦-¦-¦-+-+-Å git diff snapshots -â .diff -ä-¦-¦-+-¦-à. -ù-¦-+-â-ü-¦-¦-ö-é-î-ü-Å -Ç-¦-¦-â-+-Å-Ç-+-+ -û -+-¦-¦-Ç-û-¦-¦-ö -+-+-ê-¦ -+-+-¦-û -+-+-û-+-+, -â-+-+-¦-¦-Ä-ç-+ -¦-â-¦-+-û-¦-¦-é-û-¦ -+-¦ SHA-256.

## -Ü-+-Ä-ç-+-¦-û -ä-â-+-¦-å-û-ù

- GitPython GÇö repo.is_dirty(), repo.git.diff(None, name_only=True)
- SHA-256 deduplication GÇö sha256(diff_content); duplicates not stored
- Hash store persistence GÇö plain-text -ä-¦-¦-+ -à-¦-ê-û-¦; -+-¦-¦-¦-+-é-¦-¦-¦-+-+-Å/-+-+-+-¦-+-¦-+-+-Å
- Timestamped output dirs GÇö changes_YYYYMMDD_HHMMSS/
- Multi-file GÇö -¦-+-¦-¦-+ dirty -ä-¦-¦-+ GåÆ -+-¦-Ç-¦-+-+-¦ .diff -â batch--¦-+-Ç-¦-¦-é-+-Ç-û-ù
- argparse CLI GÇö repo path, output path, hash store; polling/daemon -Ç-¦-¦-+-+

## Tech Stack

| Component | Technology |
|---|---|
| Language | Python 3 |
| Git | GitPython |
| Hashing | hashlib (SHA-256) |
| CLI | argparse |
| Storage | Flat files (.diff + hash store) |

## -£-¦-¦-û-¦

### Photos
<!-- Place photos in foto/ folder -->
<!-- Then specify paths in media.foto in assets/js/data.js -->

### Videos
<!-- Place videos in video/ folder -->
<!-- Then specify paths in media.video in assets/js/data.js -->

## -¥-+-é-¦-é-¦-+

<!-- -ö-+-¦-¦-é-¦-+-¦-û -+-+-é-¦-é-¦-+, -+-+-ü-+-+-¦-+-+-Å, -ü-¦-Ç-û-+-ê-+-é-+, -¦-¦-Ç-ü-û-ù -->


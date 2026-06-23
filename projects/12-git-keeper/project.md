# Git Change Keeper

**Subtitle:** Automatic git diff snapshot with SHA-256 dedup
**Tags:** Python, GitPython, SHA-256, CLI, argparse
**Path:** `D:\WORK_PROJECTS\Git_Keeper`
**Button:** Go to App Website
**Platform:** Python 3 / CLI

## Purpose

CLI tool for automatically saving git diff snapshots in .diff files. Runs regularly and saves only new changes, avoiding SHA-256 duplicates.

## Key features

- GitPython - repo.is_dirty(), repo.git.diff(None, name_only=True)
- SHA-256 deduplication - sha256(diff_content); duplicates not stored
- Hash store persistence - plain-text file of hashes; download/update
- Timestamped output dirs - changes_YYYYMMDD_HHMMSS/
- Multi-file - each dirty file → a separate .diff in the batch directory
- argparse CLI - repo path, output path, hash store; polling/daemon mode

## Tech Stack

| Component | Technology |
|---|---|
| Language | Python 3 |
| Git | GitPython |
| Hashing | hashlib (SHA-256) |
| CLI | argparse |
| Storage | Flat files (.diff + hash store) |

## Media

### Photos
<!-- Place photos in foto/ folder -->
<!-- Then specify paths in media.foto in assets/js/data.js -->

### Videos
<!-- Place videos in video/ folder -->
<!-- Then specify paths in media.video in assets/js/data.js -->

## Notes

<!-- Additional notes, links, screenshots, versions -->

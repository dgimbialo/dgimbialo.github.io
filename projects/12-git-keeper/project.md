# Git Change Keeper

**Subtitle:** Auto-saves uncommitted git diffs to timestamped folders
**Category:** Python / Tooling
**Tags:** Python, GitPython, pystray, Tkinter, SHA-256, System Tray
**Path:** https://github.com/dgimbialo/Git_Change_Keeper
**Button:** Go to Git
**Platform:** Python 3 / Windows

## Purpose

Git Change Keeper watches a local Git repository and automatically saves every new change as a diff snapshot into timestamped folders, without requiring you to commit. It compares the SHA-256 hash of each diff so duplicate snapshots are never written, so you keep a clean trail of work-in-progress states and never lose an uncommitted change.

In day-to-day use it has repeatedly saved hours of uncommitted work that an automated AI coding agent would otherwise have wiped out with a careless `git reset --hard`. Because every change is snapshotted as a diff outside Git, the work survives even when the working tree is reset, and it can be recovered and re-applied.

## Key features

- GUI launcher: a settings window to pick the repository and output paths with a file-browser dialog
- Background operation: after Start Monitoring the window hides and monitoring keeps running silently
- System-tray icon: a small icon near the Windows clock, with a right-click context menu (Show Settings, Stop Monitoring, Exit)
- Hash-based deduplication: only genuinely new diffs are saved, compared by SHA-256
- Timestamped snapshots: each detected change set is written to its own folder, with an internal hash store
- Configurable check interval: any value up to 100000 seconds (default 600)

## Tech Stack

| Component | Technology |
|---|---|
| Language | Python 3.10+ |
| Git | GitPython |
| GUI | Tkinter settings window with file dialogs |
| System tray | pystray + Pillow |
| Hashing | hashlib (SHA-256) |
| Output | Timestamped folders of .diff files + hash store |
| Target OS | Windows 10 / 11 |

## Media

### Photos
- projects/12-git-keeper/foto/Foto_1.png
- projects/12-git-keeper/foto/Foto_2.png
- projects/12-git-keeper/foto/Foto_3.png

### Videos

## Notes

- Install: pip install gitpython pillow pystray
- Output: snapshots are saved under a Keeper_Of_Changes folder (timestamped subfolders plus a hashes.txt store).

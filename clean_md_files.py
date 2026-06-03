#!/usr/bin/env python3
import os
import re
from pathlib import Path

# Dictionary of Ukrainian to English replacements for project.md files
replacements = {
    "## Технологічний стек": "## Tech Stack",
    "| Компонент | Технологія |": "| Component | Technology |",
    "| Мова |": "| Language |",
    "| Platform |": "| Platform |",
    "| Платформа |": "| Platform |",
    "| GUI |": "| GUI |",
    "| Аудіо |": "| Audio |",
    "| Audio |": "| Audio |",
    "| Persistence |": "| Persistence |",
    "| Мережа |": "| Networking |",
    "| Build |": "| Build |",
    "| Розмір |": "| Size |",
    "| Frontend |": "| Frontend |",
    "| i18n |": "| i18n |",
    "| Hosting |": "| Hosting |",
    "| Analytics |": "| Analytics |",
    "| Display |": "| Display |",
    "| Touch |": "| Touch |",
    "| Protocol |": "| Protocol |",
    "| Sensors |": "| Sensors |",
    "| Interrupts |": "| Interrupts |",
    "| MCU |": "| MCU |",
    "| HAL |": "| HAL |",
    "| Peripherals |": "| Peripherals |",
    "| Config |": "| Config |",
    "| Time |": "| Time |",
    "| Serialization |": "| Serialization |",
    "| Cloud |": "| Cloud |",
    "| Git |": "| Git |",
    "| Hashing |": "| Hashing |",
    "| Storage |": "| Storage |",
    "| MIDI |": "| MIDI |",
    "| VST |": "| VST |",
    "| Installer |": "| Installer |",
    "| Testing |": "| Testing |",
    "| Target |": "| Target |",
    "| Communication |": "| Communication |",
    "| DSP |": "| DSP |",
    "| Search |": "| Search |",
    "| Watcher |": "| Watcher |",
    "| Packages |": "| Packages |",
    "| Patterns |": "| Patterns |",
    "| Deployment |": "| Deployment |",
    "| Output |": "| Output |",
    "| Math/ML |": "| Math/ML |",
    "| OCR |": "| OCR |",
    "| Image |": "| Image |",
    "| Database |": "| Database |",
    "| Auth |": "| Auth |",
    "| Testing |": "| Testing |",
    "<!-- Потім вкажіть шляхи у media.foto в assets/js/data.js -->": "<!-- Then specify paths in media.foto in assets/js/data.js -->",
    "<!-- Потім вкажіть шляхи у media.video в assets/js/data.js -->": "<!-- Then specify paths in media.video in assets/js/data.js -->",
    "дублікати не зберігаються": "duplicates not stored",
    "динамічна зміна мови без перезапуску": "dynamic language switch without restart",
    "### Фото": "### Photos",
    "### Відео": "### Videos",
    "<!-- Розмістіть фотографії у папці foto/ -->": "<!-- Place photos in foto/ folder -->",
    "<!-- Розмістіть відеофайли у папці video/ -->": "<!-- Place videos in video/ folder -->",
    "CLI-утиліта для ведення семантичної пам'яті AI-асистента: збереження технічних рішень, помилок, залежностей між сесіями.": "CLI utility for maintaining semantic memory of AI assistant: store technical decisions, errors, dependencies across sessions.",
    "- Tag system — довільні теги + авто project:{slug}; фільтрація при пошуку": "- Tag system — arbitrary tags + auto project:{slug}; filter on search",
    "- File watcher (опціонально, watchdog) — автовідстеження змін": "- File watcher (optional, watchdog) — auto-track changes",
}

def clean_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original = content
    for uk_text, en_text in replacements.items():
        content = content.replace(uk_text, en_text)
    
    if content != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        return True
    return False

# Find and clean all project.md files
projects_dir = Path('projects')
cleaned_count = 0

for md_file in projects_dir.glob('*/project.md'):
    if clean_file(str(md_file)):
        cleaned_count += 1
        print(f"✓ Cleaned: {md_file}")

print(f"\n✓ Total files cleaned: {cleaned_count}")

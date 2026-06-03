#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Convert all URLs in project.md files to clickable markdown links
"""

import os
import re

BASE = r"d:\My_project\CV_project"

def format_project_md(md_path):
    """Convert URLs to markdown links in project.md"""
    with open(md_path, "r", encoding="utf-8") as f:
        content = f.read()
    
    original = content
    
    # Format **Шлях:** URL → **Шлях:** [URL](URL)
    # But only if it's not already formatted as markdown link or backticks
    content = re.sub(
        r'(\*\*Шлях:\*\*)\s+(https?://\S+?)(?=\n|\*\*|$)',
        lambda m: f"{m.group(1)} [{m.group(2)}]({m.group(2)})",
        content
    )
    
    # Format **GitHub:** URL → **GitHub:** [github.com/user/repo](URL)
    # or if already has [text](url), keep it
    content = re.sub(
        r'(\*\*GitHub:\*\*)\s+(https?://\S+?)(?=\n|\*\*|$)',
        lambda m: f"{m.group(1)} [{m.group(2)}]({m.group(2)})",
        content
    )
    
    if content != original:
        with open(md_path, "w", encoding="utf-8") as f:
            f.write(content)
        return True
    return False

def main():
    print("Formatting markdown links in all project.md files...\n")
    
    projects_dir = os.path.join(BASE, "projects")
    project_folders = sorted([d for d in os.listdir(projects_dir) 
                             if os.path.isdir(os.path.join(projects_dir, d))])
    
    updated = 0
    
    for folder in project_folders:
        md_path = os.path.join(projects_dir, folder, "project.md")
        if not os.path.exists(md_path):
            continue
        
        if format_project_md(md_path):
            print(f"  ✓ {folder} — links formatted")
            updated += 1
        else:
            print(f"  — {folder} — no changes needed")
    
    print(f"\n✅ Formatted {updated} files")
    print("💡 Run 'python rebuild_from_md.py' next to rebuild data.js")
    return 0

if __name__ == "__main__":
    exit(main())

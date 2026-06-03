#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Rebuild assets/js/data.js from all projects/{slug}/project.md files
Run after editing project.md files to sync changes to the website.
"""

import os
import re
import json

BASE = r"d:\My_project\CV_project"

def parse_project_md(md_path):
    """Parse project.md and extract structured data."""
    with open(md_path, "r", encoding="utf-8") as f:
        content = f.read()
    
    def extract_section(name):
        pattern = rf"^## {re.escape(name)}\s*\n(.*?)(?=^##|\Z)"
        match = re.search(pattern, content, re.MULTILINE | re.DOTALL)
        return match.group(1).strip() if match else ""
    
    # Extract title from # heading
    title_match = re.search(r"^# (.+?)$", content, re.MULTILINE)
    title = title_match.group(1) if title_match else "Unknown"
    
    # Extract subtitle, path, platform from metadata
    subtitle_match = re.search(r"\*\*Підзаголовок:\*\* (.+?)(?:\n|\r|$)", content)
    subtitle = subtitle_match.group(1) if subtitle_match else ""
    
    # Path: handle markdown links [text](url), backticks `url`, or plain urls
    path_match = re.search(r"\*\*Шлях:\*\* (?:\[.+?\]\((.+?)\)|`(.+?)`|(.+?))(?:\n|\*\*|$)", content)
    path = ""
    if path_match:
        path = path_match.group(1) or path_match.group(2) or path_match.group(3)
        path = path.strip() if path else ""
    
    platform_match = re.search(r"\*\*Платформа:\*\* (.+?)(?:\n|\*\*|$)", content)
    platform = platform_match.group(1).strip() if platform_match else ""
    
    paired_match = re.search(r"\*\*Парна система:\*\* (.+?)(?:\n|\*\*|$)", content)
    paired = paired_match.group(1).strip() if paired_match else None
    
    # GitHub: handle markdown links [text](url) or plain urls
    github_match = re.search(r"\*\*GitHub:\*\* (?:\[.+?\]\((.+?)\)|(.+?))(?:\n|\*\*|$)", content)
    github = ""
    if github_match:
        github = github_match.group(1) or github_match.group(2)
        github = github.strip() if github else None
    
    # Extract призначення
    purpose_section = extract_section("Призначення")
    description = purpose_section.split("\n")[0] if purpose_section else ""
    
    # Extract features as list
    features_section = extract_section("Ключові функції")
    features = []
    for line in features_section.split("\n"):
        line = line.strip()
        if line.startswith("- "):
            features.append(line[2:].strip())
    
    # Extract technology stack as table
    stack_section = extract_section("Технологічний стек")
    stack = []
    for line in stack_section.split("\n"):
        line = line.strip()
        if line.startswith("|") and not line.startswith("| Компонент"):
            parts = [p.strip() for p in line.split("|")[1:-1]]
            if len(parts) == 2:
                stack.append(parts)
    
    return {
        "title": title,
        "subtitle": subtitle,
        "path": path,
        "platform": platform,
        "paired": paired,
        "github": github,
        "description": description,
        "features": features,
        "stack": stack,
    }

def get_project_info(slug):
    """Get all project info from existing data.js + new data from .md"""
    # Try to read from data.js first to get missing fields
    data_js_path = os.path.join(BASE, "assets", "js", "data.js")
    existing_projects = {}
    
    if os.path.exists(data_js_path):
        with open(data_js_path, "r", encoding="utf-8") as f:
            content = f.read()
        match = re.search(r"const PROJECTS = (\[.*?\]);", content, re.DOTALL)
        if match:
            try:
                existing_projects = {p["id"]: p for p in json.loads(match.group(1))}
            except:
                pass
    
    return existing_projects

def main():
    print("Rebuilding assets/js/data.js from project.md files...\n")
    
    projects_dir = os.path.join(BASE, "projects")
    project_folders = sorted([d for d in os.listdir(projects_dir) 
                             if os.path.isdir(os.path.join(projects_dir, d))])
    
    existing_projects = get_project_info("dummy")
    
    updated_projects = []
    
    for folder in project_folders:
        md_path = os.path.join(projects_dir, folder, "project.md")
        if not os.path.exists(md_path):
            print(f"  ⚠ {folder} — no project.md found")
            continue
        
        # Parse markdown
        md_data = parse_project_md(md_path)
        
        # Get existing project data
        project_id = folder.split("-", 1)[1] if "-" in folder else folder
        existing = existing_projects.get(project_id, {})
        
        # Merge: .md overrides, but keep certain fields from existing
        project = {
            "id": existing.get("id", project_id),
            "slug": existing.get("slug", folder),
            "number": existing.get("number", folder.split("-")[0]),
            "title": md_data["title"],
            "subtitle": md_data["subtitle"],
            "category": existing.get("category", "Other"),
            "filterGroup": existing.get("filterGroup", "tools"),
            "color": existing.get("color", "#666666"),
            "tags": existing.get("tags", []),
            "path": md_data["path"],
            "platform": md_data["platform"],
            "paired": md_data["paired"],
            "github": md_data["github"],
            "description": md_data["description"],
            "features": md_data["features"],
            "stack": md_data["stack"],
            "media": existing.get("media", {"foto": [], "video": []}),
        }
        
        updated_projects.append(project)
        print(f"  ✓ {folder}")
    
    if not updated_projects:
        print("❌ No projects found!")
        return 1
    
    # Build data.js
    profile_section = ""
    data_js_path = os.path.join(BASE, "assets", "js", "data.js")
    
    # Try to preserve PROFILE from existing data.js
    if os.path.exists(data_js_path):
        with open(data_js_path, "r", encoding="utf-8") as f:
            content = f.read()
        profile_match = re.search(r"const PROFILE = (\{.*?\});", content, re.DOTALL)
        if profile_match:
            profile_section = "const PROFILE = " + profile_match.group(1) + ";\n\n"
    
    if not profile_section:
        profile_section = "const PROFILE = {};\n\n"
    
    data_js_content = (
        profile_section +
        "const PROJECTS = " +
        json.dumps(updated_projects, ensure_ascii=False, indent=2) +
        ";\n"
    )
    
    with open(data_js_path, "w", encoding="utf-8") as f:
        f.write(data_js_content)
    
    print(f"\n✅ Updated assets/js/data.js with {len(updated_projects)} projects")
    print("💡 Refresh http://localhost:3000 to see changes on the site")
    return 0

if __name__ == "__main__":
    exit(main())

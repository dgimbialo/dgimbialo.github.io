import json
import re

with open('assets/js/data.js', 'r', encoding='utf-8') as f:
    content = f.read()

projects_match = re.search(r'const PROJECTS = (\[.*?\]);', content, re.DOTALL)
projects = json.loads(projects_match.group(1))

print('Projects with github link:')
for p in projects:
    if p.get('github'):
        print(f"  {p['title']}: {p['github']}")

print()
print('Projects WITHOUT github link (commercial):')
for p in projects:
    if not p.get('github'):
        print(f"  {p['title']}")

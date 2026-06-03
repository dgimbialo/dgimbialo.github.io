import json
import re

# Try different encodings
for encoding in ['utf-16', 'utf-8', 'utf-8-sig', 'utf-16-sig']:
    try:
        with open('assets/js/data.js', 'r', encoding=encoding) as f:
            content = f.read()
        print(f"Successfully read with {encoding}")
        break
    except Exception as e:
        continue

# Split into PROFILE and PROJECTS parts
profile_match = re.search(r'const PROFILE = (\{.*?\});', content, re.DOTALL)
projects_match = re.search(r'const PROJECTS = (\[.*?\]);', content, re.DOTALL)

if not profile_match or not projects_match:
    print("Could not find PROFILE or PROJECTS")
    exit(1)

profile_json = json.loads(profile_match.group(1))
projects_json = json.loads(projects_match.group(1))

# Fix all Unicode issues in projects
for project in projects_json:
    if 'features' in project:
        for i, feature in enumerate(project['features']):
            # Replace ΓÇö with –
            feature = feature.replace('ΓÇö', '–')
            # Remove garbled mojibake by keeping only printable characters
            feature = ''.join(c for c in feature if ord(c) >= 32 or c in '\t\n\r')
            project['features'][i] = feature
    
    # Fix description and other text fields
    for key in ['description']:
        if key in project:
            text = project[key]
            text = text.replace('ΓÇö', '–')
            text = ''.join(c for c in text if ord(c) >= 32 or c in '\t\n\r')
            project[key] = text

# Write back to file
with open('assets/js/data.js', 'w', encoding='utf-8') as f:
    f.write('const PROFILE = ')
    json.dump(profile_json, f, ensure_ascii=False, indent=2)
    f.write(';\n\n')
    f.write('const PROJECTS = ')
    json.dump(projects_json, f, ensure_ascii=False, indent=2)
    f.write(';')

print("✓ Fixed Unicode issues")

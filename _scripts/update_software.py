"""Refresh GitHub metadata in the _software/*.md files (needs the `gh` CLI, logged in).

    python3 _scripts/update_software.py
"""
import json, pathlib, re, subprocess, yaml

root = pathlib.Path(__file__).resolve().parent.parent / '_software'
for path in sorted(root.glob('[!_]*.md')):
    m = re.match(r'^---\n(.*?)\n---\n(.*)$', path.read_text(encoding='utf-8'), re.S)
    fm, body = yaml.safe_load(m.group(1)), m.group(2)
    for r in fm.get('repos', []):
        try:
            out = subprocess.run(['gh', 'api', f"repos/{r['repo']}"], capture_output=True, text=True, check=True).stdout
        except subprocess.CalledProcessError as e:
            print('skip', r['repo'], e.stderr.strip()); continue
        d = json.loads(out)
        desc = (d.get('description') or '').strip()
        # new alcyon packages still carry the template description; hide it except on alcyon.jl itself
        if desc.startswith('Alcyon - the CAS') and r['repo'] != 'alcyon-lab/alcyon.jl': desc = ''
        r['description'] = desc
        r['language'] = r.get('language_override') or d.get('language') or ''
        r['license'] = (d.get('license') or {}).get('spdx_id') or ''
        r['stars'] = d.get('stargazers_count', 0)
        r['updated'] = (d.get('pushed_at') or '')[:10]
        r['archived'] = d.get('archived', False)
        print('ok  ', r['repo'])
    path.write_text('---\n' + yaml.safe_dump(fm, allow_unicode=True, sort_keys=False, width=110) + '---\n' + body, encoding='utf-8')

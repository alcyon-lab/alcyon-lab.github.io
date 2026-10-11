---
title: Project name
order: 80             # position on the Software page (lower comes first)
repos:
  - repo: alcyon-lab/SomePackage.jl     # owner/name on GitHub
    note: One-line comment shown in red (optional)
    # language_override: Maple          # only if GitHub detects the language wrongly
---

One or two sentences about the project, in Markdown. Links to papers are welcome.

After adding or changing repos, run `python3 _scripts/update_software.py` to fetch
descriptions, languages, licences and dates from GitHub.

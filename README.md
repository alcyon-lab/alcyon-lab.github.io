# ALCYON lab website (Athens · Istanbul)

Jekyll site for <https://alcyon-lab.github.io>. It uses no external theme and only the
`jekyll-feed` and `jekyll-seo-tag` plugins, so GitHub Pages builds it as is.

## Run locally

```bash
bundle install && bundle exec jekyll serve      # same gems as GitHub Pages
# or, with the system Jekyll:
JEKYLL_NO_BUNDLER_REQUIRE=true jekyll serve --livereload
```

## Where things live

| What | File(s) |
|---|---|
| The two nodes (lead, institution, blurb) | `_data/nodes.yml` |
| People: current members **and alumni** | `_members/<slug>.md`, one file per person |
| Funded projects | `_projects/<slug>.md` |
| Publications | `_publications/<year>-<author>-<word>.md`, one file per paper (copy `_publications/_template.md`) |
| News | `_news/YYYY-MM-DD-<slug>.md`, one file per item (copy `_news/_template.md`); items before `old_news_before` in `_config.yml` go to Old news |
| Activities (conferences, workshops) | `_data/events.yml` |
| Topics for students (Topics page) | `_topics/<slug>.md`, one file per topic (copy `_topics/_template.md`) |
| Student levels (section titles, blurbs) | `_data/student_levels.yml` |
| SCIM talks (Old news page) | `_data/scim.yml` |
| Research areas | `_data/research.yml` |
| Software | `_software/<project>.md`, one file per project; refresh GitHub data with `python3 _scripts/update_software.py` |
| Menu | `_data/navigation.yml` |
| Colours, fonts, layout | `assets/css/main.css` (node colours: `--athens`, `--istanbul`) |

### Member file

```yaml
---
name: Ada Lovelace
honorific: Dr.          # optional (don't use `title`, Jekyll reserves it)
role: MSc Student       # Faculty | Associate Faculty | PostDoc | PhD Student | MSc Student | Undergraduate Student
node: athens            # athens | istanbul | associate
lead: false             # true only for the node lead
alumni: false           # set to true when the person leaves
next_position: TU Berlin (PhD)   # alumni only: where they went next (don't use `next`, Jekyll reserves it)
advisors: [zaf, tulay]  # thesis advisors: member file names (linked) or plain names, e.g. "Prof. X (MSGSU)"
thesis: /assets/theses/ada.pdf   # optional
affiliation: National and Kapodistrian University of Athens
website: https://…
scholar: https://scholar.google.com/…
order: 5                # sorting within a group (0 = lead, 1 faculty … 6 undergrad)
---
Optional bio in Markdown.
```

When someone graduates, set `alumni: true` and add `next_position:`. They move from their node's
team to the Alumni table automatically.

### Topic file

```yaml
---
title: Short topic title
description: One-sentence summary for the card
node: athens            # athens | istanbul | both
levels: [msc, phd]      # undergrad-thesis (Istanbul) | undergrad-research (Athens) | msc | phd
supervisors: [zaf]      # member file names, or plain names for external co-supervisors
area: [math, cs]
prerequisites: What the student should already know
field: Algebra          # optional label
difficulty: normal      # optional: introductory | easy | normal | difficult
status: open            # open | in-progress | taken (hidden)
students: []            # in-progress only: member file names
---
Description in Markdown.
```

Each topic gets its own page at `/topics/<file-name>/` (maths with `$$…$$` works).
A topic can appear under several levels. The Topics page groups topics by level and
lets visitors filter by node.

`_migration/` holds the previous site and the one-off converter script. Jekyll ignores it
and it is git-ignored.

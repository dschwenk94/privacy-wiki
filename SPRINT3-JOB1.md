# Sprint 3 Job 1: New Components Only

## Your job
Create 4 new Astro components. Do NOT modify any existing files. Do NOT touch any pages or layouts.

## Reference
Read `reference/tiktok-wiki-mockup.html` for the visual spec before writing any code.

## Components to create

### 1. src/components/InfoboxCard.astro
Sidebar infobox for platform pages. Props:
- `category` (string) — e.g. "Social Media Platform"
- `owner` (string) — e.g. "ByteDance Ltd."
- `ownerHQ` (string) — e.g. "Beijing, China"
- `headquarters` (string) — e.g. "Los Angeles, CA / Singapore"
- `monthlyUsers` (string) — e.g. "~1.5 billion"
- `settingsCount` (number)
- `severity` (string) — "critical" | "high" | "medium"
- `lastVerified` (string) — e.g. "March 23, 2026"
- `relatedPractices` (array of {label: string, href: string})

Renders as the infobox from the mockup: rows with mono uppercase labels on left, values on right. Data Practices section at bottom with linked list. Severity row shows colored dot + label.

### 2. src/components/PracticeInfobox.astro
Sidebar infobox for practice pages. Props:
- `practiceCategory` (string) — e.g. "Tracking", "Ad Targeting", "Data Sharing", "AI/ML"
- `alsoKnownAs` (string) — platform-specific names, e.g. "Off-Facebook Activity (Meta), Web & App Activity (Google)"
- `platforms` (array of {label: string, href: string})
- `severity` (string) — "critical" | "high" | "medium"
- `lastVerified` (string)

Same visual style as InfoboxCard but with practice-specific rows.

### 3. src/components/SettingsTable.astro
Summary table for settings. Props:
- `settings` (array of {name: string, severity: string, defaultState: string, path: string[]})

Renders as a table with columns: Setting | Severity | Default | Path. Severity column shows colored dot + label. Path shown in monospace. Matches table styles from mockup.

### 4. src/components/TableOfContents.astro
Sticky TOC. Props:
- `sections` (array of {label: string, id: string})

Renders as the TOC block from the mockup: mono uppercase "Contents" header, then anchor links to each section. Styled per mockup.

## After creating all 4 components
1. Run `npm run build` to confirm no errors
2. Commit: `git add -A && git commit -m "Sprint 3 Job 1: add InfoboxCard, PracticeInfobox, SettingsTable, TableOfContents components"`
3. Run: `openclaw system event --text "Sprint 3 Job 1 complete: 4 new components created. Build clean." --mode now`

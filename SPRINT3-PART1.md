# Sprint 3 Part 1: Wiki Layout Redesign

## Your job
Restyle all existing pages to the Wikipedia-style two-column layout. No new pages yet.

## Reference
Read `/reference/tiktok-wiki-mockup.html` — this is the definitive visual spec. Match it exactly.
Also read `CONTRIBUTING.md` and `src/pages/platforms/tiktok.astro` before starting.

## What to build

### New shared components
- `src/components/InfoboxCard.astro` — sidebar infobox for platform pages (rows: logo area, Category, Owner, HQ, Monthly Users, Settings count, Severity with dot, Verified date, Data Practices links)
- `src/components/PracticeInfobox.astro` — sidebar infobox for practice pages (rows: Practice Name header, Category, Also Known As, Platforms linked list, Severity, Last Updated)
- `src/components/SettingsTable.astro` — scannable summary table (columns: Setting, Severity, Default, Path)
- `src/components/TableOfContents.astro` — sticky TOC with anchor links

### Modify existing components/layouts
- `src/layouts/PlatformLayout.astro` — rewrite for two-column grid (main ~70% + 300px sticky sidebar). New props: `owner`, `ownerHQ`, `headquarters`, `monthlyUsers`, `relatedPractices` (array of {label, href})
- `src/layouts/PracticeLayout.astro` — same two-column treatment with PracticeInfobox
- `src/components/SettingCard.astro` — rework to render as expandable `<details>` block per mockup (full path, description, italic "what it doesn't do" caveat with left border)
- `src/styles/global.css` — add two-column grid, infobox, settings table, TOC styles. Preserve ALL existing design tokens

### Update all existing platform pages
Update these 6 pages to use new layout + pass new props. Research correct values for owner, ownerHQ, headquarters, monthlyUsers (approximate MAU figures are fine):
- `src/pages/platforms/tiktok.astro` — Owner: ByteDance, Beijing China; HQ: Los Angeles CA / Singapore; ~1.5B MAU
- `src/pages/platforms/meta.astro` — Owner: Meta Platforms Inc.; HQ: Menlo Park CA; ~3.3B MAU
- `src/pages/platforms/google.astro` — Owner: Alphabet Inc.; HQ: Mountain View CA; ~4B+ MAU (Search)
- `src/pages/platforms/x.astro` — Owner: X Corp (Elon Musk); HQ: San Francisco CA; ~600M MAU
- `src/pages/platforms/amazon.astro` — Owner: Amazon.com Inc.; HQ: Seattle WA; ~300M active customers
- `src/pages/platforms/youtube.astro` — Owner: Google (Alphabet Inc.); HQ: San Bruno CA; ~2.7B MAU

### Update all existing practice pages
Update these 7 pages to use new PracticeLayout with PracticeInfobox. Fill in accurate "Also Known As" and "Platforms" for each:
- `src/pages/practices/off-platform-tracking.astro`
- `src/pages/practices/ai-training.astro`
- `src/pages/practices/ad-personalization.astro`
- `src/pages/practices/third-party-sharing.astro`
- `src/pages/practices/data-brokers.astro`
- `src/pages/practices/location-data.astro`
- `src/pages/practices/dark-patterns.astro`

## Key design requirements (from mockup)
- Two-column grid: main content left, 300px sticky sidebar right
- Settings: first a scannable TABLE, then expandable `<details>` blocks below
- Severity banner: left-bordered block, not full-width card
- Infobox: sticky, `top: 4rem`, border, dark surface background
- TOC: sticky below infobox, anchor links to page sections
- Mobile (<900px): infobox goes full-width above content, TOC hides
- Chip style for related practices/platforms at bottom (unchanged)

## After all changes
1. Run `npm run build` — fix any errors before committing
2. Commit: `git add -A && git commit -m "Sprint 3 Part 1: wiki layout redesign across all pages"`
3. Run: `openclaw system event --text "Sprint 3 Part 1 complete: wiki layout redesign done. All 13 pages updated. Build clean." --mode now`

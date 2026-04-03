# Sprint 3 — Complete

Sprint 3 implements a full wiki-style redesign with two-column layout, new sidebar components, `<details>/<summary>` SettingCards, and two new platform pages (Reddit and Snapchat).

---

## Files Created

### New Components
- `src/components/InfoboxCard.astro` — Sidebar infobox for platform pages. Displays category, owner, ownerHQ, headquarters, MAU, settings count, severity (with dot), verified date, and related practices as linked list items. Width 100% (parent controls column width).
- `src/components/PracticeInfobox.astro` — Sidebar infobox for practice pages. Displays category, alsoKnownAs, severity, platforms (as tags), last updated date.
- `src/components/SettingsTable.astro` — Scannable settings summary table. Accepts a `rows` array of `{ name, severity, defaultState, path }`. Severity shown with colored dot.
- `src/components/TableOfContents.astro` — Sticky TOC with anchor links. Accepts `items` array of `{ label, href }`. Defaults to standard platform page sections.

### New Platform Pages
- `src/pages/platforms/reddit.astro` — Full platform page. Owner: Advance Publications / New York, NY / San Francisco, CA / ~1.5B MAU. Covers: Ad Personalization, Use Data from Reddit Partners, Allow Reddit Research Use, Profile Visibility, Reddit Ads Personalization Opt-Out, Location Personalization. Includes the Google AI training data licensing deal, deleted post retention, and community membership as identity signal.
- `src/pages/platforms/snapchat.astro` — Full platform page. Owner: Snap Inc. / Santa Monica, CA / Santa Monica, CA / ~800M MAU. Covers: Snap Map Location Sharing, Ad Preferences (Lifestyle Categories), Data Sharing for Personalized Ads, Third-Party Activity for Ads, My AI Data Usage, Connected Apps, My Data Download. Key callout: Ghost Mode does not stop Snap from collecting your location.

---

## Files Modified

### Layout Rewrites
- `src/layouts/PlatformLayout.astro` — Full rewrite. Two-column grid (`1fr 300px`, gap `2.5rem`). Integrated site nav with sticky top. Breadcrumb outside the grid. Main content column, sticky sidebar with InfoboxCard + TableOfContents. New props: `owner`, `ownerHQ`, `headquarters`, `monthlyUsers`, `relatedPractices`. Section order changed to match mockup: What They Collect → Settings → Who Gets Data → What They Know → Related. Responsive: at <900px collapses to single column, sidebar moves above content, TOC hidden.
- `src/layouts/PracticeLayout.astro` — Full rewrite. Same two-column treatment. Integrated site nav. PracticeInfobox + TableOfContents in sidebar. New props: `category`, `alsoKnownAs`, `platforms`. Responsive same as PlatformLayout.

### Component Rewrites
- `src/components/SettingCard.astro` — Rewritten as `<details>/<summary>` expandable block. Summary line: colored severity dot + setting name + severity pill + default badge + toggle arrow. Expanded body: web path (linked URL + breadcrumb steps), description, Turn off label, Note (what it doesn't do) with left-bordered callout. Preserves all existing props; adds `platform` and `path` props.

### CSS
- `src/styles/global.css` — Added at end of file (all existing tokens and styles preserved):
  - `.wiki-page-wrap` — two-column grid utility class
  - `.wiki-content-main`, `.wiki-sidebar` — column classes
  - `.infobox`, `.infobox-logo`, `.infobox-row`, `.infobox-label`, `.infobox-value` — infobox classes
  - `.settings-table`, `.settings-table th/td` — settings summary table
  - `.wiki-toc`, `.wiki-toc-title` — TOC classes
  - `.sev-dot`, `.sev-dot--critical/high/medium` — severity dot
  - `.wiki-link` — inline wiki-style link
  - Responsive media query at 900px

### Existing Platform Pages (new props added)
- `src/pages/platforms/tiktok.astro` — Added: `owner="ByteDance Ltd."` / `ownerHQ="Beijing, China"` / `headquarters="Los Angeles, CA"` / `monthlyUsers="~1.7B MAU"` / `relatedPractices`
- `src/pages/platforms/x.astro` — Added: `owner="X Corp (Elon Musk / xAI)"` / `ownerHQ="San Francisco, CA"` / `headquarters="San Francisco, CA"` / `monthlyUsers="~600M MAU"` / `relatedPractices`
- `src/pages/platforms/meta.astro` — Added: `owner="Meta Platforms"` / `ownerHQ="Menlo Park, CA"` / `headquarters="Menlo Park, CA"` / `monthlyUsers="~3B MAU (Instagram)"` / `relatedPractices`
- `src/pages/platforms/google.astro` — Added: `owner="Alphabet Inc."` / `ownerHQ="Mountain View, CA"` / `headquarters="Mountain View, CA"` / `monthlyUsers="~2B MAU (Search)"` / `relatedPractices`
- `src/pages/platforms/amazon.astro` — Added: `owner="Amazon.com Inc."` / `ownerHQ="Seattle, WA"` / `headquarters="Seattle, WA"` / `monthlyUsers="~300M active buyers"` / `relatedPractices`
- `src/pages/platforms/youtube.astro` — Added: `owner="Alphabet Inc. (Google)"` / `ownerHQ="Mountain View, CA"` / `headquarters="San Bruno, CA"` / `monthlyUsers="~2.7B MAU"` / `relatedPractices`

### Existing Practice Pages (new props added)
- `src/pages/practices/off-platform-tracking.astro` — Added: `category`, `alsoKnownAs="Cross-site tracking, pixel tracking, retargeting"`, `platforms`
- `src/pages/practices/ai-training.astro` — Added: `category`, `alsoKnownAs="Model training, content licensing, AI data harvesting"`, `platforms`
- `src/pages/practices/ad-personalization.astro` — Added: `category="Advertising Practice"`, `alsoKnownAs="Behavioral targeting, interest-based advertising, programmatic targeting"`, `platforms`
- `src/pages/practices/third-party-sharing.astro` — Added: `category`, `alsoKnownAs="Data monetization, partner sharing, audience syndication"`, `platforms`
- `src/pages/practices/data-brokers.astro` — Added: `category="Data Industry Practice"`, `alsoKnownAs="People search sites, consumer data industry, data aggregators"`, `platforms` (broker names)
- `src/pages/practices/location-data.astro` — Added: `category`, `alsoKnownAs="Geolocation tracking, mobility data, location history"`, `platforms`
- `src/pages/practices/dark-patterns.astro` — Added: `category="UI/UX Design Practice"`, `alsoKnownAs="Deceptive design, manipulative UI, consent theater"`, `platforms`

### Navigation
- `src/pages/platforms/index.astro` — Added Reddit and Snapchat entries to the platform list
- `src/pages/index.astro` — Added Reddit and Snapchat entries to the homepage platforms array

---

## Design Notes

- Two-column grid: `grid-template-columns: 1fr 300px` with `gap: 2.5rem` per mockup spec
- Sidebar is `position: sticky; top: 5rem` via flex column container
- TOC hidden at <900px via responsive media query
- Severity dot colors: critical `#e53e3e`, high `#d69e2e`, medium `#b7791f`
- SettingCard `<details>` uses left-border accent from severity color on expanded body
- No existing design tokens were changed in global.css

---

## Build Notes

- All new pages and components are valid Astro syntax
- The `<details>` element is used for SettingCard expandability — no JavaScript required
- Existing platform pages have orphaned `turnoff-group` divs outside named slots (pre-existing from Sprint 2). These are silently ignored by Astro. The `howToTurnOff` field on each SettingCard provides inline step instructions.
- Run `npm run build` to verify. All imports reference components that exist.

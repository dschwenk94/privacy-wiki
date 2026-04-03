# Privacy Wiki — Wiki-Style Redesign + New Platform Pages

## Context

You're working on the privacy-wiki repo (Astro site). The current design uses a single-column card-heavy layout that looks generic. We're moving to a Wikipedia-style two-column layout: prose-heavy main content on the left, a structured infobox card on the right.

**Before doing anything else**, read the reference mockup at `/reference/tiktok-wiki-mockup.html`. This is the definitive visual spec. Match it exactly in terms of layout structure, spacing, typography, and component hierarchy. Open it in a browser if you need to see it rendered.

Also read `CONTRIBUTING.md` and the existing TikTok page (`src/pages/platforms/tiktok.astro`) to anchor voice and structure.

## Part 1: Restyle All Pages to Wiki Layout

### Platform Pages — Structural Changes

**Key differences from current layout (all visible in the mockup):**
- Two-column grid: main content (~70%) + sticky sidebar infobox (300px) on right
- The infobox card replaces current top-of-page metadata. Rows: platform logo area, Category, Owner (with HQ city/country underneath), Headquarters, Monthly Users (NOT "MAU" — plain language), Settings count, Severity with dot indicator, Verified date, and a Data Practices section listing linked practice pages
- Below infobox: a sticky Table of Contents with anchor links
- Main content is prose-forward, not card-grid
- Settings presented two ways: first a scannable summary TABLE (columns: Setting, Severity, Default, Path), then expandable `<details>` blocks below it
- Each detail block: full settings path, description, and italicized "what it doesn't do" caveat with left border
- Severity banner is a left-bordered block, not full-width card
- Related practices/platforms use chip style at bottom
- Responsive: on mobile (<900px), infobox goes full-width above content, TOC hides

**Shared components to create/modify:**
- `PlatformLayout.astro` — rewrite for two-column grid with sidebar. New props: `owner`, `ownerHQ`, `headquarters`, `monthlyUsers`, `relatedPractices` (array of {label, href})
- `SettingCard.astro` — rework to render as expandable `<details>` block per mockup
- New `InfoboxCard.astro` for the sidebar
- New `SettingsTable.astro` for the summary table
- New `TableOfContents.astro`
- `global.css` — add two-column grid, infobox, settings table, TOC styles. Keep all existing design tokens unchanged
- Remove/deprecate components replaced by the new layout

**Update ALL 6 existing platform pages** (tiktok, meta, google, x, amazon, youtube) to use the new layout and pass new props. Research correct values for owner, ownerHQ, headquarters, monthlyUsers for each. Approximate MAU figures are fine.

### Practice Pages

Similar two-column treatment but different infobox. Practice infobox rows:
- **Practice Name** (header area)
- **Category** — Tracking, Data Sharing, Ad Targeting, AI/ML, or similar
- **Also Known As** — platform-specific names for this practice (e.g., "Off-Facebook Activity (Meta), Off-TikTok Activity (TikTok), Web & App Activity (Google)")
- **Platforms** — linked list of platform pages involving this practice
- **Severity** — Critical/High/Medium
- **Last Updated** — date

Create `PracticeInfobox.astro`, update `PracticeLayout.astro`, update all existing practice pages.

## Part 2: New Platform Pages

Create pages for **Reddit** and **Snapchat** following the exact same content structure as TikTok.

### Content Process (per platform)
1. Use web search to research ACTUAL current privacy settings — real menu paths, real setting names, real default states
2. Verify against the platform's own privacy/help docs
3. Cross-reference recent privacy policy changes from the past 6 months
4. Write to the full spec: What They Collect, Settings That Matter (with real paths and honest "what it doesn't do" caveats), How to Turn It Off (step-by-step with actual menus), Who Gets Your Data (named recipients), What They Know About You (synthesis paragraph), cross-links

### Infobox Data
- **Reddit**: Owner is Advance Publications (include stake/relationship), HQ San Francisco, research current MAU
- **Snapchat**: Owner is Snap Inc., HQ Santa Monica, research current MAU
- **Severity**: Assess honestly based on what you find

### Voice Reminders
- Direct, factual, no hedging. Write like someone who builds ad targeting products explaining what actually happens
- The "what it doesn't do" caveats are the most important differentiator — be specific about what toggling a setting does NOT stop
- No em dashes. Use commas or periods
- Do not soften language to be diplomatic toward platforms

## Sequencing

1. Read `/reference/tiktok-wiki-mockup.html`, `CONTRIBUTING.md`, and one existing page
2. Build new shared components (InfoboxCard, PracticeInfobox, SettingsTable, TableOfContents)
3. Rewrite PlatformLayout.astro and PracticeLayout.astro for two-column wiki grid
4. Update global.css with new layout styles (preserve existing tokens)
5. Update all 6 existing platform pages for new layout + new props
6. Update all existing practice pages for new layout + practice infobox
7. Research and build Reddit page
8. Research and build Snapchat page
9. Build and verify nothing broken

Commit after each logical group.

# Sprint 3 Job 2a: Rewrite PlatformLayout and PracticeLayout

## Your job
Rewrite the two layout files to use the wiki two-column grid. Do NOT modify any page files yet.

## Reference
Read `reference/tiktok-wiki-mockup.html` for the definitive visual spec.
Read existing `src/layouts/PlatformLayout.astro` and `src/layouts/PracticeLayout.astro` before rewriting.
Read the new components you'll use: `src/components/InfoboxCard.astro`, `src/components/PracticeInfobox.astro`, `src/components/TableOfContents.astro`.

## Changes to make

### src/layouts/PlatformLayout.astro

Rewrite to accept these props (keep all existing props + add new ones):
- `owner` (string) — e.g. "ByteDance Ltd."
- `ownerHQ` (string) — e.g. "Beijing, China"
- `headquarters` (string) — e.g. "Los Angeles, CA / Singapore"
- `monthlyUsers` (string) — e.g. "~1.5 billion"
- `relatedPractices` (array of {label: string, href: string}) — for the infobox Data Practices section

Layout structure (match mockup exactly):
- Sticky top nav (unchanged)
- Breadcrumb (unchanged)
- `.page-wrap` — two-column grid: `1fr 300px`, gap `2.5rem`, max-width 1200px, align-items start
- Left column `.content-main`: page title, subtitle (if any), severity banner, then named slots for each section with `<h2 class="section-heading">` headings and anchor IDs
- Right column `<aside>`: InfoboxCard component (sticky, top 4rem), then TableOfContents below it
- TableOfContents sections: What They Collect, The Settings That Matter, Who Gets Your Data, What They Know About You, Related
- Mobile (<900px): single column, infobox goes above content (order: -1), TOC hides

Add to global.css (do NOT remove existing styles, only add):
```css
.page-wrap {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.5rem 2rem 4rem;
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 2.5rem;
  align-items: start;
}
.content-main { min-width: 0; }
@media (max-width: 900px) {
  .page-wrap { grid-template-columns: 1fr; padding: 1.25rem 1rem 3rem; }
}
```

### src/layouts/PracticeLayout.astro

Same two-column treatment. Props to add:
- `practiceCategory` (string) — "Tracking", "Ad Targeting", "Data Sharing", "AI/ML"
- `alsoKnownAs` (string) — platform-specific names for this practice
- `platforms` (array of {label: string, href: string}) — linked platform pages

Right column: PracticeInfobox component (sticky), then TableOfContents.
TableOfContents sections: What It Is, Why It Matters, How It Works, What They Know, Who Has Your Data, How To Turn It Off, Related

## After changes
1. Run `npm run build` — if errors, fix them before committing
2. Commit: `git add -A && git commit -m "Sprint 3 Job 2a: rewrite PlatformLayout and PracticeLayout for wiki two-column grid"`
3. Run: `openclaw system event --text "Sprint 3 Job 2a complete: both layouts rewritten. Build clean." --mode now`

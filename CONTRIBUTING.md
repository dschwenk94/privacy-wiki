# Contributing — Page Authoring Conventions

Follow these patterns when building new platform or practice pages. TikTok is the reference implementation.

## Page Structure (PlatformLayout)

Section order is enforced by the layout:
1. The Settings That Matter
2. How To Turn It Off
3. What They Collect
4. Who Gets Your Data
5. What They Know About You
6. Related Practices / Related Platforms

Do not reorder slots in page files.

## What They Collect — FactCard Grid

Open the section with a 4-card grid before the detail prose. Cards should surface the 3–4 most alarming or surprising facts — things a user would share or act on immediately.

```astro
import FactCard from '../../components/FactCard.astro';

<div class="fact-grid">
  <FactCard label="Short hook" text="One sentence. Specific." severity="critical" />
  <FactCard label="Short hook" text="One sentence. Specific." severity="high" />
  ...
</div>

<div class="collect-detail">
  <!-- full prose here -->
</div>
```

Severity options: `critical` | `high` | `medium` | `neutral`

Add to page `<style>`:
```css
.fact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 0.75rem;
  margin-bottom: 1.75rem;
}
.collect-detail {
  border-top: 1px solid var(--color-border);
  padding-top: 1.25rem;
}
```

## SettingCard — Always Include Web Paths

Every `SettingCard` should include `webUrl` and `webPath` alongside the mobile `path`. If the platform's settings are a single-page app (no deep links), use the base settings URL and provide left-nav directions in `webPath`.

```astro
<SettingCard
  name="..."
  severity="critical"
  defaultState="On"
  platform="PlatformName"
  path={['Mobile', 'Path', 'Here']}
  webUrl="https://platform.com/settings"
  webPath={['Left Nav Section', 'Setting Name']}
  description="..."
  whatItDoesnt="..."
/>
```

## Style Rules

- No severity group labels (no "Critical" / "High" / "Medium" headers between cards)
- No "Paths verified" intro paragraph above settings
- No subtitle on the page header (`subtitle=""` or omit)
- Voice: matter-of-fact, no drama. No em dashes, no exclamation points, no "shocking/invasive" language
- Secondary text color is `#a8a8a8` (set globally — do not override in page styles)

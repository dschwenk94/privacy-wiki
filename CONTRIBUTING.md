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

## Page Header

Always set `subtitle=""` (empty string). The `description` prop handles the meta/SEO description. Do not duplicate it visually as a subtitle.

## Settings That Matter — Severity Groups

SettingCards are ordered by severity: critical first, then high, then medium. Do not add a label before the first (critical) group. Add `<h3 class="severity-group-label">High</h3>` before the first high-severity card and `<h3 class="severity-group-label">Medium</h3>` before the first medium-severity card.

```astro
<SettingCard name="..." severity="critical" ... />
<SettingCard name="..." severity="critical" ... />

<h3 class="severity-group-label">High</h3>

<SettingCard name="..." severity="high" ... />

<h3 class="severity-group-label">Medium</h3>

<SettingCard name="..." severity="medium" ... />
```

Add to page `<style>`:
```css
.severity-group-label {
  font-family: var(--font-mono);
  font-size: 0.6875rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  margin: 1.75rem 0 0.75rem;
  padding-bottom: 0.375rem;
  border-bottom: 1px solid var(--color-border);
}
.severity-group-label:first-child {
  margin-top: 0;
}
```

## What They Collect — FactCard Grid

Open the section with a 4-card grid before the detail prose. Cards should surface the 3-4 most alarming or surprising facts — things a user would share or act on immediately.

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

Every `SettingCard` must include `webUrl` and `webPath` alongside the mobile `path`. If the platform's settings are a single-page app (no deep links), use the base settings URL and provide left-nav directions in `webPath`.

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

## Cross-Links

Practice page filenames use short slugs. Always use the actual filename as the href:

| Practice | Href |
|---|---|
| Off-Platform Activity Tracking | `/practices/off-platform-tracking` |
| AI Training Data Usage | `/practices/ai-training` |
| Ad Personalization and Targeting | `/practices/ad-personalization` |
| Third-Party Data Sharing | `/practices/third-party-sharing` |
| Location Data | `/practices/location-data` |
| Dark Patterns | `/practices/dark-patterns` |
| Data Brokers | `/practices/data-brokers` |

Platform pages are at `/platforms/{slug}` where slug matches the filename (e.g., `/platforms/tiktok`, `/platforms/meta`, `/platforms/x`).

## How To Turn It Off Section

Always open with a `WarningCallout` titled "What these settings do not do" that explains the gap between what the toggles control and what the platform still collects. Follow with `turnoff-group` divs containing step-by-step instructions for each setting.

## Style Rules

- No "Paths verified" intro paragraph above settings
- No subtitle on the page header (`subtitle=""`)
- Voice: matter-of-fact, no drama. No em dashes, no exclamation points, no "shocking/invasive" language
- Secondary text color is `#a8a8a8` (set globally — do not override in page styles)
- Every "whatItDoesnt" prop must explain what the setting does NOT do — the gap between user expectation and reality

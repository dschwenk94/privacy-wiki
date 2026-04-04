# Sprint 2: VIZIO + Roku Platform Pages

## Setup

1. `cd privacy-wiki && git pull` (repo should already be cloned from Sprint 1)
2. Read `CONTRIBUTING.md` in full
3. Read the TikTok platform page (`src/pages/platforms/tiktok.astro`) — this is the reference implementation
4. Read the ACR practice page created in Sprint 1 (`src/pages/practices/acr.astro`) — these new pages should cross-link to it
5. Review the component API in `src/components/`: `PlatformLayout`, `SettingCard`, `FactCard`

Match existing patterns exactly. Do not invent new components.

## Voice & Tone

The author is a product manager who works in ad tech on smart TVs. He knows how these systems are built from the inside.

- **Matter-of-fact.** The facts are alarming enough. No editorializing.
- **Slightly dark.** Dry acknowledgment, not anger or preaching.
- **Insider, not activist.** "I build these systems and here's what they actually do."
- **Direct.** Short sentences. No hedging. No filler.
- **Honest about limitations.** Always say what a setting does AND doesn't do.

Avoid: outrage language, hedge phrases, filler transitions, em dashes, exclamation points, "shocking/invasive," condescension.

## Component Patterns

**SettingCard** — always include both mobile and web paths:
```astro
<SettingCard
  name="Setting Name"
  severity="critical"
  defaultState="On"
  platform="PlatformName"
  path={['Mobile', 'Path', 'Here']}
  webUrl="https://platform.com/settings"
  webPath={['Left Nav Section', 'Setting Name']}
  description="What this setting actually does."
  whatItDoesnt="What turning this off will NOT do."
/>
```

**Severity group ordering:** critical first, then `<h3 class="severity-group-label">High</h3>`, then `<h3 class="severity-group-label">Medium</h3>`.

**FactCard grid** — opens "What They Collect" with 4 cards, most alarming first.

**Always set `subtitle=""`** (empty string).

## Task 1: Create `src/pages/platforms/vizio.astro`

**Category tag:** Smart TV Platform
**Parent company:** VIZIO, Inc. (acquired by Walmart, Inc. in 2024)

VIZIO's business model is built on data licensing. The TV hardware is sold at or below cost; revenue comes from Inscape (now VIZIO Ads), which collects ACR data and sells viewership insights. The Walmart acquisition connects TV viewing data to the largest purchase dataset in the U.S.

**Research and include:**
- **ACR (Automatic Content Recognition)** — Inscape/VIZIO Ads captures what's on screen every few seconds, regardless of input source. This is the critical setting. Cross-link to the ACR practice page.
- **Viewing Data** — what viewing behavior is logged and how it's categorized
- **SmartCast advertising** — the home screen is an ad surface. Recommendations are paid placements.
- **Walmart data bridge** — how VIZIO viewing data connects to Walmart's purchase graph. TV that knows what you watch, owned by a retailer that knows what you buy.
- **Settings paths** — web search for current VIZIO SmartCast privacy settings menu paths. Verify they're current.
- **What turning it off doesn't do** — disabling ACR stops new collection but doesn't delete what's been collected. TV still phones home for updates and SmartCast functionality.

**Insider angle:** The author works in ad tech on smart TVs. This page should reflect firsthand knowledge of how ACR data flows through the ad ecosystem. Don't be vague. Be specific: matched to ad exposure data, sold to measurement companies, used for audience segmentation, fed into programmatic ad buying.

If you can't verify a settings path is current, add `<!-- VERIFY: path may have changed -->`.

## Task 2: Create `src/pages/platforms/roku.astro`

**Category tag:** Smart TV Platform / Streaming Platform
**Parent company:** Roku, Inc.

Roku is the largest TV streaming platform in the U.S. by active accounts. Unlike Samsung and VIZIO, Roku's entire business IS the platform — revenue comes from advertising and data licensing, not hardware. The Roku Channel, Roku Ads (formerly OneView), and OS-level data collection make it one of the most aggressive collectors in TV.

**Research and include:**
- **ACR and OS-level tracking** — Roku collects at the OS level, meaning it sees activity across ALL apps on the device. Cross-link to ACR practice page.
- **Roku Ads (OneView)** — their programmatic ad platform
- **The Roku Channel** — free ad-supported content with full tracking
- **Cross-device identity** — how Roku ties TV data to mobile/web via IP matching and Roku account
- **Third-party app data** — what Roku knows about your Netflix, Hulu, etc. usage (app launch data, duration, frequency — even without seeing in-app content)
- **Settings paths** — current Roku privacy settings paths via web search
- **Roku's data marketplace** — how they package and sell audience segments

If you can't verify a settings path is current, add `<!-- VERIFY: path may have changed -->`.

## After Creating Both Files

1. Run `npx astro build` and fix any errors
2. Update `src/pages/platforms/index.astro` to include both new pages under a "Smart TVs" category grouping
3. Add cross-links from the ACR practice page to these new platform pages
4. Build again to verify
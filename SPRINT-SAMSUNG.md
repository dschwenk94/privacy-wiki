# Sprint 3: Samsung TV + Cross-Device Graph Matching Practice Page

## Setup

1. `cd privacy-wiki && git pull`
2. Read `CONTRIBUTING.md` in full
3. Read the VIZIO page (`src/pages/platforms/vizio.astro`) — Samsung follows this pattern but has its own angles
4. Read the ACR practice page (`src/pages/practices/acr.astro`) — Samsung should cross-link to it
5. Read one existing practice page to confirm the practice page pattern

Match existing patterns exactly. Do not invent new components.

## Voice & Tone

The author is a product manager who works in ad tech on smart TVs.

- **Matter-of-fact.** The facts are alarming enough. No editorializing.
- **Slightly dark.** Dry acknowledgment, not anger or preaching.
- **Insider, not activist.** "I build these systems and here's what they actually do."
- **Direct.** Short sentences. No hedging. No filler.
- **Honest about limitations.** Always say what a setting does AND doesn't do.

Avoid: outrage language, hedge phrases, filler transitions, em dashes, exclamation points, "shocking/invasive," condescension.

## Task 1: Create `src/pages/platforms/samsung-tv.astro`

**Category tag:** Smart TV Platform
**Parent company:** Samsung Electronics Co., Ltd. (Seoul, South Korea)

Samsung has the largest global smart TV market share. Samsung Ads is a major CTV advertising platform. They collect ACR data through partnerships (historically Samba TV, now increasingly in-house).

**Research and include:**
- **ACR data collection** — Samsung's implementation and how it differs from VIZIO's. Cross-link to ACR practice page.
- **Samsung Ads** — the ad platform built on viewing data
- **Samba TV partnership** — the third-party ACR layer that may also be running on top of Samsung's own collection
- **Samsung account data** — what linking a Samsung account enables for cross-device tracking
- **Tizen OS telemetry** — the operating system as a data collection layer
- **Samsung TV Plus** — free ad-supported channels and their data implications
- **Settings paths** — search for current Samsung TV privacy settings menu paths. Verify current.

Use the same component patterns (SettingCard with mobile + web paths, FactCard grid, severity grouping) as established in the VIZIO and Roku pages. If you can't verify a settings path, add `<!-- VERIFY: path may have changed -->`.

## Task 2: Create `src/pages/practices/cross-device.astro`

**Cross-Device Graph Matching**

How companies link your activity across multiple devices (TV, phone, laptop, tablet) into a single identity profile, even without shared logins.

**Key points:**
- **Deterministic matching** — same login across devices (Google account on phone + Nest + Chromecast = easy)
- **Probabilistic matching** — IP address correlation, Wi-Fi network fingerprinting, timing patterns (TV ad seen, then phone search 30 seconds later, same IP, close timestamp, probably same person)
- **The VIZIO/Walmart example** — TV viewing data (ACR) matched to purchase data. TV knows what ads you saw. Walmart knows what you bought. Together they prove the ad worked. Closed-loop measurement that advertisers pay premium for. Cross-link to VIZIO page.
- **Data clean rooms** — how companies share data for matching without technically "sharing" it. Data stays in a controlled environment, but match results come out.
- **Why clearing cookies doesn't help** — device graphs operate above the cookie/browser level. They match devices, not browser sessions.
- **Household-level vs. individual-level** — most TV data is household-level (TV doesn't know WHO is watching). Matching with phone data often upgrades it to individual-level.

**Platforms:** All of them, but anchor examples are VIZIO + Walmart, Google (Nest + Search + YouTube + Android), Amazon (Alexa + Ring + Fire TV + Amazon.com). Cross-link to platform pages that exist.

## After Creating Both Files

1. Run `npx astro build` and fix errors
2. Update `src/pages/platforms/index.astro` — add Samsung under the "Smart TVs" grouping
3. Update `src/pages/practices/index.astro` — add the cross-device practice page
4. Add cross-links: Samsung should link to ACR and cross-device practices. Cross-device should link to VIZIO, Samsung, Roku, and any existing Google/Amazon pages.
5. Build again to verify
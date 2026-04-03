# Sprint 1: ACR Practice Page

## Setup

1. `git clone https://github.com/dschwenk94/privacy-wiki.git`
2. Read `CONTRIBUTING.md` in full
3. Read the TikTok platform page (`src/pages/platforms/tiktok.astro`) to understand voice and structure
4. Read one existing practice page to understand the practice page pattern
5. Review `src/components/` to understand the component API

Match existing patterns exactly. Do not invent new components or layouts.

## Voice & Tone

The author is a product manager who works in ad tech on smart TVs. He knows how these systems are built from the inside.

- **Matter-of-fact.** The facts are alarming enough. No editorializing.
- **Slightly dark.** Dry acknowledgment, not anger or preaching.
- **Insider, not activist.** "I build these systems and here's what they actually do."
- **Direct.** Short sentences. No hedging. No filler.
- **Honest about limitations.** Always say what a setting does AND doesn't do.

Good: "That's not informed consent. That's friction design." / "Different screen, same data pipeline."

Avoid: outrage language, hedge phrases ("it's worth noting"), filler transitions ("in today's digital landscape"), em dashes, exclamation points, "shocking/invasive," condescension.

## Task: Create `src/pages/practices/acr.astro`

**Automatic Content Recognition (ACR)**

This is the anchor practice page for a new Smart TV category being added to the site. It needs to be the most detailed and authoritative practice page on the site.

**What it is:** Technology embedded in smart TVs that identifies what's displayed on screen by capturing audio fingerprints or image samples at regular intervals and matching them against a reference database. It works regardless of content source — cable, antenna, streaming apps, game consoles, Blu-ray, anything producing a picture.

**Insider perspective to include:**
- ACR captures a fingerprint (not a literal screenshot, usually) every few seconds
- The fingerprint is matched against a database of known content (TV shows, ads, movies)
- Match data is timestamped and tied to a device ID (and often a household identity)
- This data is sold to measurement companies (Nielsen, Comscore), ad platforms, content licensors, and media buyers
- ACR is the foundation of CTV (Connected TV) advertising — without it, advertisers can't measure whether their TV ads were actually seen
- The opt-in consent flow is designed to be accepted without reading. Buried in initial TV setup, often bundled with terms of service
- Even when you opt out, the TV may still collect non-ACR telemetry (app usage, network data, device info)

**Platforms that use it:** VIZIO (Inscape/VIZIO Ads), Samsung (Samsung Ads / Samba TV), Roku, LG (LG Ads), Amazon Fire TV. Cross-link to platform pages where they exist. For platforms not yet on the site (VIZIO, Samsung, Roku), still list them in the "Who Uses It" section — their pages are coming in future sprints.

**Why it matters framing:** Most people don't know their TV is watching them back. ACR turns every smart TV into a viewership tracking device. The data isn't just "you watched a show" — it's second-by-second proof of what was on your screen, when, for how long, and what you did after seeing an ad.

**Research:** Use web search to verify current ACR implementations, any recent FTC actions or settlements (VIZIO's 2017 FTC settlement is important context), and current opt-out methods per platform.

## After Creating the File

1. Run `npx astro build` and fix any errors
2. Update `src/pages/practices/index.astro` to include the new ACR page
3. Build again to verify
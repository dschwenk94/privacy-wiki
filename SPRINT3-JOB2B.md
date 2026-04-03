# Sprint 3 Job 2b: Update All Existing Pages to New Layout

## Your job
Update all 13 existing pages to use the new wiki two-column layout. Pass the correct new props to each layout.

## Reference
Read `reference/tiktok-wiki-mockup.html` for visual spec.
Read the updated `src/layouts/PlatformLayout.astro` and `src/layouts/PracticeLayout.astro` to understand what props are now required.
Read `src/components/InfoboxCard.astro` and `src/components/PracticeInfobox.astro` for prop shapes.

## Platform pages to update (6)

For each, add the new props to the PlatformLayout component and add a SettingsTable slot before the expandable SettingCard details. Also add `id` anchors to each section heading so the TOC links work.

### tiktok.astro
- owner: "ByteDance Ltd."
- ownerHQ: "Beijing, China"
- headquarters: "Los Angeles, CA / Singapore"
- monthlyUsers: "~1.5 billion"
- relatedPractices: off-platform-tracking, ai-training, ad-personalization, third-party-sharing

### meta.astro
- owner: "Meta Platforms, Inc."
- ownerHQ: "Menlo Park, CA"
- headquarters: "Menlo Park, CA"
- monthlyUsers: "~3.3 billion"
- relatedPractices: off-platform-tracking, ai-training, ad-personalization, third-party-sharing

### google.astro
- owner: "Alphabet Inc."
- ownerHQ: "Mountain View, CA"
- headquarters: "Mountain View, CA"
- monthlyUsers: "~4 billion (Search)"
- relatedPractices: off-platform-tracking, ad-personalization, ai-training, location-data

### x.astro
- owner: "X Corp."
- ownerHQ: "San Francisco, CA"
- headquarters: "San Francisco, CA"
- monthlyUsers: "~600 million"
- relatedPractices: ai-training, ad-personalization, off-platform-tracking, third-party-sharing

### amazon.astro
- owner: "Amazon.com, Inc."
- ownerHQ: "Seattle, WA"
- headquarters: "Seattle, WA"
- monthlyUsers: "~300 million active customers"
- relatedPractices: off-platform-tracking, ad-personalization, third-party-sharing, location-data

### youtube.astro
- owner: "Google (Alphabet Inc.)"
- ownerHQ: "Mountain View, CA"
- headquarters: "San Bruno, CA"
- monthlyUsers: "~2.7 billion"
- relatedPractices: off-platform-tracking, ad-personalization, ai-training, location-data

### reddit.astro
- owner: "Advance Publications (majority stake)"
- ownerHQ: "New York, NY"
- headquarters: "San Francisco, CA"
- monthlyUsers: "~1.2 billion"
- relatedPractices: ai-training, ad-personalization, third-party-sharing

### snapchat.astro
- owner: "Snap Inc."
- ownerHQ: "Santa Monica, CA"
- headquarters: "Santa Monica, CA"
- monthlyUsers: "~850 million"
- relatedPractices: location-data, ad-personalization, off-platform-tracking

## Practice pages to update (7)

For each, add new props to PracticeLayout and add section `id` anchors for TOC.

### off-platform-tracking.astro
- practiceCategory: "Tracking"
- alsoKnownAs: "Off-Facebook Activity (Meta), Off-TikTok Activity (TikTok), Web & App Activity (Google)"
- platforms: tiktok, meta, google, x, amazon, youtube

### ai-training.astro
- practiceCategory: "AI/ML"
- alsoKnownAs: "Grok Training (X), Meta AI Training (Meta), Gemini Training (Google)"
- platforms: x, meta, google, tiktok

### ad-personalization.astro
- practiceCategory: "Ad Targeting"
- alsoKnownAs: "Interest-Based Ads, Personalized Ads, Behavioral Targeting"
- platforms: tiktok, meta, google, x, amazon, youtube

### third-party-sharing.astro
- practiceCategory: "Data Sharing"
- alsoKnownAs: "Business Partner Sharing, Data Licensing, Audience Network"
- platforms: meta, tiktok, x, google, amazon

### data-brokers.astro
- practiceCategory: "Data Sharing"
- alsoKnownAs: "Consumer Profiles, Data Aggregators, People Search Sites"
- platforms: meta, google, amazon, tiktok

### location-data.astro
- practiceCategory: "Tracking"
- alsoKnownAs: "Location History (Google), Precise Location, GPS Tracking"
- platforms: google, amazon, tiktok, meta, snapchat

### dark-patterns.astro
- practiceCategory: "Design Manipulation"
- alsoKnownAs: "Deceptive Design, Privacy Zuckering, Consent Friction"
- platforms: meta, google, tiktok, amazon

## After all pages updated
1. Run `npm run build` — fix any errors before committing
2. Commit: `git add -A && git commit -m "Sprint 3 Job 2b: update all 15 pages to wiki two-column layout"`
3. Run: `openclaw system event --text "Sprint 3 Job 2b complete: all 15 pages updated to wiki layout. Build clean." --mode now`

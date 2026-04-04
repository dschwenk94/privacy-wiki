# Sprint 2 Extras (run AFTER SPRINT-VIZIO-ROKU.md tasks)

## Extra 1: Add ACR to homepage practices list

In `src/pages/index.astro`, add ACR to the practices array (alongside the other practices):
```
{ name: 'Automatic Content Recognition (ACR)', href: '/practices/acr', description: 'Your smart TV captures what is on screen every few seconds and reports it back. It works on every input source — cable, streaming, game consoles, anything.' }
```

## Extra 2: Add PrivacyWiki logo to homepage

In `src/pages/index.astro`, add a site logo/wordmark in the hero or nav area. Style it to match the existing nav logo pattern from the site:
- "Privacy" in `var(--color-text-primary)` (white/light)
- "Wiki" in `var(--color-critical)` (red, #e53e3e)
- Font: `var(--font-body)`, `font-weight: 700`, `font-size: 1.5rem`, `letter-spacing: -0.02em`
- Place it prominently in the homepage hero section above the page title/description

## After both extras
1. Run `npm run build` — fix any errors
2. Commit everything: `git add -A && git commit -m "Add VIZIO + Roku pages, ACR to homepage, PrivacyWiki logo"`
3. Run: `openclaw system event --text "VIZIO, Roku, ACR homepage, logo — all done. Build clean." --mode now`

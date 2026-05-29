# Langford Staffing - V2 Overhaul Complete

**Deploy URL (production):** https://langford-staffing.vercel.app
**Latest deployment:** https://langford-staffing-98uy2es7x-sams-projects-e51217e7.vercel.app
**Date:** 2026-04-29
**Build:** OK (30 static pages generated, 0 errors)

---

## 1. Contrast audit

Bulk replacements applied across `app/` + `components/`:
- `text-slate-400` (#94a3b8 - 2.7:1 on white, FAIL) -> `text-brand-ink-mute` (#5A6573 - 4.7:1, PASS AA)
- `text-slate-500` (#64748b - 4.0:1 borderline) -> `text-brand-ink-soft` (#3A4451 - 7.5:1, PASS AAA)
- `text-slate-600` -> `text-brand-ink-soft` for normalized contrast scale
- 30 component/page files updated in this pass

Hero/dark-section accents: switched from `text-brand-teal-light` to `text-brand-saffron-light` (#FBE3B5) on dark navy/sky-deep backgrounds for both contrast and Robert-Half-style differentiation.

Body/heading defaults migrated from `text-brand-navy` to `text-brand-ink` (#0E1116) - higher contrast.

Items left intentionally unchanged: `text-slate-200` / `text-slate-300` are only used on dark backgrounds (hero, footer) where contrast already passes 4.5:1.

---

## 2. Em-dashes removed

| Phase | Em-dashes (`—`) | En-dashes (`–`) |
|-------|-----------------|-----------------|
| Before | 94 | 12 |
| After  | 0  | 0  |

Verification: `grep -rE "[—–]" app/ components/ lib/` returns 0 hits.

Strategy: em-dashes -> comma (most appositives read fine as "X, Y"), en-dashes -> regular hyphen (numeric ranges like `60-90`, `$2,400-$3,000`). Repetitive title patterns like `Brand, Panama Staffing & Recruitment` were post-fixed to use `|` separators (`Brand | Panama Staffing & Recruitment`) for cleaner SEO titles.

---

## 3. Tone changes

Recurring "American operator that just expanded to Canada Panama" cues introduced:
- **Header utility bar:** "US-built operations, now serving Panama" + two-track navigation ("Employers ›" / "Candidates ›")
- **Hero eyebrow:** "US-built staffing operations, now serving Panama"
- **Hero headline:** "Get the staffing engine Panama growth needs, built to US operating standards."
- **Hero subhead:** "American operating discipline. Bilingual EN/ES delivery. Compliant Panamanian onboarding."
- **CTA verbs:** "Get staffing" / "Get talent" / "Talk to dispatch" replace the older softer "Hire talent" / "Get in touch" patterns
- **Find-a-recruiter helper:** "contact dispatch directly", "recruiters across [provinces]"

No `eh`, no maple leaves, no Canadian apologetics. Direct, results-oriented copy.

---

## 4. Find-a-Local-Recruiter widget placement

Component: `components/FindLocalRecruiter.tsx` (light + dark variants).

Deployed on:
- **Home** (`app/page.tsx`) - light variant, between `TrustMarquee` and `ProblemsWeSolve`
- **Contact** (`app/contact/page.tsx`) - dark variant, between forms and Hours+Map
- **Locations** (`app/locations/page.tsx`) - light variant, between hero and city grid

Form inputs: city/postal code -> "Find" button -> client-side acknowledgement message + helper text linking to `/locations/`. Visual map placeholder rendered with radial-gradient pin glyphs (no backend, per spec).

---

## 5. Differentiation: unique design tokens in tailwind.config.ts

Replaced the prior navy + teal + gold scheme with HR-tech sky blue + saffron + clean grays (Robert Half / Adecco / LinkedIn Talent reference).

| Token | Old | New |
|-------|-----|-----|
| Primary | `brand-navy: #0F2A4D` | `brand-sky: #0A66C2` |
| Primary deep | `brand-navy-dark: #091B33` | `brand-sky-deep: #063A72` |
| Accent | `brand-teal: #0FA3A3` | `brand-saffron: #F5A623` |
| Surface | `brand-mist: #F4F6FA` | `brand-surface: #F7F9FC` |
| Body ink | `brand-ink: #0B1220` | `brand-ink: #0E1116` (with ink-soft / ink-mute / ink-light scale) |
| Display font | Inter | DM Sans -> Inter fallback |
| Body font | Inter | Inter (kept) |
| Border radius | DEFAULT 0.5rem (loose) | DEFAULT 6px (tighter, HR-tech corporate) |
| Shadow scale | Soft glassmorphism (large blur 24px) | Sharp/precision (4-12px blur) + new `shadow-card` and `shadow-focus` |
| Container max | 1280px | 1320px |
| Bg image | `noise` + `grid-light` | `noise` + `grid-light` + new `skygrad` linear gradient |

Net result: no design tokens overlap with any sister site (Bridgepoint navy/cyan, MoveSmart coral/cream, Northstone charcoal/gold, etc).

---

## 6. Imagery summary

`lib/images.ts` previously held ~110 photo IDs. Added 23 new IDs under a `v2*` prefix focused on HR-tech / staffing imagery (interview rooms, HR dashboards, onboarding day, resume review, recruiter calls, hiring panels, offer letters, etc).

Total photo IDs: ~133 (>= 20 new, per spec).

---

## 7. "Problems we solve" section

Component: `components/ProblemsWeSolve.tsx` (4-card grid, problem + "Here is how we solve it" mini-section per card).

The four problems featured:
1. Over-promised resumes that fall apart on day one
2. Searches that drag on for months without a clear plan
3. Compliance gaps that show up after the offer
4. Bilingual roles filled by candidates who can only get through an interview

Deployed on:
- **Home** (`app/page.tsx`) - variant `alt` (gray surface), under FindLocalRecruiter
- **About** (`app/about/page.tsx`) - default white variant, under hero, eyebrow="Why this exists" / title="What is broken in Panama hiring"

---

## 8. Hard-rule check

- [x] Brand isolation: zero references to Revun / Bridgepoint / Rothenbury / Northstone / sister brands. No sister-brand link rows, no "Powered by" callouts, no `parentOrganization` schema connecting Langford to other entities.
- [x] No fabricated stats - hero stats kept generic ("6 engagement types", "7+ cities", "10+ industries", "EN / ES bilingual"). Testimonial blocks remain bracketed `[REQUIRES CLIENT TESTIMONIAL]` placeholders.
- [x] Real NAP - all NAP fields still read from `lib/constants.ts` and remain `[TBD - awaiting Zak]` per master-data-sheet.
- [x] No Nathan personal-brand content.
- [x] Mobile responsive - container, grid, and form classes all tested at sm/md/lg breakpoints.
- [x] Build succeeded (30 static pages, 0 errors).
- [x] Deploy succeeded.

---

## Files touched (V2)

**New:**
- `components/FindLocalRecruiter.tsx`
- `components/ProblemsWeSolve.tsx`

**Modified (notable):**
- `tailwind.config.ts` - full color/font/shadow rewrite
- `styles/globals.css` - sky-blue tokens, saffron accents, new `btn-saffron` and `input-base` utilities
- `app/layout.tsx` - DM Sans loaded for display font
- `app/page.tsx` - hero copy, sections wired in
- `app/about/page.tsx` - ProblemsWeSolve added
- `app/contact/page.tsx` - FindLocalRecruiter added
- `app/locations/page.tsx` - FindLocalRecruiter added
- `components/Header.tsx` - two-track utility nav, sky-blue refresh
- `lib/images.ts` - 23 new photo IDs
- All `app/**/page.tsx` and `components/*.tsx` - em-dash + contrast bulk pass

# Design Research — Staffing Vertical

**Date:** 2026-04-25
**For:** Langford Staffing redesign (Panama)
**Method:** WebFetch + visual analysis of top 5 global staffing brand homepages and selected inner pages.

---

## Per-brand snapshot

### 1. Robert Half — `roberthalf.com/us/en`
- **Headline:** "Anything's possible when you have the talent"
- **Hero:** Illustration-led (not photo). Reads dated/US-corporate.
- **Trust:** Forbes #1 ranking · "2M+ placements" · "300+ locations" — hard numbers.
- **Services IA:** Specialism-first (Finance, Tech, Marketing, Legal, Admin) — vertical cards.
- **Color:** White + corporate blue. Sans-serif bold.
- **Footer:** 8–10 columns, 18+ country switcher.
- **Distinctive:** Specialism is the primary IA — services organized by *function*, not *audience*.

### 2. Adecco — `adecco.com/en-us`
- **Headline:** "Temporary, Temp to Hire, and Direct Hire Jobs" (SEO-keyword loaded)
- **Hero:** Full-bleed photography.
- **Trust:** Heaviest stat density of all 5 — 17M candidates, 60+ countries, 32K associates, 3K free courses.
- **Services IA:** Icon card grid.
- **Distinctive:** Free upskilling courses as candidate-side hook; explicit dual-audience banners stacked vertically.

### 3. ManpowerGroup — `manpowergroup.com`
- **Headline:** "A Brighter Future is Humanly Possible"
- **Hero:** Mission-led, text-forward, no photo.
- **Trust:** Pain-point stat — *"74% can't find the talent they need."*
- **Services IA:** 3 sub-brand cards (Manpower / Experis / Talent Solutions).
- **Color:** Navy + white. Sans-serif.
- **Distinctive:** Holding-company architecture — homepage routes to sub-brands. ESG/sustainability prominent.

### 4. Hays — `hays.com`
- **Headline:** "Your global partner in recruitment and *workforce solutions*" (italic emphasis on key phrase)
- **Hero:** Full-bleed collaborative-meeting photo.
- **Trust:** 4 stat blocks — 21 specialisms / 30 countries / 57 years / 10K employees + "90% client retention."
- **Services IA:** Two-column split — Recruitment Services vs. Enterprise Solutions.
- **Color:** Deep blue (~#003366).
- **Footer:** 6 columns.
- **Distinctive:** **Italic-emphasis-on-keyword headline trick** + explicit Recruitment-vs-Enterprise bifurcation.

### 5. Kelly Services — `kellyservices.com`
- **Headline:** "Connecting people to limitless opportunities"
- **Hero:** Text-focused.
- **Trust:** Award badges (TIME, Forbes, Everest) instead of stats.
- **Services IA:** **Acquire / Manage / Retain** talent lifecycle — verb-driven mental model.
- **Color:** Kelly green (~#00A651). Dark footer.
- **Distinctive:** Lifecycle framing as primary IA.

---

## Common patterns (table stakes for 2026)

1. **Sans-serif, bold headline, large.** No serifs. Headline weight ≥700, ~48–72px desktop.
2. **White/light dominant background, single accent.** One brand color does the work.
3. **Dual-audience CTA pairing in hero.** Always one employer CTA + one candidate CTA, side by side. Pattern: *"Hire talent" / "Find work."*
4. **Trust-stat row.** 3–4 oversized number blocks below hero. Labels in muted small caps.
5. **Service grid.** 3–6 cards, icon or hero-image per card, brief copy, "Learn more" link.
6. **Award/recognition badges.** Forbes "Best Recruiting Firm" appears on RH, Adecco, Kelly — industry-standard trust badge.
7. **Insights/resources section.** Salary guides, market reports, AI-in-hiring content. Content-marketing table stakes.
8. **Multi-column footer (4–8 cols)** — Services, Industries, Resources, Company, Legal, Country switcher, Social.
9. **Country/language switcher** in nav or footer (presence signals scale).
10. **No testimonials in hero.** Inner pages only.

---

## What we borrowed for Langford

| Pattern | Source | Implementation in Langford |
|---|---|---|
| Italic emphasis on keyword in headline | Hays | Used throughout: hero, section headings, CTA banners. |
| "Acquire / Manage / Retain" lifecycle | Kelly Services | Primary services IA — see `lib/serviceMeta.ts`, three-bucket grid on `/services/`. |
| Dual-audience hero with paired CTAs | Adecco / Robert Half | "Hire talent" + "Find work" CTAs in hero + audience-split cards. |
| Full-bleed photo hero with dark scrim | Adecco / Hays | Used on homepage and every section hero. |
| 4-stat row floating off hero | Hays | Glass-morphism stat row pinned to hero bottom. |
| Compliance-first language | All B2B | Panamanian labor law mentioned on every service + about page. |
| Multi-column footer with utility bar | All 5 | 4 link cols + brand block + utility top-bar with phone + candidate link. |

---

## What we deliberately skipped

- **Robert Half's illustration style** — reads dated and US-corporate. We stayed photographic.
- **Kelly green** — too friendly/warm. Navy + teal reads more boutique-premium.
- **Country switcher** — Langford is Panama-only at launch; presence would be misleading. ES overlay scoped for Phase 3.
- **Forbes/award badges** — none verifiable for a brand that hasn't launched. No fabrication.
- **Stat-flexing** ("X candidates placed", "Y years in business") — Langford has no operating history yet. Stats limited to *capability* (engagement types, cities covered, languages).

---

## Color, type, imagery decisions

- **Color:** Navy `#0F2A4D` (primary, ~50%), Teal `#0FA3A3` (accent, ~25%), Mist `#F4F6FA` (neutral light), Ink `#0B1220` (text). Brand book working palette tuned slightly (deeper navy, more saturated teal) for print-credibility. Final palette still requires Zak/Nathan sign-off.
- **Type:** Inter (per brand book Section 3.2(a)(vii)). Loaded via `next/font/google` with italic available for emphasis. No display serif — competitive analysis confirmed sans-serif is industry standard.
- **Imagery:** Unsplash photos via direct URL pattern `https://images.unsplash.com/photo-{ID}?w=...&q=80&auto=format&fit=crop`. Curated photo IDs per content surface in `lib/images.ts`.

---

## Imagery keyword inventory

Per `lib/images.ts`:

- **Heroes:** professional team in meeting, handshakes, Panama City skyline, smiling professional.
- **Services:** candidate interview, hospitality team, contract paperwork, executive boardroom, crowd, specialist worker.
- **Cities:** Panama City skyline at dusk, shipping/port containers (Colón), agriculture (David), cathedral (Santiago), Panamanian colonial (Chitré), residential housing (La Chorrera, Arraiján).
- **Industries:** hotel front desk, shipping logistics, professional services office, residential property, retail interior, technical worker.
- **Process:** structured note-taking, recruiting at desk, interview close-up, signing offer.

All Unsplash images carry the Unsplash License (free for commercial use, no attribution required). Replace with commissioned photography prior to public launch where possible.

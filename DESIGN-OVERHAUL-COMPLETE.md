# Design Overhaul — Complete

**Date:** 2026-04-25
**Status:** Build passes (30 pages prerendered). Deployed to production.

## Production URLs

- **Aliased:** https://langford-staffing.vercel.app
- **Deployment:** https://langford-staffing-g6gq8ggtl-sams-projects-e51217e7.vercel.app
- **Vercel inspector:** https://vercel.com/sams-projects-e51217e7/langford-staffing/DyeMbhDZuxo9doB1cSdc4fEX7N7D

---

## Summary of changes

The build went from a functional scaffold (working but visibly AI-generated) to a **production-credible marketing site** in the staffing vertical:

- **New design system.** Tailwind config rewritten with proper color tokens (navy `#0F2A4D`, teal `#0FA3A3`, gold `#C9A35E`, mist `#F4F6FA`), display typography scale (`text-display-xl/lg/md` with `clamp()` for fluid sizing), shadow tokens (`shadow-soft`, `shadow-glow`), keyframe animations (`fade-up`, `marquee`), and brand-line/paper neutrals.
- **Inter font** loaded via `next/font/google` with full weight + italic range (per brand book Section 3.2(a)(vii) — Inter, OFL).
- **Italic-keyword-emphasis** headline trick adopted from Hays — every primary heading uses `<em>` to emphasize a key phrase.
- **Real imagery** on every page via Unsplash photo IDs curated in `lib/images.ts`. Hero photos, city photos, service photos, industry photos.
- **Lucide React icons** used throughout (process, services, sidebar, navigation). Brand icons (LinkedIn, Instagram, Facebook, X) implemented as inline SVG since Lucide v1.x dropped them.
- **Sticky header** with scroll-state backdrop blur, utility top-bar (phone + candidate link), full mobile drawer.
- **Dark-mode footer** with CTA strip, 4-column link grid, brand block, social icons, AODA-style compliance line, top accent stripe.

## Pages redesigned

| Page | Before | After |
|------|--------|-------|
| Home | Single-column hero, 4 plain card sections, basic trust strip | Full-bleed photo hero with audience-split cards, glass-morphism stats row, animated trust marquee, Acquire/Manage/Retain bucket grid, image+icon service cards, 4-step process flow, image-lead city grid, testimonial structure with `[REQUIRES CLIENT TESTIMONIAL]` markers, image-overlay CTA banner |
| About | Long prose + at-a-glance sidebar | Photo hero, story split with stat-tile sidebar image, 4-value icon grid, dual rounded callout cards (compliance + portfolio), placeholder leadership grid (Section 3.9 marker preserved) |
| Services index | Plain card grid + 3-column "how we work" | Photo hero, 3-bucket Acquire/Manage/Retain band, mixed-variant service grid (3 image cards + 3 icon cards), 4-step icon process, navy CTA |
| Service detail | Plain hero + 3-col text | Split-hero with service photo, badge for bucket, structured Process steps as numbered cards, FAQ as `<Accordion>` with smooth expand, sticky sidebar with navy CTA tile + city links + related-services-with-icons |
| Locations index | 3-col text cards | Photo hero, image-lead city grid (4:5 aspect, scrim, hover lift), national-coverage split |
| City detail | Text hero + 3-col text | Photo hero (city-specific), industries grid with icons, side-by-side candidate/employer cards, sticky navy CTA sidebar with recommended services |
| Contact | Two stacked forms + sidebar | Photo hero, 4-tile contact strip floating off hero, dual form cards (employer navy / candidate gradient), Google Maps iframe with NAP confirmation note, hours grid |
| Careers | Plain hero + text | Photo hero, value/positioning split with navy résumé CTA card, role grid with check-icons, 4-step hiring process icon grid |
| Positions | Plain hero + sidebar | Photo hero, "How it works" 3-step strip floating off hero, industry grid, engagement-type cards with hover, candidate "why work with us" navy callout |
| Panama | Plain hero + lists | Photo hero, glass-morphism stats row, copy split with city sidebar, sector grid with checkmarks, services grid |
| Insights | 4 plain text cards | Photo hero, 4 image-led category cards (16:9 hero image, badge overlay, hover lift), centered "coming soon" callout |
| Quote | Single form | Photo hero, two-column with form card + dark-blue navy contact tile + "what you'll get" sidebar |
| 404 | Plain text | Full-bleed dark hero with radial glow, search icon, three quick navigation buttons |
| Privacy / Terms | Plain navy hero | Updated to match new dark hero pattern (radial glow accent) — body content untouched (still requires legal review) |

## Components added

| File | Purpose |
|------|---------|
| `components/Logo.tsx` | SVG monogram + wordmark, dark/light variants |
| `components/SectionHeading.tsx` | Reusable eyebrow + title + description, 2 sizes, 2 variants |
| `components/Stat.tsx` | Large number + small-caps label, dark/light variants |
| `components/Accordion.tsx` | Client-side animated FAQ expander (chevron rotation, grid-rows transition) |
| `components/TrustMarquee.tsx` | Animated horizontal trust-signal scroll |
| `components/ServiceCard.tsx` | Rewritten — supports `image` and `icon` variants |
| `lib/cn.ts` | clsx + tailwind-merge helper |
| `lib/images.ts` | Curated Unsplash photo ID library + URL builder |
| `lib/serviceMeta.ts` | Per-service icon, image, and Acquire/Manage/Retain bucket assignment |

## Components updated

- `components/Header.tsx` — sticky, scroll-aware, mobile drawer, utility top-bar.
- `components/Footer.tsx` — multi-column, brand block with NAP rows, inline-SVG social icons (LinkedIn, Instagram, Facebook, X), CTA strip, compliance footer.
- `components/CTASection.tsx` — three variants (`navy`, `image`, `light`), grid layout, eyebrow support.

## Packages installed

- `framer-motion` (available; not yet wired — kept for future entrance animations).
- `lucide-react@1.11.0` (icon library — note v1.x dropped brand icons, hence inline SVGs for socials).
- `clsx` + `tailwind-merge` (composition).
- `@tailwindcss/typography` (for `prose` class on legal pages).

## Competitor sites referenced

- Robert Half, Adecco, ManpowerGroup, Hays, Kelly Services. Full notes: `./DESIGN-RESEARCH.md`.

## Image keywords used

Curated Unsplash IDs across categories (full list: `lib/images.ts`):

- **Heroes:** professional team, handshake, Panama City skyline, smiling professional candidate.
- **Cities:** panama-city skyline-dusk, colon shipping-port-containers, david green-agriculture, santiago cathedral-town, chitre panamanian-colonial, la-chorrera residential-housing, arraijan suburban-panama.
- **Services:** candidate-interview, hospitality-team, contract-paperwork, executive-boardroom, crowd, specialist-worker.
- **Industries:** hotel-front-desk, shipping-logistics, professional-services-office, residential-property, retail-interior, technical-worker.
- **Process:** structured-note-taking, recruiting-at-desk, interview-close-up, signing-offer.

---

## Hard constraints honored

- **No fabricated facts.** No invented review counts, "X years", "X happy clients", "Featured in Y". Stats limited to *capability* (engagement types, cities, languages) — all derivable from `lib/services.ts` + `lib/cities.ts`.
- **No Nathan personal-brand content.** `/about/` leadership block flagged `[REQUIRES NATHAN APPROVAL]` per Section 3.9. Three placeholder tiles render as dashed-border cards.
- **Real NAP everywhere.** `lib/constants.ts` is still the single source of truth — header phone CTA, footer NAP row, contact tiles, schema all read from it. Updating constants flips placeholder → live.
- **Color and font fidelity.** Inter loaded per brand-book Section 3.2(a)(vii). Working palette deepened slightly from the brand-book draft (final palette still requires Zak/Nathan sign-off).
- **Performance.** All `next/image` (with `unoptimized: true` for static export). Hero images use `priority`. Below-fold images lazy by default.
- **Testimonials.** Three testimonial cards render but explicitly carry `[REQUIRES CLIENT TESTIMONIAL]` / `[REQUIRES CANDIDATE TESTIMONIAL]` markers — visible to internal review, but designed-in so the section ships gracefully when content lands.

---

## Known TBD / requires-Client items

| Item | Where it appears | What's required |
|------|------------------|-----------------|
| Real client testimonials | Home, every service detail, every city detail | 3+ approved testimonials with anonymization handling |
| Nathan / leadership bios | `/about/` | Section 3.9 approval |
| Real photography | Everywhere imagery appears | Commissioned photo set; Unsplash placeholders used at launch |
| Logo files | Header / Footer | Replace SVG monogram in `components/Logo.tsx` once final logo is delivered |
| Confirmed NAP | Header CTA, footer, contact tiles, schema | Update `lib/constants.ts` once Zak confirms entity name + Panama address + phone |
| Map address | `/contact/` iframe | Currently shows a Panama-wide view; tighten once address is confirmed |
| Active job postings | `/positions/` | When live roles are confirmed, add `JobPosting` schema (hook in `lib/schema.ts`) |
| Insights articles | `/insights/` | Six-article launch target per `final-summary.md` |
| Privacy / Terms | `/privacy/`, `/terms/` | Legal review before publication |

---

## Re-deploy command

```bash
cd website
vercel deploy --prod --yes
```

Project is linked (`.vercel/project.json` — projectId `prj_ruEjHZrLT05eqIsw74odiktpYsxN`).

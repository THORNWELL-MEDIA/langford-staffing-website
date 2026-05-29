# Langford Staffing Website — Build Summary

**Built:** 2026-04-25
**Last design overhaul:** 2026-04-25 (production-credible redesign — see `DESIGN-OVERHAUL-COMPLETE.md`)
**Status:** Compiles clean, static export verified, 30 pages generated. Deployed to https://langford-staffing.vercel.app.
**MSA section:** 3.3 (Mandatory Page Architecture).

> **Design overhaul addendum:** original scaffold (notes below) has been replaced
> with a production-grade redesign. Key changes — full-bleed photo heroes, Inter
> via `next/font/google`, Lucide icons, `framer-motion`/`tailwind-merge`/`clsx`
> installed, sticky header with mobile drawer, dark multi-column footer,
> Acquire/Manage/Retain services IA, italic-keyword headlines (Hays trick), and
> curated Unsplash imagery via `lib/images.ts`. Components added: `Logo`,
> `SectionHeading`, `Stat`, `Accordion`, `TrustMarquee`. See `DESIGN-RESEARCH.md`
> for the competitor research that informed the patterns and
> `DESIGN-OVERHAUL-COMPLETE.md` for the full change log.

---

## Build verification

- `npm install` — clean install, 0 vulnerabilities reported.
- `npm run build` — successful. 30 static pages prerendered. All routes
  exported under `./out/` ready for any static host.
- TypeScript strict mode — passes.
- Tailwind CSS — compiles, utility classes verified.

---

## Total files created

**41 source files** (excluding `node_modules`, `.next`, `out`):

- 1 `package.json` + lockfile
- 5 config files (`next.config.mjs`, `tsconfig.json`, `tailwind.config.ts`,
  `postcss.config.mjs`, `next-env.d.ts`)
- 4 `lib/` files (constants, services, cities, schema generators)
- 7 `components/` (Header, Footer, NAPBlock, ContactForm, ServiceCard,
  CTASection, SchemaJsonLd)
- 17 `app/` route files
- 1 `styles/globals.css`
- 1 `public/robots.txt` (static fallback)
- 1 `README.md`
- 1 `BUILD-SUMMARY.md` (this file)
- 1 `.gitignore`

---

## Pages built (17 routes; 30 prerendered URLs)

| Route | Type | MSA section |
|-------|------|-------------|
| `/` | static | 3.3(a)(i) |
| `/about/` | static | 3.3(a)(ii) |
| `/contact/` | static (client form) | 3.3(a)(iii) |
| `/services/` | static | 3.3(a)(iv) |
| `/services/[slug]/` × 6 | SSG | 3.3(a)(v) |
| `/locations/` | static | 3.3(a)(xii) |
| `/locations/[city]/` × 7 | SSG | 3.3(a)(ix) |
| `/panama/` | static | 3.3(a)(xi) |
| `/careers/` | static | 3.3(a)(vii) |
| `/positions/` | static | 3.3(a)(viii) |
| `/insights/` | static | 3.3(a)(xiii) |
| `/quote/` | static | 3.3(a)(xvi) |
| `/privacy/` | static | 3.3(a)(xiv) — **REQUIRES LEGAL REVIEW** |
| `/terms/` | static | 3.3(a)(xv) — **REQUIRES LEGAL REVIEW** |
| `/sitemap.xml` | dynamic generator | 3.3(c) |
| `/robots.txt` | dynamic generator | 3.3(c) |
| `/_not-found` (404) | static | — |

**Services rendered (`/services/[slug]/`):**
permanent-placement · temporary-staffing · contract-to-hire · executive-search ·
volume-hiring · specialty-search.

**Cities rendered (`/locations/[city]/`):**
panama-city · colon · david · santiago · chitre · la-chorrera · arraijan.

**Decision: franchise page excluded** per `site-architecture.md` recommendation —
not commercially relevant for a Panama staffing platform. Reversible.

---

## Schema markup embedded

Every page injects JSON-LD via `<SchemaJsonLd>` in the route component:

- `Organization` + `WebSite` + `EmploymentAgency` (LocalBusiness subclass) on
  every page via root `app/layout.tsx`
- `BreadcrumbList` per page
- `Service` + `FAQPage` on each `/services/[slug]/` page
- `EmploymentAgency` with `areaServed` City scope on each
  `/locations/[city]/` page
- `ContactPage` overlay on `/contact/`

`JobPosting` schema is NOT yet emitted on `/positions/` because no live roles
have been confirmed. Per Section 3.4(a)(ix), it must be added the moment a
real `JobPosting` exists. Hook left in `lib/schema.ts` for the eventual
addition.

---

## TBD checklist requiring Sam/Zak input before launch

These are consolidated from `lib/constants.ts` and content placeholders. The
README has the same list with file references — duplicated here for the
delivery handoff.

### Entity & legal
- [ ] **Entity name** — confirm "Langford Staffing" vs "Laneford Staff Inc"
- [ ] **Founded year**
- [ ] **Domain** (production)

### NAP (Master Data Sheet sections iii, v, ix)
- [ ] Address line 1
- [ ] Corregimiento, Distrito, Provincia
- [ ] Postal code (optional)
- [ ] Public phone — display + E.164
- [ ] Public email

### Hours
- [ ] All seven days of the week

### Social handles
- [ ] LinkedIn, Facebook, Instagram, X, YouTube, TikTok, Pinterest, Threads,
      Bluesky URLs

### Content gates
- [ ] **Leadership bios** (`/about/`) — flagged
      `[REQUIRES NATHAN APPROVAL — Section 3.9]`
- [ ] **Team photos** (`/about/`)
- [ ] **Case studies** (every service page)
- [ ] **Testimonials / trust strip** (home + city pages)
- [ ] **Active job postings** with `JobPosting` schema (`/positions/`)
- [ ] **Insights articles** (`/insights/`) — six-article launch target

### Legal review
- [ ] **Privacy Policy** (`/privacy/`) — REQUIRES LEGAL REVIEW
- [ ] **Terms of Use** (`/terms/`) — REQUIRES LEGAL REVIEW

### Assets
- [ ] Favicon + apple-touch-icon → `public/`
- [ ] OG image → `public/og-image.png`
- [ ] Logo files → replace text-monogram in `Header.tsx` / `Footer.tsx`

### Form backend
- [ ] `<ContactForm />` submission backend (currently `console.log` only;
      placeholder action="/api/contact")

### Analytics (must be tech@revun.com per Section 3.13)
- [ ] GA4 measurement ID
- [ ] GTM container
- [ ] LinkedIn Insight Tag
- [ ] Meta Pixel
- [ ] Google Search Console verification
- [ ] Bing Webmaster Tools verification

---

## Deployment instructions

### Vercel (recommended for Next.js)

```bash
cd website
npm install -g vercel       # if not already installed
vercel deploy               # prompts for project creation; use tech@revun.com account
vercel --prod
```

### Netlify

```bash
cd website
npm run build
netlify deploy --dir=out
netlify deploy --dir=out --prod
```

### Generic static host (S3 + CloudFront, Cloudflare Pages, etc.)

```bash
cd website
npm run build
# upload the contents of ./out/
```

> **Domain registration is the Client's responsibility per Section 3.4(c).**
> The Service Provider does not register the domain; we point the build to
> whatever domain the Client provisions and configure DNS records as
> directed.

---

## Decisions made (review before launch)

1. **EN-only at launch.** ES overlay scoped for Phase 3 per `final-summary.md`.
   App Router structure is locale-prefix-friendly, so adding `/es/` later is
   non-disruptive.
2. **Franchise page excluded.** Recommendation from `site-architecture.md`
   stands. Easy to add a `/franchise/page.tsx` later if Zak wants optionality.
3. **Provincial pages folded into `/panama/`.** Hub-and-spoke runs Country →
   City. Province-level routes can be added if SEO data shows the need.
4. **Color palette.** Working palette from `brand-book-skeleton.md` —
   `#1F3A5F` navy + `#2E8B8B` teal + neutrals. Replaceable via
   `tailwind.config.ts` once Zak/Nathan approve a final palette.
5. **Inter via Google Fonts CDN.** Switch to self-hosted Inter (OFL) if the
   Client prefers no third-party font CDN — five-line change in
   `app/layout.tsx` + add font files to `public/`.
6. **Schema type `EmploymentAgency`** chosen over plain `LocalBusiness` for
   category-specific accuracy. LocalBusiness inherits.
7. **All NAP TBD.** Site is fully launchable from a code standpoint; the
   blocker is purely Client-side data entry. Updating
   `lib/constants.ts` is the only file that needs touching to flip from
   placeholder to live.
8. **Nathan content avoided everywhere.** Per Section 3.9 leverage
   defense, no Nathan references appear in public copy. The `/about/`
   leadership section is explicitly flagged as
   `[REQUIRES NATHAN APPROVAL — Section 3.9]`.

---

## Known issues / non-blockers

- The webpack pack-file cache warning during build (`Error: Unable to
  snapshot resolve dependencies`) is benign — it's a Next.js 14 cache
  warning unrelated to output correctness. Build still succeeds and exports
  cleanly.
- Inter font is loaded from Google Fonts CDN — privacy policy mentions
  cookies/analytics, which currently has a `[TBD]` for the specific list of
  tags. Once tag inventory is finalized, that section needs an update.
- `<dangerouslySetInnerHTML>` is used in three spots for inline HTML
  entities (`&amp;`) inside short heading strings — safe inputs (constants),
  no user input ever flows into them.

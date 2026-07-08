# Langford Staffing — Website

Next.js 14 + Tailwind CSS marketing site for Langford Staffing, a Panama-based
employment platform within the Rothenbury Group portfolio.

Static-export ready — deploys to Vercel, Netlify, Cloudflare Pages, or any
static host.

## Quick start

```bash
cd website
npm install
npm run dev
# open http://localhost:3000
```

Build a static export:

```bash
npm run build
# output goes to ./out
```

## Stack

- Next.js 14 (App Router) — `output: "export"` for static hosting
- TypeScript (strict)
- Tailwind CSS 3
- React 18

## Project layout

```
app/                      # routes (App Router)
  layout.tsx              # root layout, schema injection, header/footer
  page.tsx                # home
  about/                  # about page
  contact/                # contact + dual-form (employer/candidate)
  services/               # overview + dynamic [slug]
  locations/              # index + dynamic [city]
  panama/                 # country page (national coverage)
  careers/                # internal careers
  positions/              # candidate-facing open roles
  insights/               # blog hub (placeholder index)
  privacy/                # legal — REQUIRES LEGAL REVIEW
  terms/                  # legal — REQUIRES LEGAL REVIEW
  quote/                  # standalone employer-intake landing
  sitemap.ts              # dynamic sitemap.xml
  robots.ts               # dynamic robots.txt
components/               # Header, Footer, NAPBlock, ContactForm, ...
lib/
  constants.ts            # ★ single source of truth for NAP + brand
  services.ts             # service catalog (6 services)
  cities.ts               # city catalog (7 Panamanian cities)
  schema.ts               # JSON-LD generators
styles/globals.css        # Tailwind base + utility classes
public/robots.txt         # static robots fallback
```

## Editing NAP — IMPORTANT

All NAP / contact / brand metadata is centralized in
[`lib/constants.ts`](./lib/constants.ts). Update **only that file** when client
data is confirmed. Every page reads from these constants.

## ⚠️ TBD checklist — required before launch

The following fields are placeholders and require Sam/Zak input before this
site can go live. Each lives in `lib/constants.ts` unless noted otherwise.

### Entity & legal (BRAND, NAP)
- [ ] **Entity name** — confirm "Langford Staffing" vs "Laneford Staff Inc"
      (`BRAND.legalEntity`, `NAP.legalName`)
- [ ] **Founded year** (`BRAND.founded`)
- [ ] **Domain** — production domain registered to client
      (`NAP.domain`, `NAP.websiteUrl`, also `public/robots.txt`)

### NAP (Master Data Sheet sections iii, v, ix)
- [ ] **Address line 1** (`NAP.addressLine1`)
- [ ] **Corregimiento** (`NAP.corregimiento`)
- [ ] **Distrito** (`NAP.distrito`)
- [ ] **Provincia** (`NAP.provincia`)
- [ ] **Postal code** (optional in Panama — `NAP.postalCode`)
- [ ] **Public phone (display + E.164)** (`NAP.phoneDisplay`, `NAP.phoneE164`)
- [ ] **Public email** (`NAP.email`)

### Hours of operation (Master Data Sheet section viii)
- [ ] All seven days (`HOURS.*`)

### Social handles (final-summary.md item 4)
- [ ] LinkedIn / Facebook / Instagram / X / YouTube / TikTok / Pinterest /
      Threads / Bluesky URLs (`SOCIAL.*`)

### Content gates
- [ ] **Leadership bios** — `app/about/page.tsx` flagged
      `[REQUIRES NATHAN APPROVAL — Section 3.9]`. Do not publish without
      Nathan's written approval.
- [ ] **Team photos** — placeholder slot in `app/about/page.tsx`
- [ ] **Case studies** — placeholders on every service page
- [ ] **Testimonials / trust strip** — placeholder on home + city pages
- [ ] **Active job postings** — placeholder on `/positions/`. Once
      JobPosting schema goes live, add Section 3.4(a)(ix)–compliant structured
      data per role.
- [ ] **Insights articles** — placeholder index. Phase 3 launch target is six
      articles minimum (per `site-architecture.md`).

### Legal review
- [ ] **Privacy Policy** (`/privacy/`) — **REQUIRES LEGAL REVIEW**.
      Placeholder content covers Ley 81 (Panama), with optional GDPR / PIPEDA
      / CCPA hooks. Final must be drafted or reviewed by qualified counsel.
- [ ] **Terms of Use** (`/terms/`) — **REQUIRES LEGAL REVIEW**. Placeholder
      with Panamanian governing-law clause; final must be reviewed.

### Assets
- [ ] **Favicon + apple-touch-icon** — referenced in `app/layout.tsx` but file
      not provided. Drop `favicon.ico` and `apple-touch-icon.png` into
      `public/`.
- [ ] **OG image** — recommended at `public/og-image.png`
- [ ] **Logo files** — currently rendered as text "L" monogram + wordmark.
      Replace with brand-approved logo SVG/PNG once delivered.

### Form backend
- [ ] **`<ContactForm />` submission backend** — currently `console.log`-only.
      Wire to Formspree, GHL, HubSpot, Resend, or a serverless endpoint
      before launch. The form posts to `/api/contact` as a placeholder.

### Analytics / tag management (Section 3.13 — must be tech@revun.com)
- [ ] GA4 measurement ID
- [ ] GTM container
- [ ] LinkedIn Insight Tag
- [ ] Meta Pixel (if Facebook ads in plan)
- [ ] Google Search Console verification
- [ ] Bing Webmaster Tools verification

## Deployment

### Vercel

```bash
cd website
npm install -g vercel
vercel deploy           # follow prompts; use tech@revun.com account
vercel --prod
```

### Netlify

```bash
cd website
npm run build
netlify deploy --dir=out
netlify deploy --dir=out --prod
```

### Generic static host

```bash
cd website
npm run build
# upload contents of ./out to your static host (S3 + CloudFront, etc.)
```

## Compliance notes

- Per MSA Section 3.13(a), all hosting/analytics/marketing accounts must be
  created under `tech@revun.com`. Never use a personal email.
- Per Section 3.4(c), domain registration is the Client's responsibility — do
  not register on the Service Provider's behalf.
- Per Section 7, all Asset ownership vests with the Client on Day 1.
- Per Section 11.2(f), every factual claim on the site must be substantiated.
  No fake testimonials, fake metrics, or fabricated awards have been included.
  All metric / award placeholders are explicitly marked TBD.

## Decisions made (review before launch)

- **Color palette** locked to brand-book skeleton draft: navy `#1F3A5F`,
  teal `#2E8B8B`, neutrals. Easily swapped via `tailwind.config.ts` once
  Zak/Nathan sign off on a final palette.
- **Typography** — Inter via Google Fonts. Switch to self-hosted Inter (OFL)
  before launch if the Client prefers no third-party font CDN.
- **Franchise page** — excluded per `site-architecture.md` recommendation
  (not commercially relevant for a Panama staffing platform).
- **Provincial-level pages** — folded into `/panama/` country page rather
  than separate `/provincia/<x>/` routes. City pages do the heavy SEO lift.
  Reversible.
- **Bilingual** — site ships EN-only. ES overlay scoped for Phase 3 per
  `final-summary.md`. Adding `/es/` is straightforward; structure already
  supports a locale prefix.
- **Schema type** — `EmploymentAgency` (subclass of `LocalBusiness`) chosen
  over generic `LocalBusiness` for category accuracy.

# DECOUPLE COMPLETE — 2026-04-28

Cross-brand references stripped from Langford Staffing website. Site now appears as a standalone independent business — no public reference to Revun, Rothenbury Group, Northstone Holdings, Bridgepoint Maintenance, MoveSmart Rentals, Single Property Management, Thornwell Media, or Nathan Levinson.

## Files modified

- `lib/constants.ts` — removed `BRAND.parent` ("Rothenbury Group") and `BRAND.holding` ("Northstone Holdings") fields; rewrote `BRAND.shortDescription` to drop "Part of the Rothenbury Group portfolio" line.
- `lib/schema.ts` — removed `parentOrganization` from `organizationSchema()` and `localBusinessSchema()`.
- `components/Footer.tsx` — deleted entire `SISTER_BRANDS` array and the "The Rothenbury Group portfolio" link strip; removed "Built on Revun" caption; removed "Part of the Rothenbury Group portfolio" line from copyright row; removed `/technology` link from Company column.
- `components/Header.tsx` — removed `/technology` nav link; replaced "Panama-based · Rothenbury Group portfolio" utility-bar text with "Panama-based · Bilingual EN/ES".
- `components/TrustBadges.tsx` — replaced "Rothenbury Group · Portfolio brand" badge with a "Vetted Networks" badge.
- `components/TrustMarquee.tsx` — replaced "Rothenbury Group portfolio" item with "Continuity through onboarding".
- `lib/images.ts` — relabeled comment from "for /technology page — Revun integration" to neutral "TECHNOLOGY / PLATFORM".
- `app/layout.tsx` — unchanged at the file level; schema cleanup happened in `lib/schema.ts` (which `layout.tsx` imports).
- `app/sitemap.ts` — removed `/technology` from `staticPaths`.
- `app/page.tsx` — deleted the entire "Built on Revun" section (hero stats, four feature cards, the three Revun-branded `AnimatedStat` figures of 94% / 18 min / 320+); removed unused imports (`ArrowUpRight` retained for city cards, `Fingerprint`, `Trophy`, `Camera`, `Workflow`, `AnimatedStat` removed); replaced "Panama · Rothenbury Group portfolio" eyebrow with "Panama · Bilingual EN/ES staffing".
- `app/about/page.tsx` — deleted the "Technology backbone — Built on Revun" section and the "Powered by Revun" sidebar; deleted the "Portfolio context" rounded card; deleted the "[REQUIRES NATHAN APPROVAL]" leadership placeholder section; reframed the Compliance card as a single full-width block; replaced `Portfolio = Rothenbury Group` stat with `Engagements = 6 types`; rewrote hero description to drop portfolio reference; removed unused `ArrowUpRight` and `Cpu` imports; updated metadata description.
- `app/services/[slug]/page.tsx` — deleted the entire `REVUN_CALLOUTS` constant (per-service Revun feature cards covering "Vendor / Technician Onboarding," "Performance-based Dispatch," "Tech Leaderboard," "Role-based Permissions," "Vendor Marketplace," "Identity Verification (Persona)") and the conditional `revun &&` JSX block; removed unused `ArrowUpRight` and `Cpu` imports.
- `app/services/page.tsx` — replaced "backed by Rothenbury Group" with neutral process-focused language.
- `app/careers/page.tsx` — replaced "Langford is part of the Rothenbury Group portfolio" paragraph with brand-internal language.
- `app/privacy/page.tsx` — removed two references to "Rothenbury Group portfolio" in Section 1 (Who we are) and Section 5 (Sharing).
- `app/terms/page.tsx` — removed "affiliates within the Rothenbury Group portfolio" from Section 7 (Intellectual property).
- `BUILD-SUMMARY.md` / `DESIGN-OVERHAUL-COMPLETE.md` / `DESIGN-RESEARCH.md` / `REVUN-LEVEL-UP-COMPLETE.md` / `README.md` — internal docs, not scrubbed; this DECOUPLE-COMPLETE.md serves as the dated record of the change.

## Files deleted

- `app/technology/page.tsx` — primary purpose was Revun feature catalog; deleted per directive.
- `app/technology/` — empty parent directory removed after page deletion.

## Final deployment

- **Production URL:** https://langford-staffing.vercel.app
- **Deployment ID:** dpl_4eUem8ajzqaLMWhfj9Y5d53wR77K
- **Inspect:** https://vercel.com/sams-projects-e51217e7/langford-staffing/4eUem8ajzqaLMWhfj9Y5d53wR77K
- **Build:** clean (`npm run build` succeeded with 30/30 static pages, no `/technology` route).

## Grep verification

```
$ grep -rE "Revun|Rothenbury|Northstone|Bridgepoint|MoveSmart|Thornwell|Single Property|Nathan Levinson" app/ components/ lib/ 2>&1 | grep -v "node_modules\|\.next\|out/"
(no output)
```

Source tree (`app/`, `components/`, `lib/`) is clean of all 8 cross-brand names. Langford Staffing's own brand identity remains intact throughout.

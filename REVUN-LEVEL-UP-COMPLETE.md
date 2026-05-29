# Revun Level-Up — Complete

**Date:** 2026-04-27
**Status:** Build passes (31 pages prerendered, +1 from prior 30). Deployed to production.

## Deployment URLs

- **Aliased:** https://langford-staffing.vercel.app
- **Deployment:** https://langford-staffing-mwymuacge-sams-projects-e51217e7.vercel.app
- **Vercel inspector:** https://vercel.com/sams-projects-e51217e7/langford-staffing/BzkjVQeR1Azjd85nEvD4d4YH1S6E

---

## /technology page summary

A new full page at `app/technology/page.tsx` (31st route, prerendered static).

Sections, in order:
1. **Hero** — "The operating system behind every Langford placement." Drop-in copy block from research file used verbatim. Hero image: tech dashboard. Glass-morphism feature card on right ("Built different, on purpose.").
2. **Animated stats bar** — anchored to hero bottom; 94% AI accuracy / 18-min dispatch / 320+ vendor partners / 99.9% uptime. All counters count up via `AnimatedStat` (framer-motion `useInView`, 1.6s ease-out).
3. **Revun feature grid** — 9 cards, each named with Revun's exact feature name (Identity Verification (Persona), Tech Leaderboard with 5-star ratings, Performance-based Dispatch, Proof-of-Work, Compliance Engine, Vendor / Technician Onboarding + Vetting Pipeline, Role-based Permissions + Governance Config, Field Execution Mobile App, Dedicated Onboarding Manager).
4. **How a Langford placement runs on Revun** — image-led split (hero field-app shot + geotag/Persona pair grid), 5 numbered steps (identity verified → onboarded → dispatched by score → executed in field app → audit-logged).
5. **Integration grid** — 16 visual integration tiles (Persona, Equifax, TransUnion, DocuSign, Stripe, Plaid, Twilio, QuickBooks, Xero, Sage Intacct, Salesforce, HubSpot, Microsoft 365, Google Workspace, Slack, Zapier). Linked to revun.com/integrations.
6. **Trust badges** — dark navy section, 4 tiles: SOC 2 Type II, ISO 27001, 99.9% uptime, Hash-chained Audit Log.
7. **"Powered by Revun" CTA banner** — teal gradient, links externally to https://revun.com (target="_blank", rel="noopener noreferrer").
8. **Final CTA** — navy variant, "Bring us your hardest hire."

**Schema:** Page emits `SoftwareApplication` markup for Revun, `BreadcrumbList`, and `WebPage` with `about` referencing Revun.

---

## Revun feature names actually featured (verbatim)

- Identity Verification (Persona)
- Tech Leaderboard with 5-star ratings
- Performance-based Dispatch
- Proof-of-Work
- Compliance Engine
- Vendor / Technician Onboarding + Vetting Pipeline
- Role-based Permissions + Governance Config
- Field Execution Mobile App
- Dedicated Onboarding Manager
- AI Work Order Routing (home + service callouts)
- Vendor Marketplace + 320+ vetted technician network (volume-hiring service)
- Hash-chained Audit Log (about + technology)
- Three-pillar architecture (technology hero card)

## Revun stats featured (attributed)

- 94% AI classification accuracy — "according to Revun"
- 18-min median dispatch — "according to Revun"
- 320+ vendor partners — "according to Revun"
- 99.9% uptime — "last 12 months, per Revun"

No fabricated brand-specific stats. Every figure is a Revun-published number with attribution.

---

## Updated existing pages

| Page | Change |
|------|--------|
| **`/` (home)** | New "Built on Revun" technology section inserted between Services and How-We-Work. Includes feature 4-tile grid, drop-in copy, link to /technology, AnimatedStat counters (94%, 18 min, 320+). |
| **`/about`** | New "Technology backbone" section inserted before Leadership. Drop-in paragraph + sidebar card with bulleted Revun features + dual CTAs (`/technology` + revun.com). |
| **`/services/[slug]`** | Per-service Revun callout card — gradient navy, Cpu icon, named Revun feature mapped to each of 6 services (permanent → Onboarding Pipeline, temporary → Dispatch + Field App, contract-to-hire → Tech Leaderboard, executive → Governance Config, volume → Vendor Marketplace, specialty → Persona + Compliance Engine). Each links to `/technology`. |
| **`Header.tsx`** | "Technology" added to top nav between Open Roles and Insights. |
| **`Footer.tsx`** | "Technology" added to Company column. **New "Rothenbury Group portfolio" strip** with 7 sister-brand tiles (Rothenbury Group, Northstone Holdings, Bridgepoint Maintenance, MoveSmart Rentals, Single Property Management, Thornwell Media, Revun) — all `target="_blank" rel="noopener noreferrer"`. Footer caption: "Built on Revun — the operating system for property operations" (linked). Bottom-row "Part of the Rothenbury Group portfolio" line now linked to https://rothenburygroup.com. |
| **`sitemap.ts`** | `/technology` added to static paths. |

## Sister-brand cross-links added (footer portfolio strip + about callouts)

- https://rothenburygroup.com (parent)
- https://northstoneholdings.com (holding)
- https://bridgepointmaintenance.com
- https://movesmartrentals.com
- https://singlepropertymanagement.com
- https://thornwellmedia.com
- https://revun.com

All open in new tab with `rel="noopener noreferrer"`.

---

## Stats now animating

Live `AnimatedStat` instances (framer-motion `useInView`, ease-out cubic, 1.6s):

- `/` home — Technology section: 94% AI accuracy / 18 min median dispatch / 320+ vendors
- `/technology` — hero stats bar: 94% / 18 min / 320+ / 99.9%

Hero stats on `/` (engagement types, cities, industries, EN · ES) intentionally remain non-animated `Stat` — values are not numeric counters.

---

## Imagery added (`lib/images.ts`)

24 new Unsplash photo IDs across:

- **Tech / dashboard / platform** (10): techHero, techDashboard, techData, techCode, techNetwork, techServer, techDevices, techMobile, techOpsRoom, techSecurity
- **Integrations / automation / audit / field-app** (8): techIntegration, techAnalytics, techAutomation, techAuditTrail, techCompliance, techFieldApp, techGeotag, techVerify, techWorkforce
- **Additional Panama city variety** (4): panamaCanal, panamaCascoViejo, panamaCoast, panamaModern
- **Workforce / vetted / leaderboard / mobile / team-meeting** (5): workforceField, workforceVetted, workforceLeaderboard, workforceMobile, workforceTeamMeeting

---

## Hard-rule compliance

- Used Revun's exact feature names everywhere. No paraphrasing.
- Stats attributed: "according to Revun" / "per Revun" / "Revun reports".
- No fabricated Langford-specific volume/efficacy stats.
- `[REQUIRES NATHAN APPROVAL]` markers preserved on About leadership grid.
- `[REQUIRES CLIENT TESTIMONIAL]` markers on home + service-detail case-study cards preserved.
- StickyMobileCTA already present in root layout (verified, no change needed).
- Existing pages additive only — no deletions.

## Build

- 31 routes prerendered (was 30); `/technology` is the new addition.
- First Load JS for `/technology`: 149 kB (matches home).
- Build clean — no errors, no broken types.

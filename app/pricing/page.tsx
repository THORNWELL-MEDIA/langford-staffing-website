import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { BRAND, NAP, CTA } from "@/lib/constants";
import CTASection from "@/components/CTASection";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Staffing Pricing And Engagement Models",
  description:
    "Transparent staffing pricing for the United States and Canada. Permanent, contract, executive, and volume engagement models with fixed percentages, milestone billing, and replacement guarantees built in.",
  alternates: { canonical: "/pricing/" }
};

const TIERS = [
  {
    name: "Standard Placement",
    eyebrow: "Single roles",
    price: "20% of first year base",
    cadence: "Billed on start date",
    description:
      "For one off permanent placements across professional, technical, and skilled trades roles. Full intake, sourcing, screening, and 90 day replacement guarantee.",
    inclusions: [
      "Documented intake brief",
      "Active sourcing and inbound channels",
      "Two round screening with notes",
      "Shortlist of three to five candidates",
      "Reference and right to work checks",
      "90 day replacement guarantee"
    ],
    cta: { href: "/contact/", label: "Request a quote" },
    featured: false
  },
  {
    name: "Volume And Contract",
    eyebrow: "Multiple roles",
    price: "Custom monthly retainer",
    cadence: "Quarterly true up",
    description:
      "For employers hiring five or more roles per quarter, or rolling contract and temporary needs. Dedicated pod, weekly status reporting, and consolidated invoicing.",
    inclusions: [
      "Dedicated account team",
      "Weekly status and pipeline reports",
      "Volume hiring playbooks",
      "Compliance and payroll handoff",
      "Consolidated monthly invoicing",
      "Replacement and reassignment policy"
    ],
    cta: { href: "/contact/", label: "Talk to our team" },
    featured: true
  },
  {
    name: "Executive Search",
    eyebrow: "Senior leadership",
    price: "Retained engagement",
    cadence: "Milestone billing",
    description:
      "Retained search for VP, C suite, and board level roles. Confidential outreach, market mapping, and structured assessment over a 60 to 90 day engagement.",
    inclusions: [
      "Confidential market mapping",
      "Discreet candidate outreach",
      "Structured assessment and references",
      "Compensation benchmarking",
      "Offer negotiation support",
      "Twelve month guarantee"
    ],
    cta: { href: "/contact/", label: "Discuss a retained search" },
    featured: false
  }
];

const FAQ = [
  {
    q: "Do you charge any upfront fees?",
    a: "Standard placements are billed only when a candidate accepts and starts. Volume retainers and executive search use milestone billing tied to engagement and shortlist delivery."
  },
  {
    q: "What is the replacement guarantee?",
    a: "If a placed candidate leaves or is terminated for cause within 90 days of starting, we run the search again at no additional fee. Executive search engagements carry a twelve month guarantee."
  },
  {
    q: "Are you compliant for both the United States and Canada?",
    a: "Yes. Every candidate goes through right to work and reference checks aligned to the destination jurisdiction. Payroll, withholding, and contractor classification are handled by our partner of record for cross border placements."
  },
  {
    q: "How fast can you fill a role?",
    a: "Most professional roles produce a screened shortlist within seven to ten business days. Volume engagements and contract roles can move faster when the intake is documented at kickoff."
  },
  {
    q: "Can we mix engagement types under one agreement?",
    a: "Yes. A single master services agreement can cover permanent, contract, and volume work, with line item billing per engagement."
  }
];

export default function PricingPage() {
  return (
    <>
      <SchemaJsonLd
        data={breadcrumbSchema([
          { name: "Home", url: NAP.websiteUrl + "/" },
          { name: "Pricing", url: NAP.websiteUrl + "/pricing/" }
        ])}
      />

      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-brand-navy text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "48px 48px"
          }}
        />
        <div className="relative container-prose pt-12 pb-16 lg:pt-16 lg:pb-20">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/15 pb-6">
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[10px] font-semibold uppercase tracking-[0.20em]">
              <span className="text-brand-saffron">Briefing</span>
              <span className="h-3 w-px bg-white/25" />
              <span className="text-white/80">Section 03 · Pricing</span>
            </div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.20em] text-white/70">
              Three Engagement Models
            </div>
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <h1 className="text-display-xl font-semibold text-balance">
                Pricing Built Around How You Hire, Not Just What You Pay.
              </h1>
              <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-white/85">
                Fixed percentages on permanent roles, milestone billing on
                retained search, and structured retainers for volume and
                contract work. Replacement guarantees included on every
                engagement type.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tiers */}
      <section className="section bg-brand-paper">
        <div className="container-prose">
          <div className="grid gap-6 lg:grid-cols-3">
            {TIERS.map((tier) => (
              <article
                key={tier.name}
                className={
                  "flex flex-col border bg-white p-7 lg:p-8 " +
                  (tier.featured
                    ? "border-brand-saffron-dark ring-1 ring-brand-saffron-dark/30 shadow-[0_8px_28px_-12px_rgba(0,0,0,0.18)]"
                    : "border-brand-line")
                }
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-saffron-dark">
                  {tier.eyebrow}
                </p>
                <h2 className="mt-3 font-display text-[26px] font-semibold leading-tight text-brand-navy">
                  {tier.name}
                </h2>
                <div className="mt-5 border-y border-brand-line py-5">
                  <p className="font-display text-[24px] font-semibold text-brand-navy">
                    {tier.price}
                  </p>
                  <p className="mt-1 text-[12px] uppercase tracking-[0.18em] text-brand-ink-mute">
                    {tier.cadence}
                  </p>
                </div>
                <p className="mt-5 text-[15px] leading-relaxed text-brand-ink-soft">
                  {tier.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {tier.inclusions.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-brand-saffron-dark"
                        strokeWidth={2}
                      />
                      <span className="text-[14px] leading-snug text-brand-ink-soft">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-7">
                  <Link
                    href={tier.cta.href}
                    className={
                      "inline-flex items-center gap-2 px-5 py-3 text-[13px] font-semibold uppercase tracking-[0.16em] no-underline transition " +
                      (tier.featured
                        ? "bg-brand-navy text-white hover:bg-brand-navy-dark"
                        : "border border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white")
                    }
                  >
                    {tier.cta.label}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Notes */}
      <section className="section-tight bg-white border-y border-brand-line">
        <div className="container-prose">
          <div className="grid gap-10 lg:grid-cols-3">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-saffron-dark">
                Note 01
              </p>
              <h3 className="mt-2 text-[18px] font-semibold text-brand-navy">
                Transparent line items
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-brand-ink-soft">
                Every invoice lists the role, candidate, start date, and
                placement fee or milestone reached. No bundled or opaque
                billing.
              </p>
            </div>
            <div className="lg:border-l lg:border-brand-line lg:pl-10">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-saffron-dark">
                Note 02
              </p>
              <h3 className="mt-2 text-[18px] font-semibold text-brand-navy">
                Cross border compliance
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-brand-ink-soft">
                US and Canada placements are priced the same way. Payroll,
                contractor classification, and work authorization are handled
                through partners of record.
              </p>
            </div>
            <div className="lg:border-l lg:border-brand-line lg:pl-10">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-saffron-dark">
                Note 03
              </p>
              <h3 className="mt-2 text-[18px] font-semibold text-brand-navy">
                Replacement built in
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-brand-ink-soft">
                A documented replacement window is included on every
                placement. Standard placements at 90 days, retained executive
                search at twelve months.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-brand-paper-warm/40">
        <div className="container-prose">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-saffron-dark">
            Questions
          </p>
          <h2 className="mt-3 max-w-3xl text-display-md text-brand-navy">
            Common Pricing Questions.
          </h2>
          <div className="mt-10 divide-y divide-brand-line border-y border-brand-line">
            {FAQ.map((item) => (
              <div key={item.q} className="grid gap-4 py-7 lg:grid-cols-12">
                <h3 className="text-[16px] font-semibold text-brand-navy lg:col-span-4">
                  {item.q}
                </h3>
                <p className="text-[15px] leading-relaxed text-brand-ink-soft lg:col-span-8">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        variant="navy"
        eyebrow="Ready to talk numbers?"
        title="Send us the role. We send back a written quote."
        description={`Tell us the seniority, scope, and timeline. ${BRAND.shortName} returns a written engagement quote with the fee model, milestones, and guarantee terms.`}
        primaryCta={{ href: "/contact/", label: CTA.employerPrimary }}
        secondaryCta={{ href: "/services/", label: "See engagement types" }}
      />
    </>
  );
}

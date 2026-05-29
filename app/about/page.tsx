import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  HeartHandshake,
  ScrollText,
  Compass,
  ArrowRight
} from "lucide-react";
import { BRAND, NAP } from "@/lib/constants";
import { editorial } from "@/lib/images";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import MethodologyCompare from "@/components/MethodologyCompare";
import { breadcrumbSchema, organizationSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "About",
  description: `${BRAND.name} staffs and recruits across the United States and Canada. We run a clear intake, send a short list of vetted candidates, and stay with the hire through the first month.`
};

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Compliance first",
    body: "Every placement under applicable federal, state, and provincial employment law in the relevant US or Canadian jurisdiction. We work with your counsel. We do not replace them."
  },
  {
    icon: HeartHandshake,
    title: "Fit before speed",
    body: "We will tell you honestly when a search needs more time. The cost of a mishire is more than the cost of one more week."
  },
  {
    icon: ScrollText,
    title: "Everything in writing",
    body: "We write the role, the screening notes, and the decisions down. Nothing in our work depends on one person's memory."
  },
  {
    icon: Compass,
    title: "We stay involved past the offer",
    body: "Check ins through the first 30 days come standard, run by the same recruiter who took the brief."
  }
];

export default function AboutPage() {
  return (
    <>
      <SchemaJsonLd
        data={[
          organizationSchema(),
          breadcrumbSchema([
            { name: "Home", url: NAP.websiteUrl + "/" },
            { name: "About", url: NAP.websiteUrl + "/about/" }
          ])
        ]}
      />

      {/* Hero — executive briefing band */}
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
              <span className="text-white/80">Section 01 · About</span>
            </div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.20em] text-white/70">
              {BRAND.name}
            </div>
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-8">
              <h1 className="text-display-xl font-semibold text-white text-balance">
                A staffing firm built on{" "}
                <em className="not-italic font-semibold text-brand-saffron">
                  real screening, real fit, and real follow up.
                </em>{" "}
                Not headcount.
              </h1>
              <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-white/85">
                We staff property services, leasing teams, maintenance trades,
                and operating company support roles across the United States
                and Canada. The roles that are hardest to fill quickly are
                the ones we focus on.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === EDITORIAL SLAB — hero photograph + monumental tabular numerals === */}
      <section className="bg-brand-paper">
        <div className="container-prose grid gap-0 border-b border-brand-line lg:grid-cols-12">
          <figure className="relative lg:col-span-7">
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-brand-navy lg:aspect-auto lg:h-full lg:min-h-[420px]">
              <Image
                src={editorial("about-hero")}
                alt=""
                fill
                priority
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="absolute bottom-4 left-4 right-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/85 sm:bottom-6 sm:left-6">
              <span className="bg-brand-navy/70 px-2 py-1 backdrop-blur-sm">
                Plate 01 · The work, photographed
              </span>
            </figcaption>
          </figure>
          <div className="lg:col-span-5 lg:border-l lg:border-brand-line">
            <div className="grid grid-cols-2 divide-x divide-brand-line border-t border-brand-line lg:border-t-0">
              <Stat number="35" unit="cities" label="US and Canadian markets" />
              <Stat number="6" unit="types" label="Ways we engage" />
              <Stat number="5" unit="day" label="Typical time to first short list" />
              <Stat number="30" unit="day" label="We stay on the file" />
            </div>
            <div className="border-t border-brand-line p-7 sm:p-8">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-saffron-dark">
                Plate 02 · Briefing
              </p>
              <p className="mt-3 font-display text-[19px] leading-snug text-brand-navy">
                A written brief in a market that still runs on relationships
                and gut feel.
              </p>
              <Link href="/services/" className="link-arrow mt-5 text-sm">
                Engagement detail <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Briefing body — single-column, dense, like a research report */}
      <section className="section">
        <div className="container-narrow">
          <div className="grid gap-10 lg:grid-cols-12">
            <article className="lg:col-span-8 prose-langford">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-saffron-dark">
                Section 02 · Model
              </p>
              <h2 className="mt-3 text-display-md text-brand-navy">
                Built for two audiences, simultaneously.
              </h2>
              <div className="mt-6 space-y-5 text-base leading-relaxed text-brand-ink">
                <p>
                  Langford Staffing covers property services, leasing,
                  maintenance trades, logistics, and operating company support
                  roles across the US and Canada. A written intake and real
                  screening in a hiring market that still runs on
                  relationships and gut feel.
                </p>
                <p>
                  Most staffing relationships fail not because the candidate
                  was wrong on paper. They fail because the search skipped a
                  step. The first call was rushed. The real job was never
                  written down. Screening notes were not captured. The agency
                  went quiet after the start date.
                </p>
                <p>
                  {BRAND.name} makes those skips hard to repeat. Every
                  engagement starts with a written intake that captures what
                  the role really needs, not a job spec. Every candidate
                  reaches your inbox already screened. The same recruiter
                  stays on the file through the first thirty days after the
                  start date.
                </p>
              </div>

              <div
                className="mt-8 border-l-[3px] border-brand-saffron bg-brand-paper-warm/60 p-6"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-saffron-dark">
                  The gap we close
                </p>
                <p className="mt-3 text-base italic leading-relaxed text-brand-ink">
                  Most agencies send candidates against a job spec. We send
                  candidates against the real job: the actual decisions the
                  role makes, the common ways it can fail, and the onboarding
                  pace the new hire has to keep up with.
                </p>
              </div>
            </article>

            <aside className="lg:col-span-4 space-y-6">
              <div className="border border-brand-line bg-white p-6">
                <p className="label-inline">At a glance</p>
                <dl className="mt-4 space-y-3 text-sm">
                  {[
                    ["Operating in", "US & Canada"],
                    ["Coverage", "Coast to coast"],
                    ["Languages", "EN, ES, FR"],
                    ["Engagements", "6 types"]
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="flex items-baseline justify-between border-b border-brand-line-soft pb-2 last:border-0"
                    >
                      <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-ink-mute">
                        {label}
                      </dt>
                      <dd className="tabular text-[13px] font-semibold text-brand-navy">
                        {value}
                      </dd>
                    </div>
                  ))}
                </dl>
                <Link
                  href="/contact/"
                  className="btn-primary mt-6 w-full justify-center"
                >
                  Talk to our team <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Staffing methodology comparison */}
      <MethodologyCompare />

      {/* Values — briefing rows */}
      <section className="bg-brand-paper-warm/40 section">
        <div className="container-prose">
          <SectionHeading
            eyebrow="Section 04 · Values"
            title="Four principles, applied every engagement."
            description="Values are how we behave when no one is auditing us."
            size="lg"
            align="center"
            className="mb-12"
          />

          <div className="grid gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="border-t border-brand-navy pt-5"
                >
                  <Icon className="h-5 w-5 text-brand-navy" strokeWidth={1.75} />
                  <h3 className="mt-4 text-[16px] font-semibold text-brand-navy">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-ink-soft">
                    {v.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Compliance — single dignified statement */}
      <section className="section">
        <div className="container-narrow">
          <div className="border border-brand-line bg-brand-navy p-10 text-white lg:p-12">
            <p className="inline-flex border-b border-brand-saffron pb-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-saffron">
              Compliance
            </p>
            <h2 className="mt-5 max-w-3xl text-display-md font-semibold">
              Conducted under applicable US and Canadian employment law.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80">
              Every placement is structured to meet applicable federal, state,
              and provincial employment law in the relevant US or Canadian
              jurisdiction. We work alongside your in-house counsel and HR; we
              do not substitute for them. Where engagements involve cross-border
              work, we document the implications during scoping rather than
              after.
            </p>
            <Link href="/services/" className="link-arrow-light mt-7">
              Engagement detail <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        variant="navy"
        eyebrow="Bring us your hardest hire"
        title="Tell us what you need. We will tell you honestly what we can deliver."
        description="A written brief. An honest read on the market. A clear next step."
        primaryCta={{ href: "/contact/", label: "Talk to a recruiter" }}
        secondaryCta={{ href: "/services/", label: "All services" }}
      />
    </>
  );
}

/**
 * Monumental tabular numerals for the editorial slab.
 * Keeps the briefing-document register: serif numeral, label small caps.
 */
function Stat({
  number,
  unit,
  label
}: {
  number: string;
  unit: string;
  label: string;
}) {
  return (
    <div className="p-7 sm:p-8">
      <div className="flex items-baseline gap-2">
        <span
          className="font-display text-[44px] font-semibold leading-none text-brand-navy tabular-nums"
          style={{ fontFeatureSettings: "'tnum' on, 'lnum' on" }}
        >
          {number}
        </span>
        <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-ink-mute">
          {unit}
        </span>
      </div>
      <p className="mt-3 text-[12px] leading-snug text-brand-ink-soft">
        {label}
      </p>
    </div>
  );
}

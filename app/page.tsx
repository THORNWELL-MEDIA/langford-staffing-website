import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  ClipboardList,
  Search,
  Users,
  Briefcase,
  UserSearch,
  PhoneCall,
  CheckCircle2
} from "lucide-react";
import { CITIES } from "@/lib/cities";
import { BRAND, NAP } from "@/lib/constants";
import { img } from "@/lib/images";
import { BUCKETS } from "@/lib/serviceMeta";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";
import AnimatedStat from "@/components/AnimatedStat";
import TrustMarquee from "@/components/TrustMarquee";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import FindLocalRecruiter from "@/components/FindLocalRecruiter";
import ProblemsWeSolve from "@/components/ProblemsWeSolve";
import TimeToFillChart from "@/components/TimeToFillChart";
import IndustriesTabs from "@/components/IndustriesTabs";
import OperatorProcess from "@/components/OperatorProcess";
import JobBoardPreview from "@/components/JobBoardPreview";
import TestimonialCard from "@/components/TestimonialCard";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: `${BRAND.name} | Staffing across the United States and Canada`,
  description:
    "We staff warehouses, offices, clinics, and job sites across the US and Canada. Tell us the job and we send you a short list of people who can do it, often in days."
};

export default function HomePage() {
  const featuredCities = CITIES.slice(0, 6);

  return (
    <>
      <SchemaJsonLd
        data={breadcrumbSchema([{ name: "Home", url: NAP.websiteUrl + "/" }])}
      />

      {/* === EXECUTIVE BRIEFING HERO ===
         Full-width navy band. No lifestyle photo. Briefing-style metadata
         row up top. Right column carries a structured engagement matrix
         instead of a marketing card. */}
      <section className="relative isolate overflow-hidden bg-brand-navy text-white">
        {/* Saffron-on-navy expansion accent strip.
            High-contrast (8.9:1) so it reads as a press-release datum, not
            decoration. Marker dot pulses to indicate live desk activity. */}
        <div className="relative border-b border-brand-saffron/40 bg-brand-navy-dark">
          <div className="container-prose flex flex-wrap items-center justify-center gap-x-3 gap-y-1 py-2.5 text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-saffron sm:text-[12px]">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-brand-saffron opacity-60 motion-safe:animate-ping-soft" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand-saffron" />
            </span>
            Now serving Canada and the United States.
            <span className="hidden h-3 w-px bg-brand-saffron/40 sm:inline-block" />
            <span className="text-brand-saffron-light">
              Opening Canadian desks across ten metros.
            </span>
          </div>
        </div>

        {/* Subtle hairline grid wash */}
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
          {/* Briefing metadata row */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/15 pb-6">
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[10px] font-semibold uppercase tracking-[0.20em]">
              <span className="text-brand-saffron">Executive Brief</span>
              <span className="h-3 w-px bg-white/25" />
              <span className="text-white/80">2026 · North America</span>
              <span className="hidden h-3 w-px bg-white/25 sm:inline-block" />
              <span className="hidden text-white/80 sm:inline">
                US and Canada staffing
              </span>
            </div>
            <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.20em] text-white/70">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-brand-saffron opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-saffron" />
              </span>
              Recruiter desks live
            </div>
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <h1 className="text-display-xl font-semibold text-white text-balance">
                We help you hire good people,{" "}
                <em className="not-italic font-semibold text-brand-saffron">
                  fast.
                </em>
              </h1>
              <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-white/85">
                We staff warehouses, offices, clinics, and job sites across the
                US and Canada. You tell us the job. We find people who can do it,
                check them out, and send you the best ones. Most jobs get a short
                list in about one day.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact/" className="btn-saffron">
                  Talk to a recruiter
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/careers/" className="btn-ghost-light">
                  See open roles
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-[12px] text-white/75">
                <span className="inline-flex items-center gap-2">
                  <span className="h-1 w-1 bg-brand-saffron" />
                  One business day response
                </span>
                <span className="inline-flex items-center gap-2">
                  <PhoneCall className="h-3.5 w-3.5 text-brand-saffron" />
                  <a
                    href={`tel:${NAP.phoneE164}`}
                    className="text-white tabular no-underline hover:text-brand-saffron"
                  >
                    {NAP.phoneDisplay}
                  </a>
                </span>
              </div>
            </div>

            {/* Right column — structured engagement matrix */}
            <div className="lg:col-span-5">
              <div className="border border-white/15 bg-white/[0.04] p-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-saffron">
                  Engagement matrix
                </p>
                <table className="mt-4 w-full border-collapse text-[13px]">
                  <tbody>
                    {[
                      ["Permanent placement", "30-day fit review"],
                      ["Temporary staffing", "Day-of-need bench"],
                      ["Contract-to-hire", "Calibrated 90-day"],
                      ["Executive search", "Structured slate"],
                      ["Volume hiring", "Leasing / trades pipeline"],
                      ["Specialty trades", "Credential-verified"]
                    ].map(([a, b]) => (
                      <tr
                        key={a}
                        className="border-b border-white/10 last:border-0"
                      >
                        <td className="py-2.5 pr-4 font-semibold text-white">
                          {a}
                        </td>
                        <td className="py-2.5 text-right text-white/65">{b}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <Link
                  href="/services/"
                  className="link-arrow-light mt-5"
                >
                  Engagement detail <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Briefing stats row — tabular, dignified */}
          <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-white/15 pt-10 sm:grid-cols-4">
            <BriefingStat value="6" label="Engagement types" />
            <BriefingStat value="100" suffix="+" label="Cities covered" />
            <BriefingStat value="10" suffix="+" label="Industries served" />
            <BriefingStat value="US · CA" label="Operating coverage" isText />
          </div>
        </div>
      </section>

      <TrustMarquee />

      {/* === FIND A LOCAL RECRUITER === */}
      {/* <FindLocalRecruiter
        title="Find your local recruiter"
        description="Drop your city or postal code. A named Langford recruiter from the closest desk responds within one business day. Same person from intake through onboarding."
      /> */}

      {/* === PROBLEMS WE SOLVE === */}
      <ProblemsWeSolve
        variant="alt"
        eyebrow="Where most staffing breaks"
        title="Four problems we built Langford to fix"
        description="Operators kept telling us the same four things. Here is how we solve each one, in writing, on every engagement."
      />

      {/* === TIME-TO-FILL CHART === */}
      <TimeToFillChart />

      {/* === INDUSTRIES TABS — EXECUTIVE BRIEFING === */}
      <section className="section bg-brand-paper-warm/40">
        <div className="container-prose">
          <SectionHeading
            eyebrow="Industries we staff"
            title="Calibrated pipelines across the operating-company stack."
            description="Each desk is kept warm year-round, not spun up when you call. Tap an industry to see representative active roles."
            size="lg"
            className="mb-2"
          />
          <IndustriesTabs />
        </div>
      </section>

      {/* === OPERATOR-GRADE PROCESS === */}
      <OperatorProcess />

      {/* === SERVICES BUCKETS === */}
      <section className="section">
        <div className="container-prose">
          <div className="flex flex-wrap items-end justify-between gap-6 border-b border-brand-line pb-6">
            <SectionHeading
              eyebrow="Services"
              title="Six engagement types covering the full hiring lifecycle."
              size="lg"
            />
            <Link href="/services/" className="link-arrow">
              View all services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-x-10 gap-y-8 lg:grid-cols-3">
            {BUCKETS.map((b, i) => (
              <div
                key={b.name}
                className={
                  "pl-6 " +
                  (i > 0 ? "lg:border-l lg:border-brand-line" : "")
                }
                style={{ borderLeftColor: "transparent" }}
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-saffron-dark">
                  Bucket {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 text-[20px] font-semibold text-brand-navy">
                  {b.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink-soft">
                  {b.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === LOCATIONS — BRIEFING TABLE === */}
      <section className="section bg-brand-paper-warm/40">
        <div className="container-prose">
          <div className="flex flex-wrap items-end justify-between gap-6 border-b border-brand-line pb-6">
            <SectionHeading
              eyebrow="Where we work"
              title="Local recruiter desks across major North American metros."
              size="lg"
            />
            <Link href="/locations/" className="link-arrow">
              All locations <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featuredCities.map((c) => (
              <Link
                key={c.slug}
                href={`/locations/${c.slug}/`}
                className="group block border border-brand-line bg-white p-6 no-underline transition hover:border-brand-navy"
              >
                <div className="flex items-center justify-between">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-saffron-dark">
                    {c.province}
                  </p>
                  <ArrowUpRight className="h-4 w-4 text-brand-ink-mute transition group-hover:text-brand-saffron" />
                </div>
                <h3 className="mt-3 text-[22px] font-semibold leading-tight text-brand-navy">
                  {c.name}
                </h3>
                <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-brand-ink-soft">
                  {c.intro.split(". ")[0]}.
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* === CLIENT VOICE === */}
      <section className="section">
        <div className="container-prose">
          <SectionHeading
            eyebrow="Operator voice"
            title="Anonymized client voice from current engagements."
            description="Hospitality, multifamily, logistics, and property services in Canada and the United States."
            size="lg"
            align="center"
            className="mb-12"
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                quote:
                  "Structured intake is what separates them. They ask the questions about the role, the team, and the operating cadence the candidate will actually face.",
                role: "Multifamily Ops Director, Yorkville, Toronto"
              },
              {
                quote:
                  "Day-of-need turnaround on maintenance trades has saved us multiple weekends. Their bench is real and their vetting standard does not slip.",
                role: "Regional Property Manager, Mississauga"
              },
              {
                quote:
                  "First shortlist landed inside seventy-two hours. Three of four candidates were offer-grade. We hired the second one and kept the others in pipeline.",
                role: "Director of Operations, Brampton 3PL"
              }
            ].map((t, i) => (
              <TestimonialCard key={i} quote={t.quote} role={t.role} />
            ))}
          </div>
        </div>
      </section>

      {/* === OPEN ROLES SAMPLE === */}
      <section className="section bg-brand-paper-warm/40">
        <div className="container-prose">
          <SectionHeading
            eyebrow="Live engagements"
            title="A snapshot of what our recruiters are running this week."
            description="Anonymized at the employer level. Most placements never reach a public board."
            size="lg"
            align="center"
            className="mb-10"
          />
          <JobBoardPreview />
        </div>
      </section>

      {/* === FINAL CTA === */}
      <CTASection
        variant="navy"
        eyebrow="Ready when you are"
        title="Tell us about the role. We respond within one business day."
        description="A documented intake. A candid market read. A structured next step. Every time."
        primaryCta={{ href: "/contact/", label: "Talk to a recruiter" }}
        secondaryCta={{ href: "/careers/", label: "See open roles" }}
      />
    </>
  );
}

/**
 * Briefing-style stat tile. Tabular numerals, navy underline rule under
 * label. No animated counter on hero — kept dignified.
 */
function BriefingStat({
  value,
  label,
  suffix,
  isText
}: {
  value: string;
  label: string;
  suffix?: string;
  isText?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <span
        className={
          "tabular leading-none tracking-tight text-white " +
          (isText
            ? "text-[40px] font-semibold sm:text-[48px]"
            : "text-[40px] font-semibold sm:text-[48px]")
        }
      >
        {value}
        {suffix}
      </span>
      <span className="border-t border-brand-saffron/60 pt-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/70">
        {label}
      </span>
    </div>
  );
}

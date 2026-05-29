import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  ClipboardCheck,
  Send,
  Sparkles,
  Users,
  CheckCircle2
} from "lucide-react";
import { CITIES } from "@/lib/cities";
import { SERVICES } from "@/lib/services";
import { BRAND, NAP } from "@/lib/constants";
import { editorial } from "@/lib/images";
import ContactForm from "@/components/ContactForm";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import JobBoardPreview from "@/components/JobBoardPreview";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: `Open Jobs Across the United States and Canada`,
  description: `Browse open positions across the US and Canada through ${BRAND.name}. Real roles, real employers, structured interviews.`
};

const INDUSTRIES = [
  "Hospitality and tourism",
  "Property and facilities services",
  "Logistics and operations",
  "Professional and corporate",
  "Retail and consumer",
  "Specialty trades and technical"
];

const HOW_IT_WORKS = [
  {
    icon: Send,
    title: "Apply",
    body: "Submit your details and a current résumé."
  },
  {
    icon: ClipboardCheck,
    title: "Screen",
    body: "A recruiter responds within one business day."
  },
  {
    icon: Sparkles,
    title: "Match",
    body: "We present you only to roles where the fit is real."
  }
];

export default function PositionsPage() {
  return (
    <>
      <SchemaJsonLd
        data={breadcrumbSchema([
          { name: "Home", url: NAP.websiteUrl + "/" },
          { name: "Open Positions", url: NAP.websiteUrl + "/positions/" }
        ])}
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
              <span className="text-white/80">For candidates</span>
            </div>
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <h1 className="text-display-xl font-semibold text-balance">
                Real roles, real employers,{" "}
                <em className="not-italic font-semibold text-brand-saffron">
                  structured interviews.
                </em>
              </h1>
              <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-white/85">
                Browse openings we are actively recruiting for, or submit a
                general application and we reach out when a fitting role opens.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="#general-application" className="btn-saffron">
                  Submit your résumé
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/locations/" className="btn-ghost-light">
                  Browse by city
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === EDITORIAL SLAB — full-bleed photograph === */}
      <section className="bg-brand-paper">
        <div className="container-prose">
          <figure className="relative -mt-2 overflow-hidden border-x border-b border-brand-line">
            <div className="relative aspect-[21/9] w-full bg-brand-navy">
              <Image
                src={editorial("positions-hero")}
                alt=""
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5">
              <span className="bg-brand-navy/75 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/85 backdrop-blur-sm">
                Plate · The work, photographed
              </span>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* How it works strip */}
      <section className="section-tight">
        <div className="container-prose">
          <div className="border border-brand-line bg-white">
            <div className="grid gap-0 md:grid-cols-3">
              {HOW_IT_WORKS.map((s, i) => {
                const I = s.icon;
                return (
                  <div
                    key={s.title}
                    className={
                      "flex items-start gap-4 p-6 " +
                      (i > 0 ? "md:border-l md:border-brand-line" : "")
                    }
                  >
                    <I className="h-5 w-5 flex-none text-brand-navy" strokeWidth={1.75} />
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-saffron-dark">
                        Step {String(i + 1).padStart(2, "0")}
                      </p>
                      <h3 className="mt-1 text-[16px] font-semibold text-brand-navy">
                        {s.title}
                      </h3>
                      <p className="mt-1.5 text-sm text-brand-ink-soft">{s.body}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="section">
        <div className="container-prose grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8 space-y-12">
            <JobBoardPreview showSeeAll={false} />

            <div className="border-l-[3px] border-brand-saffron bg-brand-paper-warm/50 p-6 sm:p-7">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-saffron-dark">
                Don&rsquo;t see your role?
              </p>
              <h2 className="mt-3 font-display text-[22px] font-semibold text-brand-navy">
                We work hundreds of unposted searches every month.
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-brand-ink-soft">
                Most placements never reach a public board. Submit a résumé and
                a Langford recruiter will match you against live searches across
                the industries below.
              </p>
              <Link
                href="#general-application"
                className="link-arrow mt-5"
              >
                General application <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div>
              <SectionHeading
                eyebrow="Industries"
                title="Currently placing in."
              />
              <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                {INDUSTRIES.map((i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 border border-brand-line bg-white p-3 text-sm text-brand-ink"
                  >
                    <CheckCircle2 className="h-4 w-4 flex-none text-brand-saffron-dark" />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <SectionHeading
                eyebrow="Engagement types"
                title="We manage these candidate engagements."
              />
              <ul className="mt-6 divide-y divide-brand-line border-y border-brand-line">
                {SERVICES.filter((s) =>
                  ["both", "candidate"].includes(s.audience)
                ).map((s, idx) => (
                  <li
                    key={s.slug}
                  >
                    <Link
                      href={`/services/${s.slug}/`}
                      className="group flex items-start justify-between gap-6 py-5 no-underline"
                    >
                      <div className="flex items-baseline gap-4">
                        <span
                          className="font-display text-[24px] font-semibold leading-none text-brand-navy/30 tabular-nums"
                          style={{ fontFeatureSettings: "'tnum' on, 'lnum' on" }}
                        >
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <div>
                          <h3 className="font-display text-[18px] font-semibold text-brand-navy transition group-hover:text-brand-saffron-dark">
                            {s.name}
                          </h3>
                          <p className="mt-1.5 text-sm text-brand-ink-soft">
                            {s.summary}
                          </p>
                        </div>
                      </div>
                      <ArrowUpRight className="h-5 w-5 flex-none text-brand-navy" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div
              id="general-application"
              className="scroll-mt-32 border border-brand-line bg-white p-7"
            >
              <ContactForm variant="candidate" />
            </div>
          </div>

          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-32 lg:self-start">
            <div className="border border-brand-line bg-white p-6">
              <h3 className="border-b border-brand-navy pb-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-navy">
                Filter by city
              </h3>
              <ul className="mt-4 space-y-1 text-sm">
                {CITIES.map((c) => (
                  <li key={c.slug}>
                    <Link
                      href={`/locations/${c.slug}/`}
                      className="flex items-center justify-between border-b border-brand-line-soft py-2.5 text-brand-ink no-underline transition hover:text-brand-saffron-dark last:border-0"
                    >
                      <span>{c.name}</span>
                      <ArrowRight className="h-3.5 w-3.5 text-brand-ink-mute" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-brand-line bg-brand-navy p-6 text-white">
              <Users className="h-5 w-5 text-brand-saffron" strokeWidth={1.75} />
              <h3 className="mt-4 font-display text-[18px] font-semibold">
                Why candidates work with us
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-white/85">
                {[
                  "Structured interviews, never guess what comes next.",
                  "Compensation, schedule, and scope clarity up front.",
                  "Continued access to roles if the first fit is not right.",
                  "Bilingual EN/FR support across Quebec and Ottawa."
                ].map((p) => (
                  <li key={p} className="flex gap-2.5">
                    <CheckCircle2 className="h-4 w-4 flex-none translate-y-0.5 text-brand-saffron" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <CTASection
        variant="navy"
        eyebrow="Your next role"
        title="On terms that respect your time."
        description="Submit a résumé and a Langford recruiter follows up within one business day."
        primaryCta={{ href: "#general-application", label: "Submit your résumé" }}
        secondaryCta={{ href: "/locations/", label: "Browse by city" }}
      />
    </>
  );
}

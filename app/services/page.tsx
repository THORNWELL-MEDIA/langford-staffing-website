import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ClipboardList,
  Search,
  Users,
  ShieldCheck,
  ArrowRight
} from "lucide-react";
import { SERVICES } from "@/lib/services";
import { BRAND, NAP } from "@/lib/constants";
import { BUCKETS, metaFor } from "@/lib/serviceMeta";
import { editorial } from "@/lib/images";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: `Staffing Services Across the United States and Canada`,
  description:
    "Permanent placement, temporary staffing, contract-to-hire, executive search, volume hiring, and specialty recruitment across the US and Canada. Documented, fast, fit-focused."
};

// Map each service slug to its editorial photo key.
const SERVICE_PHOTO: Record<string, string> = {
  "permanent-placement": "service-permanent-placement",
  "executive-search": "service-executive-search",
  "contract-to-hire": "service-contract-to-hire",
  "temporary-staffing": "service-temporary-staffing",
  "volume-hiring": "service-volume-hiring",
  "specialty-search": "service-specialty-search"
};

export default function ServicesPage() {
  return (
    <>
      <SchemaJsonLd
        data={breadcrumbSchema([
          { name: "Home", url: NAP.websiteUrl + "/" },
          { name: "Services", url: NAP.websiteUrl + "/services/" }
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
              <span className="text-white/80">Section 02 · Services</span>
            </div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.20em] text-white/70">
              Six engagement types
            </div>
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <h1 className="text-display-xl font-semibold text-balance">
                Six engagement types, for{" "}
                <em className="not-italic font-semibold text-brand-saffron">
                  every kind of fit you need to confirm.
                </em>
              </h1>
              <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-white/85">
                Permanent, temporary, contract-to-hire, executive, volume, and
                specialty engagements, structured for the US and Canadian
                market and run on a documented, compliance-first process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial photo band beneath the briefing hero */}
      <section className="bg-brand-paper">
        <div className="container-prose">
          <figure className="relative -mt-2 overflow-hidden border-x border-b border-brand-line">
            <div className="relative aspect-[21/9] w-full bg-brand-navy">
              <Image
                src={editorial("services-hero")}
                alt=""
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5">
              <span className="bg-brand-navy/75 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/85 backdrop-blur-sm">
                Plate 02 · Briefing review, in practice
              </span>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Buckets row — briefing-style three-column rule */}
      <section className="section-tight border-b border-brand-line">
        <div className="container-prose">
          <div className="grid gap-x-10 gap-y-8 lg:grid-cols-3">
            {BUCKETS.map((b, i) => (
              <div
                key={b.name}
                className={"pl-6 " + (i > 0 ? "lg:border-l lg:border-brand-line" : "")}
                style={{ borderLeftColor: i === 0 ? "transparent" : undefined }}
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

      {/* === EDITORIAL SLAB — full-width service cards replacing card grid === */}
      <section className="section">
        <div className="container-prose">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-saffron-dark">
            Section 03 · Engagements
          </p>
          <h2 className="mt-3 max-w-3xl text-display-md text-brand-navy">
            Six engagements, in detail.
          </h2>

          <ul className="mt-12 divide-y divide-brand-line border-y border-brand-line">
            {SERVICES.map((s, i) => {
              const meta = metaFor(s.slug);
              const Icon = meta.icon;
              const photoKey = SERVICE_PHOTO[s.slug];
              return (
                <li key={s.slug} className="grid gap-0 lg:grid-cols-12">
                  {/* Left: photo */}
                  <Link
                    href={`/services/${s.slug}/`}
                    className="group relative block overflow-hidden bg-brand-navy lg:col-span-5"
                    aria-label={`${s.name} detail`}
                  >
                    <div className="relative aspect-[16/10] w-full lg:aspect-[4/3]">
                      {photoKey ? (
                        <Image
                          src={editorial(photoKey as any)}
                          alt=""
                          fill
                          sizes="(min-width: 1024px) 42vw, 100vw"
                          className="object-cover"
                        />
                      ) : null}
                    </div>
                  </Link>
                  {/* Right: editorial body */}
                  <div className="flex flex-col justify-between p-7 lg:col-span-7 lg:border-l lg:border-brand-line lg:p-10">
                    <div>
                      <div className="flex items-baseline gap-4">
                        <span
                          className="font-display text-[36px] font-semibold leading-none text-brand-navy/30 tabular-nums"
                          style={{ fontFeatureSettings: "'tnum' on, 'lnum' on" }}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-saffron-dark">
                          {meta.bucket}
                        </p>
                      </div>
                      <h3 className="mt-3 font-display text-[26px] font-semibold leading-tight text-brand-navy sm:text-[30px]">
                        <Link
                          href={`/services/${s.slug}/`}
                          className="no-underline transition hover:text-brand-saffron-dark"
                        >
                          {s.name}
                        </Link>
                      </h3>
                      <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-brand-ink-soft">
                        {s.summary}
                      </p>
                    </div>
                    <div className="mt-6 flex items-center gap-5">
                      <Link
                        href={`/services/${s.slug}/`}
                        className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.16em] text-brand-navy no-underline transition hover:text-brand-saffron-dark"
                      >
                        Engagement detail <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                      <span className="inline-flex h-7 w-7 items-center justify-center border border-brand-line text-brand-navy">
                        <Icon className="h-3.5 w-3.5" strokeWidth={1.75} />
                      </span>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* How we work — briefing-row layout */}
      <section className="bg-brand-paper-warm/40 section">
        <div className="container-prose">
          <SectionHeading
            eyebrow="How we work"
            title="One process, applied to every engagement type."
            description="From volume hiring to executive search, the same disciplined steps apply. The depth changes; the structure does not."
            size="lg"
            align="center"
            className="mb-12"
          />

          <div className="grid gap-x-10 gap-y-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: ClipboardList,
                n: "01",
                title: "Intake",
                body: "Documented role, comp band, deal-breakers, timeline."
              },
              {
                icon: Search,
                n: "02",
                title: "Source & screen",
                body: "Active outreach plus existing network. Screening before introduction."
              },
              {
                icon: Users,
                n: "03",
                title: "Shortlist",
                body: "Documented shortlist with notes on fit, motivations, and any flags."
              },
              {
                icon: ShieldCheck,
                n: "04",
                title: "Onboarding",
                body: "Continuity through offer, acceptance, and first thirty days."
              }
            ].map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.title}
                  className="border-t border-brand-navy pt-5"
                >
                  <Icon className="h-5 w-5 text-brand-navy" strokeWidth={1.75} />
                  <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-ink-mute">
                    Step {s.n}
                  </p>
                  <h3 className="mt-1.5 text-[16px] font-semibold text-brand-navy">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-ink-soft">
                    {s.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection
        variant="navy"
        eyebrow="Not sure which fits?"
        title="Tell us about the role. We recommend the engagement structure."
        description="Speed, scope, fit-confidence: every search has a different optimization."
        primaryCta={{ href: "/contact/", label: "Talk to a recruiter" }}
        secondaryCta={{ href: "/careers/", label: "See open roles" }}
      />
    </>
  );
}

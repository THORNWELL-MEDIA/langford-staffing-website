import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Phone
} from "lucide-react";
import {
  SERVICES,
  getService,
  serviceSlugs,
  type Service
} from "@/lib/services";
import { CITIES } from "@/lib/cities";
import { STATES } from "@/lib/states";
import { BRAND, NAP } from "@/lib/constants";
import { metaFor } from "@/lib/serviceMeta";
import { editorial } from "@/lib/images";
import CTASection from "@/components/CTASection";
import Accordion from "@/components/Accordion";
import SectionHeading from "@/components/SectionHeading";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import ServiceFlowDiagram from "@/components/ServiceFlowDiagram";
import {
  breadcrumbSchema,
  serviceSchema,
  faqSchema
} from "@/lib/schema";

export function generateStaticParams() {
  return serviceSlugs();
}

export function generateMetadata({
  params
}: {
  params: { slug: string };
}): Metadata {
  const service = getService(params.slug);
  if (!service) return { title: "Service Not Found" };
  return {
    title: service.title,
    description: service.metaDescription
  };
}

// Map slug to editorial photo key.
const SERVICE_PHOTO: Record<string, string> = {
  "permanent-placement": "service-permanent-placement",
  "executive-search": "service-executive-search",
  "contract-to-hire": "service-contract-to-hire",
  "temporary-staffing": "service-temporary-staffing",
  "volume-hiring": "service-volume-hiring",
  "specialty-search": "service-specialty-search"
};

// Bucket-level supporting photo for the in-practice slab.
const BUCKET_PHOTO: Record<string, string> = {
  Acquire: "employers-hero",
  Manage: "industries-hero",
  Onboard: "candidates-hero"
};

export default function ServicePage({
  params
}: {
  params: { slug: string };
}) {
  const service = getService(params.slug);
  if (!service) notFound();

  const url = `${NAP.websiteUrl}/services/${service.slug}/`;
  const meta = metaFor(service.slug);
  const Icon = meta.icon;
  const related = service.related
    .map((slug) => SERVICES.find((s) => s.slug === slug))
    .filter((s): s is Service => Boolean(s));
  const featuredCities = CITIES.slice(0, 4);
  const heroPhoto = SERVICE_PHOTO[service.slug];
  const supportingPhoto = BUCKET_PHOTO[meta.bucket] || "industries-hero";

  return (
    <>
      <SchemaJsonLd
        data={[
          serviceSchema({
            name: service.name,
            description: service.metaDescription,
            url
          }),
          faqSchema(service.faqs),
          breadcrumbSchema([
            { name: "Home", url: NAP.websiteUrl + "/" },
            { name: "Services", url: NAP.websiteUrl + "/services/" },
            { name: service.name, url }
          ])
        ]}
      />

      {/* Hero — executive briefing band, no gradient */}
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
        <div className="relative container-prose grid gap-10 pt-12 pb-14 lg:grid-cols-12 lg:gap-12 lg:pt-16 lg:pb-20">
          <div className="lg:col-span-7">
            <nav className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/65">
              <Link
                href="/services/"
                className="text-white/65 no-underline transition hover:text-brand-saffron"
              >
                Services
              </Link>
              <ChevronRight className="h-3 w-3" />
              <span className="text-white/85">{service.name}</span>
            </nav>

            <div className="mt-6 inline-flex items-center gap-2 border border-white/20 bg-white/5 px-3 py-1.5">
              <Icon className="h-3.5 w-3.5 text-brand-saffron" strokeWidth={1.75} />
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white">
                {meta.bucket}
              </span>
            </div>
            <h1 className="mt-6 text-display-xl font-semibold text-balance">
              {service.h1}
            </h1>
            <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-white/85">
              {service.summary}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact/" className="btn-saffron">
                Request a shortlist
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/careers/" className="btn-ghost-light">
                See open roles
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <figure className="relative overflow-hidden border border-white/10 bg-brand-navy-dark">
              <div className="relative aspect-[4/5] w-full">
                {heroPhoto ? (
                  <Image
                    src={editorial(heroPhoto as any)}
                    alt=""
                    fill
                    priority
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover"
                  />
                ) : null}
              </div>
              <figcaption className="absolute bottom-3 left-3 right-3">
                <span className="bg-brand-navy/75 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/85 backdrop-blur-sm">
                  Plate · {service.shortName}
                </span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="section">
        <div className="container-prose grid gap-16 lg:grid-cols-12">
          <article className="lg:col-span-8 space-y-16">
            <div>
              <SectionHeading
                eyebrow="Overview"
                title={service.name}
              />
              <p className="mt-6 max-w-prose text-base leading-relaxed text-brand-ink">
                {service.longDescription}
              </p>
            </div>

            <div>
              <SectionHeading
                eyebrow="Who it's for"
                title={`${service.name} fits these situations.`}
              />
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {service.whoFor.map((w) => (
                  <li
                    key={w}
                    className="flex gap-3 border border-brand-line bg-white p-4 text-sm leading-relaxed text-brand-ink"
                  >
                    <CheckCircle2 className="h-5 w-5 flex-none text-brand-saffron-dark" />
                    <span>{w}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <SectionHeading
                eyebrow="Process"
                title={`The ${service.shortName.toLowerCase()} engagement.`}
              />
              <ol className="mt-10 space-y-4 border-y border-brand-line">
                {service.process.map((p, idx) => (
                  <li
                    key={p.step}
                    className="grid gap-5 border-b border-brand-line py-6 sm:grid-cols-[auto,1fr] sm:items-start sm:gap-8 last:border-0"
                  >
                    <div className="flex items-baseline gap-3">
                      <span
                        className="font-display text-[44px] font-semibold leading-none text-brand-navy/25 tabular-nums"
                        style={{ fontFeatureSettings: "'tnum' on, 'lnum' on" }}
                      >
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-saffron-dark">
                        Step {String(idx + 1).padStart(2, "0")}
                      </p>
                      <h3 className="mt-2 font-display text-[20px] font-semibold text-brand-navy">
                        {p.step}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-brand-ink-soft">
                        {p.detail}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <SectionHeading
                eyebrow="Industries"
                title={`Where ${service.shortName.toLowerCase()} engagements show up most.`}
              />
              <ul className="mt-8 grid gap-2 sm:grid-cols-2">
                {service.industries.map((i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 border border-brand-line bg-white px-4 py-3 text-sm text-brand-ink"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-saffron-dark" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>

            {/* === EDITORIAL SLAB — full-bleed supporting photograph + pull quote === */}
            <div className="border border-brand-line bg-white">
              <div className="relative aspect-[16/9] w-full bg-brand-navy">
                <Image
                  src={editorial(supportingPhoto as any)}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="border-t border-brand-line p-7 sm:p-9">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-saffron-dark">
                  In practice
                </p>
                <p className="mt-3 max-w-2xl font-display text-[20px] leading-snug text-brand-navy sm:text-[22px]">
                  Every {service.shortName.toLowerCase()} search runs the same
                  way. A written brief. A short, vetted list. No résumé
                  blasts. No surprises after the offer.
                </p>
              </div>
            </div>

            {/* Engagement flow diagram */}
            <ServiceFlowDiagram shortName={service.shortName} />

            <div className="border border-brand-line bg-brand-navy p-8 text-white lg:p-10">
              <p className="inline-flex border-b border-brand-saffron pb-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-saffron">
                Compliance
              </p>
              <h3 className="mt-5 font-display text-[24px] font-semibold leading-tight">
                Conducted under applicable US and Canadian employment law.
              </h3>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/80">
                Every {service.shortName.toLowerCase()} engagement is structured
                to meet applicable federal, state, and provincial employment
                law in the relevant US or Canadian jurisdiction.
                Engagement-specific terms, replacement provisions, conversion
                paths, and cross-border considerations, are documented at
                intake.
              </p>
            </div>

            <div className="border-l-[3px] border-brand-saffron bg-brand-paper-warm/50 p-7 sm:p-8">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-saffron-dark">
                What clients say
              </p>
              <blockquote className="mt-4 font-display text-[20px] leading-snug text-brand-navy sm:text-[22px]">
                &ldquo;Structured intake is what separates them. They ask the
                questions about the role, the team, and the operating cadence
                that the candidate will actually face. Placement quality
                reflects that homework.&rdquo;
              </blockquote>
              <p className="mt-5 text-[12px] font-semibold uppercase tracking-[0.16em] text-brand-navy">
                Multifamily Ops Director
              </p>
              <p className="text-[11px] uppercase tracking-[0.16em] text-brand-ink-mute">
                Verified client
              </p>
            </div>

            <div>
              <SectionHeading
                eyebrow="FAQ"
                title="Common questions."
              />
              <div className="mt-8">
                <Accordion items={service.faqs} />
              </div>
            </div>

            {/* Roll-up: this service across every state we cover */}
            <div>
              <SectionHeading
                eyebrow="Where we staff"
                title={`${service.shortName} in every market we serve.`}
                description="We run this service across each state and province below. Open a state to find your city."
              />
              <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {STATES.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/locations/${s.slug}/`}
                      className="flex items-center justify-between border border-brand-line bg-white px-4 py-3 no-underline transition hover:border-brand-saffron"
                    >
                      <span className="font-semibold text-brand-navy">
                        {s.name}
                      </span>
                      <span className="text-[11px] uppercase tracking-[0.14em] text-brand-ink-mute">
                        {s.cities.length}{" "}
                        {s.cities.length === 1 ? "city" : "cities"}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start space-y-6">
            <div className="border border-brand-line bg-brand-navy p-7 text-white">
              <p className="inline-flex border-b border-brand-saffron pb-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-saffron">
                Talk to our team
              </p>
              <h3 className="mt-4 font-display text-[20px] font-semibold">
                Start a {service.shortName.toLowerCase()} engagement
              </h3>
              <p className="mt-3 text-sm text-white/80">
                We write the role down. Short, vetted list in about five
                business days for most searches. We stay on the file through
                the first month.
              </p>
              <Link href="/contact/" className="btn-saffron mt-6 w-full justify-center">
                Request a shortlist
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={`tel:${NAP.phoneE164 || ""}`}
                className="mt-4 inline-flex w-full items-center justify-center gap-2 text-sm font-medium text-white/85 no-underline transition hover:text-white"
              >
                <Phone className="h-3.5 w-3.5" />
                {NAP.phoneDisplay}
              </a>
            </div>

            <div className="border border-brand-line bg-white p-6">
              <h3 className="border-b border-brand-navy pb-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-navy">
                Where we hire
              </h3>
              <ul className="mt-4 space-y-1 text-sm">
                {featuredCities.map((c) => (
                  <li key={c.slug}>
                    <Link
                      href={`/locations/${c.slug}/`}
                      className="flex items-center justify-between border-b border-brand-line-soft py-2.5 text-brand-ink no-underline transition hover:text-brand-saffron-dark last:border-0"
                    >
                      <span>{c.name}</span>
                      <span className="text-[11px] uppercase tracking-[0.14em] text-brand-ink-mute">
                        {c.province}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href="/locations/"
                className="link-arrow mt-5 text-sm"
              >
                All locations <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="border border-brand-line bg-white p-6">
              <h3 className="border-b border-brand-navy pb-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-navy">
                Related services
              </h3>
              <ul className="mt-4 space-y-3 text-sm">
                {related.map((s) => {
                  const m = metaFor(s.slug);
                  const Ic = m.icon;
                  return (
                    <li key={s.slug}>
                      <Link
                        href={`/services/${s.slug}/`}
                        className="group flex items-start gap-3 no-underline"
                      >
                        <span className="flex h-8 w-8 flex-none items-center justify-center border border-brand-line text-brand-navy transition group-hover:border-brand-saffron group-hover:text-brand-saffron-dark">
                          <Ic className="h-4 w-4" strokeWidth={1.75} />
                        </span>
                        <span>
                          <span className="block font-semibold text-brand-navy transition group-hover:text-brand-saffron-dark">
                            {s.name}
                          </span>
                          <span className="mt-0.5 block text-[11px] uppercase tracking-[0.14em] text-brand-ink-mute">
                            {s.shortName}
                          </span>
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <CTASection
        variant="navy"
        eyebrow="Ready to start"
        title={`Start a ${service.shortName.toLowerCase()} engagement.`}
        description="Tell us the role and the timeline. A Langford team member will respond within one business day."
        primaryCta={{ href: "/contact/", label: "Request a shortlist" }}
        secondaryCta={{ href: "/services/", label: "All services" }}
      />
    </>
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ChevronRight,
  MapPin,
  Phone,
  CheckCircle2,
  Briefcase,
  DollarSign,
  Quote
} from "lucide-react";
import {
  SILO_CITIES,
  SILO_INDUSTRIES,
  getSiloCity,
  getSiloIndustry,
  siloStaticParams,
  getEmployerQuote,
  getCandidateQuote
} from "@/lib/silo-data";
import { BRAND, NAP } from "@/lib/constants";
import { IMG, unsplash } from "@/lib/images";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import { breadcrumbSchema, localBusinessSchema } from "@/lib/schema";

export function generateStaticParams() {
  return siloStaticParams();
}

interface Params {
  params: { city: string; industry: string };
}

export function generateMetadata({ params }: Params): Metadata {
  const city = getSiloCity(params.city);
  const ind = getSiloIndustry(params.industry);
  if (!city || !ind) return { title: "Not Found" };
  return {
    title: `${ind.name} Staffing in ${city.name}`,
    description: `${BRAND.name} places ${ind.short.toLowerCase()} talent across ${city.name}, ${city.province}. A written intake, a short vetted list, and a real local recruiter who knows the market.`
  };
}

const CITY_IMG: Record<string, string> = {
  toronto: IMG.toronto,
  mississauga: IMG.toronto,
  vancouver: IMG.vancouver,
  calgary: IMG.calgary,
  edmonton: IMG.calgary,
  montreal: IMG.montreal,
  ottawa: IMG.toronto,
  halifax: IMG.boston,
  winnipeg: IMG.calgary,
  "quebec-city": IMG.montreal
};

const INDUSTRY_IMG: Record<string, string> = {
  hospitality: IMG.hospitality,
  "logistics-warehousing": IMG.logistics,
  "property-services": IMG.property,
  manufacturing: IMG.construction,
  "healthcare-support": IMG.healthcare,
  "professional-services": IMG.professional
};

export default function SiloPage({ params }: Params) {
  const city = getSiloCity(params.city);
  const ind = getSiloIndustry(params.industry);
  if (!city || !ind) notFound();

  const cityIndex = SILO_CITIES.findIndex((c) => c.slug === city.slug);
  const employerQuote = getEmployerQuote(ind.slug, cityIndex);
  const candidateQuote = getCandidateQuote(ind.slug, cityIndex);

  const heroImg = unsplash(
    INDUSTRY_IMG[ind.slug] || CITY_IMG[city.slug] || IMG.toronto,
    2200
  );

  const url = `${NAP.websiteUrl}/locations/${city.slug}/${ind.slug}/`;

  // Sibling silo links: same industry, three nearby cities
  const siblingCities = SILO_CITIES.filter((c) => c.slug !== city.slug).slice(
    0,
    4
  );
  // Sibling industries within the same city (other 5)
  const siblingIndustries = SILO_INDUSTRIES.filter(
    (i) => i.slug !== ind.slug
  );

  return (
    <>
      <SchemaJsonLd
        data={[
          localBusinessSchema({
            "@type": "EmploymentAgency",
            name: `${BRAND.name} ${ind.name} desk in ${city.name}`,
            areaServed: {
              "@type": "City",
              name: city.name,
              address: {
                "@type": "PostalAddress",
                addressLocality: city.name,
                addressRegion: city.province,
                addressCountry: city.country === "Canada" ? "CA" : "US"
              }
            }
          }),
          breadcrumbSchema([
            { name: "Home", url: NAP.websiteUrl + "/" },
            { name: "Locations", url: NAP.websiteUrl + "/locations/" },
            {
              name: city.name,
              url: `${NAP.websiteUrl}/locations/${city.slug}/`
            },
            { name: ind.name, url }
          ])
        ]}
      />

      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-brand-navy-dark text-white">
        <Image
          src={heroImg}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy-dark via-brand-navy/85 to-brand-navy-dark/65" />
        <div className="relative container-prose pt-20 pb-20 sm:pt-24 sm:pb-24 lg:pt-28 lg:pb-28">
          <nav className="flex flex-wrap items-center gap-1.5 text-xs text-slate-200">
            <Link
              href="/locations/"
              className="text-slate-200 no-underline hover:text-white"
            >
              Locations
            </Link>
            <ChevronRight className="h-3 w-3" />
            <Link
              href={`/locations/${city.slug}/`}
              className="text-slate-200 no-underline hover:text-white"
            >
              {city.name}
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-white">{ind.name}</span>
          </nav>

          <p className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-brand-saffron">
            <MapPin className="h-3 w-3" />
            {city.name}, {city.province}, {city.country}
          </p>
          <h1 className="mt-3 max-w-4xl text-display-xl font-bold text-white text-balance">
            {ind.name} staffing in {city.name},{" "}
            <span className="text-brand-saffron">led by {city.recruiter.firstName}.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/95">
            {ind.intro} {city.recruiter.firstName} runs the {city.name} desk
            from {city.districts[0]}, with bench coverage across{" "}
            {city.districts[1]} and {city.districts[2]}.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact/" className="btn-saffron text-base">
              Talk to our {city.name} desk
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={`tel:${NAP.phoneE164}`}
              className="btn-ghost-light text-base"
            >
              <Phone className="h-4 w-4" /> {NAP.phoneDisplay}
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-white/95">
            <span className="inline-flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-brand-saffron" />
              Reply within one business day
            </span>
            <span className="inline-flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-brand-saffron" />
              We write the role down before we source
            </span>
            <span className="inline-flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-brand-saffron" />
              Continuity through the first thirty days
            </span>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="section">
        <div className="container-prose grid gap-16 lg:grid-cols-12">
          <article className="lg:col-span-8 space-y-16">
            {/* Roles + wages */}
            <div>
              <SectionHeading
                eyebrow={`${ind.name} roles in ${city.name}`}
                title={`Specific ${ind.name.toLowerCase()} roles we recruit for.`}
                description={`Each role lists the typical wage range for ${city.name}, ${city.province}. Ranges are indicative and reflect current desk activity. Final pay depends on role scope, shift cadence, and the employer.`}
              />
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {ind.roles.map((r) => (
                  <li
                    key={r.title}
                    className="flex items-start gap-3 rounded-2xl border border-brand-line bg-white p-5 transition hover:border-brand-saffron/40 hover:shadow-soft"
                  >
                    <span className="flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-brand-saffron/10 text-brand-saffron-dark">
                      <Briefcase className="h-4 w-4" strokeWidth={1.75} />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-brand-navy">
                        {r.title}
                      </p>
                      <p className="mt-1 inline-flex items-center gap-1 text-xs text-brand-ink-soft">
                        <DollarSign className="h-3 w-3 text-brand-ink-mute" />
                        {r.range}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Why our desk is different */}
            <div>
              <SectionHeading
                eyebrow={`Why our ${city.name} desk is different`}
                title={`Three promises ${city.recruiter.firstName} makes on every engagement.`}
              />
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {city.promises.map((p, i) => (
                  <div
                    key={i}
                    className="rounded-2xl border border-brand-line bg-white p-6 shadow-soft"
                  >
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-saffron-dark">
                      Promise {String(i + 1).padStart(2, "0")}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-brand-ink">
                      {p}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Two anonymized testimonials */}
            <div className="grid gap-6 md:grid-cols-2">
              <figure className="rounded-2xl border border-brand-line bg-cream p-7 shadow-soft">
                <Quote className="h-8 w-8 text-brand-saffron" />
                <blockquote className="mt-4 text-base leading-relaxed text-brand-ink">
                  &ldquo;{employerQuote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 border-t border-brand-line pt-4 text-sm">
                  <p className="font-semibold text-brand-navy">
                    Operator voice
                  </p>
                  <p className="text-xs text-brand-ink-soft">
                    {ind.name} employer · {city.name}
                  </p>
                </figcaption>
              </figure>
              <figure className="rounded-2xl border border-brand-line bg-white p-7 shadow-soft">
                <Quote className="h-8 w-8 text-brand-sky" />
                <blockquote className="mt-4 text-base leading-relaxed text-brand-ink">
                  &ldquo;{candidateQuote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 border-t border-brand-line pt-4 text-sm">
                  <p className="font-semibold text-brand-navy">
                    Candidate voice
                  </p>
                  <p className="text-xs text-brand-ink-soft">
                    Placed in {ind.name.toLowerCase()} · {city.name}
                  </p>
                </figcaption>
              </figure>
            </div>

            {/* Districts coverage */}
            <div className="rounded-2xl border border-brand-line bg-brand-mist p-8">
              <p className="eyebrow">Bench coverage</p>
              <h3 className="mt-3 text-xl font-semibold text-brand-navy">
                {city.recruiter.firstName} runs candidate networks across{" "}
                {city.districts[0]}, {city.districts[1]}, and{" "}
                {city.districts[2]}.
              </h3>
              <p className="mt-3 text-sm text-brand-ink-soft">
                Local knowledge of {city.name} commute corridors, transit
                connections, and employer clusters means our candidates fit
                the geography of the role, not just the postal code.
              </p>
            </div>

            {/* Sibling industries (same city) */}
            <div>
              <p className="eyebrow">More from the {city.name} desk</p>
              <h3 className="mt-3 text-xl font-semibold text-brand-navy">
                Other industries we cover in {city.name}
              </h3>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {siblingIndustries.map((si) => (
                  <li key={si.slug}>
                    <Link
                      href={`/locations/${city.slug}/${si.slug}/`}
                      className="flex items-center justify-between rounded-xl border border-brand-line bg-white px-4 py-3 text-sm font-semibold text-brand-navy no-underline transition hover:border-brand-saffron/40 hover:bg-brand-saffron/5"
                    >
                      <span>
                        {si.name} in {city.name}
                      </span>
                      <ArrowRight className="h-4 w-4 text-brand-ink-mute" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-32 lg:self-start">
            {/* Local recruiter card */}
            <div className="rounded-2xl border border-brand-line bg-brand-navy p-7 text-white shadow-soft">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-saffron">
                {city.name} desk lead
              </p>
              <h3 className="mt-3 text-2xl font-semibold">
                {city.recruiter.firstName}
              </h3>
              <p className="mt-1 text-sm text-white/85">
                {city.recruiter.title}
              </p>
              <p className="mt-4 text-sm text-white/90">
                Same person from the first call through the first 30 days.
                We send short, vetted lists. We stay on every placement
                through the first month.
              </p>
              <Link
                href="/contact/"
                className="btn-saffron mt-6 w-full justify-center"
              >
                Talk to {city.recruiter.firstName}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={`tel:${NAP.phoneE164}`}
                className="mt-4 inline-flex w-full items-center justify-center gap-2 text-sm font-medium text-white/90 no-underline hover:text-white"
              >
                <Phone className="h-3.5 w-3.5" />
                {NAP.phoneDisplay}
              </a>
            </div>

            {/* Sibling cities (same industry) */}
            <div className="rounded-2xl border border-brand-line bg-white p-6">
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-navy">
                {ind.name} in other cities
              </h3>
              <ul className="mt-5 space-y-2 text-sm">
                {siblingCities.map((sc) => (
                  <li key={sc.slug}>
                    <Link
                      href={`/locations/${sc.slug}/${ind.slug}/`}
                      className="flex items-center justify-between text-brand-ink no-underline transition hover:text-brand-saffron-dark"
                    >
                      <span>
                        {ind.name} in {sc.name}
                      </span>
                      <ArrowRight className="h-3.5 w-3.5 text-brand-ink-mute" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick CTA */}
            <div className="rounded-2xl border border-brand-saffron/30 bg-brand-saffron/10 p-6">
              <h3 className="text-base font-semibold text-brand-navy">
                Meet a short list in five days.
              </h3>
              <p className="mt-2 text-sm text-brand-ink-soft">
                We write the role down. We send vetted candidates. Same
                recruiter from the first call through the first 30 days.
              </p>
              <Link href="/contact/" className="btn-primary mt-4 w-full">
                Tell us about the role
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <CTASection
        variant="navy"
        eyebrow={`${ind.name} in ${city.name}`}
        title={`${city.recruiter.firstName} is reading new ${ind.name.toLowerCase()} mandates this week.`}
        description={`Tell us about the role and timeline. Reply within one business day.`}
        primaryCta={{ href: "/contact/", label: `Talk to our ${city.name} desk` }}
        secondaryCta={{ href: `/locations/${city.slug}/`, label: `All industries in ${city.name}` }}
      />
    </>
  );
}

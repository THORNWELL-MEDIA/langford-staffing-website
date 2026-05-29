import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ChevronRight,
  MapPin,
  Phone,
  Building2
} from "lucide-react";
import { CITIES, getCity, citySlugs, type City } from "@/lib/cities";
import { SILO_INDUSTRIES, getSiloCity } from "@/lib/silo-data";
import { getService, type Service } from "@/lib/services";
import { BRAND, NAP } from "@/lib/constants";
import { editorial } from "@/lib/images";
import { metaFor } from "@/lib/serviceMeta";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import { breadcrumbSchema, localBusinessSchema } from "@/lib/schema";

export function generateStaticParams() {
  return citySlugs();
}

export function generateMetadata({
  params
}: {
  params: { city: string };
}): Metadata {
  const city = getCity(params.city);
  if (!city) return { title: "City Not Found" };
  return {
    title: `Staffing & Recruitment in ${city.name}`,
    description: `${BRAND.name} places candidates and supports employers across ${city.name}, ${city.province}. Permanent, temporary, and contract roles with local expertise.`
  };
}

const CITY_PHOTO: Record<string, string> = {
  toronto: "city-toronto",
  "new-york": "city-new-york",
  vancouver: "city-vancouver",
  boston: "city-boston",
  miami: "city-miami",
  atlanta: "city-atlanta",
  chicago: "city-chicago",
  dallas: "city-dallas",
  "los-angeles": "city-los-angeles",
  phoenix: "city-phoenix",
  montreal: "city-montreal",
  calgary: "city-calgary",
  mississauga: "city-mississauga",
  edmonton: "city-edmonton",
  ottawa: "city-ottawa",
  halifax: "city-halifax",
  winnipeg: "city-winnipeg",
  "quebec-city": "city-quebec-city"
};

export default function CityPage({
  params
}: {
  params: { city: string };
}) {
  const city = getCity(params.city);
  if (!city) notFound();

  const url = `${NAP.websiteUrl}/locations/${city.slug}/`;
  const peers = city.peerCities
    .map((slug) => CITIES.find((c) => c.slug === slug))
    .filter((c): c is City => Boolean(c));
  const recommendedServices = city.recommendedServices
    .map(getService)
    .filter((s): s is Service => Boolean(s));

  const photoKey = CITY_PHOTO[city.slug] || "locations-hero";

  return (
    <>
      <SchemaJsonLd
        data={[
          localBusinessSchema({
            "@type": "EmploymentAgency",
            name: `${BRAND.name} in ${city.name}`,
            areaServed: {
              "@type": "City",
              name: city.name,
              address: {
                "@type": "PostalAddress",
                addressLocality: city.name,
                addressRegion: city.province,
                addressCountry: city.province.includes("Canada") ? "CA" : "US"
              }
            }
          }),
          breadcrumbSchema([
            { name: "Home", url: NAP.websiteUrl + "/" },
            { name: "Locations", url: NAP.websiteUrl + "/locations/" },
            { name: city.name, url }
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
                href="/locations/"
                className="text-white/65 no-underline transition hover:text-brand-saffron"
              >
                Locations
              </Link>
              <ChevronRight className="h-3 w-3" />
              <span className="text-white/85">{city.name}</span>
            </nav>

            <p className="mt-6 inline-flex items-center gap-2 border border-white/20 bg-white/5 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-saffron">
              <MapPin className="h-3 w-3" />
              {city.province}
            </p>
            <h1 className="mt-6 max-w-3xl text-display-xl font-semibold text-balance">
              Staffing in {city.name},{" "}
              <em className="not-italic font-semibold text-brand-saffron">
                with people who know the market.
              </em>
            </h1>
            <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-white/85">
              {city.intro}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact/" className="btn-saffron">
                Hire in {city.name}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/positions/" className="btn-ghost-light">
                See open roles
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <figure className="relative overflow-hidden border border-white/10 bg-brand-navy-dark">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src={editorial(photoKey as any)}
                  alt=""
                  fill
                  priority
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="absolute bottom-3 left-3 right-3">
                <span className="bg-brand-navy/75 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/85 backdrop-blur-sm">
                  Plate · {city.name}
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
                eyebrow="Industries"
                title={`Industries we serve in ${city.name}.`}
              />
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {city.industries.map((i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 border border-brand-line bg-white p-4 text-sm leading-relaxed text-brand-ink"
                  >
                    <Building2 className="h-5 w-5 flex-none text-brand-saffron-dark" strokeWidth={1.75} />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="border border-brand-line bg-white p-7">
                <p className="border-b border-brand-navy pb-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-navy">
                  For candidates
                </p>
                <h2 className="mt-4 font-display text-[20px] font-semibold text-brand-navy">
                  Notes for candidates in {city.name}
                </h2>
                <p className="mt-4 text-[15px] leading-relaxed text-brand-ink-soft">
                  {city.candidateNotes}
                </p>
                <Link
                  href="/positions/"
                  className="link-arrow mt-6"
                >
                  See open roles in {city.name}{" "}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="border border-brand-line bg-white p-7">
                <p className="border-b border-brand-navy pb-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-navy">
                  For employers
                </p>
                <h2 className="mt-4 font-display text-[20px] font-semibold text-brand-navy">
                  Notes for employers in {city.name}
                </h2>
                <p className="mt-4 text-[15px] leading-relaxed text-brand-ink-soft">
                  {city.employerNotes}
                </p>
                <Link
                  href="/contact/"
                  className="link-arrow mt-6"
                >
                  Hire in {city.name} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Silo industry drill-downs (only shown when this city has a silo profile) */}
            {getSiloCity(city.slug) && (
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-saffron-dark">
                  Industries we staff in {city.name}
                </p>
                <h2 className="mt-3 font-display text-[24px] font-semibold text-brand-navy">
                  Drill into your industry desk.
                </h2>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {SILO_INDUSTRIES.map((si) => (
                    <li key={si.slug}>
                      <Link
                        href={`/locations/${city.slug}/${si.slug}/`}
                        className="flex items-center justify-between border border-brand-line bg-white px-4 py-3 text-sm font-semibold text-brand-navy no-underline transition hover:border-brand-saffron hover:text-brand-saffron-dark"
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
            )}

            {/* Editorial pull-quote slab */}
            <div className="border-l-[3px] border-brand-saffron bg-brand-paper-warm/50 p-7 sm:p-8">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-saffron-dark">
                What clients say
              </p>
              <blockquote className="mt-4 font-display text-[20px] leading-snug text-brand-navy sm:text-[22px]">
                &ldquo;Day-of-need turnaround on maintenance trades has saved us
                multiple weekends. Their bench is real and their vetting standard
                does not slip when the request is urgent.&rdquo;
              </blockquote>
              <p className="mt-5 text-[12px] font-semibold uppercase tracking-[0.16em] text-brand-navy">
                Property Manager
              </p>
              <p className="text-[11px] uppercase tracking-[0.16em] text-brand-ink-mute">
                Verified client
              </p>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-32 lg:self-start">
            <div className="border border-brand-line bg-brand-navy p-7 text-white">
              <p className="inline-flex border-b border-brand-saffron pb-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-saffron">
                Hire with {BRAND.shortName}
              </p>
              <h3 className="mt-4 font-display text-[20px] font-semibold">
                Local market knowledge in {city.name}
              </h3>
              <p className="mt-3 text-sm text-white/80">
                A written brief. Vetted candidates. We stay involved past
                the start date.
              </p>
              <Link href="/contact/" className="btn-saffron mt-6 w-full justify-center">
                Tell us about the role
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
                Recommended services
              </h3>
              <ul className="mt-4 space-y-3 text-sm">
                {recommendedServices.map((s) => {
                  const m = metaFor(s.slug);
                  const Icon = m.icon;
                  return (
                    <li key={s.slug}>
                      <Link
                        href={`/services/${s.slug}/`}
                        className="group flex items-start gap-3 no-underline"
                      >
                        <span className="flex h-8 w-8 flex-none items-center justify-center border border-brand-line text-brand-navy transition group-hover:border-brand-saffron group-hover:text-brand-saffron-dark">
                          <Icon className="h-4 w-4" strokeWidth={1.75} />
                        </span>
                        <span className="font-semibold text-brand-navy transition group-hover:text-brand-saffron-dark">
                          {s.name}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="border border-brand-line bg-white p-6">
              <h3 className="border-b border-brand-navy pb-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-navy">
                Nearby cities
              </h3>
              <ul className="mt-4 space-y-1 text-sm">
                {peers.map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={`/locations/${p.slug}/`}
                      className="flex items-center justify-between border-b border-brand-line-soft py-2.5 text-brand-ink no-underline transition hover:text-brand-saffron-dark last:border-0"
                    >
                      <span>{p.name}</span>
                      <ArrowRight className="h-3 w-3 text-brand-ink-mute" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <CTASection
        variant="navy"
        eyebrow={`Hire in ${city.name}`}
        title={`Local candidate networks. Clear next steps.`}
        description="Tell us about the role and the timeline. We will respond within one business day."
        primaryCta={{ href: "/contact/", label: "Tell us about the role" }}
        secondaryCta={{ href: "/locations/", label: "Other cities" }}
      />
    </>
  );
}

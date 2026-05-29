import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, MapPin } from "lucide-react";
import { CITIES } from "@/lib/cities";
import { BRAND, NAP } from "@/lib/constants";
import { editorial } from "@/lib/images";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import FindLocalRecruiter from "@/components/FindLocalRecruiter";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Locations Across the US and Canada",
  description: `${BRAND.name} provides staffing and recruitment services across the United States and Canada, with city-level expertise and regional coverage.`
};

// Each city slug to its editorial photo key.
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

export default function LocationsIndex() {
  return (
    <>
      <SchemaJsonLd
        data={breadcrumbSchema([
          { name: "Home", url: NAP.websiteUrl + "/" },
          { name: "Locations", url: NAP.websiteUrl + "/locations/" }
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
              <span className="text-white/80">Where we hire</span>
            </div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.20em] text-white/70 tabular-nums">
              {String(CITIES.length).padStart(2, "0")} cities
            </div>
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <h1 className="text-display-xl font-semibold text-balance">
                Local candidate networks across{" "}
                <em className="not-italic font-semibold text-brand-saffron">
                  major North American markets.
                </em>
              </h1>
              <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-white/85">
                {CITIES.length} cities across the United States and Canada.
                From the GTA to the southwestern Sun Belt, local market
                knowledge in every market we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === EDITORIAL SLAB — full-bleed photographic band === */}
      <section className="bg-brand-paper">
        <div className="container-prose">
          <figure className="relative -mt-2 overflow-hidden border-x border-b border-brand-line">
            <div className="relative aspect-[21/9] w-full bg-brand-navy">
              <Image
                src={editorial("locations-hero")}
                alt=""
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5">
              <span className="bg-brand-navy/75 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/85 backdrop-blur-sm">
                Plate · North American coverage
              </span>
            </figcaption>
          </figure>
        </div>
      </section>

      <FindLocalRecruiter
        title="Find a local recruiter"
        description="Drop in a city or postal code, and we will route you to the recruiter who covers your area."
      />

      {/* City editorial slabs */}
      <section className="section">
        <div className="container-prose">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-saffron-dark">
            City desks
          </p>
          <h2 className="mt-3 max-w-3xl font-display text-display-md text-brand-navy">
            {CITIES.length} markets, one disciplined process.
          </h2>

          <ul className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {CITIES.map((c, i) => {
              const photoKey = CITY_PHOTO[c.slug];
              return (
                <li key={c.slug}>
                  <Link
                    href={`/locations/${c.slug}/`}
                    className="group block border-t border-brand-navy pt-4 no-underline"
                  >
                    <div className="relative aspect-[4/5] w-full overflow-hidden bg-brand-navy">
                      {photoKey ? (
                        <Image
                          src={editorial(photoKey as any)}
                          alt=""
                          fill
                          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
                          className="object-cover"
                        />
                      ) : null}
                      <span className="absolute left-3 top-3 bg-brand-navy/75 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/85 backdrop-blur-sm">
                        {c.province}
                      </span>
                    </div>
                    <div className="mt-4 flex items-baseline gap-3">
                      <span
                        className="font-display text-[24px] font-semibold leading-none text-brand-navy/30 tabular-nums"
                        style={{ fontFeatureSettings: "'tnum' on, 'lnum' on" }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-display text-[22px] font-semibold leading-tight text-brand-navy transition group-hover:text-brand-saffron-dark">
                        {c.name}
                      </h3>
                    </div>
                    <p className="mt-2 line-clamp-2 text-[14px] leading-relaxed text-brand-ink-soft">
                      {c.intro.split(". ")[0]}.
                    </p>
                    <span className="mt-3 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-navy">
                      Hire in {c.name}
                      <ArrowUpRight className="h-3 w-3" />
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Regional coverage band */}
      <section className="bg-brand-paper-warm/40 section">
        <div className="container-prose grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Regional coverage"
              title={
                <>
                  Do not see your city?{" "}
                  <em className="font-semibold not-italic text-brand-saffron-dark">
                    We probably already place there.
                  </em>
                </>
              }
              description={`Beyond the cities listed, ${BRAND.name} accepts engagements across the United States and Canada. Most of our work is built around candidates moving for the right role, not just within their home city.`}
              size="lg"
            />
            <Link href="/contact/" className="link-arrow mt-8">
              Talk to our coverage team <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="border border-brand-line bg-white p-8">
            <p className="border-b border-brand-navy pb-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-navy">
              Cross-market placement
            </p>
            <h3 className="mt-4 font-display text-[20px] font-semibold text-brand-navy">
              Tell us where you are hiring.
            </h3>
            <p className="mt-3 text-base leading-relaxed text-brand-ink-soft">
              We will tell you honestly what we can deliver and on what
              timeline, and where the candidate pool actually sits.
            </p>
            <Link
              href="/contact/"
              className="btn-primary mt-6 w-full justify-center"
            >
              Talk to our team <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        variant="navy"
        eyebrow="Wherever you hire across the US and Canada"
        title="We have already met candidates there."
        description="Local market knowledge, regional coverage, structured engagements."
        primaryCta={{ href: "/contact/", label: "Hire talent" }}
        secondaryCta={{ href: "/positions/", label: "Find work" }}
      />
    </>
  );
}

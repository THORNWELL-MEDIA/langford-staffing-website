import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, ChevronRight, MapPin } from "lucide-react";
import {
  getIndustryBySlug,
  industrySlug,
  industrySlugs,
  industryServices
} from "@/lib/industries";
import { SERVICE_IN_CITY, CITY_HUBS } from "@/lib/silo/index";
import { BRAND, NAP } from "@/lib/constants";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";

export function generateStaticParams() {
  return industrySlugs();
}

export function generateMetadata({
  params
}: {
  params: { slug: string };
}): Metadata {
  const ind = getIndustryBySlug(params.slug);
  if (!ind) return { title: "Industry Not Found" };
  return {
    title: `${ind.name} Staffing`,
    description: `${BRAND.name} staffs ${ind.name.toLowerCase()} employers across the United States and Canada. ${ind.blurb}`,
    alternates: { canonical: `/industries/${params.slug}/` }
  };
}

// Service label lookup from the generated silo data.
const SERVICE_LABEL: Record<string, string> = (() => {
  const m: Record<string, string> = {};
  for (const p of SERVICE_IN_CITY) {
    if (p.service_slug && p.service_label && !m[p.service_slug]) {
      m[p.service_slug] = p.service_label;
    }
  }
  return m;
})();

export default function IndustryPage({
  params
}: {
  params: { slug: string };
}) {
  const ind = getIndustryBySlug(params.slug);
  if (!ind) notFound();

  const slug = industrySlug(ind.name);
  const url = `${NAP.websiteUrl}/industries/${slug}/`;
  const serviceSlugs = industryServices(ind.name);
  const primary = serviceSlugs[0];

  // Top cities (largest hubs) where we staff the primary service for this industry.
  const cityPages = SERVICE_IN_CITY.filter(
    (p) => p.service_slug === primary
  ).slice(0, 12);

  const faqs = [
    {
      q: `What ${ind.name.toLowerCase()} roles does ${BRAND.name} staff?`,
      a: `We staff ${serviceSlugs
        .map((s) => (SERVICE_LABEL[s] || s).toLowerCase())
        .join(", ")} roles for ${ind.name.toLowerCase()} employers, on temporary, temp to hire, and direct hire terms.`
    },
    {
      q: `Where do you staff ${ind.name.toLowerCase()} roles?`,
      a: `We staff ${ind.name.toLowerCase()} employers across the United States and Canada. Pick a city below for local roles and how to start.`
    },
    {
      q: `How fast can you fill a ${ind.name.toLowerCase()} role?`,
      a: `For most roles we send a short list within about one business day, because we keep a screened bench warm in each market. Call ${NAP.phoneDisplay} to brief the role.`
    },
    {
      q: `Do you offer temp, temp to hire, and direct hire?`,
      a: `Yes. You can hire someone for a short season, try them out and convert them to your payroll, or hire them directly from day one. We help you pick the option that fits the role and your budget.`
    }
  ];

  return (
    <>
      <SchemaJsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: NAP.websiteUrl + "/" },
            { name: "Industries", url: NAP.websiteUrl + "/industries/" },
            { name: ind.name, url }
          ]),
          faqSchema(faqs)
        ]}
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
        <div className="relative container-prose pt-12 pb-14 lg:pt-16 lg:pb-20">
          <nav className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/65">
            <Link href="/industries/" className="text-white/65 no-underline transition hover:text-brand-saffron">
              Industries
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-white/85">{ind.name}</span>
          </nav>
          <h1 className="mt-6 max-w-3xl text-display-xl font-semibold text-balance">
            {ind.name} Staffing.{" "}
            <em className="not-italic font-semibold text-brand-saffron">
              We find, hire, and place talent.
            </em>
          </h1>
          <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-white/85">
            {ind.blurb} {BRAND.name} staffs {ind.name.toLowerCase()} employers
            across the United States and Canada, on temporary, temp to hire, and
            direct hire terms. Tell us the role and we get back to you within one
            business day.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact/" className="btn-saffron">
              Hire {ind.name.toLowerCase()} staff
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/careers/" className="btn-ghost-light">
              See open roles
            </Link>
          </div>
        </div>
      </section>

      {/* Services we staff for this industry */}
      <section className="section bg-white">
        <div className="container-prose">
          <SectionHeading
            eyebrow="Services"
            title={`How we staff ${ind.name.toLowerCase()}.`}
            description="The staffing lines that cover this industry, on temp, temp to hire, and direct hire."
            size="lg"
          />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {serviceSlugs.map((s) => (
              <li key={s}>
                <Link
                  href={`/services/${s}/`}
                  className="flex h-full items-center justify-between border border-brand-line bg-white px-5 py-4 font-semibold text-brand-navy no-underline transition hover:border-brand-saffron hover:text-brand-saffron-dark"
                >
                  {SERVICE_LABEL[s] || s}
                  <ArrowRight className="h-4 w-4 flex-none text-brand-ink-mute" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Where we staff (top cities for the primary service) */}
      {cityPages.length > 0 && (
        <section className="section bg-brand-paper">
          <div className="container-prose">
            <SectionHeading
              eyebrow="Where we staff"
              title={`${ind.name} staffing across North America.`}
              description="A sample of markets where we place these roles. We cover many more."
              size="lg"
            />
            <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {cityPages.map((p) => (
                <li key={p.url}>
                  <Link
                    href={`${p.url}/`}
                    className="flex items-center justify-between border border-brand-line bg-white px-4 py-3.5 text-sm font-semibold text-brand-navy no-underline transition hover:border-brand-saffron hover:text-brand-saffron-dark"
                  >
                    <span className="flex items-center gap-2">
                      <MapPin className="h-3.5 w-3.5 flex-none text-brand-saffron-dark" />
                      {p.service_label} in {p.city}, {p.state_abbr}
                    </span>
                    <ArrowRight className="h-4 w-4 flex-none text-brand-ink-mute" />
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/locations/" className="link-arrow mt-8">
              See all locations <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="section bg-white">
        <div className="container-prose">
          <SectionHeading eyebrow="FAQ" title={`${ind.name} staffing questions.`} size="lg" />
          <div className="mt-8 space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="border border-brand-line bg-white p-5">
                <summary className="cursor-pointer list-none font-semibold text-brand-navy">
                  {f.q}
                </summary>
                <p className="mt-3 text-[15px] leading-relaxed text-brand-ink-soft">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        variant="navy"
        eyebrow={`Hire ${ind.name.toLowerCase()} staff`}
        title="Tell us what you need to fill."
        description="Screened candidates, fast placement, across the US and Canada."
        primaryCta={{ href: "/contact/", label: "Tell us about the role" }}
        secondaryCta={{ href: "/industries/", label: "All industries" }}
      />
    </>
  );
}

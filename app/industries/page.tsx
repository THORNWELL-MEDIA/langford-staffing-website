import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { INDUSTRIES } from "@/lib/industries";
import { BRAND, NAP, CTA } from "@/lib/constants";
import CTASection from "@/components/CTASection";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Industries We Staff Across The United States And Canada",
  description:
    "Hospitality, logistics, property, trades, retail, construction, professional services, and healthcare staffing across North America. Documented placements, replacement guarantees, compliant onboarding.",
  alternates: { canonical: "/industries/" }
};

function slugify(name: string) {
  return name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function IndustriesPage() {
  return (
    <>
      <SchemaJsonLd
        data={breadcrumbSchema([
          { name: "Home", url: NAP.websiteUrl + "/" },
          { name: "Industries", url: NAP.websiteUrl + "/industries/" }
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
              <span className="text-white/80">Section 02 · Industries</span>
            </div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.20em] text-white/70">
              Eight Sectors
            </div>
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <h1 className="text-display-xl font-semibold text-balance">
                Industries We Staff, From Front Of House To The C Suite.
              </h1>
              <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-white/85">
                Hospitality, logistics, property, trades, retail, construction,
                professional services, and healthcare. Each industry sits on
                the same documented intake, screening, and placement process,
                tuned to the regulatory and pay context of the role.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry grid */}
      <section className="section bg-brand-paper">
        <div className="container-prose">
          <ul className="grid gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
            {INDUSTRIES.map((ind, i) => {
              const Icon = ind.icon;
              const slug = slugify(ind.name);
              return (
                <li
                  key={ind.name}
                  className="flex flex-col border-t border-brand-navy pt-5"
                >
                  <div className="flex items-center justify-between">
                    <Icon
                      className="h-5 w-5 text-brand-navy"
                      strokeWidth={1.75}
                    />
                    <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-ink-mute">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h2 className="mt-4 text-[18px] font-semibold text-brand-navy">
                    {ind.name}
                  </h2>
                  <p className="mt-2 text-[14px] leading-relaxed text-brand-ink-soft">
                    {ind.blurb}
                  </p>
                  <div className="mt-auto pt-5">
                    <Link
                      href={`/industries/${slug}/`}
                      className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-navy no-underline transition hover:text-brand-saffron-dark"
                    >
                      Industry detail
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Coverage band */}
      <section className="section-tight bg-white border-y border-brand-line">
        <div className="container-prose">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-saffron-dark">
                Coverage
              </p>
              <h2 className="mt-3 font-display text-[26px] font-semibold leading-tight text-brand-navy">
                One Process Across The US And Canada.
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-[15px] leading-relaxed text-brand-ink-soft">
                {BRAND.shortName} runs the same intake, screening, and placement
                workflow whether the role sits in New York, Toronto, Houston, or
                Vancouver. Compliance, payroll handoff, and right to work
                checks are scoped to the destination jurisdiction at kickoff.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        variant="navy"
        eyebrow="Don't see your industry?"
        title="If it has a documented job description, we can staff it."
        description={`${BRAND.shortName} works across sectors. Send the role and we tell you within 24 hours whether it sits inside our active candidate network.`}
        primaryCta={{ href: "/contact/", label: CTA.employerPrimary }}
        secondaryCta={{ href: "/services/", label: "See engagement types" }}
      />
    </>
  );
}

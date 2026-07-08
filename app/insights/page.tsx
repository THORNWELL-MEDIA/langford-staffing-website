import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  GraduationCap,
  Scale,
  TrendingUp,
  CalendarDays,
  Tag
} from "lucide-react";
import { BRAND, NAP } from "@/lib/constants";
import { editorial } from "@/lib/images";
import { ARTICLES } from "@/lib/articles";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: `Insights | Hiring & Career Guidance`,
  description: `${BRAND.name} insights for employers and candidates across the US and Canada. Hiring guides, candidate guides, and labor-law primers.`
};

// Each article maps to an editorial photo key.
const ARTICLE_PHOTO: Record<string, string> = {
  "operations-grade-staffing-job-descriptions": "insight-operations-grade",
  "property-services-labor-market-structured-intake": "insight-property-services",
  "day-of-need-placements-peak-season": "insight-day-of-need"
};

const CATEGORIES = [
  {
    icon: Briefcase,
    title: "For employers",
    body: "Practical hiring guides, scoping a search, designing intake, comp benchmarking, and reducing time-to-fill.",
    image: "employers-hero"
  },
  {
    icon: GraduationCap,
    title: "For candidates",
    body: "Career-stage guidance, résumé and interview prep, salary negotiation, and navigating the US and Canadian job markets.",
    image: "candidates-hero"
  },
  {
    icon: Scale,
    title: "US & Canadian labor and compliance",
    body: "Plain-language primers on US and Canadian employment law, common engagement structures, and compliance considerations for cross-border work.",
    image: "service-contract-to-hire"
  },
  {
    icon: TrendingUp,
    title: "Industry insights",
    body: "Hiring-trend commentary across hospitality, property services, logistics, professional services, and other operating-company sectors.",
    image: "industry-logistics"
  }
] as const;

export default function InsightsPage() {
  const featured = ARTICLES[0];
  const rest = ARTICLES.slice(1);
  const featuredPhoto = ARTICLE_PHOTO[featured.slug] || "insights-hero";
  return (
    <>
      <SchemaJsonLd
        data={breadcrumbSchema([
          { name: "Home", url: NAP.websiteUrl + "/" },
          { name: "Insights", url: NAP.websiteUrl + "/insights/" }
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
              <span className="text-white/80">Insights</span>
            </div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.20em] text-white/70">
              Insights
            </div>
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <h1 className="text-display-xl font-semibold text-balance">
                Hiring &amp; career guidance,{" "}
                <em className="not-italic font-semibold text-brand-saffron">
                  from a team that does this every day.
                </em>
              </h1>
              <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-white/85">
                Practical, employer- and candidate-focused content. Hiring guides,
                career-stage advice, US and Canadian labor-law primers, and
                sector commentary.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === EDITORIAL SLAB — featured article, full-bleed photograph === */}
      <section className="bg-brand-paper">
        <div className="container-prose">
          <Link
            href={`/insights/${featured.slug}/`}
            className="group block border border-brand-line no-underline"
          >
            <div className="grid lg:grid-cols-12">
              <div className="relative lg:col-span-7">
                <div className="relative aspect-[16/10] w-full bg-brand-navy lg:aspect-auto lg:h-full lg:min-h-[420px]">
                  <Image
                    src={editorial(featuredPhoto as any)}
                    alt=""
                    fill
                    priority
                    sizes="(min-width: 1024px) 58vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <span className="absolute left-4 top-4 bg-brand-navy/80 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/85 backdrop-blur-sm">
                  Featured · {featured.category}
                </span>
              </div>
              <div className="flex flex-col justify-between p-7 lg:col-span-5 lg:border-l lg:border-brand-line lg:p-10">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-saffron-dark">
                    {new Date(featured.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric"
                    })}
                  </p>
                  <h2 className="mt-3 font-display text-[28px] font-semibold leading-tight text-brand-navy sm:text-[32px]">
                    {featured.title}
                  </h2>
                  <p className="mt-4 text-[15px] leading-relaxed text-brand-ink-soft">
                    {featured.excerpt}
                  </p>
                </div>
                <span className="mt-6 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.16em] text-brand-navy transition group-hover:text-brand-saffron-dark">
                  Read article <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Latest articles list — editorial rows */}
      <section className="section">
        <div className="container-prose">
          <SectionHeading
            eyebrow="Latest articles"
            title="Practical thinking on hiring."
            description="Long-form pieces on staffing, intake design, and workforce planning for operating companies."
            size="lg"
            align="left"
            className="mb-10"
          />
          <ul className="divide-y divide-brand-line border-y border-brand-line">
            {rest.map((article, idx) => {
              const photoKey = ARTICLE_PHOTO[article.slug] || "insights-hero";
              const dateLabel = new Date(article.date).toLocaleDateString(
                "en-US",
                { year: "numeric", month: "long", day: "numeric" }
              );
              return (
                <li key={article.slug}>
                  <Link
                    href={`/insights/${article.slug}/`}
                    className="group grid gap-6 py-7 no-underline lg:grid-cols-12 lg:gap-10"
                  >
                    <div className="relative lg:col-span-4">
                      <div className="relative aspect-[16/10] w-full overflow-hidden bg-brand-navy">
                        <Image
                          src={editorial(photoKey as any)}
                          alt=""
                          fill
                          sizes="(min-width: 1024px) 32vw, 100vw"
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="lg:col-span-8">
                      <div className="flex items-baseline gap-4">
                        <span
                          className="font-display text-[28px] font-semibold leading-none text-brand-navy/30 tabular-nums"
                          style={{ fontFeatureSettings: "'tnum' on, 'lnum' on" }}
                        >
                          {String(idx + 2).padStart(2, "0")}
                        </span>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-saffron-dark">
                          {article.category} · {dateLabel}
                        </p>
                      </div>
                      <h3 className="mt-3 font-display text-[24px] font-semibold leading-tight text-brand-navy transition group-hover:text-brand-saffron-dark sm:text-[26px]">
                        {article.title}
                      </h3>
                      <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-brand-ink-soft">
                        {article.excerpt}
                      </p>
                      <span className="mt-5 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.16em] text-brand-navy">
                        Read article <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Categories — briefing rows */}
      <section className="bg-brand-paper-warm/40 section">
        <div className="container-prose">
          <SectionHeading
            eyebrow="Browse by category"
            title="What we publish about."
            description="Insights organized around the questions employers and candidates actually ask."
            size="lg"
            align="center"
            className="mb-12"
          />
          <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {CATEGORIES.map((c) => {
              const I = c.icon;
              return (
                <article
                  key={c.title}
                  className="border-t border-brand-navy pt-5"
                >
                  <I className="h-5 w-5 text-brand-navy" strokeWidth={1.75} />
                  <h3 className="mt-4 text-[16px] font-semibold text-brand-navy">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-ink-soft">
                    {c.body}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection
        variant="navy"
        eyebrow="Put guidance into practice"
        title="Tell us about the role or the search."
        description="A Langford team member will respond within one business day."
        primaryCta={{ href: "/contact/", label: "Hire talent" }}
        secondaryCta={{ href: "/careers/", label: "Find work" }}
      />
    </>
  );
}

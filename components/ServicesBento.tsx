"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/lib/services";
import { metaFor } from "@/lib/serviceMeta";

/**
 * Bento services grid for the home page.
 *
 * Layout (lg):
 *   [ Permanent Placement (2x1) ][ Executive Search (2x1) ]
 *   [ Temporary 1x1 ][ Contract 1x1 ][ Volume 1x1 ][ Specialty 1x1 ]
 *
 * Hover-reveal sub-services shown as small chips that fade in on hover.
 */

const SUBS: Record<string, string[]> = {
  "permanent-placement": [
    "Direct hire",
    "Replacement search",
    "Headcount expansion",
    "Compliance-sensitive roles"
  ],
  "executive-search": [
    "Country manager",
    "Director-level",
    "Confidential replacements",
    "Retained mandates"
  ],
  "temporary-staffing": ["Seasonal", "Project", "Surge", "Event"],
  "contract-to-hire": ["Try-before-you-buy", "Conversion path", "Trial period"],
  "volume-hiring": ["Property opens", "Multi-site", "RPO"],
  "specialty-search": ["Bilingual", "Credentialed", "Cross-border", "Niche tech"]
};

const FEATURE_SLUGS = ["permanent-placement", "executive-search"];

export default function ServicesBento() {
  const bySlug = Object.fromEntries(SERVICES.map((s) => [s.slug, s]));
  const features = FEATURE_SLUGS.map((slug) => bySlug[slug]).filter(Boolean);
  const others = SERVICES.filter((s) => !FEATURE_SLUGS.includes(s.slug));

  return (
    <div className="grid gap-5 lg:grid-cols-4 lg:auto-rows-[minmax(0,1fr)]">
      {features.map((s) => (
        <BentoCard key={s.slug} service={s} feature />
      ))}
      {others.map((s) => (
        <BentoCard key={s.slug} service={s} />
      ))}
    </div>
  );
}

function BentoCard({
  service,
  feature = false
}: {
  service: (typeof SERVICES)[number];
  feature?: boolean;
}) {
  const meta = metaFor(service.slug);
  const Icon = meta.icon;
  const subs = SUBS[service.slug] || [];

  return (
    <Link
      href={`/services/${service.slug}/`}
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-brand-line bg-white p-7 no-underline shadow-soft transition duration-300 hover:-translate-y-1 hover:border-brand-sky/40 hover:shadow-glow ${
        feature
          ? "lg:col-span-2 lg:p-9 bg-gradient-to-br from-brand-sky-pale via-white to-white"
          : "lg:col-span-1"
      }`}
    >
      {/* Decorative corner accent */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -right-12 -top-12 rounded-full blur-3xl transition-opacity duration-500 ${
          feature
            ? "h-44 w-44 bg-brand-saffron/15 opacity-100"
            : "h-32 w-32 bg-brand-sky/10 opacity-0 group-hover:opacity-100"
        }`}
      />

      <div className="relative flex items-start justify-between gap-4">
        <div
          className={`flex items-center justify-center rounded-xl ring-1 transition ${
            feature
              ? "h-14 w-14 bg-brand-sky/10 text-brand-sky-dark ring-brand-sky/20 group-hover:bg-brand-sky group-hover:text-white"
              : "h-12 w-12 bg-brand-navy/5 text-brand-navy ring-brand-navy/10 group-hover:bg-brand-saffron/10 group-hover:text-brand-saffron-dark"
          }`}
        >
          <Icon className={feature ? "h-6 w-6" : "h-5 w-5"} strokeWidth={1.75} />
        </div>
        <span className="rounded-full bg-brand-mist px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-brand-navy/60">
          {meta.bucket}
        </span>
      </div>

      <h3
        className={`relative mt-6 font-display font-semibold text-brand-navy ${
          feature ? "text-2xl lg:text-3xl" : "text-xl"
        }`}
      >
        {service.name}
      </h3>

      <p
        className={`relative mt-3 leading-relaxed text-brand-ink-soft ${
          feature ? "text-base max-w-prose" : "text-sm"
        }`}
      >
        {service.summary}
      </p>

      {/* Sub-services chips - hover reveal */}
      {subs.length > 0 && (
        <div className="relative mt-5 flex flex-wrap gap-1.5">
          {subs.slice(0, feature ? 4 : 3).map((sub, i) => (
            <span
              key={sub}
              className="inline-flex items-center rounded-full border border-brand-line bg-white/80 px-2.5 py-1 text-[11px] font-medium text-brand-ink-soft opacity-0 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {sub}
            </span>
          ))}
        </div>
      )}

      <span className="relative mt-auto pt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-sky-dark transition group-hover:gap-2.5 group-hover:text-brand-saffron-dark">
        Explore service
        <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </Link>
  );
}

import type { Metadata } from "next";
import { Star, Quote } from "lucide-react";
import { BRAND, NAP, CTA } from "@/lib/constants";
import CTASection from "@/components/CTASection";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Client Reviews And Placement Feedback",
  description:
    "Anonymous client and candidate feedback from staffing engagements across the United States and Canada. Permanent placement, executive search, and volume hiring outcomes.",
  alternates: { canonical: "/reviews/" }
};

const TESTIMONIALS = [
  {
    rating: 5,
    bucket: "Permanent Placement",
    region: "Texas",
    quote:
      "We needed a senior controller for a multi entity rollup and the shortlist came back in eight days. Two of the three were stronger than the candidates we had been seeing for months.",
    role: "Director of Finance, Multi Family Operator"
  },
  {
    rating: 5,
    bucket: "Executive Search",
    region: "Ontario",
    quote:
      "Retained search done right. Documented market map, weekly status, no surprises. Our new VP started on the date we agreed at kickoff.",
    role: "Board Chair, Holding Company"
  },
  {
    rating: 5,
    bucket: "Volume Hiring",
    region: "Florida",
    quote:
      "Onboarded 22 maintenance technicians across three markets in six weeks. The compliance handoff was the cleanest we have seen from any staffing partner.",
    role: "Head of Operations, Property Services Group"
  },
  {
    rating: 5,
    bucket: "Contract To Hire",
    region: "British Columbia",
    quote:
      "Senior product manager started on contract and converted at six months. Replacement guarantee never had to come into play.",
    role: "Head of Product, Software Company"
  },
  {
    rating: 5,
    bucket: "Specialty Search",
    region: "New York",
    quote:
      "Hard to find compliance lead with both US and Canada experience. They placed the second candidate on the shortlist and we have not looked back.",
    role: "General Counsel, Asset Management"
  },
  {
    rating: 4,
    bucket: "Permanent Placement",
    region: "Alberta",
    quote:
      "Solid work on a difficult role. Took longer than we hoped but the intake was honest about that from the start. Strong final hire.",
    role: "Head of Talent, Industrial Services"
  }
];

const STATS = [
  { label: "Average Days To Shortlist", value: "9" },
  { label: "Replacement Rate", value: "Under 4%" },
  { label: "Repeat Engagement Rate", value: "82%" },
  { label: "US And Canada Coverage", value: "All Markets" }
];

export default function ReviewsPage() {
  const total = TESTIMONIALS.length;
  const avg =
    Math.round(
      (TESTIMONIALS.reduce((s, t) => s + t.rating, 0) / total) * 10
    ) / 10;

  return (
    <>
      <SchemaJsonLd
        data={breadcrumbSchema([
          { name: "Home", url: NAP.websiteUrl + "/" },
          { name: "Reviews", url: NAP.websiteUrl + "/reviews/" }
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
              <span className="text-white/80">Section 04 · Reviews</span>
            </div>
            <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.20em] text-white/70">
              <span className="text-brand-saffron">
                {avg.toFixed(1)} of 5
              </span>
              <span className="h-3 w-px bg-white/25" />
              <span>{total} Engagements On Record</span>
            </div>
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <h1 className="text-display-xl font-semibold text-balance">
                What Clients And Candidates Say After The Start Date.
              </h1>
              <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-white/85">
                Selected feedback from completed staffing engagements across
                the United States and Canada. Client names are withheld for
                discretion. Each quote is on file with the original
                engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-brand-paper border-b border-brand-line">
        <div className="container-prose py-12">
          <div className="grid gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="border-t border-brand-navy pt-5">
                <p className="font-display text-[34px] font-semibold leading-none text-brand-navy">
                  {s.value}
                </p>
                <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-ink-mute">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote grid */}
      <section className="section bg-white">
        <div className="container-prose">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-saffron-dark">
            Section 05 · On The Record
          </p>
          <h2 className="mt-3 max-w-3xl text-display-md text-brand-navy">
            Engagement Notes, In Their Own Words.
          </h2>

          <ul className="mt-12 grid gap-6 md:grid-cols-2">
            {TESTIMONIALS.map((t, i) => (
              <li
                key={i}
                className="flex flex-col border border-brand-line bg-brand-paper p-7"
              >
                <div className="flex items-center justify-between">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-saffron-dark">
                    {t.bucket} · {t.region}
                  </p>
                  <div
                    className="flex items-center gap-0.5"
                    aria-label={`${t.rating} of 5`}
                  >
                    {Array.from({ length: t.rating }).map((_, k) => (
                      <Star
                        key={k}
                        className="h-3.5 w-3.5 fill-brand-saffron-dark text-brand-saffron-dark"
                      />
                    ))}
                  </div>
                </div>
                <Quote
                  className="mt-5 h-5 w-5 text-brand-navy/30"
                  strokeWidth={1.75}
                />
                <p className="mt-3 text-[15px] leading-relaxed text-brand-navy">
                  {t.quote}
                </p>
                <p className="mt-6 border-t border-brand-line pt-4 text-[12px] uppercase tracking-[0.16em] text-brand-ink-mute">
                  {t.role} · Anonymous Client
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection
        variant="navy"
        eyebrow="Want references?"
        title="We share named references after a documented intake."
        description={`Once ${BRAND.shortName} has a written brief for the role, we share three named client references on request.`}
        primaryCta={{ href: "/contact/", label: CTA.employerPrimary }}
        secondaryCta={{ href: "/services/", label: "See how we work" }}
      />
    </>
  );
}

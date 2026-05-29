import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CalendarDays, Tag, Clock, User } from "lucide-react";
import { ARTICLES, getArticleBySlug } from "@/lib/articles";
import { BRAND, NAP } from "@/lib/constants";
import { editorial } from "@/lib/images";
import CTASection from "@/components/CTASection";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { notFound } from "next/navigation";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const article = getArticleBySlug(params.slug);
  if (!article) return { title: "Article Not Found" };
  return {
    title: article.title,
    description: article.excerpt
  };
}

const ARTICLE_PHOTO: Record<string, string> = {
  "operations-grade-staffing-job-descriptions": "insight-operations-grade",
  "property-services-labor-market-structured-intake": "insight-property-services",
  "day-of-need-placements-peak-season": "insight-day-of-need"
};

/**
 * Estimate read time at ~225 words per minute, rounded up to the nearest minute.
 */
function readMinutes(body: string) {
  const words = body.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 225));
}

/**
 * Render article body. Splits paragraphs on blank lines.
 * Treats `**...**` as bold runs.
 * Promotes the second paragraph to a saffron-accented pull quote when long enough.
 */
function renderBody(body: string) {
  const paragraphs = body.split(/\n\n+/);
  const pullIdx = paragraphs.findIndex(
    (p, i) => i > 0 && i < 4 && p.length > 120 && p.length < 320 && !p.startsWith("**")
  );

  return paragraphs.map((para, i) => {
    if (i === pullIdx) {
      return (
        <PullQuote key={i}>{stripBold(para)}</PullQuote>
      );
    }
    const parts = para.split(/(\*\*[^*]+\*\*)/g).filter(Boolean);
    const startsWithBold = para.startsWith("**");
    return (
      <p
        key={i}
        className={`mt-6 text-base leading-[1.75] text-brand-ink sm:text-lg ${
          startsWithBold ? "scroll-mt-24" : ""
        }`}
      >
        {parts.map((p, j) => {
          if (p.startsWith("**") && p.endsWith("**")) {
            return (
              <strong
                key={j}
                className="font-display font-semibold text-brand-navy"
              >
                {p.slice(2, -2)}
              </strong>
            );
          }
          return <span key={j}>{p}</span>;
        })}
      </p>
    );
  });
}

function stripBold(text: string) {
  return text.replace(/\*\*([^*]+)\*\*/g, "$1");
}

function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="relative my-12 border-l-[3px] border-brand-saffron pl-6 sm:pl-8">
      <p className="font-display text-xl font-semibold leading-snug text-brand-navy sm:text-2xl">
        {children}
      </p>
    </blockquote>
  );
}

export default function ArticlePage({ params }: Props) {
  const article = getArticleBySlug(params.slug);
  if (!article) return notFound();

  const photoKey = ARTICLE_PHOTO[article.slug] || "insights-hero";
  const dateLabel = new Date(article.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  const minutes = readMinutes(article.body);

  const related = ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 2);

  return (
    <>
      <SchemaJsonLd
        data={breadcrumbSchema([
          { name: "Home", url: NAP.websiteUrl + "/" },
          { name: "Insights", url: NAP.websiteUrl + "/insights/" },
          {
            name: article.title,
            url: NAP.websiteUrl + `/insights/${article.slug}/`
          }
        ])}
      />

      {/* Editorial briefing hero — type-led on navy band, no gradient */}
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
        <div className="relative container-prose pt-12 pb-12 lg:pt-16 lg:pb-16">
          <Link
            href="/insights/"
            className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/65 no-underline transition hover:text-brand-saffron"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> All insights
          </Link>
          <div className="mt-6 max-w-4xl">
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 border-b border-white/15 pb-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-saffron">
              <span className="inline-flex items-center gap-1.5">
                <Tag className="h-3 w-3" /> {article.category}
              </span>
              <span className="h-3 w-px bg-white/25" />
              <span className="inline-flex items-center gap-1.5 text-white/85">
                <CalendarDays className="h-3 w-3" /> {dateLabel}
              </span>
              <span className="h-3 w-px bg-white/25" />
              <span className="inline-flex items-center gap-1.5 text-white/85">
                <Clock className="h-3 w-3" /> {minutes} min read
              </span>
            </div>
            <h1 className="mt-6 font-display text-display-xl font-semibold text-balance">
              {article.title}
            </h1>
            <p className="mt-6 max-w-3xl text-[17px] leading-relaxed text-white/85 sm:text-[18px]">
              {article.excerpt}
            </p>

            {/* Byline */}
            <div className="mt-8 flex items-center gap-4 border-t border-white/15 pt-6">
              <span className="flex h-10 w-10 items-center justify-center border border-brand-saffron text-brand-saffron">
                <User className="h-4 w-4" strokeWidth={1.75} />
              </span>
              <div className="flex flex-col">
                <span className="text-[13px] font-semibold text-white">
                  Langford Staffing
                </span>
                <span className="text-[10px] uppercase tracking-[0.22em] text-brand-saffron">
                  Hiring guidance
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === EDITORIAL SLAB — full-bleed lead photograph === */}
      <section className="bg-brand-paper">
        <div className="container-prose">
          <figure className="relative -mt-2 overflow-hidden border-x border-b border-brand-line">
            <div className="relative aspect-[21/9] w-full bg-brand-navy">
              <Image
                src={editorial(photoKey as any)}
                alt=""
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </figure>
        </div>
      </section>

      {/* Body */}
      <section className="section">
        <div className="container-prose">
          <article className="mx-auto max-w-3xl">
            <div className="prose-langford">
              {renderBody(article.body)}
            </div>
          </article>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="bg-brand-paper-warm/40 section-tight">
          <div className="container-prose">
            <div className="flex items-end justify-between">
              <h2 className="font-display text-display-md font-semibold text-brand-navy">
                Keep reading
              </h2>
              <Link href="/insights/" className="link-arrow text-sm">
                All insights <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <ul className="mt-8 divide-y divide-brand-line border-y border-brand-line">
              {related.map((r, idx) => {
                const rMin = readMinutes(r.body);
                const rPhoto = ARTICLE_PHOTO[r.slug] || "insights-hero";
                return (
                  <li key={r.slug}>
                    <Link
                      href={`/insights/${r.slug}/`}
                      className="group grid gap-6 py-6 no-underline lg:grid-cols-12 lg:gap-10"
                    >
                      <div className="relative lg:col-span-4">
                        <div className="relative aspect-[16/10] w-full overflow-hidden bg-brand-navy">
                          <Image
                            src={editorial(rPhoto as any)}
                            alt=""
                            fill
                            sizes="(min-width: 1024px) 32vw, 100vw"
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <div className="lg:col-span-8">
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-saffron-dark">
                          <span>{r.category}</span>
                          <span className="h-1 w-1 rounded-full bg-brand-ink-mute/40" />
                          <span className="inline-flex items-center gap-1 text-brand-ink-mute">
                            <Clock className="h-3 w-3" /> {rMin} min
                          </span>
                        </div>
                        <h3 className="mt-3 font-display text-[22px] font-semibold leading-tight text-brand-navy transition group-hover:text-brand-saffron-dark">
                          {r.title}
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-brand-ink-soft">
                          {r.excerpt}
                        </p>
                        <span className="mt-4 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.16em] text-brand-navy">
                          Read article <ArrowRight className="h-3 w-3" />
                        </span>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      )}

      <CTASection
        variant="navy"
        eyebrow="Put guidance into practice"
        title="Tell us about the role or the search."
        description="A Langford team member will respond within one business day."
        primaryCta={{ href: "/contact/", label: "Hire talent" }}
        secondaryCta={{ href: "/positions/", label: "Find work" }}
      />
    </>
  );
}

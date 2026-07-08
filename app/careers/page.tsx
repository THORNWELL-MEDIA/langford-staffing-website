import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ClipboardList,
  Coffee,
  MessageSquare,
  Award,
  CheckCircle2,
  Users
} from "lucide-react";
import { BRAND, NAP } from "@/lib/constants";
import { editorial } from "@/lib/images";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import { breadcrumbSchema, organizationSchema } from "@/lib/schema";
import JobBoard from "./JobBoard";
import { CareersFilterProvider } from "./careers-filter-context";
import JobFilterControls from "./job-filter-controls";
import { fetchRolesFromApi } from "@/lib/data/careers";

export const metadata: Metadata = {
  title: "Careers",
  description: `Join ${BRAND.name}. We hire recruiters, account managers, and support staff across the US and Canada.`
};

const ROLES = [
  "Recruiters and sourcers; bilingual EN/FR a plus for Quebec and Ottawa desks",
  "Account managers with employer-side relationship experience",
  "Operations and coordinator roles supporting placement workflows",
  "Compliance and onboarding specialists familiar with US or Canadian employment law"
];

const HIRING_STEPS = [
  {
    icon: ClipboardList,
    title: "Apply",
    body: "Submit your résumé and a short note about the role you are interested in."
  },
  {
    icon: Coffee,
    title: "Conversation",
    body: "A 30-minute call to align on scope, motivation, and timing."
  },
  {
    icon: MessageSquare,
    title: "Working session",
    body: "A structured working session reflective of the role, not a hypothetical."
  },
  {
    icon: Award,
    title: "References & offer",
    body: "Reference work, an offer, and a documented onboarding plan."
  }
];

export default async function CareersPage() {
  const allRoles = await fetchRolesFromApi();

  return (
    <CareersFilterProvider allRoles={allRoles}>
      <SchemaJsonLd
        data={[
          organizationSchema(),
          breadcrumbSchema([
            { name: "Home", url: NAP.websiteUrl + "/" },
            { name: "Careers", url: NAP.websiteUrl + "/careers/" }
          ])
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
        <div className="relative container-prose pt-12 pb-16 lg:pt-16 lg:pb-20">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/15 pb-6">
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[10px] font-semibold uppercase tracking-[0.20em]">
              <span className="text-brand-saffron">Careers</span>
            </div>
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <h1 className="text-display-xl font-semibold text-balance">
                Build a career,{" "}
                <em className="not-italic font-semibold text-brand-saffron">
                  placing other people in great careers.
                </em>
              </h1>
              <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-white/85">
                We hire recruiters, account managers, operations, and support
                staff across the United States and Canada. If you take pride in
                doing this work the right way, we want to talk.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="#positions" className="btn-saffron">
                  See all positions
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inter-page filter */}
      <div className="container-prose mt-12 mb-12">
        <JobFilterControls scrollToId="positions" />
      </div>

      {/* === EDITORIAL SLAB === */}
      <section className="bg-brand-paper">
        <div className="container-prose">
          <figure className="relative -mt-2 overflow-hidden border-x border-b border-brand-line">
            <div className="relative aspect-[21/9] w-full bg-brand-navy">
              <Image
                src={editorial("careers-hero")}
                alt=""
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5">
              <span className="bg-brand-navy/75 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/85 backdrop-blur-sm">
                Plate · The hallway
              </span>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Why work here */}
      <section className="section">
        <div className="container-prose grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7 space-y-5">
            <SectionHeading
              eyebrow="Why work here"
              title="Staffing done right is one of the most leveraged jobs there is."
              size="lg"
            />
            <p className="max-w-prose text-base leading-relaxed text-brand-ink">
              Get it right and you change the trajectory of someone&rsquo;s
              career. Get it wrong and you cost a candidate or an employer
              months. We hire people who take the asymmetry seriously and
              operate accordingly.
            </p>
            <p className="max-w-prose text-base leading-relaxed text-brand-ink-soft">
              At {BRAND.name} you are joining a team with operational depth
              and a long horizon, not a single-engagement boutique. We invest
              in process, tools, and continuity so that the work compounds.
            </p>
          </div>

          <aside className="lg:col-span-5">
            <div className="border border-brand-line bg-brand-navy p-7 text-white">
              <Users className="h-5 w-5 text-brand-saffron" strokeWidth={1.75} />
              <h3 className="mt-4 font-display text-[20px] font-semibold">
                Why candidates work with us
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-white/85">
                {[
                  "Structured interviews, never guess what comes next.",
                  "Compensation, schedule, and scope clarity up front.",
                  "Continued access to roles if the first fit is not right.",
                  "Bilingual EN/FR support across Quebec and Ottawa."
                ].map((p) => (
                  <li key={p} className="flex gap-2.5">
                    <CheckCircle2 className="h-4 w-4 flex-none translate-y-0.5 text-brand-saffron" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* Who we hire */}
      <section className="bg-brand-paper-warm/40 section">
        <div className="container-prose">
          <SectionHeading
            eyebrow="Who we hire"
            title="Roles we are building toward."
            description="Bilingual capability is a plus for most roles. Based in the US or Canada, or willing to relocate within these markets."
            size="lg"
            align="center"
            className="mb-10"
          />
          <ul className="mx-auto grid max-w-4xl gap-3 sm:grid-cols-2">
            {ROLES.map((r) => (
              <li
                key={r}
                className="flex items-start gap-3 border border-brand-line bg-white p-4 text-sm leading-relaxed text-brand-ink"
              >
                <CheckCircle2 className="h-5 w-5 flex-none text-brand-saffron-dark" />
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How we hire */}
      <section className="section">
        <div className="container-prose">
          <SectionHeading
            eyebrow="How we hire"
            title="A four-step process."
            description="Same disciplined process we run for clients, applied to ourselves."
            size="lg"
            align="center"
            className="mb-12"
          />
          <ol className="mx-auto grid max-w-5xl gap-x-10 gap-y-6 md:grid-cols-2 lg:grid-cols-4">
            {HIRING_STEPS.map((s, i) => {
              const I = s.icon;
              return (
                <li
                  key={s.title}
                  className="border-t border-brand-navy pt-5"
                >
                  <I className="h-5 w-5 text-brand-navy" strokeWidth={1.75} />
                  <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-ink-mute">
                    Step {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-1.5 text-[16px] font-semibold text-brand-navy">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-ink-soft">
                    {s.body}
                  </p>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <JobBoard />

      <CTASection
        variant="navy"
        eyebrow="Build a career here"
        title="Hire other people for a living. Build a career while you do."
        description="Tell us about you. We tell you what we have open."
        primaryCta={{ href: "#positions", label: "See all positions" }}
        secondaryCta={{ href: "/about/", label: "About Langford" }}
      />
    </CareersFilterProvider>
  );
}

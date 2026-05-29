import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  ArrowRight,
  BriefcaseBusiness,
  MapPin,
  Users,
  type LucideIcon
} from "lucide-react";
import { SERVICES } from "@/lib/services";
import { CITIES } from "@/lib/cities";
import { BRAND, NAP } from "@/lib/constants";
import { img } from "@/lib/images";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: {
    absolute: `${BRAND.name} | Staffing Across the United States and Canada`
  },
  description:
    "Simple staffing support for employers and candidates across the United States and Canada."
};

const PROCESS = [
  {
    title: "Tell us the role",
    body: "We clarify the job, location, schedule, must-haves, pay range, and hiring timeline."
  },
  {
    title: "We screen candidates",
    body: "Langford verifies fit, availability, work history, and role-specific requirements before introductions."
  },
  {
    title: "You meet a shortlist",
    body: "You get a focused slate, not a pile of resumes. Each candidate comes with clear notes."
  },
  {
    title: "We support onboarding",
    body: "We stay involved through offer, start date, and early follow-up so the placement settles properly."
  }
];

export default function HomePage() {
  const featuredServices = SERVICES.slice(0, 6);
  const featuredCities = CITIES.slice(0, 6);

  return (
    <>
      <SchemaJsonLd
        data={breadcrumbSchema([{ name: "Home", url: NAP.websiteUrl + "/" }])}
      />

      <section className="bg-white">
        <div className="container-prose grid gap-10 py-16 lg:grid-cols-12 lg:items-center lg:py-24">
          <div className="lg:col-span-7">
            <p className="eyebrow">Staffing across the US and Canada</p>
            <h1 className="mt-5 max-w-3xl text-display-xl font-semibold text-brand-navy text-balance">
              Hire better people without turning recruiting into a second job.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-brand-ink-soft">
              {BRAND.name} helps employers find vetted candidates for permanent,
              temporary, contract-to-hire, executive, volume, and specialty
              roles. Clear process. Clear communication. No overbuilt maze.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact/" className="btn-primary">
                Hire talent
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/positions/" className="btn-secondary">
                Find work
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-lg border border-brand-line bg-brand-paper">
              <Image
                src={img("heroTeam", 1200)}
                alt="Professionals in a hiring meeting"
                width={1200}
                height={900}
                priority
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-brand-line bg-brand-paper">
        <div className="container-prose grid gap-6 py-10 md:grid-cols-3">
          {[
            ["6", "Staffing service lines"],
            ["US + CA", "Operating coverage"],
            ["1 day", "Typical response window"]
          ].map(([value, label]) => (
            <div key={label} className="bg-white p-5 ring-1 ring-brand-line">
              <p className="text-3xl font-semibold text-brand-navy">{value}</p>
              <p className="mt-1 text-sm text-brand-ink-mute">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-prose">
          <SectionHeading
            eyebrow="Who we help"
            title="Two sides of the same hiring problem."
            description="Employers need dependable people. Candidates need roles that actually match their skills, schedule, and goals."
            size="lg"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <AudienceCard
              icon={BriefcaseBusiness}
              title="For employers"
              body="Request a shortlist for one role, a recurring bench, or a larger hiring push. We document the brief, screen candidates, and keep communication tight."
              href="/contact/"
              cta="Request a shortlist"
            />
            <AudienceCard
              icon={Users}
              title="For candidates"
              body="Browse open roles or submit your resume for future matches. We focus on practical fit: location, availability, experience, and next-step potential."
              href="/positions/"
              cta="See open roles"
            />
          </div>
        </div>
      </section>

      <section className="section bg-brand-paper">
        <div className="container-prose">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Services"
              title="Simple staffing options."
              description="Pick the engagement model that fits the role and timeline."
              size="lg"
            />
            <Link href="/services/" className="link-arrow">
              View all services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}/`}
                className="block rounded-lg border border-brand-line bg-white p-6 no-underline transition hover:border-brand-navy"
              >
                <h3 className="text-xl font-semibold text-brand-navy">
                  {service.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink-soft">
                  {service.summary}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-prose grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="Process"
              title="What happens next."
              description="The process is intentionally plain. Everyone should know where the search stands."
            />
          </div>
          <div className="grid gap-5 lg:col-span-8 md:grid-cols-2">
            {PROCESS.map((step, index) => (
              <div
                key={step.title}
                className="rounded-lg border border-brand-line bg-white p-6"
              >
                <p className="text-sm font-semibold text-brand-saffron-dark">
                  Step {index + 1}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-brand-navy">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink-soft">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-prose">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Locations"
              title="Recruiting coverage where operators need people."
              description="Local market pages stay practical: roles, service lines, and how to start."
            />
            <Link href="/locations/" className="link-arrow">
              All locations <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featuredCities.map((city) => (
              <Link
                key={city.slug}
                href={`/locations/${city.slug}/`}
                className="flex items-center justify-between rounded-lg border border-brand-line bg-white p-5 no-underline transition hover:border-brand-navy"
              >
                <span>
                  <span className="block font-semibold text-brand-navy">
                    {city.name}
                  </span>
                  <span className="mt-1 flex items-center gap-1.5 text-sm text-brand-ink-mute">
                    <MapPin className="h-3.5 w-3.5" />
                    {city.province}
                  </span>
                </span>
                <ArrowRight className="h-4 w-4 text-brand-ink-mute" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        variant="light"
        eyebrow="Ready when you are"
        title="Tell us what you need to hire."
        description="We will respond with a clear next step, not a complicated funnel."
        primaryCta={{ href: "/contact/", label: "Talk to a recruiter" }}
        secondaryCta={{ href: "/positions/", label: "See open roles" }}
      />
    </>
  );
}

function AudienceCard({
  icon: Icon,
  title,
  body,
  href,
  cta
}: {
  icon: LucideIcon;
  title: string;
  body: string;
  href: string;
  cta: string;
}) {
  return (
    <div className="rounded-lg border border-brand-line bg-white p-7">
      <Icon className="h-7 w-7 text-brand-saffron-dark" />
      <h3 className="mt-5 text-2xl font-semibold text-brand-navy">{title}</h3>
      <p className="mt-3 text-base leading-relaxed text-brand-ink-soft">
        {body}
      </p>
      <Link href={href} className="link-arrow mt-6">
        {cta} <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}

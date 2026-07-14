import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Briefcase, UserSearch } from "lucide-react";
import { BRAND, NAP, HOURS } from "@/lib/constants";
import { editorial } from "@/lib/images";
import ContactForm from "@/components/ContactForm";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import FindLocalRecruiter from "@/components/FindLocalRecruiter";
import { breadcrumbSchema, localBusinessSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with ${BRAND.name}. Employers: tell us about the role. Candidates: apply now. North American team replies within one business day.`
};

export default function ContactPage() {
  return (
    <>
      <SchemaJsonLd
        data={[
          localBusinessSchema({
            "@type": ["EmploymentAgency", "ContactPage"]
          }),
          breadcrumbSchema([
            { name: "Home", url: NAP.websiteUrl + "/" },
            { name: "Contact", url: NAP.websiteUrl + "/contact/" }
          ])
        ]}
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
              <span className="text-brand-saffron">Contact</span>
              <span className="h-3 w-px bg-white/25" />
              <span className="text-white/80">One business day response</span>
            </div>
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <h1 className="text-display-xl font-semibold text-balance">
                One business day,{" "}
                <em className="not-italic font-semibold text-brand-saffron">
                  that is the longest you should wait.
                </em>
              </h1>
              <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-white/85">
                Employer? Tell us about the role. Candidate? Submit your
                details and a recruiter responds within one business day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === EDITORIAL SLAB — full-bleed reception photograph === */}
      <section className="bg-brand-paper">
        <div className="container-prose">
          <figure className="relative -mt-2 overflow-hidden border-x border-b border-brand-line">
            <div className="relative aspect-[21/9] w-full bg-brand-navy">
              <Image
                src={editorial("contact-hero")}
                alt=""
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5">
              <span className="bg-brand-navy/75 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/85 backdrop-blur-sm">
                Plate · Front desk
              </span>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Quick contact tiles */}
      <section className="section-tight">
        <div className="container-prose">
          <div className="grid border border-brand-line bg-white sm:grid-cols-2 lg:grid-cols-4">
            <ContactTile
              icon={Phone}
              label="Talk to us"
              value={NAP.phoneE164 ? NAP.phoneDisplay : "Use the form below"}
              href={NAP.phoneE164 ? `tel:${NAP.phoneE164}` : undefined}
            />
            <ContactTile
              icon={Mail}
              label="Email us"
              value={NAP.email}
              href={`mailto:${NAP.email}`}
            />
            <ContactTile
              icon={MapPin}
              label="Visit"
              value={NAP.addressDisplay}
            />
            <ContactTile
              icon={Clock}
              label="Hours"
              value={HOURS.display}
            />
          </div>
        </div>
      </section>

      {/* Forms */}
      <section className="section-tight">
        <div className="container-prose">
          <div className="grid gap-10 lg:grid-cols-1">
            <FormCard
              icon={Briefcase}
              eyebrow="For employers"
              title="Request a shortlist"
              description="Tell us about the role you need to hire. We will respond with a recommended engagement structure and next steps."
            >
              <ContactForm variant="employer" />
            </FormCard>

            {/* <FormCard
              icon={UserSearch}
              eyebrow="For candidates"
              title="Apply with Langford"
              description="Submit your details and a Langford recruiter will follow up about matching open roles across the US and Canada."
              accent
            >
              <ContactForm variant="candidate" />
            </FormCard> */}
          </div>
        </div>
      </section>

      <FindLocalRecruiter
        variant="dark"
        title="Find a local recruiter"
        description="Quickest path to a recruiter who knows your market. Drop your city or postal code below."
      />

      {/* Hours + map */}
      <section className="bg-brand-paper-warm/40 section-tight">
        <div className="container-prose grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <p className="border-b border-brand-navy pb-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-navy">
              Hours of operation
            </p>
            <h2 className="mt-4 font-display text-display-md font-semibold text-brand-navy">
              North American team, available during business hours.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-brand-ink">
              Our team operates across the United States and Canada during
              standard North American business hours Eastern Standard Time.
            </p>

            <ul className="mt-8 grid grid-cols-2 gap-2 text-sm">
              {[
                ["Monday", HOURS.monday],
                ["Tuesday", HOURS.tuesday],
                ["Wednesday", HOURS.wednesday],
                ["Thursday", HOURS.thursday],
                ["Friday", HOURS.friday],
                ["Saturday", HOURS.saturday],
                ["Sunday", HOURS.sunday]
              ].map(([day, val]) => (
                <li
                  key={day}
                  className="flex items-center justify-between border border-brand-line bg-white px-4 py-2.5"
                >
                  <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-brand-navy">
                    {day}
                  </span>
                  <span className="text-[12px] text-brand-ink-soft tabular-nums">{val}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-7">
            <div className="overflow-hidden border border-brand-line bg-white">
              <div className="relative aspect-[4/3] w-full bg-brand-navy">
                <iframe
                  title="Langford Staffing — Toronto office"
                  src="https://maps.google.com/maps?q=120%20Adelaide%20Street%20West%2C%20Suite%202505%2C%20Toronto%2C%20ON%20M5H%201T1&z=15&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 h-full w-full"
                />
              </div>
              <div className="border-t border-brand-line p-5 text-sm text-brand-ink-soft">
                <p>
                  <span className="font-semibold text-brand-navy">
                    Toronto desk:
                  </span>{" "}
                  {NAP.addressDisplay}
                </p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-brand-ink-mute">
                  Every inquiry is handled directly by a recruiter via the
                  form above or by email at {NAP.email}.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactTile({
  icon: Icon,
  label,
  value,
  href
}: {
  icon: typeof Phone;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="flex items-start gap-4 border-r border-b border-brand-line p-5 transition last:border-r-0 hover:bg-brand-paper-warm/40">
      <div className="flex h-10 w-10 flex-none items-center justify-center border border-brand-line text-brand-navy">
        <Icon className="h-4 w-4" strokeWidth={1.75} />
      </div>
      <div>
        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-saffron-dark">
          {label}
        </p>
        <p className="mt-1 text-[14px] font-semibold text-brand-navy">{value}</p>
      </div>
    </div>
  );
  if (href) {
    return (
      <a href={href} className="no-underline">
        {inner}
      </a>
    );
  }
  return inner;
}

function FormCard({
  icon: Icon,
  eyebrow,
  title,
  description,
  accent,
  children
}: {
  icon: typeof Briefcase;
  eyebrow: string;
  title: string;
  description: string;
  accent?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="overflow-hidden border border-brand-line bg-white">
      <div
        className={`flex items-center gap-4 px-7 py-5 ${accent ? "bg-brand-saffron text-brand-navy" : "bg-brand-navy text-white"
          }`}
      >
        <div
          className={`flex h-10 w-10 items-center justify-center border ${accent ? "border-brand-navy/30" : "border-white/30"
            }`}
        >
          <Icon className="h-4 w-4" strokeWidth={1.75} />
        </div>
        <div>
          <p
            className={`text-[10px] font-semibold uppercase tracking-[0.22em] ${accent ? "text-brand-navy/80" : "text-white/80"
              }`}
          >
            {eyebrow}
          </p>
          <h3 className="mt-0.5 font-display text-[20px] font-semibold">{title}</h3>
        </div>
      </div>
      <div className="px-7 py-7">
        <p className="mb-6 text-sm leading-relaxed text-brand-ink-soft">
          {description}
        </p>
        {children}
      </div>
    </div>
  );
}

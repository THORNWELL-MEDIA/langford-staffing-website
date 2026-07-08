import Link from "next/link";
import { ArrowRight, ChevronRight, MapPin, CheckCircle2 } from "lucide-react";
import { SERVICE_IN_CITY } from "@/lib/silo/index";
import { BRAND, NAP } from "@/lib/constants";
import { type StateHub as StateHubType, getStateData } from "@/lib/states";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import { breadcrumbSchema, localBusinessSchema, faqSchema } from "@/lib/schema";

// Distinct service lines the silo covers, derived once from the generated data.
const SERVICE_LINES: { slug: string; label: string }[] = (() => {
  const seen = new Map<string, string>();
  for (const p of SERVICE_IN_CITY) {
    if (p.service_slug && p.service_label && !seen.has(p.service_slug)) {
      seen.set(p.service_slug, p.service_label);
    }
  }
  return Array.from(seen, ([slug, label]) => ({ slug, label })).sort((a, b) =>
    a.label.localeCompare(b.label)
  );
})();

// The job families we staff, written for people, not keyword bots.
const ROLE_FAMILIES = [
  { h: "Warehouse and light industrial", b: "Pickers, packers, forklift operators, machine operators, and shipping clerks for distribution centers and plants." },
  { h: "Office and administrative", b: "Receptionists, data entry clerks, schedulers, and office coordinators who keep the day running." },
  { h: "Skilled trades", b: "Maintenance techs, electricians' helpers, HVAC support, and general laborers for hands-on work." },
  { h: "Healthcare support", b: "Medical assistants, front desk staff, and patient coordinators for clinics and care groups." },
  { h: "Accounting and finance", b: "Bookkeepers, AP and AR clerks, and payroll staff for temporary, seasonal, and permanent roles." },
  { h: "Customer service", b: "Call center reps, support agents, and client coordinators who handle the front line." }
];

function buildFaqs(state: StateHubType) {
  const d = getStateData(state.abbr);
  const cities = state.cities.slice(0, 3).map((c) => c.name);
  const cityList = cities.length === 3 ? `${cities[0]}, ${cities[1]}, and ${cities[2]}` : cities.join(", ");
  return [
    {
      q: `How much does a staffing agency in ${state.name} cost?`,
      a: `There is no cost to talk to us or to see candidates. For most roles you pay only when you hire. Temporary staff are billed at an hourly rate that covers their pay, payroll taxes, and our service. Direct hires are a one time placement fee. We give you the number in writing before you commit.`
    },
    {
      q: `How fast can you fill a job in ${state.name}?`,
      a: `For warehouse, office, and general labor roles we usually send a short list within one business day and place people within a few days. Specialized or licensed roles take a little longer. We keep a screened bench warm in ${cityList} so we are not starting from zero when you call.`
    },
    {
      q: `What types of jobs do you staff in ${state.name}?`,
      a: `We staff warehouse and light industrial, office and administrative, skilled trades, healthcare support, accounting and finance, and customer service roles. We cover ${SERVICE_LINES.length} service lines across temporary, temp to hire, and direct hire.`
    },
    {
      q: `Do you handle temp, temp to hire, and direct hire in ${state.name}?`,
      a: `Yes. You can bring people on for a short season, try them out and convert them to your payroll, or hire them directly from day one. We help you pick the model that fits the role and your budget.`
    },
    {
      q: `Which cities in ${state.name} do you serve?`,
      a: `We staff ${state.cities.length} ${state.cities.length === 1 ? "city" : "cities"} across ${state.name}, including ${cityList}. Pick your city from the list above for local roles, pay ranges, and how to start.`
    },
    ...(d ? [{
      q: `What is the minimum wage in ${state.name}?`,
      a: `The minimum wage in ${state.name} is ${d.minWage}${d.minWageNote ? ` (${d.minWageNote})` : ""}. We build pay rates that meet or beat the minimum and match what local employers actually pay to keep good people. Source: U.S. Department of Labor.`
    }] : [])
  ];
}

export default function StateHub({ state }: { state: StateHubType }) {
  const url = `${NAP.websiteUrl}/locations/${state.slug}/`;
  const cityCount = state.cities.length;
  const data = getStateData(state.abbr);
  const faqs = buildFaqs(state);
  const top3 = state.cities.slice(0, 3).map((c) => c.name);
  const top3List =
    top3.length === 3 ? `${top3[0]}, ${top3[1]}, and ${top3[2]}` : top3.join(", ");
  const inds = data?.industries || ["logistics", "healthcare", "manufacturing"];

  return (
    <>
      <SchemaJsonLd
        data={[
          localBusinessSchema({
            "@type": "EmploymentAgency",
            name: `${BRAND.name} in ${state.name}`,
            areaServed: {
              "@type": "State",
              name: state.name,
              containedInPlace: { "@type": "Country", name: state.country }
            }
          }),
          breadcrumbSchema([
            { name: "Home", url: NAP.websiteUrl + "/" },
            { name: "Locations", url: NAP.websiteUrl + "/locations/" },
            { name: state.name, url }
          ]),
          faqSchema(faqs),
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: state.cities.map((c, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: `Staffing in ${c.name}, ${state.abbr}`,
              url: `${NAP.websiteUrl}${c.url}/`
            }))
          }
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
            <Link href="/locations/" className="text-white/65 no-underline transition hover:text-brand-saffron">
              Locations
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-white/85">{state.name}</span>
          </nav>

          <p className="mt-6 inline-flex items-center gap-2 border border-white/20 bg-white/5 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-saffron">
            <MapPin className="h-3 w-3" />
            {state.country}
          </p>
          <h1 className="mt-6 max-w-3xl text-display-xl font-semibold text-balance">
            Staffing Agencies in {state.name}
          </h1>
          <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-white/85">
            Need to hire in {state.name}? {BRAND.name} finds, screens, and places
            workers for employers in {cityCount}{" "}
            {cityCount === 1 ? "city" : "cities"} across the state, from{" "}
            {top3List}. Tell us the role and we get back to you within one
            business day.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact/" className="btn-saffron">
              Hire in {state.name}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/careers/" className="btn-ghost-light">
              See open roles
            </Link>
          </div>

          <div className="mt-12 grid max-w-2xl grid-cols-3 gap-8 border-t border-white/10 pt-8">
            <div>
              <p className="text-3xl font-semibold">{cityCount}</p>
              <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/60">Cities covered</p>
            </div>
            <div>
              <p className="text-3xl font-semibold">{SERVICE_LINES.length}</p>
              <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/60">Service lines</p>
            </div>
            <div>
              <p className="text-3xl font-semibold">1 day</p>
              <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/60">Response time</p>
            </div>
          </div>
        </div>
      </section>

      {/* How we staff in this state */}
      <section className="section bg-white">
        <div className="container-prose grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading eyebrow="How it works" title={`How we staff companies in ${state.name}`} />
            <div className="mt-6 space-y-4 text-[16px] leading-relaxed text-brand-ink">
              <p>
                You tell us the role, the schedule, and the pay range. We pull
                from candidates we already know in your market, screen them for
                fit and reliability, and send you a short list instead of a pile
                of resumes. You interview the ones you like and we handle the
                offer and onboarding.
              </p>
              <p>
                For temporary and contract work we run payroll, taxes, and
                workers compensation, so the people are on our books until you
                decide to convert them. For direct hires, they join your team
                from day one. Either way we stay in touch through the first
                month to make sure the placement sticks.
              </p>
            </div>
          </div>
          <div className="lg:col-span-5">
            {/* State hiring at a glance — real, sourced data */}
            <div className="border border-brand-line bg-brand-paper p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-saffron-dark">
                {state.name} hiring at a glance
              </p>
              <dl className="mt-5 space-y-4 text-[15px]">
                <div>
                  <dt className="font-semibold text-brand-navy">Top hiring industries</dt>
                  <dd className="mt-1 text-brand-ink-soft">{inds.slice(0, 4).join(", ")}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-brand-navy">Minimum wage (2026)</dt>
                  <dd className="mt-1 text-brand-ink-soft">
                    {data ? `${data.minWage}${data.minWageNote ? `, ${data.minWageNote}` : ""}` : "Meets or beats the local minimum"}
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-brand-navy">Cities we staff</dt>
                  <dd className="mt-1 text-brand-ink-soft">{cityCount} across {state.name}</dd>
                </div>
              </dl>
              <p className="mt-5 text-[11px] text-brand-ink-mute">
                Sources: U.S. Bureau of Labor Statistics, U.S. Department of Labor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Roles we staff */}
      <section className="section bg-brand-paper">
        <div className="container-prose">
          <SectionHeading
            eyebrow="Roles"
            title={`The roles we staff across ${state.name}`}
            description="Six job families, hired on temporary, temp to hire, and direct hire terms."
            size="lg"
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ROLE_FAMILIES.map((r) => (
              <div key={r.h} className="border border-brand-line bg-white p-6">
                <h3 className="text-[17px] font-semibold text-brand-navy">{r.h}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-brand-ink-soft">{r.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* City directory */}
      <section className="section bg-white">
        <div className="container-prose">
          <SectionHeading
            eyebrow="Cities"
            title={`Find a staffing agency near you in ${state.name}`}
            description="Every city has its own page with local roles, pay ranges, and how to start."
            size="lg"
          />
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {state.cities.map((c) => (
              <li key={c.citySlug}>
                <Link
                  href={`${c.url}/`}
                  className="flex items-center justify-between border border-brand-line bg-white px-4 py-3.5 text-sm font-semibold text-brand-navy no-underline transition hover:border-brand-saffron hover:text-brand-saffron-dark"
                >
                  <span className="flex items-center gap-2">
                    <MapPin className="h-3.5 w-3.5 flex-none text-brand-saffron-dark" />
                    {c.name}, {state.abbr}
                  </span>
                  <ArrowRight className="h-4 w-4 flex-none text-brand-ink-mute" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why work with us */}
      <section className="section bg-brand-paper">
        <div className="container-prose">
          <SectionHeading eyebrow="Why us" title={`Why ${state.name} employers work with ${BRAND.shortName}`} size="lg" />
          <ul className="mt-8 grid gap-5 sm:grid-cols-2">
            {[
              ["We move fast", "A short list in about one business day for most roles, because we keep a screened bench warm in your market."],
              ["We screen for real", "We check work history, references, and right to work before anyone reaches you. You meet people who can do the job."],
              ["We carry the paperwork", "Payroll, taxes, and workers compensation on temp placements sit with us, not you."],
              ["We stay on the file", "We check in through the first 30 days so a placement that wobbles gets fixed early."]
            ].map(([h, b]) => (
              <li key={h} className="flex items-start gap-3 border border-brand-line bg-white p-5">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-brand-saffron-dark" />
                <span>
                  <span className="block font-semibold text-brand-navy">{h}</span>
                  <span className="mt-1 block text-[14px] leading-relaxed text-brand-ink-soft">{b}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-white">
        <div className="container-prose">
          <SectionHeading eyebrow="FAQ" title={`Staffing in ${state.name}: common questions`} size="lg" />
          <div className="mt-8 divide-y divide-brand-line border-y border-brand-line">
            {faqs.map((f) => (
              <details key={f.q} className="group py-4">
                <summary className="cursor-pointer list-none text-[16px] font-semibold text-brand-navy">
                  {f.q}
                </summary>
                <p className="mt-3 text-[15px] leading-relaxed text-brand-ink-soft">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        variant="navy"
        eyebrow={`Hire in ${state.name}`}
        title="Tell us what you need to fill."
        description="Local candidate networks across the state. We respond within one business day."
        primaryCta={{ href: "/contact/", label: "Tell us about the role" }}
        secondaryCta={{ href: "/locations/", label: "All locations" }}
      />
    </>
  );
}

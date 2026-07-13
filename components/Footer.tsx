import Link from "next/link";
import { MapPin, Phone, Mail, Globe } from "lucide-react";
import { BRAND, NAP, HOURS } from "@/lib/constants";
import { statesByCountry } from "@/lib/states";
import Logo from "./Logo";

// Provinces + states, derived from the silo so the footer always matches
// coverage (Canada: all provinces; US: all states) instead of hand-listed cities.
const COL_CANADA = statesByCountry("Canada").map((s) => ({
  href: `/locations/${s.slug}/`,
  label: s.name,
}));

const COL_UNITED_STATES = statesByCountry("United States").map((s) => ({
  href: `/locations/${s.slug}/`,
  label: s.name,
}));

const COL_COMPANY = [
  { href: "/about/", label: "About" },
  { href: "/services/", label: "Services" },
  { href: "/careers/", label: "Careers" },
  { href: "/insights/", label: "Insights" },
  { href: "/contact/", label: "Contact" }
];

const COL_LEGAL = [
  { href: "/privacy/", label: "Privacy & Trust Centre" },
  { href: "/privacy/general", label: "General Privacy Policy" },
  { href: "/privacy/candidate", label: "Candidate Privacy Policy" },
  { href: "/privacy/cookies", label: "Cookie Policy" },
  { href: "/privacy/accessibility", label: "Accessibility Statement" },
  { href: "/privacy/terms", label: "Website Terms of Use" }
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brand-navy-dark text-white/85">
      {/* Saffron hairline rule top */}
      <div className="h-px w-full bg-brand-saffron" />

      <div className="container-prose py-14">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand block */}
          <div className="lg:col-span-4">
            <Logo variant="light" />
            <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-saffron">
              Staffing that fits your team · US &amp; Canada
            </p>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
              {BRAND.shortDescription}
            </p>

            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex gap-3">
                <MapPin className="h-4 w-4 flex-none translate-y-0.5 text-brand-saffron" />
                <span className="text-white/80">{NAP.addressDisplay}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="h-4 w-4 flex-none translate-y-0.5 text-brand-saffron" />
                <a
                  href={`tel:${NAP.phoneE164}`}
                  className="tabular text-white no-underline hover:text-brand-saffron"
                >
                  {NAP.phoneDisplay}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="h-4 w-4 flex-none translate-y-0.5 text-brand-saffron" />
                <a
                  href={`mailto:${NAP.email}`}
                  className="text-white/80 no-underline hover:text-white"
                >
                  {NAP.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Globe className="h-4 w-4 flex-none translate-y-0.5 text-brand-saffron" />
                <span className="text-white/80">{HOURS.display}</span>
              </li>
            </ul>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-3">
            <FooterCol title="Canada" links={COL_CANADA} />
            <FooterCol title="United States" links={COL_UNITED_STATES} />
            <FooterCol title="Company" links={COL_COMPANY} />
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-8 border-t border-white/10 pt-8 text-[11px] uppercase tracking-[0.16em] text-white/60 md:flex-row md:items-center md:justify-between">
          <p className="whitespace-nowrap shrink-0">
            © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {COL_LEGAL.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-white/60 no-underline hover:text-white"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-6 max-w-3xl text-[11px] leading-relaxed text-white/55">
          Langford Staffing complies with applicable federal, state, and
          provincial employment, labor, and data-protection law in the
          jurisdictions in which we operate. We do not discriminate against
          candidates on the basis of any protected characteristic.
        </p>

        <p className="mt-3 max-w-3xl text-[10px] leading-relaxed text-white/40">
          {NAP.registeredOffice}
        </p>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links
}: {
  title: string;
  links: { href?: string; label: string }[];
}) {
  return (
    <div>
      <h3 className="border-b border-brand-saffron/40 pb-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-saffron">
        {title}
      </h3>
      <ul className="mt-5 space-y-3 text-sm">
        {links.map((l) => (
          <li key={l.label}>
            {l.href ? (
              <Link
                href={l.href}
                className="text-white/70 no-underline transition hover:text-white"
              >
                {l.label}
              </Link>
            ) : (
              <span className="text-white/80">{l.label}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

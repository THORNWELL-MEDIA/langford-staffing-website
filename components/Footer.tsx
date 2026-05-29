import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { BRAND, NAP } from "@/lib/constants";
import Logo from "./Logo";

const COMPANY = [
  { href: "/services/", label: "Services" },
  { href: "/locations/", label: "Locations" },
  { href: "/positions/", label: "Open roles" },
  { href: "/about/", label: "About" },
  { href: "/insights/", label: "Insights" },
  { href: "/contact/", label: "Contact" }
];

const HIRE = [
  { href: "/services/permanent-placement/", label: "Permanent placement" },
  { href: "/services/temporary-staffing/", label: "Temporary staffing" },
  { href: "/services/contract-to-hire/", label: "Contract to hire" },
  { href: "/services/executive-search/", label: "Executive search" },
  { href: "/services/volume-hiring/", label: "Volume hiring" },
  { href: "/services/specialty-search/", label: "Specialty search" }
];

const LEGAL = [
  { href: "/privacy/", label: "Privacy" },
  { href: "/terms/", label: "Terms" }
];

export default function Footer() {
  return (
    <footer className="border-t border-brand-line bg-white">
      <div className="container-prose py-12">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo />
            <p className="mt-5 max-w-md text-sm leading-relaxed text-brand-ink-soft">
              {BRAND.shortDescription}
            </p>
            <ul className="mt-6 space-y-3 text-sm text-brand-ink-soft">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 flex-none text-brand-saffron-dark" />
                <span>{NAP.addressDisplay}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 flex-none text-brand-saffron-dark" />
                <a href={NAP.phoneTel} className="no-underline hover:text-brand-navy">
                  {NAP.phoneDisplay}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 flex-none text-brand-saffron-dark" />
                <a
                  href={`mailto:${NAP.email}`}
                  className="no-underline hover:text-brand-navy"
                >
                  {NAP.email}
                </a>
              </li>
            </ul>
          </div>

          <FooterCol title="Company" links={COMPANY} />
          <FooterCol title="Hire with us" links={HIRE} />
        </div>

        <div className="mt-10 border-t border-brand-line pt-6">
          <div className="flex flex-col gap-4 text-sm text-brand-ink-mute md:flex-row md:items-center md:justify-between">
            <p>
              Staffing and recruitment across the United States and Canada.
            </p>
            <ul className="flex flex-wrap gap-5">
              {LEGAL.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-brand-ink-mute no-underline hover:text-brand-navy"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-4 text-xs leading-relaxed text-brand-ink-light">
            © {new Date().getFullYear()} {BRAND.name}. {NAP.registeredOffice}
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
  external = false
}: {
  title: string;
  links: { href: string; label: string }[];
  external?: boolean;
}) {
  return (
    <div className="lg:col-span-3">
      <h3 className="text-sm font-semibold text-brand-navy">{title}</h3>
      <ul className="mt-4 space-y-3 text-sm">
        {links.map((item) => (
          <li key={item.href}>
            {external ? (
              <a
                href={item.href}
                target="_blank"
                rel="noopener"
                className="text-brand-ink-soft no-underline hover:text-brand-navy"
              >
                {item.label}
              </a>
            ) : (
              <Link
                href={item.href}
                className="text-brand-ink-soft no-underline hover:text-brand-navy"
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

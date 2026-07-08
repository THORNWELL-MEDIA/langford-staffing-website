"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, Phone, ArrowRight } from "lucide-react";
import { BRAND, NAP } from "@/lib/constants";
import Logo from "./Logo";
import { cn } from "@/lib/cn";

const NAV = [
  { href: "/services/", label: "Services" },
  { href: "/locations/", label: "Locations" },
  { href: "/careers/", label: "Careers" },
  { href: "/insights/", label: "Insights" },
  { href: "/about/", label: "About" }
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile nav open
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Executive briefing strip — navy, all caps, single hairline */}
      <div className="hidden border-b border-white/10 bg-brand-navy text-white md:block">
        <div className="container-prose flex items-center justify-between py-2 text-[11px] uppercase tracking-[0.16em]">
          <div className="flex items-center gap-5">
            <span className="inline-flex items-center gap-2">
              <span className="h-1 w-1 bg-brand-saffron" />
              <span className="font-semibold">Staffing that fits your team</span>
              <span className="text-white/60">·</span>
              <span className="text-white/85">United States &amp; Canada</span>
            </span>
            <span className="hidden h-3 w-px bg-white/20 lg:inline-block" />
            <span className="hidden text-white/75 lg:inline">
              Recruiter desks live · One business day response
            </span>
          </div>
          <div className="flex items-center gap-5">
            <Link
              href="/contact/"
              className="font-semibold text-white no-underline hover:text-brand-saffron"
            >
              Employers
            </Link>
            <span className="h-3 w-px bg-white/20" />
            <Link
              href="/careers/"
              className="font-semibold text-brand-saffron no-underline hover:text-white"
            >
              Candidates
            </Link>
          </div>
        </div>
      </div>

      <header
        className={cn(
          "sticky top-0 z-40 transition-all duration-200",
          scrolled
            ? "border-b border-brand-line bg-white/95 backdrop-blur-md"
            : "border-b border-brand-line/60 bg-white"
        )}
      >
        <div className="container-prose flex items-center justify-between py-3.5">
          <Link href="/" className="no-underline">
            <Logo />
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {NAV.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="text-[12px] font-semibold uppercase tracking-[0.16em] text-brand-navy/80 no-underline transition hover:text-brand-saffron-dark"
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${NAP.phoneE164}`}
              className="hidden items-center gap-1.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-brand-navy no-underline hover:text-brand-saffron-dark md:inline-flex"
            >
              <Phone className="h-3 w-3" /> <span className="tabular">{NAP.phoneDisplay}</span>
            </a>
            <Link
              href="/contact/"
              className="hidden items-center gap-1.5 rounded-sm bg-brand-navy px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white no-underline transition hover:bg-brand-navy-dark sm:inline-flex"
            >
              Talk to a recruiter
              <ArrowRight className="h-3 w-3" />
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-brand-line bg-white text-brand-navy lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        {open && (
          <div className="lg:hidden">
            <div className="border-t border-brand-line bg-white">
              <div className="container-prose flex flex-col gap-1 py-6">
                {NAV.map((n) => (
                  <Link
                    key={n.href}
                    href={n.href}
                    onClick={() => setOpen(false)}
                    className="rounded-sm px-3 py-3 text-[13px] font-semibold uppercase tracking-[0.16em] text-brand-navy no-underline transition hover:bg-brand-paper-warm"
                  >
                    {n.label}
                  </Link>
                ))}
                <div className="mt-4 grid gap-3 border-t border-brand-line pt-6">
                  <Link
                    href="/contact/"
                    onClick={() => setOpen(false)}
                    className="btn-primary w-full"
                  >
                    Talk to a recruiter
                  </Link>
                  <a
                    href={`tel:${NAP.phoneE164}`}
                    className="mt-2 inline-flex items-center justify-center gap-1.5 text-sm font-medium text-brand-ink-soft no-underline tabular"
                  >
                    <Phone className="h-3.5 w-3.5" /> {NAP.phoneDisplay}
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

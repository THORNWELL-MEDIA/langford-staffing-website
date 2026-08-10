"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, ArrowRight, User, Briefcase } from "lucide-react";
import { BRAND, NAP } from "@/lib/constants";
import Logo from "./Logo";
import { cn } from "@/lib/cn";

const NAV = [
  { href: "/services/", label: "Services" },
  { href: "/locations/", label: "Locations" },
  { href: "/careers/", label: "Careers" },
  { href: "/insights/", label: "Insights" },
  { href: "/about/", label: "About" },
  { href: "/contact/", label: "Contact" }
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile nav open or login open
  useEffect(() => {
    if (open || loginOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open, loginOpen]);

  return (
    <>
      {/* Login Popup */}
      {loginOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-brand-navy/70 p-4 backdrop-blur-md transition-all">
          <div className="relative w-full max-w-md overflow-hidden rounded-xl bg-white shadow-2xl">
            <button
              onClick={() => setLoginOpen(false)}
              className="absolute right-4 top-4 z-10 rounded-full bg-brand-navy/5 p-1.5 text-brand-navy/60 transition-colors hover:bg-brand-navy/10 hover:text-brand-navy"
            >
              <X className="h-5 w-5" />
            </button>
            
            <div className="flex flex-col sm:flex-row">
              <a
                href="https://career.langfordstaffing.com/login"
                className="group relative flex flex-1 flex-col items-center justify-center gap-3 bg-white p-10 text-center no-underline transition-colors hover:bg-brand-paper-warm sm:border-r sm:border-brand-line/60 border-b border-brand-line/60 sm:border-b-0"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-navy/5 text-brand-navy transition-transform duration-300 group-hover:scale-110 group-hover:bg-brand-navy group-hover:text-white">
                  <User className="h-7 w-7" />
                </div>
                <div>
                  <span className="block text-lg font-bold text-brand-navy">Candidate</span>
                  <span className="mt-1 block text-[13px] font-medium text-brand-navy/60">Find your next role</span>
                </div>
              </a>
              <a
                href="https://career.langfordstaffing.com/recruiter/login"
                className="group relative flex flex-1 flex-col items-center justify-center gap-3 bg-white p-10 text-center no-underline transition-colors hover:bg-brand-paper-warm"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-navy/5 text-brand-navy transition-transform duration-300 group-hover:scale-110 group-hover:bg-brand-navy group-hover:text-white">
                  <Briefcase className="h-7 w-7" />
                </div>
                <div>
                  <span className="block text-lg font-bold text-brand-navy">Recruiter</span>
                  <span className="mt-1 block text-[13px] font-medium text-brand-navy/60">Hire great talent</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}

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
            <button
              onClick={() => setLoginOpen(true)}
              className="hidden items-center gap-1.5 rounded-sm bg-brand-navy px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white no-underline transition hover:bg-brand-navy-dark sm:inline-flex"
            >
              <User className="h-3 w-3" />
              Login
            </button>
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
                  <button
                    onClick={() => {
                      setOpen(false);
                      setLoginOpen(true);
                    }}
                    className="btn-primary w-full flex items-center justify-center gap-2"
                  >
                    <User className="h-4 w-4" />
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}


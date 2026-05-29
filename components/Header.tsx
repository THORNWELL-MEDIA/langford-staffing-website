"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, Menu, Phone, X } from "lucide-react";
import { NAP } from "@/lib/constants";
import Logo from "./Logo";
import { cn } from "@/lib/cn";

const NAV = [
  { href: "/services/", label: "Services" },
  { href: "/industries/", label: "Industries" },
  { href: "/locations/", label: "Locations" },
  { href: "/positions/", label: "Open roles" },
  { href: "/pricing/", label: "Pricing" },
  { href: "/reviews/", label: "Reviews" },
  { href: "/about/", label: "About" },
  { href: "/insights/", label: "Insights" }
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b border-brand-line bg-white transition-shadow",
        scrolled && "shadow-soft"
      )}
    >
      <div className="container-prose flex items-center justify-between py-4">
        <Link href="/" className="no-underline" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-brand-ink-soft no-underline transition hover:text-brand-navy"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={NAP.phoneTel}
            className="hidden items-center gap-2 text-sm font-medium text-brand-ink-soft no-underline hover:text-brand-navy md:inline-flex"
          >
            <Phone className="h-4 w-4" />
            {NAP.phoneDisplay}
          </a>
          <Link href="/contact/" className="hidden btn-primary sm:inline-flex">
            Hire talent
            <ArrowRight className="h-4 w-4" />
          </Link>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-brand-line bg-white text-brand-navy lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-brand-line bg-white lg:hidden">
          <nav className="container-prose flex flex-col gap-1 py-5">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-base font-medium text-brand-navy no-underline hover:bg-brand-paper"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-4 grid gap-3 border-t border-brand-line pt-5">
              <Link
                href="/contact/"
                onClick={() => setOpen(false)}
                className="btn-primary w-full"
              >
                Hire talent
              </Link>
              <Link
                href="/positions/"
                onClick={() => setOpen(false)}
                className="btn-secondary w-full"
              >
                Find work
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

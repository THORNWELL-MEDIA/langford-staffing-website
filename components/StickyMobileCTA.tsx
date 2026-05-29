"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { NAP } from "@/lib/constants";
import { cn } from "@/lib/cn";

/**
 * Sticky mobile CTA — executive squared corners, navy + saffron accent.
 * "Talk to a recruiter" + phone, the two highest-intent paths on mobile.
 */
export default function StickyMobileCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 transform-gpu transition-transform duration-200 lg:hidden",
        "border-t border-brand-line bg-white/95 backdrop-blur-md",
        show ? "translate-y-0" : "translate-y-full"
      )}
    >
      <div className="grid grid-cols-2 gap-2 px-3 py-2.5 pb-[calc(env(safe-area-inset-bottom,0)+0.625rem)]">
        <a
          href={`tel:${NAP.phoneE164}`}
          className="inline-flex items-center justify-center gap-1.5 rounded-sm border border-brand-navy/20 bg-white px-3 py-2.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-navy no-underline"
        >
          <Phone className="h-3.5 w-3.5" /> Call
        </a>
        <Link
          href="/contact/"
          className="inline-flex items-center justify-center gap-1.5 rounded-sm bg-brand-navy px-3 py-2.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white no-underline"
        >
          Talk to a recruiter <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  );
}

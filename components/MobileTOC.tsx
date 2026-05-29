"use client";

/**
 * Sticky table-of-contents sidebar for long-form pages.
 * Tracks the active section via IntersectionObserver and shows current location.
 */

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

interface Item {
  id: string;
  label: string;
}

export default function MobileTOC({ items }: { items: Item[] }) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActive(item.id);
          });
        },
        { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [items]);

  return (
    <nav className="text-sm" aria-label="On this page">
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-brand-navy">
        On this page
      </p>
      <ul className="space-y-1 border-l border-brand-line">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={cn(
                "-ml-px block border-l-2 px-4 py-1.5 no-underline transition",
                active === item.id
                  ? "border-brand-teal text-brand-teal-dark font-semibold"
                  : "border-transparent text-brand-ink-soft hover:border-brand-navy/30 hover:text-brand-navy"
              )}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

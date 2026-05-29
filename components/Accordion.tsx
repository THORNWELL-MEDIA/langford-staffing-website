"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";

interface Item {
  q: string;
  a: string;
}

export default function Accordion({ items }: { items: Item[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-brand-line border-y border-brand-line">
      {items.map((item, idx) => {
        const isOpen = open === idx;
        return (
          <div key={item.q}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : idx)}
              className="group flex w-full items-center justify-between gap-6 py-6 text-left transition"
              aria-expanded={isOpen}
            >
              <span className="text-base font-semibold text-brand-navy sm:text-lg">
                {item.q}
              </span>
              <span
                className={cn(
                  "flex h-9 w-9 flex-none items-center justify-center rounded-full border border-brand-line text-brand-navy transition group-hover:border-brand-teal group-hover:text-brand-teal-dark",
                  isOpen && "rotate-180 border-brand-teal bg-brand-teal text-white"
                )}
                aria-hidden="true"
              >
                <ChevronDown className="h-4 w-4" />
              </span>
            </button>
            <div
              className={cn(
                "grid overflow-hidden transition-[grid-template-rows] duration-300",
                isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
              )}
            >
              <div className="overflow-hidden">
                <p className="max-w-prose pr-12 text-base leading-relaxed text-brand-ink-soft">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

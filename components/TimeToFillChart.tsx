"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import SectionHeading from "./SectionHeading";

type Bar = { label: string; days: number; emphasis?: boolean };

const DATA: Bar[] = [
  { label: "Hospitality", days: 18 },
  { label: "Property Services", days: 21 },
  { label: "Logistics", days: 24 },
  { label: "Specialty Trades", days: 27 },
  { label: "Professional Services", days: 32 },
  { label: "Executive Search", days: 46, emphasis: true }
];

export default function TimeToFillChart() {
  const max = Math.max(...DATA.map((d) => d.days));
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section bg-white">
      <div className="container-prose">
        <SectionHeading
          eyebrow="By the numbers"
          title={
            <>
              Time-to-fill by industry,{" "}
              <em className="font-bold not-italic text-brand-saffron-dark">
                in days.
              </em>
            </>
          }
          description="Median calendar days from intake to accepted offer across recent Langford engagements. Operating-company roles move faster when intake is structured."
          size="lg"
          align="center"
          className="mb-12"
        />

        <div
          ref={ref}
          className="relative overflow-hidden rounded-2xl border border-brand-line bg-white p-6 shadow-soft sm:p-10"
        >
          {/* Subtle saffron corner glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-brand-saffron/10 blur-3xl"
          />
          <div className="relative space-y-5">
            {DATA.map((b, i) => (
              <BarRow key={b.label} bar={b} max={max} inView={inView} index={i} />
            ))}
          </div>
          <p className="relative mt-8 border-t border-brand-line pt-5 text-xs leading-relaxed text-brand-ink-soft">
            Indicative ranges across recent US and Canadian engagements. Actual
            time-to-fill varies by role seniority, market scarcity, and
            intake completeness.
          </p>
        </div>
      </div>
    </section>
  );
}

function BarRow({
  bar,
  max,
  inView,
  index
}: {
  bar: Bar;
  max: number;
  inView: boolean;
  index: number;
}) {
  const targetPct = Math.round((bar.days / max) * 100);
  const [width, setWidth] = useState(0);
  const [days, setDays] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const duration = 1200;
    const delay = index * 110;
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, Math.max(0, (now - start - delay) / duration));
      const eased = 1 - Math.pow(1 - t, 3);
      setWidth(eased * targetPct);
      setDays(Math.round(eased * bar.days));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, targetPct, bar.days, index]);

  return (
    <div>
      <div className="flex items-baseline justify-between gap-4">
        <span className="text-sm font-semibold text-brand-navy">
          {bar.label}
        </span>
        <span className="text-xs font-semibold tracking-[0.12em] text-brand-ink-soft tabular-nums">
          {days} days
        </span>
      </div>
      <div className="mt-2 h-3 w-full overflow-hidden rounded-full bg-brand-mist">
        <div
          className={
            bar.emphasis
              ? "h-full rounded-full bg-gradient-to-r from-brand-saffron to-brand-saffron-dark transition-[width] duration-500 ease-out"
              : "h-full rounded-full bg-gradient-to-r from-brand-sky to-brand-sky-dark transition-[width] duration-500 ease-out"
          }
          style={{ width: `${width}%` }}
          aria-label={`${bar.label}: ${bar.days} days`}
        />
      </div>
    </div>
  );
}

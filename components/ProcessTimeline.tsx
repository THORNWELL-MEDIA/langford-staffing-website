"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";

export interface TimelineStep {
  icon: LucideIcon;
  title: string;
  body: string;
  meta?: string;
}

interface Props {
  steps: TimelineStep[];
  variant?: "light" | "dark";
  numbered?: boolean;
}

export default function ProcessTimeline({
  steps,
  variant = "light",
  numbered = true
}: Props) {
  const isDark = variant === "dark";

  return (
    <ol
      className={cn(
        "relative grid gap-6",
        steps.length === 4 && "md:grid-cols-2 lg:grid-cols-4",
        steps.length === 5 && "md:grid-cols-2 lg:grid-cols-5",
        steps.length === 6 && "md:grid-cols-2 lg:grid-cols-3"
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute left-0 right-0 top-7 hidden h-px lg:block",
          isDark
            ? "bg-gradient-to-r from-transparent via-white/15 to-transparent"
            : "bg-gradient-to-r from-transparent via-brand-teal/30 to-transparent"
        )}
      />
      {steps.map((step, idx) => (
        <Step
          key={step.title}
          idx={idx}
          step={step}
          isDark={isDark}
          numbered={numbered}
        />
      ))}
    </ol>
  );
}

function Step({
  idx,
  step,
  isDark,
  numbered
}: {
  idx: number;
  step: TimelineStep;
  isDark: boolean;
  numbered: boolean;
}) {
  const ref = useRef<HTMLLIElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const Icon = step.icon;

  return (
    <motion.li
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
      className={cn(
        "relative rounded-2xl p-7 shadow-soft",
        isDark
          ? "border border-white/10 bg-white/5 backdrop-blur"
          : "border border-brand-line bg-white"
      )}
    >
      <div
        className={cn(
          "flex h-14 w-14 items-center justify-center rounded-full",
          isDark
            ? "border border-brand-teal/30 bg-brand-teal/10 text-brand-teal-light"
            : "border border-brand-teal/30 bg-brand-teal/10 text-brand-teal-dark"
        )}
      >
        <Icon className="h-5 w-5" strokeWidth={1.75} />
      </div>
      {numbered && (
        <p
          className={cn(
            "mt-5 text-xs font-semibold uppercase tracking-[0.18em]",
            isDark ? "text-brand-ink-mute" : "text-brand-ink-mute"
          )}
        >
          Step {String(idx + 1).padStart(2, "0")}
        </p>
      )}
      <h3
        className={cn(
          "mt-2 text-lg font-semibold",
          isDark ? "text-white" : "text-brand-navy"
        )}
      >
        {step.title}
      </h3>
      <p
        className={cn(
          "mt-2 text-sm leading-relaxed",
          isDark ? "text-slate-300" : "text-brand-ink-soft"
        )}
      >
        {step.body}
      </p>
      {step.meta && (
        <p
          className={cn(
            "mt-3 text-xs font-medium",
            isDark ? "text-brand-teal-light" : "text-brand-teal-dark"
          )}
        >
          {step.meta}
        </p>
      )}
    </motion.li>
  );
}

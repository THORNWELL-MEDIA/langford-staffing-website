"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, motion } from "framer-motion";
import { cn } from "@/lib/cn";

interface Props {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  caveat?: string;
  variant?: "dark" | "light";
  duration?: number;
}

export default function AnimatedStat({
  value,
  suffix = "",
  prefix = "",
  label,
  caveat,
  variant = "dark",
  duration = 1600
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(Math.round(eased * value));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);

  const isLight = variant === "light";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex flex-col gap-1"
    >
      <span
        className={cn(
          "text-display-md font-bold leading-none tracking-tight tabular-nums",
          isLight ? "text-white" : "text-brand-navy"
        )}
      >
        {prefix}
        {display.toLocaleString()}
        {suffix}
      </span>
      <span
        className={cn(
          "text-xs font-semibold uppercase tracking-[0.16em]",
          isLight ? "text-brand-teal-light" : "text-brand-ink-soft"
        )}
      >
        {label}
      </span>
      {caveat && (
        <span
          className={cn(
            "text-[10px] font-medium",
            isLight ? "text-brand-ink-mute" : "text-brand-ink-mute"
          )}
        >
          {caveat}
        </span>
      )}
    </motion.div>
  );
}

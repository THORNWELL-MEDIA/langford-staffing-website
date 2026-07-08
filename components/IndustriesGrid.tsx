"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { img } from "@/lib/images";
import { INDUSTRIES, type Industry } from "@/lib/industries";

// Re-export so existing import paths keep working without churn.
export { INDUSTRIES };
export type { Industry };

export default function IndustriesGrid() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {INDUSTRIES.map((ind, i) => (
        <Card key={ind.name} ind={ind} idx={i} />
      ))}
    </div>
  );
}

function Card({ ind, idx }: { ind: Industry; idx: number }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const Icon = ind.icon;

  return (
    <motion.a
      ref={ref}
      href="/careers/"
      initial={{ opacity: 0, y: 18 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
      transition={{ duration: 0.45, delay: (idx % 4) * 0.06, ease: "easeOut" }}
      className="group relative block overflow-hidden rounded-2xl border border-brand-line bg-white no-underline shadow-soft transition hover:-translate-y-1 hover:shadow-glow"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={img(ind.image, 800)}
          alt=""
          fill
          sizes="(min-width: 1024px) 25vw, 50vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark/85 via-brand-navy/30 to-transparent" />
        <div className="absolute left-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/15 text-white backdrop-blur">
          <Icon className="h-4 w-4" strokeWidth={1.75} />
        </div>
        <h3 className="absolute inset-x-4 bottom-4 text-lg font-bold leading-tight text-white">
          {ind.name}
        </h3>
      </div>
      <div className="p-5">
        <p className="text-sm leading-relaxed text-brand-ink-soft">{ind.blurb}</p>
        <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-brand-teal-dark">
          See open roles →
        </p>
      </div>
    </motion.a>
  );
}

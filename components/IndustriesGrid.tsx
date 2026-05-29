"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Hotel,
  Truck,
  Building2,
  Wrench,
  ShoppingBag,
  HardHat,
  Briefcase,
  Heart,
  type LucideIcon
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { img, type ImageKey } from "@/lib/images";

export interface Industry {
  name: string;
  blurb: string;
  icon: LucideIcon;
  image: ImageKey;
}

export const INDUSTRIES: Industry[] = [
  {
    name: "Hospitality & Tourism",
    blurb:
      "Front-of-house, back-of-house, F&B, and management for hotels, resorts, and restaurants.",
    icon: Hotel,
    image: "hospitality"
  },
  {
    name: "Logistics & Trade",
    blurb:
      "Warehouse, distribution, freight, and 3PL roles across major North American hubs.",
    icon: Truck,
    image: "logistics"
  },
  {
    name: "Property & Facilities",
    blurb:
      "Building services, residential maintenance, and turnover crews across major US and Canadian metros.",
    icon: Building2,
    image: "property"
  },
  {
    name: "Specialty Trades",
    blurb:
      "Licensed technicians, electricians, HVAC, and credentialed maintenance roles.",
    icon: Wrench,
    image: "trades"
  },
  {
    name: "Retail & Consumer",
    blurb:
      "Store leadership, sales associates, and seasonal coverage for retail operators.",
    icon: ShoppingBag,
    image: "retail"
  },
  {
    name: "Construction",
    blurb:
      "Skilled and unskilled labor, foremen, and project coordinators for active sites.",
    icon: HardHat,
    image: "construction"
  },
  {
    name: "Professional Services",
    blurb:
      "Finance, accounting, marketing, and operations roles for MNCs, HQs, and growth companies.",
    icon: Briefcase,
    image: "professional"
  },
  {
    name: "Healthcare",
    blurb:
      "Clinical and administrative roles for hospitals, clinics, and homecare networks.",
    icon: Heart,
    image: "healthcare"
  }
];

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
      href="/positions/"
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

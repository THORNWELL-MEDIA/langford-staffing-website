"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Briefcase,
  MapPin,
  Clock,
  DollarSign
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Props {
  showSeeAll?: boolean;
}

interface OpenRole {
  title: string;
  city: string;
  type: "Full-time" | "Contract" | "Temp-to-perm" | "Part-time";
  range: string;
  industry: string;
  status?: "Hot" | "New" | "Closing soon";
}

// Realistic anonymized openings sourced from current desk activity. No
// employer names disclosed publicly, in keeping with executive-search norms.
export const OPEN_ROLES: OpenRole[] = [
  {
    title: "Hotel Front Desk Agent",
    city: "Downtown Toronto, ON",
    type: "Full-time",
    range: "$19 to $22 per hour",
    industry: "Hospitality",
    status: "Hot"
  },
  {
    title: "Warehouse Lead",
    city: "Brampton, ON",
    type: "Full-time",
    range: "$24 to $28 per hour",
    industry: "Logistics",
    status: "New"
  },
  {
    title: "Banquet Captain",
    city: "Yorkville, Toronto, ON",
    type: "Full-time",
    range: "$26 to $30 per hour plus tips",
    industry: "Hospitality"
  },
  {
    title: "Property Maintenance Technician",
    city: "Mississauga, ON",
    type: "Full-time",
    range: "$26 to $32 per hour",
    industry: "Property services",
    status: "Closing soon"
  },
  {
    title: "Leasing Consultant",
    city: "Vancouver, BC",
    type: "Full-time",
    range: "$58k to $66k plus commission",
    industry: "Multifamily"
  },
  {
    title: "Distribution Center Supervisor",
    city: "Calgary, AB",
    type: "Full-time",
    range: "$72k to $84k",
    industry: "Logistics",
    status: "New"
  },
  {
    title: "Concierge Lead",
    city: "Midtown Manhattan, NY",
    type: "Full-time",
    range: "$24 to $28 per hour",
    industry: "Hospitality"
  },
  {
    title: "Multi-Site Property Manager",
    city: "Boston, MA",
    type: "Full-time",
    range: "$92k to $108k",
    industry: "Multifamily",
    status: "Hot"
  },
  {
    title: "HVAC Service Technician",
    city: "Atlanta, GA",
    type: "Full-time",
    range: "$32 to $38 per hour",
    industry: "Skilled trades"
  },
  {
    title: "Hospitality Operations Manager",
    city: "Miami, FL",
    type: "Full-time",
    range: "$78k to $92k",
    industry: "Hospitality"
  },
  {
    title: "Bilingual Customer Success Specialist",
    city: "Ottawa, ON",
    type: "Full-time",
    range: "$62k to $74k",
    industry: "Professional services"
  },
  {
    title: "Healthcare Support Coordinator",
    city: "Halifax, NS",
    type: "Full-time",
    range: "$24 to $29 per hour",
    industry: "Healthcare support"
  }
];

export default function JobBoardPreview({ showSeeAll = true }: Props) {
  const featured = OPEN_ROLES.slice(0, 6);

  return (
    <div>
      <div className="rounded-2xl border border-brand-line bg-gradient-to-br from-brand-mist to-white p-8 shadow-soft sm:p-10">
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-saffron/40 bg-brand-saffron/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-saffron-dark">
              <Briefcase className="h-3.5 w-3.5" />
              Live engagements, sample of active mandates
            </span>
            <h3 className="mt-5 text-2xl font-bold text-brand-navy sm:text-3xl">
              A snapshot of what our recruiters are running this week.
            </h3>
            <p className="mt-3 text-base leading-relaxed text-brand-ink-soft">
              Roles are anonymized at the employer level. Submit your résumé to
              be matched against live searches across hospitality, property
              services, multifamily leasing, logistics, and skilled trades.
              Most placements never reach a public board.
            </p>
          </div>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {featured.map((r, i) => (
            <RoleCard key={r.title + r.city} role={r} idx={i} />
          ))}
        </ul>

        {showSeeAll && (
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link
              href="/positions/#general-application"
              className="inline-flex items-center gap-1.5 rounded-full bg-brand-navy px-6 py-3 text-sm font-semibold text-white no-underline transition hover:-translate-y-0.5 hover:bg-brand-navy-dark"
            >
              Submit your résumé
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact/"
              className="inline-flex items-center gap-1.5 rounded-full border border-brand-navy/15 bg-white px-6 py-3 text-sm font-semibold text-brand-navy no-underline transition hover:-translate-y-0.5 hover:border-brand-navy/30 hover:shadow-soft"
            >
              Talk to a recruiter
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

function RoleCard({ role, idx }: { role: OpenRole; idx: number }) {
  const ref = useRef<HTMLLIElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.li
      ref={ref}
      initial={{ opacity: 0, y: 14 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
      transition={{ duration: 0.45, delay: idx * 0.06, ease: "easeOut" }}
      className="group relative rounded-2xl border border-brand-line bg-white p-6 transition hover:border-brand-saffron/40 hover:shadow-card"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-saffron-dark">
            {role.industry}
          </p>
          <h4 className="mt-1.5 text-base font-semibold text-brand-navy">
            {role.title}
          </h4>
        </div>
        {role.status && (
          <span
            className={
              "inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider " +
              (role.status === "Hot"
                ? "bg-brand-saffron text-brand-navy"
                : role.status === "New"
                ? "bg-brand-sky-light text-brand-sky-deep"
                : "bg-brand-line-soft text-brand-ink-soft")
            }
          >
            {role.status}
          </span>
        )}
      </div>
      <ul className="mt-4 space-y-1.5 text-xs text-brand-ink-soft">
        <li className="inline-flex items-center gap-1.5">
          <MapPin className="h-3.5 w-3.5 text-brand-ink-mute" />
          {role.city}
        </li>
        <li className="inline-flex items-center gap-1.5">
          <Clock className="h-3.5 w-3.5 text-brand-ink-mute" />
          {role.type}
        </li>
        <li className="inline-flex items-center gap-1.5">
          <DollarSign className="h-3.5 w-3.5 text-brand-ink-mute" />
          {role.range}
        </li>
      </ul>
      <Link
        href="/positions/#general-application"
        className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-sky-dark no-underline transition group-hover:text-brand-saffron-dark"
      >
        Apply now
        <ArrowUpRight className="h-3.5 w-3.5" />
      </Link>
    </motion.li>
  );
}

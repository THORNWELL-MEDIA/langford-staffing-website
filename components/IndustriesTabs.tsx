"use client";

import { useState } from "react";
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
  ArrowRight,
  type LucideIcon
} from "lucide-react";

interface Industry {
  slug: string;
  name: string;
  shortName: string;
  blurb: string;
  icon: LucideIcon;
  roles: string[];
  detail: string;
}

const INDUSTRIES: Industry[] = [
  {
    slug: "hospitality",
    name: "Hospitality & Tourism",
    shortName: "Hospitality",
    icon: Hotel,
    blurb:
      "Front-of-house, back-of-house, F&B, and management for hotels, resorts, and restaurants.",
    roles: [
      "Hotel General Manager",
      "F&B Director",
      "Banquet Operations Lead",
      "Front Desk Supervisor",
      "Executive Housekeeper",
      "Sous Chef"
    ],
    detail:
      "Year-round bench across luxury, boutique, and limited-service properties. Pre-screened against operating-cadence questions specific to property type."
  },
  {
    slug: "logistics",
    name: "Logistics & Trade",
    shortName: "Logistics",
    icon: Truck,
    blurb:
      "Warehouse, distribution, freight, and 3PL roles across major North American hubs.",
    roles: [
      "Distribution Center Manager",
      "Inbound/Outbound Lead",
      "Yard Supervisor",
      "Dispatch Coordinator",
      "Inventory Control Analyst",
      "Forklift Operator"
    ],
    detail:
      "Volume hiring and named search for 3PL, e-commerce fulfillment, and last-mile operators. Pre-vetted on equipment certification and shift fit."
  },
  {
    slug: "property-services",
    name: "Property & Facilities",
    shortName: "Property Services",
    icon: Building2,
    blurb:
      "Building services, residential maintenance, and turnover crews across major US and Canadian metros.",
    roles: [
      "Property Manager",
      "Leasing Coordinator",
      "Maintenance Technician",
      "Resident Services Lead",
      "Property Accountant",
      "Turnover Crew Foreman"
    ],
    detail:
      "We screen against the actual portfolio: number of units, building type, and reporting pace. No generic templates."
  },
  {
    slug: "trades",
    name: "Specialty Trades",
    shortName: "Trades",
    icon: Wrench,
    blurb:
      "Licensed technicians, electricians, HVAC, and credentialed maintenance roles.",
    roles: [
      "HVAC Technician",
      "Licensed Electrician",
      "Plumber Journeyman",
      "Building Systems Lead",
      "Boiler Operator",
      "Refrigeration Tech"
    ],
    detail:
      "Credential-verified pipeline. Every placement carries license, insurance, and reference work in the file before introduction."
  },
  {
    slug: "construction",
    name: "Construction",
    shortName: "Construction",
    icon: HardHat,
    blurb:
      "Skilled and unskilled labor, foremen, and project coordinators for active sites.",
    roles: [
      "Site Superintendent",
      "Project Coordinator",
      "Foreman",
      "Carpenter",
      "Concrete Finisher",
      "General Laborer"
    ],
    detail:
      "Same-week mobilization on active sites. Safety record verified, OSHA / WHMIS where applicable."
  },
  {
    slug: "professional",
    name: "Professional Services",
    shortName: "Professional",
    icon: Briefcase,
    blurb:
      "Finance, accounting, marketing, and operations roles for HQs and growth companies.",
    roles: [
      "Controller",
      "Senior Accountant",
      "Operations Manager",
      "HR Business Partner",
      "Marketing Director",
      "Office Manager"
    ],
    detail:
      "Mid-market and corporate-HQ search. Structured intake against the operating-context, not the job spec."
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    shortName: "Healthcare",
    icon: Heart,
    blurb:
      "Clinical and administrative roles for hospitals, clinics, and homecare networks.",
    roles: [
      "Practice Administrator",
      "Medical Office Manager",
      "Patient Coordinator",
      "Clinical Supervisor",
      "Billing Specialist",
      "Front Desk Lead"
    ],
    detail:
      "Administrative and operations side; we coordinate with credentialed clinical staffing partners on licensed roles."
  },
  {
    slug: "retail",
    name: "Retail & Consumer",
    shortName: "Retail",
    icon: ShoppingBag,
    blurb:
      "Store leadership, sales associates, and seasonal coverage for retail operators.",
    roles: [
      "District Manager",
      "Store Manager",
      "Visual Merchandiser",
      "Stock Lead",
      "Sales Associate",
      "Seasonal Coverage"
    ],
    detail:
      "Multi-unit roll-outs and seasonal volume. Bench warm year-round across Tier-1 metros."
  }
];

export default function IndustriesTabs() {
  const [active, setActive] = useState<string>(INDUSTRIES[0].slug);
  const current = INDUSTRIES.find((i) => i.slug === active) ?? INDUSTRIES[0];
  const Icon = current.icon;

  return (
    <div className="mt-10">
      {/* Tab strip — desktop horizontal, mobile becomes scrollable row */}
      <div className="hidden border-b border-brand-line md:block">
        <div role="tablist" className="flex flex-wrap gap-x-1">
          {INDUSTRIES.map((ind) => {
            const isActive = ind.slug === active;
            return (
              <button
                key={ind.slug}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(ind.slug)}
                className={
                  "relative px-4 py-3 text-[12px] font-semibold uppercase tracking-[0.14em] transition " +
                  (isActive
                    ? "text-brand-navy"
                    : "text-brand-ink-mute hover:text-brand-navy")
                }
              >
                {ind.shortName}
                {isActive && (
                  <span
                    className="absolute inset-x-2 -bottom-px h-0.5 bg-brand-saffron"
                    aria-hidden="true"
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Mobile accordion */}
      <div className="md:hidden">
        {INDUSTRIES.map((ind) => {
          const isActive = ind.slug === active;
          const I = ind.icon;
          return (
            <div key={ind.slug} className="border-b border-brand-line">
              <button
                onClick={() => setActive(isActive ? "" : ind.slug)}
                className="flex w-full items-center justify-between gap-3 px-1 py-4 text-left"
                aria-expanded={isActive}
              >
                <span className="inline-flex items-center gap-3">
                  <I className="h-4 w-4 text-brand-navy" strokeWidth={1.75} />
                  <span className="text-[13px] font-semibold uppercase tracking-[0.14em] text-brand-navy">
                    {ind.shortName}
                  </span>
                </span>
                <span
                  className={
                    "text-xs font-semibold text-brand-saffron transition " +
                    (isActive ? "rotate-90" : "")
                  }
                >
                  ›
                </span>
              </button>
              {isActive && (
                <div className="px-1 pb-5">
                  <p className="text-sm leading-relaxed text-brand-ink-soft">
                    {ind.blurb}
                  </p>
                  <p className="mt-3 text-[13px] leading-relaxed text-brand-ink">
                    {ind.detail}
                  </p>
                  <ul className="mt-4 grid grid-cols-1 gap-1 text-[12px] text-brand-ink-soft">
                    {ind.roles.map((r) => (
                      <li
                        key={r}
                        className="flex items-center justify-between border-b border-brand-line-soft py-2"
                      >
                        <span>{r}</span>
                        <span className="label-inline text-brand-ink-mute">
                          Active
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Desktop tab panel — briefing layout */}
      <div className="hidden md:block">
        <div
          role="tabpanel"
          className="mt-8 grid gap-10 border-b border-brand-line pb-10 lg:grid-cols-12"
        >
          <div className="lg:col-span-5">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-sm border border-brand-navy/15 bg-white text-brand-navy">
              <Icon className="h-5 w-5" strokeWidth={1.75} />
            </div>
            <h3 className="mt-5 text-[24px] font-semibold leading-tight text-brand-navy">
              {current.name}
            </h3>
            <p className="mt-3 max-w-md text-base leading-relaxed text-brand-ink-soft">
              {current.blurb}
            </p>
            <p className="mt-5 max-w-md pl-4 italic text-brand-ink"
               style={{ borderLeft: "3px solid #F5A623" }}>
              {current.detail}
            </p>
            <Link
              href="/positions/"
              className="link-arrow mt-7"
            >
              See open {current.shortName.toLowerCase()} roles
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="lg:col-span-7">
            <p className="label-inline">Active desks · representative roles</p>
            <table className="data-table mt-3">
              <thead>
                <tr>
                  <th>Role</th>
                  <th className="text-right">Status</th>
                </tr>
              </thead>
              <tbody>
                {current.roles.map((r) => (
                  <tr key={r}>
                    <td className="font-medium text-brand-navy">{r}</td>
                    <td className="text-right">
                      <span className="badge-verified">Active</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

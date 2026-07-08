// Industries data extracted to a non-client module so server components can
// import the array and map over it. Previously this lived in IndustriesGrid.tsx
// (which is "use client"), and Next.js can't call .map() on a client-export
// from a server component during static prerender — that broke
// /industries/page.tsx and blocked all production builds.
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
import { type ImageKey } from "@/lib/images";

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

// slug must match the links rendered on /industries/ (& -> "and").
export function industrySlug(name: string) {
  return name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

// Each industry maps to the silo service lines that staff it.
const INDUSTRY_SERVICES: Record<string, string[]> = {
  "Hospitality & Tourism": ["hospitality-staffing"],
  "Logistics & Trade": ["logistics-staffing", "warehouse-staffing", "light-industrial-staffing"],
  "Property & Facilities": ["skilled-trades-staffing", "security-staffing", "administrative-staffing"],
  "Specialty Trades": ["skilled-trades-staffing", "construction-staffing"],
  "Retail & Consumer": ["retail-staffing"],
  Construction: ["construction-staffing", "skilled-trades-staffing"],
  "Professional Services": ["administrative-staffing", "finance-and-accounting-staffing", "it-staffing"],
  Healthcare: ["healthcare-staffing"]
};

export const industryServices = (name: string): string[] =>
  INDUSTRY_SERVICES[name] || [];

export const getIndustryBySlug = (slug: string): Industry | undefined =>
  INDUSTRIES.find((i) => industrySlug(i.name) === slug);

export const industrySlugs = (): { slug: string }[] =>
  INDUSTRIES.map((i) => ({ slug: industrySlug(i.name) }));

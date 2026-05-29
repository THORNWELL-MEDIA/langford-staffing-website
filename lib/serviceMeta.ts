/**
 * Visual + UX metadata that pairs with each service slug.
 * Service copy lives in lib/services.ts; this file holds icon/image/category mapping.
 */

import {
  UserCheck,
  Clock,
  Repeat,
  Crown,
  Users2,
  Telescope,
  type LucideIcon
} from "lucide-react";
import { IMG, type ImageKey } from "./images";

export interface ServiceMeta {
  icon: LucideIcon;
  image: ImageKey;
  bucket: "Acquire" | "Manage" | "Retain";
  bucketSummary: string;
}

export const SERVICE_META: Record<string, ServiceMeta> = {
  "permanent-placement": {
    icon: UserCheck,
    image: "servicePermanent",
    bucket: "Acquire",
    bucketSummary:
      "Direct hire searches. A written brief, pre screened candidates, short list in five days."
  },
  "temporary-staffing": {
    icon: Clock,
    image: "serviceTemporary",
    bucket: "Manage",
    bucketSummary:
      "Short-term, seasonal, and project-based workforce coverage."
  },
  "contract-to-hire": {
    icon: Repeat,
    image: "serviceContract",
    bucket: "Retain",
    bucketSummary:
      "Try-before-you-buy engagements with documented conversion paths."
  },
  "executive-search": {
    icon: Crown,
    image: "serviceExecutive",
    bucket: "Acquire",
    bucketSummary:
      "Confidential retained search for senior leadership and country-manager roles."
  },
  "volume-hiring": {
    icon: Users2,
    image: "serviceVolume",
    bucket: "Manage",
    bucketSummary:
      "Recruitment process outsourcing for openings, expansions, and surges."
  },
  "specialty-search": {
    icon: Telescope,
    image: "serviceSpecialty",
    bucket: "Acquire",
    bucketSummary:
      "Targeted search for technical, bilingual, and credentialed roles."
  }
};

export const BUCKETS = [
  {
    name: "Acquire",
    description:
      "Bring the right talent on board, direct-hire, retained executive, and specialty searches.",
    color: "from-brand-navy to-brand-navy-light"
  },
  {
    name: "Manage",
    description:
      "Cover seasonal, project, and volume demand without carrying full-time overhead.",
    color: "from-brand-teal-dark to-brand-teal"
  },
  {
    name: "Retain",
    description:
      "Convert contract engagements into long-term placements with confidence on both sides.",
    color: "from-brand-gold to-brand-gold-light"
  }
] as const;

export function metaFor(slug: string): ServiceMeta {
  return SERVICE_META[slug] ?? SERVICE_META["permanent-placement"];
}

export const IMG_KEYS = IMG;

/**
 * Shared North America map data: pre-projected SVG path strings for Canada,
 * United States, Mexico (Natural Earth 50m, Albers, fit to viewBox), plus
 * pre-projected city pin coordinates for the 12 Langford recruiter desks.
 *
 * Source build: `node scripts/build-na-paths.js`
 *
 * Both `RecruiterNetworkMap` and the inline `RecruiterMiniMap` pull from
 * here so the geometry, viewBox, and pin positions stay in lockstep.
 */
import data from "./data/north-america-paths.json";

export type NAFeatures = {
  CAN: string;
  USA: string;
  MEX: string;
};

export type NAPin = {
  slug: string;
  name: string;
  lon: number;
  lat: number;
  hub?: boolean;
  x: number;
  y: number;
};

export const NA_WIDTH: number = data.width;
export const NA_HEIGHT: number = data.height;
export const NA_FEATURES: NAFeatures = data.features as NAFeatures;
export const NA_PINS: NAPin[] = data.pins as NAPin[];
export const NA_PINS_BY_SLUG: Record<string, NAPin> = NA_PINS.reduce(
  (acc, p) => {
    acc[p.slug] = p;
    return acc;
  },
  {} as Record<string, NAPin>
);
export const NA_PINS_BY_MARKET: Record<string, NAPin> = NA_PINS.reduce(
  (acc, p) => {
    acc[p.name] = p;
    return acc;
  },
  {} as Record<string, NAPin>
);

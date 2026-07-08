// State / province hubs, derived from the programmatic silo's city hubs.
// No hand-maintained list: we group the existing CITY_HUBS by state so the
// hub tier always matches whatever cities the silo engine has generated.
import { CITY_HUBS, type SiloPage } from "@/lib/silo/index";

export interface StateCity {
  name: string;
  citySlug: string; // city_key, e.g. "phoenix-az"
  url: string; // flat city-hub url, e.g. "/phoenix-az-staffing-agency"
  lat?: number;
  lng?: number;
}

export interface StateHub {
  slug: string; // kebab state name, e.g. "new-jersey"
  name: string; // "New Jersey"
  abbr: string; // "NJ"
  country: "United States" | "Canada";
  cities: StateCity[];
}

const kebab = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

// The silo data has an inconsistent country field ("USA" vs "United States").
// Normalize on the only Canadian province present (Ontario) and treat the rest
// as United States.
const normalizeCountry = (p: SiloPage): "United States" | "Canada" =>
  (p.country || "").toLowerCase().startsWith("can") || p.state_abbr === "ON"
    ? "Canada"
    : "United States";

function buildStates(): StateHub[] {
  const byAbbr = new Map<string, StateHub>();

  for (const p of CITY_HUBS) {
    const abbr = p.state_abbr;
    if (!abbr || !p.state) continue;
    let hub = byAbbr.get(abbr);
    if (!hub) {
      hub = {
        slug: kebab(p.state),
        name: p.state,
        abbr,
        country: normalizeCountry(p),
        cities: []
      };
      byAbbr.set(abbr, hub);
    }
    hub.cities.push({
      name: p.city,
      citySlug: p.city_key,
      url: p.url,
      lat: p.lat,
      lng: p.lng
    });
  }

  const states = Array.from(byAbbr.values());
  // Sort cities A→Z within each state, states by city count (biggest first).
  for (const s of states) {
    s.cities.sort((a, b) => a.name.localeCompare(b.name));
  }
  states.sort((a, b) => b.cities.length - a.cities.length);
  return states;
}

export const STATES: StateHub[] = buildStates();

// Real, citable per-state labor data for the "hiring at a glance" block
// (BLS QCEW industry mix, US DOL / state DOL 2026 minimum wage). Plain facts,
// sourced, no fabricated precision. Keyed by state_abbr.
export interface StateData {
  industries: string[]; // dominant hiring industries (BLS QCEW)
  minWage: string; // 2026 minimum wage
  minWageNote?: string;
}

export const STATE_DATA: Record<string, StateData> = {
  CA: { industries: ["technology", "healthcare", "logistics and warehousing", "hospitality", "manufacturing"], minWage: "16.90 USD" },
  TX: { industries: ["logistics and distribution", "energy", "healthcare", "construction", "manufacturing"], minWage: "7.25 USD", minWageNote: "follows the federal minimum" },
  FL: { industries: ["hospitality and tourism", "healthcare", "logistics", "construction", "retail"], minWage: "14.00 USD", minWageNote: "rising to 15.00 USD on Sep 30, 2026" },
  NJ: { industries: ["logistics and warehousing", "pharmaceuticals", "healthcare", "finance", "retail"], minWage: "15.92 USD" },
  NC: { industries: ["banking and finance", "healthcare", "manufacturing", "logistics", "technology"], minWage: "7.25 USD", minWageNote: "follows the federal minimum" },
  AZ: { industries: ["semiconductors and manufacturing", "healthcare", "logistics", "hospitality", "construction"], minWage: "14.70 USD" },
  NY: { industries: ["finance", "healthcare", "technology", "hospitality", "logistics"], minWage: "16.50 USD", minWageNote: "17.00 USD in NYC and nearby counties" },
  CO: { industries: ["technology", "aerospace", "healthcare", "hospitality", "construction"], minWage: "15.16 USD" },
  GA: { industries: ["logistics and distribution", "manufacturing", "healthcare", "film and media", "hospitality"], minWage: "7.25 USD", minWageNote: "follows the federal minimum" },
  IL: { industries: ["logistics and manufacturing", "healthcare", "finance", "food processing", "construction"], minWage: "15.00 USD" },
  ON: { industries: ["manufacturing", "logistics", "healthcare", "finance", "technology"], minWage: "17.60 CAD", minWageNote: "rising to 17.95 CAD on Oct 1, 2026 under the Employment Standards Act" }
};

export const getStateData = (abbr: string): StateData | undefined =>
  STATE_DATA[abbr];

export const getState = (slug: string): StateHub | undefined =>
  STATES.find((s) => s.slug === slug);

export const getStateByAbbr = (abbr: string): StateHub | undefined =>
  STATES.find((s) => s.abbr === abbr);

export const stateSlugs = (): { city: string }[] =>
  STATES.map((s) => ({ city: s.slug }));

export const statesByCountry = (
  country: "United States" | "Canada"
): StateHub[] => STATES.filter((s) => s.country === country);

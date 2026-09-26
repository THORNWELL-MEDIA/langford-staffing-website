import { Country, State, City, type IState, type ICity } from 'country-state-city';

export interface ResolvedLocation {
  id: string;
  type: 'city' | 'state';
  name: string;
  city: string; // for city: city name; for state: '' or state name
  state: string;
  province: string; // alias to state
  state_province: string; // alias to state
  country: string;
  countryCode: string;
  residentialLocation: string; // e.g. "Toronto, Ontario, Canada" or "Rajasthan, India"
  displayText: string;
  primaryText: string;
  secondaryText: string;
}

interface CountryMeta {
  name: string;
  displayName: string;
  isoCode: string;
}

// In-memory singletons for fast lookups
let initialized = false;
const countryMap = new Map<string, CountryMeta>();
const stateMap = new Map<string, string>();
let allStatesList: IState[] = [];
let allCitiesList: ICity[] = [];

// Common countries priority for duplicate city name disambiguation
const PRIORITY_COUNTRIES = ['CA', 'US', 'GB', 'IN', 'AU', 'NZ', 'DE', 'FR', 'MK', 'IE', 'NL', 'SG', 'ZA'];

export function initLocationEngine(): void {
  if (initialized) return;
  try {
    const allCountries = Country.getAllCountries();
    for (let i = 0; i < allCountries.length; i++) {
      const c = allCountries[i];
      // Ensure proper global display for MK and other ISO standards
      const displayName = c.isoCode === 'MK' ? 'North Macedonia' : c.name;
      countryMap.set(c.isoCode, {
        name: c.name,
        displayName,
        isoCode: c.isoCode,
      });
    }

    allStatesList = State.getAllStates();
    for (let i = 0; i < allStatesList.length; i++) {
      const s = allStatesList[i];
      stateMap.set(`${s.countryCode}_${s.isoCode}`, s.name);
    }

    allCitiesList = City.getAllCities();
    initialized = true;
  } catch (err) {
    console.error('Failed to initialize location engine:', err);
  }
}

export async function preloadLocationData(): Promise<void> {
  initLocationEngine();
}

function getCountryDisplayName(isoCode: string): string {
  const c = countryMap.get(isoCode);
  return c ? c.displayName : isoCode;
}

function getStateName(countryCode: string, stateCode: string): string {
  return stateMap.get(`${countryCode}_${stateCode}`) || '';
}

/**
 * Searches global cities and provinces with high-precision ranking:
 * 1. Checks if query matches a State/Province:
 *    - The state appears first as "State Name (Province / State), Country"
 *    - All cities belonging to that state are included
 * 2. Searches cities worldwide matching query:
 *    - Exact name matches appear immediately
 *    - Starts-with matches follow
 *    - Partial substring matches follow
 * 3. Handles multi-word & comma-separated searches (e.g. "Toronto, Canada" or "Jaipur, India")
 */
export async function searchLocations(query: string, limit = 50): Promise<ResolvedLocation[]> {
  const trimmed = query.trim();
  if (trimmed.length < 2) return [];

  initLocationEngine();

  if (!allStatesList || !allCitiesList) {
    return [];
  }

  // Check for comma separation (e.g. "Toronto, Canada", "Jaipur, Rajasthan")
  const commaParts = trimmed.split(/[,]+/).map((p) => p.trim().toLowerCase()).filter(Boolean);
  const mainQuery = (commaParts[0] || trimmed).toLowerCase();
  const secondaryFilter = commaParts[1] || '';

  const results: ResolvedLocation[] = [];
  const seenIds = new Set<string>();

  const sortByCountryRank = (a: { countryCode: string }, b: { countryCode: string }) => {
    const aP = PRIORITY_COUNTRIES.indexOf(a.countryCode);
    const bP = PRIORITY_COUNTRIES.indexOf(b.countryCode);
    const aRank = aP === -1 ? 999 : aP;
    const bRank = bP === -1 ? 999 : bP;
    return aRank - bRank;
  };

  // 1. Identify matching states
  const exactStateMatches: IState[] = [];
  const startsStateMatches: IState[] = [];
  const includesStateMatches: IState[] = [];

  for (let i = 0; i < allStatesList.length; i++) {
    const s = allStatesList[i];
    const sNameLower = s.name.toLowerCase();

    if (sNameLower === mainQuery) {
      exactStateMatches.push(s);
    } else if (sNameLower.startsWith(mainQuery)) {
      startsStateMatches.push(s);
    } else if (sNameLower.includes(mainQuery)) {
      if (includesStateMatches.length < 15) {
        includesStateMatches.push(s);
      }
    }
  }

  exactStateMatches.sort(sortByCountryRank);
  startsStateMatches.sort(sortByCountryRank);

  // Helper to add a state result and its cities
  const addStateWithCities = (s: IState) => {
    const countryName = getCountryDisplayName(s.countryCode);

    if (secondaryFilter) {
      const matchCountry = countryName.toLowerCase().includes(secondaryFilter) || s.countryCode.toLowerCase() === secondaryFilter;
      if (!matchCountry) return;
    }

    const stateId = `state_${s.countryCode}_${s.isoCode}`;
    if (!seenIds.has(stateId)) {
      seenIds.add(stateId);
      results.push({
        id: stateId,
        type: 'state',
        name: s.name,
        city: '',
        state: s.name,
        province: s.name,
        state_province: s.name,
        country: countryName,
        countryCode: s.countryCode,
        primaryText: `${s.name} (Province / State)`,
        secondaryText: `, ${countryName}`,
        displayText: `${s.name}, ${countryName}`,
        residentialLocation: `${s.name}, ${countryName}`,
      });
    }

    // List all cities belonging to that state/province
    const stateCities = City.getCitiesOfState(s.countryCode, s.isoCode);
    for (let j = 0; j < stateCities.length; j++) {
      const city = stateCities[j];
      const cityId = `city_${city.countryCode}_${city.stateCode}_${city.name}`;
      if (!seenIds.has(cityId)) {
        seenIds.add(cityId);
        results.push({
          id: cityId,
          type: 'city',
          name: city.name,
          city: city.name,
          state: s.name,
          province: s.name,
          state_province: s.name,
          country: countryName,
          countryCode: city.countryCode,
          primaryText: city.name,
          secondaryText: `(${s.name}, ${countryName})`,
          displayText: `${city.name}, ${s.name}, ${countryName}`,
          residentialLocation: `${city.name}, ${s.name}, ${countryName}`,
        });
        if (results.length >= limit) break;
      }
    }
  };

  // If there's an exact state match, output it and its cities first
  if (exactStateMatches.length > 0) {
    for (const s of exactStateMatches) {
      addStateWithCities(s);
      if (results.length >= limit) break;
    }
  }

  // 2. City searches
  const exactCityMatches: ICity[] = [];
  const startsCityMatches: ICity[] = [];
  const includesCityMatches: ICity[] = [];

  for (let i = 0; i < allCitiesList.length; i++) {
    const c = allCitiesList[i];
    const cNameLower = c.name.toLowerCase();

    if (cNameLower === mainQuery) {
      exactCityMatches.push(c);
    } else if (cNameLower.startsWith(mainQuery)) {
      if (startsCityMatches.length < 80) {
        startsCityMatches.push(c);
      }
    } else if (cNameLower.includes(mainQuery)) {
      if (includesCityMatches.length < 40) {
        includesCityMatches.push(c);
      }
    }
  }

  exactCityMatches.sort(sortByCountryRank);
  startsCityMatches.sort(sortByCountryRank);

  const addCityResult = (c: ICity) => {
    const cityId = `city_${c.countryCode}_${c.stateCode}_${c.name}`;
    if (seenIds.has(cityId)) return;

    const countryName = getCountryDisplayName(c.countryCode);
    const stateName = getStateName(c.countryCode, c.stateCode);

    if (secondaryFilter) {
      const matchCountry = countryName.toLowerCase().includes(secondaryFilter) || c.countryCode.toLowerCase() === secondaryFilter;
      const matchState = stateName.toLowerCase().includes(secondaryFilter);
      if (!matchCountry && !matchState) return;
    }

    seenIds.add(cityId);

    const secText = stateName ? `(${stateName}, ${countryName})` : `(${countryName})`;
    const dispText = stateName ? `${c.name}, ${stateName}, ${countryName}` : `${c.name}, ${countryName}`;

    results.push({
      id: cityId,
      type: 'city',
      name: c.name,
      city: c.name,
      state: stateName,
      province: stateName,
      state_province: stateName,
      country: countryName,
      countryCode: c.countryCode,
      primaryText: c.name,
      secondaryText: secText,
      displayText: dispText,
      residentialLocation: dispText,
    });
  };

  // Exact city matches always come at top for city searches
  for (const c of exactCityMatches) {
    addCityResult(c);
    if (results.length >= limit) break;
  }

  // If no exact state match was found yet, check starts-with states
  if (exactStateMatches.length === 0 && startsStateMatches.length > 0) {
    for (const s of startsStateMatches) {
      addStateWithCities(s);
      if (results.length >= limit) break;
    }
  }

  // Add cities starting with query
  for (const c of startsCityMatches) {
    addCityResult(c);
    if (results.length >= limit) break;
  }

  // If still room, check partial state matches
  if (results.length < limit && includesStateMatches.length > 0) {
    for (const s of includesStateMatches) {
      addStateWithCities(s);
      if (results.length >= limit) break;
    }
  }

  // Add partial city matches
  for (const c of includesCityMatches) {
    addCityResult(c);
    if (results.length >= limit) break;
  }

  return results.slice(0, limit);
}

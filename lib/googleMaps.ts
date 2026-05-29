/**
 * Google Maps JS API loader.
 *
 * Single shared promise so the script loads exactly once per page even when
 * multiple components mount. Loads the `places` library too so consumers can
 * use Autocomplete + Geocoding without a second round-trip.
 *
 * We avoid pulling in @types/google.maps to keep deps lean. Call sites cast
 * the returned namespace to `any` (or use locally-scoped `any` aliases) when
 * touching constructors that need no further type-safety in this codebase.
 */

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    google?: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    __langfordMapsLoader?: Promise<any>;
  }
}

const SCRIPT_ID = "langford-google-maps-js";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function loadGoogleMaps(apiKey: string): Promise<any> {
  if (typeof window === "undefined") {
    return Promise.reject(new Error("Google Maps can only load in the browser."));
  }
  const w = window;
  if (w.google && w.google.maps && w.google.maps.places) {
    return Promise.resolve(w.google);
  }
  if (w.__langfordMapsLoader) {
    return w.__langfordMapsLoader;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const promise = new Promise<any>((resolve, reject) => {
    const existing = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;
    if (existing) {
      existing.addEventListener("load", () => {
        if (window.google) resolve(window.google);
        else reject(new Error("Google Maps loaded but window.google is missing."));
      });
      existing.addEventListener("error", () =>
        reject(new Error("Failed to load Google Maps."))
      );
      return;
    }
    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.async = true;
    script.defer = true;
    script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(
      apiKey
    )}&libraries=places&loading=async&v=weekly`;
    script.onload = () => {
      if (window.google) resolve(window.google);
      else reject(new Error("Google Maps loaded but window.google is missing."));
    };
    script.onerror = () =>
      reject(new Error("Failed to load Google Maps script."));
    document.head.appendChild(script);
  });
  w.__langfordMapsLoader = promise;
  return promise;
}

/**
 * Brand styling for the Google Map: navy roads, saffron-accented landmarks,
 * cream land. Matches the Langford Brand-Navy + Saffron palette.
 *
 * Typed loosely (`unknown[]`) so we do not depend on @types/google.maps.
 */
export const LANGFORD_MAP_STYLES: unknown[] = [
  { elementType: "geometry", stylers: [{ color: "#FAF6EE" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#0B2A4A" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#FAF6EE" }] },
  { featureType: "administrative", elementType: "geometry.stroke", stylers: [{ color: "#0A66C2" }] },
  {
    featureType: "administrative.country",
    elementType: "geometry.stroke",
    stylers: [{ color: "#0A3A6B" }, { weight: 1.2 }]
  },
  { featureType: "administrative.land_parcel", stylers: [{ visibility: "off" }] },
  { featureType: "administrative.province", elementType: "geometry.stroke", stylers: [{ color: "#0A66C2" }] },
  { featureType: "landscape.natural", elementType: "geometry", stylers: [{ color: "#F2EADB" }] },
  { featureType: "landscape.man_made", elementType: "geometry", stylers: [{ color: "#FAF6EE" }] },
  { featureType: "poi", elementType: "geometry", stylers: [{ color: "#F2EADB" }] },
  { featureType: "poi", elementType: "labels.text.fill", stylers: [{ color: "#7D6A48" }] },
  { featureType: "poi.business", stylers: [{ visibility: "off" }] },
  { featureType: "poi.park", elementType: "geometry", stylers: [{ color: "#E8E0CB" }] },
  { featureType: "poi.park", elementType: "labels.text.fill", stylers: [{ color: "#0B2A4A" }] },
  { featureType: "road", elementType: "geometry", stylers: [{ color: "#FFFFFF" }] },
  { featureType: "road", elementType: "labels.icon", stylers: [{ visibility: "off" }] },
  { featureType: "road.arterial", elementType: "geometry", stylers: [{ color: "#E2ECF7" }] },
  { featureType: "road.arterial", elementType: "labels.text.fill", stylers: [{ color: "#0B2A4A" }] },
  { featureType: "road.highway", elementType: "geometry", stylers: [{ color: "#0A66C2" }] },
  { featureType: "road.highway", elementType: "geometry.stroke", stylers: [{ color: "#083C73" }] },
  { featureType: "road.highway", elementType: "labels.text.fill", stylers: [{ color: "#FFFFFF" }] },
  { featureType: "road.highway", elementType: "labels.text.stroke", stylers: [{ color: "#0A3A6B" }] },
  { featureType: "road.local", elementType: "geometry", stylers: [{ color: "#F4F0E4" }] },
  { featureType: "road.local", elementType: "labels.text.fill", stylers: [{ color: "#0B2A4A" }] },
  { featureType: "transit", stylers: [{ visibility: "off" }] },
  { featureType: "water", elementType: "geometry", stylers: [{ color: "#BCD3EA" }] },
  { featureType: "water", elementType: "labels.text.fill", stylers: [{ color: "#0A3A6B" }] }
];

/**
 * Saffron pin descriptor for `google.maps.Marker.icon`. Path-based so it
 * scales crisply without an extra image request. Caller passes the live
 * `google` namespace so we can build the anchor `Point`.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function saffronMarkerIcon(googleNs: any): unknown {
  return {
    path:
      "M12 2C7.6 2 4 5.6 4 10c0 6 8 12 8 12s8-6 8-12c0-4.4-3.6-8-8-8zm0 11a3 3 0 110-6 3 3 0 010 6z",
    fillColor: "#F5A623",
    fillOpacity: 1,
    strokeColor: "#FFFFFF",
    strokeWeight: 2,
    scale: 1.6,
    anchor: new googleNs.maps.Point(12, 22)
  };
}

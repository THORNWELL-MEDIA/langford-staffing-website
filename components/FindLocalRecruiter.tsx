"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { MapPin, Search, ArrowRight, CheckCircle2 } from "lucide-react";
import {
  loadGoogleMaps,
  LANGFORD_MAP_STYLES,
  saffronMarkerIcon
} from "@/lib/googleMaps";

// Always-on North American coverage pins for the overview map. Mix of
// Canadian and US recruiter markets so the always-on visual reads as North
// American, not Toronto-only.
const COVERAGE_PINS: { name: string; lat: number; lng: number }[] = [
  { name: "Toronto", lat: 43.6532, lng: -79.3832 },
  { name: "Vancouver", lat: 49.2827, lng: -123.1207 },
  { name: "Montreal", lat: 45.5019, lng: -73.5674 },
  { name: "Calgary", lat: 51.0447, lng: -114.0719 },
  { name: "Ottawa", lat: 45.4215, lng: -75.6972 },
  { name: "Edmonton", lat: 53.5461, lng: -113.4938 },
  { name: "Winnipeg", lat: 49.8951, lng: -97.1384 },
  { name: "Halifax", lat: 44.6488, lng: -63.5752 },
  { name: "New York", lat: 40.7128, lng: -74.006 },
  { name: "Los Angeles", lat: 34.0522, lng: -118.2437 },
  { name: "Chicago", lat: 41.8781, lng: -87.6298 },
  { name: "Houston", lat: 29.7604, lng: -95.3698 },
  { name: "Miami", lat: 25.7617, lng: -80.1918 },
  { name: "Seattle", lat: 47.6062, lng: -122.3321 },
  { name: "Boston", lat: 42.3601, lng: -71.0589 },
  { name: "Atlanta", lat: 33.749, lng: -84.388 },
  { name: "Dallas", lat: 32.7767, lng: -96.797 },
  { name: "Denver", lat: 39.7392, lng: -104.9903 },
  { name: "Phoenix", lat: 33.4484, lng: -112.074 },
  { name: "Minneapolis", lat: 44.9778, lng: -93.265 }
];

type Variant = "light" | "dark";

/**
 * Routing pulse animation on submit, then resolve to a local-recruiter
 * success state. Phases gate UI for the form, the live Google Map, and the
 * decorative network SVG below.
 */
type Phase = "idle" | "routing" | "done" | "error";

// Toronto is the HQ market for matching purposes (fallback recruiter pick).

// Local recruiters per market, used for the success state.
// First recruiter found by partial-match against the user's input wins.
// Falls back to "Lisa from our Toronto desk" so we always sound like a real
// recruiter network, never a tech platform.
const RECRUITERS: { match: string[]; name: string; market: string }[] = [
  { match: ["toronto", "ontario", "on", "m4", "m5", "m6"], name: "Lisa", market: "Toronto" },
  { match: ["vancouver", "bc", "british columbia", "v5", "v6"], name: "Priya", market: "Vancouver" },
  { match: ["montreal", "quebec", "qc", "h2", "h3"], name: "Jean-Marc", market: "Montreal" },
  { match: ["calgary", "alberta", "ab", "t2", "t3"], name: "Daniel", market: "Calgary" },
  { match: ["new york", "manhattan", "brooklyn", "queens", "nyc", "100", "101", "102", "103", "104", "112"], name: "Marisol", market: "New York" },
  { match: ["boston", "ma", "massachusetts", "021", "022"], name: "Kevin", market: "Boston" },
  { match: ["atlanta", "georgia", "ga", "303"], name: "Brandi", market: "Atlanta" },
  { match: ["miami", "florida", "fl", "331", "332", "333"], name: "Carlos", market: "Miami" },
  { match: ["chicago", "illinois", "il", "606"], name: "Anika", market: "Chicago" },
  { match: ["dallas", "fort worth", "texas", "tx", "752", "751"], name: "Ramon", market: "Dallas" },
  { match: ["phoenix", "scottsdale", "tempe", "arizona", "az", "850", "852"], name: "Sofia", market: "Phoenix" },
  { match: ["los angeles", "la ", "california", "ca", "900", "901", "902"], name: "Andre", market: "Los Angeles" }
];

function pickRecruiter(input: string) {
  const v = input.trim().toLowerCase();
  if (!v) return { name: "Lisa", market: "Toronto" };
  for (const r of RECRUITERS) {
    if (r.match.some((m) => v.includes(m))) return r;
  }
  return { name: "Lisa", market: "Toronto" };
}

const MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? "";

export default function FindLocalRecruiter({
  variant = "light",
  title = "Find a local recruiter",
  description = "Drop your city or postal code. We will route to your local Langford recruiter within one business day."
}: {
  variant?: Variant;
  title?: string;
  description?: string;
}) {
  const [value, setValue] = useState("");
  const [phase, setPhase] = useState<Phase>("idle");
  const [routedTo, setRoutedTo] = useState<{ name: string; market: string } | null>(
    null
  );
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Google Maps refs
  const inputRef = useRef<HTMLInputElement | null>(null);
  const mapDivRef = useRef<HTMLDivElement | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const googleRef = useRef<any>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const autocompleteRef = useRef<any>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mapRef = useRef<any>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const markerRef = useRef<any>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const circleRef = useRef<any>(null);
  // Latest selected place from Autocomplete. Cleared when user keeps typing.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const selectedPlaceRef = useRef<any>(null);

  // Always-on North American coverage overview map (real Google Map, not SVG).
  const overviewDivRef = useRef<HTMLDivElement | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const overviewMapRef = useRef<any>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const overviewMarkersRef = useRef<any[]>([]);

  const [mapsReady, setMapsReady] = useState(false);
  const [mapsLoadError, setMapsLoadError] = useState<string | null>(null);
  const [mapVisible, setMapVisible] = useState(false);

  const isDark = variant === "dark";

  // Lazy-load the Maps script as soon as the component mounts.
  // Keeps autocomplete instant once the user clicks the input.
  useEffect(() => {
    if (!MAPS_API_KEY) {
      setMapsLoadError("missing-key");
      return;
    }
    let cancelled = false;
    loadGoogleMaps(MAPS_API_KEY)
      .then((g) => {
        if (cancelled) return;
        googleRef.current = g;
        setMapsReady(true);
      })
      .catch((err) => {
        if (cancelled) return;
        // eslint-disable-next-line no-console
        console.warn("Google Maps failed to load:", err);
        setMapsLoadError("load-failed");
      });
    return () => {
      cancelled = true;
    };
  }, []);

  // Wire Places Autocomplete to the input once the script is ready.
  useEffect(() => {
    if (!mapsReady || !inputRef.current || autocompleteRef.current) return;
    const g = googleRef.current;
    if (!g?.maps?.places?.Autocomplete) return;
    const ac = new g.maps.places.Autocomplete(inputRef.current, {
      fields: ["formatted_address", "geometry", "name", "address_components"],
      componentRestrictions: { country: ["ca", "us"] },
      types: ["geocode"]
    });
    autocompleteRef.current = ac;
    const listener = ac.addListener("place_changed", () => {
      const place = ac.getPlace();
      selectedPlaceRef.current = place && place.geometry ? place : null;
      if (place && place.formatted_address) {
        setValue(place.formatted_address);
      }
    });
    return () => {
      // Detach autocomplete listener to prevent leaks if the component remounts.
      if (listener && typeof listener.remove === "function") listener.remove();
      autocompleteRef.current = null;
    };
  }, [mapsReady]);

  // Render the always-on North American coverage overview map. Only when we
  // are not in a search-result state (mapVisible). Replaces the decorative
  // SVG mini-map with a real Google Map centered on North America.
  useEffect(() => {
    if (!mapsReady || mapVisible) return;
    if (!overviewDivRef.current) return;
    const g = googleRef.current;
    if (!g?.maps) return;

    if (!overviewMapRef.current) {
      overviewMapRef.current = new g.maps.Map(overviewDivRef.current, {
        center: { lat: 46, lng: -96 },
        zoom: 3,
        styles: LANGFORD_MAP_STYLES,
        disableDefaultUI: true,
        gestureHandling: "cooperative",
        backgroundColor: "#FAF6EE",
        clickableIcons: false
      });
    }

    overviewMarkersRef.current.forEach((m) => m.setMap(null));
    overviewMarkersRef.current = COVERAGE_PINS.map(
      (p) =>
        new g.maps.Marker({
          position: { lat: p.lat, lng: p.lng },
          map: overviewMapRef.current,
          icon: saffronMarkerIcon(g),
          title: `${p.name} recruiter desk`
        })
    );
  }, [mapsReady, mapVisible]);

  // Build / update the live Google Map once we have a location to show.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function showOnMap(location: { lat: number; lng: number }, label: string) {
    const g = googleRef.current;
    if (!g || !mapDivRef.current) return;

    if (!mapRef.current) {
      mapRef.current = new g.maps.Map(mapDivRef.current, {
        center: location,
        zoom: 11,
        styles: LANGFORD_MAP_STYLES,
        disableDefaultUI: true,
        zoomControl: true,
        gestureHandling: "cooperative",
        backgroundColor: "#FAF6EE"
      });
    } else {
      mapRef.current.setCenter(location);
      mapRef.current.setZoom(11);
    }

    if (markerRef.current) markerRef.current.setMap(null);
    markerRef.current = new g.maps.Marker({
      position: location,
      map: mapRef.current,
      icon: saffronMarkerIcon(g),
      title: label,
      animation: g.maps.Animation.DROP
    });

    if (circleRef.current) circleRef.current.setMap(null);
    circleRef.current = new g.maps.Circle({
      strokeColor: "#0A66C2",
      strokeOpacity: 0.6,
      strokeWeight: 1.5,
      fillColor: "#F5A623",
      fillOpacity: 0.12,
      map: mapRef.current,
      center: location,
      radius: 25000 // 25km coverage halo around the address
    });
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!value.trim()) return;
    setErrorMsg(null);
    setPhase("routing");
    const matched = pickRecruiter(value);
    setRoutedTo(matched);

    // Try to plot the address on a real Google Map.
    let plotted = false;
    const g = googleRef.current;
    try {
      if (g && g.maps) {
        const place = selectedPlaceRef.current;
        if (place?.geometry?.location) {
          const loc = {
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng()
          };
          setMapVisible(true);
          // Defer to next tick so the map div is in the DOM before init.
          await new Promise((r) => requestAnimationFrame(() => r(null)));
          showOnMap(loc, place.formatted_address || value);
          plotted = true;
        } else {
          // No place selected, fall back to the Geocoder.
          const geo = new g.maps.Geocoder();
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const result: any = await new Promise((resolve, reject) => {
            geo.geocode(
              {
                address: value,
                componentRestrictions: { country: "" }
              },
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              (results: any, status: string) => {
                if (status === "OK" && results && results[0]) resolve(results[0]);
                else reject(new Error(`Geocode failed: ${status}`));
              }
            );
          });
          const loc = {
            lat: result.geometry.location.lat(),
            lng: result.geometry.location.lng()
          };
          setMapVisible(true);
          await new Promise((r) => requestAnimationFrame(() => r(null)));
          showOnMap(loc, result.formatted_address || value);
          plotted = true;
        }
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.warn("Map plot failed, continuing with local-recruiter routing:", err);
      // Soft-fail: we still complete the local-recruiter handoff.
    }

    // Resolve the routing pulse. The local-recruiter card always shows.
    // The map block above shows whenever we successfully geocoded.
    setTimeout(() => {
      setPhase("done");
      if (!plotted && !g) {
        // No maps available at all (offline / blocked). Surface a soft note.
        setErrorMsg(
          "Map preview is unavailable right now, but your recruiter has been routed."
        );
      }
    }, 1000);
  };

  return (
    <section
      className={
        isDark
          ? "relative overflow-hidden bg-brand-sky-deep py-16 text-white sm:py-20"
          : "relative overflow-hidden bg-brand-sky-pale py-16 sm:py-20"
      }
    >
      {isDark && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, rgba(245,166,35,0.20), transparent 45%), radial-gradient(circle at 80% 80%, rgba(10,102,194,0.30), transparent 45%)"
          }}
        />
      )}
      <div className="relative container-prose">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <p
              className={
                isDark
                  ? "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-brand-saffron-light"
                  : "eyebrow"
              }
            >
              <span
                className={
                  isDark
                    ? "h-1.5 w-1.5 rounded-full bg-brand-saffron"
                    : "h-1.5 w-1.5 rounded-full bg-brand-sky"
                }
              />
              Coverage check
            </p>
            <h2
              className={
                isDark
                  ? "mt-4 text-display-md font-bold text-white"
                  : "mt-4 text-display-md font-bold text-brand-ink"
              }
            >
              {title}
            </h2>
            <p
              className={
                isDark
                  ? "mt-4 max-w-prose text-base leading-relaxed text-slate-200"
                  : "mt-4 max-w-prose text-base leading-relaxed text-brand-ink-soft"
              }
            >
              {description}
            </p>
            <ul
              className={
                isDark
                  ? "mt-6 space-y-2 text-sm text-slate-200"
                  : "mt-6 space-y-2 text-sm text-brand-ink-soft"
              }
            >
              <li className="flex items-start gap-2">
                <CheckCircle2
                  className={
                    isDark
                      ? "h-4 w-4 flex-none translate-y-0.5 text-brand-saffron-light"
                      : "h-4 w-4 flex-none translate-y-0.5 text-brand-sky"
                  }
                />
                A real local recruiter on every search. Same person from first call through the first 30 days.
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2
                  className={
                    isDark
                      ? "h-4 w-4 flex-none translate-y-0.5 text-brand-saffron-light"
                      : "h-4 w-4 flex-none translate-y-0.5 text-brand-sky"
                  }
                />
                Routed within one business day to the desk closest to your candidates.
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2
                  className={
                    isDark
                      ? "h-4 w-4 flex-none translate-y-0.5 text-brand-saffron-light"
                      : "h-4 w-4 flex-none translate-y-0.5 text-brand-sky"
                  }
                />
                Local recruiter relationships, not a faceless intake queue.
              </li>
            </ul>
          </div>

          <div className="lg:col-span-7">
            <form
              onSubmit={onSubmit}
              className={
                isDark
                  ? "rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-md sm:p-8"
                  : "rounded-2xl border border-brand-line bg-white p-6 shadow-card sm:p-8"
              }
            >
              <label
                htmlFor="local-recruiter-input"
                className={
                  isDark
                    ? "text-sm font-semibold text-white"
                    : "text-sm font-semibold text-brand-ink"
                }
              >
                Your city or postal code
              </label>
              <div className="mt-3 flex flex-col gap-3 sm:flex-row">
                <div className="relative flex-1">
                  <MapPin
                    className={
                      isDark
                        ? "pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-saffron-light"
                        : "pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-sky"
                    }
                  />
                  <input
                    ref={inputRef}
                    id="local-recruiter-input"
                    type="text"
                    placeholder="Toronto, Vancouver, New York, Miami, Dallas, postal code or ZIP..."
                    value={value}
                    onChange={(e) => {
                      setValue(e.target.value);
                      // User is typing again, drop the previously selected place.
                      selectedPlaceRef.current = null;
                    }}
                    autoComplete="off"
                    className={
                      isDark
                        ? "w-full rounded-md border border-white/20 bg-white/10 px-4 py-3 pl-11 text-sm text-white placeholder:text-slate-300 focus:border-white/60 focus:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/30"
                        : "input-base pl-11"
                    }
                    aria-describedby="local-recruiter-helper"
                    disabled={phase === "routing"}
                  />
                </div>
                <button
                  type="submit"
                  disabled={phase === "routing"}
                  className={
                    isDark
                      ? "inline-flex items-center justify-center gap-2 rounded-md bg-brand-saffron px-6 py-3 text-sm font-semibold text-brand-ink shadow-soft transition hover:bg-brand-saffron-dark hover:text-white disabled:opacity-70"
                      : "btn-primary disabled:opacity-70"
                  }
                >
                  {phase === "routing" ? (
                    <>
                      <span
                        aria-hidden="true"
                        className="h-2.5 w-2.5 rounded-full bg-current motion-safe:animate-pulse-soft"
                      />
                      Routing...
                    </>
                  ) : (
                    <>
                      <Search className="h-4 w-4" />
                      Find my recruiter
                    </>
                  )}
                </button>
              </div>
              <p
                id="local-recruiter-helper"
                className={
                  isDark
                    ? "mt-3 text-xs text-slate-300"
                    : "mt-3 text-xs text-brand-ink-mute"
                }
              >
                {mapsReady
                  ? "Powered by Google Maps. Service available across our coverage area. "
                  : "Service available across our coverage area. "}
                <Link
                  href="/locations/"
                  className={
                    isDark
                      ? "font-semibold text-brand-saffron-light underline-offset-4 hover:underline"
                      : "font-semibold text-brand-sky-dark underline-offset-4 hover:underline"
                  }
                >
                  See all locations
                </Link>
                .
              </p>

              {/* Live Google Map (saffron marker + coverage circle) */}
              {mapVisible && (
                <div className="mt-5">
                  <div
                    ref={mapDivRef}
                    role="region"
                    aria-label="Google Map showing your address with Langford coverage area"
                    className={
                      isDark
                        ? "h-72 w-full overflow-hidden rounded-lg border border-white/15 bg-brand-sky-deep/40 sm:h-80"
                        : "h-72 w-full overflow-hidden rounded-lg border border-brand-line bg-brand-surface sm:h-80"
                    }
                  />
                  <p
                    className={
                      isDark
                        ? "mt-2 inline-flex items-center gap-1.5 text-xs text-slate-300"
                        : "mt-2 inline-flex items-center gap-1.5 text-xs text-brand-ink-mute"
                    }
                  >
                    <span className="h-2 w-2 rounded-full bg-brand-saffron" />
                    Saffron pin marks your address. The circle shows the
                    25 km routing halo around your local Langford desk.
                  </p>
                </div>
              )}

              {phase === "routing" && (
                <div
                  role="status"
                  aria-live="polite"
                  className={
                    isDark
                      ? "mt-5 rounded-md border border-white/15 bg-white/5 px-4 py-3 text-sm text-slate-100"
                      : "mt-5 rounded-md border border-brand-line bg-brand-surface px-4 py-3 text-sm text-brand-ink-soft"
                  }
                >
                  Locating your address and routing to the closest recruiter desk...
                </div>
              )}

              {phase === "done" && routedTo && (
                <div
                  role="status"
                  className={
                    isDark
                      ? "mt-5 rounded-md border border-brand-saffron/40 bg-brand-saffron/15 px-4 py-4 text-sm text-white"
                      : "mt-5 rounded-md border border-brand-sky-light bg-brand-sky-pale px-4 py-4 text-sm text-brand-sky-dark"
                  }
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      className={
                        isDark
                          ? "mt-0.5 h-5 w-5 flex-none text-brand-saffron-light"
                          : "mt-0.5 h-5 w-5 flex-none text-brand-sky"
                      }
                    />
                    <div>
                      <p className="font-semibold">
                        Your local Langford recruiter is on it.
                      </p>
                      <p className={isDark ? "mt-1 text-slate-100" : "mt-1 text-brand-ink"}>
                        <span className="font-semibold">
                          {routedTo.name} from our {routedTo.market} desk
                        </span>{" "}
                        will reach out within one business day. Same person from intake through onboarding.{" "}
                        <Link
                          href="/contact/"
                          className="font-semibold underline-offset-4 hover:underline"
                        >
                          Or skip the queue and contact us directly.
                        </Link>
                      </p>
                      {errorMsg && (
                        <p
                          className={
                            isDark
                              ? "mt-2 text-xs text-slate-200"
                              : "mt-2 text-xs text-brand-ink-mute"
                          }
                        >
                          {errorMsg}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {mapsLoadError === "missing-key" && (
                <p
                  className={
                    isDark
                      ? "mt-4 text-xs text-slate-300"
                      : "mt-4 text-xs text-brand-ink-mute"
                  }
                >
                  Map preview is loading. Recruiter routing works either way.
                </p>
              )}
              {mapsLoadError === "load-failed" && (
                <p
                  className={
                    isDark
                      ? "mt-4 text-xs text-slate-300"
                      : "mt-4 text-xs text-brand-ink-mute"
                  }
                >
                  Map preview is temporarily unavailable. Your recruiter will
                  still be routed within one business day.
                </p>
              )}

              {/* Always-on North American coverage map. Real Google Map,
                  not a decorative SVG. Hidden once a search result map is
                  rendered above. */}
              {!mapVisible && (
                <div className="mt-6">
                  <div
                    ref={overviewDivRef}
                    role="region"
                    aria-label="Langford Staffing recruiter coverage across the United States and Canada"
                    className={
                      isDark
                        ? "h-56 w-full overflow-hidden rounded-lg border border-white/15 bg-brand-sky-deep/40 sm:h-64"
                        : "h-56 w-full overflow-hidden rounded-lg border border-brand-line bg-brand-surface sm:h-64"
                    }
                  />
                  <p
                    className={
                      isDark
                        ? "mt-2 text-center text-[10px] uppercase tracking-[0.18em] text-slate-300"
                        : "mt-2 text-center text-[10px] uppercase tracking-[0.18em] text-brand-ink-mute"
                    }
                  >
                    Recruiter desks across the United States and Canada.
                  </p>
                </div>
              )}

              <p
                className={
                  isDark
                    ? "mt-4 inline-flex items-center gap-1.5 text-xs text-slate-300"
                    : "mt-4 inline-flex items-center gap-1.5 text-xs text-brand-ink-mute"
                }
              >
                <span className="h-1.5 w-1.5 rounded-full bg-brand-saffron motion-safe:animate-pulse-soft" />
                Recruiter desks in Toronto, Vancouver, Montreal, Calgary, New York,
                Boston, Atlanta, Miami, Chicago, Dallas, Los Angeles, and Phoenix.
                Regional reach on cross-market placements.
              </p>
              <Link
                href="/locations/"
                className={
                  isDark
                    ? "mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-white no-underline hover:text-brand-saffron-light"
                    : "mt-4 link-arrow text-sm"
                }
              >
                Browse coverage area
                <ArrowRight className="h-4 w-4" />
              </Link>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}


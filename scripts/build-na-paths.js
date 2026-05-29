/**
 * Build pre-projected SVG path strings for the Langford recruiter map.
 *
 * Reads lib/data/north-america.json (Natural Earth 50m, filtered to CAN+USA+MEX),
 * projects with d3-geo Albers (tuned for North America), and writes
 * lib/data/north-america-paths.json — small, ready-to-render SVG `d` strings.
 *
 * Also pre-projects the 12 city pin coordinates so the React component can
 * place pins in the SAME projected space as the borders. Output dimensions
 * are stable (viewBox 0 0 W H) so animations and overlays line up.
 *
 * Run via: node scripts/build-na-paths.js
 */
const fs = require("fs");
const path = require("path");
const { geoAlbers, geoPath } = require("d3-geo");

const ROOT = path.resolve(__dirname, "..");
const SRC = path.join(ROOT, "lib/data/north-america.json");
const OUT = path.join(ROOT, "lib/data/north-america-paths.json");

const WIDTH = 1000;
const HEIGHT = 620;

const PINS = [
  { slug: "vancouver", name: "Vancouver", lon: -123.1207, lat: 49.2827 },
  { slug: "calgary", name: "Calgary", lon: -114.0719, lat: 51.0447 },
  { slug: "toronto", name: "Toronto", lon: -79.3832, lat: 43.6532, hub: true },
  { slug: "montreal", name: "Montreal", lon: -73.5674, lat: 45.5017 },
  { slug: "boston", name: "Boston", lon: -71.0589, lat: 42.3601 },
  { slug: "new-york", name: "New York", lon: -74.006, lat: 40.7128 },
  { slug: "chicago", name: "Chicago", lon: -87.6298, lat: 41.8781 },
  { slug: "atlanta", name: "Atlanta", lon: -84.388, lat: 33.749 },
  { slug: "miami", name: "Miami", lon: -80.1918, lat: 25.7617 },
  { slug: "dallas", name: "Dallas", lon: -96.797, lat: 32.7767 },
  { slug: "phoenix", name: "Phoenix", lon: -112.074, lat: 33.4484 },
  { slug: "los-angeles", name: "Los Angeles", lon: -118.2437, lat: 34.0522 }
];

const geo = JSON.parse(fs.readFileSync(SRC, "utf8"));

// Drop Alaska + Hawaii + outlying islands so the projection focuses on the
// continental block of CAN + CONUS + MEX where every recruiter desk lives.
// Filter rule: keep only polygon rings whose centroid longitude is east of
// -141 (Alaska panhandle border) AND between latitudes 14 and 70.
function inMainland(ring) {
  let sx = 0,
    sy = 0;
  for (const c of ring) {
    sx += c[0];
    sy += c[1];
  }
  const cx = sx / ring.length;
  const cy = sy / ring.length;
  return cx > -141 && cx < -50 && cy > 14 && cy < 72;
}

function trimGeometry(geom) {
  if (geom.type === "Polygon") {
    return inMainland(geom.coordinates[0]) ? geom : null;
  }
  if (geom.type === "MultiPolygon") {
    const polys = geom.coordinates.filter((p) => inMainland(p[0]));
    return polys.length ? { type: "MultiPolygon", coordinates: polys } : null;
  }
  return geom;
}

const trimmedFeatures = geo.features
  .map((f) => {
    const g = trimGeometry(f.geometry);
    return g ? { ...f, geometry: g } : null;
  })
  .filter(Boolean);

// Albers projection tuned for North America. fitExtent sizes the trimmed
// continental block to the viewBox so CONUS, Canada, and Mexico all fit.
const projection = geoAlbers()
  .rotate([100, 0])
  .parallels([29.5, 45.5]);

projection.fitExtent(
  [
    [16, 16],
    [WIDTH - 16, HEIGHT - 16]
  ],
  { type: "FeatureCollection", features: trimmedFeatures }
);

const pathGen = geoPath(projection);

const features = {};
for (const f of trimmedFeatures) {
  features[f.properties.ADM0_A3] = pathGen(f);
}

// Pre-project pin coordinates to stable [x, y] in the same viewBox.
const pins = PINS.map((p) => {
  const [x, y] = projection([p.lon, p.lat]);
  return { ...p, x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10 };
});

fs.writeFileSync(
  OUT,
  JSON.stringify(
    {
      width: WIDTH,
      height: HEIGHT,
      features,
      pins
    },
    null,
    0
  )
);

console.log("Wrote", OUT, "size:", fs.statSync(OUT).size, "bytes");
console.log("Pins:");
pins.forEach((p) => console.log("  ", p.slug, p.x, p.y));

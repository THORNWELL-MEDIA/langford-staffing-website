"use client";

import { useMemo } from "react";
import SectionHeading from "./SectionHeading";
import {
  NA_FEATURES,
  NA_HEIGHT,
  NA_PINS,
  NA_WIDTH
} from "@/lib/naMap";

/**
 * Recruiter network map (executive briefing style).
 *
 * Real Canada + United States + Mexico geometry from Natural Earth (50m),
 * projected with d3-geo Albers and pre-baked into stable SVG path strings
 * (see scripts/build-na-paths.js + lib/naMap.ts). All 12 recruiter desks
 * sit on top with saffron pins, the Toronto HQ rendered larger, and animated
 * dash-flow connector lines from HQ to every spoke market.
 *
 * Palette is locked to the Langford executive identity:
 *  - Land:    cream / paper-white  #FAFAF7
 *  - Borders: brand-navy stroke    #0A1A35
 *  - Pins:    saffron  #F5A623   with navy outer ring
 *  - HQ pin:  saffron ring with navy center fill
 *  - Background: paper-white
 *  - Grid:    subtle navy hairline at low opacity
 */

const HQ_SLUG = "toronto";

export default function RecruiterNetworkMap() {
  const hub = useMemo(
    () => NA_PINS.find((p) => p.slug === HQ_SLUG) || NA_PINS[0],
    []
  );
  const spokes = useMemo(
    () => NA_PINS.filter((p) => p.slug !== HQ_SLUG),
    []
  );

  return (
    <section className="section bg-brand-paper">
      <div className="container-prose">
        <SectionHeading
          eyebrow="Recruiter network"
          title={
            <>
              Recruiter desks routed{" "}
              <em className="font-bold not-italic text-brand-saffron-dark">
                across the United States and Canada.
              </em>
            </>
          }
          description="Local recruiter relationships in every major North American market. We route your search to the recruiter closest to where your candidates live."
          size="lg"
          align="center"
          className="mb-14"
        />

        <figure className="relative mx-auto max-w-5xl rounded-md border border-brand-line bg-brand-paper p-4 shadow-card sm:p-6">
          {/* Subtle navy hairline grid for executive-briefing feel */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-4 rounded-sm opacity-[0.05]"
            style={{
              backgroundImage:
                "linear-gradient(to right, #0A1A35 1px, transparent 1px), linear-gradient(to bottom, #0A1A35 1px, transparent 1px)",
              backgroundSize: "40px 40px"
            }}
          />

          <svg
            viewBox={`0 0 ${NA_WIDTH} ${NA_HEIGHT}`}
            className="relative mx-auto block h-auto w-full"
            role="img"
            aria-label="Langford Staffing recruiter network across Canada, the United States, and Mexico"
          >
            <defs>
              <linearGradient id="naLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#F5A623" stopOpacity="0" />
                <stop offset="50%" stopColor="#F5A623" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#0A1A35" stopOpacity="0" />
              </linearGradient>
              <radialGradient id="naHubGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#F5A623" stopOpacity="0.55" />
                <stop offset="100%" stopColor="#F5A623" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Country fills — paper-white land on paper-white background, the
                navy stroke does all the visual work (executive briefing). */}
            <g>
              <path
                d={NA_FEATURES.MEX}
                fill="#FAFAF7"
                stroke="#0A1A35"
                strokeWidth={0.5}
                strokeLinejoin="round"
              />
              <path
                d={NA_FEATURES.USA}
                fill="#FAFAF7"
                stroke="#0A1A35"
                strokeWidth={0.5}
                strokeLinejoin="round"
              />
              <path
                d={NA_FEATURES.CAN}
                fill="#FAFAF7"
                stroke="#0A1A35"
                strokeWidth={0.5}
                strokeLinejoin="round"
              />
              {/* Thin dashed navy along Canada's southern outline as a US/CA
                  border accent. Layered on top of the country strokes above. */}
              <path
                d={NA_FEATURES.CAN}
                fill="none"
                stroke="#0A1A35"
                strokeOpacity={0.55}
                strokeWidth={0.6}
                strokeDasharray="2 2"
              />
            </g>

            {/* Connector lines from Toronto HQ to every spoke desk */}
            <g>
              {spokes.map((p, i) => (
                <g key={`line-${p.slug}`}>
                  <line
                    x1={hub.x}
                    y1={hub.y}
                    x2={p.x}
                    y2={p.y}
                    stroke="#0A1A35"
                    strokeOpacity={0.18}
                    strokeWidth={0.7}
                  />
                  <line
                    x1={hub.x}
                    y1={hub.y}
                    x2={p.x}
                    y2={p.y}
                    stroke="url(#naLineGrad)"
                    strokeWidth={1.2}
                    strokeDasharray="4 6"
                    className="motion-safe:animate-dash-flow"
                    style={{ animationDelay: `${i * 0.18}s` }}
                  />
                </g>
              ))}
            </g>

            {/* HQ glow under Toronto */}
            <circle cx={hub.x} cy={hub.y} r={22} fill="url(#naHubGlow)" />

            {/* Spoke recruiter desks */}
            {spokes.map((p, i) => (
              <g key={`pin-${p.slug}`}>
                {/* Outer navy ring */}
                <circle
                  cx={p.x}
                  cy={p.y}
                  r={6.5}
                  fill="#FAFAF7"
                  stroke="#0A1A35"
                  strokeWidth={1.2}
                />
                {/* Saffron core */}
                <circle cx={p.x} cy={p.y} r={4.2} fill="#F5A623" />
                {/* Routing pulse */}
                <circle
                  cx={p.x}
                  cy={p.y}
                  r={6.5}
                  fill="#F5A623"
                  opacity={0.45}
                  className="motion-safe:animate-ping-soft"
                  style={{
                    transformOrigin: `${p.x}px ${p.y}px`,
                    animationDelay: `${(i % 6) * 0.45}s`
                  }}
                />
              </g>
            ))}

            {/* Toronto HQ — saffron ring, navy core, larger 10px */}
            <g>
              <circle
                cx={hub.x}
                cy={hub.y}
                r={10}
                fill="#F5A623"
                stroke="#0A1A35"
                strokeWidth={1.4}
              />
              <circle cx={hub.x} cy={hub.y} r={4.4} fill="#0A1A35" />
              <circle
                cx={hub.x}
                cy={hub.y}
                r={10}
                fill="#F5A623"
                opacity={0.55}
                className="motion-safe:animate-ping-soft"
                style={{ transformOrigin: `${hub.x}px ${hub.y}px` }}
              />
            </g>

            {/* City labels — modernist serif display, deep navy */}
            <g
              fontFamily="var(--font-plex-serif), Georgia, serif"
              fontSize={13}
              fill="#0A1A35"
            >
              {NA_PINS.map((p) => {
                const isHub = p.slug === HQ_SLUG;
                // Push labels right of pin by default; left for the western
                // and southern desks where right-side runs off the canvas.
                const leftSide = ["los-angeles", "phoenix", "vancouver"].includes(
                  p.slug
                );
                const dx = leftSide ? -10 : 10;
                const anchor = leftSide ? "end" : "start";
                return (
                  <text
                    key={`label-${p.slug}`}
                    x={p.x + dx}
                    y={p.y + 4}
                    textAnchor={anchor}
                    fontWeight={isHub ? 700 : 600}
                    style={{ paintOrder: "stroke" }}
                    stroke="#FAFAF7"
                    strokeWidth={3}
                    strokeLinejoin="round"
                  >
                    {p.name}
                  </text>
                );
              })}
            </g>

            {/* Region small-caps label */}
            <g
              fontFamily="var(--font-inter), system-ui, sans-serif"
              fontSize={10}
              fill="#0A1A35"
              opacity={0.55}
              style={{
                letterSpacing: "0.18em",
                textTransform: "uppercase"
              } as React.CSSProperties}
            >
              <text x={NA_WIDTH / 2} y={28} textAnchor="middle">
                North America
              </text>
            </g>
          </svg>

          <figcaption className="relative mt-4 text-center text-xs uppercase tracking-[0.18em] text-brand-ink-mute">
            Recruiter desks across North America.
          </figcaption>

          {/* Legend */}
          <div className="relative mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs font-semibold uppercase tracking-[0.16em] text-brand-ink-soft">
            <span className="inline-flex items-center gap-2">
              <span className="relative inline-flex h-3 w-3 items-center justify-center rounded-full bg-brand-saffron ring-2 ring-brand-navy">
                <span className="h-1 w-1 rounded-full bg-brand-navy" />
              </span>
              Toronto HQ desk
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-brand-saffron ring-2 ring-brand-navy" />
              Recruiter desk
            </span>
            <span className="inline-flex items-center gap-2 text-brand-ink-mute">
              <span className="h-px w-6 bg-gradient-to-r from-brand-saffron to-brand-navy" />
              Live routing
            </span>
          </div>
        </figure>
      </div>
    </section>
  );
}

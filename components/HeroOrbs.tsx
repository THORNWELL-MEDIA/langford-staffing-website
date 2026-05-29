"use client";

/**
 * Animated gradient blur orbs for the hero background.
 * Two large radial gradients (navy + saffron) drift slowly behind the content.
 * Pure CSS keyframes via Tailwind animation utilities, no JS, no jank.
 */
export default function HeroOrbs() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <span
        className="absolute -left-32 -top-24 h-[520px] w-[520px] rounded-full bg-brand-sky/35 blur-[140px] motion-safe:animate-orb-drift-a"
        style={{ willChange: "transform" }}
      />
      <span
        className="absolute -right-40 top-32 h-[480px] w-[480px] rounded-full bg-brand-saffron/25 blur-[140px] motion-safe:animate-orb-drift-b"
        style={{ willChange: "transform" }}
      />
      <span
        className="absolute bottom-0 left-1/3 h-[360px] w-[360px] rounded-full bg-brand-sky-deep/40 blur-[120px] motion-safe:animate-orb-drift-c"
        style={{ willChange: "transform" }}
      />
    </div>
  );
}

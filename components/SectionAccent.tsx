/**
 * Subtle navy/saffron geometric accent for section boundaries.
 * Renders a thin gradient rule with a centered dot ornament,
 * or a soft dotted band, depending on variant.
 */

interface Props {
  variant?: "rule" | "dots" | "wave";
  className?: string;
}

export default function SectionAccent({ variant = "rule", className }: Props) {
  if (variant === "dots") {
    return (
      <div
        aria-hidden="true"
        className={`relative mx-auto flex w-full max-w-5xl items-center justify-center gap-2 py-6 ${className || ""}`}
      >
        <span className="h-1 w-1 rounded-full bg-brand-sky/30" />
        <span className="h-1.5 w-1.5 rounded-full bg-brand-sky/50" />
        <span className="h-2 w-2 rounded-full bg-brand-saffron" />
        <span className="h-1.5 w-1.5 rounded-full bg-brand-sky/50" />
        <span className="h-1 w-1 rounded-full bg-brand-sky/30" />
      </div>
    );
  }

  if (variant === "wave") {
    return (
      <div aria-hidden="true" className={`relative w-full ${className || ""}`}>
        <svg
          viewBox="0 0 1200 40"
          preserveAspectRatio="none"
          className="block h-8 w-full"
        >
          <defs>
            <linearGradient id="sa-wave" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0A66C2" stopOpacity="0" />
              <stop offset="50%" stopColor="#F5A623" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#0A66C2" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0 20 Q 300 0, 600 20 T 1200 20"
            stroke="url(#sa-wave)"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
      </div>
    );
  }

  // rule (default)
  return (
    <div
      aria-hidden="true"
      className={`relative mx-auto flex w-full max-w-5xl items-center justify-center py-6 ${className || ""}`}
    >
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-brand-sky/25 to-brand-sky/25" />
      <span className="mx-3 inline-flex items-center gap-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-brand-saffron" />
        <span className="h-2 w-2 rounded-full bg-brand-sky" />
        <span className="h-1.5 w-1.5 rounded-full bg-brand-saffron" />
      </span>
      <span className="h-px flex-1 bg-gradient-to-l from-transparent via-brand-sky/25 to-brand-sky/25" />
    </div>
  );
}

import { cn } from "@/lib/cn";

interface Props {
  variant?: "dark" | "light";
  className?: string;
  showWordmark?: boolean;
}

/**
 * Executive-briefing wordmark. Modernist serif "Langford" with a saffron
 * keyline rule under "STAFFING" rendered in small caps. Mark is a navy
 * monogram cube with an inset L glyph and a single saffron accent tick.
 */
export default function Logo({
  variant = "dark",
  className,
  showWordmark = true
}: Props) {
  const isDark = variant === "dark";
  return (
    <span
      className={cn(
        "inline-flex items-center gap-3 no-underline",
        className
      )}
      aria-label="Langford Staffing"
    >
      <Mark variant={variant} />
      {showWordmark && (
        <span className="flex flex-col leading-none">
          <span
            className={cn(
              "font-display text-[1.15rem] font-semibold tracking-[-0.01em]",
              isDark ? "text-brand-navy" : "text-white"
            )}
          >
            Langford
          </span>
          <span
            className={cn(
              "mt-1 inline-flex items-center gap-1.5 text-[9px] font-semibold uppercase tracking-[0.32em]",
              isDark ? "text-brand-ink-mute" : "text-white/70"
            )}
          >
            <span className="h-px w-3 bg-brand-saffron" />
            Staffing
          </span>
        </span>
      )}
    </span>
  );
}

function Mark({ variant }: { variant: "dark" | "light" }) {
  const isDark = variant === "dark";
  const bg = isDark ? "#0A1A35" : "#FFFFFF";
  const glyph = isDark ? "#FFFFFF" : "#0A1A35";
  const accent = "#F5A623";
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-none"
      aria-hidden="true"
    >
      <rect width="40" height="40" rx="2" fill={bg} />
      {/* L glyph — heavier, more architectural */}
      <path
        d="M12.5 9 V28 H29"
        stroke={glyph}
        strokeWidth="3.4"
        strokeLinecap="square"
        strokeLinejoin="miter"
        fill="none"
      />
      {/* Saffron accent tick — sits as an executive index mark */}
      <rect x="26" y="9" width="3.5" height="3.5" fill={accent} />
    </svg>
  );
}

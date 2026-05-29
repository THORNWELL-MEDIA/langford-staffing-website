import { cn } from "@/lib/cn";

interface Props {
  value: string;
  label: string;
  variant?: "dark" | "light";
}

export default function Stat({ value, label, variant = "dark" }: Props) {
  const isLight = variant === "light";
  return (
    <div className="flex flex-col gap-1">
      <span
        className={cn(
          "text-display-md font-bold leading-none tracking-tight",
          isLight ? "text-white" : "text-brand-navy"
        )}
      >
        {value}
      </span>
      <span
        className={cn(
          "text-xs font-semibold uppercase tracking-[0.16em]",
          isLight ? "text-brand-teal-light" : "text-brand-ink-soft"
        )}
      >
        {label}
      </span>
    </div>
  );
}

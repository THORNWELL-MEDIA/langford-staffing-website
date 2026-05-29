import { cn } from "@/lib/cn";

interface Props {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  variant?: "dark" | "light";
  className?: string;
  size?: "md" | "lg";
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  variant = "dark",
  className,
  size = "md"
}: Props) {
  const isLight = variant === "light";
  return (
    <div
      className={cn(
        align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl",
        className
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "inline-flex items-center gap-2 text-sm font-semibold",
            isLight ? "text-brand-saffron" : "text-brand-saffron-dark"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "mt-5 text-balance",
          size === "lg" ? "text-display-lg" : "text-display-md",
          isLight ? "text-white" : "text-brand-navy"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed",
            align === "center" ? "mx-auto" : "",
            isLight ? "text-white/85" : "text-brand-ink-soft"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

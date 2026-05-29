import { ShieldCheck, FileCheck2, Lock, Users, Globe2 } from "lucide-react";

const BADGES = [
  {
    icon: ShieldCheck,
    label: "Compliance-First Onboarding",
    sub: "US and Canadian employment law"
  },
  {
    icon: FileCheck2,
    label: "Documented Process",
    sub: "Intake → Shortlist → Onboard"
  },
  {
    icon: Lock,
    label: "Data Privacy",
    sub: "GDPR and PIPEDA aligned"
  },
  {
    icon: Users,
    label: "Vetted Networks",
    sub: "Active candidate sourcing"
  },
  {
    icon: Globe2,
    label: "Bilingual Capable",
    sub: "EN, ES, and FR coverage"
  }
];

export default function TrustBadges({
  variant = "light"
}: {
  variant?: "light" | "dark";
}) {
  const isDark = variant === "dark";
  return (
    <div
      className={
        "rounded-2xl border " +
        (isDark
          ? "border-white/10 bg-white/5 text-white"
          : "border-brand-line bg-white text-brand-navy")
      }
    >
      <div className="grid divide-y divide-brand-line/60 md:grid-cols-5 md:divide-x md:divide-y-0">
        {BADGES.map((b) => {
          const I = b.icon;
          return (
            <div
              key={b.label}
              className="flex items-center gap-3 px-5 py-5 sm:px-6"
            >
              <div
                className={
                  "flex h-10 w-10 flex-none items-center justify-center rounded-lg " +
                  (isDark
                    ? "bg-brand-teal/20 text-brand-teal-light"
                    : "bg-brand-teal/10 text-brand-teal-dark")
                }
              >
                <I className="h-4 w-4" strokeWidth={1.75} />
              </div>
              <div>
                <p className="text-sm font-semibold">{b.label}</p>
                <p
                  className={
                    "text-[11px] " +
                    (isDark ? "text-brand-ink-mute" : "text-brand-ink-soft")
                  }
                >
                  {b.sub}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

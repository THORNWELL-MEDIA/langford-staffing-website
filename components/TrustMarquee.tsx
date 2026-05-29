import {
  ShieldCheck,
  FileText,
  Award,
  Globe2,
  Users,
  BookOpen
} from "lucide-react";

const ITEMS = [
  { icon: ShieldCheck, label: "Compliance first onboarding" },
  { icon: FileText, label: "Written brief and vetted short list" },
  { icon: Globe2, label: "United States and Canada coverage" },
  { icon: Users, label: "Real candidate networks, kept warm" },
  { icon: Award, label: "We stay on the file past the start date" },
  { icon: BookOpen, label: "US and Canadian employment law" }
];

const PLACED_AT = [
  "Boutique hotel groups",
  "National 3PL distribution networks",
  "Public healthcare support systems",
  "Multifamily property management firms",
  "Class A condominium operators",
  "Independent restaurant groups",
  "Retail logistics integrators",
  "Bilingual professional services firms"
];

export default function TrustMarquee() {
  return (
    <div className="border-y border-brand-line bg-brand-paper">
      <div className="container-prose py-10">
        <p className="text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-ink-mute">
          We have placed talent at
        </p>
        <ul className="mt-5 grid gap-x-10 gap-y-3 text-center sm:grid-cols-2 lg:grid-cols-4">
          {PLACED_AT.map((p) => (
            <li
              key={p}
              className="text-sm font-semibold text-brand-navy"
            >
              {p}
            </li>
          ))}
        </ul>
        <div className="mask-fade-edges mt-8 overflow-hidden border-t border-brand-line/60 pt-6">
          <div className="flex w-max animate-marquee gap-12">
            {[...ITEMS, ...ITEMS].map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="flex flex-none items-center gap-3 text-sm font-medium text-brand-ink-soft"
                >
                  <Icon
                    className="h-4 w-4 text-brand-saffron-dark"
                    strokeWidth={2}
                  />
                  <span className="whitespace-nowrap">{item.label}</span>
                  <span className="text-brand-line">·</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

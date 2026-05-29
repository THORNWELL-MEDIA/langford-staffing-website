import { ArrowRight, CheckCircle2 } from "lucide-react";

/**
 * Lightweight 4-stage flow diagram used at the bottom of each service page.
 * Each stage has a label, a one-line cadence note, and a connector arrow on
 * desktop. Mobile collapses to a stacked layout.
 *
 * Caller passes the service shortName so the copy adapts per engagement type.
 */
export default function ServiceFlowDiagram({
  shortName
}: {
  shortName: string;
}) {
  const sn = shortName.toLowerCase();
  const stages: { label: string; meta: string; body: string }[] = [
    {
      label: "Day 0",
      meta: "We scope the role",
      body: `Every ${sn} search starts with a 60 to 90 minute scoping call. Role, pay range, must-haves, timeline. We write it down.`
    },
    {
      label: "Day 1 to 5",
      meta: "We tap our network",
      body: "We work from bilingual candidate networks we keep warm in every metro we cover. We do not start from a blank page."
    },
    {
      label: "Day 5 to 10",
      meta: "You meet a short list",
      body: "Three to five candidates with our notes on each. Never a résumé blast."
    },
    {
      label: "Day 10 onward",
      meta: "We support the first 30 days",
      body: "We stay involved through the offer, the start date, and the first 30 days. Same recruiter the whole way."
    }
  ];

  return (
    <div className="rounded-2xl border border-brand-line bg-white p-6 shadow-soft sm:p-8">
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-saffron-dark">
        Engagement flow
      </p>
      <h3 className="mt-2 text-xl font-semibold text-brand-navy">
        How a {sn} search runs from first call to start date.
      </h3>
      <p className="mt-2 max-w-prose text-sm leading-relaxed text-brand-ink-soft">
        Same process whether the role is volume hospitality or an executive
        search. The depth changes. The structure does not.
      </p>

      {/* Desktop horizontal flow */}
      <ol className="relative mt-8 hidden lg:grid lg:grid-cols-7 lg:items-stretch lg:gap-3">
        {stages.flatMap((s, i) => {
          const items = [
            <li
              key={`stage-${s.label}`}
              className={
                i === 0
                  ? "col-span-1 rounded-xl border border-brand-saffron/40 bg-brand-saffron/10 p-4"
                  : "col-span-1 rounded-xl border border-brand-line bg-brand-surface p-4"
              }
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-ink-mute">
                {s.label}
              </p>
              <p className="mt-2 text-sm font-semibold text-brand-navy">
                {s.meta}
              </p>
              <p className="mt-2 text-xs leading-relaxed text-brand-ink-soft">
                {s.body}
              </p>
            </li>
          ];
          if (i < stages.length - 1) {
            items.push(
              <li
                key={`arrow-${i}`}
                aria-hidden="true"
                className="col-span-1 flex items-center justify-center"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-brand-line bg-white text-brand-sky-dark shadow-soft">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </li>
            );
          }
          return items;
        })}
      </ol>

      {/* Mobile stacked */}
      <ol className="mt-8 space-y-3 lg:hidden">
        {stages.map((s, i) => (
          <li
            key={s.label}
            className={
              i === 0
                ? "rounded-xl border border-brand-saffron/40 bg-brand-saffron/10 p-4"
                : "rounded-xl border border-brand-line bg-brand-surface p-4"
            }
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-ink-mute">
              {s.label}
            </p>
            <p className="mt-1 text-sm font-semibold text-brand-navy">
              {s.meta}
            </p>
            <p className="mt-1 text-xs leading-relaxed text-brand-ink-soft">
              {s.body}
            </p>
          </li>
        ))}
      </ol>

      <ul className="mt-6 grid gap-2 text-xs text-brand-ink-soft sm:grid-cols-2">
        <li className="flex items-start gap-2">
          <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-brand-sky-dark" />
          Same recruiter on the file from the first call through the first 30 days.
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-brand-sky-dark" />
          Replacement terms in writing on day one, not bolted on after.
        </li>
      </ul>
    </div>
  );
}

function cap(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

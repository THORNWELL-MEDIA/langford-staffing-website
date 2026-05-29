import { X, Check, ArrowRight } from "lucide-react";
import SectionHeading from "./SectionHeading";

type Row = {
  label: string;
  generic: string;
  langford: string;
  outcome: string;
};

const ROWS: Row[] = [
  {
    label: "Intake",
    generic: "10 minute call against a job spec",
    langford: "60 to 90 minute call. We write the real job down.",
    outcome: "The short list matches the actual job, not the ad"
  },
  {
    label: "Candidate network",
    generic: "Spun up reactively when the request lands",
    langford: "Bilingual candidate networks kept warm in every metro and industry",
    outcome: "Day of need cover is possible, not aspirational"
  },
  {
    label: "Recruiter",
    generic: "Whoever picks up the next ticket",
    langford: "Same recruiter on the file from first call through the first 30 days",
    outcome: "One person owns the search. No handoff loss."
  },
  {
    label: "Pricing",
    generic: "Commission only, paid when someone shows up",
    langford: "We price the work, with replacement terms in writing",
    outcome: "Culture fit and what happens after the start date get real attention"
  },
  {
    label: "Vetting",
    generic: "Whoever applies first, lightly screened",
    langford: "Phone screen, work history check, references, skills check",
    outcome: "You see our notes, not just résumés"
  },
  {
    label: "After the start date",
    generic: "Agency goes quiet after the start date",
    langford: "We stay on the file through the first 30 days",
    outcome: "Onboarding does not collapse the moment the offer is signed"
  }
];

export default function MethodologyCompare() {
  return (
    <section className="section bg-brand-mist">
      <div className="container-prose">
        <SectionHeading
          eyebrow="How we work"
          title={
            <>
              A typical agency versus{" "}
              <em className="font-bold not-italic text-brand-saffron-dark">
                how Langford runs a search.
              </em>
            </>
          }
          description="The same role briefed two ways. The difference shows up in week two of the new hire."
          size="lg"
          align="center"
          className="mb-14"
        />

        {/* Desktop: 4-column grid (label / generic / langford / outcome) */}
        <div className="hidden overflow-hidden rounded-2xl border border-brand-line bg-white shadow-soft lg:block">
          <div className="grid grid-cols-12 border-b border-brand-line bg-white text-xs font-semibold uppercase tracking-[0.16em] text-brand-ink-mute">
            <div className="col-span-2 px-5 py-4">Step</div>
            <div className="col-span-4 px-5 py-4">Generic agency</div>
            <div className="col-span-3 bg-brand-sky-pale px-5 py-4 text-brand-sky-dark">
              Langford
            </div>
            <div className="col-span-3 bg-brand-saffron/10 px-5 py-4 text-brand-saffron-dark">
              Outcome difference
            </div>
          </div>
          {ROWS.map((r, i) => (
            <div
              key={r.label}
              className={
                "grid grid-cols-12 items-stretch border-b border-brand-line text-sm last:border-b-0"
              }
            >
              <div className="col-span-2 flex items-center px-5 py-5 font-semibold text-brand-navy">
                {r.label}
              </div>
              <div className="col-span-4 flex items-start gap-3 px-5 py-5 text-brand-ink-soft">
                <X className="mt-0.5 h-4 w-4 flex-none text-brand-ink-mute" />
                <span>{r.generic}</span>
              </div>
              <div className="col-span-3 flex items-start gap-3 bg-brand-sky-pale/60 px-5 py-5 text-brand-ink">
                <Check className="mt-0.5 h-4 w-4 flex-none text-brand-sky-dark" />
                <span className="font-medium">{r.langford}</span>
              </div>
              <div className="col-span-3 flex items-start gap-3 bg-brand-saffron/5 px-5 py-5 text-brand-ink">
                <ArrowRight className="mt-0.5 h-4 w-4 flex-none text-brand-saffron-dark" />
                <span>{r.outcome}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: stacked rows */}
        <div className="space-y-5 lg:hidden">
          {ROWS.map((r) => (
            <article
              key={r.label}
              className="overflow-hidden rounded-2xl border border-brand-line bg-white shadow-soft"
            >
              <div className="border-b border-brand-line bg-brand-mist px-5 py-3">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-ink-mute">
                  Step
                </p>
                <p className="mt-1 text-base font-semibold text-brand-navy">
                  {r.label}
                </p>
              </div>
              <div className="space-y-4 px-5 py-5 text-sm">
                <div className="flex items-start gap-3 text-brand-ink-soft">
                  <X className="mt-0.5 h-4 w-4 flex-none text-brand-ink-mute" />
                  <span>
                    <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-ink-mute">
                      Generic agency
                    </span>
                    {r.generic}
                  </span>
                </div>
                <div className="flex items-start gap-3 rounded-md bg-brand-sky-pale/70 p-3 text-brand-ink">
                  <Check className="mt-0.5 h-4 w-4 flex-none text-brand-sky-dark" />
                  <span>
                    <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-sky-dark">
                      Langford
                    </span>
                    <span className="font-medium">{r.langford}</span>
                  </span>
                </div>
                <div className="flex items-start gap-3 rounded-md bg-brand-saffron/10 p-3 text-brand-ink">
                  <ArrowRight className="mt-0.5 h-4 w-4 flex-none text-brand-saffron-dark" />
                  <span>
                    <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-saffron-dark">
                      Outcome difference
                    </span>
                    {r.outcome}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

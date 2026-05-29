import {
  AlertTriangle,
  Clock,
  ShieldOff,
  UsersRound,
  CheckCircle2
} from "lucide-react";
import SectionHeading from "./SectionHeading";

const PROBLEMS = [
  {
    icon: Clock,
    title: "Open roles cost real money the longer they sit",
    body: "Hospitality, property services, logistics, and multifamily teams cannot afford a six week vacancy. A missed shift becomes a missed turnover, a missed shipment, a guest review you never recover. Most agencies treat speed as a stretch goal, not a commitment.",
    fix: "We start with a written intake on day one. We work from candidate networks we keep warm in every metro we cover. We track time to fill by industry and report it back weekly."
  },
  {
    icon: AlertTriangle,
    title: "Most agencies hire from a job spec, not from the actual job",
    body: "A spec lists tasks. The real job is a set of decisions, common failure modes, and an onboarding pace the new hire has to keep up with. Skip that step and you get résumés that look right and hires that struggle in week two.",
    fix: "We write the real job down before we source. The decisions the role owns. The calls the new hire will make in week two. What good looks like at 90 days. Our short list is built against that, not against the job ad."
  },
  {
    icon: UsersRound,
    title: "Day of need placements feel impossible with most agencies",
    body: "Most agencies do not keep a bench because their economics do not support it. So when you call on a Friday afternoon needing weekend cover, you get whoever picks up the phone first, fit or no fit.",
    fix: "We keep bilingual candidate networks warm in every metro, every industry. Year round, not spun up when you call. Same recruiter from the first call through the first 30 days. The bench is real, vetted, and ready when you need it."
  },
  {
    icon: ShieldOff,
    title: "Commission pricing rewards filling the seat, not making it stick",
    body: "If an agency only gets paid when someone shows up, every incentive points to filling the seat. Culture fit, team chemistry, and what happens after the start date all become someone else's problem.",
    fix: "We price the work, not the seat. We stay involved through the first 30 days. Replacement terms in writing. The same recruiter is on the file past the start date because that is how you make a hire stick."
  }
];

export default function ProblemsWeSolve({
  variant = "light",
  eyebrow = "What is broken in hiring today",
  title = "The problems we solve",
  description = "We started Langford because every employer we talked to had the same complaints. Here is what we built to fix them."
}: {
  variant?: "light" | "alt";
  eyebrow?: string;
  title?: string;
  description?: string;
}) {
  return (
    <section
      className={
        variant === "alt"
          ? "bg-brand-surface section"
          : "bg-white section"
      }
    >
      <div className="container-prose">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
          size="lg"
          align="center"
          className="mb-16"
        />
        <div className="grid gap-6 md:grid-cols-2">
          {PROBLEMS.map((p) => (
            <article
              key={p.title}
              className="group relative flex h-full flex-col rounded-2xl border border-brand-line bg-white p-7 shadow-soft transition hover:shadow-card"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-md bg-brand-saffron-light text-brand-saffron-dark">
                  <p.icon className="h-5 w-5" strokeWidth={1.85} />
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-saffron-dark">
                    The problem
                  </p>
                  <h3 className="mt-1.5 text-lg font-semibold text-brand-ink">
                    {p.title}
                  </h3>
                </div>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-brand-ink-soft">
                {p.body}
              </p>
              <div className="mt-6 rounded-md border-l-4 border-brand-sky bg-brand-sky-pale p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-sky-dark">
                  Here is how we solve it
                </p>
                <p className="mt-2 inline-flex gap-2 text-sm leading-relaxed text-brand-ink">
                  <CheckCircle2 className="h-4 w-4 flex-none translate-y-0.5 text-brand-sky" />
                  {p.fix}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

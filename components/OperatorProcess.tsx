import {
  ClipboardList,
  Target,
  Users,
  Handshake,
  LifeBuoy,
  ArrowRight,
  type LucideIcon
} from "lucide-react";
import SectionHeading from "./SectionHeading";

type Step = {
  n: string;
  title: string;
  body: string;
  icon: LucideIcon;
  emphasis?: boolean;
};

const STEPS: Step[] = [
  {
    n: "01",
    title: "Tell us the role",
    body: "Sixty to ninety minutes with your recruiter. Role, pay range, must-haves, deal-breakers, timeline. We put it in writing.",
    icon: ClipboardList
  },
  {
    n: "02",
    title: "We map the job",
    body: "We translate what you actually need into a one-page brief. The real decisions the role owns, the common ways it can fail, and what good looks like at 90 days.",
    icon: Target,
    emphasis: true
  },
  {
    n: "03",
    title: "We tap our candidate network",
    body: "We work from bilingual candidate networks we keep warm year-round in every metro we cover. We do not start from a blank page.",
    icon: Users
  },
  {
    n: "04",
    title: "You meet a short list",
    body: "Three to five candidates with our notes. Phone-screened, work history checked, references taken.",
    icon: Handshake
  },
  {
    n: "05",
    title: "We support the first 30 days",
    body: "We stay involved through the offer, the start date, and the first 30 days. Your recruiter stays on the file.",
    icon: LifeBuoy
  }
];

export default function OperatorProcess() {
  return (
    <section className="section bg-white">
      <div className="container-prose">
        <SectionHeading
          eyebrow="How we work"
          title={
            <>
              Five steps,{" "}
              <em className="font-bold not-italic text-brand-saffron-dark">
                run the same way every time.
              </em>
            </>
          }
          description="We do not skip steps when the request is urgent. That is how mishires happen."
          size="lg"
          align="center"
          className="mb-14"
        />

        {/* Desktop: horizontal flow with connectors */}
        <div className="relative hidden lg:block">
          {/* Top connector rail */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-[8%] right-[8%] top-7 h-px bg-gradient-to-r from-transparent via-brand-sky/40 to-transparent"
          />
          <ol className="grid grid-cols-5 gap-5">
            {STEPS.map((s, i) => (
              <Card key={s.n} step={s} delayMs={i * 60} />
            ))}
          </ol>
          <p className="mt-10 text-center text-xs font-semibold uppercase tracking-[0.18em] text-brand-ink-mute">
            <span className="inline-flex items-center gap-2">
              Tell us the role
              <ArrowRight className="h-3 w-3" />
              We map the job
              <ArrowRight className="h-3 w-3" />
              We tap our network
              <ArrowRight className="h-3 w-3" />
              You meet a short list
              <ArrowRight className="h-3 w-3" />
              We support the first 30 days
            </span>
          </p>
        </div>

        {/* Mobile: stacked vertical */}
        <ol className="grid gap-5 sm:grid-cols-2 lg:hidden">
          {STEPS.map((s) => (
            <Card key={s.n} step={s} delayMs={0} />
          ))}
        </ol>
      </div>
    </section>
  );
}

function Card({ step, delayMs }: { step: Step; delayMs: number }) {
  const Icon = step.icon;
  return (
    <li
      className={
        step.emphasis
          ? "relative rounded-2xl border border-brand-saffron/40 bg-gradient-to-br from-brand-saffron/10 via-white to-white p-6 shadow-soft"
          : "relative rounded-2xl border border-brand-line bg-white p-6 shadow-soft"
      }
      style={{ animationDelay: `${delayMs}ms` }}
    >
      <div className="flex items-center justify-between">
        <span
          className={
            step.emphasis
              ? "flex h-11 w-11 items-center justify-center rounded-full bg-brand-saffron text-brand-navy ring-4 ring-brand-saffron/15"
              : "flex h-11 w-11 items-center justify-center rounded-full bg-brand-sky-pale text-brand-sky-dark ring-4 ring-brand-sky/10"
          }
        >
          <Icon className="h-5 w-5" strokeWidth={1.85} />
        </span>
        <span
          className={
            step.emphasis
              ? "text-xs font-semibold uppercase tracking-[0.18em] text-brand-saffron-dark"
              : "text-xs font-semibold uppercase tracking-[0.18em] text-brand-ink-mute"
          }
        >
          Step {step.n}
        </span>
      </div>
      <h3 className="mt-5 text-base font-semibold leading-tight text-brand-navy">
        {step.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-brand-ink-soft">
        {step.body}
      </p>
    </li>
  );
}

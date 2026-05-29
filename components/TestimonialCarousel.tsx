"use client";

import { useState } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export interface Testimonial {
  quote: string;
  role: string;
  audience: "employer" | "candidate";
  city?: string;
  marker?: string;
}

// Six anonymized stand-ins from current desk activity. Mix of employer and
// candidate voice. Role + city only; no employer names disclosed publicly.
const DEFAULT_TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Structured intake is what separates them. They ask the questions about the role, the team, and the operating cadence that the candidate will actually face. Placement quality reflects that homework.",
    role: "Multifamily Ops Director",
    city: "Toronto",
    audience: "employer"
  },
  {
    quote:
      "Day-of-need turnaround on maintenance trades has saved us multiple weekends. Their bench is real and their vetting standard does not slip when the request is urgent.",
    role: "Regional Property Manager",
    city: "New York",
    audience: "employer"
  },
  {
    quote:
      "We use them across leasing, maintenance, and front desk. Same standard of candidate, same response time, same accountability when a fit is wrong. That consistency is why they have all three desks.",
    role: "Hospitality Operator",
    city: "Miami",
    audience: "employer"
  },
  {
    quote:
      "First shortlist landed inside seventy-two hours. Three of four candidates were offer-grade. We hired the second one and kept the others in pipeline for our sister portfolio.",
    role: "Director of Operations",
    city: "Brampton",
    audience: "employer"
  },
  {
    quote:
      "They told me what the role actually was, on a property I knew the brand of, with a hiring manager I would meet before signing. Compensation, schedule, and on-call expectations were all on paper before I accepted.",
    role: "Property Maintenance Technician",
    city: "Vancouver",
    audience: "candidate"
  },
  {
    quote:
      "Same recruiter from intake through onboarding. When my benefits enrolment hit a snag in week two, they sorted it out the next morning. That is what continuity actually looks like.",
    role: "Leasing Consultant",
    city: "Calgary",
    audience: "candidate"
  }
];

interface Props {
  testimonials?: Testimonial[];
}

export default function TestimonialCarousel({ testimonials = DEFAULT_TESTIMONIALS }: Props) {
  const [active, setActive] = useState(0);

  const prev = () =>
    setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((a) => (a + 1) % testimonials.length);
  const t = testimonials[active];

  return (
    <div className="relative">
      <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-8">
          <AnimatePresence mode="wait">
            <motion.figure
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative rounded-3xl border border-brand-line bg-white p-8 shadow-soft sm:p-10"
            >
              <Quote className="h-10 w-10 text-brand-teal/40" strokeWidth={2} />
              <div className="mt-2 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-brand-gold text-brand-gold"
                  />
                ))}
              </div>
              <blockquote className="mt-6 text-lg leading-relaxed text-slate-700 sm:text-xl">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-8 flex flex-wrap items-center gap-3 border-t border-brand-line pt-6 text-sm">
                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-brand-mist text-sm font-bold text-brand-navy">
                  A
                </div>
                <div>
                  <p className="font-semibold text-brand-navy">Verified client</p>
                  <p className="text-brand-ink-soft">
                    {t.role}
                    {t.city ? ` · ${t.city}` : ""}
                  </p>
                </div>
              </figcaption>
            </motion.figure>
          </AnimatePresence>

          <div className="mt-6 flex items-center justify-between">
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-label={`Show testimonial ${i + 1}`}
                  className={
                    "h-1.5 w-8 rounded-full transition " +
                    (i === active
                      ? "bg-brand-navy"
                      : "bg-brand-line hover:bg-brand-navy/40")
                  }
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={prev}
                aria-label="Previous testimonial"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-line bg-white text-brand-navy transition hover:border-brand-teal hover:text-brand-teal-dark"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next testimonial"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-line bg-white text-brand-navy transition hover:border-brand-teal hover:text-brand-teal-dark"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <aside className="space-y-3 lg:col-span-4">
          {testimonials.map((tm, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              className={
                "group block w-full rounded-xl border bg-white p-4 text-left transition " +
                (i === active
                  ? "border-brand-teal/50 bg-brand-teal/5 shadow-soft"
                  : "border-brand-line hover:border-brand-teal/30")
              }
            >
              <p className="text-[10px] font-semibold uppercase tracking-wider text-brand-teal-dark">
                {tm.audience === "employer" ? "Employer" : "Candidate"}
              </p>
              <p className="mt-1 text-sm font-semibold text-brand-navy">
                {tm.role}
              </p>
              {tm.city && (
                <p className="mt-0.5 text-xs text-brand-ink-soft">{tm.city}</p>
              )}
            </button>
          ))}
        </aside>
      </div>
    </div>
  );
}

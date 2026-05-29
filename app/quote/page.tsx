import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Phone,
  Mail,
  Clock,
  CheckCircle2
} from "lucide-react";
import { BRAND, NAP, HOURS } from "@/lib/constants";
import { img } from "@/lib/images";
import ContactForm from "@/components/ContactForm";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Request a Shortlist",
  description: `Request a shortlist from ${BRAND.name}. Tell us about the role and a Langford team member will respond within one business day.`
};

export default function QuotePage() {
  return (
    <>
      <SchemaJsonLd
        data={breadcrumbSchema([
          { name: "Home", url: NAP.websiteUrl + "/" },
          { name: "Request a Shortlist", url: NAP.websiteUrl + "/quote/" }
        ])}
      />

      <section className="relative isolate overflow-hidden bg-brand-navy-dark text-white">
        <Image
          src={img("aboutHandshake", 2200)}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy-dark via-brand-navy/85 to-brand-navy-dark/65" />
        <div className="relative container-prose pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24">
          <div className="max-w-3xl">
            <p className="eyebrow-light">For employers</p>
            <h1 className="mt-5 text-display-xl font-bold text-balance">
              Request a shortlist, {" "}
              <em className="font-bold not-italic text-brand-teal-light">
                response within one business day.
              </em>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-slate-200">
              Tell us about the role you need to hire. A Langford team member
              will respond with a recommended engagement structure and next
              steps.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-prose grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="rounded-3xl border border-brand-line bg-white p-8 shadow-soft">
              <ContactForm variant="employer" />
            </div>
          </div>

          <aside className="lg:col-span-4 space-y-6">
            <div className="rounded-2xl border border-brand-line bg-brand-navy p-7 text-white shadow-soft">
              <p className="eyebrow-light">Prefer to talk?</p>
              <h3 className="mt-3 text-xl font-semibold">
                Reach our team directly.
              </h3>
              <p className="mt-3 text-sm text-slate-200">
                We answer most messages within the same business hour during
                North American operating hours.
              </p>
              <ul className="mt-6 space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <Phone className="h-4 w-4 flex-none translate-y-0.5 text-brand-teal-light" />
                  <a
                    href={`tel:${NAP.phoneE164 || ""}`}
                    className="text-slate-200 no-underline hover:text-white"
                  >
                    {NAP.phoneDisplay}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="h-4 w-4 flex-none translate-y-0.5 text-brand-teal-light" />
                  <a
                    href={`mailto:${NAP.email}`}
                    className="text-slate-200 no-underline hover:text-white"
                  >
                    {NAP.email}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="h-4 w-4 flex-none translate-y-0.5 text-brand-teal-light" />
                  <span className="text-slate-200">{HOURS.display}</span>
                </li>
              </ul>
              <Link href="/contact/" className="btn-teal mt-7 w-full justify-center">
                Full contact options
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="rounded-2xl border border-brand-line bg-white p-6">
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-navy">
                What you&rsquo;ll get
              </h3>
              <ul className="mt-5 space-y-3 text-sm text-slate-700">
                {[
                  "Recommendation on engagement structure",
                  "Realistic market read on timeline and comp",
                  "A written brief on the role",
                  "A short, pre screened candidate list"
                ].map((p) => (
                  <li key={p} className="flex gap-2.5">
                    <CheckCircle2 className="h-4 w-4 flex-none translate-y-0.5 text-brand-teal-dark" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

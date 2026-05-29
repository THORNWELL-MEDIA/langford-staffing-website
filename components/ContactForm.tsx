"use client";

import { useState } from "react";

type Variant = "employer" | "candidate" | "general";

interface Props {
  variant?: Variant;
}

const HEADINGS: Record<Variant, { title: string; sub: string }> = {
  employer: {
    title: "Request a shortlist",
    sub: "Tell us about the role. A Langford team member will reply within one business day."
  },
  candidate: {
    title: "Apply with Langford",
    sub: "Submit your details and a Langford recruiter will follow up about matching open roles."
  },
  general: {
    title: "Get in touch",
    sub: "Send us a note. A Langford team member will follow up within one business day."
  }
};

export default function ContactForm({ variant = "general" }: Props) {
  const [submitted, setSubmitted] = useState(false);
  const headings = HEADINGS[variant];

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const payload = Object.fromEntries(data.entries());
    // Backend not wired. Placeholder action.
    // eslint-disable-next-line no-console
    console.log("[ContactForm submit]", { variant, payload });
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-md border border-brand-teal/30 bg-brand-teal/5 p-6">
        <h3 className="text-lg font-semibold text-brand-navy">Thanks.</h3>
        <p className="mt-2 text-sm text-slate-700">
          Your message has been received. A Langford Staffing team member will be
          in touch within one business day.
        </p>
      </div>
    );
  }

  const isEmployer = variant === "employer";
  const isCandidate = variant === "candidate";

  return (
    <form
      onSubmit={onSubmit}
      action="/api/contact"
      method="post"
      className="space-y-4"
      aria-label={headings.title}
    >
      <div>
        <h3 className="text-lg font-semibold text-brand-navy">
          {headings.title}
        </h3>
        <p className="mt-1 text-sm text-brand-ink-soft">{headings.sub}</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field name="firstName" label="First name" required />
        <Field name="lastName" label="Last name" required />
      </div>

      <Field name="email" label="Email" type="email" required />
      <Field name="phone" label="Phone" type="tel" />

      {isEmployer && (
        <>
          <Field name="company" label="Company" required />
          <Field name="role" label="Role you need to hire" />
          <Field name="city" label="City / region" />
          <SelectField
            name="hiringTimeline"
            label="Hiring timeline"
            options={[
              "Immediate",
              "Within 30 days",
              "30-90 days",
              "Exploratory"
            ]}
          />
        </>
      )}

      {isCandidate && (
        <>
          <Field name="city" label="City / region" />
          <Field name="role" label="Role(s) you're looking for" />
          <SelectField
            name="availability"
            label="Availability"
            options={[
              "Immediate",
              "Within 2 weeks",
              "Within 30 days",
              "Exploring"
            ]}
          />
        </>
      )}

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-brand-dark"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-brand-teal focus:outline-none focus:ring-1 focus:ring-brand-teal"
        />
      </div>

      <p className="text-xs text-brand-ink-soft">
        By submitting, you consent to Langford Staffing contacting you about your
        request. See our{" "}
        <a className="text-brand-navy underline" href="/privacy/">
          Privacy Policy
        </a>{" "}
        for how we handle your information.
      </p>

      <button type="submit" className="btn-primary w-full sm:w-auto">
        Send message
      </button>
    </form>
  );
}

function Field({
  name,
  label,
  type = "text",
  required = false
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-brand-dark"
      >
        {label}
        {required && <span className="text-brand-teal"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete="off"
        className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-brand-teal focus:outline-none focus:ring-1 focus:ring-brand-teal"
      />
    </div>
  );
}

function SelectField({
  name,
  label,
  options
}: {
  name: string;
  label: string;
  options: string[];
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-brand-dark"
      >
        {label}
      </label>
      <select
        id={name}
        name={name}
        className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm focus:border-brand-teal focus:outline-none focus:ring-1 focus:ring-brand-teal"
        defaultValue=""
      >
        <option value="" disabled>
          Select…
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}

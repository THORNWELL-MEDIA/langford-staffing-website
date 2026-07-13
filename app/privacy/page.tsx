import type { Metadata } from "next";
import { BRAND, NAP } from "@/lib/constants";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy & Trust Centre | Privacy & Trust Centre",
  description: "Privacy & Trust Centre for Langford Staffing."
};

export default function Page() {
  return (
    <>
      <SchemaJsonLd
        data={breadcrumbSchema([
          { name: "Home", url: NAP.websiteUrl + "/" },
          { name: "Privacy & Trust Centre", url: NAP.websiteUrl + "/privacy/" },
          { name: "Privacy & Trust Centre", url: NAP.websiteUrl + "/privacy" }
        ])}
      />

      <section className="relative isolate overflow-hidden bg-brand-navy-dark py-20 text-white sm:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 80% 30%, rgba(15,163,163,0.18), transparent 50%)"
          }}
        />
        <div className="relative container-prose">
          <p className="eyebrow-light">Privacy & Trust Centre</p>
          <h1 className="mt-4 text-display-lg font-bold">Privacy & Trust Centre</h1>
        </div>
      </section>

      <section className="section">
        <article className="container-prose prose prose-slate max-w-3xl">
          <div className="text-sm text-brand-ink-mute mb-8">
            <p>Version 1.0</p>
            <p>Last Updated: July 10, 2026</p>
          </div>
          <h2>Welcome</h2>
          <p>Welcome to the Langford Staffing Privacy & Trust Centre. This page is the central location for information about how we collect, use, protect, retain and manage personal information across our website and recruitment process. We believe transparency is an important part of building trust with candidates, clients and visitors.</p>
          <h2>Our Commitment</h2>
          <p>We are committed to handling personal information responsibly. We strive to collect only the information reasonably necessary for legitimate business purposes, limit access to authorized personnel, protect information using appropriate safeguards, and respond to privacy questions in a timely manner. Our practices continue to evolve as our business and technology develop.</p>
          <h2>How to Use This Privacy Centre</h2>
          <p>Each topic below is provided as a separate page so you can quickly find the information that applies to you.</p>
          <h2>Available Policies</h2>
          <ul>
            <li><Link href="/privacy/general">General Privacy Policy</Link></li>
            <li><Link href="/privacy/candidate">Candidate Privacy Policy</Link></li>
            <li><Link href="/privacy/ai">Responsible AI & AI-Assisted Recruitment Policy</Link></li>
            <li><Link href="/privacy/cookies">Cookie & Tracking Technologies Policy</Link></li>
            <li><Link href="/privacy/security">Security & Information Protection Policy</Link></li>
            <li><Link href="/privacy/retention">Data Retention & Secure Disposal Policy</Link></li>
            <li><Link href="/privacy/accessibility">Accessibility Statement</Link></li>
            <li><Link href="/privacy/terms">Website Terms of Use</Link></li>
            <li><Link href="/privacy/contact">Contact the Privacy Office</Link></li>
          </ul>
          <h2>Our Recruitment Process</h2>
          <p>During recruitment we may collect information that you provide through your application, communications and interviews. For some positions we may use technology to assist with transcription or organization of interview responses. Hiring decisions are made by authorized people, not by AI acting alone.</p>
          <h2>Your Privacy Rights</h2>
          <p>Depending on applicable law, you may have the right to request access to your personal information, request corrections, request deletion where available, withdraw consent where applicable, or ask questions about how your information is handled.</p>
          <h2>Questions</h2>
          <p>If you have questions about privacy or our recruitment process, please contact our Privacy Office using the contact information published on the Contact Privacy Office page.</p>
          <h2>Important Notice</h2>
          <p>This Privacy & Trust Centre is intended to explain our current privacy practices in plain language. It should be read together with the more detailed policies linked above. We update these documents from time to time as our services and practices evolve.</p>
        </article>
      </section>
    </>
  );
}

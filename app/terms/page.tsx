import type { Metadata } from "next";
import { BRAND, NAP } from "@/lib/constants";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: `Terms governing the use of the ${BRAND.name} website and services.`
};

export default function TermsPage() {
  return (
    <>
      <SchemaJsonLd
        data={breadcrumbSchema([
          { name: "Home", url: NAP.websiteUrl + "/" },
          { name: "Terms of Use", url: NAP.websiteUrl + "/terms/" }
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
          <p className="eyebrow-light">Legal</p>
          <h1 className="mt-4 text-display-lg font-bold">Terms of Use</h1>
          <p className="mt-4 max-w-2xl text-sm text-slate-300">
            Our terms of use are being reviewed by counsel. Contact us in the
            meantime with any questions about how we engage with employers and
            candidates.
          </p>
        </div>
      </section>

      <section className="section">
        <article className="container-prose prose prose-slate max-w-3xl">
          <p className="rounded-md border border-brand-line bg-brand-mist p-4 text-sm text-brand-ink">
            <strong>Terms under counsel review.</strong> The summary below
            describes how we currently engage with website visitors,
            candidates, and employers while our full terms are being
            finalized. Specific engagement terms (fees, replacement provisions,
            confidentiality) live in the agreement we sign with each
            employer or candidate.
          </p>

          <h2>1. Acceptance</h2>
          <p>
            By accessing or using the {BRAND.name} website and services
            (collectively, the &ldquo;Services&rdquo;), you agree to be bound by
            these Terms of Use. If you do not agree, do not use the Services.
          </p>

          <h2>2. Services</h2>
          <p>
            {BRAND.name} provides staffing and recruitment services. Specific
            engagement terms, including fees, replacement provisions, and
            scope, are documented in separate engagement agreements between
            {" "} {BRAND.name} and the relevant employer or candidate.
          </p>

          <h2>3. Eligibility</h2>
          <p>
            You must be at least 18 years of age to use the Services. By using
            the Services, you represent that you meet this requirement.
          </p>

          <h2>4. Candidate submissions</h2>
          <p>
            Candidate-submitted information (résumés, work history, references)
            may be shared with prospective employers consistent with our
            Privacy Policy and applicable law. Candidates retain ownership of
            their underlying information.
          </p>

          <h2>5. Employer obligations</h2>
          <p>
            Employers using the Services agree to provide accurate information
            about open roles, treat candidates respectfully, comply with
            applicable employment and anti-discrimination law, and use
            candidate information only for the purpose of evaluating candidates
            for the role for which the candidate was presented.
          </p>

          <h2>6. No employment guarantee</h2>
          <p>
            {BRAND.name} does not guarantee placement, hire, or any specific
            outcome. Final hiring decisions rest with the employer; final
            engagement decisions rest with the candidate.
          </p>

          <h2>7. Intellectual property</h2>
          <p>
            All content on the {BRAND.name} website, including text,
            graphics, logos, and trademarks, is the property of {BRAND.name}
            or its licensors, and is protected by applicable
            intellectual-property law.
          </p>

          <h2>8. Disclaimer</h2>
          <p>
            The Services are provided on an &ldquo;as is&rdquo; and &ldquo;as
            available&rdquo; basis. {BRAND.name} disclaims, to the extent
            permitted by applicable law, all warranties, express or implied.
          </p>

          <h2>9. Limitation of liability</h2>
          <p>
            To the extent permitted by applicable law, {BRAND.name} shall not be
            liable for any indirect, incidental, special, consequential, or
            punitive damages arising out of or relating to the Services.
          </p>

          <h2>10. Governing law &amp; venue</h2>
          <p>
            These Terms are governed by the laws of the jurisdiction in
            which the relevant engagement is performed (the applicable US
            state or Canadian province), without regard to conflict-of-laws
            principles. Disputes arising under these Terms shall be subject
            to the exclusive jurisdiction of the courts of that
            jurisdiction, unless otherwise agreed in writing.
          </p>

          <h2>11. Changes</h2>
          <p>
            {BRAND.name} may update these Terms from time to time. Continued use
            of the Services after a change constitutes acceptance of the
            updated Terms.
          </p>

          <h2>12. Contact</h2>
          <p>
            Questions about these Terms can be directed to:
            <br />
            {BRAND.name}
            <br />
            {NAP.addressDisplay}
            <br />
            Email: {NAP.email}
          </p>

          <p className="mt-12 rounded-md border border-brand-line bg-brand-mist p-4 text-sm text-brand-ink-soft">
            The summary above reflects current practice while our full
            terms of use are under counsel review. The final, enforceable
            terms will be published here once approved. For questions in
            the meantime, contact us at {NAP.email}.
          </p>
        </article>
      </section>
    </>
  );
}

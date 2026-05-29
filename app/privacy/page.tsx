import type { Metadata } from "next";
import { BRAND, NAP } from "@/lib/constants";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${BRAND.name} collects, stores, and uses personal information, for candidates, employers, and website visitors.`
};

export default function PrivacyPage() {
  return (
    <>
      <SchemaJsonLd
        data={breadcrumbSchema([
          { name: "Home", url: NAP.websiteUrl + "/" },
          { name: "Privacy Policy", url: NAP.websiteUrl + "/privacy/" }
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
          <h1 className="mt-4 text-display-lg font-bold">Privacy Policy</h1>
          <p className="mt-4 max-w-2xl text-sm text-slate-300">
            Our privacy policy is being reviewed by counsel. Contact us in the
            meantime with any privacy questions.
          </p>
        </div>
      </section>

      <section className="section">
        <article className="container-prose prose prose-slate max-w-3xl">
          <p className="rounded-md border border-brand-line bg-brand-mist p-4 text-sm text-brand-ink">
            <strong>Policy under counsel review.</strong> The summary below
            reflects how we currently handle personal information across
            candidate, employer, and website-visitor interactions while our
            full policy is being finalized. Send privacy questions to{" "}
            {NAP.email}.
          </p>

          <h2>1. Who we are</h2>
          <p>
            {BRAND.name} is a staffing and recruitment firm operating across
            the United States and Canada. This summary describes, in plain
            language, how we collect, use, share, and protect personal
            information about candidates, employers, and website visitors.
          </p>

          <h2>2. Information we collect</h2>
          <ul>
            <li>
              <strong>Candidate information:</strong> name, contact details,
              résumé, work history, qualifications, references, identification
              documents (where required for placement), and information you
              voluntarily provide.
            </li>
            <li>
              <strong>Employer information:</strong> company name, contact
              details, role specifications, hiring preferences, and engagement
              history.
            </li>
            <li>
              <strong>Website visitor information:</strong> log data, device
              information, IP address, browsing behavior, and cookies as
              described below.
            </li>
          </ul>

          <h2>3. How we use information</h2>
          <p>
            We use personal information to provide staffing and recruitment
            services, match candidates to opportunities, communicate with
            candidates and employers, comply with applicable law, and improve
            our services.
          </p>

          <h2>4. Legal basis (US and Canada)</h2>
          <p>
            We process personal information consistent with applicable US
            federal and state privacy law and Canadian federal and
            provincial privacy law (including PIPEDA and equivalent
            provincial regimes), and, where relevant, the data protection
            frameworks of the jurisdictions in which our employers and
            candidates are located.
          </p>

          <h2>5. Sharing</h2>
          <p>
            Candidate information is shared with prospective employers only with
            your knowledge and on the basis of mutual interest. We may share
            information with service providers acting on our behalf under
            confidentiality obligations and where required by law.
          </p>

          <h2>6. Retention</h2>
          <p>
            We retain personal information for the period necessary to provide
            our services, comply with legal obligations, resolve disputes, and
            enforce agreements. Specific retention periods vary by category of
            data.
          </p>

          <h2>7. Your rights</h2>
          <p>
            Depending on your jurisdiction, you may have rights to access,
            correct, delete, or restrict the processing of your personal
            information, and to object to or withdraw consent for certain
            processing. To exercise these rights, contact us at {NAP.email}.
          </p>

          <h2>8. Security</h2>
          <p>
            We maintain administrative, technical, and physical safeguards
            designed to protect personal information. No method of transmission
            or storage is fully secure; we encourage candidates and employers
            to use caution when sharing sensitive information.
          </p>

          <h2>9. International transfers</h2>
          <p>
            Where personal information is transferred internationally, we apply
            safeguards consistent with applicable law.
          </p>

          <h2>10. Cookies and tracking</h2>
          <p>
            We use cookies and similar technologies for site functionality,
            analytics, and marketing. You may manage cookies through your
            browser settings. A complete list of analytics and marketing
            tags will be published with the final policy.
          </p>

          <h2>11. Children</h2>
          <p>
            Our services are not directed to individuals under the age of 18.
            We do not knowingly collect personal information from minors.
          </p>

          <h2>12. Changes</h2>
          <p>
            We may update this Privacy Policy from time to time. Material
            changes will be communicated via this page or through other
            reasonable means.
          </p>

          <h2>13. Contact</h2>
          <p>
            For privacy-related inquiries, contact us at:
            <br />
            {BRAND.name}
            <br />
            {NAP.addressDisplay}
            <br />
            Email: {NAP.email}
          </p>

          <p className="mt-12 rounded-md border border-brand-line bg-brand-mist p-4 text-sm text-brand-ink-soft">
            The summary above reflects current practice while our full
            privacy policy is under counsel review. The final, enforceable
            policy will be published here once approved. For privacy questions
            in the meantime, contact us at {NAP.email}.
          </p>
        </article>
      </section>
    </>
  );
}

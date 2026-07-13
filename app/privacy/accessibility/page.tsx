import type { Metadata } from "next";
import { BRAND, NAP } from "@/lib/constants";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Accessibility Statement | Privacy & Trust Centre",
  description: "Accessibility Statement for Langford Staffing."
};

export default function Page() {
  return (
    <>
      <SchemaJsonLd
        data={breadcrumbSchema([
          { name: "Home", url: NAP.websiteUrl + "/" },
          { name: "Privacy & Trust Centre", url: NAP.websiteUrl + "/privacy/" },
          { name: "Accessibility Statement", url: NAP.websiteUrl + "/privacy/accessibility" }
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
          <h1 className="mt-4 text-display-lg font-bold">Accessibility Statement</h1>
        </div>
      </section>

      <section className="section">
        <article className="container-prose prose prose-slate max-w-3xl">
          <div className="text-sm text-brand-ink-mute mb-8">
            <p>Version 1.0</p>
            <p>Last Updated: July 10, 2026</p>
          </div>
          <h2>Purpose</h2>
          <p>This Accessibility Statement explains Langford Staffing&apos;s commitment to providing an inclusive and accessible experience for website visitors, candidates, clients and other individuals who interact with us.</p>
          <h2>Our Commitment</h2>
          <p>Langford Staffing is committed to identifying and reducing barriers where reasonably possible. We aim to provide our website, communications and recruitment process in a manner that respects dignity, independence, inclusion and equal opportunity.</p>
          <h2>Website Accessibility</h2>
          <p>Langford Staffing is working toward making its website easier to use for people with different abilities, devices and assistive technologies. Accessibility is an ongoing process, and some areas of the website may not yet fully meet every accessibility standard.</p>
          <h2>Accessibility Standards</h2>
          <p>Where applicable, Langford Staffing aims to consider recognized accessibility guidance, including the Web Content Accessibility Guidelines. This statement does not represent that every page, feature or third-party service currently conforms to a specific technical level.</p>
          <h2>Recruitment Accessibility</h2>
          <p>Candidates may request reasonable accommodation during the recruitment process. Accommodation may be available for applications, interviews, recorded interviews, assessments, communications and other recruitment steps.</p>
          <h2>Examples of Accommodation</h2>
          <p>Depending on the circumstances, reasonable accommodation may include:</p>
          <ul>
            <li>Accessible instructions or documents.</li>
            <li>Additional time to complete an assessment.</li>
            <li>A live interview instead of a recorded interview where appropriate.</li>
            <li>Captioning, written questions or alternative communication methods.</li>
            <li>Compatibility with assistive technology.</li>
            <li>Rescheduling or allowing breaks.</li>
            <li>Another reasonable adjustment based on the candidate&apos;s needs.</li>
          </ul>
          <h2>How to Request Accommodation</h2>
          <p>Candidates should contact the recruiter as early as reasonably possible and explain the barrier or adjustment requested. Langford Staffing may ask for enough information to understand the request and identify a reasonable accommodation. We do not require candidates to provide unnecessary medical details.</p>
          <h2>Confidentiality</h2>
          <p>Information provided for an accommodation request is handled as confidentially as reasonably possible and is shared only with personnel who need the information to arrange or administer the accommodation.</p>
          <h2>No Negative Treatment</h2>
          <p>Requesting accommodation or identifying an accessibility concern will not be treated as a negative factor in the recruitment process. Langford Staffing does not retaliate against individuals for making a good-faith accessibility request.</p>
          <h2>AI-Assisted and Recorded Interviews</h2>
          <p>Langford Staffing does not intend to assess candidates based on eye contact, physical movement, camera framing, accent, disability-related communication, assistive technology use or similar characteristics. Candidates who experience a barrier with a recorded or AI-assisted interview should contact the recruiter before beginning or as soon as possible.</p>
          <h2>Third-Party Platforms</h2>
          <p>Some website or recruitment functions may be provided through third-party platforms. The accessibility of those platforms may depend on the provider. Langford Staffing will consider reasonable alternatives where a third-party system creates a barrier and an alternative is appropriate and available.</p>
          <h2>Documents and Alternative Formats</h2>
          <p>Where reasonably possible, Langford Staffing will provide important information in an accessible or alternative format upon request. The time needed may depend on the document, format and complexity of the request.</p>
          <h2>Feedback</h2>
          <p>We welcome feedback about accessibility barriers. Feedback may relate to the website, a document, communication, recruitment step or third-party service used by Langford Staffing.</p>
          <h2>Limits and Ongoing Improvement</h2>
          <p>Langford Staffing is continuing to review and improve its accessibility practices. We do not claim that every system, website page, document or third-party platform is fully accessible at all times. Where a barrier is identified, we will consider reasonable steps to address it.</p>
          <h2>Changes to This Statement</h2>
          <p>Langford Staffing may update this Statement as its website, services, recruitment process and legal obligations evolve. The current version and last updated date will be posted on this page.</p>
          <h2>Contact</h2>
          <p>To request accommodation, an alternative format or to report an accessibility barrier, please contact Langford Staffing using the contact information published on the Contact Privacy Office page or through your assigned recruiter.</p>
          <h2>Related Policies</h2>
          <p><Link href="/privacy">/privacy</Link></p>
          <p><Link href="/privacy/general">/privacy/general</Link></p>
          <p><Link href="/privacy/candidate">/privacy/candidate</Link></p>
          <p><Link href="/privacy/ai">/privacy/ai</Link></p>
          <p><Link href="/privacy/cookies">/privacy/cookies</Link></p>
          <p><Link href="/privacy/security">/privacy/security</Link></p>
          <p><Link href="/privacy/retention">/privacy/retention</Link></p>
          <p><Link href="/privacy/terms">/privacy/terms</Link></p>
          <p><Link href="/privacy/contact">/privacy/contact</Link></p>

        </article>
      </section>
    </>
  );
}

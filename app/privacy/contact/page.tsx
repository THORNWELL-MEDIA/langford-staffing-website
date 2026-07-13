import type { Metadata } from "next";
import { BRAND, NAP } from "@/lib/constants";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact the Privacy Office | Privacy & Trust Centre",
  description: "Contact the Privacy Office for Langford Staffing."
};

export default function Page() {
  return (
    <>
      <SchemaJsonLd
        data={breadcrumbSchema([
          { name: "Home", url: NAP.websiteUrl + "/" },
          { name: "Privacy & Trust Centre", url: NAP.websiteUrl + "/privacy/" },
          { name: "Contact the Privacy Office", url: NAP.websiteUrl + "/privacy/contact" }
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
          <h1 className="mt-4 text-display-lg font-bold">Contact the Privacy Office</h1>
        </div>
      </section>

      <section className="section">
        <article className="container-prose prose prose-slate max-w-3xl">
          <div className="text-sm text-brand-ink-mute mb-8">
            <p>Version 1.0</p>
            <p>Last Updated: July 10, 2026</p>
          </div>
          <h2>Purpose</h2>
          <p>This page explains how to contact Langford Staffing with privacy questions, requests, complaints, accessibility concerns or questions about AI-assisted recruitment.</p>
          <h2>Privacy Contact</h2>
          <p>Langford Staffing has designated a privacy contact for receiving and coordinating privacy-related inquiries. Langford Staffing does not currently claim to have a formally appointed Data Protection Officer unless and until such an appointment is made.</p>
          <h2>How to Contact Us</h2>
          <h2>Please use the contact information below:</h2>
          <p>{"Langford StaffingPrivacy ContactEmail: " + NAP.email}</p>
          <h2>What You Can Contact Us About</h2>
          <h2>You may contact us about:</h2>
          <ul>
            <li>How Langford Staffing collects, uses, shares, protects or retains personal information.</li>
            <li>Candidate privacy and recruitment records.</li>
            <li>Recorded interviews, transcripts or AI-assisted recruitment tools.</li>
            <li>Access to personal information.</li>
            <li>Correction of inaccurate information.</li>
            <li>Deletion requests where available.</li>
            <li>Withdrawal of consent where applicable.</li>
            <li>Cookie or website privacy questions.</li>
            <li>Accessibility or accommodation concerns.</li>
            <li>A suspected privacy or security incident.</li>
            <li>A complaint about how personal information has been handled.</li>
          </ul>
          <h2>What to Include in Your Request</h2>
          <h2>To help us respond, please include:</h2>
          <ul>
            <li>Your full name.</li>
            <li>Your preferred contact information.</li>
            <li>Your relationship with Langford Staffing, such as candidate, client, website visitor or vendor.</li>
            <li>The position, application, communication or service involved, if applicable.</li>
            <li>The approximate date of the interaction.</li>
            <li>A clear description of your question or request.</li>
            <li>Your country, province or state, where relevant to the request.</li>
          </ul>
          <h2>Protecting Your Information</h2>
          <p>Please do not send passwords, full government identification numbers, banking information or highly sensitive documents through ordinary email unless we specifically request them and provide an appropriate method for submission.</p>
          <h2>Identity Verification</h2>
          <p>Before providing access to personal information or completing certain requests, Langford Staffing may need to confirm your identity. Any verification request will be limited to information reasonably necessary to protect you and prevent unauthorized disclosure.</p>
          <h2>Access Requests</h2>
          <p>Depending on applicable law, you may request confirmation of whether Langford Staffing holds personal information about you and request access to eligible information. Some information may be withheld or redacted where permitted or required by law, including information about other individuals, confidential business information, privileged information or security-related details.</p>
          <h2>Correction Requests</h2>
          <p>If you believe personal information is inaccurate or incomplete, you may request correction. Please identify the information you believe is incorrect and provide enough detail for us to review the request.</p>
          <h2>Deletion Requests</h2>
          <p>Depending on applicable law and the circumstances, you may request deletion of personal information. Langford Staffing may need to retain certain information for legal, security, contractual, recordkeeping, complaint-handling or dispute-resolution purposes.</p>
          <h2>Consent Withdrawal</h2>
          <p>Where processing is based on consent, you may withdraw consent for future processing. Withdrawal does not affect processing that occurred before the withdrawal and may affect Langford Staffing&apos;s ability to continue a service or recruitment process where the information is necessary.</p>
          <h2>AI and Human Review Requests</h2>
          <p>If you have a concern about a transcript, AI-generated summary or AI-assisted recruitment process, please describe the specific issue. Langford Staffing may review the underlying application, recording, transcript or other relevant information and may provide human review where required by law or reasonably appropriate.</p>
          <h2>Accessibility and Accommodation</h2>
          <p>Candidates and website users may contact Langford Staffing to request reasonable accommodation, an alternative format or assistance with an accessibility barrier. Accommodation requests will be handled as confidentially as reasonably possible.</p>
          <h2>Complaints</h2>
          <p>If you believe Langford Staffing has handled personal information improperly, you may submit a complaint. Please provide enough information for us to understand the issue. We may involve appropriate personnel to review the matter and determine whether corrective action is needed.</p>
          <h2>Response Times</h2>
          <p>Langford Staffing aims to acknowledge and respond to privacy requests within a reasonable period. The time required may depend on the type of request, the amount of information involved, identity verification, applicable law and whether third-party systems or service providers must be contacted.</p>
          <h2>Authorized Representatives</h2>
          <p>Where permitted by law, an authorized representative may submit a request on your behalf. Langford Staffing may ask for written proof of authority and may contact you directly to confirm the request.</p>
          <h2>No Retaliation</h2>
          <p>Langford Staffing will not retaliate against an individual for making a good-faith privacy request, complaint, accessibility request or question about AI-assisted recruitment.</p>
          <h2>Regulatory Complaints</h2>
          <p>Depending on your location, you may also have the right to contact an applicable privacy, data protection, labour, human rights or consumer protection authority. We encourage individuals to contact us first so we have an opportunity to review and address the concern.</p>
          <h2>Changes to This Page</h2>
          <p>Langford Staffing may update this page as its contact process, business operations and legal obligations evolve. The current version and last updated date will be posted on this page.</p>
          <h2>Suggested Request Subject Lines</h2>
          <ul>
            <li>General Privacy Inquiry</li>
            <li>Candidate Privacy Request</li>
            <li>Access Request</li>
            <li>Correction Request</li>
            <li>Deletion Request</li>
            <li>AI Recruitment Question</li>
            <li>Accessibility or Accommodation Request</li>
            <li>Privacy Complaint</li>
            <li>Suspected Privacy or Security Incident</li>
          </ul>
          <h2>Related Policies</h2>
          <p><Link href="/privacy">/privacy</Link></p>
          <p><Link href="/privacy/general">/privacy/general</Link></p>
          <p><Link href="/privacy/candidate">/privacy/candidate</Link></p>
          <p><Link href="/privacy/ai">/privacy/ai</Link></p>
          <p><Link href="/privacy/cookies">/privacy/cookies</Link></p>
          <p><Link href="/privacy/security">/privacy/security</Link></p>
          <p><Link href="/privacy/retention">/privacy/retention</Link></p>
          <p><Link href="/privacy/accessibility">/privacy/accessibility</Link></p>
          <p><Link href="/privacy/terms">/privacy/terms</Link></p>

        </article>
      </section>
    </>
  );
}

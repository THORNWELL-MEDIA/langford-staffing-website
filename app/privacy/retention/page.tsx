import type { Metadata } from "next";
import { BRAND, NAP } from "@/lib/constants";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Data Retention & Secure Disposal Policy | Privacy & Trust Centre",
  description: "Data Retention & Secure Disposal Policy for Langford Staffing."
};

export default function Page() {
  return (
    <>
      <SchemaJsonLd
        data={breadcrumbSchema([
          { name: "Home", url: NAP.websiteUrl + "/" },
          { name: "Privacy & Trust Centre", url: NAP.websiteUrl + "/privacy/" },
          { name: "Data Retention & Secure Disposal Policy", url: NAP.websiteUrl + "/privacy/retention" }
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
          <h1 className="mt-4 text-display-lg font-bold">Data Retention & Secure Disposal Policy</h1>
        </div>
      </section>

      <section className="section">
        <article className="container-prose prose prose-slate max-w-3xl">
          <div className="text-sm text-brand-ink-mute mb-8">
            <p>Version 1.0</p>
            <p>Last Updated: July 10, 2026</p>
          </div>
          <h2>Purpose</h2>
          <p>This Policy explains how Langford Staffing approaches the retention and disposal of personal information and business records. Our goal is to keep information only for as long as it is reasonably needed for the purpose for which it was collected, for legal or operational requirements, or to address disputes, investigations or security concerns.</p>
          <h2>Scope</h2>
          <p>This Policy applies to personal information and business records handled through Langford Staffing&apos;s website, recruitment activities, communications, client and vendor relationships, and general business operations.</p>
          <h2>General Retention Principle</h2>
          <p>Langford Staffing does not intend to keep personal information indefinitely. Retention periods may vary depending on the type of information, the purpose for which it was collected, the systems in which it is stored, applicable law, contractual obligations and whether an issue remains active.</p>
          <h2>Factors We Consider</h2>
          <p>When deciding how long to retain information, Langford Staffing may consider:</p>
          <ul>
            <li>The reason the information was collected.</li>
            <li>Whether the information is still needed for an active business purpose.</li>
            <li>Applicable legal, regulatory, tax, employment or contractual requirements.</li>
            <li>The sensitivity of the information.</li>
            <li>The risk of harm from unauthorized access or continued retention.</li>
            <li>Whether the information is needed for a complaint, dispute, investigation or legal claim.</li>
            <li>Whether the information can be securely deleted, destroyed or de-identified.</li>
          </ul>
          <h2>Candidate and Recruitment Information</h2>
          <p>Candidate information may include applications, resumes, interview recordings, interview transcripts, recruiter notes, hiring manager notes, assessment results, reference information and recruitment communications.</p>
          <p>Candidate records are retained only for as long as reasonably necessary for recruitment, future opportunity consideration where appropriate, legal or operational needs, and the handling of complaints or disputes. Different categories of candidate information may be retained for different periods.</p>
          <h2>Recorded Interviews and Transcripts</h2>
          <p>Recorded interviews, transcripts and AI-assisted summaries are not intended to be retained permanently. They may be kept for the period reasonably required to complete the recruitment process, document the decision, respond to questions or complaints, and satisfy legal or operational requirements.</p>
          <p>Where a candidate requests deletion and applicable law permits deletion, Langford Staffing will assess the request and take reasonable steps to delete eligible records.</p>
          <h2>Website and Inquiry Information</h2>
          <p>Information submitted through website forms, email inquiries or other communications may be retained for as long as needed to respond, maintain a record of the interaction, support a business relationship, prevent misuse or comply with legal obligations.</p>
          <h2>Client, Vendor and Business Records</h2>
          <p>Client, vendor and business-contact information may be retained for the duration of the relationship and for a reasonable period afterward for administration, accounting, legal, audit, tax, contractual and dispute-resolution purposes.</p>
          <h2>Cookie and Website Data</h2>
          <p>Cookie, analytics and website-usage information may be retained according to the settings and durations of the technologies used. The Cookie & Tracking Technologies Policy provides additional information. Langford Staffing should periodically review whether the duration of non-essential cookies remains appropriate.</p>
          <h2>Security and System Logs</h2>
          <p>Some systems may generate access logs, error logs, security records, audit records or similar information. These records may be retained for troubleshooting, security, fraud prevention, system administration, investigations or legal requirements.</p>
          <h2>Legal Holds and Active Matters</h2>
          <p>Routine deletion may be suspended where information is relevant to an actual or reasonably anticipated legal claim, complaint, investigation, audit, regulatory inquiry or security incident. Information subject to a legal hold may be retained until the hold is released or the matter is resolved.</p>
          <h2>Backups and Archived Copies</h2>
          <p>Information deleted from active systems may remain temporarily in system backups or archived copies. Backup retention and deletion may depend on the systems and service providers being used. Backup copies are not intended for ordinary business use and may remain until they are overwritten or otherwise removed through the normal backup cycle.</p>
          <h2>Service Providers</h2>
          <p>Langford Staffing may rely on third-party service providers that store or process information on our behalf. Retention and deletion may depend in part on the provider&apos;s systems, settings and contractual obligations. Langford Staffing expects providers to process information only for authorized purposes and to delete or return information when appropriate.</p>
          <h2>Secure Disposal</h2>
          <p>When information is no longer reasonably required, Langford Staffing may delete, destroy, anonymize or de-identify it, depending on the format and circumstances.</p>
          <p>Secure disposal may include deleting electronic files, removing records from active systems, using provider deletion tools, securely destroying paper records, or de-identifying information so it is no longer reasonably linked to an individual.</p>
          <h2>Deletion Requests</h2>
          <p>Depending on applicable law, individuals may request deletion of their personal information. A deletion request may be limited or refused where information must be retained for legal, security, contractual, recordkeeping or dispute-resolution purposes.</p>
          <p>Where information is eligible for deletion, Langford Staffing will take reasonable steps to remove it from active systems and instruct relevant service providers where appropriate.</p>
          <h2>No Fixed Universal Retention Period</h2>
          <p>Because Langford Staffing uses different systems and handles different types of information, this Policy does not create one fixed retention period for every record. More specific policies, notices, legal requirements or operational procedures may establish different periods for particular information.</p>
          <h2>Changes to This Policy</h2>
          <p>Langford Staffing may update this Policy as its systems, business operations and legal obligations evolve. The current version and last updated date will be posted on this page.</p>
          <h2>Contact</h2>
          <p>For questions about retention or to make a privacy request, please contact the Privacy Office using the contact information published on the Contact Privacy Office page.</p>
          <h2>Related Policies</h2>
          <p><Link href="/privacy">/privacy</Link></p>
          <p><Link href="/privacy/general">/privacy/general</Link></p>
          <p><Link href="/privacy/candidate">/privacy/candidate</Link></p>
          <p><Link href="/privacy/ai">/privacy/ai</Link></p>
          <p><Link href="/privacy/cookies">/privacy/cookies</Link></p>
          <p><Link href="/privacy/security">/privacy/security</Link></p>
          <p><Link href="/privacy/accessibility">/privacy/accessibility</Link></p>
          <p><Link href="/privacy/terms">/privacy/terms</Link></p>
          <p><Link href="/privacy/contact">/privacy/contact</Link></p>

        </article>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import { BRAND, NAP } from "@/lib/constants";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import Link from "next/link";

export const metadata: Metadata = {
  title: "General Privacy Policy | Privacy & Trust Centre",
  description: "General Privacy Policy for Langford Staffing."
};

export default function Page() {
  return (
    <>
      <SchemaJsonLd
        data={breadcrumbSchema([
          { name: "Home", url: NAP.websiteUrl + "/" },
          { name: "Privacy & Trust Centre", url: NAP.websiteUrl + "/privacy/" },
          { name: "General Privacy Policy", url: NAP.websiteUrl + "/privacy/general" }
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
          <h1 className="mt-4 text-display-lg font-bold">General Privacy Policy</h1>
        </div>
      </section>

      <section className="section">
        <article className="container-prose prose prose-slate max-w-3xl">
          <div className="text-sm text-brand-ink-mute mb-8">
            <p>Version 1.0</p>
            <p>Last Updated: July 10, 2026</p>
          </div>
          <h2>Purpose</h2>
          <p>This General Privacy Policy explains how Langford Staffing collects, uses, discloses, stores and protects personal information obtained through our website, communications and business operations. It applies unless a more specific policy, such as our Candidate Privacy Policy, applies.</p>
          <h2>Scope</h2>
          <p>This Policy applies to website visitors, prospective clients, existing clients, business contacts, vendors and other individuals who interact with Langford Staffing.</p>
          <h2>Information We Collect</h2>
          <p>Depending on your interaction with us, we may collect contact information, information you voluntarily submit, communications, website usage information, and other information reasonably necessary to provide services, respond to inquiries or operate our business.</p>
          <h2>How We Collect Information</h2>
          <p>Information may be collected directly from you, through forms you complete, emails or telephone calls, through your use of our website, or from third parties where appropriate and permitted by law.</p>
          <h2>How We Use Information</h2>
          <p>We use information to communicate with you, respond to inquiries, provide services, improve our website, protect our systems, meet legal obligations and support our day-to-day business operations.</p>
          <h2>Sharing Information</h2>
          <p>We do not sell personal information. We may share information with service providers who assist us in operating our business, with professional advisers, or where required or permitted by law.</p>
          <h2>Artificial Intelligence</h2>
          <p>We may use technology, including AI-assisted tools, to support certain business and recruitment processes. Where AI is used in recruitment, hiring decisions remain subject to meaningful human review.</p>
          <h2>Information Security</h2>
          <p>We use administrative, technical and organizational measures intended to help protect personal information. Access to personal information is limited to authorized personnel who require it for legitimate business purposes.</p>
          <h2>Retention</h2>
          <p>We retain personal information only for as long as reasonably necessary to fulfill the purposes for which it was collected, to comply with legal obligations, resolve disputes or enforce our agreements.</p>
          <h2>Your Rights</h2>
          <p>Depending on applicable law, you may have rights to request access to your personal information, request correction of inaccurate information, request deletion where available, withdraw consent where applicable and contact us with privacy questions.</p>
          <h2>Third-Party Services</h2>
          <p>Our website or services may contain links to or integrate with third-party services. Those services operate under their own privacy practices, and we encourage you to review their policies.</p>
          <h2>Children's Privacy</h2>
          <p>Our website and services are not intended for children. We do not knowingly collect personal information from children where prohibited by applicable law.</p>
          <h2>Changes to this Policy</h2>
          <p>We may update this Policy from time to time. The current version will always be available on this page together with the effective date.</p>
          <h2>Contact</h2>
          <p>For privacy-related questions, please contact the Privacy Office using the contact information published on the Contact Privacy Office page.</p>
          <h2>Related Policies</h2>
          <p><Link href="/privacy">/privacy</Link></p>
          <p><Link href="/privacy/candidate">/privacy/candidate</Link></p>
          <p><Link href="/privacy/ai">/privacy/ai</Link></p>
          <p><Link href="/privacy/cookies">/privacy/cookies</Link></p>
          <p><Link href="/privacy/security">/privacy/security</Link></p>
          <p><Link href="/privacy/retention">/privacy/retention</Link></p>
          <p><Link href="/privacy/accessibility">/privacy/accessibility</Link></p>
          <p><Link href="/privacy/terms">/privacy/terms</Link></p>
          <p><Link href="/privacy/contact">/privacy/contact</Link></p>
        </article>
      </section>
    </>
  );
}

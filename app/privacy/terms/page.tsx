import type { Metadata } from "next";
import { BRAND, NAP } from "@/lib/constants";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Website Terms of Use | Privacy & Trust Centre",
  description: "Website Terms of Use for Langford Staffing."
};

export default function Page() {
  return (
    <>
      <SchemaJsonLd
        data={breadcrumbSchema([
          { name: "Home", url: NAP.websiteUrl + "/" },
          { name: "Privacy & Trust Centre", url: NAP.websiteUrl + "/privacy/" },
          { name: "Website Terms of Use", url: NAP.websiteUrl + "/privacy/terms" }
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
          <h1 className="mt-4 text-display-lg font-bold">Website Terms of Use</h1>
        </div>
      </section>

      <section className="section">
        <article className="container-prose prose prose-slate max-w-3xl">
          <div className="text-sm text-brand-ink-mute mb-8">
            <p>Version 1.0</p>
            <p>Last Updated: July 10, 2026</p>
          </div>
          <h2>Acceptance of These Terms</h2>
          <p>By accessing or using the Langford Staffing website, you agree to these Terms of Use. If you do not agree, you should not use the website. These Terms apply only to the website and do not replace any separate written agreement between you and Langford Staffing.</p>
          <h2>About the Website</h2>
          <p>The website provides general information about Langford Staffing, employment and contract opportunities, recruitment services, business services and related matters. Website content may be changed, updated or removed at any time.</p>
          <h2>No Employment Offer</h2>
          <p>A job posting, application, interview invitation, assessment, communication or website statement does not create an employment relationship or guarantee an offer. An employment or contract offer is valid only when issued in writing by an authorized representative and may be subject to conditions.</p>
          <h2>Permitted Use</h2>
          <p>You may use the website for lawful personal or business purposes, including learning about Langford Staffing, viewing opportunities, submitting information and contacting us.</p>
          <h2>Prohibited Use</h2>
          <h2>You must not:</h2>
          <ul>
            <li>Use the website for unlawful, fraudulent, abusive or harmful purposes.</li>
            <li>Attempt to gain unauthorized access to the website, accounts, systems or information.</li>
            <li>Introduce malware, harmful code or automated activity that interferes with website operation.</li>
            <li>Copy, scrape, harvest or collect information from the website in a manner that violates law or these Terms.</li>
            <li>Impersonate another person or misrepresent your identity or qualifications.</li>
            <li>Submit information that is false, misleading, confidential, infringing or unlawful.</li>
            <li>Use the website to harass, discriminate against or harm another person.</li>
            <li>Interfere with the security, availability or normal operation of the website.</li>
          </ul>
          <h2>User Submissions</h2>
          <p>If you submit information through the website, you confirm that the information is accurate to the best of your knowledge and that you have the right to provide it. You should not submit confidential information belonging to another person or organization without authorization.</p>
          <h2>Candidate Materials</h2>
          <p>Candidates retain ownership of original resumes, cover letters, work samples and other materials they submit. By submitting them, candidates permit Langford Staffing and its authorized service providers to store, review, copy and process the materials for recruitment, administration, security, legal and related purposes described in the Candidate Privacy Policy.</p>
          <h2>Intellectual Property</h2>
          <p>Website text, graphics, branding, logos, layout, software and other content are owned by or licensed to Langford Staffing and may be protected by copyright, trademark and other laws. You may view and print website content for personal or internal business use, but you may not reproduce, distribute, modify or commercially exploit it without permission.</p>
          <h2>Third-Party Links and Services</h2>
          <p>The website may link to or integrate with third-party websites, platforms or services. Langford Staffing does not control those third parties and is not responsible for their content, security, availability, privacy practices or terms. You should review the third party&apos;s policies before using its services.</p>
          <h2>Website Availability</h2>
          <p>Langford Staffing does not guarantee that the website will always be available, uninterrupted, secure or error-free. Access may be limited or suspended for maintenance, security, technical, legal or operational reasons.</p>
          <h2>Accuracy of Information</h2>
          <p>Langford Staffing aims to provide useful and accurate information, but website content may contain errors, omissions or outdated information. Job postings, requirements, services, locations and other details may change without notice.</p>
          <h2>No Professional Advice</h2>
          <p>Website content is provided for general informational purposes. It is not legal, financial, tax, medical or other professional advice. You should obtain advice from a qualified professional where appropriate.</p>
          <h2>Privacy</h2>
          <p>Personal information collected through the website is handled under the applicable Langford Staffing privacy policies, including the General Privacy Policy, Candidate Privacy Policy and Cookie & Tracking Technologies Policy.</p>
          <h2>Security</h2>
          <p>You are responsible for protecting your account credentials, devices and communications. You should not share passwords or access information and should notify Langford Staffing if you suspect unauthorized use.</p>
          <h2>Disclaimer</h2>
          <p>To the extent permitted by law, the website and its content are provided on an &quot;as is&quot; and &quot;as available&quot; basis. Langford Staffing does not make warranties that may lawfully be excluded, including warranties that the website will be uninterrupted, error-free or suitable for a particular purpose.</p>
          <h2>Limitation of Liability</h2>
          <p>To the extent permitted by law, Langford Staffing is not responsible for indirect, incidental, special, consequential or punitive losses arising from use of or inability to use the website. Nothing in these Terms limits liability that cannot legally be limited or excluded.</p>
          <h2>Indemnity</h2>
          <p>To the extent permitted by law, you agree to be responsible for losses or claims arising from your unlawful use of the website, your violation of these Terms or your infringement of another person&apos;s rights.</p>
          <h2>Changes to These Terms</h2>
          <p>Langford Staffing may update these Terms from time to time. The current version and last updated date will be posted on this page. Continued use of the website after an update means that the revised Terms apply to future use.</p>
          <h2>Governing Law</h2>
          <p>These Terms are governed by the laws applicable to the Langford Staffing entity operating the website, subject to any mandatory rights that apply in your jurisdiction. Before publication, Langford Staffing should insert the correct legal entity, province or state, and court jurisdiction if it wishes to specify them.</p>
          <h2>Severability</h2>
          <p>If any part of these Terms is found to be invalid or unenforceable, the remaining provisions will continue to apply to the extent permitted by law.</p>
          <h2>No Waiver</h2>
          <p>If Langford Staffing does not enforce a provision of these Terms, that does not mean the provision is waived.</p>
          <h2>Contact</h2>
          <p>For questions about these Terms, please contact Langford Staffing using the contact information published on the Contact Privacy Office page or the general contact page.</p>
          <h2>Related Policies</h2>
          <p><Link href="/privacy">/privacy</Link></p>
          <p><Link href="/privacy/general">/privacy/general</Link></p>
          <p><Link href="/privacy/candidate">/privacy/candidate</Link></p>
          <p><Link href="/privacy/ai">/privacy/ai</Link></p>
          <p><Link href="/privacy/cookies">/privacy/cookies</Link></p>
          <p><Link href="/privacy/security">/privacy/security</Link></p>
          <p><Link href="/privacy/retention">/privacy/retention</Link></p>
          <p><Link href="/privacy/accessibility">/privacy/accessibility</Link></p>
          <p><Link href="/privacy/contact">/privacy/contact</Link></p>

        </article>
      </section>
    </>
  );
}

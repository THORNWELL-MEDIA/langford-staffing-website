import type { Metadata } from "next";
import { BRAND, NAP } from "@/lib/constants";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Security & Information Protection Policy | Privacy & Trust Centre",
  description: "Security & Information Protection Policy for Langford Staffing."
};

export default function Page() {
  return (
    <>
      <SchemaJsonLd
        data={breadcrumbSchema([
          { name: "Home", url: NAP.websiteUrl + "/" },
          { name: "Privacy & Trust Centre", url: NAP.websiteUrl + "/privacy/" },
          { name: "Security & Information Protection Policy", url: NAP.websiteUrl + "/privacy/security" }
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
          <h1 className="mt-4 text-display-lg font-bold">Security & Information Protection Policy</h1>
        </div>
      </section>

      <section className="section">
        <article className="container-prose prose prose-slate max-w-3xl">
          <div className="text-sm text-brand-ink-mute mb-8">
            <p>Version 1.0</p>
            <p>Last Updated: July 10, 2026</p>
          </div>
          <h2>Purpose</h2>
          <p>This Policy explains Langford Staffing&apos;s general approach to protecting personal information and business information. It is intended to provide a clear and accurate description of our current security commitments without overstating the specific controls, certifications or testing that may be in place.</p>
          <h2>Scope</h2>
          <p>This Policy applies to information handled through Langford Staffing&apos;s website, recruitment activities, communications, business operations and approved service providers.</p>
          <h2>Our Security Commitment</h2>
          <p>Langford Staffing uses administrative, technical and organizational measures intended to help protect information against unauthorized access, use, disclosure, alteration or loss. The measures used may vary depending on the type of information, the system involved and the nature of the business activity.</p>
          <h2>Access to Information</h2>
          <p>Access to personal information is limited to authorized personnel who require it for legitimate business purposes. Employees, contractors and service providers are expected to handle information confidentially and use it only for authorized purposes.</p>
          <h2>Account and Password Practices</h2>
          <p>Users are expected to use appropriate passwords and protect account credentials. Langford Staffing does not currently claim that multi-factor authentication is used across all systems.</p>
          <h2>Data Handling</h2>
          <p>Personal information should be collected, used, shared and retained only for legitimate business purposes. Personnel are expected to avoid unnecessary copying, sharing or storage of sensitive information.</p>
          <h2>Email and Communications</h2>
          <p>Email, messaging and other communication systems may be used to conduct business and recruitment activities. Personnel are expected to verify recipients and use reasonable care before sending personal or confidential information.</p>
          <h2>Service Providers</h2>
          <p>Langford Staffing may rely on third-party providers for website hosting, recruitment systems, communications, document storage, analytics and other business functions. We expect service providers to handle information responsibly and in accordance with their contractual obligations.</p>
          <h2>Website and System Security</h2>
          <p>Langford Staffing takes reasonable steps to maintain the security and availability of its website and business systems. These steps may include software updates, access restrictions, account management, backups and monitoring appropriate to the systems being used.</p>
          <h2>Encryption</h2>
          <p>Langford Staffing does not claim that every item of information is encrypted or that encryption is used in every system. Where encryption is available through a service provider or platform, it may form part of the overall protection of information.</p>
          <h2>Multi-Factor Authentication</h2>
          <p>Langford Staffing does not currently claim that multi-factor authentication is enabled across all systems. Security controls will continue to be reviewed as the organization and its technology environment evolve.</p>
          <h2>Penetration Testing and Certifications</h2>
          <p>Langford Staffing does not currently claim that it performs formal annual penetration testing or that it is certified under ISO 27001, SOC 2 or another security certification framework.</p>
          <h2>Monitoring and Logs</h2>
          <p>Some systems may generate logs or records relating to access, activity, errors or security events. These records may be used to support troubleshooting, protect systems, investigate concerns and meet legal or operational requirements.</p>
          <h2>Backups and Recovery</h2>
          <p>Langford Staffing may rely on backup and recovery features provided by its technology platforms and service providers. Backup practices may vary depending on the system and the nature of the information.</p>
          <h2>Security Incidents</h2>
          <p>If Langford Staffing becomes aware of a suspected loss, unauthorized access, disclosure or other security concern, it will assess the circumstances and take reasonable steps to contain, investigate and address the issue.</p>
          <h2>Notification</h2>
          <p>Where applicable law requires notification of a privacy or security incident, Langford Staffing will take steps to provide the required notice to affected individuals, regulators or other parties.</p>
          <h2>Candidate Information</h2>
          <p>Candidate information is handled in accordance with the Candidate Privacy Policy and Responsible AI & AI-Assisted Recruitment Policy. Access is limited to personnel and service providers involved in recruitment or related administration.</p>
          <h2>Cookies and Website Technologies</h2>
          <p>Website security and tracking technologies are addressed in the Cookie & Tracking Technologies Policy. The actual website configuration should be reviewed so that public notices match the technologies in use.</p>
          <h2>Your Responsibilities</h2>
          <p>Individuals can help protect information by using strong passwords, protecting account credentials, avoiding suspicious links, using trusted devices and promptly reporting suspected unauthorized access or misuse.</p>
          <h2>No Absolute Guarantee</h2>
          <p>No organization can guarantee that information will never be accessed, lost, misused or disclosed without authorization. Langford Staffing works to reduce risk through reasonable practices but does not provide an absolute guarantee of security.</p>
          <h2>Changes to This Policy</h2>
          <p>Langford Staffing may update this Policy as its systems, service providers, practices and legal obligations evolve. The current version and last updated date will be posted on this page.</p>
          <h2>Contact</h2>
          <p>For questions about information security or to report a suspected privacy or security concern, please contact Langford Staffing using the contact information published on the Contact Privacy Office page.</p>
          <h2>Related Policies</h2>
          <p><Link href="/privacy">/privacy</Link></p>
          <p><Link href="/privacy/general">/privacy/general</Link></p>
          <p><Link href="/privacy/candidate">/privacy/candidate</Link></p>
          <p><Link href="/privacy/ai">/privacy/ai</Link></p>
          <p><Link href="/privacy/cookies">/privacy/cookies</Link></p>
          <p><Link href="/privacy/retention">/privacy/retention</Link></p>
          <p><Link href="/privacy/accessibility">/privacy/accessibility</Link></p>
          <p><Link href="/privacy/terms">/privacy/terms</Link></p>
          <p><Link href="/privacy/contact">/privacy/contact</Link></p>

        </article>
      </section>
    </>
  );
}

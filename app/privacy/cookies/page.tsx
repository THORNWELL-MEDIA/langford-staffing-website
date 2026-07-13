import type { Metadata } from "next";
import { BRAND, NAP } from "@/lib/constants";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookie & Tracking Technologies Policy | Privacy & Trust Centre",
  description: "Cookie & Tracking Technologies Policy for Langford Staffing."
};

export default function Page() {
  return (
    <>
      <SchemaJsonLd
        data={breadcrumbSchema([
          { name: "Home", url: NAP.websiteUrl + "/" },
          { name: "Privacy & Trust Centre", url: NAP.websiteUrl + "/privacy/" },
          { name: "Cookie & Tracking Technologies Policy", url: NAP.websiteUrl + "/privacy/cookies" }
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
          <h1 className="mt-4 text-display-lg font-bold">Cookie & Tracking Technologies Policy</h1>
        </div>
      </section>

      <section className="section">
        <article className="container-prose prose prose-slate max-w-3xl">
          <div className="text-sm text-brand-ink-mute mb-8">
            <p>Version 1.0</p>
            <p>Last Updated: July 10, 2026</p>
          </div>
          <h2>Purpose</h2>
          <p>This Policy explains how Langford Staffing may use cookies and similar technologies on its website. It also explains the choices available to website visitors.</p>
          <h2>What Cookies Are</h2>
          <p>Cookies are small text files that a website may place on a computer, phone or other device. They can help a website function, remember preferences, improve performance and understand how visitors use the site.</p>
          <h2>Similar Technologies</h2>
          <p>In addition to cookies, websites may use technologies such as pixels, tags, local storage, session storage and similar tools. In this Policy, the word cookies includes these similar technologies where appropriate.</p>
          <h2>How We May Use Cookies</h2>
          <h2>Langford Staffing may use cookies to:</h2>
          <ul>
            <li>Keep the website functioning properly.</li>
            <li>Maintain website security and prevent misuse.</li>
            <li>Remember visitor preferences.</li>
            <li>Understand website traffic and performance.</li>
            <li>Identify technical problems.</li>
            <li>Improve website navigation and content.</li>
            <li>Measure the effectiveness of communications or advertising, where used.</li>
          </ul>
          <h2>Types of Cookies</h2>
          <h2>Cookies may fall into the following categories:</h2>
          <ul>
            <li>Strictly necessary cookies. These support basic website operation, security, session management and privacy preferences.</li>
            <li>Functional cookies. These remember choices such as language or display preferences.</li>
            <li>Analytics cookies. These help us understand how visitors use the website and where improvements may be needed.</li>
            <li>Advertising or measurement cookies. Where used, these may help measure campaigns or provide more relevant content.</li>
          </ul>
          <h2>Strictly Necessary Cookies</h2>
          <p>Strictly necessary cookies may be used where they are needed for the website to operate or to provide a feature requested by the visitor. Blocking these cookies may cause parts of the website to function incorrectly.</p>
          <h2>Analytics and Performance</h2>
          <p>Langford Staffing may use analytics tools to understand general website usage, page visits, device or browser type, errors and performance. Where consent is required by law, non-essential analytics technologies should not be activated until the visitor has made a choice.</p>
          <h2>Advertising and Marketing Technologies</h2>
          <p>Langford Staffing may use advertising or campaign-measurement technologies from time to time. Where applicable law requires consent or an opt-out, the website should provide the appropriate choice.</p>
          <h2>Third-Party Services</h2>
          <p>Some website features may be provided by third parties, such as video, maps, forms, analytics or social media content. Those providers may use their own cookies or similar technologies and may process information under their own privacy policies.</p>
          <h2>Cookie Choices</h2>
          <p>Where a cookie preference tool is available, visitors can use it to accept, reject or change their choices for non-essential cookies. Visitors may also be able to control cookies through their browser settings.</p>
          <h2>Browser Controls</h2>
          <p>Most browsers allow users to view, block or delete cookies. Browser settings vary. Disabling cookies may affect website functionality or prevent some features from working properly.</p>
          <h2>Do Not Track and Privacy Signals</h2>
          <p>Some browsers offer Do Not Track or other privacy preference signals. Langford Staffing will respond to legally recognized signals where required and technically supported. Not all browsers, signals or jurisdictions operate in the same way.</p>
          <h2>Cookie Duration</h2>
          <p>Some cookies last only for the current browser session. Others remain on the device for a longer period. The duration depends on the purpose of the cookie and the settings used by the website or third-party provider.</p>
          <h2>Cookie Inventory</h2>
          <p>Langford Staffing should maintain a current list of cookies and similar technologies used on the website. The list should identify the cookie or technology name, provider, purpose, category and approximate duration.</p>
          <h2>Information Collected Through Cookies</h2>
          <p>Depending on the technology used, cookies may collect or generate information such as browser type, device type, operating system, IP address, approximate location, pages viewed, links selected, date and time of visits, referral source and website performance information.</p>
          <h2>How Information Is Used</h2>
          <p>Information collected through cookies may be used to operate the website, maintain security, understand usage, improve performance, support communications and comply with legal obligations.</p>
          <h2>Sharing</h2>
          <p>Information collected through cookies may be processed by service providers that support website hosting, analytics, communications, security or advertising. Langford Staffing does not sell personal information.</p>
          <h2>Security</h2>
          <p>Langford Staffing uses administrative, technical and organizational measures intended to help protect information collected through the website. We do not claim that every item of website data is encrypted, that multi-factor authentication is used in every system, or that Langford Staffing holds ISO 27001, SOC 2 or similar certifications unless those statements become accurate.</p>
          <h2>Changes to This Policy</h2>
          <p>Langford Staffing may update this Policy when website features, providers, technologies or legal requirements change. The current version and last updated date will be posted on this page.</p>
          <h2>Contact</h2>
          <p>For questions about cookies or website privacy, please contact the Privacy Office using the contact information published on the Contact Privacy Office page.</p>
          <h2>Related Policies</h2>
          <p><Link href="/privacy">/privacy</Link></p>
          <p><Link href="/privacy/general">/privacy/general</Link></p>
          <p><Link href="/privacy/candidate">/privacy/candidate</Link></p>
          <p><Link href="/privacy/ai">/privacy/ai</Link></p>
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

import type { Metadata } from "next";
import { BRAND, NAP } from "@/lib/constants";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Responsible AI & AI-Assisted Recruitment Policy | Privacy & Trust Centre",
  description: "Responsible AI & AI-Assisted Recruitment Policy for Langford Staffing."
};

export default function Page() {
  return (
    <>
      <SchemaJsonLd
        data={breadcrumbSchema([
          { name: "Home", url: NAP.websiteUrl + "/" },
          { name: "Privacy & Trust Centre", url: NAP.websiteUrl + "/privacy/" },
          { name: "Responsible AI & AI-Assisted Recruitment Policy", url: NAP.websiteUrl + "/privacy/ai" }
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
          <h1 className="mt-4 text-display-lg font-bold">Responsible AI & AI-Assisted Recruitment Policy</h1>
        </div>
      </section>

      <section className="section">
        <article className="container-prose prose prose-slate max-w-3xl">
          <div className="text-sm text-brand-ink-mute mb-8">
            <p>Version 1.0</p>
            <p>Last Updated: July 10, 2026</p>
          </div>
          <h2>Purpose</h2>
          <p>This Policy explains how Langford Staffing may use artificial intelligence and other technology to support recruitment. It is intended to give candidates clear information about what the technology may do, what it does not do, how people remain involved, and how candidates can raise questions or concerns.</p>
          <h2>Scope</h2>
          <p>This Policy applies to applicants, interview participants, referred candidates, prospective contractors and other individuals being considered for employment, temporary work, contract work or similar opportunities through Langford Staffing.</p>
          <h2>Our Approach to AI</h2>
          <p>Langford Staffing may use AI-assisted tools to help recruiters and hiring managers organize and review information more efficiently. AI is used as a support tool. It does not replace the judgment of authorized people responsible for recruitment decisions.</p>
          <h2>How AI May Assist Recruitment</h2>
          <p>Depending on the position and recruitment process, AI-assisted tools may be used to:</p>
          <ul>
            <li>Create a written transcript of recorded interview responses.</li>
            <li>Summarize candidate answers.</li>
            <li>Organize responses by question or job-related topic.</li>
            <li>Identify information in a candidate&apos;s answer that may relate to experience, skills or qualifications.</li>
            <li>Help recruiters identify information that may require follow-up or clarification.</li>
            <li>Support administrative tasks such as organizing applications or interview records.</li>
          </ul>
          <p>The exact use may vary depending on the role and the systems being used.</p>
          <h2>Recorded Interviews</h2>
          <p>Some recruitment processes may include recorded video or audio interviews. Candidates will be informed before a recorded interview begins.</p>
          <p>Recorded interviews may be reviewed by authorized recruiters, hiring managers and other personnel involved in the recruitment process. A transcript or summary may also be created to help with review.</p>
          <h2>Human Review and Decision-Making</h2>
          <p>Hiring decisions are made by authorized people.</p>
          <p>Recruiters and hiring managers review relevant candidate information before a decision is made. AI-generated transcripts, summaries, suggested observations or other outputs are considered supporting information only. Human reviewers are expected to consider the candidate&apos;s actual application, interview responses, qualifications and the requirements of the role.</p>
          <h2>What We Do Not Use AI For</h2>
          <h2>Our standard recruitment process does not use AI to:</h2>
          <ul>
            <li>Make final hiring decisions without human involvement.</li>
            <li>Identify candidates through facial recognition.</li>
            <li>Evaluate facial expressions.</li>
            <li>Analyze emotions.</li>
            <li>Conduct lie detection.</li>
            <li>Perform voice-stress analysis.</li>
            <li>Judge candidates based on attractiveness, clothing, room background or camera quality.</li>
            <li>Rank candidates using race, religion, disability, age, gender or other legally protected characteristics.</li>
          </ul>
          <h2>Accuracy and Limitations</h2>
          <p>AI-assisted tools can make mistakes. For example, a transcript may incorrectly capture a name, technical term, accent or phrase. A summary may omit context or misunderstand part of an answer.</p>
          <p>For this reason, AI output should not be treated as automatically correct. Authorized reviewers are expected to consider the underlying response and use their own judgment.</p>
          <h2>Candidate Questions and Corrections</h2>
          <p>A candidate who believes that a transcript or AI-generated summary materially misrepresents an answer may contact the recruiter or Privacy Office.</p>
          <p>Where reasonably possible and relevant to an active recruitment process, Langford Staffing may review the original recording or response, correct a material error, add a clarification or ensure that the reviewer considers the original answer.</p>
          <h2>Accessibility and Accommodation</h2>
          <p>Candidates who require reasonable accommodation during an interview or assessment are encouraged to contact the recruiter before beginning the relevant step.</p>
          <p>A candidate may request an alternative format, additional time, accessible instructions or another reasonable adjustment where appropriate. Requesting accommodation will not be treated as a negative factor in the hiring process.</p>
          <h2>Information We May Process</h2>
          <p>AI-assisted recruitment tools may process information that the candidate has provided, such as:</p>
          <ul>
            <li>Resume or application information.</li>
            <li>Recorded interview answers.</li>
            <li>Written interview responses.</li>
            <li>Interview transcripts.</li>
            <li>Job-related questions and evaluation criteria.</li>
            <li>Administrative information such as the question number, completion status or interview date.</li>
          </ul>
          <p>Candidates should avoid including unrelated sensitive personal information in interview answers unless it is necessary for the recruitment process.</p>
          <h2>Service Providers</h2>
          <p>Langford Staffing may use third-party technology providers to support recorded interviews, transcription, recruitment administration or AI-assisted analysis.</p>
          <p>These providers may process candidate information as part of delivering their services. Langford Staffing expects providers to handle information confidentially and only for authorized purposes. Candidate information is not sold by Langford Staffing.</p>
          <h2>Model Training and Secondary Use</h2>
          <p>Langford Staffing does not use candidate interviews, transcripts, resumes or assessment materials to train public or general-purpose AI models.</p>
          <p>Candidate information is used for recruitment and related administrative, legal, security and recordkeeping purposes as described in our Candidate Privacy Policy.</p>
          <h2>Information Security</h2>
          <p>Langford Staffing uses administrative, technical and organizational measures intended to help protect candidate information and limit access to authorized personnel.</p>
          <p>We do not claim that every item of information is encrypted, that multi-factor authentication is used in every system, that formal penetration testing is performed, or that Langford Staffing holds ISO 27001, SOC 2 or similar certifications unless and until those statements become accurate.</p>
          <h2>Retention</h2>
          <p>Candidate recordings, transcripts, summaries and related recruitment information are retained only for as long as reasonably necessary for recruitment, legal, operational, security or recordkeeping purposes.</p>
          <p>Retention periods may vary depending on the type of record, the location of the candidate, whether the candidate is hired, and whether there is an active complaint, investigation or legal requirement.</p>
          <h2>Privacy Rights</h2>
          <p>Depending on applicable law, candidates may have the right to:</p>
          <ul>
            <li>Request access to personal information.</li>
            <li>Request correction of inaccurate information.</li>
            <li>Request deletion where available.</li>
            <li>Withdraw consent where consent is the basis for processing.</li>
            <li>Ask questions about how AI-assisted tools are used.</li>
            <li>Raise a concern about a transcript, summary or recruitment process.</li>
            <li>Request human review where required by law.</li>
          </ul>
          <h2>No Retaliation</h2>
          <p>Langford Staffing will not retaliate against a candidate for asking how AI is used, raising a privacy concern, requesting accommodation or exercising a legal right in good faith.</p>
          <h2>Contact</h2>
          <p>For questions about AI-assisted recruitment, candidate privacy or a transcript or summary, please contact the Privacy Office using the contact information published on the Contact Privacy Office page.</p>
          <h2>Related Policies</h2>
          <p><Link href="/privacy">/privacy</Link></p>
          <p><Link href="/privacy/general">/privacy/general</Link></p>
          <p><Link href="/privacy/candidate">/privacy/candidate</Link></p>
          <p><Link href="/privacy/cookies">/privacy/cookies</Link></p>
          <p><Link href="/privacy/security">/privacy/security</Link></p>
          <p><Link href="/privacy/retention">/privacy/retention</Link></p>
          <p><Link href="/privacy/accessibility">/privacy/accessibility</Link></p>
          <p><Link href="/privacy/terms">/privacy/terms</Link></p>
          <p><Link href="/privacy/contact">/privacy/contact</Link></p>
          <p>Questions?</p>
          <p>For questions about this Policy or Langford Staffing&apos;s use of AI-assisted recruitment tools, please visit the Contact Privacy Office page.</p>
        </article>
      </section>
    </>
  );
}

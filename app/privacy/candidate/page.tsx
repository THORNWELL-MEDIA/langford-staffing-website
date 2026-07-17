import type { Metadata } from "next";
import { BRAND, NAP } from "@/lib/constants";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Candidate Privacy Policy | Privacy & Trust Centre",
  description: "Candidate Privacy Policy for Langford Staffing."
};

export default function Page() {
  return (
    <>
      <SchemaJsonLd
        data={breadcrumbSchema([
          { name: "Home", url: NAP.websiteUrl + "/" },
          { name: "Privacy & Trust Centre", url: NAP.websiteUrl + "/privacy/" },
          { name: "Candidate Privacy Policy", url: NAP.websiteUrl + "/privacy/candidate" }
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
          <h1 className="mt-4 text-display-lg font-bold">Candidate Privacy Policy</h1>
        </div>
      </section>

      <section className="section">
        <article className="container-prose prose prose-slate max-w-3xl">
          <h2>Candidate Privacy Policy</h2>
          <div className="text-sm text-brand-ink-mute mb-8">
            <p>Version 1.0</p>
            <p>Last updated July 9, 2026</p>
          </div>
          <p>Langford Staffing uses candidate information to conduct a fair, secure and effective recruitment process; technology may help transcribe, organize and analyze job-related answers, but qualified human personnel remain responsible for meaningful review and employment decisions.</p>

          <h2>Candidate Privacy at a Glance</h2>
          <p>You will be told before an interview is recorded or materially analyzed using artificial intelligence.</p>
          <p>Recorded answers may be transcribed, summarized and organized to help authorized recruiters and hiring managers review job-related information.</p>
          <p>Langford Staffing does not authorize AI to make the final decision to hire or reject a candidate.</p>
          <p>A human recruiter and, where appropriate, the hiring manager review the candidate’s qualifications and interview information.</p>
          <p>Our standard process does not use facial recognition, emotion recognition, lie detection, voice-stress analysis or personality inference from appearance, gaze, accent or tone.</p>
          <p>We do not sell candidate personal information or use it for unrelated advertising.</p>
          <p>We do not authorize candidate interview content to be used to train public or general-purpose AI models.</p>
          <p>Access is limited to authorized personnel and approved providers that need the information for recruitment, security, legal compliance or system administration.</p>
          <p>You may ask questions, request correction of materially inaccurate information and exercise applicable privacy rights without retaliation.</p>
          <p>Reasonable accommodation and accessible alternatives are available throughout recruitment.</p>
          <h2>Contents</h2>
          <h4>1. Purpose and Our Commitment</h4>
          <h4>2. Scope</h4>
          <h4>3. Who Is Responsible for Candidate Information</h4>
          <h4>4. Definitions</h4>
          <h4>5. Our Candidate Privacy Principles</h4>
          <h4>6. Recruitment Lifecycle</h4>
          <h4>7. Information We Collect</h4>
          <h4>8. Sensitive Information and Protected Characteristics</h4>
          <h4>9. Information We Ask You Not to Provide</h4>
          <h4>10. Sources of Candidate Information</h4>
          <h4>11. Why We Use Candidate Information</h4>
          <h4>12. Legal Bases and Consent</h4>
          <h4>13. Recorded Interviews</h4>
          <h4>14. AI-Assisted Recruitment</h4>
          <h4>15. Prohibited AI and Automated Practices</h4>
          <h4>16. Human Review and Decision-Making</h4>
          <h4>17. Structured Assessments and Scoring</h4>
          <h4>18. Public and Professional Information</h4>
          <h4>19. Reference Checks</h4>
          <h4>20. Background and Eligibility Checks</h4>
          <h4>21. Equal Opportunity and Demographic Information</h4>
          <h4>22. Accessibility and Accommodation</h4>
          <h4>23. Candidate Communications</h4>
          <h4>24. Sharing and Disclosure</h4>
          <h4>25. Recruitment Technology Providers</h4>
          <h4>26. International Processing and Transfers</h4>
          <h4>27. Security and Confidentiality</h4>
          <h4>28. Retention, Deletion and Anonymization</h4>
          <h4>29. Candidate Rights</h4>
          <h4>30. Transcript Corrections and Context Statements</h4>
          <h4>31. Human Reconsideration and Appeal</h4>
          <h4>32. Withdrawing an Application or Talent-Pool Permission</h4>
          <h4>33. Complaints and Non-Retaliation</h4>
          <h4>34. Canada Supplement</h4>
          <h4>35. European Economic Area Supplement</h4>
          <h4>36. United Kingdom Supplement</h4>
          <h4>37. United States Supplement</h4>
          <h4>38. Minors</h4>
          <h4>39. Changes to This Policy</h4>
          <h4>40. Contact the Privacy Office</h4>
          <h4>41. Frequently Asked Questions</h4>
          <h4>Appendix A. Pre-Interview Notice and Acknowledgement</h4>
          <h4>Appendix B. Candidate Rights Request Form</h4>
          <h4>Appendix C. Detailed Candidate Retention Schedule</h4>
          <h4>Appendix D. Public Governance Commitments</h4>
          <h4>Appendix E. Official Legal and Regulatory References</h4>
          <h2>1. Purpose and Our Commitment</h2>
          <p>Langford Staffing believes that candidates should understand how their information is handled before they are asked to provide it. This Candidate Privacy Policy explains, in detailed and practical terms, how we collect, use, disclose, analyze, protect, retain and delete personal information throughout the recruitment process.</p>
          <p>We recognize that an application may contain a substantial amount of personal and professional information and that a recorded interview can be especially sensitive. Our objective is to use that information only for legitimate, identified and job-related purposes, with appropriate human accountability, confidentiality and security.</p>
          <p>This Policy is intended to operate together with our General Privacy Policy, Responsible AI and AI-Assisted Recruitment Policy, Security and Information Protection Policy, Data Retention and Secure Disposal Policy, Accessibility Statement and Privacy Office procedures. Where a more specific notice applies to a particular assessment, jurisdiction or provider, that notice supplements this Policy.</p>
          <h2>OUR COMMITMENT</h2>
          <p>We will not treat candidate privacy as a formality. We will seek to ensure that the public statements in this Policy are supported by actual controls, assigned responsibility, documented procedures and enforceable provider obligations.</p>
          <h2>2. Scope</h2>
          <p>This Policy applies to individuals considered for employment, temporary placement, contract work, consulting, internship, secondment, advisory work, board service or another work-related opportunity administered by Langford Staffing or an affiliated organization that expressly adopts this Policy.</p>
          <h2>It covers:</h2>
          <ul>
            <li>external applicants who submit an application directly;</li>
            <li>internal candidates applying for another role;</li>
            <li>individuals identified or contacted by a recruiter;</li>
            <li>candidates referred by an employee, client, professional contact or agency;</li>
            <li>candidates who participate in an interview, recorded interview, assessment or work sample;</li>
            <li>individuals considered for a client placement or assignment; and</li>
            <li>former candidates whose information is retained for a future opportunity with their permission or as otherwise permitted by law.</li>
          </ul>
          <p>This Policy does not govern the ongoing handling of employee information after employment begins. Hired candidates will receive the applicable employee, contractor or workforce privacy notice.</p>
          <h2>3. Who Is Responsible for Candidate Information</h2>
          <p>The organization advertising, administering or offering the opportunity will ordinarily be responsible for determining why and how candidate information is processed. Depending on the engagement, Langford Staffing may act as an employer, staffing agency, recruitment administrator, service provider, processor or joint participant with a client or affiliated organization.</p>
          <p>Where Langford Staffing recruits for another organization, the job posting, application page, recruiter communication or additional notice may identify that organization and explain the respective responsibilities. Each organization may have independent legal obligations and may provide its own privacy notice.</p>
          <p>The Langford Staffing Privacy Office coordinates candidate privacy governance, rights requests and complaints. Contact information appears in Section 40.</p>
          <h2>4. Definitions</h2>
          <table>
            <thead><tr><th>Term</th><th>Meaning</th></tr></thead>
            <tbody>
              <tr><td>AI-assisted recruitment</td><td>Use of artificial intelligence, machine learning, language models, automated rules or related technology to support a recruitment activity such as transcription, summarization, organization, evidence extraction or structured analysis.</td></tr>
              <tr><td>Candidate information</td><td>Personal information or personal data relating to an identified or reasonably identifiable applicant, prospective candidate, internal candidate, referee or other person involved in recruitment.</td></tr>
              <tr><td>Human reviewer</td><td>An authorized recruiter, hiring manager, human resources professional, department leader, compliance representative or other person responsible for meaningful recruitment review.</td></tr>
              <tr><td>Personal information / personal data</td><td>Information that identifies, relates to, describes or can reasonably be linked to an individual, as defined by applicable law.</td></tr>
              <tr><td>Recorded interview</td><td>An asynchronous or live interview captured in video, audio or another recorded format.</td></tr>
              <tr><td>Sensitive information</td>
                <td>Information that presents heightened privacy or discrimination risk, including certain government identifiers, financial details, precise location, health or disability information, biometric data, racial or ethnic origin, religious beliefs, sexual orientation, union membership, criminal-history information or other categories protected by law.</td></tr>
              <tr><td>Service provider</td>
                <td>A company or person that processes candidate information to provide recruitment, hosting, communications, assessment, security, identity, screening, analytics or administrative services under contractual restrictions.</td></tr>
              <tr>
                <td>Solely automated decision</td>
                <td>A decision made without meaningful human involvement that produces legal or similarly significant effects for the individual.</td></tr>
            </tbody>
          </table>


          <h2>5. Our Candidate Privacy Principles</h2>
          <table>
            <thead><tr><th>Principle</th><th>What it means in practice</th></tr></thead>
            <tbody>
              <tr><td>Accountability</td><td>We assign responsibility for recruitment privacy and maintain policies, procedures, access controls, contracts and review mechanisms.</td></tr>
              <tr><td>Transparency</td><td>We explain material collection, recording, AI assistance, sharing, retention and candidate rights in understandable language.</td></tr>
              <tr><td>Job-related purpose</td><td>We use candidate information to evaluate qualifications and administer recruitment, not to investigate unrelated aspects of a candidate’s private life.</td></tr>
              <tr>
                <td>Data minimization</td>
                <td>We seek only information reasonably necessary for the role, recruitment stage, legal obligation or legitimate security need.</td></tr>
              <tr>
                <td>Human responsibility</td>
                <td>Authorized people remain accountable for interpreting candidate information and making employment decisions.</td>
              </tr>
              <tr><td>Fairness and non-discrimination</td>
                <td>We prohibit the use of protected characteristics and inappropriate proxies to rank or disadvantage candidates.</td>
              </tr>
              <tr><td>Accuracy and context</td>
                <td>We provide practical ways to correct material errors and add relevant context.</td>
              </tr>
              <tr><td>Security and confidentiality</td>
                <td>We use safeguards proportionate to the sensitivity of candidate records.</td>
              </tr>
              <tr>
                <td>Retention limitation</td>
                <td>We maintain defined retention periods and delete or de-identify information when it is no longer required.</td>
              </tr>
              <tr>
                <td>Individual participation</td>
                <td>Candidates may ask questions, exercise applicable rights and raise concerns without retaliation.</td>
              </tr>
            </tbody>
          </table>
          <h2>6. Recruitment Lifecycle</h2>
          <p>Candidate information may be handled at different stages of recruitment. Not every stage applies to every candidate or role.</p>
          <table>
            <thead>
              <tr>
                <th>Stage</th>
                <th>Typical activity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Sourcing and outreach</td>
                <td>Review of public professional information, referrals, job-board profiles or agency submissions to identify potentially suitable candidates.</td>
              </tr>
              <tr>
                <td>Application</td>
                <td>Collection of contact details, resume/CV, professional history, eligibility and voluntary supporting materials.</td>
              </tr>
              <tr>
                <td>Initial screening</td>
                <td>Human review of minimum job-related requirements and, where used, technology-assisted organization or summarization.</td>
              </tr>
              <tr>
                <td>Interview</td>
                <td>Live or recorded questions, answers, notes, transcripts and structured evaluation.</td>
              </tr>
              <tr>
                <td>Assessment</td>
                <td>Work sample, writing task, role simulation, skills assessment or other job-related exercise.</td>
              </tr>
              <tr>
                <td>Verification</td>
                <td>References, credentials, work authorization and lawful background screening, where appropriate.</td>
              </tr>
              <tr>
                <td>Decision and offer</td>
                <td>Comparison of job-related evidence, approval workflow, compensation discussion and conditional offer administration.</td>
              </tr>
              <tr>
                <td>Onboarding or closure</td>
                <td>Transfer of selected records to the workforce file, or retention/deletion of unsuccessful candidate records under the retention schedule.</td>
              </tr>
              <tr>
                <td>Future opportunities</td>
                <td>Optional retention in a talent pool or consideration for another suitable role, subject to preferences and applicable law.</td>
              </tr>
            </tbody>
          </table>
          <h2>7. Information We Collect</h2>
          <p>The categories collected depend on the role, location, recruitment stage and information the candidate chooses to provide. We do not necessarily collect every category from every candidate.</p>
          <table>
            <thead>
              <tr>
                <th>Category</th>
                <th>Examples</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Identity and contact</td>
                <td>Name, preferred name, contact details, address or region, time zone, communication preferences and professional profile links.</td>
              </tr>
              <tr>
                <td>Application and professional history</td>
                <td>Resume/CV, cover letter, portfolio, work history, responsibilities, accomplishments, education, licences, certifications, professional memberships, languages and skills.</td>
              </tr>
              <tr>
                <td>Role and eligibility</td>
                <td>Availability, preferred work location, compensation expectations, work authorization, visa or sponsorship needs, travel ability and role-specific eligibility.</td>
              </tr>
              <tr>
                <td>Recruitment communications</td>
                <td>Emails, messages, call notes, scheduling records, questions, feedback and correspondence with recruiters or hiring personnel.</td>
              </tr>
              <tr>
                <td>Interview content</td>
                <td>Video, audio, written or spoken answers, question responses, timestamps, completion status and technical-quality information.</td>
              </tr>
              <tr>
                <td>Transcript and derived recruitment records</td>
                <td>Speech-to-text transcript, answer summary, structured notes, job-related evidence, competency observations, rubric results and follow-up items.</td>
              </tr>
              <tr>
                <td>Assessment information</td>
                <td>Work samples, tests, simulations, presentations, case exercises, coding tasks, writing samples and assessor comments.</td>
              </tr>
              <tr>
                <td>Reference and verification</td>
                <td>Reference contact details, reference feedback, credential verification and employment-history confirmation.</td>
              </tr>
              <tr>
                <td>Background and compliance</td>
                <td>Lawfully requested criminal-history, driving, credit, sanctions, conflict, licence or other screening information for roles where relevant and permitted.</td>
              </tr>
              <tr>
                <td>Accessibility and accommodation</td>
                <td>Information necessary to arrange a reasonable accommodation or accessible alternative.</td>
              </tr>
              <tr>
                <td>Equal opportunity and demographic</td>
                <td>Voluntary or legally required demographic information used for equal-opportunity reporting, monitoring or compliance, ordinarily separated from routine decision-makers where practicable.</td>
              </tr>
              <tr>
                <td>Technical and security</td>
                <td>IP address, browser, device, operating system, authentication events, audit logs, approximate region, error records and indicators of fraud or misuse.</td>
              </tr>
              <tr>
                <td>Consent and governance</td>
                <td>Acknowledgements, permissions, notices presented, privacy requests, complaints, appeals and compliance records.</td>
              </tr>
            </tbody>
          </table>
          <h2>8. Sensitive Information and Protected Characteristics</h2>
          <p>We collect sensitive information only where necessary, proportionate and lawful. Examples may include accommodation information, government identifiers needed for work authorization, criminal-history information for a legally permitted background check, or demographic information used for lawful equal-opportunity purposes.</p>
          <p>Sensitive information is subject to additional controls, which may include separate storage, restricted access, shorter retention, stronger verification, encryption, limited disclosure and documented legal review.</p>
          <p>Protected characteristics are not used to rank candidates or determine suitability, except where a specific lawful requirement applies. Demographic information collected for monitoring or reporting should not be made available to routine hiring decision-makers unless access is legally required and appropriate.</p>
          <h2>9. Information We Ask You Not to Provide</h2>
          <h2>PLEASE DO NOT INCLUDE UNNECESSARY SENSITIVE INFORMATION</h2>
          <p>An application or interview should focus on your professional qualifications. Providing unrelated sensitive information may create privacy and fairness risks and is not necessary for a standard application.</p>
          <ul>
            <li>passwords, authentication codes or security answers;</li>
            <li>full bank account or payment-card information;</li>
            <li>a Social Insurance Number, Social Security number or equivalent identifier before it is legitimately required for a later verification or onboarding step;</li>
            <li>detailed medical records when a limited description of an accommodation need is sufficient;</li>
            <li>information about race, religion, disability, sexual orientation, family status, political beliefs or another protected characteristic unless requested for a lawful and identified purpose;</li>
            <li>confidential, proprietary or personal information belonging to a current or former employer, client or third party;</li>
            <li>information about another person without authority to provide it; or</li>
            <li>anything unrelated to the role that you do not want considered.</li>
          </ul>
          <h2>10. Sources of Candidate Information</h2>
          <ul>
            <li>directly from you through an application, interview, assessment, communication or privacy request;</li>
            <li>from an employee, client, professional contact or other person who refers you;</li>
            <li>from recruitment agencies, staffing partners, job boards, professional networks and career platforms;</li>
            <li>from references, educational institutions, credentialing bodies and screening providers, with authorization where required;</li>
            <li>from public professional sources reasonably relevant to recruitment, such as a professional profile, portfolio, company biography, publication or licensing register;</li>
            <li>from an affiliated organization or client participating in the same recruitment process; and</li>
            <li>automatically from recruitment websites and systems through operational, security and audit logs.</li>
          </ul>
          <p>We do not authorize recruiters to circumvent privacy settings, create a false identity, obtain information through deception or seek access to private social-media content.</p>
          <h2>11. Why We Use Candidate Information</h2>
          <ul>
            <li>receive, acknowledge, organize and administer an application;</li>
            <li>communicate with candidates and schedule recruitment activities;</li>
            <li>confirm identity, qualifications, experience, availability and work eligibility;</li>
            <li>conduct and review interviews and job-related assessments;</li>
            <li>record an interview after notice and applicable consent;</li>
            <li>create transcripts, summaries and structured review materials;</li>
            <li>compare job-related evidence with published or approved role requirements;</li>
            <li>support consistent evaluation by recruiters and hiring managers;</li>
            <li>identify questions or information requiring human follow-up;</li>
            <li>make, document and communicate recruitment, shortlisting, interview, offer or placement decisions;</li>
            <li>provide reasonable accommodation and accessible participation;</li>
            <li>conduct lawful references, credential checks and background screening;</li>
            <li>prevent fraud, impersonation, misuse, security incidents and unauthorized access;</li>
            <li>operate, troubleshoot, audit and improve recruitment systems and workflows;</li>
            <li>measure recruitment quality and candidate experience using aggregated or appropriately de-identified information where practicable;</li>
            <li>comply with employment, human-rights, accessibility, immigration, privacy, recordkeeping and other legal obligations;</li>
            <li>establish, exercise or defend legal claims and respond to lawful regulatory requests;</li>
            <li>consider a candidate for another role where permitted and consistent with the candidate’s preferences.</li>
          </ul>
          <h2>12. Legal Bases and Consent</h2>
          <p>The legal basis for processing depends on the jurisdiction, the role and the specific activity. We may rely on one or more of the following:</p>
          <table>
            <thead>
              <tr>
                <th>Legal ground</th>
                <th>Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Steps requested before a contract</td>
                <td>Processing an application, communicating about a role and evaluating whether to make an offer or placement.</td>
              </tr>
              <tr>
                <td>Legitimate interests</td>
                <td>Operating an effective, secure and fair recruitment process; documenting decisions; preventing fraud; and planning workforce needs, after considering candidate rights and reasonable expectations.</td>
              </tr>
              <tr>
                <td>Consent</td>
                <td>Recording an interview, processing certain optional or sensitive information, retaining a profile for future roles, or another activity where consent is legally required or appropriate.</td>
              </tr>
              <tr>
                <td>Legal obligation</td>
                <td>Employment eligibility, accessibility, equal opportunity, regulatory reporting, litigation hold and recordkeeping duties.</td>
              </tr>
              <tr>
                <td>Employment and social-protection law</td>
                <td>Processing necessary to exercise rights or meet obligations in employment, social security or social protection law, where applicable.</td>
              </tr>
              <tr>
                <td>Legal claims</td>
                <td>Preserving or using information necessary to establish, exercise or defend a claim.</td>
              </tr>
              <tr>
                <td>Other lawful grounds</td>
                <td>A ground recognized by applicable law for the specific activity and jurisdiction.</td>
              </tr>
            </tbody>
          </table>
          <p>Where consent is requested, we aim to explain the nature, purpose and reasonably foreseeable consequences of the processing. Consent may be withdrawn prospectively where consent is the applicable basis. Withdrawal does not affect processing already lawfully completed and may make it impossible to continue a recruitment step if the information is genuinely necessary and no reasonable alternative is available.</p>
          <p>We do not treat consent as a substitute for fairness, security, necessity or compliance with other legal requirements.</p>
          <h2>13. Recorded Interviews</h2>
          <p>Some roles use an asynchronous or live recorded interview. Before recording begins, the candidate will be informed that video and/or audio will be recorded and that the recording may be transcribed and analyzed for job-related content.</p>
          <h2>A recorded interview may be used to:</h2>
          <ul>
            <li>allow a candidate to respond at an available time;</li>
            <li>present standardized questions consistently;</li>
            <li>preserve the candidate’s complete answer for authorized human review;</li>
            <li>generate a transcript and reduce reliance on incomplete handwritten notes;</li>
            <li>support review by a recruiter and the relevant hiring manager;</li>
            <li>identify job-related statements requiring follow-up; and</li>
            <li>maintain an auditable recruitment record.</li>
          </ul>
          <p>Recorded content may include the candidate’s image, voice, answers, transcript, timestamps, completion data, technical-quality information, reviewer notes and job-related observations. It may also include AI-generated summaries or suggested evidence that remain subject to human verification.</p>
          <h2>NO COVERT RECORDING</h2>
          <p>Langford Staffing does not authorize an interview to be intentionally recorded without notice to the candidate. Recording must not begin until the required notice is presented and any legally required permission is obtained.</p>
          <p>Reviewers must not download, copy, screenshot, publish, transmit or use recordings for personal or unrelated purposes. Any download or export must be authorized, necessary and protected under the same confidentiality and retention rules as the source system.</p>
          <h2>14. AI-Assisted Recruitment</h2>
          <p>Langford Staffing uses artificial intelligence as a support tool in parts of recruitment. Based on the approved workflow, AI may assist with:</p>
          <ul>
            <li>converting spoken interview answers into text;</li>
            <li>summarizing a candidate’s answer in a concise form;</li>
            <li>organizing responses under the corresponding interview question;</li>
            <li>identifying statements relevant to approved job requirements or competencies;</li>
            <li>mapping evidence from the candidate’s own words to a structured evaluation rubric;</li>
            <li>identifying missing or unclear information for human follow-up;</li>
            <li>supporting administrative completeness checks;</li>
            <li>routing information to authorized reviewers; and</li>
            <li>creating aggregated workflow or quality metrics where privacy risks are controlled.</li>
          </ul>
          <p>The AI output is not treated as verified fact. A transcript can contain errors. A summary can omit context. A model can generate an unsupported inference. Authorized human reviewers are expected to examine the underlying candidate materials, correct or disregard unreliable output and apply their own professional judgment.</p>
          <p>For a fuller explanation of AI governance, prohibited uses, human oversight and candidate challenge rights, see our Responsible AI and AI-Assisted Recruitment Policy at /privacy/ai.</p>
          <h2>15. Prohibited AI and Automated Practices</h2>
          <p>Unless a separate, specific notice is provided and the activity has been approved as lawful and necessary, Langford Staffing does not authorize its standard recruitment process to:</p>
          <ul>
            <li>make the final decision to hire, reject, compensate or place a candidate without meaningful human involvement;</li>
            <li>identify or verify a candidate through facial recognition or voice biometrics;</li>
            <li>infer emotion, honesty, mental state, medical condition or personality from facial movement, gaze, voice, accent, tone or physical appearance;</li>
            <li>perform lie detection, deception scoring or voice-stress analysis;</li>
            <li>score attractiveness, clothing, home background, camera quality or physical presentation unrelated to the role;</li>
            <li>use race, colour, ethnicity, national origin, citizenship, religion, sex, pregnancy, sexual orientation, gender identity, age, disability, family status, genetic information, union activity or another protected characteristic to rank a candidate;</li>
            <li>use a protected characteristic through an inappropriate proxy;</li>
            <li>automatically reject a candidate because of accent, grammar, speech pattern, assistive-technology use, eye contact, motor movement or disability-related behaviour;</li>
            <li>automatically reject a candidate solely because a keyword is absent from a resume or answer;</li>
            <li>scrape private or unrelated personal information;</li>
            <li>sell candidate recordings, transcripts, summaries or profiles;</li>
            <li>use candidate information for cross-context behavioural advertising; or</li>
            <li>use candidate interview content to train a public or general-purpose artificial intelligence model.</li>
          </ul>
          <h2>MATERIAL CHANGE RULE</h2>
          <p>If Langford Staffing proposes to introduce a materially different AI use—especially biometric, emotional, behavioural or solely automated analysis—the use must undergo privacy, legal, security, accessibility and fairness review before deployment, and candidates must receive any additional notice, consent or choice required by law.</p>
          <h2>16. Human Review and Decision-Making</h2>
          <p>Every employment decision is the responsibility of authorized human personnel. Depending on the role and stage, review may involve a recruiter, hiring manager, department leader, human resources professional, compliance representative or executive.</p>
          <p>Meaningful human review means that the reviewer has access to relevant source information, sufficient time and authority to evaluate it, training on the limitations of technology, and practical ability to disagree with or override an automated recommendation.</p>
          <h2>Human reviewers are expected to:</h2>
          <ul>
            <li>review the candidate’s substantive qualifications and answers;</li>
            <li>verify material AI-generated observations against the source application, recording, transcript or work sample;</li>
            <li>distinguish a fact from an inference, summary or recommendation;</li>
            <li>consider context, reasonable explanation and relevant accommodation;</li>
            <li>disregard output that is inaccurate, speculative, biased, irrelevant or unsupported;</li>
            <li>avoid consideration of protected or non-job-related information;</li>
            <li>apply approved job-related criteria consistently;</li>
            <li>seek clarification where a material ambiguity can reasonably be resolved; and</li>
            <li>document the material human basis for significant decisions where required by internal procedure or law.</li>
          </ul>
          <h2>NO RUBBER-STAMPING</h2>
          <p>A human approval that merely accepts an AI result without meaningful examination is not considered adequate human review under Langford Staffing’s policy.</p>
          <h2>17. Structured Assessments and Scoring</h2>
          <p>Some roles may use structured interview rubrics, job simulations, work samples, skills assessments or scored exercises. These methods are intended to improve consistency by applying defined, role-related criteria.</p>
          <p>A score is one part of the recruitment record. It does not necessarily determine the outcome and should be interpreted with the underlying evidence, the role requirements, the reliability of the assessment, any accommodation and other relevant information.</p>
          <p>Assessment criteria should be approved before use, reasonably connected to the role and reviewed when the job changes. Secret, irrelevant or discriminatory criteria are prohibited.</p>
          <h2>18. Public and Professional Information</h2>
          <p>Recruiters may review public professional information that is reasonably relevant to a role, such as a professional-network profile, portfolio, publication, company biography, licence register or publicly presented work sample.</p>
          <p>We do not authorize recruiters to seek private social-media content, impersonate another person, pressure a candidate to disclose account credentials, or collect unrelated personal information about family, religion, health, politics or private activities.</p>
          <p>If public information may materially affect a decision and accuracy is uncertain, the candidate should be given a reasonable opportunity to clarify where appropriate and lawful.</p>
          <h2>19. Reference Checks</h2>
          <p>Reference checks may be conducted at an appropriate stage to verify professional history, responsibilities, performance, conduct or role-related suitability. Candidates will ordinarily be informed before references are contacted.</p>
          <p>Candidates should provide reference details only where they are authorized to do so. Reference information is confidential and may be protected from disclosure in some jurisdictions to preserve the rights of the reference provider or another person.</p>
          <p>References are instructed or expected to provide truthful, job-related information. Langford Staffing does not authorize questions designed to obtain protected-characteristic information or unrelated private details.</p>
          <h2>20. Background and Eligibility Checks</h2>
          <p>Certain roles may require lawful verification of identity, work authorization, education, professional licence, criminal history, driving history, sanctions status, conflicts or another role-related matter. A credit check is used only where lawfully permitted and genuinely relevant to the responsibilities of the role.</p>
          <p>A background or consumer report is not obtained merely because a candidate applied. Where required, candidates receive a separate disclosure and authorization. Where adverse action procedures apply, candidates receive the required pre-adverse and final notices, a copy or summary of applicable rights, and a reasonable opportunity to dispute inaccurate information.</p>
          <p>Background information is considered in context, including relevance, reliability, time elapsed, legal restrictions and the nature of the role. Langford Staffing does not authorize blanket exclusion where individualized assessment is legally required.</p>
          <h2>21. Equal Opportunity and Demographic Information</h2>
          <p>Langford Staffing may invite candidates to provide demographic information voluntarily or collect it where required for equal-opportunity, affirmative-action, accessibility, anti-discrimination or regulatory purposes.</p>
          <p>Where practicable, this information is separated from ordinary recruitment decision-making and accessed only by authorized human resources, compliance, privacy or analytics personnel. It may be used in aggregated form to assess representation or potential adverse impact.</p>
          <p>Declining to provide voluntary demographic information will not disadvantage a candidate.</p>
          <h2>22. Accessibility and Accommodation</h2>
          <p>Langford Staffing is committed to an accessible and inclusive recruitment process. Reasonable accommodation is available throughout sourcing, application, interview, assessment, verification, offer and onboarding.</p>
          <h2>A candidate may request, for example:</h2>
          <ul>
            <li>an accessible document or alternative format;</li>
            <li>additional time;</li>
            <li>captioning, transcription or sign-language support;</li>
            <li>a telephone, live or written alternative to a recorded video process;</li>
            <li>use of assistive technology;</li>
            <li>a scheduling adjustment;</li>
            <li>a support person where appropriate; or</li>
            <li>another reasonable adjustment related to disability, religious observance or a protected need.</li>
          </ul>
          <p>Accommodation information is confidential and limited to personnel who need it to arrange the adjustment or meet a legal obligation. A request for accommodation will not be used to disadvantage the candidate.</p>
          <p>For more information, see /privacy/accessibility.</p>
          <h2>23. Candidate Communications</h2>
          <p>We use candidate contact details to provide application confirmations, scheduling, reminders, interview links, requests for information, status updates, offers, privacy notices and other recruitment communications.</p>
          <p>Candidates may receive communications by email, telephone, text message or an approved recruitment platform, depending on the contact details and preferences provided. Standard carrier or data charges may apply to text messages.</p>
          <p>A candidate may ask us to stop non-essential future-opportunity messages. Operational communications relating to an active application, legal obligation, security concern or privacy request may continue where necessary.</p>
          <h2>24. Sharing and Disclosure</h2>
          <p>Candidate information is disclosed only where reasonably necessary for the purposes described in this Policy. Recipients may include:</p>
          <ul>
            <li>authorized Langford Staffing recruiters, hiring managers, human resources personnel, interview panel members, compliance personnel and relevant leadership;</li>
            <li>an affiliated organization or client participating in the role or placement;</li>
            <li>approved providers of applicant tracking, recorded interviewing, transcription, AI assistance, scheduling, communications, assessments, hosting, cybersecurity, identity management and background screening;</li>
            <li>professional advisers, auditors, insurers and legal counsel subject to confidentiality obligations;</li>
            <li>courts, regulators, law enforcement or other authorities when disclosure is required or legally justified;</li>
            <li>a person whose health, safety, rights or security reasonably requires protection; and</li>
            <li>a transaction party in connection with a merger, acquisition, financing, reorganization or sale, under appropriate confidentiality and lawful-use restrictions.</li>
          </ul>
          <h2>NO SALE OF CANDIDATE INFORMATION</h2>
          <p>Langford Staffing does not sell candidate personal information. We do not authorize candidate records to be used for unrelated third-party advertising.</p>
          <h2>25. Recruitment Technology Providers</h2>
          <p>Langford Staffing currently uses Hireflix, S.L. to administer and host recorded candidate interviews. Hireflix processes candidate video and audio responses, interview-related information and technical data solely to provide the interview platform and make completed interviews available to authorized Langford Staffing personnel and, where applicable, the relevant hiring organization.</p>
          <h2>We seek to require appropriate provider terms addressing:</h2>
          <ul>
            <li>processing only for documented recruitment and service-delivery purposes;</li>
            <li>confidentiality and need-to-know access;</li>
            <li>appropriate technical and organizational safeguards;</li>
            <li>restrictions on sale, advertising and unrelated secondary use;</li>
            <li>restrictions on public or general-purpose model training;</li>
            <li>subprocessor and data-location transparency;</li>
            <li>incident and breach notification;</li>
            <li>assistance with candidate rights and regulatory inquiries;</li>
            <li>retention, return and verifiable deletion;</li>
            <li>audit or assurance information; and</li>
            <li>notification of material product, model or data-use changes.</li>
          </ul>
          <p>The identity of a provider may change over time. Langford Staffing’s privacy commitments apply regardless of which approved provider is used. Where applicable law requires provider-specific disclosure, we will provide it.</p>
          <h2>26. International Processing and Transfers</h2>
          <p>Candidate information may be processed in Canada, the United States, the European Economic Area, the United Kingdom or another jurisdiction where Langford Staffing, an affiliated organization, a client or an approved provider operates.</p>
          <p>Privacy, employment and government-access laws may differ from those in the candidate’s home jurisdiction. Where required, we use an approved transfer mechanism and supplementary safeguards, which may include data-processing agreements, contractual clauses, transfer assessments, encryption, access controls and restrictions on onward transfer.</p>
          <p>For EEA or UK personal data transferred to a country without an applicable adequacy decision, we may rely on European Commission Standard Contractual Clauses, the UK International Data Transfer Agreement or Addendum, another approved mechanism, or a lawful derogation where appropriate.</p>
          <h2>27. Security and Confidentiality</h2>
          <p>Langford Staffing maintains administrative, technical and organizational safeguards intended to protect the confidentiality, integrity and availability of candidate information. No system is completely secure, but our controls are designed to be proportionate to the sensitivity and risk of the information.</p>
          <ul>
            <li>role-based and least-privilege access;</li>
            <li>multi-factor authentication for appropriate systems;</li>
            <li>encryption in transit and, where supported and appropriate, at rest;</li>
            <li>secure hosting, backup and recovery controls;</li>
            <li>logging and monitoring of access and administrative activity;</li>
            <li>confidentiality obligations and workforce training;</li>
            <li>provider privacy and security review;</li>
            <li>incident-response and breach-assessment procedures;</li>
            <li>controlled export and download permissions;</li>
            <li>retention settings and secure deletion; and</li>
            <li>periodic access, risk and control review.</li>
          </ul>
          <p>Candidates should protect their own credentials, use a trusted device and network where possible, and report suspected unauthorized access or accidental disclosure promptly to the Privacy Office or Security team.</p>
          <p>For more information, see /privacy/security.</p>
          <h2>28. Retention, Deletion and Anonymization</h2>
          <p>Candidate information is retained only for a defined recruitment, legal, security or accountability purpose. The standard targets below apply unless a shorter or longer period is required by law, a client obligation, a complaint, an investigation, a legal hold or renewed candidate permission.</p>
          <table>
            <thead>
              <tr>
                <th>Record category</th>
                <th>Standard target</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Application, resume and communications</td>
                <td>Normally up to 24 months after the last meaningful recruitment activity.</td>
              </tr>
              <tr>
                <td>Recorded interview video or audio</td>
                <td>Normally up to 12 months after the relevant role closes or the last interview activity.</td>
              </tr>
              <tr>
                <td>Transcript, summary and structured evaluation</td>
                <td>Normally up to 24 months after the last meaningful recruitment activity.</td>
              </tr>
              <tr>
                <td>Work samples and assessment results</td>
                <td>Normally up to 24 months, unless returned or deleted earlier or retained as a hired-employee record.</td>
              </tr>
              <tr>
                <td>Reference and verification records</td>
                <td>Normally up to 24 months, subject to local requirements and confidentiality restrictions.</td>
              </tr>
              <tr>
                <td>Background screening record</td>
                <td>The minimum lawful period necessary for the decision, audit and legal obligations; highly sensitive source reports may be retained for a shorter period.</td>
              </tr>
              <tr>
                <td>Accommodation information</td>
                <td>Only as long as necessary for the recruitment process, legal obligation or defence of a claim.</td>
              </tr>
              <tr>
                <td>Equal-opportunity information</td>
                <td>According to applicable reporting, audit and legal requirements, with restricted access.</td>
              </tr>
              <tr>
                <td>Talent-pool profile</td>
                <td>Normally up to 24 months from permission or the last meaningful interaction, unless refreshed or withdrawn.</td>
              </tr>
              <tr>
                <td>Security and audit logs</td>
                <td>Typically 12 to 24 months, longer where required for an active security investigation.</td>
              </tr>
              <tr>
                <td>Consent and acknowledgement record</td>
                <td>For the associated recruitment record and any period needed to demonstrate compliance.</td>
              </tr>
              <tr>
                <td>Privacy request, complaint or appeal</td>
                <td>Normally up to six years after closure, subject to local law.</td>
              </tr>
            </tbody>
          </table>
          <p>When a retention period expires, information is deleted, securely destroyed or de-identified so that it is no longer reasonably linked to the candidate. Aggregated or appropriately de-identified information may be retained for process analytics, audit, research, security and improvement where re-identification risk is appropriately controlled.</p>
          <p>Deletion from active systems may occur before deletion from encrypted backups. Backup copies are protected from ordinary use and expire through the applicable backup lifecycle. Information subject to a legal hold is preserved until the hold is released.</p>
          <p>For more information, see /privacy/retention.</p>
          <h2>29. Candidate Rights</h2>
          <p>Rights depend on applicable law and circumstances. A candidate may have the right to:</p>
          <ul>
            <li>know whether and how we process candidate information;</li>
            <li>request access to personal information and receive a copy;</li>
            <li>request correction of inaccurate or incomplete information;</li>
            <li>request deletion or erasure, subject to lawful exceptions;</li>
            <li>restrict or object to certain processing;</li>
            <li>withdraw consent prospectively where consent is the applicable legal basis;</li>
            <li>receive certain information in a portable format;</li>
            <li>opt out of future-opportunity communications;</li>
            <li>receive information about significant automated processing;</li>
            <li>request meaningful human review or contest a decision where required by law;</li>
            <li>use an authorized agent where permitted; and</li>
            <li>complain to Langford Staffing or an applicable privacy, labour, human-rights or data-protection authority.</li>
          </ul>
          <p>{"To submit a request, email " + NAP.email + " with the subject line “Candidate Privacy Request.” Include your name, the role, approximate application date, jurisdiction and the right you wish to exercise. Do not send highly sensitive identity documents by ordinary email unless instructed through a secure process."}</p>
          <p>We may verify identity and authority before completing a request. Verification will be proportionate to the request and risk. We may limit or decline a request where law permits, for example to protect another person’s privacy, confidential references, legal privilege, security, fraud prevention or a legal obligation. We will explain the basis where required.</p>
          <h2>30. Transcript Corrections and Context Statements</h2>
          <p>Automated transcription is not perfect. It may mishear a name, technical term, accent or phrase. If a transcript or AI-generated summary materially misrepresents an answer, the candidate may contact the Privacy Office or recruiter.</p>
          <p>Where reasonably practicable and relevant to an active or recent process, Langford Staffing may:</p>
          <ul>
            <li>review the underlying recording or original response;</li>
            <li>correct the transcript or structured record;</li>
            <li>add a candidate-provided context statement;</li>
            <li>notify relevant human reviewers of the issue;</li>
            <li>repeat an assessment or ask a clarifying question; or</li>
            <li>document why a requested change is not supported by the source record.</li>
          </ul>
          <p>A candidate may not require Langford Staffing to change an honestly held evaluation or delete information that must lawfully be preserved, but may request correction of objective error and provide relevant context.</p>
          <h2>31. Human Reconsideration and Appeal</h2>
          <p>A candidate may ask for human reconsideration where an automated recommendation materially influenced an adverse outcome, where applicable law provides that right, or where the candidate identifies a credible material error or fairness concern.</p>
          <p>A reconsideration request should identify the role, approximate date, the outcome or information challenged, and any supporting context. The review may include:</p>
          <ul>
            <li>checking the application, recording, transcript and assessment source;</li>
            <li>reviewing the AI output and system configuration;</li>
            <li>confirming the human reviewer’s reasoning;</li>
            <li>examining whether protected or irrelevant information affected the process;</li>
            <li>correcting a record or disregarding unreliable output;</li>
            <li>arranging a clarifying or alternative assessment; and</li>
            <li>documenting the outcome and any remedial action.</li>
          </ul>
          <p>Reconsideration does not guarantee a different employment outcome. It is intended to provide a meaningful review of process, accuracy and job-related reasoning.</p>
          <h2>32. Withdrawing an Application or Talent-Pool Permission</h2>
          <p>A candidate may withdraw from an active recruitment process by notifying the recruiter. Withdrawal stops ordinary active consideration, but Langford Staffing may retain a limited record where required for legal, security, audit or dispute purposes.</p>
          <p>A candidate may ask to be removed from a future-opportunity or talent-pool list at any time. Removal stops future matching and outreach, except for a minimal suppression record needed to honour the preference.</p>
          <p>Withdrawal of consent to recording or AI assistance applies prospectively. If the candidate requests withdrawal before completing a necessary step, Langford Staffing will assess whether a reasonable alternative is available and whether the application can continue.</p>
          <h2>33. Complaints and Non-Retaliation</h2>
          <p>A candidate who believes information was mishandled, an AI-supported assessment was materially inaccurate, or a process was unfair may contact the Privacy Office. We will acknowledge, assess and route the concern to appropriate privacy, security, legal, human resources or recruitment personnel.</p>
          <p>Where reasonably practicable, a complaint will be reviewed by someone who was not responsible for the challenged action. A review may examine notices, permissions, access logs, source information, automated output, human reasoning, provider records and relevant controls.</p>
          <p>Langford Staffing prohibits retaliation against a candidate for making a good-faith privacy or fairness complaint, requesting accommodation, asking how AI is used or exercising a legal right.</p>
          <h2>34. Canada Supplement</h2>
          <p>For candidates in Canada, the applicable privacy law depends on the organization, province, activity and whether information crosses provincial or national borders. Langford Staffing’s Canadian practices are designed around the widely recognized principles of accountability, identified purposes, meaningful consent where required, limiting collection, limiting use and retention, accuracy, safeguards, openness, individual access and the ability to challenge compliance.</p>
          <p>Federal private-sector law may apply to commercial activities and to employee or applicant information in federally regulated organizations. Alberta, British Columbia and Quebec have private-sector privacy laws that may apply to employment or applicant information in those provinces. Other employment, human-rights and accessibility obligations apply independently of privacy legislation.</p>
          <p>Canadian candidates may request access or correction and may raise a complaint with the appropriate federal or provincial privacy authority where the law provides that right.</p>
          <h2>35. European Economic Area Supplement</h2>
          <p>Where the EU General Data Protection Regulation applies, the relevant Langford Staffing entity or identified hiring organization acts as controller unless a different role is stated. The lawful bases, purposes, recipients, transfers, retention criteria and rights are described in this Policy and any role-specific notice.</p>
          <p>EEA candidates may have rights of access, rectification, erasure, restriction, objection, portability, withdrawal of consent and complaint to a supervisory authority, subject to legal conditions and exceptions.</p>
          <p>Langford Staffing does not intend to subject an EEA candidate to a decision based solely on automated processing that produces legal or similarly significant effects. Where such processing is lawfully used, required safeguards may include human intervention, the ability to express a point of view and the ability to contest the decision.</p>
          <p>AI systems used for recruitment or candidate selection may be classified as high-risk under the EU Artificial Intelligence Act when its applicable requirements and scope are met. Langford Staffing’s governance framework is designed to support risk management, data governance, documentation, transparency, human oversight, accuracy, monitoring and fundamental-rights safeguards appropriate to our role.</p>
          <h2>36. United Kingdom Supplement</h2>
          <p>Where the UK GDPR and Data Protection Act 2018 apply, candidates have rights broadly corresponding to the rights described for the EEA, subject to UK law and exemptions. Langford Staffing will identify a lawful basis, provide appropriate transparency, conduct a data-protection impact assessment where required and use an approved international transfer mechanism where applicable.</p>
          <p>Candidates may complain to the UK Information Commissioner’s Office after first giving Langford Staffing a reasonable opportunity to address the concern, although contacting us first is not a condition where law provides a direct complaint right.</p>
          <h2>37. United States Supplement</h2>
          <p>Privacy, employment, anti-discrimination, background-screening and automated-decision requirements vary by state and locality. Langford Staffing will provide an additional notice or process where a law applicable to the candidate or position requires it.</p>
          <h2>37.1 California</h2>
          <p>Where the California Consumer Privacy Act applies to candidate information, California residents may have rights to know, access, correct and delete personal information; obtain information about categories, sources, purposes and recipients; and be free from unlawful discrimination for exercising a right. Langford Staffing does not sell candidate personal information or share it for cross-context behavioural advertising.</p>
          <p>A California Notice at Collection may be provided at or before collection and will identify the categories collected, purposes, retention information and links to the applicable privacy notice.</p>
          <h2>37.2 Illinois Recorded Video Interviews</h2>
          <p>For candidates considered for positions based in Illinois where the Illinois Artificial Intelligence Video Interview Act applies, Langford Staffing will provide notice before the interview that AI may be used to analyze the video, explain generally how the AI works and the characteristics it evaluates, and obtain the candidate’s consent before the AI-assisted video interview.</p>
          <p>Sharing of the video will be limited to persons whose expertise or technology is necessary to evaluate the candidate. Applicable deletion requests will be handled in accordance with the law and lawful exceptions. Our standard process is intended to analyze the substance of answers and transcripts, not facial expression, emotion, biometric identity or voice stress.</p>
          <h2>37.3 New York City</h2>
          <p>Where a tool and use qualify as an automated employment decision tool regulated by New York City law, Langford Staffing will not use the tool unless required bias-audit, publication and candidate-notice conditions are satisfied. Required notices will identify the use of the tool and the job qualifications or characteristics assessed, and will provide instructions for accommodation or another process where applicable.</p>
          <h2>37.4 Colorado and Other Automated-Decision Laws</h2>
          <p>Where a Colorado or other state law regulates automated decision-making technology used for a consequential employment decision, Langford Staffing will assess whether the law applies and implement required risk management, impact assessment, transparency, correction, appeal, human review, anti-discrimination and documentation controls before use.</p>
          <h2>37.5 Background Reports</h2>
          <p>Where Langford Staffing obtains a consumer report from a background-screening company for employment purposes, it will provide the required standalone disclosure and obtain written authorization. Before taking adverse action based on the report, it will provide required pre-adverse information and a reasonable opportunity to review or dispute the report; final adverse-action notice will be provided where required.</p>
          <h2>38. Minors</h2>
          <p>Recruitment is not directed to individuals below the lawful minimum working age for the role and location. Where a role lawfully permits a minor to apply, Langford Staffing will use age-appropriate notice, collect only necessary information and obtain parent or guardian authorization where required.</p>
          <h2>39. Changes to This Policy</h2>
          <p>We may update this Policy to reflect changes in law, technology, providers, recruitment practices or risk controls. The updated version will display a new last-updated date. Where a change materially affects an active candidate’s rights or a materially different use of previously collected information, we will provide additional notice and obtain consent where required.</p>
          <h2>40. Contact the Privacy Office</h2>
          <p>Questions, rights requests, complaints and candidate privacy concerns may be directed to:</p>
          <table>
            <thead>
              <tr>
                <th>Contact field</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Organization</td>
                <td>Langford Staffing</td>
              </tr>
              <tr>
                <td>Office</td>
                <td>Privacy Office / Data Protection Office</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{NAP.email}</td>
              </tr>
              <tr>
                <td>Subject line</td>
                <td>Candidate Privacy Inquiry, Candidate Privacy Request or Candidate Privacy Complaint</td>
              </tr>
              <tr>
                <td>Website</td>
                <td><Link href="/privacy/contact">/privacy/contact</Link></td>
              </tr>
            </tbody>
          </table>
          <p>For an accessibility accommodation related to recruitment, contact your recruiter or use the accessibility channel listed at /privacy/accessibility. For a suspected security incident, use the contact method listed at /privacy/security.</p>
          <h2>41. Frequently Asked Questions</h2>
          <p>Does AI decide whether I am hired? No. AI may help transcribe, summarize, organize or identify job-related information, but authorized human personnel remain responsible for meaningful review and the employment decision.</p>
          <p>Who reviews my recorded interview? Access is limited to authorized recruitment personnel, relevant hiring managers or leaders, and approved providers that operate the system or provide necessary support.</p>
          <p>Does the system analyze my face or emotions? Langford Staffing does not authorize its standard process to use facial recognition, emotion recognition, lie detection, voice-stress analysis or personality inference from appearance, gaze, accent or tone.</p>
          <p>Can I request a non-video interview? You may request a reasonable accommodation or alternative process. Availability depends on the role, law and operational feasibility, but requests are considered in good faith.</p>
          <p>Is my accent scored? No. Accent, tone or speech style must not be used as an inappropriate proxy for protected characteristics or suitability. The substance of job-related answers may be reviewed.</p>
          <p>Can transcription make mistakes? Yes. Automated transcripts can mishear words or technical terms. You may report a material error and ask that the underlying answer be reviewed.</p>
          <p>Do you sell candidate data? No. Langford Staffing does not sell candidate personal information.</p>
          <p>Is my interview used to train public AI models? Langford Staffing does not authorize candidate interview content to be used to train public or general-purpose AI models.</p>
          <p>Can service providers see my information? Only approved providers that need information to deliver recruitment, hosting, security or administrative services may process it under contractual restrictions.</p>
          <p>Where is my information stored? It may be processed in Canada, the United States, the EEA, the UK or another authorized jurisdiction. Cross-border safeguards are used where required.</p>
          <p>How long is a recording kept? The standard target is normally no longer than 12 months after the role closes or the last interview activity, subject to legal holds and jurisdictional requirements.</p>
          <p>How long is my application kept? The standard target is normally no longer than 24 months after the last meaningful recruitment activity, subject to legal and operational exceptions.</p>
          <p>Can I ask for deletion? You may submit a deletion request. We will comply where required and may retain limited information where necessary for law, security, claims, audit or another lawful exception.</p>
          <p>Can I correct my information? Yes. You may request correction of materially inaccurate personal information. Evaluative opinions may not be changed merely because you disagree, but relevant context can be considered.</p>
          <p>Can I see the AI score or analysis? Rights vary by law and the type of system. You may request access to personal information and information about significant automated processing. Certain confidential, proprietary or third-party information may be lawfully restricted.</p>
          <p>Can I appeal a decision? You may request human reconsideration where law requires it or where you identify a credible material error or fairness concern. Reconsideration does not guarantee a different outcome.</p>
          <p>Will a privacy question hurt my application? No. Langford Staffing prohibits retaliation for asking about privacy, requesting accommodation or exercising a legal right.</p>
          <p>Do you check social media? A recruiter may review public professional information reasonably relevant to the role. Recruiters are not authorized to seek private content through deception or request passwords.</p>
          <p>Will you contact my current employer? We ordinarily seek to avoid contacting a current employer without the candidate’s knowledge. Reference timing and consent may vary by role and jurisdiction.</p>
          <p>Do you conduct criminal or credit checks? Only where lawful, proportionate and relevant to the role. A separate notice and authorization are provided where required.</p>
          <p>What happens if I withdraw? Active consideration stops. A limited record may be retained for legal, security or audit purposes under the retention policy.</p>
          <p>Can you keep me in a talent pool? We may do so where permitted and consistent with your preferences. You may opt out at any time.</p>
          <p>Can I submit a request through an agent? Where law allows, an authorized agent may submit a request. We may verify the agent’s authority and your identity.</p>
          <p>Which law applies? It depends on the responsible entity, role location, candidate location and activity. The jurisdictional sections describe major frameworks but do not replace role-specific notices.</p>
          <p>{"Who should I contact? Email " + NAP.email + " or visit /privacy/contact."}</p>
          <h2>Appendix A — Pre-Interview Notice and Acknowledgement</h2>
          <h2>DISPLAY BEFORE A RECORDED OR AI-ASSISTED INTERVIEW</h2>
          <p>The following concise notice should appear immediately before the candidate begins. The system must store the version, date, time and candidate acknowledgement.</p>
          <p>Langford Staffing will record your video and/or audio answers. Technology may create a transcript, summarize your responses, organize job-related information and assist authorized recruiters and hiring managers in applying approved role criteria. The technology does not independently make the hiring decision.</p>
          <p>Our standard process does not use facial recognition, emotion recognition, lie detection, voice-stress analysis or personality inference from physical appearance, gaze, accent or tone.</p>
          <p>{"Your information will be handled under the Candidate Privacy Policy and Responsible AI and AI-Assisted Recruitment Policy. You may contact " + NAP.email + " with questions. To request accommodation or an alternative process where available, contact your recruiter before starting."}</p>
          <p>☐ I have read or had access to the Candidate Privacy Policy and Responsible AI and AI-Assisted Recruitment Policy.</p>
          <p>☐ I understand that my interview will be recorded.</p>
          <p>☐ I understand the described transcription and AI-assisted processing.</p>
          <p>☐ I understand that authorized human personnel remain responsible for the recruitment decision.</p>
          <p>☐ Where consent is required, I consent to the recording and processing described above.</p>
          <p>Candidate name: ______________________________________________</p>
          <p>Position: ____________________________________________________</p>
          <p>Date and time: _______________________________________________</p>
          <p>Electronic acceptance / signature: ______________________________</p>
          <h2>Appendix B — Candidate Rights Request Form</h2>
          <table>
            <thead>
              <tr>
                <th>Field</th>
                <th>Candidate response</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Full name</td>
                <td></td>
              </tr>
              <tr>
                <td>Preferred contact method</td>
                <td>Email / telephone</td>
              </tr>
              <tr>
                <td>Position or job reference</td>
                <td></td>
              </tr>
              <tr>
                <td>Approximate application date</td>
                <td></td>
              </tr>
              <tr>
                <td>Country, province/state or region</td>
                <td></td>
              </tr>
              <tr>
                <td>Request type</td>
                <td>Access / correction / deletion / restriction / objection / portability / consent withdrawal / human review / complaint / other</td>
              </tr>
              <tr>
                <td>Description and scope</td>
                <td></td>
              </tr>
              <tr>
                <td>Material transcript or summary error, if applicable</td>
                <td></td>
              </tr>
              <tr>
                <td>Authorized agent</td>
                <td>Yes / No; provide authority if applicable</td>
              </tr>
              <tr>
                <td>Preferred accessible format</td>
                <td></td>
              </tr>
            </tbody>
          </table>
          <p>{"Send the completed request or equivalent information to " + NAP.email + ". Do not send passwords, full government identifiers or highly sensitive identity documents through ordinary email. The Privacy Office will provide secure verification instructions where necessary."}</p>
          <h2>Appendix C — Detailed Candidate Retention Schedule</h2>
          <table>
            <thead>
              <tr>
                <th>Record</th>
                <th>System</th>
                <th>Purpose</th>
                <th>Trigger</th>
                <th>Target</th>
                <th>Disposal</th>
                <th>Exception</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Prospect or sourcing record</td>
                <td>Recruitment system / approved professional platform</td>
                <td>Recruitment</td>
                <td>Last meaningful contact</td>
                <td>24 months</td>
                <td>Delete or de-identify</td>
                <td>Candidate opt-out, legal hold</td>
              </tr>
              <tr>
                <td>Application and resume</td>
                <td>Applicant tracking system</td>
                <td>Recruitment</td>
                <td>Last recruitment activity</td>
                <td>24 months</td>
                <td>System deletion</td>
                <td>Local law, client requirement, legal hold</td>
              </tr>
              <tr>
                <td>Recorded interview video/audio</td>
                <td>Approved interview platform</td>
                <td>Recruitment</td>
                <td>Role closure or last interview activity</td>
                <td>12 months</td>
                <td>Platform deletion</td>
                <td>Complaint, investigation, legal hold</td>
              </tr>
              <tr>
                <td>Transcript and AI summary</td>
                <td>Interview / applicant tracking system</td>
                <td>Recruitment</td>
                <td>Last activity</td>
                <td>24 months</td>
                <td>Delete with candidate record</td>
                <td>Legal hold or required audit</td>
              </tr>
              <tr>
                <td>Recruiter and hiring-manager notes</td>
                <td>Applicant tracking system</td>
                <td>Recruitment</td>
                <td>Last activity</td>
                <td>24 months</td>
                <td>Delete with candidate record</td>
                <td>Legal hold</td>
              </tr>
              <tr>
                <td>Assessment score and work sample</td>
                <td>Assessment / applicant system</td>
                <td>Recruitment</td>
                <td>Last activity</td>
                <td>24 months</td>
                <td>Delete or return where appropriate</td>
                <td>Hired record or legal hold</td>
              </tr>
              <tr>
                <td>Reference record</td>
                <td>Applicant tracking system</td>
                <td>Verification</td>
                <td>Decision date</td>
                <td>24 months</td>
                <td>Secure deletion</td>
                <td>Confidentiality and local law</td>
              </tr>
              <tr>
                <td>Background report</td>
                <td>Screening platform / restricted file</td>
                <td>Verification</td>
                <td>Decision completion</td>
                <td>Minimum necessary period</td>
                <td>Secure deletion</td>
                <td>FCRA or local legal requirement</td>
              </tr>
              <tr>
                <td>Accommodation record</td>
                <td>Restricted HR file</td>
                <td>Accessibility</td>
                <td>Process closure</td>
                <td>Minimum necessary period</td>
                <td>Secure deletion</td>
                <td>Claim or legal obligation</td>
              </tr>
              <tr>
                <td>Equal opportunity data</td>
                <td>Segregated reporting system</td>
                <td>Compliance / monitoring</td>
                <td>Reporting cycle</td>
                <td>As legally required</td>
                <td>Secure deletion or aggregate</td>
                <td>Statutory reporting</td>
              </tr>
              <tr>
                <td>Consent / acknowledgement</td>
                <td>Recruitment system</td>
                <td>Accountability</td>
                <td>Associated record closure</td>
                <td>Record period plus evidence need</td>
                <td>Delete with record</td>
                <td>Compliance evidence</td>
              </tr>
              <tr>
                <td>Talent-pool profile</td>
                <td>Applicant tracking system</td>
                <td>Future opportunities</td>
                <td>Permission or last interaction</td>
                <td>24 months</td>
                <td>Delete or refresh permission</td>
                <td>Candidate opt-out</td>
              </tr>
              <tr>
                <td>Access and security logs</td>
                <td>Security systems</td>
                <td>Security / audit</td>
                <td>Log creation</td>
                <td>12–24 months</td>
                <td>Automated expiry</td>
                <td>Incident investigation</td>
              </tr>
              <tr>
                <td>Privacy request or complaint</td>
                <td>Privacy case system</td>
                <td>Compliance</td>
                <td>Case closure</td>
                <td>6 years</td>
                <td>Secure deletion</td>
                <td>Regulatory or legal hold</td>
              </tr>
            </tbody>
          </table>
          <h2>Appendix D — Public Governance Commitments</h2>
          <p>The following controls support the commitments in this Policy. They are summarized publicly to demonstrate accountability without disclosing sensitive system configurations.</p>
          <table>
            <thead>
              <tr>
                <th>Control</th>
                <th>Commitment</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Approved use inventory</td>
                <td>Material AI-assisted recruitment uses have an identified owner, purpose, provider and risk classification.</td>
              </tr>
              <tr>
                <td>Impact review</td>
                <td>Higher-risk or materially influential uses undergo privacy, legal, security, accessibility and fairness review.</td>
              </tr>
              <tr>
                <td>Human oversight</td>
                <td>Reviewers can inspect source information, correct errors and override automated output.</td>
              </tr>
              <tr>
                <td>Prohibited uses</td>
                <td>Biometric identity, emotion, lie, voice-stress and protected-trait scoring are not authorized in the standard process.</td>
              </tr>
              <tr>
                <td>Provider controls</td>
                <td>Contracts address confidentiality, purpose limits, security, incidents, retention, deletion and secondary use.</td>
              </tr>
              <tr>
                <td>Access controls</td>
                <td>Candidate records are limited to authorized personnel and approved providers.</td>
              </tr>
              <tr>
                <td>Training</td>
                <td>Recruitment reviewers receive guidance on privacy, confidentiality, AI limitations, fairness and accommodation.</td>
              </tr>
              <tr>
                <td>Monitoring</td>
                <td>Material complaints, errors, incidents, disparities and provider changes are escalated and reviewed.</td>
              </tr>
              <tr>
                <td>Suspension authority</td>
                <td>Privacy, Legal, Security, Human Resources or authorized leadership may suspend a use presenting unacceptable risk.</td>
              </tr>
              <tr>
                <td>Retention and deletion</td>
                <td>Defined targets are implemented in systems and reviewed periodically.</td>
              </tr>
            </tbody>
          </table>
          <h2>Appendix E — Official Legal and Regulatory References</h2>
          <p>This Policy was structured with reference to official legal and regulatory materials. Applicable law must be confirmed for each legal entity, role and jurisdiction. The following links are provided for counsel and compliance review:</p>
          <table>
            <thead>
              <tr>
                <th>Authority / subject</th>
                <th>Official source</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Canada — PIPEDA and fair information principles</td>
                <td><a href="https://www.priv.gc.ca/en/privacy-topics/privacy-laws-in-canada/the-personal-information-protection-and-electronic-documents-act-pipeda/" target="_blank" rel="noopener noreferrer">https://www.priv.gc.ca/en/privacy-topics/privacy-laws-in-canada/the-personal-information-protection-and-electronic-documents-act-pipeda/</a></td>
              </tr>
              <tr>
                <td>Canada — Privacy in the workplace</td>
                <td><a href="https://www.priv.gc.ca/en/privacy-topics/employers-and-employees/02_05_d_17/" target="_blank" rel="noopener noreferrer">https://www.priv.gc.ca/en/privacy-topics/employers-and-employees/02_05_d_17/</a></td>
              </tr>
              <tr>
                <td>European Union — General Data Protection Regulation</td>
                <td><a href="https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng" target="_blank" rel="noopener noreferrer">https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng</a></td>
              </tr>
              <tr>
                <td>European Union — Artificial Intelligence Act</td>
                <td><a href="https://eur-lex.europa.eu/eli/reg/2024/1689/oj/eng" target="_blank" rel="noopener noreferrer">https://eur-lex.europa.eu/eli/reg/2024/1689/oj/eng</a></td>
              </tr>
              <tr>
                <td>United Kingdom — Recruitment and selection data protection guidance</td>
                <td><a href="https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/employment/recruitment-and-selection/" target="_blank" rel="noopener noreferrer">https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/employment/recruitment-and-selection/</a></td>
              </tr>
              <tr>
                <td>United Kingdom — AI and data protection guidance</td>
                <td><a href="https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/artificial-intelligence/guidance-on-ai-and-data-protection/" target="_blank" rel="noopener noreferrer">https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/artificial-intelligence/guidance-on-ai-and-data-protection/</a></td>
              </tr>
              <tr>
                <td>Illinois — Artificial Intelligence Video Interview Act</td>
                <td><a href="https://www.ilga.gov/Legislation/ILCS/Articles?ActID=4015&ChapterID=68" target="_blank" rel="noopener noreferrer">https://www.ilga.gov/Legislation/ILCS/Articles?ActID=4015&ChapterID=68</a></td>
              </tr>
              <tr>
                <td>New York City — Automated Employment Decision Tools</td>
                <td><a href="https://www.nyc.gov/site/dca/about/automated-employment-decision-tools.page" target="_blank" rel="noopener noreferrer">https://www.nyc.gov/site/dca/about/automated-employment-decision-tools.page</a></td>
              </tr>
              <tr>
                <td>California — California Privacy Protection Agency</td>
                <td><a href="https://cppa.ca.gov/" target="_blank" rel="noopener noreferrer">https://cppa.ca.gov/</a></td>
              </tr>
              <tr>
                <td>United States — FTC employer background-check guidance</td>
                <td><a href="https://www.ftc.gov/business-guidance/resources/using-consumer-reports-what-employers-need-know" target="_blank" rel="noopener noreferrer">https://www.ftc.gov/business-guidance/resources/using-consumer-reports-what-employers-need-know</a></td>
              </tr>
            </tbody>
          </table>

        </article>
      </section>
    </>
  );
}

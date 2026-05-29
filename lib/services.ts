export interface Service {
  slug: string;
  name: string;
  shortName: string;
  h1: string;
  title: string;
  metaDescription: string;
  audience: "employer" | "candidate" | "both";
  summary: string;
  longDescription: string;
  whoFor: string[];
  process: { step: string; detail: string }[];
  industries: string[];
  faqs: { q: string; a: string }[];
  related: string[]; // slugs
}

export const SERVICES: Service[] = [
  {
    slug: "permanent-placement",
    name: "Permanent Placement",
    shortName: "Permanent",
    h1: "Permanent Placement Across the United States and Canada",
    title: "Permanent Placement",
    metaDescription:
      "Permanent placement across the United States and Canada by Langford Staffing. We send vetted candidates, support compliant onboarding, and stay with the hire after the start date.",
    audience: "both",
    summary:
      "Direct hire recruitment for full time roles. A written brief, pre screened candidates, and follow up support after the start date.",
    longDescription:
      "Permanent placement is a direct-hire engagement: Langford Staffing presents a pre-screened shortlist of candidates for a role you intend to bring onto your own payroll. Our model is built for employers across the United States and Canada who need a reliable hiring pipeline without carrying a full in-house recruiting function. Each search begins with a structured intake to align on role scope, compensation band, must-have qualifications, and cultural fit. We then surface candidates through a combination of active sourcing, our existing candidate network, and targeted outreach.",
    whoFor: [
      "Employers replacing or adding a long-term role",
      "Companies expanding into new US or Canadian markets and building local headcount",
      "Teams that need disciplined screening without a full in-house recruiter",
      "Organizations with compliance-sensitive roles requiring careful vetting"
    ],
    process: [
      {
        step: "Intake",
        detail:
          "Structured 60 to 90 minute scoping session covering role, scope, compensation, must-haves, deal-breakers, and timeline."
      },
      {
        step: "Sourcing",
        detail:
          "Active outreach plus passive candidate network across the US and Canada. Initial longlist within five business days."
      },
      {
        step: "Screening",
        detail:
          "Phone screen, work-history validation, reference checks, and skills verification before a candidate reaches your inbox."
      },
      {
        step: "Short list",
        detail:
          "A short list of three to five candidates with our notes on fit, motivations, and any flags."
      },
      {
        step: "Onboarding",
        detail:
          "We stay involved through the offer, the start date, and the first 30 days under applicable state, provincial, and federal employment law."
      }
    ],
    industries: [
      "Hospitality and tourism",
      "Property and facilities services",
      "Professional and corporate services",
      "Logistics and operations",
      "Specialty trades"
    ],
    faqs: [
      {
        q: "How long does a permanent placement search take?",
        a: "Typical searches close within four to eight weeks from intake to accepted offer, depending on role seniority and market scarcity. Specialty and executive searches may take longer."
      },
      {
        q: "Do you offer a replacement guarantee?",
        a: "Replacement terms are documented in your engagement agreement. We design every search with retention in mind, but specific guarantee terms vary by role and engagement structure."
      },
      {
        q: "Are placements compliant with US and Canadian employment law?",
        a: "Every placement is conducted under applicable federal, state, and provincial employment law in the relevant US or Canadian jurisdiction. Final employment contracts are between you and the candidate; we provide compliance-aware support throughout the process."
      }
    ],
    related: ["contract-to-hire", "executive-search", "specialty-search"]
  },
  {
    slug: "temporary-staffing",
    name: "Temporary Staffing",
    shortName: "Temporary",
    h1: "Temporary Staffing Across the United States and Canada",
    title: "Temporary Staffing",
    metaDescription:
      "Temporary staffing across the United States and Canada by Langford Staffing. Short-term, seasonal, and project-based workforce coverage with compliance-first onboarding.",
    audience: "both",
    summary:
      "Short-term workforce coverage for project, seasonal, and surge demand, pre-screened candidates ready to deploy.",
    longDescription:
      "Temporary staffing covers roles where the engagement is bounded, by project, season, or a defined scope of work. Langford Staffing maintains a vetted bench of candidates across roles that lend themselves to short-term deployment, including hospitality, property services, event support, administrative, and operational coverage. We focus on speed without sacrificing the documentation and screening that protects both employer and candidate.",
    whoFor: [
      "Employers covering peak season, events, or one-off projects",
      "Operations teams managing planned absences or parental-leave coverage",
      "Companies piloting new locations or service lines before committing to permanent headcount",
      "Property managers needing surge support for turnovers"
    ],
    process: [
      {
        step: "Brief",
        detail:
          "Short scope brief, number of placements, duration, location, schedule, and any role-specific requirements."
      },
      {
        step: "Match",
        detail:
          "Candidates drawn from a pre-screened bench, with availability and fit confirmed before introduction."
      },
      {
        step: "Deploy",
        detail:
          "Onboarding compressed to compliance essentials. Candidates ready to start within agreed timelines."
      },
      {
        step: "Manage",
        detail:
          "Ongoing check-ins through engagement; coverage replaced where needed."
      }
    ],
    industries: [
      "Hospitality and events",
      "Property turnovers and maintenance",
      "Administrative and reception coverage",
      "Logistics and warehousing",
      "Retail and seasonal"
    ],
    faqs: [
      {
        q: "How fast can you deploy temporary staff?",
        a: "For roles with a candidate match on bench, deployment can occur within days. Specialty roles may take longer; we will be honest about timelines at the brief stage."
      },
      {
        q: "Who employs the temporary staff?",
        a: "Engagement structures vary by role and duration. We will document the structure for your specific engagement and flag the compliance implications under the relevant US or Canadian employment law."
      }
    ],
    related: ["contract-to-hire", "volume-hiring", "permanent-placement"]
  },
  {
    slug: "contract-to-hire",
    name: "Contract-to-Hire",
    shortName: "Contract-to-Hire",
    h1: "Contract-to-Hire Across the United States and Canada",
    title: "Contract-to-Hire",
    metaDescription:
      "Contract-to-hire engagements across the United States and Canada by Langford Staffing. Try-before-you-buy hiring with structured conversion paths and compliant onboarding.",
    audience: "both",
    summary:
      "A structured pathway from contract engagement to permanent hire, giving both employer and candidate room to confirm fit.",
    longDescription:
      "Contract-to-hire combines the speed and flexibility of a temporary engagement with a defined conversion pathway to permanent placement. The model suits roles where both employer and candidate benefit from a structured trial period, often roles with a steep ramp, evolving scope, or high cost-of-mishire. We document the conversion criteria and timeline up front so neither side is left guessing.",
    whoFor: [
      "Employers expanding into a new function and benefiting from a trial period",
      "Roles with high ramp cost where confirmed fit matters more than speed",
      "Candidates entering a new industry or company who value optionality"
    ],
    process: [
      {
        step: "Define",
        detail:
          "Document the contract period, evaluation criteria, and conversion path."
      },
      {
        step: "Engage",
        detail:
          "Candidate begins as a contract engagement under documented terms."
      },
      {
        step: "Evaluate",
        detail:
          "Structured check-ins at agreed milestones to assess fit from both sides."
      },
      {
        step: "Convert",
        detail:
          "Conversion to permanent placement on agreed terms, or amicable conclusion if fit is not right."
      }
    ],
    industries: [
      "Professional and corporate roles",
      "Technical and operational",
      "Specialty trades",
      "Management and supervisory"
    ],
    faqs: [
      {
        q: "What is the typical contract period before conversion?",
        a: "Contract periods commonly range from three to six months, but are tailored to the role and employer. We document the period at engagement start."
      },
      {
        q: "What if the role is not a fit?",
        a: "If either side concludes the role is not a fit during the contract period, the engagement concludes per the agreement. Candidates remain in our active network for future placements."
      }
    ],
    related: ["permanent-placement", "temporary-staffing", "specialty-search"]
  },
  {
    slug: "executive-search",
    name: "Executive Search",
    shortName: "Executive Search",
    h1: "Executive Search Across the United States and Canada",
    title: "Executive Search",
    metaDescription:
      "Executive search across the United States and Canada by Langford Staffing. Confidential, retained search for senior leadership and director-level roles.",
    audience: "employer",
    summary:
      "Retained search for senior leadership and director-level roles, with discretion, depth, and documented diligence.",
    longDescription:
      "Executive search is a retained engagement for roles where the cost of mishire is significant and discretion matters. Langford Staffing conducts director, regional-leader, and senior-functional searches across the United States and Canada, with the depth of due diligence and the documentation expected at that level. Every search includes confidentiality protocols, structured competency evaluation, and reference work that goes beyond the candidate's stated network.",
    whoFor: [
      "Boards and CEOs hiring senior directors or regional leaders",
      "Companies expanding into new US or Canadian markets and recruiting their first senior leader on the ground",
      "Confidential replacements for incumbent senior roles"
    ],
    process: [
      {
        step: "Mandate",
        detail:
          "Detailed mandate document covering role, scope, comp band, success criteria, and confidentiality protocol."
      },
      {
        step: "Map",
        detail:
          "Market mapping of the relevant talent pool across the US and Canada and, where appropriate, the broader North American MNC pipeline."
      },
      {
        step: "Approach",
        detail:
          "Discreet outreach to mapped candidates; confidentiality maintained until mutual interest is confirmed."
      },
      {
        step: "Diligence",
        detail:
          "Structured competency interviews, work-product review, off-list reference work, and background validation."
      },
      {
        step: "Close",
        detail:
          "Offer support, comp negotiation, and onboarding continuity through the first 90 days."
      }
    ],
    industries: [
      "Hospitality and tourism leadership",
      "Property and asset management leadership",
      "Professional services partnerships",
      "Logistics and operations leadership",
      "Regional leadership across MNC verticals"
    ],
    faqs: [
      {
        q: "Is executive search retained or contingent?",
        a: "Executive search is conducted on a retained basis. Retained engagements protect the depth of diligence and the confidentiality required at this level."
      },
      {
        q: "How is confidentiality handled?",
        a: "Confidentiality protocols are documented at mandate stage. Candidate identities and client identity are protected on a need-to-know basis until mutual interest is confirmed."
      }
    ],
    related: ["permanent-placement", "specialty-search", "volume-hiring"]
  },
  {
    slug: "volume-hiring",
    name: "Volume Hiring",
    shortName: "Volume",
    h1: "Volume Hiring Across the United States and Canada",
    title: "Volume Hiring",
    metaDescription:
      "Volume hiring across the United States and Canada by Langford Staffing. Recruitment process outsourcing for openings, expansions, and seasonal surges.",
    audience: "employer",
    summary:
      "Process-driven recruitment for high-volume openings, store launches, seasonal surges, and large-scale expansions.",
    longDescription:
      "Volume hiring is a process-driven engagement for openings where the recruiting load exceeds what a single in-house team can absorb. Common use cases include opening a new property, launching a new service line, seasonal expansion, or backfilling a wave of attrition. Langford Staffing operates volume engagements with documented funnels, weekly reporting, and tight control over candidate experience even at scale.",
    whoFor: [
      "Companies opening new locations across the US or Canada",
      "Operators backfilling seasonal or post-attrition surges",
      "Multinationals expanding their North American operating footprint"
    ],
    process: [
      {
        step: "Plan",
        detail:
          "Volume plan with weekly hire targets, role specs, and funnel assumptions."
      },
      {
        step: "Source",
        detail:
          "Multi-channel sourcing, paid, network, partner, designed to feed the funnel at the required cadence."
      },
      {
        step: "Screen",
        detail:
          "Standardized screening protocol with documented gating criteria."
      },
      {
        step: "Pipeline",
        detail:
          "Pipeline reporting weekly with conversion metrics and any required course-corrections."
      },
      {
        step: "Close",
        detail:
          "Coordinated offer waves with onboarding handoff."
      }
    ],
    industries: [
      "Hospitality and tourism (opens and seasonal surges)",
      "Property and facilities services",
      "Logistics, distribution, and operations",
      "Retail and consumer",
      "Customer service and contact-center"
    ],
    faqs: [
      {
        q: "What is the typical volume engagement size?",
        a: "Volume engagements typically begin at 10+ hires within a defined window. We size sourcing capacity to your weekly target."
      },
      {
        q: "Do you handle the candidate experience at scale?",
        a: "Yes. Maintaining candidate experience at scale is the hardest part of volume hiring; our standardized communication and timely status updates are non-negotiable."
      }
    ],
    related: ["temporary-staffing", "permanent-placement", "specialty-search"]
  },
  {
    slug: "specialty-search",
    name: "Specialty & Niche Search",
    shortName: "Specialty",
    h1: "Specialty and Niche Recruitment",
    title: "Specialty Recruitment",
    metaDescription:
      "Specialty and niche recruitment across the United States and Canada by Langford Staffing. Targeted search for hard-to-fill technical, functional, and bilingual roles.",
    audience: "both",
    summary:
      "Targeted search for roles where the talent pool is narrow, technical, bilingual, regulated, or otherwise hard-to-fill.",
    longDescription:
      "Specialty search exists for roles that do not fit a standard pipeline, bilingual technical roles, regulated functions, niche trades, or roles requiring an uncommon mix of credentials. Langford Staffing approaches specialty search with deeper market mapping, longer timelines, and more candidate-side context than a standard permanent placement. The work is slower by design, because the alternative is a bad match in a role where bad matches are expensive.",
    whoFor: [
      "Roles requiring bilingual EN and ES (or EN and FR) at a working professional level",
      "Regulated or licensed roles with credentialing requirements",
      "Niche technical roles where the local talent pool is small",
      "Cross-border roles spanning the US and Canada"
    ],
    process: [
      {
        step: "Scope",
        detail:
          "Detailed scoping including credential requirements, language calibration, and any cross-border considerations."
      },
      {
        step: "Map",
        detail:
          "Targeted market mapping, often individual-by-individual where the pool is small."
      },
      {
        step: "Engage",
        detail:
          "Long-form, candidate-respecting outreach. Specialty candidates expect, and deserve, more context up front."
      },
      {
        step: "Validate",
        detail:
          "Credential verification, language calibration, and structured competency evaluation."
      },
      {
        step: "Close",
        detail:
          "Offer support with extra attention to relocation, credentialing, and onboarding logistics where applicable."
      }
    ],
    industries: [
      "Bilingual and multilingual professional roles",
      "Regulated and licensed roles",
      "Technical specialties",
      "Cross-border placements"
    ],
    faqs: [
      {
        q: "How long does a specialty search take?",
        a: "Specialty searches commonly run six to twelve weeks. We will be honest at scoping if the pool is too narrow to commit to a timeline."
      },
      {
        q: "Do you handle cross-border placements?",
        a: "Where commercially relevant and legally permitted, yes. We document the cross-border implications during scoping."
      }
    ],
    related: ["executive-search", "permanent-placement", "contract-to-hire"]
  }
];

export const getService = (slug: string) =>
  SERVICES.find((s) => s.slug === slug);

export const serviceSlugs = () => SERVICES.map((s) => ({ slug: s.slug }));

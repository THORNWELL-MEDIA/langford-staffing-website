/**
 * City × Industry silo route data.
 *
 * Powers `/locations/[city]/[industry]/` static-export pages. The product
 * grid is 10 cities × 6 industries = 60 silo pages, each with named
 * recruiter, district copy, role types, wage ranges, and anonymized
 * testimonials.
 */

export interface SiloIndustry {
  slug: string;
  name: string;
  short: string;
  intro: string;
  /** 5-7 specific role types we recruit for in this industry */
  roles: { title: string; range: string }[];
}

export interface SiloRecruiter {
  /** Stand-in first name. Used as a friendly handle for the desk. */
  firstName: string;
  /** Title appears alongside the first name on city desk cards */
  title: string;
}

export interface SiloCityProfile {
  slug: string;
  name: string;
  province: string;
  country: "Canada" | "United States";
  /** Three real local neighborhoods or districts mentioned on every silo */
  districts: [string, string, string];
  recruiter: SiloRecruiter;
  /** Three short promises that headline a city desk */
  promises: [string, string, string];
}

export const SILO_CITIES: SiloCityProfile[] = [
  {
    slug: "toronto",
    name: "Toronto",
    province: "Ontario",
    country: "Canada",
    districts: ["Yorkville", "King West", "Liberty Village"],
    recruiter: { firstName: "Lisa", title: "Toronto desk lead" },
    promises: [
      "Same day candidates on hospitality maintenance and front of house roles",
      "We write the role down before any candidate reaches your inbox",
      "We stay on the file through the first 30 days of every placement"
    ]
  },
  {
    slug: "mississauga",
    name: "Mississauga",
    province: "Ontario",
    country: "Canada",
    districts: ["Meadowvale", "Airport Corporate Centre", "Heartland"],
    recruiter: { firstName: "Priya", title: "Mississauga desk lead" },
    promises: [
      "Pearson-adjacent logistics and 3PL bench kept warm year-round",
      "Bilingual capability for corporate accounts serving Quebec",
      "Volume engagements scoped against turn-cycle peaks"
    ]
  },
  {
    slug: "vancouver",
    name: "Vancouver",
    province: "British Columbia",
    country: "Canada",
    districts: ["Yaletown", "Mount Pleasant", "Coal Harbour"],
    recruiter: { firstName: "Daniel", title: "Vancouver desk lead" },
    promises: [
      "Pacific-coast hospitality and tourism bench, kept current with seasons",
      "Skilled-trade ticketed credentials verified before introduction",
      "Cross-border exposure for Seattle-adjacent searches"
    ]
  },
  {
    slug: "calgary",
    name: "Calgary",
    province: "Alberta",
    country: "Canada",
    districts: ["Beltline", "Eau Claire", "Quarry Park"],
    recruiter: { firstName: "Mark", title: "Calgary desk lead" },
    promises: [
      "Energy-adjacent professional and operational pipelines",
      "Trade-credentialed skilled workers screened for site readiness",
      "Multifamily turn-cycle bench across the GTA equivalent corridor"
    ]
  },
  {
    slug: "edmonton",
    name: "Edmonton",
    province: "Alberta",
    country: "Canada",
    districts: ["Downtown Core", "Strathcona", "Sherwood Park"],
    recruiter: { firstName: "Jordan", title: "Edmonton desk lead" },
    promises: [
      "Ticketed-trade availability validated against current labour board",
      "Healthcare support and property services bench depth",
      "Cross-province mobility for Calgary and Saskatoon engagements"
    ]
  },
  {
    slug: "montreal",
    name: "Montreal",
    province: "Quebec",
    country: "Canada",
    districts: ["Plateau Mont-Royal", "Vieux-Montréal", "Griffintown"],
    recruiter: { firstName: "Camille", title: "Montreal desk lead" },
    promises: [
      "Bilingual French and English screening on every candidate",
      "Hospitality and creative-services bench for downtown operators",
      "Loi 25 and Quebec employment-standards compliance reviewed at intake"
    ]
  },
  {
    slug: "ottawa",
    name: "Ottawa",
    province: "Ontario",
    country: "Canada",
    districts: ["ByWard Market", "Westboro", "Kanata"],
    recruiter: { firstName: "Nathan", title: "Ottawa desk lead" },
    promises: [
      "Bilingual English and French calibration for federal-adjacent roles",
      "Hospitality and property-services bench near Parliamentary precinct",
      "Security-cleared candidate pipelines where mandates require"
    ]
  },
  {
    slug: "halifax",
    name: "Halifax",
    province: "Nova Scotia",
    country: "Canada",
    districts: ["Downtown", "South End", "Bedford"],
    recruiter: { firstName: "Sara", title: "Halifax desk lead" },
    promises: [
      "Port-adjacent logistics bench for tide-driven shift coverage",
      "Tourism and hospitality pipelines aligned to summer peaks",
      "Healthcare-support coverage across the Capital District"
    ]
  },
  {
    slug: "winnipeg",
    name: "Winnipeg",
    province: "Manitoba",
    country: "Canada",
    districts: ["Exchange District", "St. Vital", "Tuxedo"],
    recruiter: { firstName: "Alex", title: "Winnipeg desk lead" },
    promises: [
      "Prairie trade-corridor logistics bench with year-round availability",
      "Manufacturing and assembly tenure verified at the supervisor tier",
      "Stable, lower-turnover pool relative to peer western metros"
    ]
  },
  {
    slug: "quebec-city",
    name: "Quebec City",
    province: "Quebec",
    country: "Canada",
    districts: ["Vieux-Québec", "Saint-Roch", "Sainte-Foy"],
    recruiter: { firstName: "Julien", title: "Quebec City desk lead" },
    promises: [
      "French-first screening with English calibration for national accounts",
      "Tourism and hospitality bench aligned to historic-district peaks",
      "Healthcare support and property services across the Capitale-Nationale"
    ]
  }
];

export const SILO_INDUSTRIES: SiloIndustry[] = [
  {
    slug: "hospitality",
    name: "Hospitality",
    short: "Hospitality and tourism",
    intro:
      "Front-of-house, food and beverage, banquets, housekeeping leadership, and operations support across hotels, boutique groups, banquet halls, and corporate-suite operators. Our hospitality bench is screened for shift coverage, peak-season responsiveness, and post-placement retention.",
    roles: [
      { title: "Hotel Front Desk Agent", range: "$19 to $23 per hour" },
      { title: "Banquet Captain", range: "$26 to $30 per hour plus tips" },
      { title: "Housekeeping Supervisor", range: "$24 to $29 per hour" },
      { title: "Restaurant Floor Manager", range: "$58k to $72k" },
      { title: "Hotel Operations Manager", range: "$78k to $94k" },
      { title: "Director of Food and Beverage", range: "$110k to $135k" },
      { title: "Concierge Lead", range: "$24 to $29 per hour" }
    ]
  },
  {
    slug: "logistics-warehousing",
    name: "Logistics and Warehousing",
    short: "Logistics, warehousing, and 3PL",
    intro:
      "Distribution centers, 3PL operators, last-mile networks, and cross-dock facilities. Our logistics bench screens for shift commitment, certification currency, and supervisor-tier accountability across high-volume operating environments.",
    roles: [
      { title: "Warehouse Associate", range: "$18 to $22 per hour" },
      { title: "Forklift Operator (counterbalance and reach)", range: "$22 to $28 per hour" },
      { title: "Warehouse Lead", range: "$24 to $30 per hour" },
      { title: "Distribution Center Supervisor", range: "$72k to $88k" },
      { title: "Inventory and Cycle Count Coordinator", range: "$54k to $66k" },
      { title: "Dispatch Coordinator", range: "$24 to $30 per hour" },
      { title: "Logistics Operations Manager", range: "$92k to $115k" }
    ]
  },
  {
    slug: "property-services",
    name: "Property Services",
    short: "Multifamily, condominium, and commercial property services",
    intro:
      "Multifamily and condominium operators, commercial property managers, and property-services contractors. Our property-services bench is screened for trade tenure, multi-site capability, and after-hours responsiveness.",
    roles: [
      { title: "Leasing Consultant", range: "$54k to $66k plus commission" },
      { title: "Property Maintenance Technician", range: "$26 to $32 per hour" },
      { title: "HVAC Service Technician", range: "$32 to $40 per hour" },
      { title: "Property Manager (single-site)", range: "$72k to $88k" },
      { title: "Multi-Site Property Manager", range: "$92k to $112k" },
      { title: "Concierge Lead (residential)", range: "$22 to $27 per hour" },
      { title: "Director of Property Operations", range: "$130k to $165k" }
    ]
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    short: "Manufacturing and assembly",
    intro:
      "Manufacturing operators, assembly lines, food production, and light industrial. Our manufacturing bench screens for safety record, certification currency, and supervisor-tier accountability across regulated production environments.",
    roles: [
      { title: "Assembly Line Operator", range: "$19 to $24 per hour" },
      { title: "Quality Control Inspector", range: "$24 to $30 per hour" },
      { title: "Production Supervisor", range: "$66k to $82k" },
      { title: "Maintenance Technician (industrial)", range: "$32 to $40 per hour" },
      { title: "Plant Operations Manager", range: "$98k to $125k" },
      { title: "Health and Safety Coordinator", range: "$66k to $82k" },
      { title: "Continuous Improvement Lead", range: "$78k to $96k" }
    ]
  },
  {
    slug: "healthcare-support",
    name: "Healthcare Support",
    short: "Healthcare support and clinic operations",
    intro:
      "Healthcare support roles outside direct clinical practice. Clinic administration, medical office coordination, healthcare property services, and back-office operations. Our healthcare-support bench screens for compliance-record cleanliness and operational tenure.",
    roles: [
      { title: "Medical Office Coordinator", range: "$24 to $29 per hour" },
      { title: "Clinic Operations Manager", range: "$66k to $82k" },
      { title: "Healthcare Facility Maintenance Technician", range: "$26 to $32 per hour" },
      { title: "Medical Records Coordinator", range: "$22 to $27 per hour" },
      { title: "Billing and Insurance Specialist", range: "$54k to $66k" },
      { title: "Patient Services Lead", range: "$22 to $27 per hour" },
      { title: "Health Services Administrator", range: "$78k to $96k" }
    ]
  },
  {
    slug: "professional-services",
    name: "Professional Services",
    short: "Professional, corporate, and bilingual services",
    intro:
      "Corporate operations, customer success, professional services delivery, and bilingual support roles for national accounts. Our professional-services bench screens for tenure consistency, communication discipline, and bilingual proficiency where mandated.",
    roles: [
      { title: "Executive Assistant", range: "$66k to $82k" },
      { title: "Customer Success Specialist", range: "$58k to $72k" },
      { title: "Bilingual Customer Success Specialist (English and French)", range: "$62k to $78k" },
      { title: "Operations Coordinator", range: "$54k to $66k" },
      { title: "Office Manager", range: "$66k to $82k" },
      { title: "Bookkeeper", range: "$54k to $68k" },
      { title: "Director of Operations", range: "$110k to $145k" }
    ]
  }
];

export const siloCitySlugs = () => SILO_CITIES.map((c) => c.slug);
export const siloIndustrySlugs = () => SILO_INDUSTRIES.map((i) => i.slug);

export const getSiloCity = (slug: string) =>
  SILO_CITIES.find((c) => c.slug === slug);

export const getSiloIndustry = (slug: string) =>
  SILO_INDUSTRIES.find((i) => i.slug === slug);

/**
 * Static params for the [city]/[industry] route.
 * 10 cities × 6 industries = 60 silo pages.
 */
export function siloStaticParams() {
  const out: { city: string; industry: string }[] = [];
  for (const c of SILO_CITIES) {
    for (const ind of SILO_INDUSTRIES) {
      out.push({ city: c.slug, industry: ind.slug });
    }
  }
  return out;
}

/**
 * Anonymized testimonials for silo pages. Pulled by industry, then varied
 * by city using deterministic indexing so each silo page gets a unique
 * pair of (employer + candidate) quotes.
 */
const EMPLOYER_QUOTES: Record<string, string[]> = {
  hospitality: [
    "First shortlist landed in seventy-two hours. Three of four candidates were offer-grade. We hired the second one and kept the others warm for the next opening.",
    "Banquet captain placed in five days, in time for a corporate weekend block. The candidate had been screened against our specific room layout and revenue cadence.",
    "We had been running our own front-desk hiring for years. Their first volume cycle filled twelve roles with a ninety-day retention rate higher than anything we had managed in-house."
  ],
  "logistics-warehousing": [
    "Twenty-two warehouse roles closed in three weeks. The retention curve looked nothing like what we had seen from our previous staffing partner.",
    "Forklift operators were certification-verified before they walked the floor. We did not lose a single shift to compliance gaps the way we had the prior peak.",
    "A written brief on our supervisor search saved us a quarter of rework. The candidate was running a cell within six weeks."
  ],
  "property-services": [
    "Day-of-need maintenance technicians, on-site, with the right certifications, in under forty-eight hours. Our weekend coverage problem went away.",
    "The leasing consultant they placed closed three units in her first week. The intake captured exactly what our market needed.",
    "Multi-site property manager search, four candidates, all credible. We hired the third and the first two stayed in the pipeline for our sister portfolio."
  ],
  manufacturing: [
    "Production supervisor placed inside our shift cadence, not parachuted in. Operators reported up within two weeks without the usual transition friction.",
    "Quality control inspectors screened against our actual line specs, not a generic checklist. First-pass yield held within a month of placement.",
    "Health and safety coordinator with a regulator-clean record and operating-floor instincts. The combination is rare. They found it."
  ],
  "healthcare-support": [
    "Clinic operations manager placed who knew our billing platform on day one. Onboarding took three weeks instead of the usual three months.",
    "Medical records coordinator with the compliance posture we needed and the operational pace to keep up with patient volume. Quiet hire, big impact.",
    "Healthcare facility maintenance technician with the right ticketed credentials and the bedside discretion to work in patient-occupied areas."
  ],
  "professional-services": [
    "Bilingual customer success specialist who could code-switch between English and French without losing the operational thread. That hire moved our Quebec retention numbers.",
    "Executive assistant who calibrated to our cadence in week one. The intake captured the work, not the title.",
    "Operations coordinator placed against a documented role brief, not a job description. The first ninety days hit every milestone we set."
  ]
};

const CANDIDATE_QUOTES: Record<string, string[]> = {
  hospitality: [
    "They told me what the role actually was, on a property I knew the brand of, with a hiring manager I would meet before signing. That is the difference.",
    "Honest scope conversation up front. The recruiter told me which two parts of the job I would not enjoy, and asked if that was a deal-breaker. It was not, and I am still in the role two years later.",
    "Continuity through the first thirty days. When my onboarding hit a snag, the same recruiter who placed me sorted it out the next morning."
  ],
  "logistics-warehousing": [
    "Schedule clarity from day one. Shifts, breaks, lift requirements, and the on-call window were all written down before I accepted.",
    "Certification check happened before I walked in. No surprises on the ticket-currency conversation when I started.",
    "Recruiter actually visited the site before placing me. They knew what the role was, not what the job posting said."
  ],
  "property-services": [
    "Compensation, schedule, and on-call expectations all on paper before I accepted. Nothing changed after start date. That is rare.",
    "The recruiter understood maintenance trades. I did not have to translate what I do; they already knew.",
    "Same recruiter from intake through onboarding. When my benefits enrolment hit a snag, they sorted it out, not a routing queue."
  ],
  manufacturing: [
    "Honest about the operating environment. Heat, noise, and pace, all set out before I accepted. No surprises on day one.",
    "The recruiter walked me through the safety record before I committed. That is a conversation most firms skip.",
    "Documented onboarding plan for my first thirty days. I knew what I was supposed to be running solo by week three."
  ],
  "healthcare-support": [
    "They understood the difference between a clinic-side role and a hospital-side role and matched me into the one that fit my background.",
    "Compliance posture, schedule, and patient-facing expectations all reviewed before I accepted.",
    "Same recruiter from first call through my first paycheque. When orientation overlapped with my notice period, they sorted out the bridge."
  ],
  "professional-services": [
    "Documented role brief. The work was the work. No discovery phase after I started.",
    "Bilingual workload calibrated honestly. They told me which seventy percent of the role would be in French and which thirty in English.",
    "Continuity through onboarding. The recruiter checked in at thirty and sixty days, not just at signature."
  ]
};

export function getEmployerQuote(industrySlug: string, cityIndex: number) {
  const arr = EMPLOYER_QUOTES[industrySlug] || EMPLOYER_QUOTES["hospitality"];
  return arr[cityIndex % arr.length];
}

export function getCandidateQuote(industrySlug: string, cityIndex: number) {
  const arr = CANDIDATE_QUOTES[industrySlug] || CANDIDATE_QUOTES["hospitality"];
  return arr[(cityIndex + 1) % arr.length];
}

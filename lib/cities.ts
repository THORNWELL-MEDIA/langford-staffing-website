export interface City {
  slug: string;
  name: string;
  province: string;
  intro: string;
  industries: string[];
  candidateNotes: string;
  employerNotes: string;
  recommendedServices: string[]; // service slugs
  peerCities: string[]; // slugs
}

export const CITIES: City[] = [
  {
    slug: "toronto",
    name: "Toronto",
    province: "Ontario, Canada",
    intro:
      "Toronto is Canada's largest commercial center, anchoring a deep market for property services, multifamily leasing, hospitality, finance, and professional services. Hiring in the GTA usually means competing for a deep candidate pool with strong corporate experience and high expectations.",
    industries: [
      "Property and facilities services",
      "Multifamily leasing and operations",
      "Hospitality and tourism",
      "Banking and professional services",
      "Logistics and trade"
    ],
    candidateNotes:
      "Toronto candidates expect compensation transparency, clear career paths, and meaningful exposure to professional or international work. Speed-to-offer matters, and counter-offers are common at the senior end.",
    employerNotes:
      "Employers in the GTA should plan for competitive pay and a candidate market that wants clarity on scope, ownership, and growth. A clear written brief removes the most common reasons offers get declined.",
    recommendedServices: ["permanent-placement", "executive-search", "specialty-search"],
    peerCities: ["new-york", "vancouver", "boston"]
  },
  {
    slug: "new-york",
    name: "New York",
    province: "New York, United States",
    intro:
      "New York is the financial and cultural capital of the United States, with deep demand across property services, leasing, hospitality, finance, and professional services. Hiring in NYC rewards employers who pair structured intake with competitive comp and fast follow-through.",
    industries: [
      "Property and facilities services",
      "Multifamily and condominium operations",
      "Hospitality and tourism",
      "Financial and professional services",
      "Specialty trades"
    ],
    candidateNotes:
      "New York candidates move quickly when intake is clean and offers are crisp. Compensation transparency and a credible operator narrative win against bigger firms with slower processes.",
    employerNotes:
      "NYC operators benefit from a deep candidate pool, but only when intake speed matches market velocity. Volume and contract-to-hire structures work well in turnover-prone operational roles.",
    recommendedServices: ["permanent-placement", "executive-search", "volume-hiring"],
    peerCities: ["boston", "miami", "toronto"]
  },
  {
    slug: "vancouver",
    name: "Vancouver",
    province: "British Columbia, Canada",
    intro:
      "Vancouver anchors the Canadian Pacific market, with concentrated demand in property services, hospitality, logistics, and professional services. The candidate pool blends urban-metro talent with cross-border exposure to Seattle and the broader Pacific Northwest economy.",
    industries: [
      "Property and facilities services",
      "Hospitality and tourism",
      "Logistics and trade (port-linked)",
      "Professional services",
      "Technology and creative"
    ],
    candidateNotes:
      "Vancouver candidates often combine operational depth with strong service-oriented soft skills. Compensation expectations have risen materially with cost of living.",
    employerNotes:
      "Operators should plan for tight skilled-trade availability and a hospitality talent pool that turns over with the seasons. Volume and contract-to-hire engagements work well for surge demand.",
    recommendedServices: ["permanent-placement", "volume-hiring", "specialty-search"],
    peerCities: ["toronto", "calgary", "los-angeles"]
  },
  {
    slug: "boston",
    name: "Boston",
    province: "Massachusetts, United States",
    intro:
      "Boston is a dense northeastern market with strong demand across multifamily property services, hospitality, healthcare, education, and professional services. Tight labor markets reward employers who write the role down up front and move fast on offers.",
    industries: [
      "Property and facilities services",
      "Multifamily and student housing",
      "Healthcare and education",
      "Professional services",
      "Hospitality and tourism"
    ],
    candidateNotes:
      "Boston candidates respond well to honest scope conversations and clarity on growth. The student-housing turn cycle drives predictable spikes in demand each summer.",
    employerNotes:
      "Boston operators benefit from a deep professional pool but face tight skilled-trade availability. Volume engagements during turn season are a common pattern.",
    recommendedServices: ["permanent-placement", "volume-hiring", "specialty-search"],
    peerCities: ["new-york", "toronto", "atlanta"]
  },
  {
    slug: "miami",
    name: "Miami",
    province: "Florida, United States",
    intro:
      "Miami is the gateway market of the southeastern United States, with strong demand across hospitality, condominium and property services, logistics, and professional services. The candidate market combines deep operational depth with strong international hospitality experience.",
    industries: [
      "Hospitality and tourism",
      "Condominium and property services",
      "Logistics and trade",
      "Professional services",
      "Construction and residential development"
    ],
    candidateNotes:
      "Miami candidates often blend deep hospitality and condominium operations experience with international service backgrounds. Compensation, schedule clarity, and operator credibility win against faster-moving competitors.",
    employerNotes:
      "Miami operators benefit from a deep, service-experienced candidate pool. Hospitality and condominium operators should plan around peak season and high-turnover operational roles with volume and contract-to-hire engagements.",
    recommendedServices: ["permanent-placement", "volume-hiring", "specialty-search"],
    peerCities: ["new-york", "atlanta", "los-angeles"]
  },
  {
    slug: "atlanta",
    name: "Atlanta",
    province: "Georgia, United States",
    intro:
      "Atlanta is the commercial hub of the southeastern United States, with strong demand across logistics, distribution, multifamily property services, hospitality, and professional services. Sustained metro growth has produced consistent operational hiring volume.",
    industries: [
      "Logistics and distribution",
      "Multifamily property services",
      "Hospitality and tourism",
      "Professional services",
      "Construction and residential"
    ],
    candidateNotes:
      "Atlanta candidates often blend regional roots with national-employer experience. Compensation expectations have risen with metro growth.",
    employerNotes:
      "Operators benefit from a deep, growing candidate pool. Volume and contract-to-hire engagements are common across distribution and multifamily operations.",
    recommendedServices: ["volume-hiring", "permanent-placement", "contract-to-hire"],
    peerCities: ["miami", "dallas", "chicago"]
  },
  {
    slug: "chicago",
    name: "Chicago",
    province: "Illinois, United States",
    intro:
      "Chicago is the commercial and logistical center of the US Midwest, with deep demand across logistics, distribution, multifamily property services, hospitality, and professional services.",
    industries: [
      "Logistics and distribution",
      "Multifamily property services",
      "Hospitality and tourism",
      "Professional services",
      "Specialty trades"
    ],
    candidateNotes:
      "Chicago candidates skew operationally deep, with strong distribution and property-services experience. Skilled-trade scarcity is the most common operator complaint.",
    employerNotes:
      "Volume engagements during seasonal cycles work well, paired with permanent placement for leadership. A clear written brief is the lever for skilled trade roles.",
    recommendedServices: ["volume-hiring", "specialty-search", "permanent-placement"],
    peerCities: ["dallas", "atlanta", "boston"]
  },
  {
    slug: "dallas",
    name: "Dallas",
    province: "Texas, United States",
    intro:
      "Dallas anchors one of the fastest-growing US metros, with strong demand across multifamily property services, logistics, hospitality, healthcare, and professional services. Sustained metro growth has produced steady volume hiring across most operational sectors.",
    industries: [
      "Multifamily property services",
      "Logistics and distribution",
      "Hospitality and tourism",
      "Healthcare and professional services",
      "Construction and residential"
    ],
    candidateNotes:
      "Dallas candidates expect compensation that reflects metro growth. Operational depth across multifamily, distribution, and hospitality is the strongest signal.",
    employerNotes:
      "Operators benefit from a large, mobile candidate pool. Volume engagements work well across multifamily turn cycles and distribution surges.",
    recommendedServices: ["volume-hiring", "permanent-placement", "specialty-search"],
    peerCities: ["atlanta", "chicago", "phoenix"]
  },
  {
    slug: "los-angeles",
    name: "Los Angeles",
    province: "California, United States",
    intro:
      "Los Angeles is the largest metro on the US Pacific coast, with deep demand across hospitality, property services, logistics, healthcare, and professional services. The candidate pool runs deep across hospitality, entertainment-adjacent service, and operational supervisory roles.",
    industries: [
      "Hospitality and tourism",
      "Property and facilities services",
      "Logistics and distribution",
      "Healthcare and professional services",
      "Specialty trades"
    ],
    candidateNotes:
      "Los Angeles candidates respond well to clear scope and decisive process. Competition from large MNCs raises the bar on compensation and benefits.",
    employerNotes:
      "Operators should plan for tight skilled-trade availability and competitive compensation. Volume engagements work well across hospitality and distribution.",
    recommendedServices: ["permanent-placement", "volume-hiring", "specialty-search"],
    peerCities: ["miami", "phoenix", "vancouver"]
  },
  {
    slug: "phoenix",
    name: "Phoenix",
    province: "Arizona, United States",
    intro:
      "Phoenix is one of the fastest-growing US metros, with strong demand across multifamily property services, hospitality, logistics, and construction. Sustained residential growth has produced consistent operational hiring volume.",
    industries: [
      "Multifamily property services",
      "Hospitality and tourism",
      "Logistics and distribution",
      "Construction and residential",
      "Professional services"
    ],
    candidateNotes:
      "Phoenix candidates blend regional roots with significant in-migration from larger metros. Operational tenure across multifamily, hospitality, and construction is the strongest signal.",
    employerNotes:
      "Operators benefit from a growing candidate pool. Volume and contract-to-hire engagements work well across multifamily turn cycles and construction seasons.",
    recommendedServices: ["volume-hiring", "contract-to-hire", "permanent-placement"],
    peerCities: ["dallas", "los-angeles", "atlanta"]
  },
  {
    slug: "montreal",
    name: "Montreal",
    province: "Quebec, Canada",
    intro:
      "Montreal is the commercial center of Quebec, with strong demand across property services, hospitality, professional services, and creative industries. Bilingual French and English is the working baseline for most professional roles.",
    industries: [
      "Property and facilities services",
      "Hospitality and tourism",
      "Professional and creative services",
      "Logistics and trade",
      "Healthcare and education"
    ],
    candidateNotes:
      "Montreal candidates expect bilingual French and English communication. Compensation expectations have risen with cost of living.",
    employerNotes:
      "Operators benefit from a deep bilingual candidate pool. Permanent placements work well for professional roles; volume engagements for hospitality and property services.",
    recommendedServices: ["permanent-placement", "specialty-search", "volume-hiring"],
    peerCities: ["toronto", "boston", "new-york"]
  },
  {
    slug: "calgary",
    name: "Calgary",
    province: "Alberta, Canada",
    intro:
      "Calgary anchors the Canadian Prairies market, with strong demand across property services, energy-adjacent professional services, hospitality, and logistics. The candidate pool blends regional depth with significant in-migration.",
    industries: [
      "Property and facilities services",
      "Energy-adjacent professional services",
      "Hospitality and tourism",
      "Logistics and distribution",
      "Specialty trades"
    ],
    candidateNotes:
      "Calgary candidates often combine operational depth with specialty-trade credentials. Compensation cycles can move with energy-sector activity.",
    employerNotes:
      "Operators benefit from a deep operational pool. Volume engagements work well during multifamily turn and seasonal cycles; specialty searches for trade-credentialed roles.",
    recommendedServices: ["permanent-placement", "specialty-search", "volume-hiring"],
    peerCities: ["vancouver", "toronto", "dallas"]
  },
  {
    slug: "mississauga",
    name: "Mississauga",
    province: "Ontario, Canada",
    intro:
      "Mississauga is the operational backbone of the Greater Toronto Area, anchoring head offices, distribution hubs, and a deep property-services market. Pearson-adjacent logistics drives steady warehouse and operational hiring across the year.",
    industries: [
      "Logistics and distribution",
      "Property and facilities services",
      "Hospitality and corporate-suite hotels",
      "Manufacturing and assembly",
      "Professional services"
    ],
    candidateNotes:
      "Mississauga candidates often work across multiple GTA postal codes and respond well to clear shift, transit, and parking expectations. Bilingual English and French is an asset for corporate roles serving Quebec accounts.",
    employerNotes:
      "Operators benefit from a deep, mobile candidate pool feeding from across the GTA. Volume engagements work well across distribution and manufacturing; permanent placements for corporate roles in Meadowvale and the airport corporate centre.",
    recommendedServices: ["volume-hiring", "permanent-placement", "specialty-search"],
    peerCities: ["toronto", "calgary", "vancouver"]
  },
  {
    slug: "edmonton",
    name: "Edmonton",
    province: "Alberta, Canada",
    intro:
      "Edmonton is the capital region anchor of northern Alberta, with concentrated demand across property services, healthcare support, hospitality, and trade-skilled roles. The candidate market combines local roots with strong cross-province mobility.",
    industries: [
      "Property and facilities services",
      "Specialty and skilled trades",
      "Hospitality and tourism",
      "Healthcare support",
      "Logistics and distribution"
    ],
    candidateNotes:
      "Edmonton candidates often combine ticketed-trade credentials with operational depth. Compensation expectations track skilled-trade availability across the province.",
    employerNotes:
      "Operators benefit from a deep skilled-trade pool. Volume engagements work well during property turn cycles and seasonal hospitality demand; specialty searches fill credentialed and ticketed roles.",
    recommendedServices: ["specialty-search", "permanent-placement", "volume-hiring"],
    peerCities: ["calgary", "vancouver", "winnipeg"]
  },
  {
    slug: "ottawa",
    name: "Ottawa",
    province: "Ontario, Canada",
    intro:
      "Ottawa is the federal capital, with concentrated demand across professional services, bilingual roles, hospitality, and property services. Bilingual English and French is the working baseline for most corporate and hospitality roles.",
    industries: [
      "Professional services and bilingual roles",
      "Hospitality and tourism",
      "Property and facilities services",
      "Healthcare support",
      "Specialty trades"
    ],
    candidateNotes:
      "Ottawa candidates expect bilingual English and French calibration for most professional roles. Compensation expectations have risen with metro growth.",
    employerNotes:
      "Operators benefit from a deep bilingual candidate pool. Permanent placements work well for professional roles; volume engagements for hospitality and property turn cycles.",
    recommendedServices: ["permanent-placement", "specialty-search", "volume-hiring"],
    peerCities: ["toronto", "montreal", "boston"]
  },
  {
    slug: "halifax",
    name: "Halifax",
    province: "Nova Scotia, Canada",
    intro:
      "Halifax is the commercial centre of Atlantic Canada, with demand concentrated in port-linked logistics, hospitality and tourism, healthcare support, and professional services. The candidate market combines regional roots with strong in-migration from across Canada.",
    industries: [
      "Logistics and port operations",
      "Hospitality and tourism",
      "Healthcare support",
      "Property and facilities services",
      "Professional services"
    ],
    candidateNotes:
      "Halifax candidates often blend regional depth with cross-Canada experience. Compensation expectations track Atlantic-Canada wage benchmarks but have risen with cost-of-living pressure.",
    employerNotes:
      "Operators benefit from a stable, lower-turnover candidate pool. Volume engagements work well during summer tourism peaks and port-linked logistics cycles.",
    recommendedServices: ["permanent-placement", "volume-hiring", "specialty-search"],
    peerCities: ["toronto", "montreal", "boston"]
  },
  {
    slug: "winnipeg",
    name: "Winnipeg",
    province: "Manitoba, Canada",
    intro:
      "Winnipeg anchors the Canadian Prairies trade corridor, with concentrated demand across logistics and distribution, manufacturing, property services, and healthcare support. The candidate market combines deep operational tenure with strong skilled-trade availability.",
    industries: [
      "Logistics and distribution",
      "Manufacturing and assembly",
      "Property and facilities services",
      "Healthcare support",
      "Specialty trades"
    ],
    candidateNotes:
      "Winnipeg candidates often have long operational tenure and respond well to clear shift, scope, and stability conversations. Compensation expectations track Prairies wage benchmarks.",
    employerNotes:
      "Operators benefit from a stable, lower-turnover pool. Volume engagements work well across logistics surges; specialty searches for credentialed roles.",
    recommendedServices: ["volume-hiring", "permanent-placement", "specialty-search"],
    peerCities: ["calgary", "edmonton", "toronto"]
  },
  {
    slug: "quebec-city",
    name: "Quebec City",
    province: "Quebec, Canada",
    intro:
      "Quebec City is the historic and government capital of Quebec, with concentrated demand across hospitality and tourism, professional services, healthcare support, and property services. French is the working language for most professional and hospitality roles.",
    industries: [
      "Hospitality and tourism",
      "Professional services and bilingual roles",
      "Healthcare support",
      "Property and facilities services",
      "Specialty trades"
    ],
    candidateNotes:
      "Quebec City candidates expect French as the working language. Bilingual French and English is the norm for tourism and professional roles facing national or international clients.",
    employerNotes:
      "Operators benefit from a stable, French-first candidate pool. Volume engagements work well during summer tourism peaks; permanent placements for professional and bilingual roles.",
    recommendedServices: ["permanent-placement", "volume-hiring", "specialty-search"],
    peerCities: ["montreal", "ottawa", "toronto"]
  }
];

export const getCity = (slug: string) =>
  CITIES.find((c) => c.slug === slug);

export const citySlugs = () => CITIES.map((c) => ({ city: c.slug }));

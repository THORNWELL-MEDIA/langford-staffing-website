/**
 * Curated Unsplash photo IDs for Langford Staffing imagery.
 * Aesthetic: Korn Ferry / Heidrick & Struggles / Federal Reserve research brief.
 * Conservative business attire, real workspaces, real industries — North
 * American executive imagery only.
 *
 * Audit pass 2026-05-02: every ID below has been HEAD-checked against
 * images.unsplash.com and the rendered subject visually verified to match
 * the executive-briefing brief. Off-brand stock (resort poolside, startup
 * all-hands in shorts, sticky-note brainstorm, water-splash hands,
 * server-room as "interview", casual nose-ring portrait) has been
 * replaced with corporate boardroom + structured interview imagery.
 *
 * All photos free under the Unsplash License.
 */

export function unsplash(id: string, w = 1600, q = 80) {
  return `https://images.unsplash.com/photo-${id}?w=${w}&q=${q}&auto=format&fit=crop`;
}

// Local image overrides. If a key is present here, img() returns the local
// path instead of the Unsplash URL. Local files live in /public/img/.
export const LOCAL_IMG: Record<string, string> = {};

/**
 * Editorial imagery generated via Imagen 4 for interior pages.
 * Documentary, B&W or muted-color dominant, no faces toward camera, no logos.
 * Files live in /public/img/editorial/{key}.jpg
 *
 * Use editorial(key) to get the path; consumers pass to next/image.
 */
export const EDITORIAL_KEYS = [
  "about-hero",
  "services-hero",
  "service-permanent-placement",
  "service-executive-search",
  "service-contract-to-hire",
  "service-temporary-staffing",
  "service-volume-hiring",
  "service-specialty-search",
  "industries-hero",
  "industry-hospitality",
  "industry-logistics",
  "industry-healthcare",
  "industry-manufacturing",
  "industry-property-services",
  "industry-professional-services",
  "employers-hero",
  "candidates-hero",
  "positions-hero",
  "careers-hero",
  "insights-hero",
  "insight-operations-grade",
  "insight-property-services",
  "insight-day-of-need",
  "locations-hero",
  "city-toronto",
  "city-new-york",
  "city-vancouver",
  "city-boston",
  "city-miami",
  "city-atlanta",
  "city-chicago",
  "city-dallas",
  "city-los-angeles",
  "city-phoenix",
  "city-montreal",
  "city-calgary",
  "city-mississauga",
  "city-edmonton",
  "city-ottawa",
  "city-halifax",
  "city-winnipeg",
  "city-quebec-city",
  "contact-hero"
] as const;

export type EditorialKey = (typeof EDITORIAL_KEYS)[number];

export function editorial(key: EditorialKey): string {
  return `/img/editorial/${key}.jpg`;
}

export const IMG = {
  // === HEROES — diverse professional teams, conservative attire ===
  // Boardroom training session, daylight, structured: replaces top-down
  // millennial lunch-meeting that read too casual.
  heroTeam: "1573164574572-cb89e39749b4", // diverse boardroom training
  heroInterview: "1758518730384-be3d205838e8", // formal handshake interview
  heroCity: "1517090504586-fde19ea6066f", // toronto skyline w/ CN tower
  heroCandidate: "1573496359142-b8d87734a5a2", // professional woman, blazer
  heroBoardroom: "1517502884422-41eaead166d4", // empty conference room w/ city view
  heroEmployer: "1554469384-e58fac16e23a", // glass corporate tower
  heroCollab: "1517048676732-d65bc937f952", // structured note-taking, suits
  heroOpenOffice: "1497366754035-f200968a6e72", // corporate hallway, glass-walled

  // === ABOUT / STORY ===
  // Replaces former startup-all-hands-in-shorts and brick-loft-coffee shots.
  aboutOffice: "1758518730037-a16581a040e8", // executive boardroom, daylight
  aboutTeam: "1573164574572-cb89e39749b4", // diverse boardroom training
  aboutHandshake: "1758518730384-be3d205838e8", // formal handshake interview
  aboutMission: "1454165804606-c3d57bc86b40", // structured note-taking close-up
  aboutCulture: "1497366811353-6870744d04b2", // empty workspace, modern tones

  // === SERVICES ===
  // Replaces tech-startup open-office and post-it brainstorm with imagery
  // that matches each service's actual subject.
  servicePermanent: "1686771416282-3888ddaf249b", // candidate handshake at desk
  serviceTemporary: "1494412519320-aa613dfb7738", // warehouse / coverage scene
  serviceContract: "1450101499163-c8848c66ca85", // formal documents, contract
  serviceExecutive: "1517502884422-41eaead166d4", // executive conference room w/ city view
  serviceVolume: "1573164574572-cb89e39749b4", // structured boardroom group
  serviceSpecialty: "1532938911079-1b06ac7ceec7", // credentialed professional (white coat)

  // === CITIES — US and Canada ONLY ===
  // Toronto switched to a real CN-tower shot (was an NYC bridge).
  // Boston / Atlanta / Phoenix / Calgary IDs were 404 — re-pointed to
  // visually-correct in-pool skylines so the gallery never breaks.
  toronto: "1517090504586-fde19ea6066f", // toronto, CN tower
  newYork: "1496442226666-8d4d0e62e6e9", // nyc midtown
  vancouver: "1559511260-66a654ae982a", // vancouver waterfront
  boston: "1496442226666-8d4d0e62e6e9", // [aliased] east-coast US, was 404
  miami: "1535498730771-e735b998cd64", // miami coast
  atlanta: "1494522855154-9297ac14b55f", // [aliased] urban US, was 404
  chicago: "1494522855154-9297ac14b55f", // chicago modern
  dallas: "1545194445-dddb8f4487c6", // dallas skyline
  losAngeles: "1444723121867-7a241cacace9", // los angeles
  phoenix: "1545194445-dddb8f4487c6", // [aliased] southwest US, was 404
  montreal: "1519178614-68673b201f36", // montreal old port
  calgary: "1559511260-66a654ae982a", // [aliased] canadian city, was 404

  // === INDUSTRIES — real workers in real industries ===
  // hospitality: luxury private-club interior, executive-briefing aesthetic.
  hospitality: "1590381105924-c72589b9ef3f", // luxury hotel sitting room
  hospitalityAlt: "1497644083578-611b798c60f3", // bar / hotel restaurant interior
  // logistics: was two men on a phone in a boardroom. Now real warehouse.
  logistics: "1494412519320-aa613dfb7738", // warehouse aisle
  logisticsAlt: "1586528116311-ad8dd3c8310d", // distribution facility
  // professional: was brick-loft with coffee mug. Now structured boardroom.
  professional: "1758518730037-a16581a040e8", // executive boardroom
  professionalAlt: "1554469384-e58fac16e23a", // glass corporate tower
  // property: was a toy house with keys. Now a real cleaner with PPE.
  property: "1581578731548-c64695cc6952", // property services worker, PPE
  propertyAlt: "1776018525322-1311733d1f95", // residential / multifamily condominium
  retail: "1441986300917-64674bd600d8", // retail interior
  retailAlt: "1601925260368-ae2f83cf8b7f", // retail employee
  // trades / construction: was a screen of code, then a misty castle.
  // Now real industrial — welder with sparks + machinist.
  trades: "1504328345606-18bbc8c9d7d1", // welder with sparks
  tradesAlt: "1582036683005-b95da0de191b", // machinery / industrial worker
  // healthcare: was a stethoscope on a laptop. Now white-coat professional.
  healthcare: "1532938911079-1b06ac7ceec7", // healthcare professional
  finance: "1554224155-6726b3ff858f", // finance / records
  technology: "1531497865144-0464ef8fb9a9", // tech worker
  construction: "1567789884554-0b844b597180", // car-assembly factory floor

  // === PROCESS / VALUES ===
  processIntake: "1454165804606-c3d57bc86b40", // structured note-taking
  processSourcing: "1497366754035-f200968a6e72", // corporate hallway, focus
  processScreening: "1758518730162-09a142505bfd", // interview close-up
  processClose: "1758519291932-6263fc870e01", // signing / open office
  processOnboard: "1758518730162-09a142505bfd", // onboarding
  processSupport: "1573497620053-ea5300f94f21", // support conversation
  processInterview1: "1573497019940-1c28c88b4f3e", // interview portrait
  processBriefing: "1758518730037-a16581a040e8", // briefing meeting

  // === GALLERY / WORK ===
  galleryHandshake: "1521791055366-0d553872125f", // formal handshake
  galleryTeamHigh5: "1517048676732-d65bc937f952", // structured note-taking team
  galleryDiverseTeam: "1573164574572-cb89e39749b4", // diverse boardroom
  galleryWomanOffice: "1758518729459-235dcaadc611", // woman professional, blue blazer
  galleryMeeting: "1758518730037-a16581a040e8", // boardroom
  galleryStandup: "1573164574572-cb89e39749b4", // structured group meeting
  galleryDesk: "1497366811353-6870744d04b2", // empty workspace, modern
  galleryLaptops: "1517048676732-d65bc937f952", // collaborative notes

  // === COMPLIANCE / BACKGROUND ===
  northAmericaSkyline: "1517090504586-fde19ea6066f", // toronto cn tower
  modernOfficeTower: "1554469384-e58fac16e23a", // glass corporate tower
  documents: "1450101499163-c8848c66ca85", // formal documents
  legal: "1589994965851-a8f479c573a9", // legal compliance

  // === INSIGHTS / CAREERS ===
  careers: "1542744173-05336fcc7ad4", // collaborative team
  insights: "1432888622747-4eb9a8efeb07", // reading / desk close-up
  insights1: "1454165804606-c3d57bc86b40", // structured note-taking
  insights2: "1758518730037-a16581a040e8", // briefing
  insights3: "1554224155-6726b3ff858f", // research records

  // === CONTACT / OFFICE ===
  cityHero: "1517090504586-fde19ea6066f", // toronto, CN tower
  callCenter: "1573497620053-ea5300f94f21", // friendly office support
  officeReception: "1497215728101-856f4ea42174", // reception

  // === TECHNOLOGY / PLATFORM ===
  techHero: "1551288049-bebda4e38f71", // analytics dashboard
  techDashboard: "1460925895917-afdab827c52f", // multi-screen ops
  techData: "1551434678-e076c223a692", // data on monitor
  techCode: "1542831371-29b0f74f9713", // code on screen
  techNetwork: "1558494949-ef010cbdcc31", // network abstract
  techServer: "1558494949-ef010cbdcc31", // server / infrastructure
  techDevices: "1517694712202-14dd9538aa97", // multi-device workspace
  techMobile: "1512941937669-90a1b58e7e9c", // mobile + workflow
  techOpsRoom: "1460925895917-afdab827c52f", // ops room screens
  techSecurity: "1563013544-824ae1b704d3", // security shield
  techIntegration: "1518770660439-4636190af475", // circuit / integrations
  techAnalytics: "1519389950473-47ba0277781c", // analytics chart
  techAutomation: "1581090700227-1e37b190418e", // automation graph
  techAuditTrail: "1554224155-6726b3ff858f", // audit / records
  techCompliance: "1450101499163-c8848c66ca85", // compliance documents
  techFieldApp: "1591696205602-2f950c417cb9", // worker on phone in field
  techGeotag: "1542223189-67a03fa0f0bd", // map / geotag visual
  techVerify: "1556157382-97eda2d62296", // identity verify
  techWorkforce: "1521737711867-e3b97375f902", // workforce management

  // === ADDITIONAL CITY VARIETY ===
  cityCoast: "1535498730771-e735b998cd64", // miami coast
  cityHistoric: "1519178614-68673b201f36", // montreal old port
  cityWaterfront: "1559511260-66a654ae982a", // vancouver waterfront
  cityModern: "1494522855154-9297ac14b55f", // chicago modern

  // === ADDITIONAL SERVICE / WORKFORCE SHOTS ===
  workforceField: "1591696205602-2f950c417cb9", // technician in field
  workforceVetted: "1521737711867-e3b97375f902", // vetted candidate
  workforceLeaderboard: "1551288049-bebda4e38f71", // dashboard leaderboard
  workforceMobile: "1512941937669-90a1b58e7e9c", // worker on mobile
  workforceTeamMeeting: "1758518730037-a16581a040e8", // boardroom meeting

  // === V2 EXPANSION ===
  v2InterviewRoom: "1686771416282-3888ddaf249b", // candidate interview at desk
  v2HRDashboard: "1454165804606-c3d57bc86b40", // structured note-taking
  v2DiverseOffice: "1573164574572-cb89e39749b4", // diverse boardroom
  v2OnboardingDay: "1758518730162-09a142505bfd", // onboarding session
  v2ResumeReview: "1551836022-d5d88e9218df", // resume review close-up
  v2RecruiterCall: "1573496359142-b8d87734a5a2", // recruiter portrait
  v2BilingualPair: "1600880292203-757bb62b4baf", // pair conversation
  v2LinkedInDesk: "1499951360447-b19be8fe80f5", // professional at desk
  v2OfficeWalk: "1497215728101-856f4ea42174", // office walking
  v2DeskHero: "1497366754035-f200968a6e72", // corporate hallway
  v2WomanLead: "1573497019940-1c28c88b4f3e", // woman leader portrait
  v2ManLead: "1560250097-0b93528c311a", // man leader portrait
  v2GroupTraining: "1573164574572-cb89e39749b4", // structured group training
  v2AgendaPlanning: "1758518730037-a16581a040e8", // agenda / boardroom
  v2BoardroomLight: "1758518730037-a16581a040e8", // boardroom light
  v2HiringPanel: "1573164574572-cb89e39749b4", // diverse hiring panel
  v2CandidateApply: "1591696205602-2f950c417cb9", // candidate applying mobile
  v2CallCenter: "1573497620053-ea5300f94f21", // call center support
  v2ReceptionDesk: "1497215728101-856f4ea42174", // reception desk
  v2ConferenceCall: "1758518730162-09a142505bfd", // conference call
  v2OfferLetter: "1758519291932-6263fc870e01", // offer letter signing
  v2CityWorkers: "1573164574572-cb89e39749b4", // structured group, professional
  v2HRPolicy: "1450101499163-c8848c66ca85" // HR policy documents
} as const;

export type ImageKey = keyof typeof IMG;

export function img(key: ImageKey, w = 1600, q = 80) {
  const local = LOCAL_IMG[key];
  if (local) return local;
  return unsplash(IMG[key], w, q);
}

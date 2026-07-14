/**
 * Single source of truth for NAP and brand metadata.
 * Update only here, every page reads from these constants.
 */

export const BRAND = {
  name: "Langford Staffing",
  shortName: "Langford",
  tagline: "Careers that move. Staffing that scales.",
  positioning:
    "A staffing and recruitment partner connecting vetted candidates with employers across the United States and Canada. Real screening, compliant onboarding, and follow-through past the start date.",
  shortDescription:
    "Langford Staffing places candidates with employers across the United States and Canada. We screen carefully, onboard with compliance in mind, and stay involved past the start date."
} as const;

export const NAP = {
  // Public NAP shows the lead Toronto desk at 120 Adelaide St West, Suite 2505.
  // Operating coverage is the United States and Canada. Registered office
  // micro-copy lives in the absolute footer fine print only.
  // Structured address fields (single source of truth).
  address: {
    streetLine1: "120 Adelaide Street West",
    streetLine2: "Suite 2505",
    city: "Toronto",
    region: "Ontario",
    regionCode: "ON",
    postalCode: "M5H 1T1",
    country: "Canada",
    countryCode: "CA"
  },
  // Legacy flat fields kept for any consumers still reading them.
  addressLine1: "120 Adelaide Street West",
  addressLine2: "Suite 2505",
  city: "Toronto",
  region: "Ontario",
  regionCode: "ON",
  postalCode: "M5H 1T1",
  country: "Canada",
  countryCode: "CA",
  // Display formats. Single-line public NAP for footer, contact page, schema.
  addressDisplay:
    "120 Adelaide Street West, Suite 2505, Toronto, ON M5H 1T1",
  // Contact channels. Toll-free North American line confirmed 2026-05-04.
  phoneDisplay: "1-866-888-6111",
  phoneE164: "+18668886111",
  phoneTel: "tel:+18668886111",
  email: "careers@langfordstaffing.com",
  domain: "langfordstaffing.com",
  websiteUrl: "https://www.langfordstaffing.com",
  // Fine-print only. Footer micro-copy. Never in operating positioning.
  registeredOffice:
    "Langford Staffing operates as a North American staffing platform. Toronto desk: 120 Adelaide Street West, Suite 2505, Toronto, ON M5H 1T1, Canada. All operations and client engagements take place in Canada and the United States."
} as const;

export const HOURS = {
  // Operating hours align with North American business windows.
  monday: "9:00 AM - 5:00 PM",
  tuesday: "9:00 AM - 5:00 PM",
  wednesday: "9:00 AM - 5:00 PM",
  thursday: "9:00 AM - 5:00 PM",
  friday: "9:00 AM - 5:00 PM",
  saturday: "Closed",
  sunday: "Closed",
  display: "Mon-Fri 9:00 AM - 5:00 PM EST (US/Canada)"
} as const;

export const SOCIAL = {
  // Social channels are being set up; placeholders intentionally inactive.
  linkedin: "",
  facebook: "",
  instagram: "",
  twitter: "",
  youtube: "",
  tiktok: "",
  pinterest: "",
  threads: "",
  bluesky: ""
} as const;

export const COLOR = {
  navy: "#1F3A5F",
  navyDark: "#172C48",
  teal: "#2E8B8B",
  tealDark: "#236B6B",
  light: "#F5F6F8",
  dark: "#1B1F23"
} as const;

export const CTA = {
  // Approved CTA language
  employerPrimary: "Request a shortlist",
  employerSecondary: "Hire with Langford",
  employerTalk: "Talk to our team",
  candidatePrimary: "Apply now",
  candidateSecondary: "See open roles",
  candidateResume: "Submit your résumé",
  learnMore: "Learn more"
} as const;

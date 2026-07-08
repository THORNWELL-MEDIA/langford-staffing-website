import { BRAND, NAP, HOURS } from "./constants";

// Portfolio parent: Northstone Holdings (operating-brand bridge under Rothenbury Group).
const PARENT_ORG = {
  "@type": "Organization",
  "@id": "https://northstoneholdings.com/#organization",
  name: "Northstone Holdings",
  url: "https://northstoneholdings.com"
};

function postalAddressSchema() {
  return {
    "@type": "PostalAddress",
    streetAddress: `${NAP.address.streetLine1}, ${NAP.address.streetLine2}`,
    addressLocality: NAP.address.city,
    addressRegion: NAP.address.regionCode,
    postalCode: NAP.address.postalCode,
    addressCountry: NAP.address.countryCode
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${NAP.websiteUrl}/#organization`,
    name: BRAND.name,
    description: BRAND.shortDescription,
    url: NAP.websiteUrl,
    logo: `${NAP.websiteUrl}/og-default.png`,
    telephone: NAP.phoneE164 || NAP.phoneDisplay,
    email: NAP.email,
    address: postalAddressSchema(),
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: NAP.phoneE164 || NAP.phoneDisplay,
        contactType: "customer service",
        availableLanguage: ["en"],
        areaServed: ["US", "CA"]
      }
    ],
    parentOrganization: PARENT_ORG,
    areaServed: [
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "Canada" }
    ]
  };
}

export function localBusinessSchema(extra?: Record<string, unknown>) {
  return {
    "@context": "https://schema.org",
    "@type": "EmploymentAgency",
    name: BRAND.name,
    description: BRAND.shortDescription,
    url: NAP.websiteUrl,
    telephone: NAP.phoneE164 || NAP.phoneDisplay,
    email: NAP.email,
    address: postalAddressSchema(),
    openingHours: [
      `Mo ${HOURS.monday}`,
      `Tu ${HOURS.tuesday}`,
      `We ${HOURS.wednesday}`,
      `Th ${HOURS.thursday}`,
      `Fr ${HOURS.friday}`
    ],
    priceRange: "$$",
    areaServed: [
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "Canada" }
    ],
    ...extra
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: item.url
    }))
  };
}

export function serviceSchema(service: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    url: service.url,
    provider: {
      "@type": "Organization",
      name: BRAND.name,
      url: NAP.websiteUrl
    },
    areaServed: [
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "Canada" }
    ]
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a
      }
    }))
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${NAP.websiteUrl}/#website`,
    name: BRAND.name,
    url: NAP.websiteUrl,
    inLanguage: "en",
    publisher: {
      "@type": "Organization",
      name: BRAND.name
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${NAP.websiteUrl}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };
}

// Sitelinks engineering: primary nav as SiteNavigationElement ItemList.
// Helps Google identify the canonical 5-6 pages we want as sitelinks.
export function siteNavigationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${NAP.websiteUrl}/#sitenav`,
    name: `${BRAND.name} primary navigation`,
    itemListElement: [
      { "@type": "SiteNavigationElement", position: 1, name: "Industries", url: `${NAP.websiteUrl}/industries` },
      { "@type": "SiteNavigationElement", position: 2, name: "Locations", url: `${NAP.websiteUrl}/locations` },
      { "@type": "SiteNavigationElement", position: 3, name: "About", url: `${NAP.websiteUrl}/about` },
      { "@type": "SiteNavigationElement", position: 4, name: "Insights", url: `${NAP.websiteUrl}/insights` },
      { "@type": "SiteNavigationElement", position: 5, name: "Contact", url: `${NAP.websiteUrl}/contact` }
    ]
  };
}

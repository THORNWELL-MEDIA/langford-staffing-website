import { BRAND, NAP, HOURS } from "./constants";

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
    name: BRAND.name,
    description: BRAND.shortDescription,
    url: NAP.websiteUrl,
    telephone: NAP.phoneE164 || NAP.phoneDisplay,
    email: NAP.email,
    address: postalAddressSchema(),
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
    name: BRAND.name,
    url: NAP.websiteUrl,
    publisher: {
      "@type": "Organization",
      name: BRAND.name
    }
  };
}

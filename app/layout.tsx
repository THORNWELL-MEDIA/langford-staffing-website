import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif, IBM_Plex_Mono } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import Analytics from "@/components/Analytics";
import CookieBanner from "@/components/CookieBanner";
import {
  organizationSchema,
  localBusinessSchema,
  websiteSchema,
  siteNavigationSchema
} from "@/lib/schema";
import { BRAND, NAP } from "@/lib/constants";

// Inter / Söhne-equivalent grotesk for body and small caps.
// Weights trimmed to what is actually used in components: 400/500/600/700.
// Italic dropped — site uses upright type only on the editorial palette.
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700"]
});

// IBM Plex Serif as Reckless / Domaine substitute — modernist serif with
// geometric undertones. Used for display headlines only.
// Weights trimmed to 500/600 — what the executive briefing display uses.
// Italic dropped — display set is upright.
const plexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  variable: "--font-plex-serif",
  display: "swap",
  weight: ["500", "600"]
});

// Tabular monospace for briefing-row numerals and data tables.
// Single weight is enough for the tabular use case.
const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-plex-mono",
  display: "swap",
  weight: ["500"]
});

export const metadata: Metadata = {
  title: {
    default: `${BRAND.name} | North American Staffing & Recruitment`,
    template: `%s | ${BRAND.name}`
  },
  // Note: per-page metadata.title strings must NOT include "| Langford Staffing"
  // because the template above already appends it. Use bare titles (e.g. "About",
  // "Permanent Placement") in per-page metadata. To opt out of the template entirely,
  // use { absolute: "Full Title Here" }.
  description: BRAND.shortDescription,
  metadataBase: new URL(NAP.websiteUrl),
  alternates: { canonical: "https://www.langfordstaffing.com" },
  openGraph: {
    title: `${BRAND.name} | North American Staffing & Recruitment`,
    description: BRAND.shortDescription,
    type: "website",
    locale: "en_US"
  },
  robots: {
    index: true,
    follow: true
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const isPreview = process.env.VERCEL_ENV === "preview";
  return (
    <html lang="en" className={`${inter.variable} ${plexSerif.variable} ${plexMono.variable}`}>
      <head>
        {isPreview && <meta name="robots" content="noindex, nofollow" />}
        <SchemaJsonLd
          id="ld-org"
          data={[organizationSchema(), websiteSchema(), siteNavigationSchema(), localBusinessSchema()]}
        />
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-WLJ5BNGC');`,
          }}
        />
        {/* End Google Tag Manager */}
        {/* GA4 fallback gtag.js */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-QHWENY9K9E" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-QHWENY9K9E');`,
          }}
        />
      </head>
      <body className="flex min-h-screen flex-col bg-brand-paper font-sans text-brand-ink">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WLJ5BNGC"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-50 focus:rounded focus:bg-brand-navy focus:px-3 focus:py-2 focus:text-white"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <StickyMobileCTA />
        <Analytics />
        <CookieBanner />
      </body>
    </html>
  );
}

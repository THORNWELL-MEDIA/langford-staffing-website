import { BRAND, NAP, HOURS } from "@/lib/constants";

export default function NAPBlock({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "text-sm" : "text-base"}>
      <p className="font-semibold text-brand-navy">{BRAND.name}</p>
      <address className="mt-1 not-italic text-slate-700">
        {NAP.address.streetLine1}
        <br />
        {NAP.address.streetLine2 && (
          <>
            {NAP.address.streetLine2}
            <br />
          </>
        )}
        {NAP.address.city}, {NAP.address.regionCode} {NAP.address.postalCode}
        <br />
        {NAP.address.country}
      </address>
      <p className="mt-2">
        <span className="text-brand-ink-soft">Phone: </span>
        <a
          href={`tel:${NAP.phoneE164 || ""}`}
          className="font-semibold text-brand-navy no-underline hover:text-brand-teal"
        >
          {NAP.phoneDisplay}
        </a>
      </p>
      <p>
        <span className="text-brand-ink-soft">Email: </span>
        <a
          href={`mailto:${NAP.email}`}
          className="font-semibold text-brand-navy no-underline hover:text-brand-teal"
        >
          {NAP.email}
        </a>
      </p>
      {!compact && (
        <p className="mt-2 text-sm text-brand-ink-soft">{HOURS.display}</p>
      )}
    </div>
  );
}

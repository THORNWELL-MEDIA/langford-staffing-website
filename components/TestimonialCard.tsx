interface Props {
  quote: string;
  role: string;
  attribution?: string;
}

/**
 * Executive-briefing testimonial. No glassy lift. Saffron rule on the left
 * margin (pull-quote treatment), navy attribution row at the bottom.
 */
export default function TestimonialCard({ quote, role, attribution }: Props) {
  return (
    <figure className="flex h-full flex-col border border-brand-line bg-white p-7 transition hover:border-brand-navy">
      <blockquote
        className="flex-1 text-[15px] leading-relaxed text-brand-ink"
        style={{ borderLeft: "3px solid #F5A623", paddingLeft: "1.25rem" }}
      >
        <em className="not-italic">{quote}</em>
      </blockquote>

      <figcaption className="mt-7 flex items-center gap-3 border-t border-brand-line pt-5">
        <span className="flex h-9 w-9 items-center justify-center bg-brand-navy text-[11px] font-semibold uppercase tracking-[0.10em] text-white">
          {(attribution || role).charAt(0)}
        </span>
        <div className="flex flex-col">
          <span className="text-[13px] font-semibold text-brand-navy">
            {attribution || "Verified client"}
          </span>
          <span className="text-[10px] uppercase tracking-[0.18em] text-brand-ink-mute">
            {role}
          </span>
        </div>
      </figcaption>
    </figure>
  );
}

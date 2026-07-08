import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Props {
  eyebrow?: string;
  title: string;
  description?: string;
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
  variant?: "navy" | "image" | "light";
}

export default function CTASection({
  eyebrow,
  title,
  description,
  primaryCta = { href: "/contact/", label: "Talk to a recruiter" },
  secondaryCta = { href: "/careers/", label: "See open roles" },
  variant = "navy"
}: Props) {
  if (variant === "light") {
    return (
      <section className="bg-brand-paper-warm">
        <div className="container-prose py-16 sm:py-20">
          <Inner
            eyebrow={eyebrow}
            title={title}
            description={description}
            primaryCta={primaryCta}
            secondaryCta={secondaryCta}
            light={false}
          />
        </div>
      </section>
    );
  }

  // navy + image both render as the navy executive band; image variant kept
  // for backwards compatibility, no longer renders a hero image.
  return (
    <section className="bg-brand-navy text-white">
      <div className="container-prose py-16 sm:py-20">
        <Inner
          eyebrow={eyebrow}
          title={title}
          description={description}
          primaryCta={primaryCta}
          secondaryCta={secondaryCta}
          light
        />
      </div>
    </section>
  );
}

function Inner({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  light
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  primaryCta: { href: string; label: string };
  secondaryCta: { href: string; label: string };
  light: boolean;
}) {
  return (
    <div className="grid gap-8 md:grid-cols-12 md:items-center">
      <div className="md:col-span-7">
        {eyebrow && (
          <p
            className={
              "inline-flex text-sm font-semibold " +
              (light ? "text-brand-saffron" : "text-brand-saffron-dark")
            }
          >
            {eyebrow}
          </p>
        )}
        <h2
          className={
            "mt-5 max-w-2xl text-display-lg text-balance " +
            (light ? "text-white" : "text-brand-navy")
          }
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </div>
      <div className="md:col-span-5">
        {description && (
          <p
            className={
              "max-w-md text-base leading-relaxed " +
              (light ? "text-white/80" : "text-brand-ink-soft")
            }
          >
            {description}
          </p>
        )}
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href={primaryCta.href}
            className={light ? "btn-saffron" : "btn-primary"}
          >
            {primaryCta.label}
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href={secondaryCta.href}
            className={light ? "btn-ghost-light" : "btn-secondary"}
          >
            {secondaryCta.label}
          </Link>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/lib/services";
import { metaFor } from "@/lib/serviceMeta";
import { img } from "@/lib/images";

interface Props {
  service: Service;
  variant?: "image" | "icon";
}

export default function ServiceCard({ service, variant = "icon" }: Props) {
  const meta = metaFor(service.slug);
  const Icon = meta.icon;

  if (variant === "image") {
    return (
      <Link
        href={`/services/${service.slug}/`}
        className="group relative block overflow-hidden rounded-2xl bg-brand-navy shadow-soft no-underline transition hover:shadow-glow"
      >
        <div className="relative aspect-[4/5] w-full overflow-hidden">
          <Image
            src={img(meta.image, 800)}
            alt=""
            fill
            sizes="(min-width: 1024px) 33vw, 100vw"
            className="object-cover transition duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 scrim-bottom" />
          <div className="absolute inset-x-0 bottom-0 p-6">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur">
              <Icon className="h-3.5 w-3.5" /> {meta.bucket}
            </div>
            <h3 className="text-2xl font-bold leading-tight text-white">
              {service.name}
            </h3>
            <p className="mt-2 max-w-[28ch] text-sm text-slate-200">
              {service.summary}
            </p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-white">
              Explore service <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/services/${service.slug}/`}
      className="group relative block overflow-hidden rounded-2xl border border-brand-line bg-white p-7 no-underline transition hover:-translate-y-1 hover:border-brand-teal/40 hover:shadow-soft"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-navy/5 text-brand-navy ring-1 ring-brand-navy/10 transition group-hover:bg-brand-teal/10 group-hover:text-brand-teal-dark">
          <Icon className="h-5 w-5" strokeWidth={1.75} />
        </div>
        <span className="rounded-full bg-brand-mist px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-brand-navy/60">
          {meta.bucket}
        </span>
      </div>
      <h3 className="mt-6 text-xl font-semibold text-brand-navy">
        {service.name}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-brand-ink-soft">
        {service.summary}
      </p>
      <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-teal-dark transition group-hover:gap-2.5">
        Explore service <ArrowUpRight className="h-4 w-4" />
      </span>
    </Link>
  );
}

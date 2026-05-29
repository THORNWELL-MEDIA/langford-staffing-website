import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-navy-dark text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 30%, rgba(15,163,163,0.18), transparent 50%), radial-gradient(circle at 80% 70%, rgba(201,163,94,0.12), transparent 50%)"
        }}
      />
      <div className="relative container-prose flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur">
          <Search className="h-7 w-7 text-brand-teal-light" />
        </div>
        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-brand-teal-light">
          404 - Not found
        </p>
        <h1 className="mt-4 text-display-lg font-bold text-balance">
          We couldn&rsquo;t find that page.
        </h1>
        <p className="mt-5 max-w-xl text-base text-slate-300">
          The page you&rsquo;re looking for doesn&rsquo;t exist or has moved.
          Pick a useful next step below.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn-teal">
            Home <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/services/" className="btn-ghost-light">
            Services
          </Link>
          <Link href="/contact/" className="btn-ghost-light">
            Contact
          </Link>
        </div>
      </div>
    </section>
  );
}

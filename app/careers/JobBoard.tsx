"use client";

import { useCareersFilter } from "./careers-filter-context";
import JobFilterControls from "./job-filter-controls";
import JobFilterList from "./job-filter-list";

export default function JobBoard() {
  const { allRoles } = useCareersFilter();

  return (
    <section id="positions" className="bg-white section scroll-mt-24">
      <div className="container-prose">
        <div className="mb-10">
          <p className="eyebrow mb-2">Open positions</p>
          <h2 className="font-display text-3xl font-semibold text-brand-navy text-balance">
            {allRoles.length} {allRoles.length === 1 ? 'role' : 'roles'} open right now.
          </h2>
          <p className="mt-3 text-base text-brand-ink-soft max-w-xl">
            We move fast. Click a role to read the full description and apply.
          </p>
        </div>

        <div className="mb-10">
          <JobFilterControls scrollToId="positions" />
        </div>

        <JobFilterList />
      </div>
    </section>
  );
}

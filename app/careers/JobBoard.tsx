"use client";

import { useState } from "react";
import { MapPin, Briefcase, ArrowRight } from "lucide-react";
import CareersApplyModal from "@/components/CareersApplyModal";

const JOBS = [
  {
    title: "Recruiting Consultant, Property and Operations",
    location: "Toronto, ON",
    type: "Full-time",
    summary:
      "You will run full-cycle recruitment for property management, facilities, and operations roles across the GTA and surrounding markets. That means intake calls with hiring managers, sourcing candidates, running structured interviews, and managing offers. Most of your desk will be property managers, leasing agents, and building operations staff.",
    requirements: [
      "2 or more years of recruitment experience, agency preferred",
      "Comfort running full-cycle searches without heavy hand-holding",
      "Strong written communication and ability to brief candidates clearly",
      "Familiarity with property management hiring is an asset, not required",
    ],
    compensation: "$55,000 to $75,000 base plus commission",
  },
  {
    title: "Account Manager",
    location: "Toronto, ON or New York, NY",
    type: "Full-time",
    summary:
      "You will manage a book of employer relationships in property management, real estate operations, and professional services. Your job is to understand what clients need, match them to the right candidates, and keep the relationship growing. You are not a traditional sales role. You handle the full client relationship from kickoff through placement.",
    requirements: [
      "3 or more years in account management, staffing, or client-facing operations",
      "Ability to manage multiple searches and client relationships at once",
      "Strong listener who can translate vague hiring needs into actionable briefs",
      "Experience in property management or real estate is a real plus",
    ],
    compensation: "$65,000 to $85,000 base plus commission",
  },
  {
    title: "Sourcing Specialist",
    location: "Remote, North America",
    type: "Full-time",
    summary:
      "You will build candidate pipelines for our active searches. That means LinkedIn outreach, database searches, job board sourcing, and community networking. You work closely with recruiting consultants who own candidate relationships. You are measured on pipeline quality, not just volume.",
    requirements: [
      "1 or more years of sourcing or recruiting coordination experience",
      "Proficient with LinkedIn Recruiter or similar sourcing tools",
      "Strong research instincts and attention to detail",
      "Comfortable working independently in a remote environment",
    ],
    compensation: "$45,000 to $60,000 base",
  },
  {
    title: "Director of Talent",
    location: "Toronto, ON",
    type: "Full-time",
    summary:
      "You will lead our internal talent function: recruiting consultants, sourcers, and coordinators. You will set the hiring bar for the firm, build our internal training process, and help grow the team from 8 people to 25 over 18 months. You report directly to the founders and have real influence on how we operate.",
    requirements: [
      "7 or more years in staffing or talent acquisition, with 3 or more years leading a team",
      "Experience building hiring and training programs from scratch",
      "Commercially minded with strong judgment on candidate quality",
      "Track record of developing junior recruiters into strong billers",
    ],
    compensation: "$110,000 to $140,000 base plus performance bonus",
  },
  {
    title: "Junior Recruiter",
    location: "Toronto, ON",
    type: "Full-time",
    summary:
      "This is a ground-level role built for people who want to get into recruitment and are willing to put in the work to learn it properly. You will start on sourcing, move into candidate management, and work toward running your own requisitions within 12 months. We provide hands-on training from senior recruiters, not a sink-or-swim environment.",
    requirements: [
      "0 to 2 years of professional experience in any field",
      "Strong communicator who writes well and listens carefully",
      "Competitive, organized, and comfortable with a metrics-based environment",
      "University degree or equivalent demonstrated work experience",
    ],
    compensation: "$40,000 to $50,000 base plus commission from month 4",
  },
];

export default function JobBoard() {
  const [activeRole, setActiveRole] = useState<string | null>(null);

  return (
    <section className="bg-white section">
      <div className="container-prose">
        <div className="mb-10">
          <p className="eyebrow mb-2">Open positions</p>
          <h2 className="font-display text-3xl font-semibold text-brand-navy text-balance">
            Five roles open right now.
          </h2>
          <p className="mt-3 text-base text-brand-ink-soft max-w-xl">
            All positions are in Toronto unless noted. We move fast. Applications reviewed within 5 business days.
          </p>
        </div>

        <div className="space-y-4">
          {JOBS.map((job) => (
            <div
              key={job.title}
              className="border border-brand-line bg-white p-6 md:p-8"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="font-display text-[20px] font-semibold text-brand-navy">{job.title}</h3>
                  <div className="mt-2 flex flex-wrap items-center gap-3 text-[11px] text-brand-ink-mute uppercase tracking-[0.14em]">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Briefcase className="h-3.5 w-3.5" />
                      {job.type}
                    </span>
                    <span className="text-brand-saffron-dark font-bold">{job.compensation}</span>
                  </div>
                  <p className="mt-4 text-sm text-brand-ink-soft leading-relaxed max-w-2xl">{job.summary}</p>
                  <ul className="mt-4 space-y-1.5">
                    {job.requirements.map((req) => (
                      <li key={req} className="flex items-start gap-2 text-xs text-brand-ink-soft">
                        <span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-brand-saffron flex-none" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="sm:ml-6 flex-none">
                  <button
                    onClick={() => setActiveRole(job.title)}
                    className="btn-saffron whitespace-nowrap"
                  >
                    Apply
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeRole && (
        <CareersApplyModal
          role={activeRole}
          onClose={() => setActiveRole(null)}
        />
      )}
    </section>
  );
}

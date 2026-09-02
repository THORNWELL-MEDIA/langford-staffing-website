"use client";

import { useState, useEffect, FormEvent } from "react";
import { X, CheckCircle2, Loader2 } from "lucide-react";

interface Props {
  role: string;
  onClose: () => void;
}

function getSpecialPortfolioConfig(role: string) {
  if (!role) return null;
  const r = role.toLowerCase().replace(/\s+/g, " ").trim();

  const isSocialMediaManager =
    r === "group social media & content manager" ||
    r === "group social media and content manager" ||
    (r.includes("group social media") && r.includes("content manager"));

  if (isSocialMediaManager) {
    return {
      label: "Portfolio or Work-Sample Link",
      helperText:
        "Provide an accessible link to content you personally created, brands or accounts you managed, and examples of different brand styles. Ensure no login or access request is required.",
      placeholder: "https://...",
    };
  }

  const isSeoManager =
    r === "senior seo manager" ||
    r.includes("senior seo manager");

  if (isSeoManager) {
    return {
      label: "SEO Portfolio or Case Study Link",
      helperText:
        "Provide an accessible link showing websites or brands whose SEO you personally managed, your exact contribution, relevant content samples, and measurable SEO or online-reputation results. Ensure no login or access request is required.",
      placeholder: "https://...",
    };
  }

  return null;
}

export default function CareersApplyModal({ role, onClose }: Props) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const specialPortfolio = getSpecialPortfolioConfig(role);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    const fd = new FormData(e.currentTarget);

    let portfolioLink = ((fd.get("portfolio_link") as string) || "").trim();
    if (specialPortfolio) {
      if (!portfolioLink) {
        setErrorMsg("Portfolio link is required.");
        setStatus("error");
        return;
      }
      if (!/^https?:\/\//i.test(portfolioLink)) {
        portfolioLink = "https://" + portfolioLink;
      }
      const isValidUrl = /^https?:\/\/([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(:\d+)?(\/.*)?$/i.test(portfolioLink);
      if (!isValidUrl) {
        setErrorMsg("Please enter a valid URL for your portfolio.");
        setStatus("error");
        return;
      }
    }

    const payload = {
      role,
      firstName: fd.get("firstName"),
      lastName: fd.get("lastName"),
      email: fd.get("email"),
      phone: fd.get("phone"),
      linkedin: fd.get("linkedin"),
      resumeUrl: fd.get("resumeUrl"),
      portfolio_link: portfolioLink || undefined,
      whyYou: fd.get("whyYou"),
      referral: fd.get("referral"),
    };
    try {
      const res = await fetch("/api/careers-apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        setStatus("success");
      } else {
        const data = await res.json();
        setErrorMsg(data.error || "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-navy/60 backdrop-blur-sm"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white shadow-2xl border border-brand-line">
        <div className="sticky top-0 flex items-center justify-between px-6 py-4 border-b border-brand-line bg-white z-10">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-saffron-dark">Apply Now</p>
            <h2 className="mt-1 font-display text-[18px] font-semibold text-brand-navy">{role}</h2>
          </div>
          <button
            onClick={onClose}
            className="text-brand-ink-mute hover:text-brand-navy transition-colors p-1"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {status === "success" ? (
          <div className="flex flex-col items-center justify-center gap-4 p-10 text-center">
            <CheckCircle2 className="h-12 w-12 text-brand-saffron-dark" />
            <h3 className="font-display text-[20px] font-semibold text-brand-navy">Application received</h3>
            <p className="text-brand-ink-soft text-sm max-w-sm">
              Thanks for applying to the {role} position. Our team reviews applications within 5 business days.
            </p>
            <button onClick={onClose} className="btn-primary mt-2">Close</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-brand-ink-soft mb-1.5">First Name <span className="text-red-500">*</span></label>
                <input name="firstName" required className="w-full border border-brand-line px-3 py-2.5 text-sm text-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-saffron bg-brand-paper" placeholder="Jane" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-brand-ink-soft mb-1.5">Last Name <span className="text-red-500">*</span></label>
                <input name="lastName" required className="w-full border border-brand-line px-3 py-2.5 text-sm text-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-saffron bg-brand-paper" placeholder="Smith" />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-brand-ink-soft mb-1.5">Email <span className="text-red-500">*</span></label>
                <input name="email" type="email" required className="w-full border border-brand-line px-3 py-2.5 text-sm text-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-saffron bg-brand-paper" placeholder="you@email.com" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-brand-ink-soft mb-1.5">Phone</label>
                <input name="phone" type="tel" className="w-full border border-brand-line px-3 py-2.5 text-sm text-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-saffron bg-brand-paper" placeholder="+1 416 555 0100" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold text-brand-ink-soft mb-1.5">LinkedIn Profile URL</label>
              <input name="linkedin" type="url" className="w-full border border-brand-line px-3 py-2.5 text-sm text-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-saffron bg-brand-paper" placeholder="https://linkedin.com/in/yourprofile" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-brand-ink-soft mb-1.5">Resume URL (Google Drive, Dropbox, etc.)</label>
              <input name="resumeUrl" type="url" className="w-full border border-brand-line px-3 py-2.5 text-sm text-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-saffron bg-brand-paper" placeholder="https://drive.google.com/..." />
            </div>
            {specialPortfolio && (
              <div>
                <label className="block text-xs font-semibold text-brand-ink-soft mb-1.5">
                  {specialPortfolio.label} <span className="text-red-500">*</span>
                </label>
                <p className="text-xs text-brand-ink-mute mb-1.5 leading-relaxed">
                  {specialPortfolio.helperText}
                </p>
                <input
                  name="portfolio_link"
                  type="url"
                  required
                  className="w-full border border-brand-line px-3 py-2.5 text-sm text-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-saffron bg-brand-paper"
                  placeholder={specialPortfolio.placeholder}
                />
              </div>
            )}
            <div>
              <label className="block text-xs font-semibold text-brand-ink-soft mb-1.5">Why do you want this role? <span className="text-brand-ink-mute font-normal">(optional)</span></label>
              <textarea name="whyYou" rows={3} className="w-full border border-brand-line px-3 py-2.5 text-sm text-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-saffron bg-brand-paper resize-none" placeholder="What draws you to this position..." />
            </div>
            <div>
              <label className="block text-xs font-semibold text-brand-ink-soft mb-1.5">How did you hear about us?</label>
              <select name="referral" className="w-full border border-brand-line px-3 py-2.5 text-sm text-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-saffron bg-brand-paper">
                <option value="">Select one</option>
                <option>Google Search</option>
                <option>LinkedIn</option>
                <option>Indeed</option>
                <option>Referral from colleague</option>
                <option>Trade association</option>
                <option>Other</option>
              </select>
            </div>
            {status === "error" && (
              <p className="text-sm text-red-600 bg-red-50 border border-red-200 px-3 py-2">{errorMsg}</p>
            )}
            <button
              type="submit"
              disabled={status === "loading"}
              className="btn-saffron w-full justify-center disabled:opacity-60"
            >
              {status === "loading" && <Loader2 className="h-4 w-4 animate-spin" />}
              {status === "loading" ? "Submitting..." : "Submit Application"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

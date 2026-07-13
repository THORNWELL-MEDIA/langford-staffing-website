"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      setShow(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setShow(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie_consent", "declined");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-brand-line bg-brand-navy p-4 text-white shadow-2xl md:p-6">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex-1 pr-4">
          <p className="text-sm leading-relaxed text-white/80">
            We use cookies to improve your experience, analyze site traffic, and support our recruitment efforts. 
            By continuing to use this site, you consent to our use of cookies. For more details or to manage your preferences, 
            please read our <Link href="/privacy/cookies" className="text-brand-saffron underline hover:text-white">Cookie & Tracking Technologies Policy</Link>.
          </p>
        </div>
        <div className="flex w-full flex-row items-center gap-3 md:w-auto">
          <button
            onClick={handleDecline}
            className="flex-1 rounded-sm border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white transition hover:bg-white/10 md:flex-none"
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            className="btn-saffron flex-1 px-6 py-2 text-xs md:flex-none"
          >
            Accept
          </button>
          <button
            onClick={handleDecline}
            className="hidden p-2 text-white/60 hover:text-white md:block"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

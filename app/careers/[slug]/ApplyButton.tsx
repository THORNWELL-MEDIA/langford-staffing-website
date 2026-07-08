"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import CareersApplyModal from "@/components/CareersApplyModal";

export default function ApplyButton({
  role,
  className = "btn-saffron w-full justify-center",
  label = "Apply for this role",
}: {
  role: string;
  className?: string;
  label?: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)} className={className}>
        {label}
        <ArrowRight className="h-4 w-4" />
      </button>
      {open && <CareersApplyModal role={role} onClose={() => setOpen(false)} />}
    </>
  );
}

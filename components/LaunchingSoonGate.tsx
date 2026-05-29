"use client";

import { useEffect, useState } from "react";

const PASSWORD = "winner";
const STORAGE_KEY = "lf-preview-access";

export default function LaunchingSoonGate() {
  const [unlocked, setUnlocked] = useState<boolean | null>(null);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    if (params.get("access") === PASSWORD) {
      window.localStorage.setItem(STORAGE_KEY, "1");
      setUnlocked(true);
      window.history.replaceState({}, "", window.location.pathname);
      return;
    }
    setUnlocked(window.localStorage.getItem(STORAGE_KEY) === "1");
  }, []);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (input.trim().toLowerCase() === PASSWORD) {
      window.localStorage.setItem(STORAGE_KEY, "1");
      setUnlocked(true);
    } else {
      setError(true);
    }
  }

  if (unlocked === null) {
    return <div style={{ position: "fixed", inset: 0, background: "#063A72", zIndex: 99999 }} />;
  }
  if (unlocked) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "#063A72",
        color: "#FFFFFF",
        zIndex: 99999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'DM Sans', 'Inter', system-ui, -apple-system, sans-serif",
        padding: "32px",
      }}
    >
      <div style={{ maxWidth: "600px", width: "100%", textAlign: "center" }}>
        <div
          style={{
            display: "inline-block",
            padding: "10px 16px",
            border: "1px solid #F5A623",
            borderRadius: "999px",
            color: "#FBE3B5",
            fontSize: "11px",
            letterSpacing: "3px",
            fontWeight: 600,
            textTransform: "uppercase",
            marginBottom: "32px",
          }}
        >
          Langford Staffing
        </div>
        <h1
          style={{
            fontFamily: "'DM Sans', 'Inter', system-ui, sans-serif",
            fontSize: "clamp(48px, 8vw, 84px)",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            margin: "0 0 16px",
            lineHeight: 1.0,
          }}
        >
          Launching Soon
        </h1>
        <p
          style={{
            fontSize: "18px",
            lineHeight: 1.55,
            color: "rgba(255, 255, 255, 0.78)",
            margin: "0 0 48px",
            maxWidth: "500px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          We staff property services, leasing teams, and operating company roles. Vetted candidates, a written brief, fast turnaround.
        </p>
        <div style={{ borderTop: "1px solid rgba(255, 255, 255, 0.15)", paddingTop: "32px" }}>
          <form onSubmit={submit} style={{ display: "flex", gap: "8px", maxWidth: "320px", margin: "0 auto" }}>
            <input
              type="password"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                setError(false);
              }}
              placeholder="Client access"
              style={{
                flex: 1,
                background: "rgba(255, 255, 255, 0.08)",
                border: error ? "1px solid #F87171" : "1px solid rgba(255, 255, 255, 0.2)",
                borderRadius: "6px",
                padding: "10px 14px",
                color: "#FFFFFF",
                fontSize: "14px",
                outline: "none",
                fontFamily: "inherit",
              }}
              autoComplete="off"
            />
            <button
              type="submit"
              style={{
                background: "#F5A623",
                color: "#063A72",
                border: "none",
                borderRadius: "6px",
                padding: "10px 20px",
                fontWeight: 700,
                fontSize: "14px",
                cursor: "pointer",
                fontFamily: "inherit",
              }}
            >
              Enter
            </button>
          </form>
          {error && (
            <p style={{ color: "#F87171", fontSize: "12px", marginTop: "12px", marginBottom: 0 }}>
              Incorrect access code.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

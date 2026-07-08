import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2rem"
      },
      screens: {
        "2xl": "1320px"
      }
    },
    extend: {
      colors: {
        brand: {
          navy: "#0A1A35",
          "navy-dark": "#06122A",
          "navy-deep": "#020A1C",
          "navy-light": "#1E3358",

          saffron: "#F5A623",
          "saffron-dark": "#8F5D00",
          "saffron-light": "#F8C56F",

          // Forest accent — ONLY for "verified" / "placed" badges
          forest: "#1F3A2E",
          "forest-light": "#E8F0EB",

          // Neutrals — executive briefing slate
          ink: "#0A1A35",
          "ink-soft": "#1F2937",
          "ink-mute": "#4B5563",
          "ink-light": "#475569",
          slate: "#4B5563",

          // Surface tones
          paper: "#FAFAF7",
          "paper-warm": "#F5F2E8",
          surface: "#F4F4EE",
          "surface-alt": "#EAEAE0",
          line: "#D9D6CC",
          "line-soft": "#E6E3D9",
          rule: "#0A1A35",

          // Cream — preserved hero / editorial surface
          cream: "#FAF6EC",
          "cream-dark": "#F2EBD8",
          mist: "#F4F4EE",

          // Backwards-compat: legacy components reference sky/teal/gold tokens.
          // Map them all into the executive navy + saffron palette so nothing
          // breaks visually but the unique identity holds.
          sky: "#0A1A35",
          "sky-dark": "#06122A",
          "sky-deep": "#020A1C",
          "sky-light": "#E5E7EB",
          "sky-pale": "#FAFAF7",
          teal: "#0A1A35",
          "teal-dark": "#06122A",
          "teal-light": "#F5A623",
          gold: "#F5A623",
          "gold-light": "#F8C56F"
        }
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Helvetica Neue",
          "Arial",
          "sans-serif"
        ],
        display: [
          "var(--font-inter)",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Helvetica Neue",
          "Arial",
          "sans-serif"
        ],
        serif: [
          "var(--font-plex-serif)",
          "Georgia",
          "Cambria",
          "Times New Roman",
          "serif"
        ],
        mono: [
          "var(--font-plex-mono)",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "monospace"
        ]
      },
      fontSize: {
        "display-xl": ["clamp(2.4rem, 1.6rem + 3vw, 4rem)", { lineHeight: "1.08", letterSpacing: "-0.01em" }],
        "display-lg": ["clamp(2rem, 1.4rem + 2vw, 3rem)", { lineHeight: "1.12", letterSpacing: "-0.008em" }],
        "display-md": ["clamp(1.6rem, 1.2rem + 1.4vw, 2.35rem)", { lineHeight: "1.18", letterSpacing: "-0.006em" }]
      },
      borderRadius: {
        // Briefing-document tight corners — squared off, executive
        none: "0",
        sm: "2px",
        DEFAULT: "3px",
        md: "4px",
        lg: "6px",
        xl: "8px",
        "2xl": "10px",
        "3xl": "14px"
      },
      maxWidth: {
        prose: "70ch"
      },
      boxShadow: {
        // Executive: thin hairline shadows. Almost none. Border-color shifts do the work.
        soft: "0 1px 0 rgba(10, 26, 53, 0.04)",
        card: "0 1px 0 rgba(10, 26, 53, 0.06)",
        glow: "0 1px 0 rgba(10, 26, 53, 0.08), 0 12px 32px -16px rgba(10, 26, 53, 0.20)",
        ring: "inset 0 0 0 1px rgba(10, 26, 53, 0.12)",
        focus: "0 0 0 3px rgba(245, 166, 35, 0.45)"
      },
      backgroundImage: {
        "grid-light":
          "linear-gradient(to right, rgba(10,26,53,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(10,26,53,0.06) 1px, transparent 1px)",
        "noise":
          "radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)",
        "skygrad":
          "linear-gradient(180deg, #06122A 0%, #0A1A35 100%)"
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        },
        "marquee": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.65" }
        },
        "orb-drift-a": {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "50%": { transform: "translate(60px, 40px) scale(1.08)" }
        },
        "orb-drift-b": {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "50%": { transform: "translate(-50px, 30px) scale(1.05)" }
        },
        "orb-drift-c": {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "50%": { transform: "translate(40px, -30px) scale(0.96)" }
        },
        "ping-soft": {
          "0%": { transform: "scale(1)", opacity: "0.6" },
          "75%, 100%": { transform: "scale(2.4)", opacity: "0" }
        },
        "dash-flow": {
          "0%": { strokeDashoffset: "0" },
          "100%": { strokeDashoffset: "-24" }
        },
        "bar-grow": {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" }
        }
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out forwards",
        "fade-in": "fade-in 0.7s ease-out forwards",
        "marquee": "marquee 38s linear infinite",
        "pulse-soft": "pulse-soft 2.4s ease-in-out infinite",
        "orb-drift-a": "orb-drift-a 18s ease-in-out infinite",
        "orb-drift-b": "orb-drift-b 22s ease-in-out infinite",
        "orb-drift-c": "orb-drift-c 26s ease-in-out infinite",
        "ping-soft": "ping-soft 3.4s cubic-bezier(0,0,0.2,1) infinite",
        "dash-flow": "dash-flow 2.2s linear infinite"
      }
    }
  },
  plugins: [require("@tailwindcss/typography")]
};

export default config;

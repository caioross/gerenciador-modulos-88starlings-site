import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        space: "#070b16",
        hull: "#0f1626",
        starling: "#3b82f6",
        ion: "#22d3ee",
        warn: "#f59e0b",
        ice: "#e6edf8",
      },
      fontFamily: {
        sans: ["system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      keyframes: {
        spinSlow: { "0%": { transform: "rotate(0)" }, "100%": { transform: "rotate(360deg)" } },
        floaty: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-8px)" } },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        spinSlow: "spinSlow 18s linear infinite",
        floaty: "floaty 6s ease-in-out infinite",
        fadeUp: "fadeUp 0.7s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;

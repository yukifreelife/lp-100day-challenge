/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        sonae: {
          white: "#ffffff",
          mist: "#f6faf8",
          charcoal: "#1f2a2e",
          slate: "#66777a",
          teal: "#2f7f88",
          harbor: "#1f5f68",
          mint: "#ddf3ec",
          yellow: "#f4b84a",
          peach: "#ffe4d2",
          line: "#dce8e5",
          red: "#d95c5c",
        },
      },
      borderRadius: {
        sonae: "12px",
        "sonae-sm": "8px",
        "sonae-lg": "20px",
      },
      boxShadow: {
        "sonae-soft": "0 18px 45px rgba(31, 95, 104, 0.12)",
        "sonae-card": "0 10px 28px rgba(31, 42, 46, 0.08)",
        "sonae-lift": "0 18px 36px rgba(31, 42, 46, 0.12)",
        "sonae-cta": "0 12px 28px rgba(47, 127, 136, 0.22)",
      },
      keyframes: {
        "sonae-float": {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, -14px, 0)" },
        },
        "sonae-card-in": {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "sonae-fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "sonae-progress": {
          "0%": { strokeDashoffset: "var(--sonae-ring-length, 320)" },
          "100%": { strokeDashoffset: "var(--sonae-ring-offset, 0)" },
        },
        "sonae-cta-pulse": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(47, 127, 136, 0.28)" },
          "50%": { boxShadow: "0 0 0 12px rgba(47, 127, 136, 0)" },
        },
        "sonae-tab-in": {
          "0%": { opacity: "0", transform: "translateX(8px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        "sonae-float": "sonae-float 5.5s ease-in-out infinite",
        "sonae-card-in": "sonae-card-in 620ms ease-out both",
        "sonae-fade-in": "sonae-fade-in 360ms ease-out both",
        "sonae-progress": "sonae-progress 1.2s ease-out both",
        "sonae-cta-pulse": "sonae-cta-pulse 2.4s ease-out infinite",
        "sonae-tab-in": "sonae-tab-in 260ms ease-out both",
      },
      fontFamily: {
        sans: [
          "Noto Sans JP",
          "Hiragino Kaku Gothic ProN",
          "Yu Gothic",
          "Yu Gothic UI",
          "Meiryo",
          "system-ui",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};

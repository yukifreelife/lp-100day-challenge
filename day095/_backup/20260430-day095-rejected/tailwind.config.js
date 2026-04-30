/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        mira: {
          white: "#ffffff",
          cloud: "#f7fbfa",
          ink: "#172126",
          slate: "#5f6f72",
          green: "#168466",
          deep: "#0d5e4b",
          mint: "#dff4ec",
          amber: "#f4b740",
          cyan: "#54b9c6",
          blue: "#2d6cdf",
          line: "#dce9e5",
          red: "#ce4b4b",
        },
      },
      borderRadius: {
        mira: "8px",
      },
      boxShadow: {
        "mira-soft": "0 18px 42px rgba(23, 33, 38, 0.09)",
        "mira-lift": "0 18px 32px rgba(13, 94, 75, 0.15)",
        "mira-cta": "0 14px 28px rgba(22, 132, 102, 0.22)",
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
      keyframes: {
        "mira-float": {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, -10px, 0)" },
        },
        "mira-meter": {
          "0%": { width: "0%" },
          "100%": { width: "var(--meter-width)" },
        },
        "mira-in": {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "mira-float": "mira-float 5.8s ease-in-out infinite",
        "mira-meter": "mira-meter 980ms ease-out both",
        "mira-in": "mira-in 620ms ease-out both",
      },
    },
  },
  plugins: [],
};

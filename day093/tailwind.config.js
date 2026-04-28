/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        nemu: {
          paper: "#fcfcf8",
          mint: "#8fd8c4",
          teal: "#2f8f83",
          peach: "#f7b8a6",
          lilac: "#d8cdf6",
          ink: "#263238",
          muted: "#7a8588",
          line: "#e8eeec",
          white: "#ffffff",
        },
      },
      borderRadius: {
        nemu: "12px",
      },
      boxShadow: {
        nemu: "0 18px 48px rgba(38, 50, 56, 0.10)",
        "nemu-soft": "0 10px 30px rgba(47, 143, 131, 0.12)",
      },
      keyframes: {
        "nemu-float": {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, -14px, 0)" },
        },
        "nemu-float-slow": {
          "0%, 100%": { transform: "translate3d(0, 0, 0) rotate(0deg)" },
          "50%": { transform: "translate3d(0, -18px, 0) rotate(2deg)" },
        },
        "nemu-float-reverse": {
          "0%, 100%": { transform: "translate3d(0, -10px, 0)" },
          "50%": { transform: "translate3d(0, 8px, 0)" },
        },
        "nemu-twinkle": {
          "0%, 100%": { opacity: "0.46", transform: "scale(0.92)" },
          "50%": { opacity: "1", transform: "scale(1.08)" },
        },
        "nemu-pop": {
          "0%": { opacity: "0", transform: "translateY(10px) scale(0.96)" },
          "70%": { opacity: "1", transform: "translateY(-2px) scale(1.02)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        "nemu-ring-draw": {
          "0%": { strokeDashoffset: "var(--nemu-ring-length, 320)" },
          "100%": { strokeDashoffset: "var(--nemu-ring-offset, 0)" },
        },
        "nemu-phone-lift": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "nemu-card-in": {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "nemu-cta-pulse": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(143, 216, 196, 0.42)" },
          "50%": { boxShadow: "0 0 0 12px rgba(143, 216, 196, 0)" },
        },
        "nemu-accordion": {
          "0%": { opacity: "0", transform: "translateY(-6px)", maxHeight: "0" },
          "100%": { opacity: "1", transform: "translateY(0)", maxHeight: "36rem" },
        },
      },
      animation: {
        "nemu-float": "nemu-float 5s ease-in-out infinite",
        "nemu-float-slow": "nemu-float-slow 8s ease-in-out infinite",
        "nemu-float-reverse": "nemu-float-reverse 6s ease-in-out infinite",
        "nemu-twinkle": "nemu-twinkle 2.8s ease-in-out infinite",
        "nemu-pop": "nemu-pop 520ms cubic-bezier(0.2, 0.8, 0.2, 1) both",
        "nemu-ring-draw": "nemu-ring-draw 1.2s ease-out both",
        "nemu-phone-lift": "nemu-phone-lift 4.8s ease-in-out infinite",
        "nemu-card-in": "nemu-card-in 620ms ease-out both",
        "nemu-cta-pulse": "nemu-cta-pulse 2.4s ease-out infinite",
        "nemu-accordion": "nemu-accordion 280ms ease-out both",
      },
      fontFamily: {
        sans: [
          "Hiragino Maru Gothic ProN",
          "Hiragino Sans",
          "Yu Gothic UI",
          "Yu Gothic",
          "Meiryo",
          "system-ui",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};

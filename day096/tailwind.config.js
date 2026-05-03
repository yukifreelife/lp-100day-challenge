/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#FAFAF7",
        porcelain: "#E8ECEF",
        ink: "#1C274C",
        guest: "#315C9E",
        vermilion: "#D94E35",
        brass: "#A77A2D",
        blush: "#F3D8D2"
      },
      fontFamily: {
        sans: [
          "Inter",
          "Noto Sans JP",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif"
        ]
      },
      boxShadow: {
        soft: "0 18px 45px rgba(28, 39, 76, 0.10)",
        card: "0 10px 30px rgba(28, 39, 76, 0.08)"
      }
    }
  },
  plugins: []
};

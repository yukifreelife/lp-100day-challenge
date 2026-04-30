/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ledger: "#F7F5EF",
        ink: "#171A1C",
        teal: "#0D5C63",
        steel: "#3F6473",
        copper: "#C96F32",
        mint: "#69B99D",
        amber: "#E2B84B",
        grid: "#D8D2C4",
        slip: "#747C7D"
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
      }
    }
  },
  plugins: []
};

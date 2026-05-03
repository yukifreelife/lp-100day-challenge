export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        snowMilk: "#FBFAF6",
        creamFur: "#FFF7E7",
        furShadow: "#E8E1D6",
        inkPatch: "#252321",
        noseLine: "#4B4843",
        clearBlue: "#4AA8FF",
        sunEye: "#FFD84D",
        pawBlush: "#F4A8B7",
        playRed: "#F2483D",
      },
      fontFamily: {
        sans: [
          "Noto Sans JP",
          "Hiragino Kaku Gothic ProN",
          "Yu Gothic",
          "sans-serif",
        ],
      },
      borderRadius: {
        soft: "8px",
        panel: "18px",
      },
      boxShadow: {
        cat: "0 18px 40px rgba(37, 35, 33, 0.08)",
      },
    },
  },
  plugins: [],
};

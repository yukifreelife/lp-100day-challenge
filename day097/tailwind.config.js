export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        warmWhite: "#FFFAF3",
        softCream: "#FFF3E2",
        friendlyOrange: "#F47A2A",
        trustOrange: "#C8561C",
        apricot: "#FFB16A",
        mintNote: "#DDF5E8",
        deskInk: "#24303A",
        warmSlate: "#6C747C",
        gentleLine: "#EADFD2",
        coralRed: "#D94A3A",
      },
      borderRadius: {
        card: "8px",
      },
      fontFamily: {
        sans: [
          "Noto Sans JP",
          "Hiragino Kaku Gothic ProN",
          "Yu Gothic",
          "sans-serif",
        ],
      },
      boxShadow: {
        soft: "0 18px 42px rgba(36, 48, 58, 0.08)",
      },
    },
  },
  plugins: [],
};

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        nemu: {
          paper: "#fcfcf8",
          mint: "#8fd8c4",
          teal: "#2f8f83",
          coral: "#f7b8a6",
          lavender: "#d8cdf6",
          ink: "#263238",
          slate: "#7a8588",
          mist: "#e8eeec",
        },
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
};

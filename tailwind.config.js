const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  plugins: ["tailwindcss-react-native/babel"],
  theme: {
    extend: {
      colors: {
        orange: colors.orange,
      },
      margin: {
        96: "24rem",
        128: "32rem",
      },
    },
  },
};

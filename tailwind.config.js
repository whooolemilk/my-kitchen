module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      ocher: "#a48b78",
    },
    fill: (theme) => ({
      ocher: theme("colors.ocher"),
    }),
  },
  plugins: [],
};

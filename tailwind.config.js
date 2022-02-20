module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ocher: {
          300: "#bca28c",
          400: "#a48b78",
        },
      },
    },
    fill: (theme) => ({
      ocher: theme("colors.ocher"),
    }),
  },
  plugins: [],
};

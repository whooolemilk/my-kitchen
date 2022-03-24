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
          100: "#F8F6EF",
          200: "#DFC6B8",
          300: "#bca28c",
          400: "#a48b78",
        },
      },
      borderRadius: {
        large: "2rem",
      },
    },
    // fill: (theme) => ({
    //   ocher: theme("colors.ocher"),
    // }),
  },
  plugins: [require("@tailwindcss/line-clamp")],
};

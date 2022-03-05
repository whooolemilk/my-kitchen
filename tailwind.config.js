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
      borderRadius: {
        large: "2.5rem",
      },
    },
    fill: (theme) => ({
      ocher: theme("colors.ocher"),
    }),
  },
  plugins: [require("@tailwindcss/line-clamp")],
};

module.exports = {
  content: ["./src/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
      },
      backgroundColor: {
        primary: "#FFCD00"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

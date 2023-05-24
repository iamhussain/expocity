const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./src/**/*.html", "./src/**/*.{js,jsx,ts,tsx}", "./node_modules/tw-elements/dist/js/**/*.js"],
  plugins: [
    require("tw-elements/dist/plugin.cjs"),
    require('@tailwindcss/forms')
  ],
  darkMode: "false",
  theme: {
    extend: {
      colors: {
       
       current: 'currentColor',
        orange: {
          100: "#FFCD00",
          110: "#E5B800",
          120: "#CCA400",
          140: "#997B00",
          160: "#665200"
        },
        secondary:{
          100: "#B32572",
          110: "#A12167",
          120: "#8F1E5B",
          140: "#6B1644",
          160: "#480F2E"
        },
        tertiary:{
          100: "#48C2E0",
          110: "#43AECA",
          120: "#3B9AB3",
          140: "#2C7486",
          160: "#1E4D5A"
        },
        neutral:{
          100: "#1E1C23",
          90: "#353339",
          80: "#4B494F",
          70: "#626065",
          60: "#78777B",
          50: "#8E8D91",
          40: "#A5A4A7",
          30: "#BCBBBD",
          20: "#D2D2D3",
          10: "#E9E8E9",
          5: "#F4F4F4",
          2: "#FBFAFB",
        },
        background:{
          grey: "#D2CFCD",
          lightGrey: "#F3F1EF",
          pearl: "#F9F6F3",
          offWhite: "#FDFDFD",
        },
        white: "#ffffff",
        black: "#000000",
        grey: "#8E8484",
        red: "#D53939",
        green: "#2F8339",
        primary: "#FFCD00"
      },
      fontFamily: {
        expo: ['Expo Sans Std', 'helvetica'],
      },
      shadow:{
        xs: "0px 1px 2px rgba(16, 24, 40, 0.04)",
        sm: "0px 1px 3px rgba(16, 24, 40, 0.04), 0px 1px 2px -1px rgba(16, 24, 40, 0.04)",
        md: "0px 4px 6px -1px rgba(16, 24, 40, 0.04), 0px 2px 4px -2px rgba(16, 24, 40, 0.04)",
        lg: "0px 10px 15px -3px rgba(16, 24, 40, 0.04), 0px 4px 6px -4px rgba(16, 24, 40, 0.04)",
        xl: "0px 20px 25px -5px rgba(16, 24, 40, 0.04), 0px 8px 10px -6px rgba(16, 24, 40, 0.04)",
        xxl: "0px 25px 50px -12px rgba(16, 24, 40, 0.15)"
      },
    },
  },
  variants: {
    extend: {},
  },
};



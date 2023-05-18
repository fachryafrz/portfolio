/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "375px",
      },
      colors: {
        bg: "rgb(26,26,26)",
        accent: "rgb(193,139,115)",
        desc: "rgba(255,255,255,0.5)",
      },
      fontFamily: {
        "fira-code": ["Fira Code"],
        tnr: ["Times New Roman", "Times", "serif"],
      },
      boxShadow: {
        primary: "4px 4px 0 0 rgba(193,139,115,1)",
      },
    },
  },
  plugins: [
    require("autoprefixer"),
    require("@tailwindcss/line-clamp"),
    require("tailwindcss-writing-mode")({
      variants: ["responsive", "hover"],
    }),
  ],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "rgba(26,26,26,1)",
        accent: "rgba(193,139,115,1)",
        desc: "rgba(255,255,255,0.5)",
      },
      fontFamily: {
        "fira-code": ["Fira Code"],
        tnr: ["Times New Roman", "Times", "serif"],
      },
    },
  },
  plugins: [
    require("autoprefixer"),
    require("tailwindcss-writing-mode")({
      variants: ["responsive", "hover"],
    }),
  ],
};

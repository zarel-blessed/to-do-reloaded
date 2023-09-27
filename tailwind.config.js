/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    spacing: {
      1: "0.5em",
      2: "0.75em",
      3: "1em",
      4: "1.5em",
      5: "2em",
      6: "3em",
    },

    extend: {
      colors: {
        night_soul: "var(--clr-night-soul)",
        glassparent: "var(--clr-glassparent)",
        desaturated: "var(--clr-desaturated)",
        dark_aura: "var(--clr-dark-aura)",
        evergreen: "var(--clr-evergreen)",
      },
      fontFamily: {
        nunito: "var(--font-nunito)",
      },
    },
  },
  plugins: [],
};

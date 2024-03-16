/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      md: "768px",
      xl: "1024px",
    },
    colors: {
      vulcan: "#0B0D17",
      tropicalBlue: "#D0D6F9",
      white: "#ffffff",
    },
  },
  plugins: [],
};

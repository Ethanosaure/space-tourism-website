/** @type {import('tailwindcss').Config} */
export default {
  content: ["./public/src/*.js", "index.html"],
  theme: {
    extend: {
      colors: {
        vulcan: "#0B0D17",
        tropicalBlue: "#D0D6F9",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};

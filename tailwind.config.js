/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "wh-50": "#f0f0f0",
        "wh-100": "#C9C9C9",
        "wh-300": "#939393",
        "wh-500": "#595959",
        "wh-900": "#141414",
        "or-100": "#ff8c50",
        "bl-100": "#8cb4a0",
      },
      screens: {
        xs: "480px",
        sm: "768px",
        md: "1060px",
        lg: "1440px",
      },
    },
  },
  plugins: [],
};

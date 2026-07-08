/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",       // ✅ App Router
    "./components/**/*.{js,ts,jsx,tsx}", 
    "./pages/**/*.{js,ts,jsx,tsx}",     // optional (for migration)
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Merriweather", "serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#08275a",
          600: "#061b3d",
          700: "#041633",
        },
        accent: {
          DEFAULT: "#0b4fb3",
          500: "#0b4fb3",
          600: "#083f91",
        },
        accent2: "#d6a039",
        gold: {
          50: "#fff8e8",
          100: "#f8ecd2",
          200: "#efd39b",
          300: "#e5bd69",
          400: "#d6a039",
          500: "#bd8424",
          600: "#9b6819",
          700: "#765014",
          800: "#51370f",
          900: "#2f2109",
        },
        blue: {
          50: "#f2f7ff",
          100: "#dceaff",
          200: "#b8d4ff",
          300: "#85b5f4",
          400: "#3f7fd0",
          500: "#0b4fb3",
          600: "#083f91",
          700: "#082f73",
          800: "#08275a",
          900: "#061b3d",
          950: "#041633",
        },
        amber: {
          50: "#fff8e8",
          100: "#f8ecd2",
          200: "#efd39b",
          300: "#e5bd69",
          400: "#d6a039",
          500: "#bd8424",
          600: "#9b6819",
          700: "#765014",
          800: "#51370f",
          900: "#2f2109",
        },
        yellow: {
          50: "#fff8e8",
          100: "#f8ecd2",
          200: "#efd39b",
          300: "#e5bd69",
          400: "#d6a039",
          500: "#bd8424",
          600: "#9b6819",
          700: "#765014",
          800: "#51370f",
          900: "#2f2109",
        },
        neutral: {
          50: "#f8fbff",
          100: "#f2f7ff",
        },
        card: "#ffffff",
      },
      boxShadow: {
        soft: "0 8px 30px rgba(8,39,90,0.08)",
      },
    },
  },
  plugins: [],
};

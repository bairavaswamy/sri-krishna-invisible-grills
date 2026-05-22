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
          DEFAULT: "#0f3a5f",
          600: "#0b2f4d",
        },
        accent: {
          DEFAULT: "#0284c7",
          500: "#0284c7",
        },
        accent2: "#84cc16",
        neutral: {
          50: "#f8fbff",
          100: "#eaf4ff",
        },
        card: "#ffffff",
      },
      boxShadow: {
        soft: "0 8px 30px rgba(2,6,23,0.06)",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "black": "#000000",
        "white": "#FFFFFF",
        "input": "#d2d2d2",
        "input-focus": "#323232",
        "input-dropdown": "#222222",
        "button": "#222222",
        "button-hover": "#323232",
        "offwhite": "#f8f8f8",
        "offgray": "#1f2029",
        "backdrop": "rgba(0, 0, 0, 0.7)",
      },
      keyframes: {
        hide: {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
        slideIn: {
          from: { transform: 'translateX(calc(100% + var(--viewport-padding)))' },
          to: { transform: 'translateX(0)' },
        },
        swipeOut: {
          from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
          to: { transform: 'translateX(calc(100% + var(--viewport-padding)))' },
        },
      },
      animation: {
        hide: 'hide 100ms ease-in',
        slideIn: 'slideIn 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        swipeOut: 'swipeOut 100ms ease-out',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        "subtitle": "2rem",
        "2xs": ".625rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "2.5rem",
        "heading-1": " clamp(42px, -6.5915492958px + 9.7183098592vw, 180px)",
        "heading-2": "clamp(32px, -3.3707865169px + 7.1265822785vw, 100px)",
        "heading-3": "clamp(24px, -1.8987341772px + 5.0632911392vw, 60px)",
        "heading-4": "clamp(20px, -1.2658227848px + 4.253164557px, 50px)",
        "heading-5": "clamp(16px, -0.6329113924px + 3.164556962px, 40px)",
        "heading-6": "clamp(14px, -0.3164556962px + 2.5316455696px, 30px)",
        "jumbo-xs": "10vw",
        "jumbo-sm": "15vw",
        "jumbo": "20vw",
        "jumbo-md": "25vw",
        "jumbo-lg": "30vw",
        "jumbo-xl": "40vw",
      },
      lineHeight: {
        "2xs": ".75rem",
        "3xl": "2.25rem",
        "4xl": "2.5rem",
        "5xl": "2.75rem",
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
        apercu: ["var(--font-apercu)"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};

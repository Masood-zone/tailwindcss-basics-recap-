/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./public/**/*.html", // if index.html or others are here
    "./scripts/**/*.js", // if you use Tailwind classes in JS
  ],
  theme: {
    extend: {
      fontSize: {
        base: "18px", // sets the body font size
      },
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
        fraunces: ["Fraunces", "serif"],
      },
      screens: {
        // Custom breakpoints
        "extra-small": "480px",
        mobile: "724px",
        tablet: "768px",
        desktop: "1024px",
        md: "768px",
        medium: "799px",
        sm: "640px",
        lg: "725px",
        xl: "1280px",
        "2xl": "1536px",
      },
      height: {
        "screen-40": "40dvh",
        "screen-50": "50dvh",
        "screen-60": "60dvh",
        "screen-90": "90dvh",
        300: "18.75rem", // 300px
        400: "25rem", // 400px
        500: "31.25rem", // 500px
        550: "34.375rem", // 550px
        600: "37.5rem", // 600px
      },
      colors: {
        primary: {
          red: "hsl(7, 99%, 70%)",
          yellow: "hsl(51, 100%, 49%)",
          greenDark: "hsl(167, 40%, 24%)",
          blueDark: "hsl(198, 62%, 26%)",
          green: "hsl(167, 34%, 41%)",
        },
        neutral: {
          950: "hsl(212, 27%, 19%)",
          600: "hsl(213, 9%, 39%)",
          550: "hsl(232, 10%, 55%)",
          400: "hsl(210, 4%, 67%)",
          white: "hsl(0, 100%, 100%)",
        },
      },
    },
  },
  plugins: [],
};

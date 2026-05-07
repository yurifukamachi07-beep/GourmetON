/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Cormorant Garamond'", "serif"],
        body: ["'Jost'", "sans-serif"],
      },
      colors: {
        gold: {
          50:  "#FDF8EC",
          100: "#F8EDCA",
          200: "#F0D68A",
          300: "#E4BA4A",
          400: "#C9991E",
          500: "#A07816",
          600: "#755810",
          700: "#4A380A",
        },
        forest: {
          50:  "#EAF2EE",
          100: "#C0D9CC",
          200: "#7FB3A0",
          300: "#4A8A72",
          400: "#1E6349",
          500: "#0B3D2E",
          600: "#072D21",
          700: "#041D15",
        },
        parchment: {
          50:  "#FDFCF9",
          100: "#F7F4EC",
          200: "#EDE8D8",
          300: "#DDD5BE",
        }
      },
      borderRadius: {
        none: '0',
        sm: '0',
        DEFAULT: '0',
        md: '0',
        lg: '0',
        xl: '0',
        '2xl': '0',
        '3xl': '0',
        full: '9999px',
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease forwards",
        "fade-in": "fadeIn 0.6s ease forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      letterSpacing: {
        widest2: '0.25em',
        widest3: '0.35em',
      }
    },
  },
  plugins: [],
}

const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./shared/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    typography: require("./typography"),
    extend: {
      colors: {
        // Aliases for ease of re-design
        body: colors.slate[100],
        primary: colors.indigo["500"],
        slate: {
          950: "#0C1323",
          1000: "#080D19",
          1050: "#050911",
        },
      },
      fontSize: {
        "5xl": ["3rem", "1.3"],
        "2xs": "0.625rem",
      },
      maxWidth: {
        "container-desktop": "1600px",
        lg: "33rem",
        "2xl": "40rem",
        "3xl": "50rem",
        "5xl": "66rem",
      },
      opacity: {
        1: "0.01",
        2.5: "0.025",
        7.5: "0.075",
        15: "0.15",
      },
    },
    fontFamily: {
      sans: 'CircularXX, Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      heading: `CircularXX, Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
      mono: '"CircularXX Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    spacing: {
      100: "clamp(0.25rem, calc(0.19rem + 0.31vw), 0.56rem)",
      200: "clamp(0.5rem, calc(0.43rem + 0.38vw), 0.88rem)",
      300: "clamp(0.75rem, calc(0.68rem + 0.38vw), 1.13rem)",
      400: "clamp(1rem, calc(0.86rem + 0.69vw), 1.69rem)",
      500: "clamp(1.5rem, calc(1.35rem + 0.75vw), 2.25rem)",
      600: "clamp(2rem, calc(1.73rem + 1.38vw), 3.38rem)",
      700: "clamp(3rem, calc(2.7rem + 1.5vw), 4.5rem)",
      800: "clamp(4rem, calc(3.45rem + 2.75vw), 6.75rem)",
    },
    extend: {
      fontSize: {
        "fluid-100": "clamp(0.63rem, calc(0.82rem + -0.16vw), 0.79rem)",
        "fluid-200": "clamp(0.75rem, calc(0.9rem + 0.04vw), 0.95rem)",
        "fluid-300": "clamp(0.9rem, calc(0.98rem + 0.13vw), 1.13rem)",
        "fluid-400": "clamp(1.13rem, calc(1.05rem + 0.37vw), 1.5rem)",
        "fluid-500": "clamp(1.27rem, calc(1.12rem + 0.73vw), 2rem)",
        "fluid-600": "clamp(1.42rem, calc(1.18rem + 1.24vw), 2.66rem)",
        "fluid-700": "clamp(1.6rem, calc(1.21rem + 1.95vw), 3.55rem)",
        "fluid-800": "clamp(1.8rem, calc(1.22rem + 2.93vw), 4.74rem)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

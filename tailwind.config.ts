import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */

const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},

    colors: {
      white : "#ffffff",
      seagull: {
        "50": "#f2f9fd",
        "100": "#e4f2fa",
        "200": "#c2e5f5",
        "300": "#87ceeb",
        "400": "#50b9e0",
        "500": "#2aa0cd",
        "600": "#1b81ae",
        "700": "#17678d",
        "800": "#175775",
        "900": "#184962",
        "950": "#102f41",
      },
    },
  },

  darkMode: "class",
  plugins: [nextui()],
};

export default config;

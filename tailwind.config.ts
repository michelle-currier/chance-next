import type { Config } from "tailwindcss";
import Image from "next/image";


import imageHero from "src/images/hero-image.jpg";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {      
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      dropShadow: {
        'sm': '0 1px 2px rgba(0, 0, 0, 0.75)',
      },
      transitionProperty: {
        // Add any properties you want to transition globally
        'button': 'background-gradient',
      },
      transitionDuration: {
        'button': '500ms', // Customize duration for buttons
      },
      transitionTimingFunction: {
        'button': 'ease-in-out', // Customize easing for buttons
      },
    },
  },
  plugins: [],
};
export default config;
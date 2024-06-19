import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        myYellow: "#ffbe0b",
        myOrange: "#fb5607",
        myPink: "#ff006e",
        myPurple: "#8338ec",
        myBlue: "#3a86ff"
      }
    },
    fontFamily: {
      consolas: ['Consolas', 'monaco', 'monospace']
    }
  },
  plugins: [],
};
export default config;

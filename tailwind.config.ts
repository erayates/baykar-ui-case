import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "*",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        highlight: "var(--highlight)",
        accent: "var(--accent)",
        cream: "var(--cream)",
        gold: "var(--gold)",
        shadeBlue: "var(--shadeBlue)",
        beige: "var(--beige)",
        pinkishRed: "var(--pinkish-red)",
        deepCyan: "var(--deep-cyan)",
        darkOrange: "var(--dark-orange)",
        deepGreen: "var(--deep-green)",
        amethyst: "var(--amethyst)",
      },
      boxShadow: {
        card: "0px 25px 50px -12px rgba(255, 255, 255, 0.07)",
        cardBottom: "0px 25px 50px -12px rgba(255, 255, 255, 0.25)",
        custom: "0px 0px 10px 0px #00000012, 0px 20px 25px -5px #0000001A",
        macCard: " 0px 0px 15px 0px #00000012, 0px 25px 50px -12px #00000040",
        carousel: "0px 0px 6px 0px #00000012,0px 10px 15px -3px #0000001A",
      },
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontSize: {
      xs: "14px",
      sm: "16px",
      md: "18px",
      lg: "20px",
      xl: "22px",
      sxl: "24px",
      "2xl": "32px",
      "2.5xl": "48px",
      "3xl": "56px",
      "4xl": "72px",
      "5xl": "96px",
    },
    container: {
      padding: {
        DEFAULT: "16px",
        md: "80px",
      },
    },
  },
  plugins: [],
};
export default config;

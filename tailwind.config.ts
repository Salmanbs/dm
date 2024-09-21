import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Custom gray shades
        "custom-gray": {
          100: "#F5F5F5", // background
          200: "#F2F2F2", 
          300: "#FFFFFF", 
          400: "#999999", 
          500: "#666666", 
          600: "#333333", 
        },
        'custom-black': {
          100: '#030303', 
          200: '#000000', 
        },
        'custom-border-gray':{
          200:'#F2F2F2'
        }
      },
    },
  },
  plugins: [],
};
export default config;

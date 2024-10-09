import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },

      colors: {
        background: "#fffdfc",
        foreground: "#000000",
        grey: {
          DEFAULT: "#F5F1F1",
          main: "#F5F1F1",
          dark: "#CBCBCB",
          darker: "#707070",
        },
        primary: {
          DEFAULT: "#271962",
          lighter: "#F8F6FD",
          main: "#271962",
        },
        secondary: {
          DEFAULT: "#DE5515",
          main: "#DE5515",
        },
      },
    },
  },
  plugins: [],
};
export default config;

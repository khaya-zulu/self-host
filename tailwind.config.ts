import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      sm: "0.75rem", // 12px
      base: "0.8rem", // 14px
      lg: "1rem", // 16px
      xl: "1.125rem", // 18px
      "2xl": "1.25rem", // 20px
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        iris: {
          10: "#F9F9FF",
          200: "#ECEEFD",
          400: "#B4BCF6",
          800: "#6878ED",
        },
      },
    },
  },
  plugins: [],
};
export default config;

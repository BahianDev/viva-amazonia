import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      padding: {
        "80px": "80px",
      },
      colors: {
        primary: "#06414E",
        apoiosea: "#9ED3CE",
        secondary: "#BCDC49",
        gray: "#D6D8D8",
        background: "#F9F9F9",
        apoioazulpistache: '#C6E5DE',
        transparent:
          "linear-gradient(180deg, #FFF 0%, rgba(255, 255, 255, 0.98) 100%)",
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
export default config;

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
      background: {
      },
      colors: {
        primary: "#06414E",
        apoiosea: "#9ED3CE",
        blackTransparent: "rgba(0, 0, 0, 0.50)",
        blue: "#2B8C83",
        secondary: "#BCDC49",
        gray: "#D6D8D8",
        background: "#F9F9F9",
        apoioazulpistache: '#C6E5DE',
        transparent:
          "linear-gradient(180deg, #FFF 0%, rgba(255, 255, 255, 0.98) 100%)",
      },
      backgroundImage: {
        'map':
          "url('/map.png')",
          loading: 'linear-gradient(270deg, #BDDD4D 0.02%, #CBFFA7 49.3%, #9DD4CF 97.56%)',
          hero: "url('/hero.jpeg')"

      },
    },
  },
  plugins: [],
};
export default config;

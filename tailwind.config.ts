import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'primaryBlue': '#475be8',
        'secondaryBlue': '#dadefa',
        'hoverBlue': '##5367f5',
        'primaryBlack': '#11142d',
        'primaryGrey': '#808191',
        'primaryGreen': '#2ed480',
        'primaryRed': '#eb5757',
        'primaryYellow': '#f2c94c',

        //Dark mode
        'bgColorDarkBlack': '#111315',
        'lightBlack': '#1a1d1f',
        'textWhite': '#efefef',
        'textGrey': '#6f767e',
      },
      screens: {

        'mobile': '375px',

        'tablet': '601px',

        'laptop': '1024px',

        'desktop': '1280px',
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;

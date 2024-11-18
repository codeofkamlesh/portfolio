import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container :{
        screens: {
          xs: '480',
          xxs: '320',
          xxxs: '250',
        },
        
      },
      colors: {
       accent: "#08E95E"
      },
    },
  },
  plugins: [],
};
export default config;

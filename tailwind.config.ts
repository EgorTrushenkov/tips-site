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
        "my-gradient": "linear-gradient(180deg, #990000 0%, #FFB800 100%)",
        "my-gradient2":
          "linear-gradient(270.02deg, #ff9900 0.02%, #ee5600 99.98%)",
        "gradient-card1": "linear-gradient(180deg, #B63915 0%, #501909 100%)",
        "gradient-card2": "linear-gradient(180deg, #FF0000 0%, #260000 56%)",
        "gradient-card3": "linear-gradient(180deg, #A855EC 0%, #5F3086 100%)",
        "gradient-card4": "linear-gradient(180deg, #009246 0%, #003017 100%)",
        "gradient-card5": "linear-gradient(180deg, #CFCFCF 0%, #6A6A6A 100%)",
        "gradient-card6": "linear-gradient(180deg, #A82B41 0%, #42111A 100%)",
        "gradient-card7": "linear-gradient(180deg, #7F5744 0%, #FEEADC 100%)",
        "gradient-card8": "linear-gradient(180deg, #0C1700 0%, #477D0E 100%)",
        "gradient-card9": "linear-gradient(180deg, #38008D 0%, #9E5FFE 100%)",
        "gradient-card10": "linear-gradient(180deg, #004246 0%, #08EFFF 100%)",
        "gradient-card11": "linear-gradient(180deg, #0A0F1B 0%, #AF64CA 100%)",
        "gradient-card12": "linear-gradient(180deg, #A8DCFE 0%, #DCECFF 100%)",
      },
    },
    screens: {
      ssm: { max: "450px" },
      sm: { max: "560px" },
      smd: { max: "600px" },
      md: { max: "767px" },
      lg: { max: "960px" },
      slg: {max: "1250px"},
      xl: { max: "1440px" },
      xxl: { max: "1880px" },
    },
  },
  plugins: [],
};

export default config;

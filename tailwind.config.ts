import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fraunces: ['"Fraunces Variable"', "serif"],
        lora:     ['"Lora"',     "serif"],
        dm:       ['"DM Sans"',  "sans-serif"],
      },
      colors: {
        paper:   "#EFE3CC",
        straw:   "#F8F1E3",
        plaster: "#E3D0B0",
        clay:    "#C05828",
        sienna:  "#983E14",
        sage:    "#647E59",
        mustard: "#C49A28",
        ink:     "#271506",
        sepia:   "#7A5A38",
        creamdk: "#D9C8A8",
      },
    },
  },
  plugins: [],
};

export default config;

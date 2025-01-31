import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";


const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
		fontFamily: {
			sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
			display: ["var(--font-calsans)"],
		},
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;

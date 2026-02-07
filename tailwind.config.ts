import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'orange': '#FF1510',
        'light-orange': '#FDECEC',
        'light-blue': '#E7F6E7',
        'gray-1': '#404040',
        'gray-2': '#8C8C8C',
        'gray-3': '#B9B9B9'
      },
    },
  },
  plugins: [],
};
export default config;

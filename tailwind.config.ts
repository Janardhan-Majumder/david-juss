import type { Config } from "tailwindcss";

export default {
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
        playground: "var(--playground)",
        primary: "var(--primary)",
        heading: "var(--heading)",
        hash: "var(--hash)",
      },
      fontFamily: {
        poppins: ["var(--poppins)", "serif"],
        roboto: ["var(--roboto)", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;

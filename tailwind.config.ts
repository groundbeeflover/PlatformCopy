import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    //"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        archivo: ["Archivo", "sans-serif"], // Add Archivo as a custom font
      },
    },
  },
  plugins: [],
  safelist: [
    'mx-auto',
    'my-4',
    'block',
    'max-w-full',
    'h-auto',
    'w-fit'
  ],
} satisfies Config;

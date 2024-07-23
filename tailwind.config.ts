import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      dropShadow: {
        "outline-white": [
          "1px 1px 0 white",
          "-1px -1px 0 white",
          "-1px 1px 0 white",
          "1px -1px 0 white"
        ]
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
export default config;

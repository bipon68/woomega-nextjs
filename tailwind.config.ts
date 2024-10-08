import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/woomega-nextjs/**/*.{ts,tsx}",
  ],
  theme: {
    extend: { 
      colors:{
        "primary":"#fdbf70",
        "secondary":"#22222b"
      },
      spacing: {
        1.5: "0.375rem",
        2.5: "0.625rem",
        3.5: "0.875rem",
        4.5: "1.125rem",
        5.5: "1.375rem",
        6.5: "1.625rem",
        7.5: "1.875rem",
        8.5: "2.125rem",
        11: "2.75rem",
        12.5: "3.125rem",
        13: "3.25rem",
        18: "4.5rem",
        21: "5.25rem",
        22: "5.5rem",
        25: "6.25rem",
        30: "7.5rem",
        38: "9.5rem",
        42: "10.5rem",
        50: "12.5rem",
        66: "16.5rem",
        68: "17rem",
        76: "19rem",
        84: "21rem",
        86: "21.5rem",
        88: "22rem",
        90: "22.5rem",
        92: "23rem",
        94: "23.5rem",
        98: "24.5rem",
        100: "25rem",
        104: "26rem",
      },
      borderRadius: {
        5: "5px",
        10: "10px",
        15: "15px",
        20: "20px",
        30: "30px",
      },
      keyframes: {
        slideTop: {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideBottom: {
          '100%': { transform: 'translateY(50px)', opacity: '0' },
          '0%': { transform: 'translateY(0)', opacity: '1' },
        },
        zoomIn: {
          from: {
            opacity: '0',
            transform: 'scale3d(0.3, 0.3, 0.3)',
          },
          '50%': {
            opacity: '1',
          },
          to: {
            opacity: '1',
            transform: 'scale3d(1, 1, 1)',
          },
        },
      },
      animation: {
        zoomIn: 'zoomIn 500ms ease-in-out both',
        slideTop: 'slideTop 500ms ease-in-out forwards',
        slideBottom: 'slideBottom 500ms ease-in-out forwards',
      },
    },
  },
  plugins: [],
};
export default config;

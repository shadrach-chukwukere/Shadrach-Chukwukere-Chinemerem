/** @type {import('tailwindcss').Config} */
export const darkMode = "class";
export const content = [
  "./app/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  extend: {
    colors: {
      accent: {
        light: "#06b6d4",
        dark: "#22d3ee",
      },
    },
  },
};
export const plugins = [];

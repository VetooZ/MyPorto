/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)", // Menggunakan CSS custom property
        foreground: "var(--foreground)",
        primary: "#030712", // Menambah warna kustom tanpa menghapus warna default
        white: "#fafafa", // Menambah warna kustom tanpa menghapus warna default
      },
      
    },
  },
  plugins: [],
};

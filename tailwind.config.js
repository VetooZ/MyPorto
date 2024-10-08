/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'inner-gray' : 'inset 0 20px 50px -15px rgba(15 ,23 ,52 , 0.5)',
        'inner-lg' : 'inset 0 20px 50px -15px rgba(0 ,0 ,0 , 3)',
        
      },
      colors: {
        background: "var(--background)", // Menggunakan CSS custom property
        foreground: "var(--foreground)",
        primary: "#030712", 
        white: "#fafafa",
        blue: "#3b82f680",
        gray:"#0f172a",
        'neon-green': '#39ff14', // Menambah warna kustom tanpa menghapus warna default
      },
      
    },
  },
  plugins: [],
};

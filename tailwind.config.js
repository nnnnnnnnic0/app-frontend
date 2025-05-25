/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        altiblue: '#2563eb',      // Azul profundo
        altiblueLight: '#38bdf8', // Celeste claro
        altigray: '#64748b',      // Gris montaña
        altiwhite: '#fff',        // Blanco nieve
        altiverde: '#22c55e',     // Verde acento
        alticoral: '#fb923c',     // Naranja coral
      },
    },
  },
  plugins: [],
}

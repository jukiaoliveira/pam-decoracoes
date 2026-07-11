/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // 🔥 Garanta que essa linha exata esteja aqui!
  ],
  theme: {
    extend: {
      fontFamily: {
        // Se você usou fontes personalizadas, elas entram aqui
        serif: ['Playfair Display', 'Georgia', 'serif'], 
      }
    },
  },
  plugins: [],
}
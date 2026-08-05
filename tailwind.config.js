/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Custom color palette based on Red/Bordeaux Glassmorphism prompt
                dark: {
                    DEFAULT: '#0a0a0a',
                    to: '#2a0510' // deeper bordeaux
                },
                primary: {
                    DEFAULT: '#e63946', // Red
                    glow: '#ff4d4d'     // Bright Neon Red
                },
                neon: {
                    blue: '#00f3ff',
                    purple: '#bf00ff',
                    green: '#00ff9f',
                    pink: '#ff00ff',
                    yellow: '#ffff00'
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            }
        },
    },
    plugins: [],
}

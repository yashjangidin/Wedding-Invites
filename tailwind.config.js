/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'cinzel': ['Cinzel', 'serif'],
                'vibes': ['Great Vibes', 'cursive'],
            },
            colors: {
                'night-blue': '#0f2027',
                'royal-teal': '#134E5E',
                'lavender': '#9b59b6',
                'warm-yellow': '#f39c12',
                'mehendi-green': '#2ecc71',
                'haldi-yellow': '#f1c40f',
                'shaadi-red': '#e74c3c',
            },
            backdropBlur: {
                'xs': '2px',
            },
        },
    },
    plugins: [],
}

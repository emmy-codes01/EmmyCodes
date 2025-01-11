/* eslint-disable no-unused-vars */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' /** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            animation: {
                'scroll-smooth': 'scroll 20s linear infinite',
                'scroll-smooth-reverse': 'scroll-reverse 20s linear infinite',
            },
            keyframes: {
                scroll: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(calc(-48px * 18))' },
                },
                'scroll-reverse': {
                    '0%': { transform: 'translateX(calc(-48px * 18))' },
                    '100%': { transform: 'translateX(0)' },
                },
                fontFamily: {
                    'space-grotesk': ['"Space Grotesk"', 'sans-serif'],
                },
            },

        },
    },
    plugins: [],
}
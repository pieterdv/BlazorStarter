/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    content: [
        './**/*.html',
        './**/*.razor',
        './**/*.razor.css'
    ],
    darkMode: 'media', // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
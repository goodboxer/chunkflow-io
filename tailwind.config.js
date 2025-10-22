/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
        "./**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'purple': '#C24FF2',
                'white': '#FFFFFF',
                'green': '#5BB974',
                'blue': '#DCEDF5'
            },
            fontFamily: {
                sans: "'Grandstander', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
                mono: "'Roboto Mono', SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace"
            }
        },
    },
    plugins: [],
}
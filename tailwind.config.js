module.exports = {
    mode: 'jit',
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            gridTemplateColumns: {
                // Song list grid columns
               'gridsong': '16px 6fr 4fr 3fr minmax(120px, 1fr)',
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('tailwind-scrollbar-hide')
    ],
}

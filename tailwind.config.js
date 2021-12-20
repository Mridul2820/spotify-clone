module.exports = {
    mode: 'jit',
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            gridTemplateColumns: {
                // Song list grid columns
               'gridsong': '16px 6fr 4fr 3fr minmax(80px, 1fr)',
               'gridsongsm': '6fr 40px',
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}

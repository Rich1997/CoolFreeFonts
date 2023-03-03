/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                'primary-dark': 'var(--primary-dark)',
                'primary-light': 'var(--primary-light)',
                'secondary-dark': 'var(--secondary-dark)',
                'secondary-light': 'var(--secondary-light)',
                'tertiary-dark': 'var(--tertiary-dark)',
                'tertiary-light': 'var(--tertiary-light)',
            },
        },
    },
    plugins: [],
};

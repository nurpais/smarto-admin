/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: {
                    100: '#F0F0FF',
                    200: '#D9D8FF',
                    300: '#7B79FF',
                    400: '#4945FF',
                    500: '#271FE0',
                },
                dark: {
                    100: '#F6F6F9',
                    150: '#EAEAEF',
                    200: '#DCDCE4',
                    300: '#C0C0CF',
                    400: '#A5A5BA',
                    500: '#8E8EA9',
                    600: '#666687',
                    700: '#4A4A6A',
                    800: '#32324D',
                    900: '#212134',
                },
            },
        },
    },
    plugins: [],
}

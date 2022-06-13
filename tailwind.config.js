module.exports = {
    content: ["./src/**/*.tsx"],
    theme: {
        extend: {
            colors: {
                brand: {
                    300: '#9960FF',
                    500: '#8257e6',
                },
                davita: {
                    black: {
                        1: '#0000001a',
                        2: '#0000009f'
                    },
                    blue: {
                        1: '#004c77',
                    },
                },
            },
            borderRadius: {
                md: '4px'
            }
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('tailwind-scrollbar'),
    ],
}

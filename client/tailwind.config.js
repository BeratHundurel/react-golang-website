/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "primary": "#B88E2F",
                "secondary": "#FFF3E3",
                "accent": "#F4F5F7",
                "neutral": "#333333",
                "success": "#2EC1AC",
                "error": "#E97171",
                "white": "#FFFFFF",
                "gray": "#898989",
                "calm": "#FCF8F3",
                "primary-text": "#3A3A3A",
                "secondary-text": "#616161",
            },
            width: {
                "0.5": "2px",
                "100": "400px",
                "106": "424px",
                "112": "448px",
            },
            height: {
                "100": "400px",
                "106": "424px",
                "112": "448px",
            },
            opacity: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
            transform: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
        }
    },
    plugins: [],
};

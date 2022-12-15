/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        screens: {
            xs: "448px",
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1600px",
        },
        fontFamily: {
            sans: ["Poppins", "sans-serif"],
        },
        extend: {
            backgroundImage: {},
        },
    },
    plugins: [require("daisyui")],

    // DaisyUI Customized
    daisyui: {
        themes: [
            {
                light: {
                    ...require("daisyui/src/colors/themes")["[data-theme=light]"],
                    "base-100": "#ffffff",
                    "base-content": "#000000",
                    neutral: "#F5F5F5",
                    primary: "#B42F7E",
                    secondary: "#E5E5E5",
                    accent: "#737373",
                },
                dark: {
                    ...require("daisyui/src/colors/themes")["[data-theme=dark]"],
                    "base-100": "#121212",
                    "base-content": "#ffffff",
                    neutral: "#171717",
                    primary: "#B42F7E",
                    secondary: "#262626",
                    accent: "#A3A3A3",
                },
            },
            "light",
            "dark",
        ],
    },
};

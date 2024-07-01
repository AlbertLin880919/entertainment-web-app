/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                background: "#10141E",
                navbarBg: "#161D2F",
                themeColor: "#FC4747",
            },
        },
    },
    plugins: [],
};

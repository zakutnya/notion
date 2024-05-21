/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            container: {
                center: true,
                padding: "1rem"
            },
            fontFamily: {
                sans: ["Inter", "sans-serif"],
                serif: ["Lora", "serif"],
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
};

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {},
        backgroundImage: {
            banner: `url('/public/images/Group 91.png')`,
            intro: "url('/public/images/Group 92.png')",
            roadmap: "url('/public/images/table 1.png')",
            team: "url('/public/images/Group 94.png')",
            team2: "url('/public/images/Layer 1 copy.png')",
        },
    },
    plugins: [],
}

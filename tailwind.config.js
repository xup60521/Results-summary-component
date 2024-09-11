/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                c_p_Light_red: "hsl(0, 100%, 67%)",
                c_p_Orangey_yellow: "hsl(39, 100%, 56%)",
                c_p_Green_teal: "hsl(166, 100%, 37%)",
                c_p_Cobalt_blue: "hsl(234, 85%, 45%)",

                c_g_Light_slate_blue_background: "hsl(252, 100%, 67%)",
                c_g_Light_royal_blue_background: "hsl(241, 81%, 54%)",
                c_g_Violet_blue_circle: "hsla(256, 72%, 46%, 1)",
                c_g_Persian_blue_circle: "hsla(241, 72%, 46%, 0)",

                c_n_Pale_blue: "hsl(221, 100%, 96%)",
                c_n_Light_lavender: "hsl(241, 100%, 89%)",
                c_n_Dark_gray_blue: "hsl(224, 30%, 27%)",
            },
            fontFamily: {
                hanken_grotesk: ["Hanken Grotesk", "sans-serif"]
            }
        },
    },
    plugins: [],
}


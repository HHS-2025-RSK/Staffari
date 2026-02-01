/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        emeraldGreen: "#195F4E", // [file:1][file:2]
        deepJungleGreen: "#0F3D34", // [file:1][file:2][file:3]
        terracotta: "#E57734", // [file:1]
        charcoalBlack: "#1C1C1C", // [file:1][file:2]
        mutedOlive: "#7B6F57", // [file:1][file:2]
        cardBg: "#FDF9F0", // [file:2]
        pageBg: "#FFFFFF", // [file:1][file:2]
      },
      fontFamily: {
        display: ["Space Grotesk", "ui-sans-serif", "system-ui"],
        body: ["Poppins", "ui-sans-serif", "system-ui"],
      },
      borderRadius: {
        xl2: "20px", // role cards ~20 [file:2]
      },
      boxShadow: {
        soft: "0 12px 30px rgba(15, 61, 52, 0.08)",
      },
    },
  },
  plugins: [],
};

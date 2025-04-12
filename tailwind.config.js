// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      rotate: {
        "-45": "-45deg",
      },
      translate: {
        "-5": "-20px", // You can name it whatever
        1.25: "5px",
      },
    },
  },
  plugins: [],
};

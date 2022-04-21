module.exports = {
  theme: {
    extend: {
      colors: {
        immersvepink: "#ff5ff3",
        immersveblue: "#4ca5ff",
        immersvepurple: "#5434ff",
      },
      fontFamily: {
        bebasneue: [`"Bebas Neue"`],
        montserrat: [`"Montserrat"`],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
  content: ["./node_modules/flowbite/**/*.js"],
};

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./slices/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ["Roboto Mono"],
      },
      screens: {
        // prettier-ignore
        "4xs": {'min': '318px', 'max': '350px'},
        // prettier-ignore
        "3xs": {'min': '350px', 'max': '400px'},
        // prettier-ignore
        "2xs": {'min': '400px', 'max': '460px'},
        // prettier-ignore
        'xs': {'min': '460px', 'max': '640px'},
        // prettier-ignore
        // '3xl': {'min': '460px', 'max': '640px'},
      },
    },
  },
  plugins: [],
};

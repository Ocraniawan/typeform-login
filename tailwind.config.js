module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./modules/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        "max-height": "max-height",
      },
      backgroundImage: {
        "err-warning": "url('/images/warning.svg')",
      },
    },
  },
};

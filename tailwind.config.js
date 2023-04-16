module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  variants: {
    textColor: ['group-hover', 'hover'], 
}
}
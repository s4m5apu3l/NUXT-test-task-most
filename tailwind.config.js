/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [require("windstrap")],
  // important: true,
  purge: {
    layers: ["base", "utilities"],
  },
}

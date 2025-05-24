// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}",],
  darkMode:['class','[data-theme="dark]'],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"], // আপনার প্রয়োজন অনুযায়ী থিম অ্যাড করতে পারেন
  },
}
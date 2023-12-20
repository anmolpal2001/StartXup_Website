/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        "blueColor" : "#2D68FF",
        "lightGreyish" : "#D9D9D9",
        "lightBlue" : "#477AFC",
        "backgroundColor" : "#2C2B30",
        "darkColor" : "#2C2B30",
    },
  },
},
  plugins: [require('flowbite/plugin')],
}


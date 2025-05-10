/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'],
        quicksand: ['Quicksand', 'sans-serif'],
      },
       backgroundImage: {
        'footer-bg': "url('../src/assets/image/footer-bg/home_counters_bkg.png')"
      },
        colors: {
        primary: '#096743',       // Màu chủ đạo
        price: '#DD0C1B',         // Màu giá 
        button: '#10B981',        // Màu nút bấm
        button_hover: '#F3F4F6',  // Màu hover nút bấm
        text: '#515151',          // Màu chữ 
      },
    },
  },
  plugins: [],
}
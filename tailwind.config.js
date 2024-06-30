/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    

    screens:{
      'sm': '480px',
      'md': '768px',
      'lg': '976px',
      'xl': '1024px',
      '2xl':'1250px',
      '3xl':'1440px',
    },

    fontFamily:{
      'karla1':'karla1, sans-serif',
      'karla2':'karla2, sans-serif',
      'karla3':'karla3, sans-serif'

    },

    fontSize:{
      'smaller':'0.7rem',
      1: '0.8rem',
      1.5:'0.9rem',
      2: '1rem',
      3: '1.125rem',
      4: '1.5rem',
      5: '2rem',
      6: '2.5rem',
      7:  '3rem',
      8: '3.5rem',

    },

    extend: {
      colors:{
        LightGreen:'var(--LightGreen)',
        Green:'var(--Green)',
        Red:'var(--Red)',
        White:'var(--White)',
        MediumGrey:'var(--MeduiumGrey)',
        DarkGreg:'var(--DarkGrey)',
      },
    },
  },
  plugins: [],
}
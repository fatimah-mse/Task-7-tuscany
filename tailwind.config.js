/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xll' : '1400px'
      },
      fontFamily: {
        'open-sans' : ['var(--font-open-sans)']
      },
      fontSize: {
        '32' : '2rem'
      },
      spacing: {
        '5.5' : '22px',
        '6.1' : '25px',
        '8.3' : '30px',
        '8.5' : '33px',
        '9.5' : '38px',
        'g-13' : '50px',
        '15' : '60px',
        '21' : '83px',
        '28.5' : '118px' ,
        '29' : '120px' ,
        '42': '168px',
        '82': '23.24%',
        '82.5' : '47%',
        '83' : '48%',
        '70' : '70%',
        '99' : '450px',
        '99' : '450px',
        '700' : '700px',
        '130' : '12.04vh',
        '133' : '12.315vh',
        '250': '13.021%',
        '167' : '8.69791vw',
        '1/2.5' : '35%',
        '53' : '212px',
        '340' : '340px',
        '488' : '488px',
      },
      colors: {
        'primary' : '#333',
        'secondary' : '#FA8B02',
        'dark-bg' : 'rgba(255, 255, 255, 0.2)',
        'white-bg' : 'rgba(255, 255, 255, 0.3)',
        'light-bg' : 'rgba(255, 255, 255, 0.4)',
        'placeholder' : 'rgba(51, 51, 51, 0.5)',
      },
      translate: {
        '2/5': '45%',
      }
    },
  },
  plugins: [],
};

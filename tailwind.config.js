/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: {
          500: '#8A8A89',
        },
        black: '#121417',
        white: '#F7F7FB',
        blue: {
          500: '#3470FF',
        },
        indigo: {
          500: '#0B44CD',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'Montserrat', 'sans-serif'],
      },
      fontSize: {
        sm: ['14px', '20px'],
        base: ['16px', '24px'],
        lg: ['20px', '28px'],
        xl: ['24px', '32px'],
      },
      spacing: {
        // Визначте відступи (margins та paddings) для вашого проекту
        1: '8px',
        2: '16px',
        3: '24px',
        // Додайте інші значення відступів за потребою
      },
      // Додайте інші налаштування теми за потребою
    },
  },
  plugins: ['prettier-plugin-tailwindcss'],
};

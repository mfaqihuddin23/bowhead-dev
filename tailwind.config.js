/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./assets/**/*.{html,js}", "*.html", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      fontFamily:{
        'axiforma':['Axiforma'],
      },
      colors:{
        'bowtrans':{
          100 : 'rgba(97, 213, 219, 0.3)',
        },
        'bowhead':{
          100 : '#424242',
          200 : '#F6F8FC',
          300 : '#6C63FF',
          400 : '#8E8E8E',
          500 : '#3CB2B8',
          600 : '#FF9A66',
          700 : '#61D5DB',
          
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('flowbite/plugin')
  ],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}"// 在哪里src 作用范围.js .jsx 
  ],
  theme: {
    extend: {
      padding: {
        //默认 p-1 = 0.25rem, 自定义 p-1 = 30px
        '1': '30px'
      },
      fontSize: {
        //默认字体大小1rem, 行高1.5rem, 自定义字体大小30px, 行高2rem
        'base': ['30px', '2rem']
      },
      screens: {
        // 适配 
        'md': '300px'
      }
    },
  },
  plugins: [],
}


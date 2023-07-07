/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    // 插件 用于在项目中快速添加和配置排版样式
    require("@tailwindcss/typography")
  ],
}


- tailwindcss
  - 引入
    npm i tailwindcss @tailwindcss/typography  
    npm i postcss@latest autoprefixer@latest  
    npx tailwindcss init自动生成tailwind.config.js
  - 优化
    - 路由的懒加载
    - webpack5 treeshaking  
      从最终的打包文件中剔除未使用的代码，以实现更小且更高效的打包大小  
      函数  
    - 按需加载 
      ElementPlus 
      tailwindcss + typography  
  - 图标库
    npm i @icon-park/vue-next
  - 高亮
    npm i highlight.js
  - npm i markdown markdown-it 解析markdown格式为html  
    npm i --save-dev @types/markdown-it  
  - 手写封装了Loading, Copy等通用组件
  - 使用了crypto.js加解密，提升openai key的安全性
    npm install @types/crypto-js

- 特点和难点
  - 使用了typescript封装了chatgpt的chat接口，使用数组维持最近三次上下文，让chatgpt更懂我们，同时tokens消耗可控
  - 使用了tailwindcss + typography 字体库
  - 图标库使用@icon-park/vue-next，全面支持composition-api
    聊天高亮使用highlight.js, markdown-it 解析markdown格式为html 
  - 聊天内容支持markdown语法解析，chatgpt返回的代码体验更好 
  - 在获取openai的返回值时，返回fetch二进制流操作进行解析，逐步添加到页面，类似打字机的效果。
  
- ts难点技巧
  在这个项目中，我逐步熟练了ts + vue3的写法  
  - ref dom 节点
    const chatListDom = ref<HTMLDivElement>() 
  - ref响应式
    const messageList = ref<ChatMessage[]>([  
  - 联合和枚举类型
    const btnStatus = ref<'copy' | 'loading' | 'success' | 'error'>('copy')  
  - reactive响应式
  - api接口
  - pinia
  - types类型定义
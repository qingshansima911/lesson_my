- vue-front
  - npm init vite baiduzhidao vue ts  
  - npm i 
    main.ts 找不到模块或类型声明 src/vite-env.d.ts中加入相应的代码
  - 添加@ / ~ 
    - vite.config.ts
    - tsconfig.json
  - 配置路由
    - npm install vue-router@next  
    - router  
      index.ts  
    - main.ts使用路由配置  
    - 创建home.vue页面  
      views/Home.vue  App添加router-view  
  - 编写底部导航栏
    在vue3中如何创建底部导航栏，分别为答题、精选、问、消息、我的，样式用tailwind框架  
    - 如何在vue + typescript中引入tailwind框架
      - 安装依赖 npm install tailwindcss@latest postcss@latest autoprefixer@latest
      - npx tailwindcss init -p 初始化生成tailwind.config.js并在content加入作用范围即所有模板文件的路径
      - 在src下创建styles/tailwind.css，并将以下内容添加到文件中
      - 在main.ts中 import './styles/tailwind.css';//引入tailwind样式
    - 引入iconfont iconfont选图标，link在index.html中  
    - router-link点击后的样式 active-class="active" 
    - 创建其他路由 答题、精选、问、消息、我的 
  - 用vue3 + tailwind写一个搜索框input  
  - 在vue3 + tailwind项目中如何引入elment-plus的选项卡el-tabs 
    npm i element-plus   main.ts引入  
  - 用vue + tailwind写一个提问列表页面  
  - 如何在vue.3.0 + typescript项目store文件home.ts中使用pinia
    - npm install pinia 
    - main.ts引入
    - 创建service文件夹、config.ts、home.ts
  - 写login.vue
    - 引入vant组件 npm i vant  mian.t引入Form
# tailwind 极受欢迎的css 原子开发框架

- tailwind 是基于postcss 的css 工程化工具  
    npx create-react-app tailwind-test    
    - 引入的步骤    
      npx tailwindcss init 初始化  tailwind.config.js   
    - 修改原子类名  
      1. tailwind.config.js  
      2. text-[14px] p-[10px] border-[3px] border-[#df092d] border-dotted  

- tailwind 应用场景
    1. 最酷的css 框架  
    2. 快速的完成开源项目

- tailwind + react 做todolist  
    npm i -D tailwindcss  

- xs sm md lg xl是什么意思？
  xs (extra small)超小 
  sm small   
  md meddle   
  lg large   
  xl extra large超大  

  sm-平板--屏幕宽度大于或者等于576px
  md-桌面显示屏--屏幕宽度大于或者等于768px  
  lg-大桌面显示器--屏幕宽度大于或者等于992px  
  xl-超大屏幕显示器--屏幕宽度大于等于1200px  

- tailwind 优点
  1. 类名不需要命名，不会覆盖，不会冲突
  2. 不需要考虑兼容性
  3. css 停止增长，性能高
  4. 更安全 不需要scope

- react 
  - 极致函数式编程
    组件就是函数 必须返回JSX JS in XML(语法糖)   
    函数是一等对象 webpack treeshaking  
  - react里面定义类名为什么用className?而不用class?
    JSX是html，会被AST(抽象语法树)分解成虚拟DOM，分词时class会被认为是一个类，JSX交给babel @babel/preset-react进行token解析，必须用className   
  - vue2为什么要类式编程？  vue3 setup抄react也是函数式编程
    {  
      data() {  
        return {  
          a: 1  
        }  
      }  
    }  
    this.a 要通过this找到a  

  - useState 闭包提供状态

- vue react 区别
  - react 单向绑定 vue 双向绑定  
  - vue 指令 v-
    原生js jsx + js 代码  
  - react 事件原生 vue @change 
  - vue好入门 react 学习曲线陡峭  

- hooks react 才是发明者
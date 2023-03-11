# vue 2.0 语法

- 公司用react，但我们只会vue，怎么回答？
    1. vue和react都是当下最好的MVVM开发框架 都是组件化思想和数据驱动
    2. vue3.0 composition api + hooks函数编程 两个越来越像 
    3. 当时选择vue作为主要学习开发框架，相信自己如果做react也可以很快熟悉

 - vue2和vue3有何区别？
    1. 面向对象编程和函数编程
        composition api + setup 语法糖  
        代码风格不用为了面向对象而面向对象 this基本不用  
        composition api 很好用  
    2. hooks编程 useRouter useStore
    3. 老版本项目切换回去也很快，主打学习vue3

- 在工程化的思维下，开发vue项目的本质是？
    1. .vue的组件为主
        template script style 三明治  
    2. 使用相应的loader将代码编译为浏览器可执行的js/css文件
        - vue-loader 处理 .vue文件 
        - style style-loader css-loader stylus-loader
        - script + template 
            vue-loader mvvm {{}} state  
                - vue3 setup api
                - vue2 类式编程
            js babel-loader  
            
# 手写webpack

- 依赖关系
    - webpack vite本质？  
        1. main.js 类似的入口  
            单个文件的视角 （整个项目的视角）   
            index.js -> module test.js -> babel -> 分词 抽象语法树AST -> import to require  
        2. 整理出来依赖关系  
        3. build 一个文件   
            word.js -> message.js -> index.js  
        4. npm i @babel/parser  @babel/traverse @babel/core @babel/preset-env -D
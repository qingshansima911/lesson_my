- 数据库类型
    - 关系型数据库
        Mysql 主要通过sql语句交流 表关联 1：n 索引 外键  
    - NoSQL 文档型数据库(微博)
        mongodb 自由 主要通过js语句交流 json可以存进去  
    
- express-generator 
    - bin/www 服务器上线目录 nginx 代理目录  
    - mongoose 数据库驱动 mongodb://localhost:27017/test
    - cors 手写
    - 路由中间件 可以设置路由前缀  

- crud
    restful  
    MVC Model   
    mongodb存的时候自动生成，不用建表，给一个json   
    ORM对象关系映射  Object-Relational Mapping  
        它将关系型数据库中的表、列、行等关系模型映射为面向对象编程语言中的类、对象、属性等对象模型   
        Schema和简化的api  
    - manufacturer
    - products  

-mysql和mongodb的区别
    mongodb对js非常友好，文档型数据库，NOSQL  
    test -> manufacturer(collection) -> document(JSON)   
    .find({}).findOne({}) .exec .save() .update() .remove()  
    id 自增 / _id hash值 mongodb来完成    
# 鸭子模型 Duck Typing
    国王 喜欢听鸭子嘎嘎嘎叫，鸭子合唱团，1000只鸭子
    
    - 1000只 鸭子
    - 对象字面量{}
## es6 let const
    ECMAScript 6 入门 https://es6.ruanyifeng.com/
    let  声明变量
    const 声明常量 必须赋初值
        - const arr = [1,2,3]
            - 在头部和尾部 unshift + shift | push + pop
            常量能变吗？
            - 简单数据类型 常量不能该
            - 复杂数据类型 值可以改 类型不能改
        - es6 之前没有常量
            var 怎么声明常量 
            var PI
    var 声明的范围是全局作用域，let 和 const 声明的范围是块作用域{}
    const 的行为与 let 基本相同,但const 声明的变量必须进行初始化，且不能被修改
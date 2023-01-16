[类型转换](https://juejin.cn/post/6844903983429976078#heading-7)
- js 类型知识点
    1. 7个基础数据类型 + 1个对象  
    2. typeof null object [object array]   
        instanceof  {} -> Object -> null  
    3. 基于对象的面向对象？ new   
        constructor + prototype  
    4. prototype 继承  
    5. 类型转换 隐式 + 显式  
    6. 0.1 + 0.2 ！= 0.3  

- 请向学习this 的规则一样， 学习类型转换的规则  
    有法可依  

- js 弱类型语言， 类型的转换系统   
    字符串  
    布尔值  
    字符值  
    + ！ * / === 隐式类型转换  

- 由于js 神气（莫名其妙）的类型转换， 建议，在代码里面不要用==  
    js 推荐禁用== 使用===  
    [] + {} = ?    

- 显示类型转换  
    Boolean()  
    Number()  
    String()  
    类型转换了， 但是没有调用以上方法， 偷偷地换了，隐式类型转换  

- + 小心，类型转换 字符串的拼接， 数值相加  
    x + y  
    + 左右两侧，任何一个是字符串， 拼接； 不是字符串的隐式类型转换成字符串  
    如果左右任何一个是对象， 这个对象toPrimitive得到字符串， 拼接， 另外一个转换成字符串  
    变成数值类型， 相加    

- String() 强制类型的规则  
    简单数据类型 和理解的一样 ''  
    复杂数据类型 有好几个规则，可能各不一样  
    - 对象字面量 [object Object]  
    - 数组 '' [1,2,3] '1,2,3'  [] + {}  
        会调用原型链上的toString方法， 并作为结果返回  

- Number() 强制类型转换的时候  
    - 简单数据类型 Number(undefined) NaN  
        Symbol() throw error   
    - 复杂数据类型 -> Number   
        复杂数据类型 -> 基础数据类型的过程 ToPrimitive  
        1. 会先转换为基础数据类型  [1,2,3] -> '1,2,3'  
            valueOf 方法 优先  
            toString     
        2. 再转换成Number 类型  

- toPrimitive  
    1. 如果有valueOf 方法， 且是基础数据类型  
        [1,2].valueOf() 方法是自己[1,2]  
        {}.valueOf() 是{}  
    2. 转而用toString() 方法  
        '1,2'  
        '[Object Array]'  
        {}.toString() 方法是'[object Object]'  
    
- [] + {} = '[object Object]'  
    {} + [] = 0  
    [] + {} == {} + [] 为 true  

- == 抽象相等 === 全等  
    == 类型转换 ToNumber     
    1. 数字和字符串，将字符串ToNumber再比较  
    2. 布尔值和其他类型， 将布尔值ToNumber再比较  
    3. 对象和基础类型， 将对象进行ToPrimitive再比较  
    4. 对象之间的比较， 引用同一个对象为true, 否则为false  
        let a = b = [];
        a == b 为true   [] == {} 为false  
        [] == ![] 为true  
        

    
            




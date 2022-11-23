# JS 考试终点之手写代码

- 数组 
    哪两种数据结构的什么操作？      线性和非线性
    [] 或链表 队列FIFO / 栈FILO
    [{value:1, next:}  , {value:2, next:}] 不连续的
    [1, 2, 3] 初始地址 arr[0] arr[1] arr[2] 数组是连续的，new Array(100000) 浪费 内存溢出 
    数组的优势：以O(1)的时间访问到 第i个元素
    物理地址？ arr[i]= &arr + (i-1)*2
    1. push  在尾部插入数组元素，可以传多个参数，并返回数组length

    2. pop 输出数组的最后一个元素，不用传参，返回被删除的元素

- js和其他语言不同的地方
    原型的概念 prototype对象
    [1, 2, 3] (实例)  Array(类)
    1. 声明数组 在js里面有多种方法
        [1, 2, 3]  new Aarray(1,2,3)

    2. 数组对象实例添加一个公有方法
        js里面，Array 类 prototype对象 添加自定义的push2
        Array.prototype

    3. 对象的方法中，this关键字指向谁？
        指向调用它的对象

    4. arguments 代表 函数
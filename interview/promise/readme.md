# Promise A+ 规范
[史上最最最详细的手写Promise教程](https://juejin.cn/post/6844903625769091079#heading-1)
- Promise类 then catch
    resolve reject all race any  finally   
- 传一个参数，函数，也叫executor,立即执行
- executor有两个参数, resolve reject函数
- 三个状态 pending fulfilled rejected   
    - pending,可以转化为fulfilled和rejected，不可以多次执行同一个promise  
    - 成功时不可转为其他状态，不可逆，且拥有一个不可改变的值
    - 失败时不可逆，且拥有一个不可改变的原因
    - executor报错，直接reject()

- then(onFulfilled, onRejected)
    - state转为fulfilled, this.value -> onFulfilled运行
    - rejected this.reason -> onRejected  

- then 
    1. 如果有异步，存起来，当状态发生改变，执行
    2. 解决了回调地狱问题
        控制执行顺序  then链式调用  
        前一个promise then怎么执行下一个then  
        return promise 2 Object  
        promise value  
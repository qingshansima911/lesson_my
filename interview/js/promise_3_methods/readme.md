# Promise.all()、Promise.race()和Promise.any()的区别
- [文章](https://www.zhangxinxu.com/wordpress/2021/05/promise-all-race-any/)

- 任务流 Promise序列
    [upload(),upload(),upload(),upload(),upload()]
    - 随机定时器值， 任务完成时间和索引没关系
    - 成败率50%
    - setTimeout 第三个参数会在定时器到达时触发
    - promise then catch rejected 时候触发
    - async await
        rejected  
        try{  
  
        }catch(err){  
  
        }  

- Promise.all()中的Promise序列会全部执行通过才认为是成功，否则认为是失败，失败不会停下来；
- Promise.race()中的Promise序列中执行时间最短的为成功，则认为成功，执行时间最短的Promise是拒绝，则认为失败；
- Promise.any()中的Promise序列只要有一个执行通过，则认为成功，如果全部拒绝，则认为失败；

- 什么时候该使用哪个？
    Promise.all()
        可以保证最低loading时间      
    Promise.race()
        如果请求可以在200ms内完成，则不显示loading，如果要超过200ms，则至少显示200ms的loading  
        可取消的Promise  


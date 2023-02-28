# 订阅发布者模式
- vue 响应式使用的模式
- 涛哥买房开始
    编码实现？   
    售楼部是发布者， 发些消息给他的观察者 1：n   
- vue 
    {{count}} 订阅了一下  订阅者  
    const count = ref(0)  发布者  只有一个  
    const len = computed(()=>count*2) // 订阅了一下 订阅者  
    <Child :count='count' /> 订阅了一下  订阅者  
    count.value = 2   

- 订阅发布者的本质
    首先给发布者维护一个订阅者数组  clientList  
    如果有消息， 怎么通知她响应呢？ 放一个函数  
    trigger方法  通知订阅者响应  

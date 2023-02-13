- 类数组  伪数组  
  有length属性，可以遍历，但是不具备数组的诸多方法的对象子类型
  有length属性 可以遍历的对象类型，不能调用数组的方法
  - 判断是不是数组  
    Array.isArray()    
    Object.prototype.toString.call()  
  - 常见的类数组  
    arguments 函数的内置对象 this  
    通过querySelectorAll()方法获取的NodeList节点列表  
    通过getElementsByClassName,getElementsByName等方法获取的HTMLCollection列表  
  - es6 设计箭头函数的原因？  
    1. this 增加了代码的复杂性，对其他语言开发者不友好   
    2. es6 设计的指导原则一 简介优雅  

  - 如何把类数组转成数组？  
    可以使用数组的方法  
    NodeList div html js runtime Node对象   
    map html  字符串数组 .join('')  
    - [...arguments]
    - Array.from(arguments)
    - 遍历一下 {} push []  
      for (let i = 0; i < arguments.length; i++) {
        array[i] = arguments[i];
      }  
    - 切割  slice
    - concat.apply
      concat 返回值也是数组  
    - splice.call 该方法会改变原始数组  
  
  - 如何理解reduce
    1. es6 map外最高频数组api考点  
    2. for of 或技术循环太机械 命令式编程  
    3. map reduce filter every some 函数式编程  
      useReduce() reduce 把数组推掉  
      ((pre,cur)=>{
        return pre + cur
      },0)
    4. 可读性更强

- JS判断数组包含某个元素
  蹦出api来是很low的 
  - indexOf(searchElement)   
    返回元素在数组中第一次出现的下标，不存在为-1
  - includes(searchElement, fromIndex)  
    数组中是否存在某个元素，boolean  
  - find reduce map   
    满足条件的第一个元素的值  
  - findIndex   
    返回元素在数组中第一次出现的下标，不存在为-1
    


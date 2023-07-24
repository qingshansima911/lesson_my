- 响应式
  - Proxy
  - 平台无关性

- defineProperty proxy 的区别
  - 兼容性
    defineProperty es5  
    proxy es6 IE不兼容 
  - 逐个属性代理和全部代理 
    - 值也是对象
      - df 递归性能不好
      - proxy 懒代理 性能好
      如果对象只有一层，简单df 性能更好，proxy 实例化开销大，如果对象有很多层，proxy 性能更好  
  - df 不太适合数组代理，新增的属性不能自动响应式  

- 组件通信的方法
  - 父子组件
    - props $emit
    - v-model  
    - attrs 非props 属性集合  
    - defineExpose ref  
  - 后代组件
    - provide inject
  - 任何组件
    - mitt
  - Vuex Pinia


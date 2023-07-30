# 大厂快速路 数据可视化
[文章](https://sourl.co/jgBkbc)
- 认识数据
    十万条数据要在页面上展示， 怎么办？  
    [高性能渲染十万条数据(时间分片)](https://juejin.cn/post/6844903938894872589)    
    table ul>li   
    构建DOM树 css渲染树 显示页面很耗时  白屏 内存溢出  
    分页 table + pagination  
    滚动到底部加载更多 better-scroll  

name: question schools philosophers
value: 17        25         35
- 确定任务 
    增强数据的可读性， 最好使用图表
- 方案 条形
    x name  
    y value  
- 技术方案的选择 
    - canvas 2D 画图方案  
    - SVG 矢量图 
    - webgl 3D  

- 数据整理
- 绘制API canvas 
- canvas 是画出来的 像素
- SVG 数学图形声明出来的， 无限拉升
    声明式   

- 为什么Vue 不用DOM 编程？
    DOM 编程太耗性能  跟浏览器的原理相关  页面渲染 html/css   
    js 执行由另外的进程管理  

- SVG Canvas 区别？
    数据简单， SVG 更优秀  缺点是性能不好， 频繁的操作DOM， SVG 依托标签来完成功能  
    canvas 绘图API 更丰富 能做游戏 GPU 显卡负责 性能更好 适合大数据  
    API 有点多， 底层很复杂    
    echarts  


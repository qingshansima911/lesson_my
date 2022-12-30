# html5 拖拽效果
- github 提供了拖拽提交代码  
    drag 文件   
    drag over 元素或区域的上空  
    drag end 放开  
- 资源加载的顺序
    1. css 放在头部， js 放置在尾部    
        DOM 树 + CSS OM 下载并执行 生成 渲染树， 快速显示页面 优先 静态页面
    2. js 执行会修改DOM document.write    
        下载和执行 阻塞 document.createElement  
    3. script 又可以放在 head defer/async    
    
    - 浏览器（c++ java）不是js js 只是浏览器的一部分    
        js 是单线程    
        defer 后台加载js 启用了多线程 不会阻塞文档下载    
        async 推迟    
    - js 要尽快执行， 页面可以最快速度的进入可交互状态     
        DOMContentLoaded 比 onload 更合适 img video 资源下载  onload  
        async 和defer 都不会影响静态页面的渲染， 但是defer 会很好的解决执行顺序问题， 依赖问题  
        async 如果不依赖， 文件的交互更快实现    
- 盒子模型计算公式  
    box-sizing 标准盒子模型 IE盒子模型  
    content-box  width = content  现代浏览器 默认启用标准和模型 chrome    
    360 如果本地安装了chrome webkit ， IE老版本， IE  
    edge 不再是老的IE 仍然使用标准盒模型  
    IE6/7/8 老的，退出来历史舞台， IE盒模型  
    border-box width = content + padding + border  
- drag效果
    1. 拖拽的元素， 添加draggable="true" 鼠标手形  
        dragStart dragEnd 添加一些被拖拽的效果



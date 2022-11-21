# 营销h5页面特效开发
- 招商银行
1. <!DOCTYPE html> html5 版本的声明
2. rotateX 推倒 顺时针
    rotateY 转圈
    rotateZ 轮胎
    perspective 800px  100px会很大 视点 眼睛离屏幕的距离 远近 大小 
    transform-style: perserve-3d
3. html 怎么看到静态页面（用户体验 越快越好）
    html（结构）+ css（样式） js晚一点（交互，DOM.style）
    - 下载html文档
    - link script image...
        启动下载 css href   不会阻塞html下载 放到头部
        script src  放在最后 阻塞
        image src
4. chrome 浏览器的内核 webkit
    ie 浏览器内核 edge
    mozilla 
        360浏览器内核 如果本地安装了chrome webkit
        否则 ms
    -webkit-backface-visibility: hidden;
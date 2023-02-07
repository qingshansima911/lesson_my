# 大厂HTML5 作品赏析
- html5 标签
    audio 网易云音乐
    video 爱奇艺 B站
- background-size
    1. 移动端rem w h是多变的 而pc端没有这个问题
    2. 移动端 retina 3倍retina
    40x40  80x80 120x120
    3. background-size背景图片的大小 cover图片等比例缩放，比例不一样就剪裁 contain等比例缩放
- 库文件引入的位置
    1. css放到head里
        css应该尽早的参与网页的渲染
    2. js放在body最下面，js会阻塞页面渲染
- swiper 滑动组件库的使用
    1. 引入swiper组件库 css在前面 js在后面引用
    2. 固定的html结构
        .swiper-container(滑动区域的大小)>.swiper-wrapper>.swiper-slide
    3. new Swiper(selector,{
        direction:'',
    })
- translate3d(-50%,0) 3d 启动3d加速器 GPU渲染
    translate(-50%,0) 2d
    效果一样
- 使用linear-gradient 生成背景图片
    1. 颜色渐变的图片，#f8ddd1, #faece5 73%, #fad2c0
        colorStop
    2. 性能优化，图片下载比较大
        css写的，不需要额外的下载
        img src 要下载 + 显示
    3. 下载越多，http并发数越多，越卡
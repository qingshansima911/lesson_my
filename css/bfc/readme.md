# css 必考题BFC 
    Block Formating Context
        Block 占一样
    FFC (Flex Formating Context)
        row 不换行
    我们看到的页面 由哪些规则决定？
    - 文档流
        正常文档流
        脱离文档流
            none 
            position 不为static
            float 离开文档流
                父元素拿不到子元素的高度
                    1. 父元素定死高度
                    2. 弹性布局 子元素在一样上显示，float 在一样
    - 在正常文档流中
        float 会让元素， 离开文档流
        父元素， 不能知晓子元素的大小，下面的盒子会盖到float 元素，一定要让父元素拿到高度
        开启新的BFC， html 是最大的BFC 由浏览器自动创建
        在BFC里， 父元素会将浮动元素参与计算
            - 开启BFC 的方法
                - overflow: hidden;
                - display: inline-block;
                - display: flex;
                - position: absolute fixed
                - float
                - display:table;
            - 在同一个BFC里，垂直方向的margin会重叠

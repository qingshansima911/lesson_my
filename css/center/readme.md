- CSS Rule 
    1. 盒子模型 content + padding + border + margin 快递
    2. 背景颜色调试法
    3. css 布局方式的一种 
        - 相对定位和绝对定位是对于有定位的父级元素进行调整，如果父级没定位，继续往上级找，直到网页
    4. 块元素占一行，可设置宽高、内外边距，可包含其他块元素和行内元素，如div,form,h1~6,hr,p,table,ul,ol 
       行内元素不占一行，不可设置宽高，不包含块元素,如a,span,em,i,b,strong
       行内块元素可设置宽高，如img,button,input
       块和行内的转换：display:block块  inline行内 inline-block行内块
    5. display：flex；弹性布局 https://www.jianshu.com/p/e57425a771ff
- 垂直居中
    1. 父子元素
        父元素 relative
        子元素 absolute
    2. 要不要确定子元素的大小
        transform translate | rotate | scale
- 方法
    - 定位 + margin负值
        父元素 一定要得到大小
    - 定位 + transform
        相对于自身移动
    - calc 将父元素的一半减去子元素的一半   缺点性能不好
    - 弹性盒子 不用定位 缺点：太新了，兼容性不好
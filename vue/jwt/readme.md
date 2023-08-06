- mysql user 表
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
  - 用户名唯一 UNIQUE KEY
  - 密码加密
  - POST /register  /login
  { id: 1, name: 'ljl'} json web token  
  - token 生成 jwt.assign()  
  - GET /api/address 
    中间件 auth   
    header Authorization "Bearer token"   
    jwt.verify(token, secret, callback)  
    解析出对象 ctx.user = { id: 1, name: 'ljl' }  

  - login jwt.sign
  - middlewares currentUser 
    request.header.authorization 
    jwt.verify() request.user  
  - posts request.user  
// let a = 1
// main.ts 单点入口，简介
import app from './app' //app的生成都模块化出去了
// 后端第一位是安全，稳定，端口号也是很隐私的 nginx proxy http80 https443
import { APP_PORT } from './app/app.config'
import { connection } from './app/database/mysql'
app.listen(APP_PORT, () => {
    console.log('服务启动');
})
connection.connect(error => {
    if (error) {
        console.log('连接数据库失败', error.message);
        return
    }
    console.log('数据库连接成功');

})
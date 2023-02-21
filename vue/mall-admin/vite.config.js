import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
//es6模版
import { resolve } from 'path'
//文件 路径 属于哪个板块？ 属于 os（操作系统）中的 io模块
// console.log(
//     __dirname,
//     // resolve(__dirname, 'src')
// );
// alias
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    //配置一个路径别名
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
            '~': resolve(__dirname, 'src/components')
        }
    }
})
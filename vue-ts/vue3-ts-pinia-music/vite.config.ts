import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path';
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    server: {
        // host:'0.0.0.0' ,//ip地址
        port: 8888, // 设置服务启动端口号
        // open: true, // 设置服务启动时是否自动打开浏览器
    },
    resolve: {
        alias: {
            '@':resolve(__dirname,'src'),
            '~':resolve(__dirname,'src/components')
        }
    }
})

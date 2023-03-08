// webpack 工程化的配置文件
const path = require('path') // 引入path node 内置路径模块
// html + js 结合起来
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 加载器
const { VueLoaderPlugin } = require('vue-loader/dist/index')

// console.log(path.resolve(__dirname, './src/main.js'));
module.exports = {
    // commonjs 模块化输出
    entry: path.resolve(__dirname, './src/main.js'),
    // App.vue 浏览器只能接受.js json文件
    // template,script,style 统称为.vue格式 由vite/webpack利用工程化编译成.js文件
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './index.html'),
            filename: 'index.html',
            title: '手搭 Vue 开发环境'
        }),
        new VueLoaderPlugin()
    ],
    devServer: {
        port: 8888,
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: [
                    'vue-loader'
                ]
            }
        ]
    },
}
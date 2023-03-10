// webpack 工程化的配置文件
const path = require('path') // 引入path node 内置路径模块
// html + js 结合起来 放到dist/js/index.html下
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 加载器 加载 .vue后缀的文件
const { VueLoaderPlugin } = require('vue-loader/dist/index')
// 清空以前的历史记录
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

// console.log(path.resolve(__dirname, './src/main.js'));
module.exports = {
    // commonjs 模块化输出
    entry: path.resolve(__dirname, './src/main.js'),
    // App.vue 浏览器只能接受.js json文件
    // template,script,style 统称为.vue格式 由vite/webpack利用工程化编译成.js文件
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].[hash].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './index.html'),
            filename: 'index.html',
            title: '手搭 Vue 开发环境'
        }),
        new VueLoaderPlugin(),
        new CleanWebpackPlugin()
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
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'stylus-loader'
                ]
            },
            {
                test: /\.stylus$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'stylus-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif|svg|jpeg)$/,
                use: [
                    'file-loader',
                    'url-loader'
                ]
            },
            {
                // es6+转成目标运行设备可执行的代码
                test: /\.js$/,
                exclude: /node_modules/, // 不需要转义的 提升编译时间
                loader: 'babel-loader'
            }
        ]
    },
}
import axios from './config.js' // axios 配置文件

export function getProducts() {
    return axios.get('/products')
}
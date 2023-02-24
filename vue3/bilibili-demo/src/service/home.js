import axios from './config.js' // axios 配置文件

export function getSwiperList() {
    return axios.get('/swiperList')
}
export function getVideoList() {
    return axios.get('/videoList')
}
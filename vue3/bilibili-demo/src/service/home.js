import axios from './config.js' // axios 配置文件

export function getSwiperList() {
    return axios.get('/swiperList')
}
export function getVideosList() {
    return axios.get('/videoList')
}
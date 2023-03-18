import axios from './config.js'  // axios 标准

export function getDetail(id) {
    return axios.get(`/detail/${id}`) // promise
}
export function getComments() {
    return axios.get('/comments') 
}
import axios from './config.js'  // axios 标准

export function getDetail(id) {
    return axios.get('/detail', { params: { detail_id: id } }) // promise
}
export function getDetailPicture() {
    return axios.get('/detailPicture') // promise
}
export function getComments() {
    return axios.get('/comments')
}
import axios from './config.js'  // axios 标准

export function getDetail(id) {
    return axios.get('/detail', { params: { detail_id: id } }) // promise
}
export function getDetailPicture(id) {
    return axios.get('/detailPicture', { params: { detail_id: id } }) // promise
}
export function getComments(id) {
    return axios.get('/comments', { params: { detail_id: id } })
}
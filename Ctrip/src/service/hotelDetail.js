import axios from './config.js'  // axios 标准

export function getHotelDetail(id) {
    return axios.get('/hotelDetail', { params: { detail_id: id } })
}
export function getHotelDetailPic(id) {
    return axios.get('/hotelDetailPic', { params: { detail_id: id } }) 
}
export function getRoomList(id) {
    return axios.get('/roomList', { params: { detail_id: id } })
}
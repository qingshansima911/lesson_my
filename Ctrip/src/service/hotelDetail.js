import axios from './config.js'  // axios 标准

export function getHotelDetail(id) {
    return axios.get('/hotelDetail', { params: { detail_id: id } }) // promise
}
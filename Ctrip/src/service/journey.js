import axios from './config.js'  // axios 标准

export function getRoom(id) {
    return axios.get('/room', { params: { room_id: id } }) // promise
}
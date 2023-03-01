import axios from './config'
export function getSwiperList(){
    return axios.get('/home')
}
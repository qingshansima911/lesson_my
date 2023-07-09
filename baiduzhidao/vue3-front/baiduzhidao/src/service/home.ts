import axios from './config'
export function getSquare(){
    return axios.get('/square')
}
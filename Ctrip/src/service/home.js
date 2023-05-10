import axios from './config'
export function getSwiperList(){
    return axios.get('/swiperList')
}
export function getCategoryList(){
    return axios.get('/categoryList')
}
export function getArticleLeft(){
    return axios.get('/articleLeft')
}
export function getArticleRight(){
    return axios.get('/articleRight')
}
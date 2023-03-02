import axios from './config'
export function getSwiperList(){
    return axios.get('/swiperList')
}
export function getCategoryList(){
    return axios.get('/categoryList')
}
export function getArticleList(){
    return axios.get('/articleList')
}
export function getArticleImg(){
    return axios.get('/articleImg')
}
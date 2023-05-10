import axios from './config.js'
export const getCommunityPostText = () => {
    return axios.get('/communityPostText')
}
export const getCommunityPostImg = () => {
    return axios.get('/communityPostImg')
}
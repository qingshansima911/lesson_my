import axios from './config.js'
export const getCommunityPostList = () => {
    return axios.get('/communityPostList')
}
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:8080'
    // 'https://www.fastmock.site/mock/4833ab87c90d5e736b575d732817265d/Ctrip'
axios.interceptors.response.use((res) => {
    // console.log(res)
    return res.data
})
export default axios
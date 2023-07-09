import axios from 'axios'
// 默认前缀 方便切换到线上接口
axios.defaults.baseURL = 'http://localhost:1314/api/v1'
// 响应拦截
axios.interceptors.response.use(res => {
  return res.data
})
export default axios
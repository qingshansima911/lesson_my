import axios from 'axios';
import { showFailToast } from 'vant';

axios.defaults.baseURL = 'http://localhost:3000/'
// axios.defaults.withCredentials = true //允许axios在请求过程中携带cookie凭证
// axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest' //开启axios在浏览器中的能力
//在localStorage中取token值
// axios.defaults.headers['token'] = localStorage.getItem('token') || ''  
//get默认是json类型的数据，post不是，所以单独为post声明
axios.defaults.headers.post['Content-Type'] = 'application/json'  

//拦截后端返回的响应数据
axios.interceptors.response.use(res => {
  if (res.status !== 200) {
    showFailToast('服务器异常')
  } else {
    if (res.data.code !== '80000') {
      showFailToast(res.data.msg);
      return 
    }
    return res.data
  }
})

export default axios
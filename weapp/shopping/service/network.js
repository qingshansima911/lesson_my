import {
	baseURL,
	timeout
  } from './config.js'
  
  function request(options) {
	wx.showLoading({
	  title: '数据加载中ing',
	})
	// 许愿 成功、失败
	return new Promise((resolve, reject) => {
		// console.log(baseURL + options.url)
	 	wx.request({
			url: baseURL + options.url,
			timeout: timeout,
			data: options.data || {},
			// 成功后？
			success: function(res) {
		  		resolve(res.data)
			},
			fail: function(err){
				reject(err)
			},
			// 不管你成功或是失败， 完成了
			complete: function() {
				wx.hideLoading()
			}
	  })
	})
  }
  
  export default request;
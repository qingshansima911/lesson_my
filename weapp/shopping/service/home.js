import request from './network.js'
// 向外提供getMultiData 
export const getMultiData = ()=>{
	// 返回一个什么东西， 上面有then 方法
	// 解决js 异步的良药
		return request({
		  url: '/home/multidata'
		})
}
export function getProduct(type, page) {
	return request({
	  url: '/home/data',
	  data: {
		type,
		page
	  }
	})
  }
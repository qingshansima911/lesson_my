import request from './network.js'
// es6 模块化
export const getDetail = (iid) =>{
	return request({
		url:'/detail',
		data:{
			iid
		}
	})
}
export const getRecomments =()=>{
	return request({
		url:"/recommend"
	})
}
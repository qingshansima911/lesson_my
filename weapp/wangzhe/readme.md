- 小程序运行在哪里？
	微信里，手机 客户端 服务端	cs 开发 
- 数据驱动的页面  
	1. 先取数据  
	2. 模板由数据驱动  
- 小程序请求接口数据
	1. 页面加载 onLoad(){}
	2. wx.showLoading() wx.hideLoading();
	3. wx.request({
		url:''
	})
		success:(res)=>{
			解构 
			let { } = res.data
			设置数据data 
			this.setData({
				
			})
	}
	fail:()=>{}
- 样式 有哪些地方？
	全局样式 页面样式  
- 可滚动的导航 
	scroll-view 小程序组件  
		x或y轴滚动 scroll-x="true" 
		空白符不换行 white-space: nowrap  
		wx:for wx:key  
		
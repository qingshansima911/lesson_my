// index.js
// 获取应用实例
const app = getApp()

Page({
  // 数据驱动 {{}}
  data: {
    nav:[],
    heroList:[]
  },
  // 生命周期函数 
  onLoad() {
    // 从服务器区数据
    // js 主动向api发送请求，把数据请求到本地
    wx.showLoading({
      title: '加载中...',
    })
    wx.request({
      // 服务器数据url 回调函数 数据给res
      url: 'https://www.fastmock.site/mock/3ddf189404196ed14cb6531bf3596081/vue/hero',
      success:(res)=>{
        wx.hideLoading();
        // http statusCode 200 服务器没有任何错误
        if(res.statusCode === 200){
          // console.log(res);
          // let nav = res.data.nav;
          // console.log(nav);
          // let heroList = res.data.heroList;
          // es6 解构
          let { nav,heroList } = res.data //json
          // console.log(nav);
          // console.log(this);
          this.setData({
            nav:nav,
            heroList:heroList
          })
        }
        
      },
      fail:()=>{
        console.log('error');
      }
    })
  }
})

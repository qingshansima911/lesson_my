const WXAPI = require("apifm-wxapi");
Page({
  data:{
    search:'',
    activeCategory:0,
    categories:[], /* 分类列表 */
    currentGoods:[] /* 当前商品列表 */
  },
  onLoad(){
    // 分享
    // wx.showShareMenu({
    //   withShareTicket:ticket
    // })
    // 面向对象 分离
    this.categories();
  },
  // 分离请求数据
  categories(){
    wx.showLoading({
      title:"加载中..."
    })
    WXAPI.goodsCategory()
    .then(res=>{
      // console.log(res);
      wx.hideLoading();
      // 没有发生错误
      if(res.code==0){
        const categories = res.data;
        this.setData({
          categories
        })
      }
    })
  },
  
  bindconfirm(e){
    // console.log(e,e.detail);
    let search = e.detail;
    this.setData({
      search
    })
    wx.navigateTo({
      url: `/pages/goods/list?name=${search}`,
    })
  },
  searchscan(){
    wx.scanCode({
      scanType:["barCode","qrCode"],
      success:res=>{
        this.setData({
          search:res.result
        })
        wx.navigateTo({
          url: `/pages/goods/list?name=${res.result}`,
        })
      }
    })
  },
  onCategoryClick(event) {
    const idx = event.target.dataset.idx
    // console.log(idx, '/////')
    this.setData({
      activeCategory: idx
    })
  }
})
// app.js
App({
  onLaunch() {
    wx.setStorage({
      key:"cart",
      success:(res) =>{
        this.globalData.cartList = res.data || []
      }
    })
  },
  addToCart(obj){
    // 加入cartList
    // 之前添加过？数量加一
    // es6
    const oldInfo = this.globalData.cartList
    .find(item => item.iid === obj.iid)
    // console.log(oldInfo,"第一次添加到购物车")
    if(oldInfo){
      oldInfo.count++
    }else{
      obj.count = 1
      obj.checked = true /* 默认勾选 */
      this.globalData.cartList.push(obj)
    }
    wx.setStorage({
     key: "cart",
     data: this.globalData.cartList || []
   })
  },
  globalData: {
    cartList:[]
  }
})

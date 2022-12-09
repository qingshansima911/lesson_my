// app.js
App({
  onLaunch() {
    wx.getSystemInfo({
      success:res=>{
        // console.log(res);
        let menuButtonObject = wx.getMenuButtonBoundingClientRect();
        // console.log(menuButtonObject);
        let statusBarHeight = res.statusBarHeight;
        let gap = menuButtonObject.top - statusBarHeight;
        console.log(gap);
        let navHeight =statusBarHeight + menuButtonObject.height + gap*2
        // console.log(navHeight);
		// console.log(this);
        let navTop = menuButtonObject.top;
        let windowHeight = res.windowHeight;
        // console.log(navTop);
        Object.assign(this.globalData,{navHeight,navTop,gap,windowHeight,menuButtonObject})
      }
    })
  },
  globalData: {
    navHeight: 0,
    navTop: 0,
    gap:0,
    windowHeight: 0,
    menuButtonObject: null,
    userInfo: null
  }
})

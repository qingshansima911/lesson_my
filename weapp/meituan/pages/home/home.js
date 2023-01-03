// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    navHeight: app.globalData.navHeight,
    navTop: app.globalData.navTop,
    menuButtonObject: app.globalData.menuButtonObject,
	gap: app.globalData.gap,
	tab: 0
  },
  selectTab(event){
	//   console.log(event);
	let tab = event.currentTarget.dataset.tab;
    // console.log(tab);
    this.setData({
      tab: tab
    })
  }
})

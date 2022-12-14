// pages/home/home.js
// 模块化
import {
    getMultiData,
    getProduct
  } from '../../service/home.js'
// es6 import 模块化
// es6 {} 解构
import{
    POP,
    SELL,
    NEW,
    BACK_TOP_POSITION
} from "../../common/const.js"

Page({

    /**
     * 页面的初始数据
     */
    data: {
        banners:[],
        showTabControl:false,
        titles:["流行", "新款", "精选"],
        topPosition:0,
        recommends:[],
        currentType: POP,
        showBackTop:false,
        // 格式的目的是什么？
        goods:{
            [POP]:{
                page:1,
                list:[]
            },
            [NEW]:{
                page:1,
                list:[]
            },
            [SELL]:{
                page:1,
                list:[]
            }
        }
    },
    tabClick(e) {
        // 1.根据当前的点击赋值最新的currentType
        // console.log(e);
        let currentType = ''
        switch(e.detail.index) {
          case 0:
            currentType = POP
            break
          case 1:
            currentType = NEW
            break
          case 2:
            currentType = SELL
            break
        }
        this.setData({
            currentType: currentType
          })
            console.log(this.selectComponent('.tab-control'));
            this.selectComponent('.tab-control').setCurrentIndex(e.detail.index)
            this.selectComponent('.tab-control-temp').setCurrentIndex(e.detail.index)
      },
    loadMore(){
        // console.log("到底了")
        this._getProductionData(this.data.currentType);
    },
    onBackTop(){
        this.setData({
            topPosition:0
        })
    },
    scrollPosition(e){
        // console.log(e);
        const position = e.detail.scrollTop;
        // if(position>300){
        //     this.setData({
        //         showTabControl:true
        //     })
        // }
        this.setData({
            showBackTop: position > BACK_TOP_POSITION,
        })
        wx.createSelectorQuery().select('.tab-control').boundingClientRect((rect) => {
            // console.log(rect.top)}).exec()
            const show = rect.top > 0
            this.setData({
              showTabControl: !show
            })
          })
          .exec()
        
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        // 请求数据的封装
        this._getData();
    },
    _getData(){
        this._getMultiData();
        // 流行的商品数据
        this._getProductionData(POP);
        this._getProductionData(SELL);
        this._getProductionData(NEW);
    },
    _getMultiData(){
        // 耗时的http 请求任务
        getMultiData()
        // 拿到数据之后
        .then(res => {//promise 拿到接口返回的数据
            // console.log(res)
            // const banners = [];
            // res.data.banner.list.forEach(item =>{
            //     banners.push(item.image)
            // })
            // console.log(banners)
            // map 可以由一个数组得到一个新的数组
            const banners = res.data.banner.list.map(item => {
                // 每次都执行
                // 返回值会组成新的数组
                return item.image
            })
            this.setData({
                banners: banners,
                recommends: res.data.recommend.list
            });
        })
    },
    _getProductionData(type){
        const page = this.data.goods[type].page
        getProduct(type, page)
            .then(res=>{
                // console.log(res);
                // 1.取出数据
                const list = res.data.list;
                // 2.将数据临时获取
                const goods = this.data.goods;
                goods[type].list.push(...list)
                goods[type].page += 1;
                // 3.最新的goods设置到goods中
                this.setData({
                    goods: goods
                })
            })
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})
import { getSwiperList, getVideosList } from '@/service/home.js';
// 每个路由级别组件都有独立的store模板
import { defineStore } from 'pinia';
// 每个子仓都是一个函数，use开头，store结尾，hooks函数
// 界面工程师 简单写页面 
export const useHomeStore = defineStore('home', {
    state:() => {
        return {
            swiperList: [],
            videosList:[]
        }
    },
    actions: {
        // 修改也在store里面 数据管理的闭环
        async getSwiperList() {
            const res = await getSwiperList()
            // console.log(res);
            this.swiperList = res.result
        },
        async getVideosList() {
            const res = await getVideosList()
            // console.log(res);
            this.videosList = res.result
        }
    }
        
})
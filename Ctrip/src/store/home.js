import {
    getSwiperList,
    getCategoryList,
    getArticleList,
    getArticleImg,
} from '@/service/home.js';
import { getDetail } from '../service/detail';
import { defineStore } from 'pinia';


export const useHomeStore = defineStore('home', {
    state:() => {
        return {
            swiperList: [],
            categoryList: [],
            articleList: [],
            articleImg: [],
            detail:[]
        }
    },
    actions: {
        async getSwiperList() {
            const res = await getSwiperList()
            // console.log(res);
            this.swiperList = res.result
        },
        async getCategoryList() {
            const res = await getCategoryList()
            // console.log(res);
            this.categoryList = res.result
        },
        async getArticleList() {
            const res = await getArticleList()
            // console.log(res);
            this.articleList = res.result
        },
        async getArticleImg() {
            const res = await getArticleImg()
            // console.log(res);
            this.articleImg = res.result
        },
        async getDetail(id) {
            const res = await getDetail(id)
            // console.log(res);
            this.detail = res.result
        },
    }
})
import {
    getSwiperList,
    getCategoryList,
    getArticleLeft,
    getArticleRight,
} from '@/service/home.js';
import {
    getDetail,
    getComments,
    getDetailPicture,
} from '../service/detail';
import { defineStore } from 'pinia';


export const useHomeStore = defineStore('home', {
    state: () => {
        return {
            swiperList: [],
            categoryList: [],
            articleLeft: [],
            articleRight: [],
            detail: [],
            comments: [],
            detailPicture: []
        }
    },
    actions: {
        async getSwiperList() {
            const res = await getSwiperList()
            // console.log(res);
            this.swiperList = res
        },
        async getCategoryList() {
            const res = await getCategoryList()
            // console.log(res);
            this.categoryList = res
        },
        async getArticleLeft() {
            const res = await getArticleLeft()
            // console.log(res);
            this.articleLeft = res
        },
        async getArticleRight() {
            const res = await getArticleRight()
            // console.log(res);
            this.articleRight = res
        },
        async getDetail(id) {
            const res = await getDetail(id)
            // console.log(res);
            this.detail = res
        },
        async getDetailPicture(id) {
            const res = await getDetailPicture(id)
            // console.log(res);
            this.detailPicture = res
        },
        async getComments(id) {
            const res = await getComments(id)
            // console.log(res);
            this.comments = res
        },
    }
})
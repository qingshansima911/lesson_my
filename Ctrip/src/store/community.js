import {
    getCommunityPostText,
    getCommunityPostImg
} from '../service/community'

import { defineStore } from 'pinia';

export const useCommunityStore = defineStore('community', {
    state: () => {
        return {
            communityPostText: [],
            communityPostImg: [],
        }
    },
    actions: {
        async getCommunityPostText() {
            const res = await getCommunityPostText()
            // console.log(res);
            this.communityPostText = res
        },
        async getCommunityPostImg() {
            const res = await getCommunityPostImg()
            // console.log(res);
            this.communityPostImg = res
        },
    }
})
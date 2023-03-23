import { getCommunityPostList } from '../service/community'
import { defineStore } from 'pinia';
export const useCommunityStore = defineStore('community', {
    state: () => {
        return {
            communityPostList:[]
        }
    },
    actions: {
        async getCommunityPostList() {
            const res = await getCommunityPostList()
            this.communityPostList = res.result
        }
    }
})
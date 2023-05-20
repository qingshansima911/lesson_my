import {
    getRoom,
} from '../service/journey';

import { defineStore } from 'pinia';

export const useJourneyStore = defineStore('journey', {
    state: () => {
        return {
            room: [],
        }
    },
    actions: {
        async getRoom(id) {
            const res = await getRoom(id)
            // console.log(res);
            this.room = res
        },
    }
})
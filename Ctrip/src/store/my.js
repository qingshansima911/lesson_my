import {
    Login,
    Register
} from '../service/user';

import { defineStore } from 'pinia';

export const useMyStore = defineStore('my', {
    state: () => {
        return {
            loginMsg: [],
            registerMsg: []
        }
    },
    actions: {
        async Login(username, password) {
            const res = await Login(username, password)
            // console.log(res);
            this.loginMsg = res
        },
        async Register(username, password) {
            const res = await Register(username, password)
            // console.log(res);
            this.registerMsg = res
        },
    }
})
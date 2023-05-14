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
        async Login(params) {
            const res = await Login({ params })
            // console.log(res);
            this.loginMsg = res
        },
        async Register(params) {
            const res = await Register({ params })
            // console.log(res);
            this.registerMsg = res
        },
    }
})
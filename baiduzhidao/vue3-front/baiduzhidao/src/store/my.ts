import {
  Login,
  Register
} from '../service/user';

import { defineStore } from 'pinia';

export interface User {
  userName: string;
  password: string;
} // 自定义类型

export const useMyStore = defineStore('my', {
  state: () => {
    return {
      loginMsg: [],
      registerMsg: []
    }
  },
  actions: {
    async Login(params: User) {
      const res = await Login(params)
      // console.log(res);
      this.loginMsg = res
    },
    async Register(params: User) {
      const res = await Register(params)
      // console.log(res);
      this.registerMsg = res
    },
  }
})
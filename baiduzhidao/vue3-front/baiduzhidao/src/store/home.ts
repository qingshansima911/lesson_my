import { defineStore } from 'pinia';
import { reactive } from 'vue'
import {
  getSquare
} from '@/service/home';

interface Square {
  question: string;
  answer: number;
} // 自定义类型

export const useHomeStore = defineStore('home', () => {
  let state = reactive({
    square: [] as Square[]
  })
  const getSquareData = async () => {
    const data = await getSquare();
    // const data = response.data as Square[]; // 进行类型断言或转换
    // console.log(data, '???????');
    state.square = data;
  }
  return {
    state,
    getSquareData
  }
})
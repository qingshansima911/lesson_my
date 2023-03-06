import Mock from 'mockjs';
import swiperList from './data/swiperList.js'
import categoryList from './data/categoryList.js'
import articleList from './data/articleList.js'
import articleImg from './data/articleImg.js'
import detail from './data/detail.js'
Mock.setup({
    timeout:'50-1000' // 随机的延迟时间，模拟请求耗时
})
Mock.mock(/\/swiperList/, 'get', () => {
    return {
        code: 0, // 后端没有错误发生
        result: swiperList
    }
})
Mock.mock(/\/categoryList/, 'get', () => {
    return {
        code: 0, // 后端没有错误发生
        result: categoryList
    }
})
Mock.mock(/\/articleList/, 'get', () => {
    return {
        code: 0, // 后端没有错误发生
        result: articleList
    }
})
Mock.mock(/\/articleImg/, 'get', () => {
    return {
        code: 0, // 后端没有错误发生
        result: articleImg
    }
})
Mock.mock(/\/detail/, 'get', () => {
    return {
        code: 0, // 后端没有错误发生
        result: detail
    }
})
import Mock from 'mockjs'
import swiperList from './data/swiperList.js'
import videoList from './data/videoList.js'
//  假接口需要满足什么？ url、数据
Mock.setup({
    timeout:'50-1000' // 随机的延迟时间，模拟请求耗时
})
// 轮播图 url /swiperList
// 拦截App中的xhr请求 匹配路径
Mock.mock(/\/swiperList/, 'get', () => {
    //三个参数。第一个：路径，第二个：请求方式post/get，第三个：回调，返回值
    return {
        code: 0,
        result: swiperList
    }
})
Mock.mock(/\/videoList/, 'get', () => {
    return {
        code: 0,
        result:videoList
    }
})
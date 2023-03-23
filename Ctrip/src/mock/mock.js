import Mock from 'mockjs';
import swiperList from './data/swiperList.js'
import categoryList from './data/categoryList.js'
import articleList from './data/articleList.js'
import articleImg from './data/articleImg.js'
import detail from './data/detail.js'
import comments from './data/comments.js'
import communityPostList from './data/communityPostList.js'
Mock.setup({
    timeout: '50-1000' // 随机的延迟时间，模拟请求耗时
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
Mock.mock(/\/comments/, 'get', () => {
    return {
        code: 0, // 后端没有错误发生
        result: comments
    }
})
Mock.mock(/\/login/, 'post', (options) => {
    // console.log(options);
    const { username, password } = JSON.parse(options.body)
    // console.log(username, password);
    if (username === localStorage.getItem('username')
        && password === localStorage.getItem('password')) {
        return {
            code: 0,
            statues: 200,
            msg: '登录成功',
            token: 'junhua'
        }
    } else {
        return {
            code: 1,
            status: 400,
            msg: '账号或密码有误，请重新输入'
        }
    }
})
Mock.mock(/\/communityPostList/, 'get', () => {
    return {
        code: 0, // 后端没有错误发生
        result: communityPostList
    }
})
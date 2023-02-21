export const getPageTitle = (pathName) => {
    const data = {
        login: '登录',
        introduce: '系统介绍',
        add: '添加商品'
    }
    return data[pathName] || ''

}
export const getLocal = (name) => {
    return localStorage.getItem(name)
    // return JSON.parse(localStorage.getItem(name))
}

// h5提供的本地KeyVal存储
export const setLocal = (key, val) => {
    localStorage.setItem(key, JSON.stringify(val))
}
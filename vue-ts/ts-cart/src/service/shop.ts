// js 如何提升数据的完整性
// 类型约束
// js 为何没有？弱类型语言 js 有很多的糟粕 接口肯定也没有
// js 容易出错， ts 不容易出错


// 自定义接口 可以检查数据
// 像SQL 定义表
export interface IProduct {
    id: number;
    title: string;
    price: number
    inventory: number
}
const _products: IProduct[] = [
    { id: 1, title: 'iPad 4 Mini', price: 500.01, inventory: 2 },
    { id: 2, title: 'H&M T-Shirt White', price: 10.99, inventory: 10 },
    { id: 3, title: 'Charli XCX -Sucker CD', price: 19.99, inventory: 5 }
]

function wait(delay: number) {
    return new Promise((resolve) => {
        setTimeout(resolve, delay);
    })
}
export const getProducts = async () => {
    // 延迟加载
    await wait(1000)
    return _products
}
export const buyProducts = async () => {
    await wait(1000)
    return Math.random() > 0.5
}
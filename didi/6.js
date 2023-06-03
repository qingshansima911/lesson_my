// 并行、串行
// es6 generator 生成器 yield
// 如何改成并行 Promise.all()
// async () => {
//     await p1;
//     await p2;

// }

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1)
    }, 1000);
})
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(2)
    }, 200);
})
// -语言并发能力，java c++ 多线程，js eventloop实现并发 异步
// - promise thenable callback 解决回调地狱 编写顺序和执行一直
// - async await
// - 并行 Promise.all/race Promise.all返回值也是一个promise
// 怎么拿到成功的值？
const func = async () => {
    // try {
    //     var result = await Promise.all([p1, p2])
    //     console.log(result);
    // } catch (err) {
    //     console.log(err);
    // }
    var result = await Promise.allSettled([p1, p2])
    console.log(result);
}
func()
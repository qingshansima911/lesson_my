// 闭包 自由变量
function createReapt(fn, repeat, interval) {
    let counter = 0;
    const intervalId = setInterval(() => {
        fn('hello world')
        counter++
        if (counter === repeat) {
            clearInterval(intervalId)
        }
    }, interval);
}
createReapt(console.log, 3, 1000)
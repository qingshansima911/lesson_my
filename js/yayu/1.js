function add(a, b) {
    return a + b;
}
// 假设 memorize 可以实现函数记忆
// memorize 函数 () add ->
var memoizedAdd = memorize(add);
memoizedAdd(1, 2);
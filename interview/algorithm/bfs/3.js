const preorderTraversal = function (root) {
    const res = []
    if (!root) {
        return res
    }
    const stack = [] // 栈辅助
    stack.push(root)
    while (stack.length) {
        // 将栈顶结点记为当前结点
        const cur = stack.pop()
        // 当前结点就是当前子树的根结点，把这个结点放在结果数组的头部
        res.unshift(cur.val)
        // 若当前子树根结点有右孩子，则将右孩子入栈
        if (cur.right) {
            stack.push(cur.right)
        }
        // 若当前子树根结点有左孩子，则将左孩子入栈
        if (cur.left) {
            stack.push(cur.left)
        }
    }
    return res
}

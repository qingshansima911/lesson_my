const preorderTraversal = function (root) {
    const res = []
    if (!root) {
        return res
    }
    const stack = [] // 栈辅助
    stack.push(root)
    while (stack.length) {
        const cur = stack.pop()
        res.push(cur.val)
        if (cur.right) {
            stack.push(cur.right)
        }
        if (cur.left) {
            stack.push(cur.left)
        }
    }
    return res
}
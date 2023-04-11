const root = {
    val: "A",
    left: {
        val: "B",
        left: {
            val: "D"
        },
        right: {
            val: "E"
        }
    },
    right: {
        val: "C",
        right: {
            val: "F"
        }
    }
}

function preorder(root) {
    // 递归边界，root 为空 回溯到上一层
    if (!root) {
        return
    }
    // 输出当前遍历的结点值
    console.log('当前遍历的结点值是：', root.val)
    // 递归遍历左子树 
    preorder(root.left)
    // 递归遍历右子树  
    preorder(root.right)
}
function inorder(root) {
    // 递归边界，root 为空
    if(!root) {
        return 
    }
    inorder(root.left)  
    console.log('当前遍历的结点值是：', root.val)  
    inorder(root.right)
}
function postorder(root) {
    if(!root) {
        return 
    }
    postorder(root.left)  
    postorder(root.right)
    console.log('当前遍历的结点值是：', root.val)  
}

preorder(root)
// inorder(root)
// postorder(root)

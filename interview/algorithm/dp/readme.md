# 动态规划 dynamic planning

- 最值 dp
- 状态转移方程
    公式
- 最优子结构
    当下最长的回文，继续
    算出来，得到一个结果，自底向上推导最值，状态转移方程

- 序列型
    []
    let dp = []
    const len = s.length
    for(let i = 0; i < len; i++) {
        dp[i] = []
    }

## 题目地址
https://leetcode.com/problems/binary-tree-postorder-traversal/description/

## 题目描述
```
Given a binary tree, return the preorder traversal of its nodes' values.

Example:

Input: [1,null,2,3]
   1
    \
     2
    /
   3

Output: [3,2,1]
Follow up: Recursive solution is trivial, could you do it iteratively?
```

## 思路

- 递归思路
树的问题，可以先从递归方向考虑，二叉树本身就是一个递归的结构，递归是一种自上而下的过程，需要考虑如何缩小规模和终止。每次处理子树就是在缩小规模，终止条件就是子节点为空。这样就可以遍历整颗树了，难点是怎么把节点的值合并起来。

第一步遍历：
```js
function postorderTraversal(root) {
  // 终止
  if (!root) {
    return
  }
  postorderTraversal(root.left)
  postorderTraversal(root.right)
}
```

第二步：把值合并起来，数组操作
```js
function postorderTraversal(root) {
  // 终止
  if (!root) {
    return []
  }
  let left = root.left ? postorderTraversal(root.left) : []
  let right = root.right ? postorderTraversal(root.right) : []
  return left.concat([root.val]).concat(right)
}
```


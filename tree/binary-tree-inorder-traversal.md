## 题目地址
https://leetcode.com/problems/binary-tree-inorder-traversal/description/

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

Output: [1,3,2]
Follow up: Recursive solution is trivial, could you do it iteratively?
```

## 思路

- 递归思路
树的问题，可以先从递归方向考虑，二叉树本身就是一个递归的结构，递归是一种自上而下的过程，需要考虑如何缩小规模和终止。每次处理子树就是在缩小规模，终止条件就是子节点为空。这样就可以遍历整颗树了，难点是怎么把节点的值合并起来。

第一步遍历：
```js
function preorderTraversal(root) {
  // 终止
  if (!root) {
    return
  }
  preorderTraversal(root.left)
  preorderTraversal(root.right)
}
```

第二步：把值合并起来，数组操作
```js
function preorderTraversal(root) {
  // 终止
  if (!root) {
    return []
  }
  let left = root.left ? ret.concat(preorderTraversal(root.left)) : []
  let right = root.right ? ret.concat(preorderTraversal(root.right)) : []
  return [root.val].concat(left).concat(right)
}
```
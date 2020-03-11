## 题目地址

https://leetcode.com/problems/maximum-depth-of-binary-tree/description/

## 题目描述

```
Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Note: A leaf is a node with no children.

Example:

Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
return its depth = 3.
```

## 思路

- 递归思路
  树本身是一种递归的数据结构，用递归解法会容易很多

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  if (!root) return 0
  if (root.left === null && root.right === null) {
    return 1
  }
  // 一层节点遍历结束，返回上一层，层数加一
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
}
```

## 题目地址

https://leetcode.com/problems/binary-tree-level-order-traversal/description/

## 题目描述

```
Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its level order traversal as:
[
  [3],
  [9,20],
  [15,7]
]
```

## 思路

使用队列来存储节点值，首先是 root 入队，入队一个 null 来表示一层结束，简化操作
然后就是 while(queue.length) ，每次处理一个节点，然后将子节点（左和右）放到队列中，
然后不断 shift，就可以遍历一层，如果出队是 null , 表示一层已经结束，push 一个 null

## 代码

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
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (!root) return []
  let result = []
  let queue = [root, null] // null 简化操作
  let levelNodes = [] // 每层节点

  while (queue.length > 0) {
    const t = queue.shift()

    if (t) {
      levelNodes.push(t.val)
      if (t.left) {
        queue.push(t.left)
      }
      if (t.right) {
        queue.push(t.right)
      }
    } else {
      // 一层已经遍历完
      result.push(levelNodes)
      levelNodes = []
      // null 代表这一层已经遍历完成
      if (queue.length > 0) {
        queue.push(null)
      }
    }
  }

  return result
}
```

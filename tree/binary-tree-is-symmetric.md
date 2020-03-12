## 题目地址
https://leetcode-cn.com/problems/symmetric-tree/

## 题目描述

```
给定一个二叉树，检查它是否是镜像对称的。

例如，二叉树 [1,2,2,3,4,4,3] 是对称的。

    1
   / \
  2   2
 / \ / \
3  4 4  3
但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:

    1
   / \
  2   2
   \   \
   3    3
说明:

如果你可以运用递归和迭代两种方法解决这个问题，会很加分。
```

## 思路

## 代码
- 递归
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
 * @return {boolean}
 */
var isSymmetric = function(root) {
  if (!root) return true // 空树对称
  if (root.left === root.right) return true

  return isSymmetrical(root.left, root.right)
}

var isSymmetrical = function(leftRoot, rightRoot) {
  if (!leftRoot && !rightRoot) return true
  if (!leftRoot || !rightRoot) return false
  return (
    leftRoot.val == rightRoot.val &&
    isSymmetrical(leftRoot.left, rightRoot.right) &&
    isSymmetrical(leftRoot.right, rightRoot.left)
  )
}
```

- 迭代
```js
var isSymmetric = function(root) {
  if (!root) return true // 空树对称
  var queue = []
  queue.push(root)
  queue.push(root)

  while (queue.length > 0) {
    let t1 = queue.shift()
    let t2 = queue.shift()
    if (t1 === null && t2 === null) continue
    if (t1 === null || t2 === null) return false
    if (t1.val !== t2.val) return false
    queue.push(t1.left)
    queue.push(t2.right)
    queue.push(t1.right)
    queue.push(t2.left)
  }
  return true
}
```

## 题目地址
https://leetcode.com/problems/binary-tree-preorder-traversal/description/

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

Output: [1,2,3]
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
  let ret = [root.val]
  ret.concat(preorderTraversal(root.left))
  ret.concat(preorderTraversal(root.right))
  return ret
}
```

- 非递归解法
不用递归的话，就少不了需要 for/while 线性遍历，终止条件是所有的都遍历过，没有节点可以访问了。考虑用栈的形式，开始把整个树放入栈，开始遍历出栈整棵树，遍历开始，子节点不为空入栈，然后出栈，重复，直到栈为空为止

第一步：基本结构
```js
function preorderTraversal(root) {
  const stack = [root]
  let t = stack.pop()

  while(t) {
    if (t.right) {
      stack.push(t.right)
    }
    if (t.left) {
      stack.push(t.left)
    }
    t = stack.pop()
  }
}
```

第二步：合并结果
```js
function preorderTraversal(root) {
  if (!root) return []

  let ret = []
  const stack = [root]
  let t = stack.pop()

  while(t) {
    ret.push(t.val)
    if (t.right) {
      stack.push(t.right)
    }
    if (t.left) {
      stack.push(t.left)
    }
    t = stack.pop()
  }

  return ret
}
```
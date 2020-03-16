## 题目地址

https://leetcode-cn.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/

## 题目描述

根据一棵树的中序遍历与后序遍历构造二叉树。

注意:
你可以假设树中没有重复的元素。

例如，给出

```
中序遍历 inorder = [9,3,15,20,7]
后序遍历 postorder = [9,15,7,20,3]
返回如下的二叉树：

    3
   / \
  9  20
    /  \
   15   7
```

## 思路
后序遍历最后的一个节点是根节点，在中序遍历中，根节点左边的是左子树，右边的是右子树，然后从后序遍历中找到左子树的根节点...依次类推，递归的构建整个二叉树。


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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
  if (!postorder || !inorder) return null
  if (inorder.length == 0 || postorder.length == 0) return null
  let root = postorder.pop()
  let rootIndex = inorder.indexOf(root)
  let leftTree = rootIndex == 0 ? null : inorder.slice(0, rootIndex)
  let rightTree = inorder.slice(rootIndex + 1)
  let node = new TreeNode(root)
  node.left = buildTree(leftTree, postorder.slice(0, rootIndex))
  node.right = buildTree(rightTree, postorder.slice(rootIndex))
  return node
}
```

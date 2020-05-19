//有一个二叉树，每个节点的值是一个整数。写一个函数，判断这棵树中是否存在从根到叶子节点的一个路径，这个路径上所有节点之和为某一个值。存在返回1， 否则返回0。
// struct TreeNode
// {
// int value;
// 	struct TreeNode *left, *right;
// };
// int haspath(struct TreeNode *root, int value)

// 递归判断
function haspath(root, value) {
  if (root === null) return 0

  // 只有一个根节点
  if (root.left == null && root.right == null) {
    // 判断是否相等
    return value === root.value
  }
  
  return haspath(root.left, value - root.value) || haspath(root.right, value - root.value)
}

exports.haspath = haspath
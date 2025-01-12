import {TreeNode} from './TreeNode';

// #region 104. Maximum depth of a binary tree
var maxDepth = function(root: TreeNode) {
    if (!root) {
        return 0;
    }

    let depth = 0;
    let dfs = (root:TreeNode|null, depth:number): number => {
        if (!root) {
            return depth;
        }

        let left = dfs(root.left, depth+1);
        let right = dfs(root.right, depth+1);

        return Math.max(left, right);
    }

    return dfs(root, depth);
 };
 // #endregion

 // #region 112.Path Sum
 var hasPathSum = function(root: TreeNode, targetSum: number) {
    let currSum = 0;
    const dfs = (root: TreeNode | null, currSum: number): boolean => {
        if (!root) {
            return false;
        }

        currSum += root.val;

        if (!root.left && !root.right && currSum === targetSum) {
            return true;
        }

        let left = dfs(root.left, currSum);
        let right = dfs(root.right, currSum);

        return left || right;
    }

    return dfs(root, currSum);
};
// #endregion

let root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

  maxDepth(root);
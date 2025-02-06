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

// #region 1448. Count good nodes in a binary tree
var goodNodes = function(root: TreeNode) {
    let count = 0;

    let dfs = (root: TreeNode | null, max: number) => {
        if (!root) {
            return;
        }

        max = Math.max(max, root.val);
        if (root.val >= max) {
            count+=1;
        }

        dfs(root.left,max)
        dfs(root.right, max);
    }

    dfs(root,-Infinity);

    return count;
};
// #endregion

// #region 1026. Maximum Difference Between Node and Ancestor
var maxAncestorDiff = function(root: TreeNode) {
    if (!root) {
        return 0;
    }  

    let dfs = (root:TreeNode | null, min: number, max: number): number => {
        if (!root) {
            return max - min;
        }

        max = Math.max(max, root.val);
        min = Math.min(min, root.val);

        let left = dfs(root.left, min, max);
        let right = dfs(root.right, min, max);

        return Math.max(left, right); 
    }

    return dfs(root, root.val, root.val);
};
// #endregion

// #region 543. Diamtere of a binary tree
var diameterOfBinaryTree = function(root: TreeNode) {
    if (!root) {
        return 0;
    }

    let maxD = 0;

    let dfs = (root:TreeNode | null): number => {
        if (!root) {
            return 0;
        }

        let left = dfs(root.left);
        let right = dfs(root.right);

        maxD = Math.max(maxD, left+right);

        return Math.max(left, right) + 1;
    }
    
    dfs(root);
    return maxD;

};
// #endregion

// #region 938. Range sum of BST
var rangeSumBST = function(root: TreeNode, low: number, high: number) {
    let sum = 0;

    function dfs(root: TreeNode|null, low: number, high: number) {
        if (!root) {
            return;
        }

        if (root.val >= low && root.val <= high) {
            sum += root.val;
        };

        dfs(root.left, low, high);
        dfs(root.right, low, high);
    }

    dfs(root, low, high);

    return sum;
};
// #endregion

// #region 530. Minimum Absolute Difference in BST
var getMinimumDifference = function(root: TreeNode) {
    let dfs = (root: TreeNode|null) => {
        if (!root) {
            return;
        }

        dfs(root.left);
        arr.push(root.val);
        dfs(root.right);
    }

    let arr: number[] = [];
    dfs(root);
    let diff = Infinity;
    for (let i=1;i<arr.length;i++) {
        diff = Math.min(diff, arr[i]-arr[i-1]);
    }

    return diff;
};
// #endregion


let root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

  maxDepth(root);

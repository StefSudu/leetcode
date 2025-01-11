"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TreeNode_1 = require("./TreeNode");
(function main() {
    let root = new TreeNode_1.TreeNode(3);
    root.left = new TreeNode_1.TreeNode(9);
    root.right = new TreeNode_1.TreeNode(20);
    root.right.left = new TreeNode_1.TreeNode(15);
    root.right.right = new TreeNode_1.TreeNode(7);
    var maxDepth = function (root) {
        if (!root) {
            return 0;
        }
        let depth = 0;
        let dfs = (root, depth) => {
            if (!root) {
                return depth;
            }
            let left = dfs(root.left, depth + 1);
            let right = dfs(root.right, depth + 1);
            return Math.max(left, right);
        };
        return dfs(root, depth);
    };
    maxDepth(root);
}());

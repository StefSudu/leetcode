import {TreeNode} from './TreeNode';

(function main() {
    let root = new TreeNode(3);
    root.left = new TreeNode(9);
    root.right = new TreeNode(20);
    root.right.left = new TreeNode(15);
    root.right.right = new TreeNode(7);

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

     maxDepth(root);
}());
import { TreeNode } from "./TreeNode";

// #region 199. Binary Tree Right Side View
var rightSideView = function(root: TreeNode) {
    if (!root) {
        return [];
    }
    
    let queue = [root];
    let ret = [];

    while (queue.length) {
        let currWidth = queue.length;
        let q = [];

        for (let i=0;i<currWidth;i++) {
            let curr = queue[i];

            if (curr.left) {
                q.push(curr.left);
            }
            if (curr.right){
                q.push(curr.right);
            }

            if (i === queue.length-1) {
                ret.push(queue[i].val);
            }
        }
        queue = q;
    }

    return ret;
};

// #endregion
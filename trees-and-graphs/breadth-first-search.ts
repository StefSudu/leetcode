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

// #region 515. Find largest value in each tree row 
var largestValues = function(root: any) {
    if (!root) {
        return [];
    }

    let lvl = 0;
    let queue = [[root, lvl]];
    let hm = new Map();

    while (queue.length) {
        const queueLength = queue.length;
        let q = [];

        for (let i=0;i<queueLength;i++){
            const node = queue[i][0];
            const lvl = queue[i][1];
            
            hm.set(lvl, Math.max(hm.has(lvl) ? hm.get(lvl) : -Infinity, node.val));
            
            if (node.left) {
                q.push([node.left, lvl+1]);
            };
            if (node.right) {
                q.push([node.right, lvl+1]);
            }
        }

        queue = q;
    }

    let ret = [];
    for (const [key,val] of hm) {
        ret.push(val);
    }

    return ret;
};
// #endregion
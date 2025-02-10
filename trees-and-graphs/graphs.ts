// #region 547. Number of Provinces
var findCircleNum = function(isConnected:any) {

    let dfs = (node:any) => {
        for (const neighbor of graph.get(node)) {
            // the next 2 lines are needed to prevent cycles
            if (!seen[neighbor]) {
                seen[neighbor] = true;
                dfs(neighbor);
            }
        }
    }
    
    // build the graph
    let n = isConnected.length;
    let graph = new Map();
    for (let i = 0; i < n; i++) {
        graph.set(i, []);
    }
    
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (isConnected[i][j]) {
                graph.get(i).push(j);
                graph.get(j).push(i);
            }
        }
    }
    
    let seen = new Array(n).fill(false);
    let ans = 0;
    
    for (let i = 0; i < n; i++) {
        if (!seen[i]) {
            ans++;
            seen[i] = true;
            dfs(i);
        }
    }
    
    return ans;
};
// #endregion
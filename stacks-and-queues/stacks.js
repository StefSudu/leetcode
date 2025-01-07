// 946. Validate Stack Sequences
var validateStackSequences = function(pushed, popped) {
    if (pushed.length != popped.length) {
        return false;
    }
    
    let stack = [];
    let poppedIndex = 0;

    for (let i=0;i<pushed.length;i++) {
        stack.push(pushed[i]);

        while (stack.length > 0 && stack[stack.length-1] == popped[poppedIndex]) {
            poppedIndex+=1;
            stack.pop();
        }
    }
    return stack.length === 0;
};
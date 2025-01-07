// 946. Validate Stack Sequences
// var validateStackSequences = function(pushed, popped) {
//     if (pushed.length != popped.length) {
//         return false;
//     }
    
//     let stack = [];
//     let poppedIndex = 0;

//     for (let i=0;i<pushed.length;i++) {
//         stack.push(pushed[i]);

//         while (stack.length > 0 && stack[stack.length-1] == popped[poppedIndex]) {
//             poppedIndex+=1;
//             stack.pop();
//         }
//     }
//     return stack.length === 0;
// };

// 735. Asteroid Collision
var asteroidCollision = function(asteroids) {
    let stack = [];

    for (let i=0;i<asteroids.length;i++) {
        let asteroid = asteroids[i];

        while (stack && (asteroid < 0 && stack[stack.length-1] > 0)) {
            if (stack[stack.length-1] < Math.abs(asteroid)) {
                stack.pop();
            } else {
                break;
            }
        }

        if (stack.length>0) {
            if (asteroid < 0) {
                if (stack[stack.length-1] < 0) {
                    stack.push(asteroid);
                } else if (stack[stack.length-1] == Math.abs(asteroid)) {
                    stack.pop();
                }
            } else if (asteroid > 0) {
                if (stack[stack.length-1] < 0 || stack[stack.length-1]>0) {
                    stack.push(asteroid);
                }
            }
        } else {
            stack.push(asteroid);
        }
    }
    return stack;
}


asteroidCollision([8,-8]);
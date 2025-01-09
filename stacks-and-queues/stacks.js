// #region 946. Validate Stack Sequences
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
// #endregion

// #region 735. Asteroid Collision
// var asteroidCollision = function(asteroids) {
//     let stack = [];

//     for (let i=0;i<asteroids.length;i++) {
//         let asteroid = asteroids[i];

//         while (stack && (asteroid < 0 && stack[stack.length-1] > 0)) {
//             if (stack[stack.length-1] < Math.abs(asteroid)) {
//                 stack.pop();
//             } else {
//                 break;
//             }
//         }

//         if (stack.length>0) {
//             if (asteroid < 0) {
//                 if (stack[stack.length-1] < 0) {
//                     stack.push(asteroid);
//                 } else if (stack[stack.length-1] == Math.abs(asteroid)) {
//                     stack.pop();
//                 }
//             } else if (asteroid > 0) {
//                 if (stack[stack.length-1] < 0 || stack[stack.length-1]>0) {
//                     stack.push(asteroid);
//                 }
//             }
//         } else {
//             stack.push(asteroid);
//         }
//     }
//     return stack;
// }
// #endregion

// #region 649. Dota2 Senate
var predictPartyVictory = function(senate) {
    let senates = senate.split('');
    const hm = new Map();

    for (let i=0;i<senates.length;i++) {
        hm.set(senates[i], (hm.get(senates[i])||0)+1);
    }

    let queue = [];
    for (let j=0;j<senates.length;j++) {
        let currSenate = senates[j];

        if (hm.get(currSenate) > 0 && queue.length === 0) {
            queue.push(currSenate);
        } else if (currSenate !== queue[0]) {
            if (hm.get(queue[0]) === 0) {
                queue.shift();
                queue.push(currSenate);
            } else {
                hm.set(currSenate, hm.get(currSenate)-1);
                hm.set(queue[0], hm.get(queue[0])-1)
            }
        }
    }

    return queue[0];
};

predictPartyVictory("RDD")

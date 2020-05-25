const items = [1,2,0,1,0,1,0,3,0,1]
const secondItems = [9,9,1,2,1,1,3,1,9,9,0,0,0,0,0,0,0,0,0,0]
const thirdItems = ["a","b","c","d",1,1,3,1,9,9,0,0,0,0,0,0,0,0,0,0]

function moveZeros(a) {
    if (a.length <= 1) { return a; }

    let moved = 0;
    for (let i = 0; i < a.length - 1; i++) {
        if (a[i-moved] === 0) {
            a.splice(i - moved, 1);
            a.push(0);
            moved++;
        }
    }

    return a;
}

console.log(moveZeros(thirdItems))
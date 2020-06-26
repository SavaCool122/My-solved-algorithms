// fibonacci(4); // should return [0,1,1,2]

function fibonacci(n) {
    if (n <= 0) return []
    const arr = [0, 1]
    if (n === 1) return [arr[0]]
    if (n === 2) return arr
    for (let i = 2; i < n; i++) {
        arr.push(arr[i - 1] + arr[i - 2])
    }
    return arr
}
console.log(fibonacci(6))

var countBitsWhile = function (n) {
  let count = 0
  while (n > 0) {
    if (n % 2 === 1) {
      count++
    }
    n = Math.floor(n / 2)
  }
  return count
}

console.time()
console.log(countBitsWhile(12))
console.timeEnd()

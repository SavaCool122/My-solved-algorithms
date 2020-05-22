let t = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
]

// [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]
snail = function (array) {
  var result
  while (array.length) {
    // Steal the first row.
    result = result ? result.concat(array.shift()) : array.shift()
    // Steal the right items.
    for (var i = 0; i < array.length; i++) result.push(array[i].pop())
    // Steal the bottom row.
    result = result.concat((array.pop() || []).reverse())
    // Steal the left items.
    for (var i = array.length - 1; i >= 0; i--) result.push(array[i].shift())
  }
  return result
}
console.log(snail(t))

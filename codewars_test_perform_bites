// simple benchmark for reversing a string in js - source https://medium.com/quick-code/5-ways-to-reverse-a-string-in-javascript-466f62845827

var countBitsReplace = function (n) {
  return n.toString(2).replace(/0/g, '').length
}

function countBitsAnd(n) {
  for (c = 0; n; n >>= 1) c += n & 1
  return c
}

var countBitsMatch = function (n) {
  a = n.toString(2).match(/1/g)
  return a == null ? 0 : a.length
}

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

var countBitsParseReduce = function (n) {
  // Program Me
  return n
    .toString(2)
    .split('')
    .reduce((a, b) => parseInt(a) + parseInt(b), 0)
}

const countBitsShort = (n) => n.toString(2).split('0').join('').length

let string = 9239732982
let iterations = 100000
let bmarkData = [
  {
    function: countBitsReplace,
    name: 'countBitsReplace',
    time: 0,
  },
  {
    function: countBitsParseReduce,
    name: 'countBitsParseReduce',
    time: 0,
  },
  {
    function: countBitsShort,
    name: 'countBitsShort',
    time: 0,
  },
  {
    function: countBitsAnd,
    name: 'countBitsAnd',
    time: 0,
  },
  {
    function: countBitsMatch,
    name: 'countBitsMatch',
    time: 0,
  },
  {
    function: countBitsWhile,
    name: 'countBitsWhile',
    time: 0,
  },
]
bmarkData.forEach((data) => {
  let before = Date.now()
  for (let i = 0; i < iterations; i++) {
    data.function(string)
  }
  let after = Date.now()
  data.time = after - before
})

console.log(bmarkData)

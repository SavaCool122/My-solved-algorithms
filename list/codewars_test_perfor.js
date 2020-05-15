// simple benchmark for reversing a string in js - source https://medium.com/quick-code/5-ways-to-reverse-a-string-in-javascript-466f62845827

const listMy = (arr) => {
  if (!arr) return ''
  let result = []
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i].name)
    if (i == arr.length - 2) result.push('&')
    if (!(i == arr.length - 2) && !(i == arr.length - 1)) result[i] += ','
  }
  return result.join(' ')
}

var listOneLine = (names) =>
  names
    .map((x) => x.name)
    .join(', ')
    .replace(/(.*),(.*)$/, '$1 &$2')

function listReduce(names) {
  return names.reduce(function (prev, current, index, array) {
    if (index === 0) {
      return current.name
    } else if (index === array.length - 1) {
      return prev + ' & ' + current.name
    } else {
      return prev + ', ' + current.name
    }
  }, '')
}

function listPop(names) {
  var xs = names.map((p) => p.name)
  var x = xs.pop()
  return xs.length ? xs.join(', ') + ' & ' + x : x || ''
}

let string = [{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Lisa' }]
let iterations = 100000
let bmarkData = [
  {
    function: listMy,
    name: 'listMy',
    time: 0,
  },
  {
    function: listOneLine,
    name: 'listOneLine',
    time: 0,
  },
  {
    function: listReduce,
    name: 'listReduce',
    time: 0,
  },
  {
    function: listPop,
    name: 'listPop',
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

let t = ['Aa', 'aaa', 'aaaaa', 'aaaaa', 'BbBb', 'a', 'Aaaa', 'AaAaAa', 'a']

function findUniqArr(arr) {
  var binA = wordOccurence(arr[0]),
    binB = wordOccurence(arr[1])
  return arrayEqual(binA, binB)
    ? arr.find((w) => !arrayEqual(binA, wordOccurence(w)))
    : [binA, binB].find((b) => !arrayEqual(b, wordOccurence(arr[2])))
}

var wordOccurence = (str) =>
  Object.keys(
    [...str.toLowerCase()].reduce((b, c) => ((b[c] = true), b), {}),
  ).sort()
var arrayEqual = (a, b) =>
  a.length === b.length && a.every((e, i) => e === b[i])

function findUniq1(arr) {
  var tmp = arr.map((el) =>
      Array.from(new Set(el.toLowerCase().split('')))
        .sort()
        .join(''),
    ),
    str = tmp[0] == tmp[1] ? tmp[0] : tmp[2]
  for (var i = 0; i < arr.length; i++) if (tmp[i] != str) return arr[i]
}

const findUniq2 = (arr) => {
  const firstItem = arr[0]
  const uniq = arr.filter((item) =>
    item.replace(new RegExp(`[${firstItem}]`, 'gi'), ''),
  )
  return uniq.length === 1 ? uniq[0] : firstItem
}

//========

let string = t
let iterations = 100000
let bmarkData = [
  {
    function: findUniqArr,
    name: 'findUniqArr',
    time: 0,
  },
  {
    function: findUniq1,
    name: 'findUniq1',
    time: 0,
  },
  {
    function: findUniq2,
    name: 'findUniq2',
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

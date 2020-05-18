let t = ['Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a']
let c = ['abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba']
let g = ['Tom Marvolo Riddle', 'I am Lord Voldemort', 'Harry Potter']
function findUniq(arr) {
  let [a, b, c] = arr.slice(0, 3)

  if (!similar(a, b) && !similar(a, c)) return a
  for (d of arr) if (!similar(a, d)) return d
}

function similar(x, y) {
  x = new Set(x.toLowerCase())
  y = new Set(y.toLowerCase())

  if (x.size !== y.size) return false
  for (z of x) if (!y.has(z)) return false

  return true
}

console.log(findUniq(g))

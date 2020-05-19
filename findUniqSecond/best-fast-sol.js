let t = ['Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a']
let c = ['abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba']
let g = ['Tom Marvolo Riddle', 'I am Lord Voldemort', 'Harry Potter']

function findUniq(arr) {
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

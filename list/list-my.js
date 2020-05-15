const list = (arr) => {
  if (!arr) return ''
  let result = []
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i].name)
    if (i == arr.length - 2) result.push('&')
    if (!(i == arr.length - 2) && !(i == arr.length - 1)) result[i] += ','
  }
  return result.join(' ')
}

console.log(
  list([
    { name: 'Bart' },
    { name: 'Lisa' },
    { name: 'Maggie' },
    { name: 'Maggie' },
    { name: 'Maggie' },
  ]),
)
// returns 'Bart, Lisa & Maggie'

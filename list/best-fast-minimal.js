function list(names) {
  return names.reduce((prev, current, index, array) => {
    console.log(prev, current, index)
    if (index === 0) {
      return current.name
    } else if (index === array.length - 1) {
      return prev + ' & ' + current.name
    } else {
      return prev + ', ' + current.name
    }
  }, '')
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

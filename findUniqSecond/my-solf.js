function AlphaSort(a, b) {
  if (a.name > b.name) {
    return 1
  }
  if (a.name < b.name) {
    return -1
  }
  return 0
}

const findUniq = (arr) => {
  let sortedArr = []
  for (let i = 0; i < arr.length; i++) {
    sortedArr.push(
      [
        ...new Set(
          arr[i]
            .toLowerCase()
            .split('')
            .filter((item) => item != ' '),
        ),
      ]
        .sort()
        .join(''),
    )
  }
  sortedArr.sort()
  let uniqItem = sortedArr[0] == sortedArr[1] ? sortedArr.pop() : sortedArr[0]
  for (let i = 0; i < arr.length; i++) {
    if (
      uniqItem ===
      [
        ...new Set(
          arr[i]
            .toLowerCase()
            .split('')
            .filter((item) => item != ' '),
        ),
      ]
        .sort()
        .join('')
    ) {
      return arr[i]
    }
  }
}

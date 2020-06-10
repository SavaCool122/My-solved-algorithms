function duplicateCount(string) {
    let uniqueCount = string.toUpperCase().split('')
    let counter = 0
    let counts = uniqueCount.reduce((map, val) => {
        map[val] = (map[val] || 0)+1
        return map
    }, {} );
    for (const count in counts) {
        if(counts[count] !== 1) counter++
    }
    return counter
}

console.log(duplicateCount('Indivisibilities'))
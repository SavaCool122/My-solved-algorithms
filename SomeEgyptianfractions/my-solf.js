
function decompose(str) {
    let [nr, dr] = str.split('/')
    let result = []
    if (dr === 0 || nr === 0) {
        return []
    }
    getArr(nr, dr)
    return result

    function getArr(nr, dr) {
        if (dr === 0 || nr === 0) {
            return []
        }
        if (dr % nr === 0)
        {
            result.push(`1/${dr / nr}`)
            return
        }
        if (nr % dr === 0)
        {
            result.push(nr / dr)
            return
        }
        if (nr > dr)
        {
            result.push(`${nr/dr}`)
            getArr(nr % dr, dr);
            return
        }
        let n = Math.floor((dr / nr )) + 1
        result.push(`1/${n}`)

        getArr(nr * n - dr, dr * n);
    }
}

// Driver Code
nr = 3;
dr = 4;
console.time()
console.log(decompose('3/4'))
console.timeEnd()

const message = 'what time are we climbing up the volcano'

function high(x){
    let arr = x.split(' '), numArr = []

    for(let i = 0; i < arr.length; i++) {
        let total = 0
        let letters = arr[i].split('')

        for(let j = 0; j < letters.length; j++) {
            total += letters[j].charCodeAt()-96
        }
        numArr.push(total)
    }

    return arr[numArr.indexOf(Math.max.apply(null, numArr))]
}

console.log(high(message))
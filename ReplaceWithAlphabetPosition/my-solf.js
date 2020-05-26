const stringFotTest = 'The narwhal beacons" at midnight.'

function alphabetPosition(text){
    let arr = text.replace(/[^A-Za-z]/gim,'').toLocaleLowerCase().split(' '), numArr = []
    for(let i = 0; i < arr.length; i++) {
        let letters = arr[i].split('')

        for(let j = 0; j < letters.length; j++) {
            (letters[j].charCodeAt()-96 > 0) ? numArr.push(letters[j].charCodeAt()-96) : ''
        }
    }
    return numArr.join(' ')
}



console.log(alphabetPosition(stringFotTest))


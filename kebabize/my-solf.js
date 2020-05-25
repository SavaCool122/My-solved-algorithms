let stringkamel = 'myCamelCasedString';
let stringWithNum = 'myCamelHas3Humps'
let anotherTest = '39m7n'
function kebabize(str) {
    return [...str].reduce((acc,current,index) => {
        console.log(acc,current)
        if(!isNaN(current * 1)) {
            return acc
        }
        if (current == current.toUpperCase()) {
            if(acc.length <= 0) {
                return acc + '-' + current.toLowerCase()
            }
            return acc + current.toLowerCase()
        } else {

            return acc + current
        }
    },'')
}

console.log(kebabize(anotherTest))
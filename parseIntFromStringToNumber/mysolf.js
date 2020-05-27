const stringToParse = 'eight hundred eighty-eight thousand eight hundred and eighty-eight' // 888888
const stringToParse2 = 'seven hundred eighty-three thousand nine hundred and nineteen' // 783919
const nextString = 'ninety-four'
const secondString = 'eighteen'
const anotherTest = 'two'

const parseInt = (string) => {
    let key = {one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10, eleven: 11, twelve: 12, thirteen: 13, fourteen: 14, fifteen: 15, sixteen: 16, seventeen: 17, eighteen: 18, nineteen: 19, twenty: 20, thirty: 30, forty: 40, fifty: 50, sixty: 60, seventy: 70, eighty: 80, ninety: 90, hundred: 100, thousand: 1000, million: 1000000};
    let parse = string.split(/[\s-]+/);
    //a.reduce(function (pre, curr) { if (curr.name !=="tc_001") p.push(curr); return p;}, [])
    let numerate = parse.reduce((p,c) => (key[c] && p.push(key[c]),p),[]);
    let calculate = 0;
    let holder = 0;
    for( let i = 0; i < numerate.length; i++){
        if(numerate[i] === 1000 || numerate[i] === 1000000){
            holder *= numerate[i];
            calculate += holder;
            holder = 0;
        }
        else if (numerate[i] === 100){
            holder *= numerate[i]
        }
        else {
            holder += numerate[i]
        }
    }
    calculate += holder
    return calculate
}
// console.log((7*100+80+3)*1000+9*100+19)
console.log(parseInt(stringToParse2))

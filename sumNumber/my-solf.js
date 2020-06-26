// a=((a*a)**0.5)
// b=((b*b)**0.5

function sumNum(a, b) {
    a=((a*a)**0.5)
    b=((b*b)**0.5)
    return (a + b) * (b - a + 1)
}

console.log(sumNum(-42.8, 5))

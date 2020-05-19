function expression(number) {
  return function (op) {
    return op ? op(number) : number
  }
}

const zero = expression(0)
const one = expression(1)
const two = expression(2)
const three = expression(3)
const four = expression(4)
const five = expression(5)
const six = expression(6)
const seven = expression(7)
const eight = expression(8)
const nine = expression(9)

function plus(x) {
  return function (y) {
    return y + x
  }
}
function minus(x) {
  return function (y) {
    return y - x
  }
}
function times(x) {
  return function (y) {
    return y * x
  }
}
function dividedBy(x) {
  return function (y) {
    return Math.floor(y / x)
  }
}

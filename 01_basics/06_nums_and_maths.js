const score=400
console.log(score)

const balance = new Number(100)
console.log(balance)

console.log(balance.toString().length)
console.log(balance.toFixed(1))

const anotherNum = 123.23
console.log(anotherNum.toPrecision(3))

//++++++++++++++++Maths+++++++++++++++++

// console.log(Math)
// console.log(Math.abs(-4))
// console.log(Math.round(4.6))
// console.log(Math.ceil(4.2))
// console.log(Math.floor(4.9))

console.log(Math.random())
console.log(Math.random()*10)
console.log(Math.ceil(Math.random()*10))
//we can wrap ceil and floor to it

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max-min+1))+min)
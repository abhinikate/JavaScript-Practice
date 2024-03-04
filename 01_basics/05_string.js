const name = "abhi"
const repoCount = 50
// console.log(name + repoCount + "value");

console.log
(`hello my name is ${name} and
 my repo count is ${repoCount}`);

const gameName = new String("Abhishek")

// console.log(gameName[0])
// console.log(gameName.__proto__)

// console.log(gameName.length)

// console.log(gameName.toUpperCase())

console.log(gameName.charAt(2))
console.log(gameName.indexOf('h'))

const newString = gameName.substring(0,4)
console.log(newString)

//we cannot give negative sign if we does so it will start with "0" only

const anotherString = gameName.slice(-8,4)
console.log(anotherString)

//we can give negative sign

const newStringOne = "     Abhi     "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://abhi.com/abhi%20nikate"
console.log(url.replace('%20','_'))

console.log(url.includes("abhi"))

console.log(gameName.split('-'))
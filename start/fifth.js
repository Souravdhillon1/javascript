let str1="sourav"
let str2="dhillon"
console.log(`the first name of the candidate is ${str1} and the surname is ${str2}`)
const str=new String("Hello World")
console.log(str,typeof(str))
console.log(str.__proto__)
console.log(str.length,str.includes('t'),str.charAt(1),str.at(2),str.trimStart(),str.trimEnd(),str.trim(),str.toLowerCase(),str.toUpperCase(),str.toLocaleUpperCase(),str.replace('o','i'),str.replaceAll('o','t'),str.repeat())
let strn=str.substring(-11,4)
console.log(strn)
let nnn=str.repeat(3)
console.log(nnn)
console.log(nnn.split(' '))
let number=new Number(55555.5555)
console.log(number.toString(),number.toFixed(3),number.toExponential(0),number.toPrecision(3))
const hundreds=1000000
console.log(hundreds.toLocaleString())
console.log(hundreds.toLocaleString('en-IN'))
let a=Number.MAX_VALUE
console.log(a)
console.log(Math.abs(-5),Math.round(4.88),Math.ceil(4.88),Math.floor(4.88),Math.sqrt(2),Math.min(1,2,3,4),Math.max(1,5,3,8,2),Math.random()+1)
console.log(Math.floor(((Math.random())*(40-20+1))+20))
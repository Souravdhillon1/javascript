"use strict"
/*let key= Number(2)
switch(key){
    case 1:console.log("number one has been entered")
           break
    case 2:console.log("number two has been entered")
           break
    default:console.log("i have printed everything")
}
let a
a=5??10
console.log(a)
let b
b=undefined??6
let c
c=9??null
let d
d=null??undefined
console.table([a,b,c,d])
const arr=[1,2,3,4,5]
for(let i=0;i<arr.length;i++){
    console.log(arr[i])
}
for(const i of arr){
    console.log(i)
}*/
const map=new Map()
map.set('0',"1")
map.set(1,2)
const arr=[1,2,3,4,5]
/*console.log(typeof map.get('0'),map.get(1),typeof map.get(1))
for(const [key,val] of map){
    console.log(key,val)
}
for(const key in map){
    console.log(key)
}
const arr=[1,2,3,4,5]
for( const val in arr){
    console.log(arr[val])
}*/
arr.forEach(function num(val){
    console.log(val)
})
arr.forEach((val)=>console.log(val))
function print(val){
    console.log(val)
}
let fff=arr.forEach(print)
console.log(fff)
const num=[1,2,3,4,5,6,7,8,9]
console.log(num.filter((num)=>num>=4))
console.log(num.filter((num)=>{return num>=4}))
const newarr=arr.map((num)=>num*10).map((num)=>num+1)
console.log(newarr)
const sum=newarr.reduce(((acc,curr)=>acc+curr),0)
console.log(sum)
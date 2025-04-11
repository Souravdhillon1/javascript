let a=new Object({1:2,2:3})
console.log(a)
const k=Symbol(22)
let b={
    name:"sourav",
    surname:"dhillon",
    age:22,
    [k]:88
}
console.log(b.name,b["name"],k,b[k])
let s=function(name){
    console.log(`hello my name is ${name}`)
}
//s("Sourav Dhillon")
b.greeting=function(){
    console.log(`Welcome ${this.name}`)
}
b.greeting()
let obj1=new Object({1:2,2:3})
let obj2=new Object({3:4,5:6})
console.log(obj1)
let obj3={obj1,obj2}
console.log(obj3)
let obj4=Object.assign({},obj1,obj2)
console.log(obj4)
let obj5={...obj1,...obj2}
console.log(obj5)
console.log(Object.keys(obj5))
console.log(Object.values(obj4))
console.log(Object.entries(obj5))
console.log(obj5.hasOwnProperty("1"))
let nnn={
    name:"sourav",
    surname:"dhillon"
}
let {name}=nnn
console.log(name)
let{surname:h}=nnn
console.log(h)
function addTwonumbers(num1,num2){
    console.log(num1+num2)
}
console.log(addTwonumbers(1,2),addTwonumbers(1),addTwonumbers())
function print(username="golu"){
    if(!username){
        console.log("enter a proper name")
        return
    }
    console.log(`${username} just logged in !`)
}
print("sourav")
print()
function sum(...num){
    return num
}
console.log(sum(),sum(1,2,3,4),sum(1))
var fff=888
function print_obj(anyobject){
     fff=6666
    console.log(`the name  of user is ${anyobject.name}`)
}
print_obj(b)
console.log(fff)

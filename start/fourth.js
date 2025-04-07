"use strict"
let a=6
let b=8
console.table([a+b,a-b,a*b,a/b,a**b,a%b])
console.log(Math.floor(a/b))
let str1="hello"
let str2="sourav"
let str3=str1+str2
console.log(str3)
let c=1
let d="2"
console.table([c+d,typeof(c+d),d+c,typeof(d+c),1+c+d,typeof(1+c+d),c+d+1,typeof(c+d+1),1+d+c,typeof(1+d+c),d+c+1,typeof(d+c+1)])
console.log(+true)
console.log(typeof(+true))
console.log(-true)
console.log(typeof(-true))
console.table([+false,typeof(+false),-false,typeof(-false),+"",-""])
let e,f,g=8
console.table([e,f,g])
let j
console.table(["2">=1,1<="2",2=="2","2==2",null>=0,null>0,null==0,j>=null,j>=1,j=="1",j=="true"])
console.log(2==="2")
let y=Symbol(1)
let z=Symbol(1)
console.log(y===z)
let x={
    name:"sourav",
    age:12

}
console.log(x)
console.log(typeof(x.age))
let m=function first(){
    let b=8
    return console.log(b)
}
console.log(m())
console.log(typeof(m))
let k=[1,2,3,4]
console.log(k)
console.log(typeof(k))
k[0]=9
console.log(k)
let o=9
let p=o
console.log(0,p)
p=10
console.log(o,p)
let q=x
console.log(q)
q.name="mansvi"
console.log(x,q)
m()
 fu=m()
console.log(r)
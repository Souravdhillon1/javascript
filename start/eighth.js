"use strict"
console.log = require("console").log;

function one(){
    username="sourav"
    function two(){
        surname="dhillon"
        console.log("this the surname  of the current user")
    }
    //console.log(`the surname of the user is ${surname}`)
    two()
}
console.log(addone(1))
function addone(num){
    return num+1
}
let b=function addtwo(num){
    return num+2
}
//console.log(addone(1),b(1))
const user={
    username:"sourav",
    surname:"dhillon",
     msg:function(){
    console.log(`the user ${this.username} just logged in`)
    console.log(this)
    }
}
user.msg()
console.log(this)
function chai(){
   let username="sourav"
    console.log(this)
    console.log(username)
}
chai()
let addthree=(num1,num2,num3)=>{
    console.log(num1+num2+num3)
    console.log(this)
};
addthree(1,2,3)
let addfour=(num1,num2,num3,num4)=>(num1+num2+num3+num4)
console.log(addfour(1,2,3,4))
//(()=>({username:"hitesh"}))();
(function chai1(){
    let username="sourav"
     console.log(this)
     console.log(username)
 })();
const myFunction=function(){
    console.log("hello world")
}
myFunction();
// primitive data type like null etc use stack and array object use healp data type
let userone={
    email:"user@google.com",
    age:20
}
let usertwo=userone
usertwo.email="vishal@google.com"
console.log(userone)
console.log(usertwo)
const mySym= Symbol("key1")
const newjs={
    name:"vishal",
    [mySym]:"mykey1",
    age:20,
    address:"ranikhet",
    email:"boby@google.com",
 }

// console.log(newjs.email)
// console.log(newjs["email"])
// console.log((newjs[mySym]))
newjs.email="vishalgamil.com"
//Object.freeze(newjs)
newjs.email="yeboii@gamil.com"
//console.log(newjs)
newjs.greeting=function(){
    console.log("hello world")
}
newjs.greeting2=function(){
    console.log(`hello world,${this.name}`)
}
console.log(newjs.greeting())
console.log(newjs.greeting2())

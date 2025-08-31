// const singleton=new Object()
// console.log(singleton)
const nonsingle={}
nonsingle.id="2ee3e"
nonsingle.name="vishal"
nonsingle.isloggedin=false
//console.log(nonsingle)
obj1={1:"a",2:"b"}
obj2={3:"a",4:"b"}
obj3=Object.assign({},obj1,obj2)
//console.log(obj3)
console.log(Object.entries(nonsingle))
console.log(nonsingle.hasOwnProperty("isloggedin"))


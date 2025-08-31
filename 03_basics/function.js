function loggedin(username="vishal"){
    return `${username} just logged in`
}
//console.log(loggedin("vishal"))
//console.log(loggedin("ritesh"))
function claci(...num1){
    return num1
}
//console.log(claci(2,5,3,8))
const user={
   username:"vishal",
   age:199
}
function handle(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.age}`)
}
handle(user)
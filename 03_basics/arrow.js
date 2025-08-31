//console.log(this)
function welcome(){
    let user="vishal"
  console.log(this.user)
}
const chai=()=>{
  let username="vishal"
  console.log(this)
}
//chai()
const addtwo=(num1,num2)=>({username:"vishal"})//here we have to not use return
console.log(addtwo(2,3))

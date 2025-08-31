//forEach does not return any value
const mynums=[1,23,4,67,8,4,]
const final=mynums.filter((num)=>{
   //return  num>20
})
//console.log(final)
const mynumbers=[1,2,3,4,5,6,7]
const newnums=mynumbers
         .map((num) => num*10)
         .map((num) => num+1)
         .filter((num)=>num>11)
console.log(newnums)
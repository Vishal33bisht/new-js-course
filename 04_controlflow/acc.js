const mynums=[1,2,3]
// const total=mynums.reduce(function(acc,current){
//     console.log(`accum is ${acc} and current is ${current}`)
//     return acc+current
// },0)
// const total=mynums.reduce((acc,current)=>acc+current,0)
// console.log(total)
shopping=[
    {
    price:2000,
    },
     {
    price:4000,
    },
     {
    price:6000,
    }
]
const price=shopping.reduce((acc,item)=>acc+item.price,0)
console.log(price)
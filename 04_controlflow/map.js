const map=new Map()
map.set('india',"apna india")
map.set('usa',"usa tatti")
//console.log(map)
for (const[key,value] of map){
    //console.log(key,"->",value)
}
const myobject={
    cpp:"c++",
    java:"java"
}
for(const key in myobject){
  console.log(`${key} is ${myobject[key]}`)
}
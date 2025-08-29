//IIFE is used to avoid polluting the global scope by creating a private scope for varibales and function
(function chai(){
    console.log("iife")
})();
( (name)=>{
    console.log(`iife2 is ${name}`)
})("vishal")
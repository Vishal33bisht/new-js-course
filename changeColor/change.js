const randomColor=function(){
    const hex="0123456789ABCDEF";
    let color='#'
    for(let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)];
    }
    return color;
}
let intervalid;
const colorchange=function(){
    if(!intervalid){
   intervalid= setInterval(changebycolor,1);
    }
    function changebycolor(){
    document.body.style.backgroundColor=randomColor();
    }
}; 
const colorstop=function(){
    clearInterval(intervalid);
    intervalid=null;
}
document.querySelector("#start").addEventListener('click',colorchange);
document.querySelector("#stop").addEventListener('click',colorstop);

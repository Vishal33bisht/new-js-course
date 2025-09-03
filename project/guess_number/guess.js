const randnumber=parseInt(Math.random()*100+1);
const guessinput=document.querySelector("#guess");
const submit=document.querySelector("#submit");
const previousguess=document.querySelector("#prevguess");
const remainguess=document.querySelector("#remaining");
const lowOrHi = document.querySelector(".loworhi"); 

const p=document.createElement('p');

let prevguess=[];
let numguess=1;

let playgame=true;

if(playgame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess=parseInt(guessinput.value);
        validateguess(guess);
    })
}
function validateguess(guess){
  if(isNaN(guess)){
    alert('please enter a valid number')
  }
  else if(guess<1){
    alert('please enter a valid number')
  }
  else if(guess>100){
    alert('please enter a valid number')
  }
  else{
    prevguess.push(guess);
    if(numguess===11){
        displayguess(guess)
        displaymessage(`game over the random number was${randnumber}`)
        endGame()
    }
    else{
        displayguess(guess)
        checkguess(guess)
    }
  }
}
function checkguess(guess){
    if(guess==randnumber){
        displaymessage('you guessed it right');
        endGame();
    }
    else if(guess<randnumber){
        displaymessage('too low try again');
    }
    else if(guess>randnumber){
        displaymessage('too high try again');
    }
}
function displayguess(guess){
   guessinput.value='';
   previousguess.innerHTML+=`${guess}`;
    numguess++;
    remainguess.innerHTML=`${11-numguess}`;
}
function displaymessage(message){
    lowOrHi.innerHTML=`<h2>${message}</h2>`;
}
function endGame(){
   guessinput.value='';
   guessinput.setAttribute('disabled','');
   playgame=false;
}
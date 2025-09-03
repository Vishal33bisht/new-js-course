const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body");  // fixed

buttons.forEach(function (button) {
    console.log(button);
    button.addEventListener('click', function(e) {
        console.log(e);//the span that was clicked
        console.log(e.target);//it gives the id of that span 
        body.style.backgroundColor = e.target.id; //it sets background color with the id of the span
    });
});

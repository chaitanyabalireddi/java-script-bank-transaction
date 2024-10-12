let pupil = document.querySelector(`.pupil`);

document.addEventListener(`mousemove` , function(e){

   let x = e.clientX*100/window.innerWidth +"%";
   let y = e.clientY*100/window.innerHeight +"%";
   pupil.style.left  = x;
   pupil.style.top = y;

})
let pupil1 = document.querySelector(`.pupil1`);

document.addEventListener(`mousemove` , function(event){

   let xval = event.clientX*100/window.innerWidth +"%";
   let yval = event.clientY*100/window.innerHeight +"%";
   pupil1.style.left  = xval;
   pupil1.style.top = yval;
})
const balance = 20000;
const pin = 9876;

let details = document.querySelector(`#detailsBtn`);
let submitBtn = document.querySelector(`.mySubmit`);
details.addEventListener("click" , function() {
    let input =document.querySelector(`.input-box`);
    input.style.display = `flex`;
    let clickBtn = document.querySelector(`#myClick`);
    clickBtn.style.display = `block`;
   clickBtn.addEventListener("click" ,  function(){
   let cover= document.querySelector(`.hovercover`);
   cover.style.display = `block`;
   clickBtn.style.display = `none`;
})
    
})
submitBtn.addEventListener("click" , function(){
    let enterPin = document.querySelector(`.myPin`).value;
    let failedPin = document.querySelector(`.failed`);
     if(enterPin == pin){
        location.href = "account.html";
        
     }
     else{
        failedPin.style.display = `block`;
     }
})
const pin = 9876;
const displaybal = 20000;
let credit = document.querySelector(`.myCredit`);
let debit = document.querySelector(`.myDebit`);

 credit.addEventListener("click", function(){
    let userPin = document.querySelector(`.myPin`).value;
    let amount = parseInt(document.querySelector(`.myAmount`).value);
    let displayMsg = document.querySelector(`.message`);
    if(userPin == pin){
        let currentBalance = document.querySelector(`#crntBalance`);
        let newBalance = parseInt(amount + displaybal);
          currentBalance.innerHTML = newBalance;
        displayMsg.innerHTML = `"${amount} ₹ was credited in your account"`;
        displayMsg.style.color = "black";
        displayMsg.style.fontSize = `36px`;

    }
    else{
        displayMsg.innerHTML = "Please enter correct pin";
        displayMsg.style.color = "red";
        displayMsg.style.fontSize = `36px`;
    }
 })
 debit.addEventListener("click" , function(){
    let userPin = document.querySelector(`.myPin`).value;
    let amount = parseInt(document.querySelector(`.myAmount`).value);
    let displayMsg = document.querySelector(`.message`);
    if(userPin == pin && amount <= displaybal){
        let currentBalance = document.querySelector(`#crntBalance`);
        let newBalance = parseInt(displaybal - amount);
          currentBalance.innerHTML = newBalance;
        displayMsg.innerHTML = `"${amount} ₹ was debited from your account"`;
        displayMsg.style.color = "black";
        displayMsg.style.fontSize = `36px`;
    }
    else if(amount>displaybal){
        displayMsg.innerHTML = `"please enter valid amount"`;
        displayMsg.style.color = "red";
        displayMsg.style.fontSize = `36px`;
    }
    else{
        displayMsg.innerHTML = "Please enter correct pin";
        displayMsg.style.color = "red";
        displayMsg.style.fontSize = `36px`;
    }
 })
 
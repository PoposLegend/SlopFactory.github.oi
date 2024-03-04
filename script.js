let money = 0;
let slop = 0;

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const text1 = document.querySelector("#text1")
const moneyText= document.querySelector("#moneyText")
const slopText= document.querySelector("#slopText")

//buttons

button1.onclick = shop;
button2.onclick = worked;


function buySlop(){
if (money >= 10){
  money = money - 10;
  slop = slop +1;
  moneyText.innerText = money;
  slopText.innerText = slop;
} else[
  text1.innerText ="you dont have enough money to buy a slop!"
]
}

function clickme(){
  button1.onclick = shop;
  button1.innerText = "go to shop";
  button2.innerText = "work";
  text1.innerText ="welcome to slop factory what do you want to do?"
  button2.onclick = worked;
}

function shop() {
  
  button1.innerText = "Go back";
  button1.onclick = clickme;
  button2.innerText ="buy slop (10$)"
  text1.innerText = "you enterd the shop what do you want to buy?"
  button2.onclick = buySlop;
}

function worked(){
  money = money + 1;
  text1.innerText = "you worked and got 1 dollar"
  moneyText.innerText = money;
}
let money = 0;
let slop = 0;
let workers =0;



const button1 = document.querySelector("#button1")
const button2 = document.querySelector("#button2")
const button3 = document.querySelector("#button3")
const button4 = document.querySelector("#button4")
const text1 = document.querySelector("#text1")
const moneyText= document.querySelector("#moneyText")
const slopText= document.querySelector("#slopText")
const workersText = document.querySelector("#workersText")

//buttons

button1.onclick = shop;
button2.onclick = worked;
button3.onclick = hireWorker;
button4.onclick = retireJoke;

function retireJoke(){
  text1.innerText ="just kidding. keep working"
  button4.style.display = 'none';
}

function hireWorker(){
button1.innerText ="go back"
button1.onclick = clickme
button2.innerText ="hire new worker(20 slops)"
button2.onclick = hired
button3.style.display ='none';
text1.innerText ="hire workers to get more money!"
}

automoneymaking();

function automoneymaking (){
  setInterval(function() {
    money += workers; // Assuming each worker generates 1 money per second
    moneyText.innerText = money; // Update the money display
}, 1000); // Run the function every 1000 milliseconds (1 second)
}


function hired(){
  if (slop >= 20){
    slop = slop - 20;
    workers = workers + 1
    slopText.innerText = slop;
    workersText.innerText = workers
    text1.innerText ="you got 1 worker ;D"
  } else[
      text1.innerText ="you dont have enough money to buy a worker!"
    ]
  }

  
function buySlop(){
if (money >= 10){
  money = money - 10;
  slop = slop + 5;
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
  button3.innerText ="hire workers"
  button3.onclick = hireWorker;
  button3.style.display ='inline-block';
}

function shop() {
  
  button1.innerText = "Go back";
  button1.onclick = clickme;
  button2.innerText ="buy slop (10$)"
  text1.innerText = "you enterd the shop what do you want to buy?"
  button2.onclick = buySlop;
  button3.style.display ='none'
}

function worked(){
  money = money + 1;
  text1.innerText = "you worked and got 1 dollar"
  moneyText.innerText = money;
}

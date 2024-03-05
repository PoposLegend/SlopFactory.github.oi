let money = 0;
let slop = 0;
let workers =0;
let bosses =0;



const button1 = document.querySelector("#button1")
const button2 = document.querySelector("#button2")
const button3 = document.querySelector("#button3")
const button4 = document.querySelector("#button5")
const text1 = document.querySelector("#text1")
const moneyText= document.querySelector("#moneyText")
const slopText= document.querySelector("#slopText")
const workersText = document.querySelector("#workersText")
const bossText = document.querySelector("#bossText")

const button120 = document.querySelector("#button120")

//buttons

button1.onclick = shop;
button2.onclick = worked;
button3.onclick = hireWorker;
button5.onclick = hireBosses;
button120.onclick = retireJoke;

function retireJoke(){
  text1.innerText ="just kidding. keep working"
  button120.style.display = 'none';
}

function factory(){
  button1.onclick = shop;
  button1.innerText = "Shop";
  button2.innerText = "Work";
  text1.innerText ="welcome to slop factory what do you want to do?"
  button2.onclick = worked;
  button3.innerText ="Hire workers"
  button3.onclick = hireWorker;
  button3.style.display ='inline-block';
  button5.innerText ="Hire boss"
  button5.onclick = hireBosses
  button5.style.display ='inline-block';
}

function shop() {
  
  button1.innerText = "Go back";
  button1.onclick = factory;
  button2.innerText ="Buy 2 slops (10$)"
  text1.innerText = "you enterd the shop what do you want to buy?"
  button2.onclick = buySlop;
  button3.innerText = "Buy 20 slops(100$)"
  button3.onclick = buy20Slops;
  button5.innerText = "Buy 200 Slops(1k$)"
  button5.onclick = buy200Slops;
}

function buySlop(){
  if (money >= 10){
    money = money - 10;
    slop = slop + 2;
    moneyText.innerText = money;
    slopText.innerText = slop;
  } else[
    text1.innerText ="you dont have enough money to buy 2 slop!"
  ]
  }
  function buy20Slops(){
    if (money >= 100){
      money = money - 100;
      slop = slop + 20;
      moneyText.innerText = money;
      slopText.innerText = slop;
    } else[
      text1.innerText ="you dont have enough money to buy 20 slop!"
    ]
    }

    function buy200Slops(){
      if (money >= 1000){
        money = money - 1000;
        slop = slop + 200;
        moneyText.innerText = money;
        slopText.innerText = slop;
      } else[
        text1.innerText ="you dont have enough money to buy 200 slop!"
      ]
      }

function hireWorker(){
button1.innerText ="Go back"
button1.onclick = factory;
button2.innerText ="Hire new worker(20 slops)"
button2.onclick = hired;
button3.innerText ="Hire 5 new workers (100 slops)"
button3.onclick = hiredFive;
button5.innerText = "Hire 20 new workers (400 slops)"
button5.onclick = hiredtwinty;
text1.innerText ="Hire workers to get more money!"

}

function hired(){
  if (slop >= 20){
    slop = slop - 20;
    workers = workers + 1
    slopText.innerText = slop;
    workersText.innerText = workers;
    text1.innerText ="you got 1 worker ;D"
  } else[
      text1.innerText ="you dont have enough slops to buy a worker!"
    ]
  }

  function hiredFive(){
    if (slop >= 100){
      slop = slop - 100;
      workers = workers + 5
      slopText.innerText = slop;
      workersText.innerText = workers;
      text1.innerText ="you got 5 worker ;D"
    } else[
        text1.innerText ="you dont have enough slops to buy 5 worker!"
      ]
    } 
  
  function hiredtwinty(){
    if (slop >= 400){
      slop = slop - 400;
      workers = workers + 20
      slopText.innerText = slop;
      workersText.innerText = workers;
      text1.innerText ="you got 20 worker ;D"
    } else[
        text1.innerText ="you dont have enough slops to buy 20 worker!"
      ]
    } 


function hireBosses(){
button1.innerText ="Go back"
button1.onclick = factory;
button2.innerText = "Hire 1 boss (200 slops)"
button2.onclick = hired1boss;
button3.innerText = "Hire 5 bosses (1k slops)"
button3.onclick = hired5boss;
text1.innerText = "hire bosses to get more slops!"
button5.innerText ="hire 20 bosses (4k slops)"
button5.onclick = hired20boss;
}

function hired1boss(){
  if (slop >= 200) {
    slop -= 200
    bosses += 1
    bossText.innerText = bosses
    slopText.innerText = slop;
    text1.innerText ="you hired 1 boss"
  } else {
    text1.innerText ="you dont have enough slops to buy 1 boss"
  }
}

function hired5boss(){
  if (slop >= 1000) {
    slop -= 1000
    bosses += 5
    bossText.innerText = bosses;
    slopText.innerText = slop;
    text1.innerText ="you hired 5 bosses"
  } else {
    text1.innerText ="you dont have enough slops to buy 5 bosses"
  }
}

function hired20boss(){
  if (slop >= 4000) {
    slop -= 4000
    bosses += 20
    bossText.innerText = bosses;
    slopText.innerText = slop;
    text1.innerText ="you hired 20 bosses"
  } else {
    text1.innerText ="you dont have enough slops to buy 20 bosses"
  }
}

function automoneymakingslops (){
  setInterval(function() {
    slop += bosses; // Assuming each worker generates 1 money per second
    slopText.innerText = slop; // Update the money display
}, 200); // Run the function every 1000 milliseconds (1 second)
}

automoneymakingslops();

automoneymaking();

function automoneymaking (){
  setInterval(function() {
    money += workers; // Assuming each worker generates 1 money per second
    moneyText.innerText = money; // Update the money display
}, 1000); // Run the function every 1000 milliseconds (1 second)
};


function worked(){
  money = money + 1;
  text1.innerText = "you worked and got 1 dollar"
  moneyText.innerText = money;
}


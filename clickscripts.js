/* Key Variables */

var i = 0;
var powerLevel = 1;
var clickerFriends = 0;
var powerCost = 100;
var friendCost = 100;
var achievementOne = false;
var achievementTwo = false;
var achievementThree = false;

/*Naming Function with Easter Eggs */

window.onload = function namePlayer(){
  var playerName = window.prompt("Please enter your name!");
  if (playerName==="Dan"){
  alert("You share a name with the creator. Enjoy a free power level.");
  powerLevel += 1;
  document.getElementById("playerlevel").innerHTML= "Power Level: " + powerLevel;
  document.getElementById("playertitle").innerHTML= playerName+"'s Big Clicker";
  }
  else if (playerName===""){
  document.getElementById("playertitle").innerHTML= "Coward's Big Clicker";
  }
  else{
  document.getElementById("playertitle").innerHTML= playerName+"'s Big Clicker";
}}

/* Functions that must repeat constantly */

setInterval(function(){
  if (i > 0){
  document.getElementById("clicktotaltitle").innerHTML= "The Big Clicker ("+i+")";
}},3000);

setInterval(function(){
  document.getElementById("powerBuy").innerHTML= "Your points per click is equal to your Power Level. You need "+powerCost+" more points to power up!";
},1000);

setInterval(function(){
  document.getElementById("friendBuy").innerHTML= "Each Invisible Clicker clicks once per second. You need "+friendCost+" points to enlist another!";
},1000);

setInterval(function(){
  if (clickerFriends >=1){
    i += (1*clickerFriends);
    document.getElementById("herobutton").innerHTML=i;
  }
}, 1000);

/*Achievements*/

setInterval(function(){
if (i >= 100000 && achievementOne === false){
  var element = document.getElementById("herobutton");
  element.classList.add("herobutton100k");
  alert("You hit 100000 points! Enjoy this gold novelty button.");
  achievementOne = true;
}
},10000);

setInterval(function(){
if (powerLevel === 10 && achievementTwo === false){
  var element = document.getElementById("upbutton");
  element.classList.add("upbutton10");
  alert("You reached a Power Level of 10! Enjoy a gold power button.");
  achievementTwo = true;
}
},10000);

setInterval(function(){
if (clickerFriends === 10 && achievementThree === false){
  var element = document.getElementById("clickerbutton");
  element.classList.add("friendbutton10");
  alert("You have 10 invisible clickers! Enjoy a gold clicker enlister.");
  achievementThree = true;
}
},10000);

/* Key Functions */

function increment(){
  i += (1*powerLevel);
  document.getElementById("herobutton").innerHTML=i;
}

function upgrade(){
  if (i>=powerCost){
    document.getElementById("herobutton").innerHTML= i -= powerCost;
    powerLevel += 1;
    powerCost = Math.round(powerCost*1.5);
    document.getElementById("playerlevel").innerHTML= "Power Level: " + powerLevel;
    }
  else {
    alert("You need " + powerCost + " points to increase your Power Level!");
  }
}

function buyClicker(){
  if (i>=friendCost){
    document.getElementById("herobutton").innerHTML= i -= friendCost;
    clickerFriends += 1;
    friendCost = Math.round(friendCost*1.5);
    document.getElementById("clickeramount").innerHTML= "Invisible Clickers: " + clickerFriends;
  }
  else {
    alert("You need " + friendCost + " points to enlist a Clicker Friend!")
  }

}

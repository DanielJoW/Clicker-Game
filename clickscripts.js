/* Key Variables */

var i = 0;
var allTimeI = 0;
var powerLevel = 1;
var clickerFriends = 0;
var powerCost = 100;
var friendCost = 100;
var achievementOne = false;
var achievementTwo = false;
var achievementThree = false;
var achievementsMax = false;
var timePlaying = 0;

/* Key Functions */

function increment(){
  i += (1*powerLevel);
  allTimeI += 1;
  document.getElementById("herobutton").innerHTML=i;
}

function upgrade(){
  if (i>=powerCost){
    document.getElementById("herobutton").innerHTML= i -= powerCost;
    powerLevel += 1;
    powerCost = Math.round(powerCost*1.4);
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
    friendCost = Math.round(friendCost*1.4);
    document.getElementById("clickeramount").innerHTML= "Invisible Clickers: " + clickerFriends;
  }
  else {
    alert("You need " + friendCost + " points to enlist a Clicker Friend!")
  }

}

/*Naming Function with Easter Eggs */

window.onload = function namePlayer(){
  var playerName = window.prompt("Please enter your name!");
  if (playerName==="Dan"){
  alert("You share a name with the creator. Enjoy a free power level.");
  powerLevel += 1;
  document.getElementById("playerlevel").innerHTML= "Power Level: " + powerLevel;
  document.getElementById("playertitle").innerHTML= playerName+"'s Big Clicker";
  }
  else if (playerName==="" || playerName===null){
  document.getElementById("playertitle").innerHTML= "Coward's Big Clicker"
  alert("The coward clicks not for themselves.");
  clickerFriends += 1;
  document.getElementById("clickeramount").innerHTML= "Invisible Clickers: " + powerLevel;
  }
  else{
  document.getElementById("playertitle").innerHTML= playerName+"'s Big Clicker";
}}

/* Functions that must repeat constantly */

setInterval(function(){
  if (i > 0){
  document.getElementById("clicktotaltitle").innerHTML= "The Big Clicker ("+i+")";
}},3000);

/*setInterval(function(){
  document.getElementById("powerBuy").innerHTML= "Your points per click is equal to your Power Level. You need "+powerCost+" more points to power up!";
},1000);

setInterval(function(){
  document.getElementById("friendBuy").innerHTML= "Each Invisible Clicker clicks once per second. You need "+friendCost+" points to enlist another!";
},1000);*/

setInterval(function(){
  if (clickerFriends >=1){
    i += (1*clickerFriends);
    document.getElementById("herobutton").innerHTML=i;
  }
}, 1000);

setInterval(function(){
  if (allTimeI === 1){
  document.getElementById("clicksmade").innerHTML= "You've clicked " + allTimeI + " time.";
}
  else if (allTimeI >1){
  document.getElementById("clicksmade").innerHTML= "You've clicked " + allTimeI + " times.";
  }
},500);

setInterval(function(){
  timePlaying += 1;
  if (timePlaying <60){
  document.getElementById("timeplayed").innerHTML= "You've played for " + timePlaying + " seconds.";
  }
  else if (timePlaying >=60 && timePlaying <= 89){
  document.getElementById("timeplayed").innerHTML= "You've played for " + Math.round(timePlaying/60) + " minute.";
  }
  else if (timePlaying >=90 && timePlaying <= 3599){
  document.getElementById("timeplayed").innerHTML= "You've played for " + Math.round(timePlaying/60) + " minutes.";
  }
  else if (timePlaying >=3600 && timePlaying <= 5399){
  document.getElementById("timeplayed").innerHTML= "You've played for " + Math.round(timePlaying/3600) + " hour.";
  }
  else if (timePlaying >=5400){
  document.getElementById("timeplayed").innerHTML= "You've played for " + Math.round(timePlaying/3600) + " hours.";
  }
},1000);

/*Achievements*/

setInterval(function(){
if (i >= 100000 && achievementOne === false){

  var element = document.getElementById("pointsacheivement");
  element.classList.add("completeachievement");
  alert("Achievement unlocked! You hit 100000 points!");
  achievementOne = true;
}
},10000);

setInterval(function(){
if (powerLevel >= 20 && achievementTwo === false){

  var element = document.getElementById("poweracheivement");
  element.classList.add("completeachievement");
  alert("Achievement unlocked! You reached a Power Level of 20!");
  achievementTwo = true;
}
},10000);

setInterval(function(){
if (clickerFriends >= 20 && achievementThree === false){

  var element = document.getElementById("clickeracheivement");
  element.classList.add("completeachievement");
  alert("Achievement unlocked! You have 20 invisible clickers!");
  achievementThree = true;
}
},10000);

/* Acheivement Tracker.
Return to this later. There is for sure a better way to count achievements.*/

setInterval(function(){
if (achievementOne === true && achievementTwo === false && achievementThree === false){
  document.getElementById("achievmentcounter").innerHTML="Achievements Unlocked: 1/3";
}
},10000);

setInterval(function(){
if (achievementOne === false && achievementTwo === true && achievementThree === false){
  document.getElementById("achievmentcounter").innerHTML="Achievements Unlocked: 1/3";
}
},10000);

setInterval(function(){
if (achievementOne === false && achievementTwo === false && achievementThree === true){
  document.getElementById("achievmentcounter").innerHTML="Achievements Unlocked: 1/3";
}
},10000);

setInterval(function(){
if (achievementOne === true && achievementTwo === true && achievementThree === false){
  document.getElementById("achievmentcounter").innerHTML="Achievements Unlocked: 2/3";
}
},10000);

setInterval(function(){
if (achievementOne === false && achievementTwo === true && achievementThree === true){
  document.getElementById("achievmentcounter").innerHTML="Achievements Unlocked: 2/3";
}
},10000);

setInterval(function(){
if (achievementOne === true && achievementTwo === false && achievementThree === true){
  document.getElementById("achievmentcounter").innerHTML="Achievements Unlocked: 2/3";
}
},10000);

setInterval(function(){
if (achievementOne === true && achievementTwo === true && achievementThree === true && achievementsMax === false){
  document.getElementById("achievmentcounter").innerHTML="Achievements Unlocked: 3/3";
  var element = document.getElementById("achievmentcounter");
  element.classList.add("completeachievement");
  var element = document.getElementById("herobutton");
  element.classList.add("herobutton100k");
  var element = document.getElementById("upbutton");
  element.classList.add("upbutton20");
  var element = document.getElementById("clickerbutton");
  element.classList.add("friendbutton20");
  achievementsMax = true;
  alert("You completed every achievement! Enjoy this rare pastel yellow button set!");
}
},10000);

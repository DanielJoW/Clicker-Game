/* Key Variables */

var i = 0;
var powerLevel = 1;
var clickerFriends = 0;
var powerCost = 100;
var friendCost = 100;
var bonusCost = 3333;
var bonusBarrier = false;
var achievementCount = 0;
var achievementOne = false;
var achievementTwo = false;
var achievementThree = false;
var achievementFour = false;
var achievementsMax = false;
var allTimeI = 0;
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
    powerCost = Math.round(powerCost*1.2);
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
    friendCost = Math.round(friendCost*1.2);
    document.getElementById("clickeramount").innerHTML= "Invisible Clickers: " + clickerFriends;
  }
  else {
    alert("You need " + friendCost + " points to enlist a Clicker Friend!")
  }
}

function multiplier(){
  if (i>=bonusCost){
  document.getElementById("herobutton").innerHTML= i -= bonusCost;
  bonusBarrier = true;
  bonusCost = bonusCost*3;
  var bonusTimer = timePlaying;
  var bonusPower = powerLevel*3
  var bonusClicks = clickerFriends*3
  powerLevel = powerLevel + bonusPower;
  clickerFriends = clickerFriends + bonusClicks;
  setInterval(function(){
    if (bonusTimer>=(timePlaying-30)){
      var element = document.getElementById("gridcontainer");
      element.classList.add("gridcontainermultiplied");
      var element = document.getElementById("herobutton");
      element.classList.add("gridcontainermultiplied");
      var element = document.getElementById("upbutton");
      element.classList.add("gridcontainermultiplied");
      var element = document.getElementById("clickerbutton");
      element.classList.add("gridcontainermultiplied");
      var element = document.getElementById("multibutton");
      element.classList.add("gridcontainermultiplied");
      document.getElementById("clickeramount").innerHTML= "Invisible Clickers: " + clickerFriends;
      document.getElementById("playerlevel").innerHTML= "Power Level: " + powerLevel;
    }
    else if (bonusTimer===(timePlaying-31)){
      powerLevel = powerLevel - bonusPower;
      clickerFriends = clickerFriends - bonusClicks;
      bonusBarrier = false;
      var element = document.getElementById("gridcontainer");
      element.classList.remove("gridcontainermultiplied");
      var element = document.getElementById("herobutton");
      element.classList.remove("gridcontainermultiplied");
      var element = document.getElementById("upbutton");
      element.classList.remove("gridcontainermultiplied");
      var element = document.getElementById("clickerbutton");
      element.classList.remove("gridcontainermultiplied");
      var element = document.getElementById("multibutton");
      element.classList.remove("gridcontainermultiplied");
      document.getElementById("clickeramount").innerHTML= "Invisible Clickers: " + clickerFriends;
      document.getElementById("playerlevel").innerHTML= "Power Level: " + powerLevel;
    }
  }, 1000);
}
else {
  alert("You need " + bonusCost + " points to triple your power!");
}
}

/*Naming Function with Easter Eggs */

window.onload = function namePlayer(){
  var playerName = window.prompt("Please enter your name!");
  if (playerName==="Dan" || playerName==="dan"){
  alert("You share a name with the creator. Enjoy a free power level.");
  powerLevel += 1;
  document.getElementById("playerlevel").innerHTML= "Power Level: " + powerLevel;
  document.getElementById("playertitle").innerHTML= playerName+"'s Big Clicker";
  document.getElementById("startbonus").innerHTML= "You got the Creator starting bonus.";
  }
  else if (playerName==="" || playerName===null || playerName==="Coward" || playerName==="coward") {
  document.getElementById("playertitle").innerHTML= "Coward's Big Clicker"
  alert("The coward clicks not for themselves.");
  clickerFriends += 1;
  powerLevel -= 1;
  document.getElementById("playerlevel").innerHTML= "Power Level: " + powerLevel;
  document.getElementById("clickeramount").innerHTML= "Invisible Clickers: " + clickerFriends;
  document.getElementById("startbonus").innerHTML= "You got the Coward starting bonus.";
  }
  else if (playerName==="Auston Matthews" || playerName==="AM34" || playerName==="am34") {
  document.getElementById("playertitle").innerHTML= playerName+"'s Big Clicker"
  alert("My hero, my friend, my son.");
  clickerFriends += 5;
  powerLevel += 4;
  document.getElementById("playerlevel").innerHTML= "Power Level: " + powerLevel;
  document.getElementById("clickeramount").innerHTML= "Invisible Clickers: " + clickerFriends;
  document.getElementById("startbonus").innerHTML= "You got the AM34 starting bonus.";
  }

  else if (playerName==="Orteil" || playerName==="orteil") {
  document.getElementById("playertitle").innerHTML= playerName+"'s Cookie Clicker"
  alert("But that's not you, is it?");
  window.open('http://orteil.dashnet.org/cookieclicker/', '_blank');
  document.getElementById("startbonus").innerHTML= "You got the Cookie starting bonus.";
  }
  else{
  document.getElementById("playertitle").innerHTML= playerName+"'s Big Clicker";
}
}

/* Functions that must repeat constantly */

setInterval(function(){
  if (i > 0){
  document.getElementById("clicktotaltitle").innerHTML= "The Big Clicker ("+i+")";
}},3000);

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
  document.getElementById("powerBuy").innerHTML= "Your points per click equals your Power Level. "+powerCost+" more points to power up!";
},1000);

setInterval(function(){
  document.getElementById("friendBuy").innerHTML= "Each Invisible Clicker clicks once per second. "+friendCost+" points to enlist another!";
},1000);

setInterval(function(){
  document.getElementById("multiBuy").innerHTML= "Adds 3 to each click bonus for 30 seconds. The price triples after each use. "+bonusCost+" points needed!";
},1000);

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
  achievementCount +=1;
  achievementOne = true;
}
},10000);

setInterval(function(){
if (powerLevel >= 20 && achievementTwo === false && bonusBarrier === false){
  var element = document.getElementById("poweracheivement");
  element.classList.add("completeachievement");
  alert("Achievement unlocked! You reached a Power Level of 20!");
  achievementCount +=1;
  achievementTwo = true;
}
},10000);

setInterval(function(){
if (clickerFriends >= 20 && achievementThree === false && bonusBarrier === false){
  var element = document.getElementById("clickeracheivement");
  element.classList.add("completeachievement");
  alert("Achievement unlocked! You have 20 invisible clickers!");
  achievementCount +=1;
  achievementThree = true;
}
},10000);

setInterval(function(){
  if (allTimeI >= 10000 && achievementFour === false){
    var element = document.getElementById("clicksacheivement");
    element.classList.add("completeachievement");
    alert("Achievement unlocked! You have clicked 10,000 times!");
    achievementCount +=1;
    achievementFour = true;
  }
})

/* Acheivement Tracker.*/

setInterval(function(){
  if (achievementCount===1){
  document.getElementById("achievmentcounter").innerHTML="Achievements Unlocked: 1/4";
  }
  else if (achievementCount===2) {
  document.getElementById("achievmentcounter").innerHTML="Achievements Unlocked: 2/4";
  }
  else if (achievementCount===3) {
  document.getElementById("achievmentcounter").innerHTML="Achievements Unlocked: 3/4";
  }
  else if (achievementCount===4 && achievementsMax===false) {
  document.getElementById("achievmentcounter").innerHTML="Achievements Unlocked: 4/4";
  var element = document.getElementById("achievmentcounter");
  element.classList.add("completeachievement");
  var element2 = document.getElementById("herobutton");
  element2.classList.add("finalbuttons");
  var element3 = document.getElementById("upbutton");
  element3.classList.add("finalbuttons");
  var element4 = document.getElementById("clickerbutton");
  element4.classList.add("finalbuttons");
  var element5 = document.getElementById("multibutton");
  element5.classList.add("finalbuttons");
  achievementsMax = true;
  alert("You completed every achievement! Enjoy this rare pastel yellow button set!");
  }
},1000);

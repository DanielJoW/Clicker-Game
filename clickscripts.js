/* Key Variables */

var i = 0;
var powerLevel = 1;
var clickerFriends = 0;
var powerCost = 100;
var friendCost = 100;
var bonusCost = 333;
var bonusBarrier = false;
var bonusOnBonus = 0;
var achievementCount = 0;
var achievementOne = false;
var achievementTwo = false;
var achievementThree = false;
var achievementFour = false;
var achievementFive = false;
var achievementsMax = false;
var allTimeI = 0;
var allTimePoints = 0;
var timePlaying = 0;

/* Key Functions */

function increment(){
  i += (1*powerLevel);
  allTimePoints += (1*powerLevel);
  allTimeI += 1;
  document.getElementById("herobutton").innerHTML=i;
  document.getElementById("totalpoints").innerHTML="You earned " + allTimePoints + " points all-time!";
  if (i >= 100000 && achievementOne === false){
    var element = document.getElementById("pointsacheivement");
    element.classList.add("completeachievement");
    alert("Achievement unlocked! You hit 100000 points!");
    achievementCount +=1;
    achievementOne = true;
  }
  if (allTimeI >= 10000 && achievementFour === false){
    var element = document.getElementById("clicksacheivement");
    element.classList.add("completeachievement");
    alert("Achievement unlocked! You have clicked 10,000 times!");
    achievementCount +=1;
    achievementFour = true;
  }
  if (allTimePoints >= 500000 && achievementFive === false){
    var element = document.getElementById("totalpointsacheivement");
    element.classList.add("completeachievement");
    alert("Achievement unlocked! You have reached 500,000 all-time points!");
    achievementCount +=1;
    achievementFive = true;
  }
  if (allTimeI === 1){
  document.getElementById("clicksmade").innerHTML= "You clicked " + allTimeI + " time.";
  }
  else {
  document.getElementById("clicksmade").innerHTML= "You clicked " + allTimeI + " times.";
  }
}

function upgrade(){
  if (i>=powerCost){
    document.getElementById("herobutton").innerHTML= i -= powerCost;
    powerLevel += 1;
    powerCost = Math.round(powerCost*1.3);
    document.getElementById("playerlevel").innerHTML= "Power Level: " + powerLevel;
    }
  else {
    alert("You need " + powerCost + " points to increase your Power Level!");
  }
  if (powerLevel >= 20 && achievementTwo === false && bonusBarrier === false){
    var element = document.getElementById("poweracheivement");
    element.classList.add("completeachievement");
    alert("Achievement unlocked! You reached a Power Level of 20!");
    achievementCount +=1;
    achievementTwo = true;
  }
}

function buyClicker(){
  if (i>=friendCost){
    document.getElementById("herobutton").innerHTML= i -= friendCost;
    clickerFriends += 1;
    friendCost = Math.round(friendCost*1.3);
    document.getElementById("clickeramount").innerHTML= "Invisible Clickers: " + clickerFriends;
  }
  else {
    alert("You need " + friendCost + " points to enlist an Invisible Clicker!")
  }
  if (clickerFriends >= 20 && achievementThree === false && bonusBarrier === false){
    var element = document.getElementById("clickeracheivement");
    element.classList.add("completeachievement");
    alert("Achievement unlocked! You have 20 invisible clickers!");
    achievementCount +=1;
    achievementThree = true;
  }
}

function multiplier(){
  if (i>=bonusCost && bonusOnBonus < 2){
  document.getElementById("herobutton").innerHTML= i -= bonusCost;
  bonusBarrier = true;
  bonusOnBonus+=1;
  bonusCost = bonusCost*3;
  var bonusTimer = timePlaying;
  var bonusPower = powerLevel*3
  var bonusClicks = clickerFriends*3
  powerLevel = powerLevel + bonusPower;
  clickerFriends = clickerFriends + bonusClicks;
  setInterval(function(){
    if (bonusTimer>=(timePlaying-30)){
      var x = document.getElementsByClassName("willglow");
      var y;
      for (y=0; y < x.length; y++){
      x[y].classList.add("gridcontainermultiplied");
      }
      document.getElementById("clickeramount").innerHTML= "Invisible Clickers: " + clickerFriends;
      document.getElementById("playerlevel").innerHTML= "Power Level: " + powerLevel;
    }
    else if (bonusTimer===(timePlaying-31)){
      powerLevel = powerLevel - bonusPower;
      clickerFriends = clickerFriends - bonusClicks;
      bonusBarrier = false;
      bonusOnBonus = 0;
      var x = document.getElementsByClassName("willglow");
      var y;
      for (y=0; y < x.length; y++){
      x[y].classList.remove("gridcontainermultiplied");
      }
      document.getElementById("clickeramount").innerHTML= "Invisible Clickers: " + clickerFriends;
      document.getElementById("playerlevel").innerHTML= "Power Level: " + powerLevel;
    }
  }, 1000);
}
else if (bonusOnBonus === 2){
  alert("You can only bonus your bonus once! Don't get crazy!");
}
else {
  alert("You need " + bonusCost + " points to triple your power!");
}
}

/* Time Played Counter, Invisible Clicker Incrementing, Tooltip Cost Updates, Title Updates, and Achievement Tracker */

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
  if (clickerFriends >=1){
    i += (1*clickerFriends);
    allTimePoints += (1*clickerFriends);
    document.getElementById("herobutton").innerHTML=i;
    document.getElementById("totalpoints").innerHTML="You earned " + allTimePoints + " points all-time!";
    if (allTimePoints >= 500000 && achievementFive === false){
      var element = document.getElementById("totalpointsacheivement");
      element.classList.add("completeachievement");
      alert("Achievement unlocked! You have reached 500,000 all-time points!");
      achievementCount +=1;
      achievementFive = true;
    }
    if (i >= 100000 && achievementOne === false){
      var element = document.getElementById("pointsacheivement");
      element.classList.add("completeachievement");
      alert("Achievement unlocked! You hit 100000 points!");
      achievementCount +=1;
      achievementOne = true;
    }
  }
  document.getElementById("powerBuy").innerHTML= "Your points per click equals your Power Level. "+powerCost+" more points to power up!";
  document.getElementById("friendBuy").innerHTML= "Each Invisible Clicker clicks once per second. "+friendCost+" points to enlist another!";
  document.getElementById("multiBuy").innerHTML= "Adds 3 to each click bonus for 30 seconds. The price triples after each use. "+bonusCost+" points needed!";
  document.getElementById("achievmentcounter").innerHTML="Achievements Unlocked: "+achievementCount+"/5";
  if (achievementCount===5 && achievementsMax===false) {
  var element = document.getElementById("achievmentcounter");
  element.classList.add("completeachievement");
  var x = document.getElementsByClassName("achievementdone");
  var y;
  for (y=0; y < x.length; y++){
  x[y].classList.add("finalbuttons");
  }
  achievementsMax = true;
  alert("You completed every achievement! Enjoy this rare pastel yellow button set!");
  }
  if (i > 0){
  document.getElementById("clicktotaltitle").innerHTML= "The Big Clicker ("+i+")";
  }
},1000);

/*Naming Function with Easter Eggs */

window.onload = function namePlayer(){
  var playerName = window.prompt("Please enter your name!");
  document.getElementById("playertitle").innerHTML= playerName+"'s Big Clicker";
  if (playerName==="Dan" || playerName==="dan"){
  alert("You share a name with the creator. Enjoy a free power level.");
  powerLevel += 1;
  document.getElementById("startbonus").innerHTML= "You got the Creator starting bonus.";
  }
  else if (playerName==="" || playerName===null || playerName==="Coward" || playerName==="coward") {
  document.getElementById("playertitle").innerHTML= "Coward's Big Clicker"
  alert("The coward clicks not for themselves.");
  clickerFriends += 1;
  powerLevel -= 1;
  document.getElementById("startbonus").innerHTML= "You got the Coward starting bonus.";
  }
  else if (playerName==="Auston Matthews" || playerName==="AM34" || playerName==="am34") {
  alert("My hero, my friend, my son.");
  clickerFriends += 5;
  powerLevel += 4;
  document.getElementById("startbonus").innerHTML= "You got the AM34 starting bonus.";
  }
  else if (playerName==="Orteil" || playerName==="orteil") {
  document.getElementById("playertitle").innerHTML= playerName+"'s Cookie Clicker"
  alert("But that's not you, is it?");
  window.open('http://orteil.dashnet.org/cookieclicker/', '_blank');
  document.getElementById("startbonus").innerHTML= "You got the Cookie starting bonus.";
  }
document.getElementById("playerlevel").innerHTML= "Power Level: " + powerLevel;
document.getElementById("clickeramount").innerHTML= "Invisible Clickers: " + clickerFriends;
}

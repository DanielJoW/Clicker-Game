/* Key Variables */


var i = 0;
var powerLevel = 1;
var clickerFriends = 0;
var clickEfficiency = 1;
var powerCost = 100;
var powerMod = 1.3;
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
var endGame = 0;

/* Returning Players */

  var pointsCheck = localStorage.getItem("storedPoints");
  if (pointsCheck !== null){
  var i = JSON.parse(pointsCheck);
  }

  var powerlvlCheck = localStorage.getItem("storedPower");
  if (powerlvlCheck !== null){
  var powerLevel = JSON.parse(powerlvlCheck);
  }

  var powercostCheck = localStorage.getItem("storedPcost");
  if (powercostCheck !== null){
  var powerCost = JSON.parse(powercostCheck);
  }

  var clickfriendCheck = localStorage.getItem("storedFriends");
  if (clickfriendCheck !== null){
  var clickerFriends = JSON.parse(clickfriendCheck);
  }

  var clickcostCheck = localStorage.getItem("storedFcost");
  if (clickcostCheck !== null){
  var friendCost = JSON.parse(clickcostCheck);
  }

  var bonuscostCheck = localStorage.getItem("storedBcost");
  if (bonuscostCheck !== null){
  var bonusCost = JSON.parse(bonuscostCheck);
  }

  var efficiencyCheck = localStorage.getItem("storedEfficiency");
  if (efficiencyCheck !== null){
  var clickEfficiency = JSON.parse(efficiencyCheck);
  }

  var pmodCheck = localStorage.getItem("storedPmod");
  if (pmodCheck !== null){
  var powerMod = JSON.parse(pmodCheck);
  }

  var clicksCheck = localStorage.getItem("storedClicks");
  if (clicksCheck !== null){
  var allTimeI = JSON.parse(clicksCheck);
  }

  var highscoreCheck = localStorage.getItem("storedHighscore");
  if (highscoreCheck !== null){
  var allTimePoints = JSON.parse(highscoreCheck);
  }

  var acountCheck = localStorage.getItem("storedAcount");
  if (acountCheck !== null){
  var achievementCount = JSON.parse(acountCheck);
  }

  var aoneCheck = localStorage.getItem("storedAone");
  if (aoneCheck !== null){
  var achievementOne = JSON.parse(aoneCheck);
  }

  var atwoCheck = localStorage.getItem("storedAtwo");
  if (atwoCheck !== null){
  var achievementTwo = JSON.parse(atwoCheck);
  }

  var athreeCheck = localStorage.getItem("storedAthree");
  if (athreeCheck !== null){
  var achievementThree = JSON.parse(athreeCheck);
  }

  var afourCheck = localStorage.getItem("storedAfour");
  if (afourCheck !== null){
  var achievementFour = JSON.parse(afourCheck);
  }

  var afiveCheck = localStorage.getItem("storedAfive");
  if (afiveCheck !== null){
  var achievementFive = JSON.parse(afiveCheck);
  }

  var amaxCheck = localStorage.getItem("storedAmax");
  if (amaxCheck !== null){
  var achievementsMax = JSON.parse(amaxCheck);
  }

  var timeCheck = localStorage.getItem("storedTime");
  if (timeCheck !== null) {
    var timePlaying = JSON.parse(timeCheck);
  }

  var endGameCheck = localStorage.getItem("storedEndGame");
  if (endGameCheck !== null) {
    var endGame = JSON.parse(endGameCheck);
  }


/* Key Functions */

/* Increment & Achievements*/

function increment(){
  i += (1*powerLevel);
  allTimePoints += (1*powerLevel);
  allTimeI += 1;
  document.getElementById("herobutton").innerHTML=i;
  document.getElementById("totalpoints").innerHTML="You earned " + allTimePoints + " points all-time.";
  if (i >= 100000 && achievementOne === false){
    var element = document.getElementById("pointsacheivement");
    element.classList.add("completeachievement");
    alert("Achievement unlocked! You hit 100000 points!");
    achievementCount +=1;
    achievementOne = true;
  }
  if (allTimeI >= (10000+(111*endGame)) && achievementFour === false){
    var element = document.getElementById("clicksacheivement");
    element.classList.add("completeachievement");
    alert("Achievement unlocked! You have clicked " + (10000+(111*endGame)) + " times!");
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

/* Power Level Increase & Achievement*/

function upgrade(){
  if (i>=powerCost){
    document.getElementById("herobutton").innerHTML= i -= powerCost;
    powerLevel += 1;
    powerCost = Math.round(powerCost*powerMod);
    document.getElementById("playerlevel").innerHTML= "Power Level: " + powerLevel;
    }
  else {
    alert("You need " + powerCost + " points to increase your Power Level!");
  }
  if (powerLevel >= 20 && achievementTwo === false && bonusBarrier === false){
    var element = document.getElementById("poweracheivement");
    element.classList.add("completeachievement");
    alert("Achievement unlocked! You reached a Power Level of 20! Each power level is now 15% cheaper.");
    powerMod-=0.15;
    achievementCount +=1;
    achievementTwo = true;
  }
}

/* Enlist Invisible Clicker & Achievement*/

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
    alert("Achievement unlocked! You have 20 invisible clickers! They now click twice per second.");
    achievementCount +=1;
    clickEfficiency +=1;
    achievementThree = true;
  }
}

/* Point Multiplier */

function multiplier(){
  if (i>=bonusCost && bonusOnBonus < 2){
  document.getElementById("herobutton").innerHTML= i -= bonusCost;
  bonusBarrier = true;
  bonusOnBonus+=1;
  bonusCost = bonusCost*3;
  var bonusTimer = timePlaying;
  var bonusPower = powerLevel*2
  var bonusClicks = clickerFriends*2
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

  /* Time Counter */

  timePlaying += 1;
  if (timePlaying <60){
  document.getElementById("timeplayed").innerHTML= "You've played for " + timePlaying + " seconds.";
  }
  else if (timePlaying >=60 && timePlaying <= 119){
  document.getElementById("timeplayed").innerHTML= "You've played for " + Math.round(timePlaying/60) + " minute.";
  }
  else if (timePlaying >=119 && timePlaying <= 3599){
  document.getElementById("timeplayed").innerHTML= "You've played for " + Math.round(timePlaying/60) + " minutes.";
  }
  else if (timePlaying >=3600 && timePlaying <= 5399){
  document.getElementById("timeplayed").innerHTML= "You've played for " + Math.round(timePlaying/3600) + " hour.";
  }
  else if (timePlaying >=5400){
  document.getElementById("timeplayed").innerHTML= "You've played for " + Math.round(timePlaying/3600) + " hours.";
  }

  /* Invisible Clicker Increment*/

  if (clickerFriends >=1){
    i += (clickEfficiency*clickerFriends);
    allTimePoints += (clickEfficiency*clickerFriends);
    document.getElementById("herobutton").innerHTML=i;
    document.getElementById("totalpoints").innerHTML="You earned " + allTimePoints + " points all-time.";
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

  /* Tooltip Updater */

  document.getElementById("powerBuy").innerHTML= "Your points per click equals your Power Level. "+powerCost+" more points to power up!";
  document.getElementById("friendBuy").innerHTML= "Each Invisible Clicker clicks once per second. "+friendCost+" points to enlist another!";
  document.getElementById("multiBuy").innerHTML= "Triples everything for 30 seconds. The price triples after each use. "+bonusCost+" points needed!";

  /*Achievement Tracker*/

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

setInterval(function(){

/* Save Progress */

if (bonusBarrier === false) {
  var storedPoints = i;
  var localPoints = JSON.stringify(storedPoints);
  localStorage.setItem("storedPoints",localPoints);

  var storedPower = powerLevel;
  var localPower = JSON.stringify(storedPower);
  localStorage.setItem("storedPower",localPower);

  var storedFriends = clickerFriends;
  var localFriends = JSON.stringify(storedFriends);
  localStorage.setItem("storedFriends",localFriends);

  var storedEfficiency = clickEfficiency;
  var localEfficiency = JSON.stringify(storedEfficiency);
  localStorage.setItem("storedEfficiency",localEfficiency);

  var storedPcost = powerCost;
  var localPcost = JSON.stringify(storedPcost);
  localStorage.setItem("storedPcost",localPcost);

  var storedFcost = friendCost;
  var localFcost = JSON.stringify(storedFcost);
  localStorage.setItem("storedFcost",localFcost);

  var storedBcost = bonusCost;
  var localBcost = JSON.stringify(storedBcost);
  localStorage.setItem("storedBcost",localBcost);

  var storedPmod = powerMod;
  var localPmod = JSON.stringify(storedPmod);
  localStorage.setItem("storedPmod",localPmod);

  var storedClicks = allTimeI;
  var localClicks = JSON.stringify(storedClicks);
  localStorage.setItem("storedClicks",localClicks);

  var storedHighscore = allTimePoints;
  var localHighscore = JSON.stringify(storedHighscore);
  localStorage.setItem("storedHighscore",localHighscore);

  var storedAcount = achievementCount;
  var localAcount = JSON.stringify(storedAcount);
  localStorage.setItem("storedAcount",localAcount);

  var storedAone = achievementOne;
  var localAone = JSON.stringify(storedAone);
  localStorage.setItem("storedAone",localAone);

  var storedAtwo = achievementTwo;
  var localAtwo = JSON.stringify(storedAtwo);
  localStorage.setItem("storedAtwo",localAtwo);

  var storedAthree = achievementThree;
  var localAthree = JSON.stringify(storedAthree);
  localStorage.setItem("storedAthree",localAthree);

  var storedAfour = achievementFour;
  var localAfour = JSON.stringify(storedAfour);
  localStorage.setItem("storedAfour",localAfour);

  var storedAfive = achievementFive;
  var localAfive = JSON.stringify(storedAfive);
  localStorage.setItem("storedAfive",localAfive);

  var storedAmax = achievementsMax;
  var localAmax = JSON.stringify(storedAmax);
  localStorage.setItem("storedAmax",localAmax);


  var storedTime = timePlaying;
  var localTime = JSON.stringify(storedTime);
  localStorage.setItem("storedTime",localTime);
  }

},30000);

/*Naming Function*/

function namePlayer(){
  var nameCheck = localStorage.getItem("storedName");
  if (nameCheck === null){
  var playerName = window.prompt("Please enter your name!");
  var satanCheck = localStorage.getItem("storedEndGame");
  var satanTrue = JSON.parse(satanCheck);
  if (satanTrue === 6){
    var element = document.getElementById("wholescreen");
    element.classList.add("finalform");
    var playerName = "ʞƆI˥Ɔ";
    document.getElementById("startbonus").innerHTML= "You got the ƎW˥˥Iʞ staring bonus.";
  }
  document.getElementById("playertitle").innerHTML= playerName+"'s Big Clicker";
  var storedName = playerName;
  var localName = JSON.stringify(storedName);
  localStorage.setItem("storedName",localName);
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
document.getElementById("clicksacheivement").innerHTML="Reach " + (10000+(111*endGame)) + " clicks all-time."
}

/* If there's a name already */

if (typeof nameCheck === "string"){
  var playerName = JSON.parse(nameCheck);
  alert("Welcome back " + playerName + "!");
  document.getElementById("herobutton").innerHTML=i;
  document.getElementById("playertitle").innerHTML= playerName+"'s Big Clicker";
  if (playerName==="Dan" || playerName==="dan"){
  document.getElementById("startbonus").innerHTML= "You got the Creator starting bonus.";
  }
  else if (playerName==="" || playerName===null || playerName==="Coward" || playerName==="coward") {
  document.getElementById("playertitle").innerHTML= "Coward's Big Clicker"
  document.getElementById("startbonus").innerHTML= "You got the Coward starting bonus.";
  }
  else if (playerName==="Auston Matthews" || playerName==="AM34" || playerName==="am34") {
  document.getElementById("startbonus").innerHTML= "You got the AM34 starting bonus.";
  }
  else if (playerName==="Orteil" || playerName==="orteil") {
  document.getElementById("playertitle").innerHTML= playerName+"'s Cookie Clicker"
  document.getElementById("startbonus").innerHTML= "You got the Cookie starting bonus.";
  }
  document.getElementById("playerlevel").innerHTML= "Power Level: " + powerLevel;
  document.getElementById("clickeramount").innerHTML= "Invisible Clickers: " + clickerFriends;
  document.getElementById("clicksmade").innerHTML= "You clicked " + allTimeI + " times.";
  document.getElementById("totalpoints").innerHTML="You earned " + allTimePoints + " points all-time.";
  document.getElementById("clicksacheivement").innerHTML="Reach " + (10000+(111*endGame)) + " clicks all-time."
  var aOneStyleCheck = localStorage.getItem("storedAone");
  var aOneTrue = JSON.parse(aOneStyleCheck);
  if (aOneTrue === true){
    var element = document.getElementById("pointsacheivement");
    element.classList.add("completeachievement");
    }
  var aTwoStyleCheck = localStorage.getItem("storedAtwo");
  var aTwoTrue = JSON.parse(aTwoStyleCheck);
  if (aTwoTrue === true){
    var element = document.getElementById("poweracheivement");
    element.classList.add("completeachievement");
  }
  var aThreeStyleCheck = localStorage.getItem("storedAthree");
  var aThreeTrue = JSON.parse(aThreeStyleCheck);
  if (aThreeTrue === true){
    var element = document.getElementById("clickeracheivement");
    element.classList.add("completeachievement");
  }
  var aFourStyleCheck = localStorage.getItem("storedAfour");
  var aFourTrue = JSON.parse(aFourStyleCheck);
  if (aFourTrue === true){
    var element = document.getElementById("clicksacheivement");
    element.classList.add("completeachievement");
  }
  var aFiveStyleCheck = localStorage.getItem("storedAfive");
  var aFiveTrue = JSON.parse(aFiveStyleCheck);
  if (aFiveTrue === true){
    var element = document.getElementById("totalpointsacheivement");
    element.classList.add("completeachievement");
  }
  var satanCheck = localStorage.getItem("storedEndGame");
  var satanTrue = JSON.parse(satanCheck);
  if (satanTrue === 6){
    var element = document.getElementById("wholescreen");
    element.classList.add("finalform");
    document.getElementById("startbonus").innerHTML= "You got the ƎW˥˥Iʞ staring bonus.";

  }
  var aMaxStyleCheck = localStorage.getItem("storedAmax");
  var aMaxTrue = JSON.parse(aMaxStyleCheck);
  if (aMaxTrue === true) {
  var element = document.getElementById("achievmentcounter");
  element.classList.add("completeachievement");
  var x = document.getElementsByClassName("achievementdone");
  var y;
  for (y=0; y < x.length; y++){
  x[y].classList.add("finalbuttons");
  }
  }
}
}

/* Modal Attempt */

function openModal(){
  var modal = document.getElementById("simpleModal");
  modal.style.display="block";
}

function closeModal(){
  var modal = document.getElementById("simpleModal");
  modal.style.display="none";
}

/* Background Changer */

function backgroundSwitch(){
  document.body.style.backgroundImage = "url('newbackground.jpg')";
}

function backgroundSwitch2(){
  document.body.style.backgroundImage = "url('newbackground2.jpg')";
}

function backgroundSwitch3(){
  document.body.style.backgroundImage = "url('newbackground3.jpg')";
}

/* Reset */

function resetGame(){
  var gameKill = window.prompt("Enter RELEASE ME to reset your progress!");
  if (gameKill === "RELEASE ME" && achievementsMax === true && endGame < 5){
    alert("You are one step closer.")
    localStorage.removeItem("storedPoints");
    localStorage.removeItem("storedName");
    localStorage.removeItem("storedPower");
    localStorage.removeItem("storedFriends");
    localStorage.removeItem("storedEfficiency");
    localStorage.removeItem("storedPcost");
    localStorage.removeItem("storedFcost");
    localStorage.removeItem("storedBcost");
    localStorage.removeItem("storedPmod");
    localStorage.removeItem("storedClicks");
    localStorage.removeItem("storedHighscore");
    localStorage.removeItem("storedAcount");
    localStorage.removeItem("storedAone");
    localStorage.removeItem("storedAtwo");
    localStorage.removeItem("storedAthree");
    localStorage.removeItem("storedAfour");
    localStorage.removeItem("storedAfive");
    localStorage.removeItem("storedAmax");
    localStorage.removeItem("storedTime");
    localStorage.removeItem("storedPoints");
    endGame += 1;
    var storedEndGame = endGame;
    var localEndGame = JSON.stringify(storedEndGame);
    localStorage.setItem("storedEndGame",localEndGame);
    location.reload();
  }
  else if (gameKill === "RELEASE ME" && achievementsMax === true && endGame === 5){
    alert("It has begun.");
    localStorage.removeItem("storedPoints");
    localStorage.removeItem("storedName");
    localStorage.removeItem("storedPower");
    localStorage.removeItem("storedFriends");
    localStorage.removeItem("storedEfficiency");
    localStorage.removeItem("storedPcost");
    localStorage.removeItem("storedFcost");
    localStorage.removeItem("storedBcost");
    localStorage.removeItem("storedPmod");
    localStorage.removeItem("storedClicks");
    localStorage.removeItem("storedHighscore");
    localStorage.removeItem("storedAcount");
    localStorage.removeItem("storedAone");
    localStorage.removeItem("storedAtwo");
    localStorage.removeItem("storedAthree");
    localStorage.removeItem("storedAfour");
    localStorage.removeItem("storedAfive");
    localStorage.removeItem("storedAmax");
    localStorage.removeItem("storedTime");
    localStorage.removeItem("storedPoints");
    endGame += 1;
    var storedEndGame = endGame;
    var localEndGame = JSON.stringify(storedEndGame);
    localStorage.setItem("storedEndGame",localEndGame);
    location.reload();
  }
  else if (gameKill === "RELEASE ME" && achievementsMax === true && endGame === 6){
    alert("It is over.");
    localStorage.clear();
    location.reload();
  }
  else if (gameKill === "RELEASE ME" && achievementsMax === false){
    alert("Very well.");
    localStorage.clear();
    location.reload();
  }
  else {
    alert("You have chosen to continue.")
  }
}

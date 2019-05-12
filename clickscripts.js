
var i = 0;
var powerLevel = 1;
var clickerFriends = 0;
var powerCost = 100;
var friendCost = 100;

window.onload = function namePlayer(){
  var playerName = window.prompt("Please enter your name!");
  if (playerName==="Dan"){
  alert("You share a name with the creator. Enjoy a free power level.");
  powerLevel += 1;
  document.getElementById("playerlevel").innerHTML= "Power Level: " + powerLevel;
  document.getElementById("playertitle").innerHTML= playerName+"'s Big Clicker";
  }
  else {
  document.getElementById("playertitle").innerHTML= playerName+"'s Big Clicker";
}}

setInterval(function(){
  document.getElementById("clicktotaltitle").innerHTML= "The Big Clicker ("+i+")";
},5000);

setInterval(function(){
  document.getElementById("powerBuy").innerHTML= "Your points per click is equal to your Power Level. You need "+powerCost+" more points to power up!";
},1000);

setInterval(function(){
  document.getElementById("friendBuy").innerHTML= "Each Invisible Clicker clicks once per second. You need "+friendCost+" points to enlist another!";
},1000);

setInterval(function(){
  if (clickerFriends >=1){
    i += (1*clickerFriends);
    document.getElementById("bigcounter").innerHTML=i;
  }
}, 1000);

function increment(){
  i += (1*powerLevel);
  document.getElementById("bigcounter").innerHTML=i;
}

function upgrade(){
  if (i>=powerCost){
    document.getElementById("bigcounter").innerHTML= i -= powerCost;
    powerLevel += 1;
    powerCost = powerCost*2;
    document.getElementById("playerlevel").innerHTML= "Power Level: " + powerLevel;
  }
  else {
    alert("You need " + powerCost + " points to increase your Power Level!")
  }}

function buyClicker(){
  if (i>=friendCost){
    document.getElementById("bigcounter").innerHTML= i -= friendCost;
    clickerFriends += 1;
    friendCost = friendCost*2;
    document.getElementById("clickeramount").innerHTML= "Clicker Friends: " + clickerFriends;
  }
  else {
    alert("You need " + friendCost + " points to enlist a Clicker Friend!")
  }
}

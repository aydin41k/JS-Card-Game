var userScore = 0;
var computerScore = 0;

var suit = ['hearts','diamonds','clubs','spades'];
var type = ['2','3','4','5','6','7','8','9','10','jack','king','ace'];
var value = [2,3,4,5,6,7,8,9,10,11,13,14];

var cardTypeCount = type.length;
var randCache;

function rand(n) {
  randCache = Math.floor(Math.random()*n)
  return randCache;
}

function deal() {
  this.suit = suit[rand(4)];
  this.type = type[rand(cardTypeCount)];
  this.value = value[randCache];
}
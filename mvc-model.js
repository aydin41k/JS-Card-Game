var userScore = 0;
var computerScore = 0;

var suit = ['hearts','diamonds','clubs','spades'];
var type = ['2','3','4','5','6','7','8','9','10','jack','queen','king','ace'];
var value = [2,3,4,5,6,7,8,9,10,11,12,13,14];
var suitTaken = [];
var typeTaken = [];
var rounds = 0;

var cardTypeCount = type.length;
var randCache;

function rand(n) {
  randCache = Math.floor(Math.random()*n)
  return randCache;
}

function deal() {
  do {
    this.suit = suit[rand(4)];
    this.type = type[rand(cardTypeCount)];
    this.value = value[randCache];
  } while (cardTaken(this.suit, this.type));
  suitTaken.push(this.suit);
  typeTaken.push(this.type);
  rounds += 1;
}

function clearTakenSuite(){
  suitTaken = [];
  typeTaken = [];
  rounds = 0;
}

function cardTaken(suiteCard, typeCard){
  for (let i = 0; i < rounds; i++) {
    if(suiteCard == suitTaken[i] && typeCard == typeTaken[i] ){
      return 1;
    }
  } 
  return 0;
}
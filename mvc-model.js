//MVC - Model
var suit = ['hearts','diamonds','clubs','spades'];
var type = ['2','3','4'];
var value = ['2','3','4'];

var cardTypeCount = type.length;
var cardLimit = 3;

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

// on Start();

//My hand
  var myHand = new deal();
  $('#userCards').html(function() {
    $(this).append('<img src="img/'+myHand.type+'of'+myHand.suit+'.png" class="card" />');
   }
  );
//Comp's hand
  var compHand = new deal();  
  $('#computerCards').html(function() {
    $(this).append('<img src="img/'+compHand.type+'of'+compHand.suit+'.png" class="card" />');
  });
  
//Result
var result;
if( myHand.value > compHand.value ) {
  result = 'You win!';
}  
else if( myHand.value === compHand.value ) {
  result = 'It is a draw.';
}
else {
  result = 'Comp wins.';
}
$('#result').html('<p><h2>'+result+'</h2></p>'); 
// on Start();

//My hand
  var myHand = new deal();
  $('#userCards').html(function() {
    $(this).append('<img src="img/'+myHand.type+'of'+myHand.suit+'.png" class="card" />');
    $(this).append('Value: '+myHand.value);
   }
  );
//Comp's hand
  var compHand = new deal();
  $('#computerCards').html(function() {
    $(this).append('<img src="img/'+compHand.type+'of'+compHand.suit+'.png" class="card" />');
    $(this).append('Value: '+compHand.value);    
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
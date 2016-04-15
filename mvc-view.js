function dealBlank(player,cardLimit,colOffset) {
  var target = '#'+player+'Cards';
  $(target).append('<div class="col-sm-'+colOffset+'"></div>');
  for( i=1; i<=cardLimit; i++ ) {
    $(target).append('<div id="'+player+'Card'+i+'" class="col-sm-2"><img src="img/blank.png" class="card" /></div>');
    }
}

function distribute(player,cardLimit) {
  for(i=1;i<=cardLimit;i++) {
    var hand = new deal();
    target = '#'+player+'Card'+i;
// INSERT CODE TO DELAY DEALING ON TOP OF BLANK CARDS
    $(target).html('<img src="img/'+hand.type+'of'+hand.suit+'.png" class="card" />');
      if( player == 'user' ) {
        userScore += hand.value;
      }
      else {
       computerScore += hand.value;
      }
    }
}

function displayResult() {
  var result = 'Your score is '+userScore+' and Computer&#39;s score is '+computerScore;
  var winner = (userScore > computerScore) ? 'You are' : 'Computer is';
  var startAgain = '<input type="button" value="Start again" class="btn btn-info" onClick="location.reload();" /><br />';
  
  $('#result').html('<h2>'+result+'</h2>');
  if( userScore == computerScore ) { $('#result').append('It is a tie!<br />'+startAgain); }
  else { $('#result').append('<h2>'+winner+' the winner this time!</h2><br />'+startAgain); }
}
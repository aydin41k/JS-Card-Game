var userScore;
var computerScore;

function start() {
  userScore = 0;
  computerScore = 0;
  $('#userCards').empty();
  $('#computerCards').empty();
  $('#startButton').attr('value', 'Start Again').removeClass('btn-success').addClass('btn-info');
  $('.handContainer').show();

  var cardLimit = $('#cardCount').val();
  var colOffset = (12-(cardLimit*2))/2;
  dealBlank('user',cardLimit,colOffset);
  dealBlank('computer',cardLimit,colOffset);
  distribute('user',cardLimit);
  distribute('computer',cardLimit);
  
//  displayResult();
  countRound();
  if(scoreHidden < 1){
    showScores()
  }
}

function dealBlank(player,cardLimit,colOffset) {
  var target = '#'+player+'Cards';
  $(target).append('<div class="col-sm-'+colOffset+'"></div>');
  for( i=1; i<=cardLimit; i++ ) {
    $(target).append('<div id="'+player+'Card'+i+'" class="col-sm-2"><img src="img/blank.png" class="card" /></div>');
    }
}

async function distribute(player,cardLimit) {
  for(let i=1;i<=cardLimit;i++) {
    await(delay(1000));
    var hand = new deal();
    target = '#'+player+'Card'+i;
    $(target).html('<img src="img/'+hand.type+'of'+hand.suit+'.png" class="card" />');
    updateScore(player, hand.value);
    totalScore(player, hand.value)
  }
  displayResult();
}

const delay = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

function displayResult() {
  var result = 'Your score is '+userScore+' and Computer&#39;s score is '+computerScore;
  var winner = (userScore > computerScore) ? 'You are' : 'Computer is';
  
  $('#result').html('<h2>'+result+'</h2>');
  if( userScore == computerScore ) {
    $('#result').append('It is a tie!<br />');
  } else { 
    $('#result').append('<h2>'+winner+' the winner this time!</h2><br />'); 
  }
}

function updateScore(player, value) {
  eval(player + 'Score += ' + value);
}
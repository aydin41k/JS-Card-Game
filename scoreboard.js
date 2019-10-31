var round = 0;
var userTotalScore = 0;
var computerTotalScore = 0;
var scoreHidden = 0;

function countRound() {
    round++
    roundWord = 'Round';
    if(round > 1){
        roundWord = 'Rounds'
    }
    $('#round').html('Scores after <br/>' + round + ' ' + roundWord)
}

function totalScore(player,score) {
    if( player == 'user' ) {
        userTotalScore += score;
    } else {
        computerTotalScore += score;
    }
    $('#playerScore').html(userTotalScore);
    $('#computerScore').html(computerTotalScore);
}

function resetScore() {
    round = 0;
    userTotalScore = 0;
    computerTotalScore = 0;
    $('#round').empty()
    $('#playerScore').html(userTotalScore);
    $('#computerScore').html(computerTotalScore);
}

function showScores() {
    $('#scoreBoard').css('right','0px');
    $('#showScores').css('right','-110px');
    scoreHidden = 0
}

function hideScores() {
    $('#scoreBoard').css('right','-110px');
    $('#showScores').css('right','0px');
    scoreHidden = 1;
}
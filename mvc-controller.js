function start() {
  $('#cardCount').attr('disabled', 'disabled');
  $('#startButton').html(function() {
     $(this).attr('disabled', 'disabled');
     $(this).removeClass('btn-success');
  });
  $('.handContainer').toggle();

  var cardLimit = $('#cardCount').val();
  var colOffset = (12-(cardLimit*2))/2;
  dealBlank('user',cardLimit,colOffset);
  dealBlank('computer',cardLimit,colOffset);
  distribute('user',cardLimit);
  distribute('computer',cardLimit);
  
  displayResult();
}
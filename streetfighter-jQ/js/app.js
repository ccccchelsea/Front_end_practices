$(document).ready(function () {
	$('.ryu').mouseenter(function() {
    $('.ryu-action').hide();
	$('.ryu-ready').show();
  })

	.mouseleave(function() {
    $('.ryu-action').hide();
	$('.ryu-still').show();
  })

	 .mousedown(function() {
    playHadouken();
    $('.ryu-action').hide();
  	$('.ryu-throwing').show();
  	$('.hadouken').finish().show().animate(
 		{'left': '1020px'},
  		500,
  		function() {
    	$(this).hide();
    	$(this).css('left', '520px');
  			}
		);
  })

  .mouseup(function() {
    $('.ryu-action').hide();
  	$('.ryu-ready').show();
  });

  $(document).keydown(function(event){
  	if(event.which == 88){
  		$('.ryu-action').hide();
  		$('.ryu-cool').show();
  	};
  })

  .keyup(function(event){
  	if(event.which == 88){
  		 $('.ryu-action').hide();
  		$('.ryu-still').show();

  	};
  });

});

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.3;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
};



$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});


  	
 //  	var Input = $('#userGuess').val();
 //  	var Input_val=parseInt(Input);
	// var guesslist='<li>'+ Input+ '</li>';

	// var Answer= Math.floor((Math.random()*100)+1); ?????
	Answer= Math.floor((Math.random()*100)+1);
	Count=1;
	
	$(document).on("click", ".new", function(){

		Answer= Math.floor((Math.random()*100)+1);
		Count=0;
		$("#feedback").empty().prepend('Make your Guess!');
		$(".guessBox").empty();
		$("#count").empty().prepend(Count);
		Count++;

	});

	// $('.new').click(function newGame(){

	// 	Answer= Math.floor((Math.random()*100)+1);
	
	// } ); 

	// $(".button").click(function(){
	// 	alert('click');
	// 	Compare(Answer);
	
	// });  ????

	$(document).on("click", ".button", function(){

		event.preventDefault();

		if(('input' !== null) || ( isNan('input')) || (1 < 'input' < 101)) {

			$("#feedback").empty();

			Input = parseInt($('#userGuess').val());
			guesslist='<li>'+ Input+ '</li>';
			Compare(Answer);
			
			$("#count").empty().prepend(Count);
			Count++;
			$('#userGuess').val('');
		}	

	});

	function Compare(a){
		var com = Math.abs(Input - a);
		if (com > 50){
			$("#feedback").empty().prepend('Ice Cold!');
			$(".guessBox").append(guesslist);
		}
		else if(com >=30 && com <= 50 ){
			$("#feedback").empty().prepend('Cold!');
			$(".guessBox").append(guesslist);
		}
		else if(com >= 20 && com < 30 ){
			$("#feedback").empty().prepend('Warm!');
			$(".guessBox").append(guesslist);
		}
		else if(com >=10 && com < 20){
			$("#feedback").empty().prepend('Hot!');
			$(".guessBox").append(guesslist);
		}
		else if(com >0 && com <10){
			$("#feedback").empty().prepend('Super Hot!');
			$(".guessBox").append(guesslist);
		}
		else{
			$("#feedback").empty().prepend('YOU GOT IT RIGHT!');
			$(".guessBox").append(guesslist);
		}
	}

});





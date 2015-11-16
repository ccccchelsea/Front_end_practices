
'use strict';

$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

	var Answer= Math.floor((Math.random()*100)+1); 

	var Count=1;
	
	$(document).on("click", ".new", function(){

		Answer= Math.floor((Math.random()*100)+1);
		Count=0;
		$("#feedback").empty().prepend('Make your Guess!');
		$(".guessBox").empty();
		$("#count").empty().prepend(Count);

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

		var Input = parseInt($('#userGuess').val());

		if((Input !== null) && ( !isNan(Input)) && (1 <= Input < 101)) {

			$("#feedback").empty();

			var guesslist='<li>'+ Input+ '</li>';
			$(".guessBox").append(guesslist);

			Compare(Answer, Input);
			Count++;
			$("#count").empty().prepend(Count);
		
			$('#userGuess').val('');
		}	

	});

	function Compare(a,b){
		var com = Math.abs(b - a);
		if (com > 50){
			$("#feedback").empty().prepend('Ice Cold!');
			
		}
		else if(com >=30 && com <= 50 ){
			$("#feedback").empty().prepend('Cold!');
			
		}
		else if(com >= 20 && com < 30 ){
			$("#feedback").empty().prepend('Warm!');
			
		}
		else if(com >=10 && com < 20){
			$("#feedback").empty().prepend('Hot!');
			
		}
		else if(com >0 && com <10){
			$("#feedback").empty().prepend('Super Hot!');
			
		}
		else if(com == 0){
			$("#feedback").empty().prepend('YOU GOT IT RIGHT!');
			
		}
		else{
			alert('What????');//shouldn't happen 
		}
	}

});





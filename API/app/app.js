$(document).ready(function(){

	$('#search-term').submit(function(event){
    event.preventDefault();
    var searchTerm = $('#query').val();
    getRequest(searchTerm);
  	});
});

function getRequest(searchTerm){
  var params = {
    part: 'snippet',
    key: 'AIzaSyDzA0l9blixy3imm28RCKGjtmkmJAeCo18',
    q: searchTerm
  };
  url = 'https://www.googleapis.com/youtube/v3/search';

  $.getJSON(url, params, function(data){
    showResults(data.items);
  });
}

function showResults(results){
  var html = "";
  var a ="";
  $.each(results, function(index,value){
      a = '<a href="https://www.youtube.com/watch?v=' + value.id.videoId + '"><img src="'
            + value.snippet.thumbnails.medium.url +'"><h3>' + value.snippet.title + '</h3></a>'

    html += '<div class="result">' + a +'</div>';
    
    console.log(value.snippet.title);
  });
  $('#search-results').html(html);
}
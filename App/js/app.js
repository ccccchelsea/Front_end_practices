
var artist = "";
var Album_list = new Array();
var year = 0;
var Release = new Array();

document.getElementById('search-form').addEventListener('submit', function (e) {
    e.preventDefault();
    artist = document.getElementById('query').value;
    searchAlbums(artist);
});	

var dateTransfer= function(calendar){
	year = parseInt(calendar);
	var month = parseInt(calendar.slice(5,7));
	var date = parseInt(calendar.slice(8,10));
	var monthdate = 0;
	switch(month){
		case 1:
			monthdate = 0;
			break;
		case 2:
			monthdate = 31;
			break;
		case 3:
			monthdate = 31+28;
			break;
		case 4:
			monthdate = 31+28+31;
			break;
		case 5:
			monthdate = 31+28+31+30;
			break;
		case 6:
			monthdate = 31+28+31+30+31;
			break;
		case 7:
			monthdate = 31+28+31+30+31+30;
			break;
		case 8:
			monthdate = 31+28+31+30+31+30+31;
			break;
		case 9:
			monthdate = 31+28+31+30+31+30+31+31;
			break;
		case 10:
			monthdate = 31+28+31+30+31+30+31+31+30;
			break;
		case 11:
			monthdate = 31+28+31+30+31+30+31+31+30+31;
			break;
		case 12:
			monthdate = 31+28+31+30+31+30+31+31+30+31+30;
			break;


	}

	var total_date= monthdate + date;

	var top_distance= total_date+60;
	return top_distance.toString();

}


var showAlbum = function(album){

	var result = $('.template .cd-timeline-block').clone();


	if(album.album_type=="album"){


		var img = result.find('.coverimage');
		img.attr('src', album.images[0].url);

		var title = result.find('.title');
		title.text(album.name);

		var pop = result.find('.pop');
		pop.text(album.popularity);

		var top = result.find('.cd-timeline-content');
		top.css("top", dateTransfer(album.release_date)+"px");

		var calendar=result.find('.cd-date');
		calendar.text(album.release_date);

		var year_green=result.find('.year');
		year_green.text(year);



		return result;

	}

	
}

function compare(a,b) {
  if (DatetoInt(a.release_date) < DatetoInt(b.release_date))
    return -1;
  if (DatetoInt(a.release_date) > DatetoInt(b.release_date))
    return 1;
  return 0;
}

function DatetoInt(date){
	Newdate = date.slice(0,4)+ date.slice(5,7) + date.slice(8,10);
	return parseInt(Newdate);

}

var fetchAlbum = function(albums){


	$(".cd-container").removeClass("hidden");

	var albums_list= albums.items;

	for(i=0; i<albums_list.length; i++){

		if(albums_list[i].album_type != "album" ){
			albums_list.splice(i,1);
		}

	};



	$.each(albums_list, function(i, item){


		$.ajax({

			url: 'https://api.spotify.com/v1/albums/'+ item.id,
			data: {
				id: item.id
			},
			success: function(album){

				console.log("success");

			

				if(Album_list.length==0){
					Album_list.push(album);
					Release.push(Album_list[0].release_date);
				}
				else if(album.artists[0].id == Album_list[0].artists[0].id){

					if($.inArray(album.release_date, Release) === -1){

						Album_list.push(album);
						Release.push(Album_list[Album_list.length-1].release_date);

					} 

				}
				   

			}

		})
	});

	Album_list.sort(compare);


	$.each(Album_list, function(i,item){

		var html_content=showAlbum(item);
		$('.cd-container').prepend(html_content);		

	})


}

var searchAlbums = function(query) {

	
	$('.cd-container').empty();

    $.ajax({
        url: 'https://api.spotify.com/v1/search',
        data: {
            q: "artist:"+query,
            type: 'album'
        },

		success: function(response){


		fetchAlbum(response.albums);


		}

	});
        
}

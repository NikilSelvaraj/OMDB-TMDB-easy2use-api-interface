'use strict';

$(function(){
	var api_key = "0001124f6271ff795098e050b8b255d7";
	var baseimg = "http://image.tmdb.org/t/p/w500";

	//function definition
	var getPoster = function(e){
  

		var film=localStorage.getItem("film");
 {

			$.getJSON("https://api.themoviedb.org/3/search/movie?query=" +
			    escape(film)  +
			      "&api_key=" +
			      api_key     +
			      "&callback=?",
				function(json) {
				// console.log(json);
				// console.log(json.results[0].poster_path);
					if (json.total_results) {
						$('#poster').html(
						  '<img id="thePoster" width="250px" style="float:left;display: block; max-height: 100%; margin-right:20px;" src=' +
						      baseimg + json.results[0].poster_path + ' />');
					}
			});
		}
    // this throws a warning now lol
		//return false;
	}

	$(document).ready(getPoster);
});

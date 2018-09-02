
var data=localStorage.getItem("data");
function UserAction() {
    var xhttp = new XMLHttpRequest();
    var method = "POST";
    var url = "https://www.omdbapi.com/" +data;
    
    console.log(url);
    
    xhttp.open(method, url, true);
    xhttp.send(data);
    
    xhttp.onreadystatechange = function() {
         if (this.readyState === 4 && this.status === 200) {
           myobj=JSON.parse(this.responseText); 
           console.log(myobj);
          
           if(myobj.Response!="False"){
           document.getElementsByClassName("card-title")[0].innerHTML=myobj.Title;
           document.getElementsByClassName("card-subtitle mb-2 text-muted")[0].innerHTML=myobj.Genre+"</br>  Ratings: "+myobj.Ratings[0].Value;
           document.getElementsByClassName("card-text")[0].innerHTML="Director : "+myobj.Director+"<br /> Writers : "+myobj.Writer+"</br>"+"Actors : "+myobj.Actors+"<br/>"+"Language : "+myobj.Language+
           "</br>"+"Awards : "+myobj.Awards+"</br>"+"Release Date : "+myobj.Released+"</br>"+"imdbID : "+myobj.imdbID+"</br>"+"Plot : "+myobj.Plot;
           if(myobj.Website!=="N/A")
           document.getElementsByClassName("card-link")[0].href=myobj.Website;
           document.getElementById("card").style.visibility = "visible";
           getposter();
           }
           else{
           document.getElementById("img").src="./Assets/Images/404.png";
           document.getElementById("img").style.visibility="visible";
           document.getElementById("text").style.visibility="visible";
           }
     
        }
    };              
}
function getposter(){
    var baseimg = "http://image.tmdb.org/t/p/w500";
           var api_key = "0001124f6271ff795098e050b8b255d7";
           var film=localStorage.getItem("film");
           $.getJSON("https://api.themoviedb.org/3/search/movie?query=" +
           escape(film)  +
             "&api_key=" +
             api_key     +
             "?callback=?",
           function(json) {
           // console.log(json);
           // console.log(json.results[0].poster_path);
               if (json.total_results) {
                   $('#poster').html(
                     '<h2 class="loading"> We found you your poster.</h2><img id="thePoster" src=' +
                         baseimg + json.results[0].poster_path + ' />');
               } else {
                   $.getJSON("http://api.themoviedb.org/3/search/movie?query=goonies&api_key=" +
                     api_key,
                       function(json){
                           $('#poster').html(
                             '<h2 class="loading">Sorry, nothing was found for that search. Perhaps you were looking for The Goonies?</h2><img id="thePoster" src='+
                             baseimg +
                             json.results[0].poster_path +'/>');
         });
     }
       });
       return false;
}
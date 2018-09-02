
var data=localStorage.getItem("data");
function UserAction() {
    var xhttp = new XMLHttpRequest();
    var method = "POST";
    var url = "http://www.omdbapi.com/" +data;
    
    console.log(url);
    
    xhttp.open(method, url, true);
    xhttp.send(data);
    
    xhttp.onreadystatechange = function() {
         if (this.readyState === 4 && this.status === 200) {
           myobj=JSON.parse(this.responseText); 
           if(myobj.Response!="False"){
           document.getElementsByClassName("card-title")[0].innerHTML=myobj.Title;
           document.getElementsByClassName("card-subtitle mb-2 text-muted")[0].innerHTML=myobj.Genre+"</br>  Ratings: "+myobj.Ratings[0].Value;
           document.getElementsByClassName("card-text")[0].innerHTML="Director : "+myobj.Director+"<br /> Writers : "+myobj.Writer+"</br>"+"Actors : "+myobj.Actors+"<br/>"+"Language : "+myobj.Language+
           "</br>"+"Awards : "+myobj.Awards+"</br>"+"Release Date : "+myobj.Released+"</br>"+"imdbID : "+myobj.imdbID+"</br>"+"Plot : "+myobj.Plot;
           if(myobj.Website!=="N/A")
           document.getElementsByClassName("card-link")[0].href=myobj.Website;
           document.getElementById("card").style.visibility = "visible";
           }
           else{
           document.getElementById("img").src="./Assets/Images/404.png";
           document.getElementById("img").style.visibility="visible";
           document.getElementById("text").style.visibility="visible";
           }
     
        }
    };              
}
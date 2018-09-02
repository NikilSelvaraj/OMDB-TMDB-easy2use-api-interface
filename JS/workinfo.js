Window.myobj;
function cleartext(){
    document.getElementById("ip").value='';
    console.log("cleared");
}
            function UserAction() {
                var xhttp = new XMLHttpRequest();
                var method = "POST";
                var film=document.getElementById("ip").value;
                var data = "?i=tt3896198&apikey=306bcc5a&t=" + document.getElementById("ip").value + "&plot=full&r=json";
                var url = "http://www.omdbapi.com/" +Window.data;
                console.log(url);
                localStorage.setItem("data",data);
                localStorage.setItem("film",film);
                window.location="./Movieinfo.html";
                               
            }
            
        
             
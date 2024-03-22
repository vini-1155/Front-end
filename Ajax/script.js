function EventH(){
    xhttp = new XMLHttpRequest();
    xhttp.onload = function(){
      document.getElementById("op").innerHTML = this.responseText;
    }
    xhttp.open("GET", "info.txt", true);
    xhttp.send();
  }
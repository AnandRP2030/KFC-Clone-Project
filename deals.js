

// mobile size toggle display menu 

var navToggle = document.querySelector("#nav-toggle-bar");

navToggle.onclick = function(){
    displayMenu();
}

function displayMenu(){
  
  var leftItems = document.querySelectorAll(".navbar-left-side")[0];

  leftItems.classList.toggle("show-icons");


}

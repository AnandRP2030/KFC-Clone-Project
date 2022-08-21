

// mobile size toggle display menu 

var navToggle = document.querySelector("#nav-toggle-bar");

navToggle.onclick = function(){
    displayMenu();
}

function displayMenu(){
  
  var leftItems = document.querySelectorAll(".navbar-left-side")[0];

  leftItems.classList.toggle("show-icons");


}


//  scroll navbar 

 /* scroll navbar */
 let navbar =  document.querySelector(".deals-navbar");

 // call function when scroll window
 window.onscroll = function(){
     scrollNav();
 };


 // get the offset position of the navbar 
 var sticky = navbar.offsetTop;


 //add the  scrollNav class to the navbar when you reach its scroll position. remove sticky when you leave the scroll position
 function scrollNav(){
     
     if (window.pageYOffset >= sticky){
     navbar.classList.add("scroll-nav");
     }else{
     navbar.classList.add("scroll-nav");
     }

 }


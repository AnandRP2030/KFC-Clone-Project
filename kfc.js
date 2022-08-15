// move left

// target right btn & store in a new variable
var rightBtn = document.querySelector(".right-btn");

// when click rightBtn. calle moveLeft Function
rightBtn.onclick = function(){
    moveLeft();
} 



function moveLeft(){

    // hide first card - reduce opacity
    var firstCard = document.querySelector(".first-card");
    firstCard.classList.add("footer-hide-card");
    
    

    // cards move left 
    for (var i = 1; i < 4; i++){

        if(i == 3){

            // remove opacity of last card
            var lastCard = document.getElementsByClassName("footer-card")[i];
            lastCard.classList.remove("last-card");

        }

        var footerCard = document.getElementsByClassName("footer-card")[i];
        footerCard.classList.add("card-move-left");
    }

    var rightBtn = document.querySelector(".right-btn");
    rightBtn.classList.remove(".right-btn-hover");


    // change opacity of left side button
    document.querySelector(".right-btn").classList.remove("right-btn-hover");

    // add hover class to left button
    document.querySelector(".left-btn").classList.add("left-btn-hover");
}

// move right

var leftBtn = document.querySelector(".left-btn");

    leftBtn.onclick = function (){
         moveRight();
    }

    function moveRight(){
       
        for(var i = 0; i < 4; i++){
            var footerCard = document.getElementsByClassName("footer-card")[i];

            if (i == 0){
                var firstCard = document.getElementsByClassName("footer-card")[i];
                firstCard.classList.remove("footer-hide-card");
            }else{
            
                if (i == 3){
                    footerCard.classList.add("last-card");
                }

               footerCard.classList.remove("card-move-left");
            }
        }

        // remove hover effect after click right button
        document.querySelector(".left-btn").classList.remove("left-btn-hover"); 
        
        //add hover effect right button
        document.querySelector(".right-btn").classList.add("right-btn-hover");

    }


    /* scroll navbar */


    let navbar =  document.querySelector(".navbar");


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
















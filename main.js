AFRAME.registerComponent('play-pause',{
    init: function (){
        var myVideo = document.querySelector('#asap');
        var videoControls = document.querySelector('#videoControls');

        this.el.addEventListener('mouseenter', function (){
            if(myVideo.paused){
                myVideo.play();
                videoControls.setAttribute('src', '#pause');

            } else {
                myVideo.pause();
                videoControls.setAttribute('src', '#play');
            }
        });
    }
});


window.onload = (event) => {

    var backButton = document.querySelector('#backButton');
    var doorObject = document.querySelector('#doorObject');
    var doorSound = document.querySelector('#doorOpenSound');
    var selectionPage = document.querySelector('#selectionRoomButton');
    var fire = document.querySelector("#fire");
    var water = document.querySelector("#water");
    var wind = document.querySelector("#wind");
    var roomTexture = document.querySelector('#roomTexture');

    // fire selection
    var fireTexture = document.querySelector('#fireSelection');
    var fireSound = document.querySelector('#fireSelectionSound');

    doorObject.addEventListener("mouseenter", () => {
        
        doorObject.setAttribute("position", 
            {
                x: -0.54,
                y: 0.000,
                z: 0.440,
            }  
        );
    
        doorObject.setAttribute("rotation", 
            {
                x: 0.00,
                y: 90.00,
                z: 0.440,
            }  
        );

        doorSound.play();
    });

    function myFunction() {
        setTimeout(function(){ 
            selectionPage.addEventListener("mouseenter", () => {
                window.location.replace("selectionroom.html");
        
                
            }); 
         }, 3000);
    
    }
    myFunction();

    fire.addEventListener("mouseenter", () => {
        roomTexture.setAttribute("src", 
            "#fireSelection"
        );
        fireSound.play();
    });

    water.addEventListener("mouseenter", () => {
        
    });

    wind.addEventListener("mouseenter", () => {
        
    });
    
    

};


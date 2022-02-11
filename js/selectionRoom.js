window.onload = (event) => {
    
    var selectionPage = document.querySelector('#selectionRoomButton');
    var roomBackButton = document.querySelector('#selectionRoomBackButton');
    var fire = document.querySelector("#fire");
    var water = document.querySelector("#water");
    var wind = document.querySelector("#wind");
    var roomTexture = document.querySelector('#roomTexture');
    // locationObj = mainpage.location
    // mainpage.location = 'http://index.html';
    var backButton = document.getElementById("backButton");
    backButton.onlclick = function () {
        location.href = "http://index.html";
    };


    // fire selection
    var fireTexture = document.querySelector('#fireSelection');
    var fireSound = document.querySelector('#fireSelectionSound');

    // room textures
    var wall_one = document.querySelector('#wall_one');
    var wall_two = document.querySelector('#wall_two');
    var wall_three = document.querySelector('#wall_three');
    var wall_four = document.querySelector('#wall_four');
    var floor = document.querySelector('#floor');
    var roof = document.querySelector('#roof');
    var floorColor = document.getElementById("floor");
    var roofColor = document.getElementById("roof");


    fire.addEventListener("mouseenter", () => {
        wall_one.setAttribute("src", "#fireSelection");
        wall_two.setAttribute("src", "#fireSelection");
        wall_three.setAttribute("src", "#fireSelection");
        wall_four.setAttribute("src", "#fireSelection");
        document.getElementById("#floor").style.color = "#d6430e";
        document.getElementById("#roof").style.color = "#d6430e";
        fireSound.play();
    });

    // water.addEventListener("mouseenter", () => {
    //     wall_one.setAttribute("src", "#fireSelection");
    //     wall_two.setAttribute("src", "#fireSelection");
    //     wall_three.setAttribute("src", "#fireSelection");
    //     wall_four.setAttribute("src", "#fireSelection");
    //     floor.setAttribute("src", "#fireSelection");
    //     roof.setAttribute("src", "#fireSelection");
    //     fireSound.play();
    // });

    // wind.addEventListener("mouseenter", () => {
    //     wall_one.setAttribute("src", "#fireSelection");
    //     wall_two.setAttribute("src", "#fireSelection");
    //     wall_three.setAttribute("src", "#fireSelection");
    //     wall_four.setAttribute("src", "#fireSelection");
    //     floor.setAttribute("src", "#fireSelection");
    //     roof.setAttribute("src", "#fireSelection");
    //     fireSound.play();
    // });
    
    // roomBackButton.addEventListener("mouseenter", () => {
    //     window.location = locationObj;

    // });
    

};

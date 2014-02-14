// Create the canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 900;
canvas.height = 500;
document.body.appendChild(canvas);

// Background image
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
        bgReady = true;
};
bgImage.src = "img/background.png";

// Monkey image
var monkeyReady = false;
var monkeyImage = new Image();
monkeyImage.onload = function () {
        monkeyReady = true;
};
monkeyImage.src = "img/monkey_basket.png";

// Banana image
var bananaReady = false;
var bananaImage = new Image();
bananaImage.onload = function () {
        bananaReady = true;
};
bananaImage.src = "img/banana.png";

//Adding sounds
var music = new Audio("audio/Jungle.mp3");
music.volume = 0.2;
music.addEventListener('ended', function() {
        this.play();
    }, false);
var bananaS = new Audio("audio/Splat.mp3");
bananaS.volume = 0.2;

function oneTimeTasks() {
        gameInterval = setInterval(main, 1);
        started = false;
        musicOn = true;
        music.play();
}

function toggleSound() {
        if (musicOn) {
        musicOn = false;
        music.pause();
        document.getElementById('toggle-btn').value = "Music On";
        } else {
        musicOn = true;
        music.play();
        document.getElementById('toggle-btn').value = "Music Off";
        }
}

// Game objects
var monkey = {
        speed: 300 // movement in pixels per second
};
var banana = {
  speed: 200
};


var bananasEaten = 0;

        monkey.x = canvas.width / 2;
        monkey.y = canvas.height - 100;    
        
        //counter variables
        var countstart = Date.now();
        //var countend = Date.now();
        var countcheck = null;
        var over = false 
        
// Handle keyboard controls
var keysDown = {};

addEventListener("keydown", function (e) {
        started = true;
        keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
        delete keysDown[e.keyCode];
}, false);

var keys = [];
window.addEventListener("keydown",
function(e){
keys[e.keyCode] = true;
switch(e.keyCode){
case 37: case 39: // Arrow keys
default: break; // do not block other keys
}
},
false);
window.addEventListener('keyup',
function(e){
keys[e.keyCode] = false;
},
false);


// Reset the game when the player catches a banana
var reset = function () {
        // Throw the banana somewhere on the screen randomly
        banana.x = 32 + (Math.random() * (canvas.width - 64));
        banana.y = -50;
        
};

// Update game objects
var update = function (modifier) {
        if (37 in keysDown) { // Player holding left
                if (!(monkey.x < 10)) {
                monkey.x -= monkey.speed * modifier;
                }
        }
        if (39 in keysDown) { // Player holding right
                if (!(monkey.x > canvas.width-40)) {
                        monkey.x += monkey.speed * modifier;
                }
        }
                if (started) {banana.y += banana.speed * modifier;};

        // Are they touching?
        if (
                monkey.x <= (banana.x + 32)
                && banana.x <= (monkey.x + 32)
                && monkey.y <= (banana.y + 32)
                && banana.y <= (monkey.y + 32)
        ) {;
                bananaS.play();
                ++bananasEaten;
    banana.speed = banana.speed+10;
    monkey.speed = monkey.speed+10;
                reset();
        }
         
if (banana.y >= canvas.height-40) {
reset(); }

};

// Draw everything
var render = function () {

        if (bgReady) {
                ctx.drawImage(bgImage, 0, 0);
        }

        if (monkeyReady) {
                ctx.drawImage(monkeyImage, monkey.x, monkey.y);
        }

        if (bananaReady) {
                ctx.drawImage(bananaImage, banana.x, banana.y);
        }
        

        // Score
        if (started) {
        //ctx.fillStyle = "rgb(250, 250, 250)";
        ctx.font = "24px Helvetica";
        ctx.textAlign = "left";
        ctx.textBaseline = "bottom";
        ctx.fillText("Bananas:" + bananasEaten, 10, 32);
        ctx.fillText("Time:" + countcheck, 760, 32);
        } else {
        ctx.fillStyle = "rgb(250, 250, 250)";
        ctx.font = "28px Arial";
        ctx.textAlign = "left";
        ctx.textBaseline="bottom";
        ctx.fillText("Move with the right and left arrows!",240,300);
        ctx.font = "24px Helvetica";
        ctx.fillText("Time:" + countcheck, 760, 32);
        }
};

// The main game loop
var main = function () {
        var now = Date.now();
        var delta = now - then;

        update(delta / 1000);
        render();

        then = now;
        countcheck = now - countstart;
        if (countcheck>=60000) {
          keysDown = [];
          clearInterval(gameInterval);
          started = false;
          reset();
        //started = true;
        ctx.fillStyle = "rgb(250, 250, 250)";
        ctx.font = "28px Arial";
        ctx.textAlign = "left";
        ctx.textBaseline = "top";
        ctx.fillText("Your time is up!", 350, 220);
        ctx.fillText("You caught " + bananasEaten + " bananas.  Good Job!", 250, 250);
        countcheck=""
        over=true    

  }

};




// Lets play this game!
reset();
var then = Date.now();
//setInterval(main, 1); // Execute as fast as possible


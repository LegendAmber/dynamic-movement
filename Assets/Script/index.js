var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext("2d");
var eventKey;
var charPX = 500;
var charPY = 500;
var check = true;
document.addEventListener("keypress", e => {
    debug();
    eventKey = event.key;
    if (eventKey == "a" && !check){
        charPX -= 5;
        check = false;
    }
    if (eventKey == "d" && !check){
        charPX += 5;
        check = false;
    }
    else{
        check = true;
    }
});

function draw() {
    requestAnimationFrame(draw);
    c.clearRect(0, 0, window.innerWidth, window.innerHeight);
    c.beginPath();
    c.fillStyle = "black";
    c.fillRect(charPX, charPY, 20, 20);
    c.fill();
}

draw();

function debug() {
    c.beginPath();
    c.font = "italic bold 40px arial,serif"
    c.fillText(eventKey, 200, 200);
    c.fill();
}
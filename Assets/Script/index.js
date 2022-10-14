var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext("2d");

document.addEventListener("keypress", e => {
    c.beginPath();
    c.fillStyle = "black";
    c.fillText(event.value, 200, 200);
    c.fill();
});

function draw() {
    requestAnimationFrame(draw);
    //c.clearRect(0, 0, window.innerWidth, window.innerHeight);

}

draw();
var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');

function draw() {
    requestAnimationFrame(draw);
    c.clearRect(0, 0, window.innerWidth, window.innerHeight);

    c.beginPath();
    c.fillStyle = "black";
    c.fillRect(200, 200, 20, 20);
    c.fill();
}
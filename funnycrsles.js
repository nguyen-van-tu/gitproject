function initCavans() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style = "border: 1px solid black";
}

function getRamdomHex() {
    return Math.floor(Math.random() * 255);
}

function generatorColor() {
    return `rgb(${getRamdomHex()}, ${getRamdomHex()}, ${getRamdomHex()})`;
}

function Circle(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
}

function createCircle() {
    return new Circle(
        Math.random() * window.innerWidth,
        Math.random() * window.innerHeight,
        Math.floor(Math.random() * 90) + 10
    );
}

function draw(circle) {
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fillStyle = generatorColor();
    ctx.fill();
}

let canvas = document.getElementById("myCanvas");
initCavans();
let ctx = canvas.getContext("2d");

for (let i = 0; i < 20; i++) {
    draw(createCircle());
}
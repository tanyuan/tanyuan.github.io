var img;
var color;

function setup() {
    createCanvas(600, 600);
    img = loadImage("media/mythology-embed.png"); 
}

function draw() {
    color = map(mouseY, 0, 600, 255, 0);
    background(color);
    image(img, 0, 0);
}

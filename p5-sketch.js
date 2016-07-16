var img;
var color;
var z = 0;

function setup() {
    createCanvas(600, 600);
    img = loadImage("assets/mythology-embed.png"); 
}

function draw() {
    amplitude = map(mouseX, 0, 600, 100, 300);
    interval = map(mouseY, 0, 600, 100, 20);

    background(255);
    stroke(128, 100);

    for (var y = 0; y < height; y += interval) {
        for (var x = 0; x < width; x += 1) {
            point(x, y + map(noise(x/150, y/150, z), 0, 1, -amplitude, amplitude));
        }
    }
    z = z + 0.02;

    image(img, 0, 0);
}

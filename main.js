function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(150, 150);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 230, 150, 220, 200);
    fill(100, 200, 0);
    stroke(100, 200, 0);
    circle(40, 50, 80);
    circle(40, 430, 80);
    circle(590, 50, 80);
    circle(590, 430, 80);
    fill(0, 128, 180);
    stroke(0, 128, 180);
    rect(90, 40, 460, 20);
    rect(90, 420, 460, 20);
    rect(40, 90, 20, 300);
    rect(580, 90, 20, 300);
}

function take_snapshot() {
    save('my_picture.png');
}
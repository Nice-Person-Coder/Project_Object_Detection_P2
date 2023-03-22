img = "";
status = "";

function preload(){
    img = loadImage('bedroom_1.webp');
}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();

    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded");
    status = true;
    objectDetector.detect(img, gotResults);
}

function gotResults(){
    if(error){
        console.log(error);
    }
    console.log(results);
}

function draw(){
    image(img, 0, 0, 640, 420);
    fill('#bada55');
    text('Bed', 45, 75);
    noFill();
    stroke('#bada55');
    rect(30, 60, 350, 350);

    fill("#bada55");
    text('Window', 310, 40);
    noFill();
    stroke("#bada55");
    rect(300, 20, 270, 320);
}
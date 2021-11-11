img="";
status = "";

function preload()
{
  img = loadImage('bedroom.jpg');
}

function setup()
{
  canvas = createCanvas(600, 480);
  canvas.position(385, 120);
  objectDetector = ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function draw()
{
  image(img, 0, 0, 600, 480);
  fill("#FF0000");
  text("Bed", 70, 60);
  noFill();
  strokeWeight(2);
  stroke("#FF0000");
  rect(70, 40, 250, 430);
}

function modelLoaded()
{
    console.log("Model loaded!")
    status = true
    objectDetector.detect(img, gotResult);
}

function gotResult(error, result)
{
 if (error)
 {
     console.log(error);
 }
 console.log(results);
}

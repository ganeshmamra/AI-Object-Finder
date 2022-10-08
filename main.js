
status = "";
object = [];

function preload(){
  video = createVideo('video.mp4');
  video.hide();
}


function setup() {
  canvas = createCanvas(480, 380);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(380,380);
  video.hide();
}

function start()
{
  objectDetector = ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById("status").innerHTML = "Status : Onject Detected";
  object_name = document.getElementById("object_name").ariaValueMax;
}

function modelLoaded() {
  console.log("Model Loaded!");
  status = true;
}


function draw() {
  image(video, 0, 0, 580, 480);
      if(status !="")
      {
        objectDEtector.detect(video,gotResult);
        for(i=0 i<objects.length;i++){
          docu
        }
      }
}
function gotResult(error,results) {
  if(error){
    console.log(error);
  }
  console.log(results);
  objects = results;
}
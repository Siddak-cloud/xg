status = "";
var synth = window.speechSynthesis;
objects =[];

 function setup() {
     canvas = createCanvas(600 , 400);
     canvas.center();
     video = createCapture(VIDEO);
     video.hide();
 }
 function start() {
     objectDetector = ml5.objectDetector('cocossd' , modelLoaded)
    document.getElementById("status").innerHTML = "Status : detecting objects";
    if(objects[i].label == object_name){
        objectDetector.detect(gotResult);
        document.getElementById("status"),innerHTML = object_name + "Found";
        var synth = window.speechSynthesis;

    speak_data= "Object mentioned found"; 

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);
    }else {
        document.getElementById("status").innerHTML = "Status : Object mentioned not found";
    }
 }
 function stop(){
    video.stop();
  }
 function modelLoaded() {
     console.log("Model Loaded!")
     status = true;
 }
 function gotResult(error, results) {
    if (error) {    
        console.log(error);
    }
    console.log(results);
    objects = results;   
}

function draw(){
image(video , 0, 0, 600, 400);
if(Status != "")
{
    r = random(255);
    g = random(255);
    b = random(255);
    objectDetector.detect(video, gotResult  );
    for (i = 0; i < objects.length; i++)
    {
        document.getElementById("status").innerHTML = "Status = object Detected";
        document.getElementById("number_of_objects").innerHTML = "Number of object detected are : "+ objects.length;
        fill(r,g,b);
        percent = floor(objects[i].confidence * 100);
        text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
        noFill();
        stroke(r,g,b);
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
    }
}
} 
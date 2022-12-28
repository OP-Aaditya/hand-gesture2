  prediction="";


Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:100
})
camera=document.getElementById("camera");
Webcam.attach('#camera');
function take_snapshot(){
    Webcam.snap(function(data_uri){
       document.getElementById("result").innerHTML='<img id="captured_image"  src="'+data_uri+'"/>';
    })
};

console.log("ml5.version:" , ml5.version);

classifier=ml5.ImageClassifier("https://teachablemachine.withgoogle.com/models/0mrdMTY6n/model.json",ModelLoaded);

function ModelLoaded(){
    console.log("Model Loaded!!");
}

function speak(){
    var synth= window.speechSynthesis;
    speak_data="The prediction is "+prediction;
     var utterThis= new SpeechSynthesisUtterance(speak_data);
     synth,speak(utterThis);
 }
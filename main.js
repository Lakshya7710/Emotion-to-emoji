Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:12345678990
});

camera=document.getElementById("camera");
Webcam.attach("#camera");

function capture_image()
{
    Webcam.snap(function (data_uri){
        document.getElementById("snapshot").innerHTML="<img id='capture_image' src='"+data_uri+"'/>";
    });
}

console.log("ml5.version",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/oIic0VhOq/model.json",modelLoaded);

function modelLoaded(){
    console.log("model loaded!!");
}

function check(){
    img=document.getElementById("capture_image");
    classifier.classify(img,gotResult);
}

function gotResult(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML=results[0].label;
        document.getElementById("result_emotion_name-2").innerHTML=results[1].label;

        if(results[0].label=="Happy"){
            document.getElementById("update_emoji").innerHTML="&#128522;";
        }

        if(results[0].label=="Sad"){
            document.getElementById("update_emoji").innerHTML="&#128532;";
        }

        if(results[0].label=="Angry"){
            document.getElementById("update_emoji").innerHTML="&#128548;";
        }

        if(results[1].label=="Happy"){
            document.getElementById("update_emoji-2").innerHTML="&#128522;";
        }

        if(results[1].label=="Sad"){
            document.getElementById("update_emoji-2").innerHTML="&#128532;";
        }

        if(results[1].label=="Angry"){
            document.getElementById("update_emoji-2").innerHTML="&#128548;";
        }

    }
}

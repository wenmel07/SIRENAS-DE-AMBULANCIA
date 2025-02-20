function starClasification ()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier("https://storage.googleapis.com/tm-model/X2TX9TJrV/model.json", modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
    if(error){
        console.log(error);
    }else{
        console.log(results);

        random_number_r= Math.floor(Math.random()*255)+1;
        random_number_g= Math.floor(Math.random()*255)+1;
        random_number_b= Math.floor(Math.random()*255)+1;

        document.getElementById("result_label").innerHTML="Escucho " + results[0].label;
        document.getElementById("result_confidence").innerHTML="Presición " + (results[0].confidence*100).toFixed(2) + " %";
        document.getElementById("result_label").style.color="rgb(" + random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_confidence").style.color="rgb(" + random_number_r+","+random_number_g+","+random_number_b+")";

        img= document.getElementById('ambu1')
        img2=document.getElementById('ambu2')
        img3=document.getElementById('ambu3')

        if(results[0].label=="Largo "){
            img.src='ambulanciaencruce.jpg';
            img2.src= 'ambulancialejos.jpg';
            img3.src= 'enservicio.jpg';

        }else if(results[0].label=="Corto"){
            img.src='ambulanciaencruce.jpg';
            img2.src= 'ambulancialejos.jpg';
            img3.src= 'enservicio.jpg';

        }else if(results[0].label=="Entrecortado "){
            img.src='ambulanciaencruce.jpg';
            img2.src= 'ambulancialejos.jpg';
            img3.src= 'enservicio.jpg';
        }
    }

    }


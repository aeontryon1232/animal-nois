function startClassifiction(){
    navigator.mediaDevices.getUserMedia({ sudio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/[...]', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}
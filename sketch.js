let mySound_1;
let cnv,r;


function preload() {
    mySound_1 = loadSound('1.wav');
}

function setup() {
    cnv = createCanvas(windowWidth, windowHeight-100, WEBGL);
    background(0);
}

function draw(){
    cnv.mousePressed(ChangeBack);
}

function ChangeBack(){
    console.log("success");
}

function mouseClicked(){
    if (mySound_1.isPlaying()){
        mySound_1.pause();
        background(0);
    }else{
        noFill();
        stroke(0,0,255);
        rotateX(frameCount * 0.01);
        rotateY(frameCount * 0.01);
        box(130);
        mySound_1.play();}
}
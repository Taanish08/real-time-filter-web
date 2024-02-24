nose_x=0;
nose_y=0;

function preload() {
clown_nose=loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');
}

function setup() {
canvas=createCanvas(600,500);
canvas.center();
video=createCapture(VIDEO);
video.size(600,500);
video.hide();
poseNet=ml5.poseNet(video,modelloaded);
poseNet.on('pose',gotposes)
}

function draw() {
image(video,0,0,600,500);
//fill(255,0,0);
//circle(nose_x, nose_y, 20);
image(clown_nose,nose_x,nose_y,33,33);

}

function modelloaded() {
    console.log("poseNet model has initialized👍");
}

function gotposes(results) {
    if(results.length>0) {
        console.log(results); 
        nose_x=results[0].pose.nose.x-15;
        nose_y=results[0].pose.nose.y-10;
        console.log("Nose X = " + nose_x);
        console.log("Nose Y = " + nose_y);
    }   
    
}

function take_snapshot() {
    save('Clown+nose.png')
}
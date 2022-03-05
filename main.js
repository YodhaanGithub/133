function setup() {
    canvas = createCanvas( 600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    
    posenet = ml5.poseNet(video , modaloaded)

}

function start() {
    objectDetector  = ml5.objectDetector('cocossd', modaloaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    input= document.getElementsById("input").value; 
}

function modaloaded() {
    console.log("Modal Loaded");
    dstatus = true;
}
function draw() {
image(video, 0, 0, 600, 500);
}
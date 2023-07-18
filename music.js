music ="";
music2 ="";

function preload()
{
    music = loadSound("song.mp3");
    music2 = loadSound("song2.mp3");
}

function setup()
{
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses); 
}

function draw()
{
image(video, 0, 0, 600, 500);

}
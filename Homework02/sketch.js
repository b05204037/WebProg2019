let cvsWrapper = null;
let bgImg=[];
let baseImg;
let birdcolor = ['blue','red','yellow'];
let flap = ['down','mid','up'];
let pipecol = ['green','red']
let birdImgmid;
let birdImagedown;
let birdImageup;
let pipeup;
let pipedown;
let gameover;
let startCounter = 1;
let start;
var bird;
var pipe = [];
let bgspeed = 1;
var wavsound;
var hitsound;
var getp;
var angle=0;
// assets from: https://github.com/sourabhv/FlapPyBird/tree/master/assets

function preload() {
    let coloryes = random(birdcolor);
    let pipecolor = random(pipecol);
    bgImg = [loadImage('assets/sprites/background-day.png'),loadImage('assets/sprites/background-night.png')];
    baseImg = loadImage('assets/sprites/base.png');
    birdImgmid = loadImage(`assets/sprites/${coloryes}bird-midflap.png`);
    birdImgup = loadImage(`assets/sprites/${coloryes}bird-upflap.png`);
    birdImgdown = loadImage(`assets/sprites/${coloryes}bird-downflap.png`);
    start = loadImage('assets/sprites/message.png');
    pipeup = loadImage(`assets/sprites/pipe-${pipecolor}-upper.png`);
    pipedown = loadImage(`assets/sprites/pipe-${pipecolor}-lower.png`);
    gameover = loadImage('assets/sprites/gameover.png')
    wavsound = loadSound('assets/audio/wing.wav');
    hitsound = loadSound('assets/audio/hit.wav');
    getp = loadSound('assets/audio/point.wav');
}

function setup() {
    // Game basic setup.
    // Mounting canvas onto div for convenient styling.
    cvsWrapper = document.getElementById("canvasWrapper");
    const myCanvas = createCanvas(
        cvsWrapper.offsetWidth,
        cvsWrapper.offsetHeight
    );
    myCanvas.parent("canvasWrapper");
    // setup code below
    
    
    chosebg = random(bgImg);
    bird = new Bird();
    base = new backGround();
    sky = new Sky();
    //pipe.push(new Pipes());
}

function draw() {
    // Render function (called per frame.)
    background(0);
    
    sky.update();
    base.update();

    if(startCounter == 1)
    {
        frameCount = 1;
    }
    if(frameCount % 200 == 0)
    {
        pipe.push(new Pipes()); 
    }
    for(var i=pipe.length-1; i>=0; i--)
    {
        pipe[i].show();
        if(pipe[i].hits(bird))
        {
           image(gameover, 0, 0);
           hitsound.play();
           
        }
        if(pipe[i].offscreen()){
            pipe.splice(i,1);
            getp.play();
        }
    }
    bird.update();
    bird.show();
    if(startCounter == 1){
        image(start, 0, 0, width, height);
     }

}

function keyPressed() {
    if (key = " "){
        startCounter = 0;
        bird.up();
    }

}

function Bird() {
    this.x=35;
    this.y=height/2;

    this.a = 0.1;
    this.v = 0;
    this.lift = -5;
    //this.rotAngle = -5;

    this.show = function() {
        if(this.v <= -6.5)
        {
            this.v = -6.5;
;       } 
        if(startCounter == 1)
        {
            this.x = 35;
            this.y = height/2;
            this.v = 0;
        }
        if(this.v < 0){
            push();
            translate(this.x,this.y);
            if(angle > 0){
                angle = 0;
            }
            angle = angle - 0.005;
            rotate(angle);
            image(birdImgup, 0, 0);
            pop();
        }
        if(this.v == 0){
            angle = 0;
            image(birdImgmid, this.x, this.y);
        }  
        if(this.v > 0){
            push();
            translate(this.x,this.y);
            if(angle < 0){
                angle = 0;
            }
            angle = angle + 0.005;
            rotate(angle);
            image(birdImgdown, 0, 0);
            pop();
        }
    }
    this.update = function() {
       // console.log(1);
        this.v += this.a;
        this.y += this.v;
        if(this.y > height-baseImg.height)
        {
            this.y = height-baseImg.height;
            this.v = 0;
        }

        if(this.y < 0)
        {
            this.y = 0;
            this.v = 0; 
        }
    }
    this.up = function() {
        this.v += this.lift;
        wavsound.play();
    }
}

function backGround(){
    this.x1 = 0;
    this.x2 = width;
    this.y = height-baseImg.height;
    this.speed = -1;
    
    
    this.update = function() {
        this.x1 += this.speed;
        this.x2 += this.speed;
    
        image(baseImg, this.x1, this.y, width);
        image(baseImg, this.x2, this.y, width);
        if(this.x1 <= -width)
        {
            this.x1 = width;
        }
        if(this.x2 <= -width)
        {
            this.x2 = width;
        }
    }
}

function Sky() {
    this.x1 = 0;
    this.x2 = width;
    this.y = 0;
    this.speed = -1;

    this.update = function() {
        this.x1 += this.speed;
        this.x2 += this.speed;
        image(chosebg, this.x1, this.y, width,height);
        image(chosebg, this.x2, this.y, width,height);
        if(this.x1 <= -width)
        {
            this.x1 = width;
        }
        if(this.x2 <= -width)
        {
            this.x2 = width;
        }
    }

}

function Pipes() {
    this.x = width;
    this.uplong = random(height/2);
    this.lowlong = height-baseImg.height-this.uplong-50;
    this.y1 = 0;
    this.y2 = height-this.lowlong;
    this.speed = -1;

    this.show = function(){
        //console.log(this.x);
        if(startCounter == 0){
            this.x += this.speed;
        }
        image(pipeup, this.x, this.y1, 50, this.uplong);
        image(pipedown, this.x, this.y2, 50, this.lowlong);
    }
    this.offscreen = function(){
        if(this.x < -50){
            return true;
        }
        else{
            return false;
        }
    }
    this.hits = function(bird){
        if(bird.y < this.uplong || bird.y > height-this.lowlong){
            if(bird.x > this.x  ){
                return true;
            }
        }
    }
}
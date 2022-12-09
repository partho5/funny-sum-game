var fulWid=window.innerWidth,rate,count=0,pos=5;
var xCord=0-fulWid;
document.getElementById("red-bar").style.width=fulWid-10 ;

/*animate() function definition starts.*/
function animate(){
    if(xCord<=-5)
        xCord+=pos;
    else {
        alert("Time up. "+" Your score:"+score);
        xCord=0-fulWid;
        score=0;
        document.getElementById("score-wrap").innerHTML="<br/>"+"SCORE: "+score;
    }
    document.getElementById("bar").style.marginLeft=xCord;
    restrict=setTimeout(function (){animate();},rate);
}

/*animate() function definition ends.*/

function unAnimate(){
    xCord=0-fulWid;
    clearTimeout(restrict);
}

function leftArrowPressed() {
    TRUE();
}

function rightArrowPressed() {
    FALSE();
}

document.onkeydown = function(evt) {
    evt = evt || window.event;
    switch (evt.keyCode) {
        case 37:
            leftArrowPressed();
            break;
        case 39:
            rightArrowPressed();
            break;
    }
};


function rand(min,max){
    return (Math.round(Math.random()*(max-min)+min));
}

var a,b,score=0;

function run(){
    a=rand(1,9);
    b=a+rand(0,9-a);
    realSum=a+b;
    sumToShow=realSum+rand(-1,1);
    document.getElementById("equation").innerHTML=a+"+"+b+"="+sumToShow;
    animate();
}

function easy(){
    rate=10;
    run();
}
function medium(){
    rate=7;
    run();
}
function hard(){
    rate=5;
    run();
}

function TRUE(){
    count++;
    if(realSum===sumToShow){
        score++;
        document.getElementById("score-wrap").innerHTML="<br/>"+"SCORE: "+score;
        unAnimate();
        run();
    }

    else{
        alert("wrong ! "+" Your score: "+score);
        score=0;
        document.getElementById("score-wrap").innerHTML="<br/>"+"SCORE: "+score;
        unAnimate();
        run();
    }
}

function FALSE(){
    count++;
    if(realSum===sumToShow){
        alert("wrong ! "+" Your score: "+score);
        score=0;
        document.getElementById("score-wrap").innerHTML="<br/>"+"SCORE: "+score;
        unAnimate();
        run();
    }

    else{
        score++;
        document.getElementById("score-wrap").innerHTML="<br/>"+"SCORE: "+score;
        unAnimate();
        run();
    }
}
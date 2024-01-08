var wk = document.addEventListener("keydown",function(event){
    var key = event.key;
    console.log(key);
    if(key === "w") {
        var audio = new Audio("./sounds/tom-3.mp3");
        audio.play();
        animationButton("w");
    }
});
var ak = document.addEventListener("keydown",function(event){
    var key = event.key;
    if(key === "a") {
        var audio = new Audio("./sounds/tom-4.mp3");
        audio.play();
        animationButton("a");
    }
});
var sk = document.addEventListener("keydown",function(event){
    var key = event.key;
    if(key === "s") {
        var audio = new Audio("./sounds/tom-1.mp3");
        audio.play();
        animationButton("s");
    }
});
var dk = document.addEventListener("keydown",function(event){
    var key = event.key;
    if(key === "d") {
        var audio = new Audio("./sounds/tom-2.mp3");
        audio.play();
        animationButton("d");
    }
});
var jk = document.addEventListener("keydown",function(event){
    var key = event.key;
    if(key === "j") {
        var audio = new Audio("./sounds/snare.mp3");
        audio.play();
        animationButton("j");
    }
});
var kk = document.addEventListener("keydown",function(event){
    var key = event.key;
    if(key === "k") {
        var audio = new Audio("./sounds/crash.mp3");
        audio.play();
        animationButton("k");
    }
});
var lk = document.addEventListener("keydown",function(event){
    var key = event.key;
    if(key === "l") {
        var audio = new Audio("./sounds/kick-bass.mp3");
        audio.play();
        animationButton("l");
    }
});



var wc = document.querySelector(".w").addEventListener("click",function() {
    var audio = new Audio("./sounds/tom-3.mp3");
    audio.play();
    animationButton("w");
});
var ac = document.querySelector(".a").addEventListener("click",function() {
    var audio = new Audio("./sounds/tom-4.mp3");
    audio.play();
    animationButton("a");
});
var sc = document.querySelector(".s").addEventListener("click",function() {
    var audio = new Audio("./sounds/tom-1.mp3");
    audio.play();
    animationButton("s");
});
var dc = document.querySelector(".d").addEventListener("click",function() {
    var audio = new Audio("./sounds/tom-4.mp3");
    audio.play();
    animationButton("d");
});
var jc = document.querySelector(".j").addEventListener("click",function() {
    var audio = new Audio("./sounds/snare.mp3");
    audio.play();
    animationButton("j");
});
var kc = document.querySelector(".k").addEventListener("click",function() {
    var audio = new Audio("./sounds/crash.mp3");
    audio.play();
    animationButton("k");
});
var lc = document.querySelector(".l").addEventListener("click",function() {
    var audio = new Audio("./sounds/kick-bass.mp3");
    audio.play();
    animationButton("l");
});


function animationButton(cl) {
    var bt = document.querySelector("."+cl);
    setTimeout(function (){
        bt.classList.toggle("pressed");
    },100);
    bt.classList.toggle("pressed");
}
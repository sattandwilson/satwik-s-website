function exMain() {
    location.replace('main.html');
}
function exIndex() {
    location.replace('index.html');
}

let c = document.getElementById("cards");
let p = document.getElementById("points");
function rand() {
    return Math.floor(Math.random()*20)+2;
}
let cOne;
let cTwo;
let pSum=0;
let crd=[];

function fSpin() {
    cOne = rand();
    cTwo = rand();
    cOne = Number.parseInt(cOne);
    cTwo = Number.parseInt(cTwo);
    c.innerHTML+= cOne+" "+ cTwo+" ";
    pSum += cOne+cTwo;
    p.textContent="POINTS:"+pSum;
    resShow();
}

// getCard()=false;
let cNew;
function getCard() {
    if (pSum<1){
        return;
    }
    else{
        cNew = rand();
        cNew = Number.parseInt(cNew);
        c.innerHTML+=cNew+" ";
        pSum+=cNew;
        p.innerHTML="POINTS:"+pSum;
        resShow();
    }
}
function newOne() {
    location.reload('main.html');
}
let res= document.getElementById("result");
let massage = document.getElementById("greeting");
// let img = document.getElementById("res-img").src;
function resShow() {
    if (pSum<21 && pSum>1){
        massage.innerHTML="YOU ARE STILL IN THE GAME :)";
        document.getElementById("res-img").src="happy-emoji.jpg";
    }
    else if (pSum>21){
        massage.innerHTML="OUT OF THE GAME :(";
        document.getElementById("res-img").src="sad-emoji.jpg";
    }
    else if (pSum==21){
        massage.innerHTML="WEHHE! YOU GOT THE BLACK JACK!!!";
        document.getElementById("res-img").src="blackcube-3.jpg";
    }
    else if (pSum<1) {
        massage.innerHTML="SPIN YOUR CARDS FIRST :|";
        document.getElementById("res-img").src="casinoSpin.jpg";
    }
}
function render() {
    resShow();
    res.classList.add("openup");
}
// let r=document.getElementById("render")
// r.addEventListener("click", function(){
//     getCard(
        
//     )
// });
function hide() {
    res.classList.remove("openup");
}



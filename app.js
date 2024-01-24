let gameseq=[];
let userseq=[];
let btn=["red","yellow","blue","green"];
start=false;
let i=1,j=0;
let h=document.querySelector("h2");
let audio=document.getElementById("game_over");
document.addEventListener("keypress",function(){
    if(start==false){
        h.innerText="Level "+i;
        setTimeout(auto,800);
        start=true;
        audio.pause()
    }
});
function btnflash(btn) {
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },200);
}
function check(index){
        if(userseq[index-1]===gameseq[index-1]){
            if(userseq.length==gameseq.length){
                setTimeout(i++,1000);
                h.innerText="Level "+i;
                if(i>j){
                    j=i;
                }
                userseq=[];
                setTimeout(auto,800);
            }
        }
    else{
        h.innerHTML="Game Over! Your Score is "+i+". High Score is "+j+".<br> Click to Start a New Game";
        document.querySelector("*").style.backgroundColor="red";
        document.querySelector(".boxes").style.backgroundColor="red";
        audio.play();
        setTimeout(loss,20);
        reset();
    }
}
function auto(){
    let rand=Math.floor(Math.random()*4);
    let color=btn[rand];
    let button=document.querySelector("."+color);
    gameseq.push(color);
    btnflash(button);
    console.log(gameseq);
    user();
}
function keypres(){
    btnflash(this);
    let col=this.getAttribute("id");
    userseq.push(col);
    console.log(userseq);
    check(userseq.length);
}
function user() {
    let allbtns=document.querySelectorAll(".box");
    for(b of allbtns){
        b.addEventListener("click",keypres);
    }  
}
function reset(){
    userseq=[];
    gameseq=[];
    start=false;
    i=1;
}
function loss(){
    document.querySelector("*").style.backgroundColor="bisque";
    document.querySelector(".boxes").style.backgroundColor="bisque";
}

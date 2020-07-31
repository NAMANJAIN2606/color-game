var numsq=6;
var color = [];
var pickedcolor;
var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var reset = document.querySelector("#reset");
var mode=document.querySelectorAll(".mode");

init();
function init(){
    setupmode();

    setupsq();

    change();
}

function setupmode(){
    for(var i=0;i<mode.length;i++){
        mode[i].addEventListener("click",function(){
            mode[0].classList.remove("selected");
            mode[1].classList.remove("selected");
            this.classList.add("selected");
            if(this.textContent==="Easy"){
                numsq=3;
            }
            else{
                numsq=6;
            }
    
            change();
        });
    }
}

function setupsq(){
    for(var i=0; i<squares.length; i++){
        squares[i].addEventListener("click",function(){
            var clickedColor = this.style.backgroundColor;
            if(clickedColor === pickedcolor){
                messageDisplay.textContent="Correct!"
                reset.textContent="Play Again?"
                changeColors(clickedColor);
                h1.style.backgroundColor=clickedColor;
            }
            else{
                this.style.backgroundColor="#232323";
                messageDisplay.textContent="Try Again"
            }
        });
    }
}


function change(){
    reset.textContent = "New Colors"
    h1.style.backgroundColor="steelblue";
    messageDisplay.textContent=""
    color = generateColors(numsq);
    pickedcolor = pickColor();
    colorDisplay.textContent = pickedcolor;
    for(var i=0;i<squares.length;i++){
        if(color[i]){
            squares[i].style.display="block";
            squares[i].style.backgroundColor=color[i];
        }
        else{
            squares[i].style.display="none";
        }
    }
}



reset.addEventListener("click",function(){
    change();   
});



function changeColors(color){
    for(var i=0; i<squares.length; i++){
        squares[i].style.backgroundColor=color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random()*color.length);
    return color[random];
}

function generateColors(num){
    var arr=[]
    for(var i=0 ; i< num; i++){
        arr.push(randomColor())
    }
    return arr;
}

function randomColor(){
    var r =Math.floor(Math.random()*256);
    var g =Math.floor(Math.random()*256);
    var b =Math.floor(Math.random()*256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}
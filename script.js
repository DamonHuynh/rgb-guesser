const color = document.getElementById("color");

const redInput = document.querySelector(".red");
const greenInput = document.querySelector(".green");
const blueInput = document.querySelector(".blue");

const redResult = document.getElementById("redResult");
const greenResult = document.getElementById("greenResult");
const blueResult = document.getElementById("blueResult");


function playGame(){
    const red = Math.floor(Math.random() * 257);
    const green = Math.floor(Math.random() * 257);
    const blue = Math.floor(Math.random() * 257);
    color.style.backgroundColor = `rgb(${red}, ${green},${blue})`; 
    redInput.addEventListener('keyup', function(e){
        redResult.textContent = checkValue(e, redInput.value, red);
    });    
    greenInput.addEventListener('keyup', function(e){
        greenResult.textContent = checkValue(e, greenInput.value, green);
    });
    blueInput.addEventListener('keyup', function(e){
        blueResult.textContent = checkValue(e, blueInput.value,blue);
    });
    

}





  function checkValue(e, value, actualColor){
    if (e.keyCode === 13) {
        if(value >= actualColor - 5 && value <= actualColor + 5){
            return "Correct";
        }
        if(value > actualColor){
            return "Go lower";
        }
        if(value < actualColor){
            return "Go higher";
        }
    }
  }

  playGame();
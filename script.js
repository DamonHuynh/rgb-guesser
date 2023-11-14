const color = document.getElementById("color");

const redInput = document.querySelector(".red");
const greenInput = document.querySelector(".green");
const blueInput = document.querySelector(".blue");

const redResult = document.getElementById("redResult");
const greenResult = document.getElementById("greenResult");
const blueResult = document.getElementById("blueResult");

const restart = document.getElementById("restart");


function playGame(){
    const red = randomValue();
    const green = randomValue();
    const blue = randomValue();
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
function randomValue (){
    return Math.floor(Math.random() * 257);
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
  function reset(input, resultText){
    input.value = "";
    resultText.textContent ="";
  }

  restart.addEventListener("click",() =>{
    reset(redInput, redResult);
    reset(greenInput, greenResult);
    reset(blueInput, blueResult);
    playGame();
  });
  playGame();
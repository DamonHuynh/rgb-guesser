const color = document.getElementById("color");

const redInput = document.querySelector(".red");
const greenInput = document.querySelector(".green");
const blueInput = document.querySelector(".blue");

const redText = document.getElementById("red");
const greenText = document.getElementById("green");
const blueText = document.getElementById("blue");


function playGame(){
    const red = Math.floor(Math.random() * 257);
    const green = Math.floor(Math.random() * 257);
    const blue = Math.floor(Math.random() * 257);
    color.style.backgroundColor = `rgb(${red}, ${green},${blue})`; 
    redInput.addEventListener('keyup', function(e){
        redText.textContent = checkValue(e, redInput.value, red);
    });    
    greenInput.addEventListener('keyup', function(e){
        greenText.textContent = checkValue(e, greenInput.value, green);
    });
    blueInput.addEventListener('keyup', function(e){
        blueText.textContent = checkValue(e, blueInput.value,blue);
    });
    

}





  function checkValue(e, value, actualColor){
    if (e.keyCode === 13) {
        if(value == actualColor){
            return "That's correct!";
        }
        if(value > actualColor){
            return "The actual value is lower";
        }
        if(value < actualColor){
            return "The actual value is higher";
        }
    }
  }

  playGame();
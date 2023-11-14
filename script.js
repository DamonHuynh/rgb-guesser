const color = document.getElementById("color");
const inputs = document.querySelectorAll("input");

function randomColor(){
    const red = Math.random() * 257;
    const green = Math.random() * 257;
    const blue = Math.random() * 257;
    color.style.backgroundColor = `rgb(${red}, ${green},${blue})`;

}


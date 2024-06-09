const mydiv= document.getElementById('mydiv');



const colors = ["red", "blue","orange", "green", "yellow", "purple"];
let ColorIndex = 0;

function changeColor(event) {
    event.target.style.backgroundColor = colors[ColorIndex];


    ColorIndex = (ColorIndex + 1) % colors.length;
}


document.getElementById("mydiv").addEventListener("click", changeColor);
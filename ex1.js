const mydiv =document.getElementById("mydiv") ;

function changeColor(event){
event.target.style.backgroundColor="tomato";
event.target.textContent="how i can help you"
}
mydiv.addEventListener("mouseover",changeColor);

mydiv.addEventListener("mouseout",event =>{
event.target.style.backgroundColor = "yellow";
event.target.textContent="Hello world"

});

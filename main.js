canvas=document.getElementById("myCanvas");
ctx = canvas. getContext("2d");

var mouseEvent = "";
var last_position_of_x, last_position_of_y;
color= ""
width_of_line = ""
radius = ""
canvas.addEventListener("mousedown", my_mouseDown);

function my_mouseDown(e)
{
color=document.getElementById("color").value
width_of_line=document.getElementById("width_of_line").value
radius = document.getElementById("radius").value
mouseEvent="mousedown";

}

canvas.addEventListener("mouseup", my_mouseUp);

function my_mouseUp(e)
{
mouseEvent ="mouseup"    
}


canvas.addEventListener("mouseleave", my_mouseLeave);

function my_mouseLeave(e)
{
mouseEvent ="mouseleave"    
}

canvas.addEventListener("mousemove", my_mouseMove);

function my_mouseMove(e)
{
current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
current_position_of_mouse_y = e.clientY - canvas.offsetTop;

if(mouseEvent == "mousedown")
{
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = width_of_line;
ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius, 0,  2 * Math.PI)

console.log("last Position Of X And Y Coordinates =");
console.log("X="+ last_position_of_x + "Y=" + last_position_of_y);

ctx.moveTo(last_position_of_x, last_position_of_y);

console.log("Current Position Of X And Y Coordinates =");
console.log("X=" + current_position_of_mouse_x + "Y=" + current_position_of_mouse_y );

ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
ctx.stroke();
}
last_position_of_x = current_position_of_mouse_x;
last_position_of_y = current_position_of_mouse_y;
}
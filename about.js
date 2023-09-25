let canvas=document.querySelector(".scratch");
let container=document.querySelector("#hobby")
let context=canvas.getContext("2d");

const init= function(){
if("(min-width: 950px)"){
canvas.width=600;
canvas.height=200;
context.fillStyle="#14213D";
context.fillRect(0,0,600,200) 
}
else if("(max-width:640px)"){
canvas.width=300;
canvas.height=350;
context.fillStyle="#14213D";
context.fillRect(0,0,300,350) 
}}

init();


let isDragging = false;


const scratch = (x,y) =>{
  context.globalCompositeOperation="destination-out";
  context.beginPath();
  context.arc(x,y,30, 0, 2*Math.PI);
  context.fill();
}

/*mouse moves*/
canvas.addEventListener("mousedown", (e) =>{
  isDragging=true;

  scratch(e.offsetX, e.offsetY);

})

canvas.addEventListener('mousemove', (e) =>{
 if(isDragging){
  scratch(e.offsetX, e.offsetY);
 }
})

canvas.addEventListener("mouseup", (e)=>{
  isDragging=false;
})

canvas.addEventListener('mouseleave', (e)=>{
  isDragging=false;
}
)

/*touching screens*/
canvas.addEventListener("touchstart", (e) =>{
  isDragging=true;

  scratch(e.offsetX, e.offsetY);

})

canvas.addEventListener("touchmove", (e) =>{
 if(isDragging){
  scratch(e.offsetX, e.offsetY);
 }
})

canvas.addEventListener("touchend", (e)=>{
  isDragging=false;
})

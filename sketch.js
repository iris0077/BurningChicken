// taille du canvas variable 
let canvasX = 600;
let canvasY = 300;


function setup() {
  createCanvas(canvasX, canvasY);
  createCanvas(windowWidth, windowHeight);

  positionX = 0;
  positionY = height / 2;
}
  
document.onmousemove = function(e) {
    const chicken = document.getElementById("chicken");
    chicken.style.position = "absolute"; // obligatoire pour pouvoir le déplacer
    chicken.style.left = e.pageX + "px";
    chicken.style.top = e.pageY + "px";
  };
  

    
     

  
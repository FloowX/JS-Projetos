function setup() {
    createCanvas(700, 700);
    background("green");
  }
  
  function draw() {
    
    
    
    stroke("black")
    fill("red")
    
    // console.log(mouseIsPressed);
    
    if (mouseIsPressed){
      rect( mouseX, mouseY , 50 ,50); 
    }
  }
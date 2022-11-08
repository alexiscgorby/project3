
function leftdoorone() {

    this.setup = function() {
    
    }

    this.draw = function() {
        background("#384440");
  
        woodFloor();
        
        mirrorWall ();    }


 this.mouseClicked = function() {
 this.sceneManager.showScene(sketch);

    }
}



function mirrorWall() {
  stroke(5);
  noFill;
  rect(50, 100, 200, 200)
  rect(300, 200, 200,300)
  rect(80, )
  
}

function woodFloor () {
   fill("rgb(36,36,34) ")
  rect(0, 600, 800)
  
  fill("rgb(36,36,34)")
  rect(0, 600, 150, 40)
  
  fill("rgb(59,50,42)")
  rect(150, 600, 150, 40)
  
   fill("rgb(42,38,32)")
  rect(300, 600, 150, 40)
  
   fill("rgb(58,49,39)")
  rect(450, 600, 150, 40)
  
   fill("rgb(36,36,34)")
  rect(600, 600, 150, 40)
  
   fill("rgb(59,51,38)")
  rect(750, 600, 150, 40)
  
   fill("rgb(58,49,39)")
   rect(0,640,50,50)
  
  fill("rgb(36,36,34)")
  rect(50, 640, 150, 50)
  
  fill("rgb(42,38,31)")
  rect(200, 640, 150, 50)
  
  fill("rgb(59,50,42)")
  rect(350, 640, 150, 50)
  
   fill("rgb(39,34,29)")
  rect(500, 640, 150, 50)
  
  fill("rgb(42,38,32)")
  rect(650, 640, 150, 50)
  
  fill("rgb(42,38,32)")
  rect(0, 690, 130, 60)
  
  fill("rgb(58,49,39)")
  rect(130, 690, 150, 60)
  
  fill("rgb(36,36,34)")
  rect(280, 690, 150, 60)
  
  fill("rgb(42,38,31)")
  rect(430, 690, 150, 60)
  
  fill("rgb(59,50,42)")
  rect(580, 690, 150, 60)
  
  fill("rgb(36,36,34)")
  rect(730, 690, 150, 60)
  
  fill("rgb(36,36,34)")
  rect(0, 750, 50, 70)
  
  fill("rgb(42,38,31)")
  rect(50, 750, 150, 70)
  
  fill("rgb(36,36,34)")
  rect(200, 750, 150, 70)
  
  fill("rgb(58,49,39)")
  rect(350, 750, 150, 70)
  
  fill("rgb(39,34,29)")
  rect(500, 750, 150, 70)
  
  fill("rgb(36,36,34)")
  rect(650, 750, 150, 70)
}
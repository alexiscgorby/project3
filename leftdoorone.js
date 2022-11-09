
function leftdoorone() {

    let capture;

    this.enter = function(){
      capture=createCapture(VIDEO);
      capture.hide();
      frameRate(5);
    }
    this.draw = function(){
    
    background("black");
    fill("white")
    textSize(48)
       text("who are you, really? don't look away.", 4, 660)
      if (frameCount % 20==0) {
            image(capture,50, 100, 200, 200);
            image(capture,300, 200, 200, 300);
            image(capture,350, 50, 250, 100);
            image(capture,650, 100, 100, 430);
            image(capture,550, 230, 50,50);
            image(capture,550, 410, 50,50);
            image(capture,550, 320, 50,50);
            filter(POSTERIZE, 3); 
            fill("white")
            textSize(52)
            text(random(words), 120, 350) 
            } else {
            
            image(capture,200, 100, 400, 400);
            
            }

    }
    this.mouseClicked = function(){
        this.sceneManager.showScene(sketch);
    }
    
    this.mirrorWall = function() {
        stroke(10);
        noFill;
        rect(50, 100, 200, 200)
        rect(300, 200, 200,300)
        rect(120, 350, 100,130)
        rect(350, 50, 250, 100)
        rect(650, 100, 100, 430)
        rect(550, 230, 50,50)
        rect(550, 410, 50,50)
        rect(550, 320, 50,50)
    }  
    
}
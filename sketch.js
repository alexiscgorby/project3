function sketch (){
  let img;
  let font;

  this.setup = function(){  
    img = loadImage('assets/tvroom.jpg')
    colors =[color("black"), color("red"), color("yellow"), color("pink"), color("blue"), color("darkblue"), color("white"), color("green")];
    font = loadFont ("assets/Urbanist-VariableFont_wght.ttf");
    words = [("you"),("they\nsee"),("feeling\nokay?"),("who\nare\nyou?"),("do\nyou\nknow?"),("are\nyou\nokay?"),("they\nwatch"),("they\nwait"),("did\nyou\nhear?"),("are\nyou\nreal?"),("they\nare\nwatching")];
   }
  
  this.enter = function() { 
    frameRate(2);
     noStroke();
     textFont(font); 
     rectMode(CENTER); 

   }   

   this.draw = function() {   
     background("black");    
    image(img,0,0, 800,788);

   //tv static
    
   this.drawStatic(); 
   if 
    (frameCount % 3 == 0){
    this.glitch() == true
  } 
  else { 
  
   fill("black");
   rect(423, 326, 36,34);
  fill("white");
   textSize(8);
   text(random(words), 413, 318);
  }
  
   
  //end tv statics
    //door text
  this.doorsRight();
  this.doorsLeft();

    //end door text
  }
  //mouse clicked function for going to different stages when you click on the doors 
  this.mouseClicked = function() {
    if (collidePointRect(mouseX, mouseY, 10, 10, 180, 600))
    {this.sceneManager.showScene(leftdoorone);}

    }

    this.glitch = function(){
      fill(random(colors))
    }
  
  //this is the tv animation function 
  this.drawStatic = function() {

    {fill(random(colors));
    rect(411, 338, 6, 6);

    fill(random(colors));
    rect(411, 332, 6, 6);

    fill(random(colors));
    rect(411, 320, 6, 17);

    fill(random(colors));
    rect(417, 320, 6, 17);

    fill(random(colors));
    rect(417, 332, 6, 6);

    fill(random(colors));
    rect(417, 338, 6, 6);
    
    fill(random(colors));
    rect(423, 320, 6, 17);

    fill(random(colors));
    rect(423, 332, 6, 6);

    fill(random(colors));
    rect(423, 338, 6, 6);

    fill(random(colors));
    rect(429, 320, 6, 17);

    fill(random(colors));
    rect(429, 332, 6, 6);

    fill(random(colors));
    rect(429, 338, 6, 6);

    fill(random(colors));
    rect(435, 320, 6, 17);
    
    fill(random(colors));
    rect(435, 332, 6, 6);

    fill(random(colors));
    rect(435, 338, 6, 6);
    }

  }

  //this is the right side door text
  this.doorsRight = function () {
    fill(9.8,9.8,43.9,150);
    textStyle("bold");
    textSize (50); 
    text ("1", 700,240,); 

    textSize(20);
    fill(9.8,9.8,43.9,150);
    textStyle("bold");
    text("2", 533, 280);

    textSize(12); 
    fill(100,149,237,150);
    textStyle("bold");
    text("3", 473, 300);
  }

  //this is the left side door text 
  this.doorsLeft = function() {

  textSize(12); 
  fill(100,149,237,150);
  text("3", 366, 298);

    textSize(22);
    fill(9.8,9.8,43.9,150);
    text("2", 268, 278);

    fill(9.8,9.8,43.9,150);
    textSize (50); 
    text ("1", 76,240); 
  }
}
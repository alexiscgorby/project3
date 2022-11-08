let img;
let font;
let tvX;
let tvY;
let doorX;
let doorY;
let colors= [("black"), ("pink"), ("red"), ("blue"), ("darkblue"), ("yellow"), ("green"), ("white")];

function sketch (){

  this.preload = function(){
    img = loadImage("assets/tvroom.jpg");
    font = loadFont ("assets/Urbanist-VariableFont_wght.ttf")
    }
 
  this.setup = function() {
  frameRate(2);
  noStroke();
  textFont(font); 
  rectMode(CENTER);

}
  this.draw = function() {
  background("black");
  image(img, 0,0, 800, 788);
  
  //tv static
   
  drawStatic(tvX, tvY);
  if (frameCount % 60 == 0) {
    fill(random(colors));}
  //end tv static

  //door text
  doorsRight(doorX, doorY);
  doorsLeft(b, doorX, doorY);

  //end door text
}

//mouse clicked function for going to different stages when you click on the doors 
this.mouseClicked = function () {
  if (collidePointRect(mouseX, mouseY, 200, 200, 100, 150)) {
    this.sceneManager.showScene(leftdoorone);
  }
}

//this is the tv animation function 
this.drawStatic = function(_tvX, _tvY) { 
  
  fill(random(colors));
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

//this is the right side door text
this.doorsRight = function (_doorX, _doorY, ) {
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
this.doorsLeft = function (_b, _doorX, _doorY) {

 textSize(12); 
 fill(100,149,237,150);
 text("3", 366, 298);

  textSize(22);
  fill(9.8,9.8,43.9,150);
  text("2", 268, 278);

  fill(9.8,9.8,43.9,150);
  textSize (50); 
  text ("1", 76,240,); 
}
}

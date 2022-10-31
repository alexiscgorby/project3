let img;
let font;

function preload(){
  img = loadImage("assets/tvroom.jpg");
  font = loadFont ("assets/Urbanist-VariableFont_wght.ttf")
}
//how to resize window to just show the image
//how to not allow for scrolling arounf the page 
//how to create links to new webpages when you click on the doors 
function setup() {
  createCanvas(2000, 2000);
  textFont(font); 
  
}
function draw() {
  background("black");
  image(img, 0,0, 600, 600);

  //need to fix rotation of numbers on doors 
  //how to mirror text 

  fill(9.8,9.8,43.9,150);
  textStyle("bold");
  textSize (50); 
  text ("1", 525,192,); 

  textSize(20);
  fill(9.8,9.8,43.9,150);
  textStyle("bold");
  text("2", 397, 220);

  textSize(8); 
  fill(100,149,237,150);
  textStyle("bold");
  text("3", 354, 232);

  textSize(9); 
  fill(100,149,237,150);
  textStyle("bold");
  text("3",274, 233);

  textSize(20);
  fill(9.8,9.8,43.9,150);
  textStyle("bold");
  text("2", 200, 225);

  fill(9.8,9.8,43.9,150);
  textStyle("bold");
  textSize (50); 
  text ("1", 50,205,); 

  // make and animation for the tv where it flickers between different shape colors and questions

}


//how to click on certain objects and go to a new drawing/webpage
//how to resize window where it only shows the image
// how to make window stay in one place on image where you cant scroll 

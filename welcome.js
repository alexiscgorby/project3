
let mgr;
function setup () {
     
    createCanvas(800, 788);
    mgr = new SceneManager();
    mgr.wire(); 
    mgr.showScene(sketch);
}

function draw () {
    mgr.draw();

}

function mouseClicked() {
   
}
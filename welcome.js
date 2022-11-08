
let mgr;

function setup () {
     
    createCanvas(800, 788);
    mgr = new SceneManager();
    mgr.wire(); 
    
}

function draw () {
    mgr.draw();

}

function mouseClicked() {
    mgr.showScene(sketch);
}
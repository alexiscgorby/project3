let mgr;

function setup () {
    createCanvas(800, 788);
    mgr = new SceneManager ();
    mgr.wire();
    mgr.showScene(sketch);
    textFont (font)

}

function draw () {
    mgr.draw();
    background("black");
    fill("white");
    text("Welcome", width/2)

}

function mouseClicked() {
    if (true) {
     mgr.showScene(sketch);

    }
}
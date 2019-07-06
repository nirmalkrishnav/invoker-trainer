let Application = PIXI.Application,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    Sprite = PIXI.Sprite;

let app = new PIXI.Application({
    width: 256,         // default: 800
    height: 256,        // default: 600
    antialias: true,    // default: false
    transparent: false, // default: false
    resolution: 1,       // default: 1
    forceCanvas: true,
}
);
app.renderer.backgroundColor = '0x743459';
app.renderer.view.style.position = "absolute";
app.renderer.view.style.display = "block";
app.renderer.autoDensity = true;
app.renderer.resize(window.innerWidth, window.innerHeight);

//Add the canvas that Pixi automatically created for you to the HTML document
document.body.appendChild(app.view);

//teture
//load an image and run the `setup` function when it's done
loader
    .add("assets/images/hero.png")
    .load(setup);

//This `setup` function will run when the image has loaded
function setup() {

    //Create the cat sprite
    let cat = new Sprite(resources["assets/images/hero.png"].texture);

    //Add the cat to the stage
    app.stage.addChild(cat);
}
import engine from '../libs/Engine/Engine';
import Scene from '../libs/Engine/Scene';

//Create and set scene
const scene = new Scene();
engine.scene(scene);

export default scene;

const canvas = document.getElementById('canvas');


engine.setContext(canvas);




UpdateCanvas();

window.onresize = function(event) {
    UpdateCanvas();
};

function UpdateCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
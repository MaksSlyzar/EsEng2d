import engine from '../libs/Engine/Engine';


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
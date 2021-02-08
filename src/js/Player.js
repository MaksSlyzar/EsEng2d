import engine from '../libs/Engine/Engine';
import RectObject from '../libs/Engine/RectObject'
import TextView from '../libs/Engine/UI/TextView';
import scene from './Game';

let score = 0;

//Create text
const text = new TextView();
text.fontSize = 28;
text.x = 25;
text.y = -20;


//Create player
const player = new RectObject();
player.color = 'white';
player.y = 60;
player.x = 100;

//player.add(text);

//Add player in scene
scene.add(player);

player.add(text);


//Update function
engine.update(Update);
function Update() {

}

//Keydown function
engine.onkeydown(KeyDown);
function KeyDown(e) {
    if (e['d']) {
        player.x += 1;
    }
    if (e['a']) {
        player.x -= 1;
    }
    if (e['w']) {
        player.y -= 1;
    }
    if (e['s']) {
        player.y += 1;
    }

    if (player.y < 60) {
        player.y = 60;
    }
    if (player.x < 0)
        player.x = 0;
    if (player.x > canvas.width - player.width)
        player.x = canvas.width - player.width;
    if (player.y > canvas.height - player.height)
        player.y = canvas.height - player.height;
}

//playerOnClick function
engine.onClickObject(player, playerOnClick);
function playerOnClick() {
    score += 1;
    text.text = `Score: ${score}`;
}
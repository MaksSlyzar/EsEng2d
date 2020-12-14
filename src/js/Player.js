import engine from '../libs/Engine/Engine';
import RectObject from '../libs/Engine/RectObject'


const player = new RectObject();
player.color = 'white';

const apple = new RectObject();
apple.x = 100;
apple.color = 'red';

//Update function
engine.update(Update);
function Update() {
    engine.draw(player);
    engine.draw(apple);
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
}

//playerOnClick function
engine.onClickObject(player, playerOnClick);
function playerOnClick() {
    console.log('Yes');
}
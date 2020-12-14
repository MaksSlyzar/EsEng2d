class Engine {
    constructor () {
        this.updates = [];
        this.keydowns = [];

        this.events();

        this.updateInterval = setInterval( () => { this.updatePrivate(this.ctx, { updates: this.updates, keydowns: this.keydowns}, { keyboardKeys: this.keyboardKeys }) }, 1);
    }

    events() {
        this.keyboardKeys = {};
        document.onkeydown = (e) => {
            this.keyboardKeys[e.key.toLocaleLowerCase()] = true;
        }
        document.onkeyup = (e) => {
            if (this.keyboardKeys[e.key.toLocaleLowerCase()]) {
                this.keyboardKeys[e.key.toLocaleLowerCase()] = false;
            }
        }
    }

    setContext(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
    }

    updatePrivate(ctx, functions, dep) {
        if (this.ctx) {
            //Clear canvas
            this.ctx.fillStyle = 'black';
            this.ctx.fillRect(0, 0, canvas.width, canvas.height);

            //Run update functions
            for (let func_ind in functions.updates) {
                functions.updates[func_ind]();
            }

            //Run keydown functions
            for (let func_ind in functions.keydowns) {
                functions.keydowns[func_ind](dep.keyboardKeys);
            }
        }
    }

    onkeydown(func) {
        this.keydowns.push(func);
    }

    update(func) {
        this.updates.push(func);
    }

    draw(object) {
        if (object.type == 'RectObject') {
            this.ctx.fillStyle = object.color;
            this.ctx.fillRect(object.x, object.y, object.width, object.height);
        }
    }

    onClickObject(object, func) {
        func();
        document.onclick = (e) => {
            if (e.clientX >= object.x && e.clientX <= object.x + object.width) {
                if (e.clientY >= object.y && e.clientY <= object.y + object.height) {
                    func();
                }
            }
        }
    }
}

const engine = new Engine();

export default engine;
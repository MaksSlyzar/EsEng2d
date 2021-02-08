class Engine {
    constructor () {
        this.updates = [];
        this.keydowns = [];
        this.clickFunctions = [];
        this.events();

        let self = this;

        this.updateInterval = setInterval( () => { 
            this.updatePrivate( self )}, 1);
        
        document.onclick = (e) => { this.onClickPrivate(e) }
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

    updatePrivate(self) {
        if (self.ctx) {

            //Clear canvas
            self.ctx.fillStyle = 'black';
            self.ctx.fillRect(0, 0, canvas.width, canvas.height);

            //Run update functions
            for (let func_ind in self.updates) {
                self.updates[func_ind]();
            }

            //Run keydown functions
            for (let func_ind in self.keydowns) {
                self.keydowns[func_ind](self.keyboardKeys);
            }
            
            //Draw objects
            if (self.scene){
                for (let obj_ind in self.scene.objects) {
                    //self.scene.objects[obj_ind].draw(self.ctx);
                    DrawObject(null, self.scene.objects[obj_ind], self);

                    function DrawObject(prev, object, self) {
                        if (prev) {
                            object.GlobalX = prev.GlobalX + object.x;
                            object.GlobalY = prev.GlobalY + object.y;
                        }else {
                            object.GlobalX = object.x;
                            object.GlobalY = object.y;
                        }

                        object.draw(self.ctx);
                        
                        for (let i in object.objects) {
                            DrawObject(object, object.objects[i], self);
                        }
                    }
                }
            }
        }
    }

    scene(object) {
        this.scene = object;
    }

    onkeydown(func) {
        this.keydowns.push(func);
    }

    update(func) {
        this.updates.push(func);
    }

    onClickObject(object, func) {
        
        this.clickFunctions.push({ object: object, func: func });
    }

    onClickPrivate(e) {
        console.log(this.clickFunctions)
        for (let i in this.clickFunctions) {
            let object = this.clickFunctions[i].object;
            let func = this.clickFunctions[i].func;

            if (e.clientX >= object.GlobalX && e.clientX <= object.GlobalX + object.width) {
                if (e.clientY >= object.GlobalY && e.clientY <= object.GlobalY + object.height) {
                    func();
                }
            }
        }
    }
}

const engine = new Engine();

export default engine;
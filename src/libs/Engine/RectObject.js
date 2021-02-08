export default class RectObject {
    constructor (x = 0, y = 0, width = 50, height = 50, color = 'yellow', collision = false, draw = true) {
        this.type = 'RectObject';
        //this.draw = draw;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.collision = collision;
    }

    draw(ctx, x, y, width, height) {
        if (x  == undefined) {
            x = this.x;
            y = this.y;

            width = this.width;
            height = this.height;
            
            if (this.prev.x != undefined && this.prev.y != undefined) {
                
                x += this.prev.x;
                y += this.prev.y;
            }
            ctx.fillStyle = this.color;
            ctx.fillRect(x, y, width, height);
        }else {
            ctx.fillStyle = this.color;
            ctx.fillRect(x, y, width, height);
        }
        
        
    }
}
export default class RectObject {
    constructor (x = 0, y = 0, width = 50, height = 50, color = 'red') {
        this.type = 'RectObject';
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }
}
export class Snake {

    constructor() {
        const canvas = document.querySelector('canvas');
        this.ctx = canvas.getContext('2d');
        this.x = 10;
        this.y = 10;
        this.size = 40;
       
    }
    move() {
        switch (this.direction) {
            case 'left':
                this.x--;
                break;
            case 'right':
                this.x++;
                break;
            case 'down':
                this.y++;
                break;
            case 'up':
                this.y--;
                break;
        }
    }
}
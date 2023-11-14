export class SNAKE {

    constructor() {
        const canvas = document.querySelector('canvas');
        const ctx = canvas.getContext('2d');
        this.x = 6;
        this.y = 6;
        this.size = 60;
        console.log('Hello Snake 1');
    }
    moveLeft(){
        this.x--;
    }
    moveRight(){
        this.x++;
    }
    moveDown(){
        this.y++;
    } 
    moveUp(){
        this.y--;
    }
}